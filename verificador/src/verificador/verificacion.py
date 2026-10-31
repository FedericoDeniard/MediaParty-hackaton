"""Verificación por código de lo que devuelven los agentes.

Solo se comprueba si el texto existe en la nota; nunca se opina sobre si es verdadero.
La cita siempre se copia del cuerpo guardado, jamás de lo que escribió el modelo.

Cómo agregar un nodo nuevo
--------------------------
1. Escribí una función ``(cuerpo: str, datos: dict) -> list[ItemVerificacion]``.
2. Registrala con ``@verificador_de("nombre_del_nodo")``; la clave es la que trae el enriquecimiento.
3. Subí ``VERSION_REGLAS`` y agregá una prueba en ``tests/test_registro.py``.

Ejemplo::

    @verificador_de("temas")
    def _verificar_temas(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
        items = []
        for i, tema in enumerate(_lista(datos, "temas")):
            ok = isinstance(tema, str) and ubicar(cuerpo, tema) is not None
            items.append(_item("temas", i, "tema", "ok" if ok else "tema_no_encontrado"))
        return items

Un nodo sin verificador no rompe (item "nodo_sin_verificador", alerta suave) y un verificador
que lanza una excepción tampoco (item "error_verificador", alerta suave); el resto sigue.
"""

from __future__ import annotations

import re
from collections import Counter
from collections.abc import Callable
from typing import Any, Literal

from pydantic import BaseModel, Field

from verificador.cifras import cifras_faltantes
from verificador.entidades import coincidir
from verificador.pasaje import localizar_pasaje
from verificador.texto import Ubicacion, plegar, ubicacion_en_rango, ubicar

Gravedad = Literal["grave", "suave"]

_ENTRE_COMILLAS = re.compile(r"“([^”]+)”|«([^»]+)»|\"([^\"]+)\"")
_MESES = (
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre",
)
_FECHA_ISO = re.compile(r"^\s*(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?\s*$")


class Alerta(BaseModel):
    codigo: str
    gravedad: Gravedad
    detalle: str


class ItemVerificacion(BaseModel):
    nodo: str
    indice: int
    campo: str
    estado: str
    ubicacion: Ubicacion | None = None
    cita_copiada: str | None = None
    alertas: list[Alerta] = Field(default_factory=list)
    criterio: str | None = None
    puntaje: float | None = None


VERSION_REGLAS = "2026-10-31.1"


class InformeVerificacion(BaseModel):
    items: list[ItemVerificacion]
    resumen: dict[str, int]
    hay_bloqueos: bool
    version_reglas: str = VERSION_REGLAS
    # Nodos recibidos cuyo verificador corrió sin fallar.
    nodos_verificados: list[str] = Field(default_factory=list)


def _item(nodo: str, indice: int, campo: str, estado: str, ubicacion: Ubicacion | None = None,
          alertas: list[Alerta] | None = None) -> ItemVerificacion:
    return ItemVerificacion(
        nodo=nodo, indice=indice, campo=campo, estado=estado, ubicacion=ubicacion,
        cita_copiada=ubicacion.cita if ubicacion else None, alertas=alertas or [],
    )


def _malformado(nodo: str, indice: int, campo: str) -> ItemVerificacion:
    return _item(nodo, indice, campo, "malformado",
                 alertas=[Alerta(codigo="malformado", gravedad="grave", detalle=f"'{campo}' falta o no es texto")])


def _texto(elemento: Any, campo: str) -> str | None:
    valor = elemento.get(campo) if isinstance(elemento, dict) else None
    return valor if isinstance(valor, str) and valor.strip() else None


def _lista(datos: Any, clave: str) -> list:
    valor = datos.get(clave) if isinstance(datos, dict) else None
    return valor if isinstance(valor, list) else []


def _entre_comillas(texto: str) -> list[str]:
    return [next(g for g in m.groups() if g) for m in _ENTRE_COMILLAS.finditer(texto)]


def _verificar_claim(cuerpo: str, indice: int, claim: Any) -> ItemVerificacion:
    texto = _texto(claim, "text")
    if texto is None:
        return _malformado("claims", indice, "text")
    ubicacion = ubicar(cuerpo, texto)
    if ubicacion is not None:
        return _item("claims", indice, "text", "ok", ubicacion)
    faltan_cifras = [c.texto for c in cifras_faltantes(texto, cuerpo)]
    faltan_citas = [c for c in _entre_comillas(texto) if ubicar(cuerpo, c) is None]
    if faltan_cifras or faltan_citas:
        alertas = [Alerta(codigo="cifra_no_encontrada", gravedad="grave",
                          detalle=f"La cifra '{c}' no está en la nota.") for c in faltan_cifras]
        alertas += [Alerta(codigo="cita_no_encontrada", gravedad="grave",
                           detalle=f"La cita '{c}' no está en la nota.") for c in faltan_citas]
        return _item("claims", indice, "text", "no_respaldada", alertas=alertas)
    alertas = [Alerta(codigo="parafraseada", gravedad="suave",
                      detalle="El texto no figura tal cual en la nota; sus cifras y citas sí.")]
    pasaje = localizar_pasaje(cuerpo, texto)
    if pasaje is None:
        alertas.append(Alerta(codigo="sin_pasaje", gravedad="suave",
                              detalle="No se encontró en la nota un pasaje que sostenga la afirmación."))
        return _item("claims", indice, "text", "parafraseada", alertas=alertas)
    item = _item("claims", indice, "text", "parafraseada",
                 ubicacion_en_rango(cuerpo, pasaje.inicio, pasaje.fin, exacta=False), alertas)
    item.criterio, item.puntaje = "pasaje_mas_cercano", pasaje.puntaje
    return item


