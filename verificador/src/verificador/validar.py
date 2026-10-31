"""Punto de entrada único de la validación: una nota y sus enriquecimientos entran, un informe sale.

Une las tres piezas del paquete:
  1. verificación por código (`verificacion`): ¿lo que devolvió el modelo está en la nota?
  2. pasaje (`pasaje`, `texto.ubicar`): la cita se copia de la nota, nunca la redacta un modelo.
  3. cruce con series oficiales (`series`): coincide / difiere / sin serie / sin dato oficial.

El informe es JSON puro (`informe.model_dump(mode="json")`), así que lo puede consumir el
backend, la interfaz o un servicio aparte (ver `api.py`). Nunca da un veredicto de verdadero o
falso: muestra qué dice la nota, qué dice la fuente y de dónde sale cada cosa.

Para agregar capacidades sin tocar este archivo:
  - un indicador nuevo: una entrada en `series/catalogo.py`;
  - una fuente nueva: un cliente en `series/` y su nombre en `Serie.fuente`;
  - un nodo nuevo del grafo: un verificador registrado en `verificacion.py`.
"""
from __future__ import annotations

import hashlib
import re
from collections import Counter
from collections.abc import Callable
from datetime import date, datetime, timezone
from typing import Any, Literal

from pydantic import BaseModel, Field

from .pasaje import localizar_pasaje
from .series import AfirmacionNumerica, ClienteSeries, TarjetaDato, cruzar, desde_texto
from .series.catalogo import CATALOGO
from .texto import Parrafo, Ubicacion, partir_en_parrafos, ubicar
from .verificacion import InformeVerificacion, verificar_enriquecimientos

VERSION_VALIDACION = "2026-10-31.1"
RESULTADOS_DESTACADOS = {"coincide", "difiere", "sin_dato_oficial", "error_fuente"}
ORACIONES = re.compile(r"(?<=[.!?])\s+")

Origen = Literal["modelo", "reglas", "afirmacion"]
Proponedor = Callable[[str], list[Any]]


class TarjetaValidada(BaseModel):
    """Una cifra de la nota, con su cita copiada por código y el cruce con la serie."""

    id: str  # estable mientras la nota y la cifra no cambien
    tarjeta: TarjetaDato
    texto_afirmacion: str
    cita: str | None = None
    parrafo_id: str | None = None
    inicio: int | None = None
    fin: int | None = None
    origen: Origen = "reglas"
    destacada: bool = False  # tiene una serie o merece atención; el resto va plegado
    bloqueada: bool = False  # sin cita no hay tarjeta publicable
    alertas: list[str] = Field(default_factory=list)


class InformeValidacion(BaseModel):
    version: str = VERSION_VALIDACION
    generado_en: datetime
    modo_series: str
    fecha_referencia: date  # de ahí sale el año de los meses que la nota escribe sin año
    # Los párrafos con id y posición sobre `cuerpo`: la interfaz los usa para mostrar la nota
    # y resaltar `inicio`/`fin` de cada cita sin recalcular nada.
    parrafos: list[Parrafo]
    verificacion: InformeVerificacion
    tarjetas: list[TarjetaValidada]
    resumen: dict[str, int]
    hay_bloqueos: bool
    avisos: list[str] = Field(default_factory=list)


class _Candidata(BaseModel):
    afirmacion: AfirmacionNumerica
    origen: Origen
    ubicacion: Ubicacion | None = None
    alertas: list[str] = Field(default_factory=list)


def _anclar_periodo_a_la_nota(
    afirmacion: AfirmacionNumerica, cuerpo: str, anio: int | None
) -> tuple[AfirmacionNumerica, list[str]]:
    """El período sale de la nota, no de lo que reescribió el modelo.

    Si una afirmación del grafo trae un año que la nota nunca escribe (por ejemplo "septiembre de
    2025" cuando la nota solo habla de 2026), se reemplaza por el año de la nota y se avisa.
    """
    periodo = afirmacion.periodo
    if not periodo or not periodo[:4].isdigit() or anio is None:
        return afirmacion, []
    anio_dicho = int(periodo[:4])
    if anio_dicho == anio or str(anio_dicho) in cuerpo:
        return afirmacion, []
    corregido = afirmacion.model_copy(update={"periodo": f"{anio}{periodo[4:]}"})
    return corregido, [f"el año {anio_dicho} de la afirmación no figura en la nota: se usó {anio}"]


