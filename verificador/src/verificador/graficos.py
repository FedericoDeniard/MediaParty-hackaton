"""Datos listos para graficar, armados a partir del informe de validación y de los enriquecimientos.

Salen tres tipos de gráfico, todos como JSON puro que la interfaz dibuja sin recalcular nada:
  - "serie": la serie oficial verificada con la cifra de la nota marcada encima. Si la serie todavía
    no publicó el período, queda un hueco (y = None); no se rellena.
  - "linea_tiempo": los eventos del grafo que la nota sostiene.
  - "ranking": las entidades más mencionadas. Las menciones las cuenta el código, no el modelo.

Reglas del producto: sin cita no hay punto, y ningún gráfico da veredicto. Cada punto o marca
trae el pasaje de la nota (`Cita`) para resaltarlo en la página de lectura.
"""
from __future__ import annotations

import re
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field

from .contexto.armar import armar_contextos
from .contexto.modelos import GraficoContexto
from .series import ClienteSeries
from .series.catalogo import CATALOGO, EntradaCatalogo
from .series.modelos import ErrorFuente
from .texto import Ubicacion, plegar
from .validar import InformeValidacion, TarjetaValidada
from .verificacion import ItemVerificacion

TipoGrafico = Literal["serie", "linea_tiempo", "ranking"]

RESULTADOS_MARCABLES = {"coincide", "difiere", "sin_dato_oficial"}
ESTADOS_ENTIDAD_CON_CITA = {"ok", "nombre_parcial"}
# Largo de la fecha ISO que la verificación comprueba según la precisión del evento.
LARGO_FECHA = {"year": 4, "month": 7, "day": 10}
MAX_PUNTOS_SERIE = 24
MIN_EVENTOS_LINEA = 3
MIN_ENTIDADES_RANKING = 3
MAX_ENTIDADES_RANKING = 10

_ENTRADAS: dict[str, EntradaCatalogo] = {e.clave: e for e in CATALOGO}


class _Modelo(BaseModel):
    model_config = ConfigDict(frozen=True)


class Cita(_Modelo):
    parrafo_id: str | None
    inicio: int
    fin: int
    cita: str


class PuntoGrafico(_Modelo):
    x: str  # fecha ISO (completa o parcial) o nombre de la categoría
    y: float | None  # None = hueco: la fuente no tiene el dato
    etiqueta: str
    descripcion: str | None = None
    grupo: str | None = None
    precision: str | None = None
    cita: Cita | None = None
    alertas: list[str] = Field(default_factory=list)


class MarcaNota(_Modelo):
    """La cifra que dice la nota, ubicada sobre la serie oficial."""

    tarjeta_id: str
    x: str
    y: float
    texto: str
    resultado: str
    valor_serie: float | None = None
    diferencia: float | None = None
    enlace: str | None = None
    cita: Cita | None = None
    advertencias: list[str] = Field(default_factory=list)


class Grafico(_Modelo):
    id: str
    tipo: TipoGrafico
    titulo: str
    fuente: str | None = None
    enlace: str | None = None
    unidad: str | None = None
    origen_datos: Literal["api", "guardado"] | None = None
    puntos: list[PuntoGrafico] = Field(default_factory=list)
    marcas: list[MarcaNota] = Field(default_factory=list)
    avisos: list[str] = Field(default_factory=list)


class GraficosNota(_Modelo):
    graficos: list[Grafico]
    contextos: list[GraficoContexto] = Field(default_factory=list)  # datos oficiales que completan la nota
    avisos: list[str] = Field(default_factory=list)


def _cita(u: Ubicacion | None) -> Cita | None:
    return Cita(parrafo_id=u.parrafo_id, inicio=u.inicio, fin=u.fin, cita=u.cita) if u else None


def _cita_de_tarjeta(t: TarjetaValidada) -> Cita | None:
    if t.cita is None or t.inicio is None or t.fin is None:
        return None
    return Cita(parrafo_id=t.parrafo_id, inicio=t.inicio, fin=t.fin, cita=t.cita)


def _texto(dato: Any, campo: str) -> str | None:
    valor = dato.get(campo) if isinstance(dato, dict) else None
    return valor.strip() if isinstance(valor, str) and valor.strip() else None


def _lista(enriquecimientos: dict | None, nodo: str, clave: str) -> list:
    datos = (enriquecimientos or {}).get(nodo)
    lista = datos.get(clave) if isinstance(datos, dict) else None
    return lista if isinstance(lista, list) else []


def _items_por_indice(informe: InformeValidacion, nodo: str) -> dict[int, ItemVerificacion]:
    return {i.indice: i for i in informe.verificacion.items if i.nodo == nodo}


def _alertas(item: ItemVerificacion) -> list[str]:
    return [a.detalle for a in item.alertas]