def _verificar_arista(cuerpo: str, indice: int, arista: Any) -> ItemVerificacion:
    evidencia = _texto(arista, "evidence")
    ubicacion = ubicar(cuerpo, evidencia) if evidencia else None
    if ubicacion is not None:
        return _item("entities.edges", indice, "evidence", "ok", ubicacion)
    alerta = Alerta(codigo="evidencia_no_encontrada", gravedad="grave",
                    detalle="La evidencia de la relación no se encuentra en la nota.")
    return _item("entities.edges", indice, "evidence", "evidencia_no_encontrada", alertas=[alerta])


def _verificar_nodo_entidad(cuerpo: str, indice: int, nodo: Any) -> ItemVerificacion:
    nombre = _texto(nodo, "name")
    if nombre is None:
        return _malformado("entities.nodes", indice, "name")
    c = coincidir(cuerpo, nombre)
    if c.nivel == "completa":
        return _item("entities.nodes", indice, "name", "ok", c.ubicacion)
    if c.nivel == "parcial":
        alerta = Alerta(codigo="nombre_parcial", gravedad="suave",
                        detalle=f"De '{nombre}' en la nota {c.motivo}.")
        return _item("entities.nodes", indice, "name", "nombre_parcial", c.ubicacion, [alerta])
    alerta = Alerta(codigo="nombre_no_encontrado", gravedad="suave",
                    detalle=f"El nombre '{nombre}' no aparece en la nota.")
    return _item("entities.nodes", indice, "name", "nombre_no_encontrado", alertas=[alerta])


def _buscar_en_plegado(cuerpo: str, patron: str) -> Ubicacion | None:
    plegado, mapa = plegar(cuerpo)
    m = re.search(patron, plegado)
    if not m:
        return None
    return ubicacion_en_rango(cuerpo, mapa[m.start()], mapa[m.end() - 1] + 1, exacta=False)


def _verificar_evento(cuerpo: str, indice: int, evento: Any) -> ItemVerificacion:
    fecha = _texto(evento, "date")
    partes = _FECHA_ISO.match(fecha) if fecha else None
    if partes is None:
        return _item("timeline", indice, "date", "fecha_inferida", alertas=[
            Alerta(codigo="fecha_inferida", gravedad="suave", detalle=f"Fecha ilegible: {fecha!r}.")])
    anio, mes, dia = partes.group(1), partes.group(2), partes.group(3)
    precision = evento.get("precision")
    faltantes: list[str] = []
    ubicacion = _buscar_en_plegado(cuerpo, rf"(?<!\d){anio}(?!\d)")
    if ubicacion is None:
        faltantes.append(f"año {anio}")
    if mes and precision in ("month", "day"):
        n = int(mes)
        if 1 <= n <= 12:
            nombre = _MESES[n - 1]
            hay_mes = _buscar_en_plegado(cuerpo, rf"\b{nombre}\b|(?<!\d)\d{{1,2}}/0?{n}(?!\d)")
            if hay_mes is None:
                faltantes.append(f"mes {nombre}")
            elif dia and precision == "day":
                d = int(dia)
                patron = rf"(?<!\d)0?{d}\s+de\s+{nombre}\b|(?<!\d)0?{d}/0?{n}(?!\d)|{nombre}\s+0?{d}(?!\d)"
                hay_dia = _buscar_en_plegado(cuerpo, patron)
                if hay_dia is None:
                    faltantes.append(f"día {d} de {nombre}")
                else:
                    ubicacion = hay_dia
            elif ubicacion is not None:
                ubicacion = hay_mes
        else:
            faltantes.append(f"mes {mes} inválido")
    if faltantes:
        alerta = Alerta(codigo="fecha_inferida", gravedad="suave",
                        detalle="No figura escrito en la nota: " + ", ".join(faltantes) + ".")
        return _item("timeline", indice, "date", "fecha_inferida", ubicacion, [alerta])
    return _item("timeline", indice, "date", "ok", ubicacion)