def _lista_de_claims(enriquecimientos: dict[str, dict] | None) -> list[str]:
    claims = ((enriquecimientos or {}).get("claims") or {}).get("claims") or []
    textos = [c.get("text") if isinstance(c, dict) else getattr(c, "text", None) for c in claims]
    return [t for t in textos if isinstance(t, str) and t.strip()]


def _candidatas_de_claims(cuerpo: str, textos: list[str], anio: int | None) -> list[_Candidata]:
    candidatas = []
    for texto in textos:
        afirmacion = desde_texto(texto, anio_defecto=anio)
        if afirmacion is None:
            continue
        afirmacion, alertas = _anclar_periodo_a_la_nota(afirmacion, cuerpo, anio)
        pasaje = localizar_pasaje(cuerpo, texto)
        ubicacion = (
            Ubicacion(inicio=pasaje.inicio, fin=pasaje.fin, parrafo_id=pasaje.parrafo_id, exacta=False, cita=pasaje.cita)
            if pasaje
            else None
        )
        candidatas.append(_Candidata(afirmacion=afirmacion, origen="afirmacion", ubicacion=ubicacion, alertas=alertas))
    return candidatas


def _candidatas_de_la_nota(cuerpo: str, anio: int | None) -> list[_Candidata]:
    """Sin enriquecimientos: recorre la nota oración por oración con las reglas."""
    candidatas = []
    for parrafo in partir_en_parrafos(cuerpo):
        for oracion in ORACIONES.split(parrafo.texto):
            afirmacion = desde_texto(oracion, anio_defecto=anio)
            if afirmacion is None:
                continue
            candidatas.append(_Candidata(afirmacion=afirmacion, origen="reglas", ubicacion=ubicar(cuerpo, oracion)))
    return candidatas


def _candidatas_del_modelo(cuerpo: str, propuestas: list[Any]) -> list[_Candidata]:
    candidatas = []
    for propuesta in propuestas:
        afirmacion = getattr(propuesta, "afirmacion", None)
        if afirmacion is None:
            continue
        fragmento = getattr(propuesta, "fragmento", None)
        origen = "modelo" if getattr(propuesta, "origen", "modelo") == "modelo" else "reglas"
        candidatas.append(
            _Candidata(afirmacion=afirmacion, origen=origen, ubicacion=ubicar(cuerpo, fragmento) if fragmento else None)
        )
    return candidatas


def _id_estable(c: _Candidata, t: TarjetaDato) -> str:
    base = f"{c.ubicacion.parrafo_id if c.ubicacion else ''}|{t.dicho.valor}|{t.dicho.periodo}|{t.clave_catalogo}|{t.dicho.texto[:40]}"
    return hashlib.sha1(base.encode("utf-8")).hexdigest()[:10]


def _cruzar_sin_romper(afirmacion: AfirmacionNumerica, cliente: ClienteSeries) -> TarjetaDato:
    """Una fuente caída o un caso raro en una cifra no puede tirar abajo el informe entero."""
    try:
        return cruzar(afirmacion, cliente)
    except Exception as exc:  # noqa: BLE001  (aislamos cualquier falla de una cifra)
        return TarjetaDato(
            dicho=afirmacion,
            resultado="error_fuente",
            advertencias=[f"no se pudo cruzar esta cifra ({type(exc).__name__})"],
        )


def _armar_tarjeta(c: _Candidata, cliente: ClienteSeries) -> TarjetaValidada:
    tarjeta = _cruzar_sin_romper(c.afirmacion, cliente)
    u = c.ubicacion
    alertas = list(c.alertas)
    if not u:
        alertas.append("sin_pasaje: no se encontró en la nota el fragmento que sostiene esta cifra")
    return TarjetaValidada(
        id=_id_estable(c, tarjeta),
        tarjeta=tarjeta,
        texto_afirmacion=c.afirmacion.texto,
        cita=u.cita if u else None,
        parrafo_id=u.parrafo_id if u else None,
        inicio=u.inicio if u else None,
        fin=u.fin if u else None,
        origen=c.origen,
        destacada=tarjeta.resultado in RESULTADOS_DESTACADOS,
        bloqueada=u is None,
        alertas=alertas,
    )