# --- series --------------------------------------------------------------------------------


def _marca(t: TarjetaValidada, x: str) -> MarcaNota:
    serie = t.tarjeta.serie
    return MarcaNota(
        tarjeta_id=t.id,
        x=x,
        y=t.tarjeta.dicho.valor,
        texto=t.texto_afirmacion,
        resultado=t.tarjeta.resultado,
        valor_serie=serie.valor if serie else None,
        diferencia=t.tarjeta.diferencia,
        enlace=serie.enlace if serie else None,
        cita=_cita_de_tarjeta(t),
        advertencias=list(t.tarjeta.advertencias),
    )


def _ventana(puntos: list[tuple[str, float]], fechas_marcadas: list[str]) -> list[tuple[str, float]]:
    """Los últimos puntos más los puntos marcados: el tamaño tiene tope aunque la nota cite un dato viejo."""
    recientes = {f for f, _ in puntos[-MAX_PUNTOS_SERIE:]}
    return [p for p in puntos if p[0] in recientes or p[0] in fechas_marcadas]


def _grafico_de_serie(
    entrada: EntradaCatalogo, tarjetas: list[TarjetaValidada], cliente: ClienteSeries
) -> Grafico:
    puntos, origen = cliente.obtener(entrada.fuente, entrada.id)
    puntos = sorted(puntos)
    marcas, huecos, fechas = [], [], []
    for t in tarjetas:
        serie = t.tarjeta.serie
        periodo = t.tarjeta.dicho.periodo
        if serie:  # el cruce ya eligió el punto de la serie: no se vuelve a buscar por período
            marcas.append(_marca(t, serie.fecha_dato))
            fechas.append(serie.fecha_dato)
        elif periodo:  # la serie todavía no publicó ese período: hueco
            marcas.append(_marca(t, periodo))
            if periodo not in huecos:
                huecos.append(periodo)
    visibles = [
        PuntoGrafico(x=f, y=v, etiqueta=f) for f, v in _ventana(puntos, fechas)
    ] + [PuntoGrafico(x=h, y=None, etiqueta="Sin dato oficial") for h in huecos]
    enlaces = [t.tarjeta.serie.enlace for t in tarjetas if t.tarjeta.serie]
    return Grafico(
        id=f"serie-{entrada.fuente}-{entrada.id}",
        tipo="serie",
        titulo=entrada.nombre,
        fuente=entrada.fuente,
        enlace=enlaces[0] if enlaces else None,
        unidad=entrada.unidad,
        origen_datos=origen,
        puntos=sorted(visibles, key=lambda p: p.x),
        marcas=marcas,
        avisos=list(entrada.advertencias),
    )


def _graficos_de_series(
    informe: InformeValidacion, cliente: ClienteSeries
) -> tuple[list[Grafico], list[str]]:
    grupos: dict[str, list[TarjetaValidada]] = {}
    for t in informe.tarjetas:
        if t.bloqueada or t.tarjeta.resultado not in RESULTADOS_MARCABLES:
            continue
        if t.tarjeta.clave_catalogo in _ENTRADAS:
            grupos.setdefault(t.tarjeta.clave_catalogo, []).append(t)
    graficos: list[Grafico] = []
    avisos: list[str] = []
    for clave, tarjetas in grupos.items():
        entrada = _ENTRADAS[clave]
        if entrada.calculo != "directo":
            avisos.append(f"la serie {entrada.nombre} es derivada ({entrada.calculo}): no se grafica su nivel")
            continue
        try:
            grafico = _grafico_de_serie(entrada, tarjetas, cliente)
        except ErrorFuente as exc:
            avisos.append(f"no se pudo graficar la serie {entrada.fuente}:{entrada.id}: {exc}")
            continue
        graficos.append(grafico)
    return sorted(graficos, key=lambda g: g.id), avisos


# --- línea de tiempo -----------------------------------------------------------------------


def _punto_de_evento(evento: Any, item: ItemVerificacion | None) -> tuple[PuntoGrafico | None, str | None]:
    fecha, titulo = _texto(evento, "date"), _texto(evento, "title")
    if fecha is None or titulo is None:
        return None, "evento incompleto: sin fecha o sin título, no se grafica"
    if item is None or item.estado != "ok" or item.ubicacion is None:
        return None, f"evento sin cita en la nota, no se grafica: {titulo} ({fecha})"
    # Sin precisión declarada la verificación solo comprueba el año: no se grafica un mes o día no verificado.
    precision = _texto(evento, "precision")
    largo = LARGO_FECHA.get(precision or "", LARGO_FECHA["year"])
    punto = PuntoGrafico(
        x=fecha[:largo],
        y=None,
        etiqueta=titulo,
        descripcion=_texto(evento, "description"),
        precision=precision,
        cita=_cita(item.ubicacion),
        alertas=_alertas(item),
    )
    return punto, None