def _verificar_fuente(cuerpo: str, indice: int, fuente: Any) -> ItemVerificacion:
    texto = fuente if isinstance(fuente, str) and fuente.strip() else None
    if texto is None:
        return _malformado("editorial.sources_cited", indice, "sources_cited")
    c = coincidir(cuerpo, texto)
    if c.nivel == "completa":
        return _item("editorial.sources_cited", indice, "sources_cited", "ok", c.ubicacion)
    if c.nivel == "parcial":
        alerta = Alerta(codigo="fuente_parcial", gravedad="suave", detalle=f"De '{texto}' en la nota {c.motivo}.")
        return _item("editorial.sources_cited", indice, "sources_cited", "fuente_parcial", c.ubicacion, [alerta])
    if not c.tiene_nombres:
        # Fuente descrita sin nombres propios: se busca el pasaje más cercano, sin bloquear.
        pasaje = localizar_pasaje(cuerpo, texto)
        if pasaje is not None:
            alerta = Alerta(codigo="fuente_parcial", gravedad="suave",
                            detalle=f"'{texto}' no tiene nombres propios; hay un pasaje cercano en la nota.")
            return _item("editorial.sources_cited", indice, "sources_cited", "fuente_parcial",
                         ubicacion_en_rango(cuerpo, pasaje.inicio, pasaje.fin, exacta=False), [alerta])
    alerta = Alerta(codigo="fuente_no_encontrada", gravedad="grave",
                    detalle=f"La fuente citada '{texto}' no aparece en la nota ({c.motivo}).")
    return _item("editorial.sources_cited", indice, "sources_cited", "fuente_no_encontrada", alertas=[alerta])


def _avisar_indice(item: ItemVerificacion, claim: Any) -> ItemVerificacion:
    """El paragraph_index del modelo no se usa; solo se avisa si discrepa del párrafo hallado."""
    if item.ubicacion is None or item.ubicacion.parrafo_id is None or not isinstance(claim, dict):
        return item
    declarado = claim.get("paragraph_index")
    real = int(item.ubicacion.parrafo_id[1:])
    if isinstance(declarado, int) and declarado not in (real, real - 1):
        item.alertas.append(Alerta(
            codigo="paragraph_index_discrepa", gravedad="suave",
            detalle=f"El modelo dijo {declarado}; la cita está en {item.ubicacion.parrafo_id}."))
    return item


Verificador = Callable[[str, dict], list[ItemVerificacion]]

VERIFICADORES: dict[str, Verificador] = {}


def verificador_de(nodo: str) -> Callable[[Verificador], Verificador]:
    """Registra la función decorada como verificador del nodo `nodo`."""
    def registrar(funcion: Verificador) -> Verificador:
        VERIFICADORES[nodo] = funcion
        return funcion
    return registrar


@verificador_de("claims")
def _verificar_claims(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
    claims = _lista(datos, "claims")
    return [_avisar_indice(_verificar_claim(cuerpo, i, c), c) for i, c in enumerate(claims)]


@verificador_de("entities")
def _verificar_entidades(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
    items = [_verificar_nodo_entidad(cuerpo, i, n) for i, n in enumerate(_lista(datos, "nodes"))]
    items += [_verificar_arista(cuerpo, i, a) for i, a in enumerate(_lista(datos, "edges"))]
    return items


@verificador_de("timeline")
def _verificar_timeline(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
    return [_verificar_evento(cuerpo, i, e) for i, e in enumerate(_lista(datos, "events"))]


@verificador_de("editorial")
def _verificar_editorial(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
    return [_verificar_fuente(cuerpo, i, f) for i, f in enumerate(_lista(datos, "sources_cited"))]


def _item_suave(nodo: str, estado: str, detalle: str) -> ItemVerificacion:
    return _item(nodo, 0, "nodo", estado, alertas=[Alerta(codigo=estado, gravedad="suave", detalle=detalle)])


def _ordenar_nodos(recibidos: list[str]) -> list[str]:
    """Primero los registrados (en orden de registro, como siempre), después los desconocidos."""
    return [n for n in VERIFICADORES if n in recibidos] + [n for n in recibidos if n not in VERIFICADORES]


def verificar_enriquecimientos(cuerpo: str, enriquecimientos: dict[str, dict]) -> InformeVerificacion:
    """Verifica cada elemento de los nodos presentes contra el cuerpo de la nota."""
    items: list[ItemVerificacion] = []
    verificados: list[str] = []
    for nodo in _ordenar_nodos(list(enriquecimientos)):
        verificador = VERIFICADORES.get(nodo)
        if verificador is None:
            items.append(_item_suave(nodo, "nodo_sin_verificador", f"No hay verificador registrado para '{nodo}'."))
            continue
        try:
            items += verificador(cuerpo, enriquecimientos[nodo])
        except Exception as exc:  # un nodo roto no tumba al resto
            items.append(_item_suave(nodo, "error_verificador",
                                     f"El verificador de '{nodo}' falló: {type(exc).__name__}."))
            continue
        verificados.append(nodo)
    resumen = dict(Counter(i.estado for i in items))
    hay_bloqueos = any(a.gravedad == "grave" for i in items for a in i.alertas)
    return InformeVerificacion(items=items, resumen=resumen, hay_bloqueos=hay_bloqueos,
                               version_reglas=VERSION_REGLAS, nodos_verificados=verificados)