def _sin_repetidas(tarjetas: list[TarjetaValidada]) -> list[TarjetaValidada]:
    vistas, unicas = set(), []
    for t in tarjetas:
        clave = (t.parrafo_id, round(t.tarjeta.dicho.valor, 6), t.tarjeta.dicho.periodo, t.tarjeta.clave_catalogo)
        if clave not in vistas:
            vistas.add(clave)
            unicas.append(t)
    return unicas


def _proponer_con_modelo(
    cuerpo: str, cliente_llm: Any, modelo: str | None, anio: int
) -> tuple[list[Any], str | None]:
    """Devuelve (propuestas, aviso). Si el módulo o el modelo fallan, se sigue con las reglas."""
    try:
        from .propuesta import proponer_cifras

        if cliente_llm is None:  # usa ANTHROPIC_API_KEY del entorno; si falta, cae a las reglas
            import anthropic

            cliente_llm = anthropic.Anthropic()
        # acepta el cliente de Anthropic completo o solo su parte `.messages`
        cliente = getattr(cliente_llm, "messages", cliente_llm)
        argumentos = {"cliente": cliente, "anio_defecto": anio} | ({"modelo": modelo} if modelo else {})
        return proponer_cifras(cuerpo, **argumentos), None
    except Exception as exc:  # noqa: BLE001
        return [], f"no se pudo usar el modelo para proponer cifras ({type(exc).__name__}); se usaron las reglas"


def validar_nota(
    cuerpo: str,
    enriquecimientos: dict[str, dict] | None = None,
    *,
    cliente_series: ClienteSeries | None = None,
    usar_modelo: bool = False,
    cliente_llm: Any = None,
    modelo: str | None = None,
    proponer: Proponedor | None = None,
    fecha_referencia: date | None = None,
) -> InformeValidacion:
    """Valida una nota y, si se pasan, los enriquecimientos que el grafo generó sobre ella.

    `enriquecimientos` es `{nodo: datos}` tal como lo guarda el backend (`modelo.model_dump()`).
    Con `usar_modelo=True` un modelo liviano propone las cifras y el catálogo cerrado las acota;
    el código las comprueba igual. Sin modelo, o si falla, se usan reglas.

    `fecha_referencia` es la fecha de publicación de la nota (por defecto, hoy). Su año completa
    los meses que la nota escribe sin año ("en septiembre"); un año que la nota escribe sí se respeta.
    """
    cliente = cliente_series or ClienteSeries(modo="guardado")
    avisos: list[str] = []
    referencia = fecha_referencia or date.today()
    anio = referencia.year

    verificacion = verificar_enriquecimientos(cuerpo, enriquecimientos or {})

    candidatas: list[_Candidata] = []
    if proponer or usar_modelo:
        if proponer:
            propuestas, aviso = proponer(cuerpo), None
        else:
            propuestas, aviso = _proponer_con_modelo(cuerpo, cliente_llm, modelo, anio)
        if aviso:
            avisos.append(aviso)
        candidatas += _candidatas_del_modelo(cuerpo, propuestas)
    textos = _lista_de_claims(enriquecimientos)
    if textos:
        candidatas += _candidatas_de_claims(cuerpo, textos, anio)
    if not candidatas:
        candidatas = _candidatas_de_la_nota(cuerpo, anio)

    tarjetas = _sin_repetidas([_armar_tarjeta(c, cliente) for c in candidatas])
    tarjetas.sort(key=lambda t: (t.inicio if t.inicio is not None else 10**9, t.id))

    resumen = dict(Counter(t.tarjeta.resultado for t in tarjetas))
    resumen["tarjetas"] = len(tarjetas)
    resumen["sin_pasaje"] = sum(t.bloqueada for t in tarjetas)
    return InformeValidacion(
        generado_en=datetime.now(timezone.utc),
        modo_series=cliente.modo,
        fecha_referencia=referencia,
        parrafos=list(partir_en_parrafos(cuerpo)),
        verificacion=verificacion,
        tarjetas=tarjetas,
        resumen=resumen,
        hay_bloqueos=verificacion.hay_bloqueos or any(t.bloqueada for t in tarjetas),
        avisos=avisos,
    )


def catalogo_publico() -> list[dict[str, str]]:
    """Qué indicadores y de qué fuentes valida el sistema. Útil para mostrarle al jurado y a la autora."""
    return [
        {"clave": e.clave, "nombre": e.nombre, "fuente": e.fuente, "id": e.id, "unidad": e.unidad}
        for e in CATALOGO
    ]