def _grafico_de_linea_de_tiempo(
    informe: InformeValidacion, enriquecimientos: dict | None
) -> tuple[Grafico | None, list[str]]:
    items = _items_por_indice(informe, "timeline")
    puntos, avisos = [], []
    for i, evento in enumerate(_lista(enriquecimientos, "timeline", "events")):
        punto, aviso = _punto_de_evento(evento, items.get(i))
        if punto:
            puntos.append(punto)
        if aviso:
            avisos.append(aviso)
    if not puntos and not avisos:
        return None, []
    if len(puntos) < MIN_EVENTOS_LINEA:
        return None, [
            f"línea de tiempo omitida: {len(puntos)} evento(s) sostenidos por la nota, hacen falta {MIN_EVENTOS_LINEA}"
        ]
    grafico = Grafico(
        id="linea-tiempo",
        tipo="linea_tiempo",
        titulo="Línea de tiempo",
        puntos=sorted(puntos, key=lambda p: p.x),
        avisos=avisos,
    )
    return grafico, []


# --- ranking de entidades ------------------------------------------------------------------


def _contar_menciones(texto_plegado: str, nombre: str) -> int:
    plegado, _ = plegar(nombre)
    plegado = plegado.strip()
    if not plegado:
        return 0
    return len(re.findall(rf"(?<!\w){re.escape(plegado)}(?!\w)", texto_plegado))


def _punto_de_entidad(nodo: Any, item: ItemVerificacion | None, texto_plegado: str) -> PuntoGrafico | None:
    nombre = _texto(nodo, "name")
    if nombre is None or item is None or item.estado not in ESTADOS_ENTIDAD_CON_CITA or item.ubicacion is None:
        return None
    # Si la nota usa otra forma (solo el apellido, una sigla), se cuenta también esa; la cita prueba al menos una mención.
    forma = item.ubicacion.cita
    menciones = max(_contar_menciones(texto_plegado, nombre), _contar_menciones(texto_plegado, forma), 1)
    alertas = _alertas(item)
    if plegar(forma)[0].strip() != plegar(nombre)[0].strip():
        alertas.append(f"las menciones se contaron con la forma que figura en la nota: «{forma}»")
    return PuntoGrafico(
        x=nombre,
        y=float(menciones),
        etiqueta=nombre,
        descripcion=_texto(nodo, "description"),
        grupo=_texto(nodo, "type"),
        cita=_cita(item.ubicacion),
        alertas=alertas,
    )


def _grafico_de_ranking(
    informe: InformeValidacion, enriquecimientos: dict | None
) -> tuple[Grafico | None, list[str]]:
    nodos = _lista(enriquecimientos, "entities", "nodes")
    if not nodos:
        return None, []
    items = _items_por_indice(informe, "entities.nodes")
    texto_plegado, _ = plegar("\n\n".join(p.texto for p in informe.parrafos))
    puntos = [p for i, n in enumerate(nodos) if (p := _punto_de_entidad(n, items.get(i), texto_plegado))]
    if len(puntos) < MIN_ENTIDADES_RANKING:
        return None, [
            f"ranking omitido: {len(puntos)} entidad(es) verificadas en la nota, hacen falta {MIN_ENTIDADES_RANKING}"
        ]
    puntos.sort(key=lambda p: (-(p.y or 0), p.cita.inicio if p.cita else 0))
    grafico = Grafico(
        id="ranking-entidades",
        tipo="ranking",
        titulo="Entidades más mencionadas",
        unidad="menciones",
        puntos=puntos[:MAX_ENTIDADES_RANKING],
        avisos=[f"{len(nodos) - len(puntos)} entidad(es) no se encontraron en la nota y se omitieron"]
        if len(puntos) < len(nodos)
        else [],
    )
    return grafico, []


# --- punto de entrada ----------------------------------------------------------------------


def armar_graficos(
    informe: InformeValidacion, enriquecimientos: dict[str, dict] | None, cliente_series: ClienteSeries
) -> GraficosNota:
    """Arma los gráficos de una nota ya validada. No llama al modelo ni inventa datos."""
    series, avisos = _graficos_de_series(informe, cliente_series)
    graficos = list(series)
    for armar in (_grafico_de_linea_de_tiempo, _grafico_de_ranking):
        grafico, avisos_omision = armar(informe, enriquecimientos)
        avisos += avisos_omision
        if grafico:
            graficos.append(grafico)
    texto = "\n\n".join(p.texto for p in informe.parrafos)
    contextos, avisos_de_contexto = armar_contextos(
        texto, fecha_referencia=informe.fecha_referencia, modo=cliente_series.modo
    )
    return GraficosNota(graficos=graficos, contextos=contextos, avisos=avisos + avisos_de_contexto)
