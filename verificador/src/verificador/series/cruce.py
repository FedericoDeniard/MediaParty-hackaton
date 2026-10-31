"""Cruce de una cifra dicha con la serie oficial del catálogo.

El código busca el dato, compara y copia la cita. Nunca decide qué número está bien.
"""

from __future__ import annotations

import re
from datetime import date
from decimal import ROUND_HALF_UP, Decimal

from .bancomundial import enlace_bancomundial
from .bcra import Punto, enlace_bcra
from .catalogo import EntradaCatalogo, buscar_entrada, normalizar
from .cliente import ClienteSeries
from .datosgob import enlace_datosgob
from .modelos import AfirmacionNumerica, ErrorFuente, Serie, TarjetaDato
from .texto import periodo_desde_texto

_RE_PERIODO_ISO = re.compile(r"^\d{4}(-\d{2}(-\d{2})?)?$")


def _redondear(valor: float, decimales: int) -> Decimal:
    paso = Decimal(1).scaleb(-decimales)
    return Decimal(repr(round(valor, 10))).quantize(paso, rounding=ROUND_HALF_UP)


def _decimales_de(valor: float) -> int:
    exp = Decimal(repr(valor)).normalize().as_tuple().exponent
    return max(0, -exp) if isinstance(exp, int) else 0


def _normalizar_periodo(periodo: str | None) -> str | None:
    if periodo is None:
        return None
    periodo = periodo.strip()
    if _RE_PERIODO_ISO.match(periodo):
        return periodo
    return periodo_desde_texto(periodo, date.today().year)


def _variacion_mensual(puntos: list[Punto]) -> list[Punto]:
    """Variación % mes a mes de un índice, calculada con código."""
    return [
        (puntos[i][0], (puntos[i][1] / puntos[i - 1][1] - 1) * 100) for i in range(1, len(puntos))
    ]


def _acumulado_hasta(puntos: list[Punto], mes: str) -> tuple[Punto | None, str | None]:
    """Compone las variaciones mensuales de enero hasta `mes` (AAAA-MM). Devuelve (punto, problema)."""
    anio, hasta = mes[:4], int(mes[5:7])
    por_mes = {int(f[5:7]): v for f, v in puntos if f[:4] == anio}
    faltan = [m for m in range(1, hasta + 1) if m not in por_mes]
    if faltan:
        return None, f"faltan las variaciones mensuales de los meses {faltan} de {anio}"
    factor = 1.0
    for m in range(1, hasta + 1):
        factor *= 1 + por_mes[m] / 100
    ultima = max(f for f, _ in puntos if f[:7] == f"{anio}-{hasta:02d}")
    return (ultima, round((factor - 1) * 100, 6)), None


def _elegir_punto(
    puntos: list[Punto], periodo: str, frecuencia: str
) -> tuple[Punto | None, list[str]]:
    """Punto de la serie que corresponde EXACTAMENTE al período; None si todavía no hay dato."""
    ultimo = puntos[-1][0]
    clave = periodo if frecuencia in ("diaria", "anual") else periodo[:7]
    if clave > ultimo[: len(clave)]:
        return None, [f"el período {periodo} es posterior al último dato publicado ({ultimo})"]
    candidatos = [p for p in puntos if p[0].startswith(clave)]
    if not candidatos:
        return None, [
            f"no hay dato oficial para {periodo} (puede ser un día sin publicación); último dato publicado: {ultimo}"
        ]
    elegido = candidatos[-1]
    avisos = []
    if frecuencia == "mensual" and len(periodo) > 7:
        avisos.append(f"la serie es mensual: se comparó con el dato de {clave} ({elegido[0]})")
    return elegido, avisos


# La cifra dicha NO es el nivel puntual de una serie: variaciones, rangos, promedios,
# cantidades, mediciones semanales. Se busca sobre texto normalizado (sin acentos).
_NO_ES_NIVEL = re.compile(
    "|".join([
        r"semana", r"promedio", r"entre\s+(?:un\s+|unos\s+)?(?:u\$s|us\$|usd|\$)?\s?\d",
        r"minimo", r"maximo", r"cercan[oa]", r"aproximad", r"\bsub(?:a|e|en|io|ieron)\b",
        r"baja", r"bajaron", r"aument", r"\bcay(?:o|eron)\b", r"caida", r"\+\s?\d", r"variacion",
        r"puntos", r"p\.p\.", r"desacelera", r"\bacelera", r"consecutiv", r"racha", r"intervenc",
    ])
)
# Estimaciones: solo se pueden cruzar si el período ya fue publicado... y aun así no se
# comparan (una proyección no es un dato). Si el período es futuro da "sin_dato_oficial".
_ESTIMACION = re.compile(r"estim|proyect|\bubican?\b|espera|pronostic|podria|\bpreve")


def _advertencias_de_entrada(entrada: EntradaCatalogo, a: AfirmacionNumerica) -> list[str]:
    avisos = list(entrada.advertencias)
    if entrada.unidad == "pesos" and entrada.frecuencia == "diaria":
        plano = normalizar(f"{a.texto} {a.indicador or ''}")
        if "cierre" in plano or "cerr" in plano:
            avisos.append("la nota habla del cierre de mercado; la serie es el valor de referencia del BCRA")
        else:
            avisos.append("la serie es el valor de referencia del BCRA, que no es el cierre de mercado")
    if entrada.unidad == "dolares" and not entrada.escala_por_texto and (
        ("millones" in normalizar(a.texto)) != entrada.en_millones
    ):
        avisos.append("revisá la escala: la serie de reservas está en millones de US$" if entrada.en_millones
                      else "revisá la escala: la serie no está en millones")
    return avisos


def _buscar(a: AfirmacionNumerica) -> EntradaCatalogo | None:
    contexto = f"{a.texto} {a.indicador or ''}"
    if a.indicador:
        return buscar_entrada(a.indicador, a.unidad, contexto)
    return buscar_entrada(a.texto, a.unidad, contexto)


def _enlace(entrada: EntradaCatalogo) -> str:
    if entrada.fuente == "bcra":
        return enlace_bcra(entrada.id)
    if entrada.fuente == "bancomundial":
        return enlace_bancomundial(entrada.id)
    return enlace_datosgob(entrada.id)


_ESCALAS = [  # de la más específica a la más general
    (re.compile(r"mil millones"), 1e9, "miles de millones"),
    (re.compile(r"billon"), 1e12, "billones"),
    (re.compile(r"millon"), 1e6, "millones"),
]


def _escala_del_texto(plano: str) -> tuple[float, str] | None:
    for patron, factor, nombre in _ESCALAS:
        if patron.search(plano):
            return factor, nombre
    return None


def _sin_serie(a: AfirmacionNumerica, aviso: str) -> TarjetaDato:
    return TarjetaDato(dicho=a, resultado="sin_serie", advertencias=[aviso])


def _periodo_suficiente(periodo: str | None, frecuencia: str) -> bool:
    if periodo is None:
        return False
    if frecuencia == "anual":  # solo un año: "2025"; un mes o un día no es un dato anual
        return len(periodo) == 4
    return len(periodo) >= (10 if frecuencia == "diaria" else 7)


def cruzar(afirmacion: AfirmacionNumerica, cliente: ClienteSeries | None = None) -> TarjetaDato:
    """Cruza la cifra con el catálogo cerrado y devuelve la tarjeta de datos.

    Ante la duda: "sin_serie" o "sin_dato_oficial", nunca un "difiere" falso.
    """
    plano = normalizar(f"{afirmacion.texto} {afirmacion.indicador or ''}")
    entrada = _buscar(afirmacion)
    if entrada is None:
        return _sin_serie(afirmacion, "no hay una serie verificada para este indicador")
    if _NO_ES_NIVEL.search(plano):
        return _sin_serie(
            afirmacion,
            "la cifra no es el nivel puntual de una serie (variación, rango, promedio, "
            "medición semanal o cantidad): no se cruza",
        )
    periodo = _normalizar_periodo(afirmacion.periodo)
    if not _periodo_suficiente(periodo, entrada.frecuencia):
        return _sin_serie(afirmacion, "no se pudo determinar el período (hace falta una fecha explícita)")
    cliente = cliente or ClienteSeries()
    avisos = _advertencias_de_entrada(entrada, afirmacion)

    def tarjeta(resultado, serie=None, diferencia=None, origen=None, extra=()):
        return TarjetaDato(
            dicho=afirmacion, clave_catalogo=entrada.clave, serie=serie, resultado=resultado,
            diferencia=diferencia, advertencias=avisos + list(extra), origen_datos=origen,
        )

    try:
        puntos, origen = cliente.obtener(entrada.fuente, entrada.id)
    except ErrorFuente as exc:
        return tarjeta("error_fuente", extra=[f"la fuente no respondió y no hay copia guardada ({exc})"])
    if origen == "guardado":
        motivo = "datos de la copia guardada" if cliente.modo == "guardado" else "la API no respondió: se usó la copia guardada"
        avisos.append(f"{motivo} (último dato {puntos[-1][0]})")

    if entrada.calculo == "variacion_mensual":
        puntos = _variacion_mensual(puntos)
    if not puntos:
        return tarjeta("error_fuente", origen=origen, extra=["la serie no tiene datos suficientes"])

    if entrada.calculo == "acumulado_anio":
        elegido, extra = _elegir_acumulado(puntos, periodo)
    else:
        elegido, extra = _elegir_punto(puntos, periodo, entrada.frecuencia)
    if elegido is None:
        return tarjeta("sin_dato_oficial", origen=origen, extra=extra)
    if _ESTIMACION.search(plano):
        return tarjeta("sin_serie", origen=origen,
                       extra=["la cifra es una estimación o proyección, no un dato publicado: no se compara"])

    fecha, valor = elegido
    if entrada.escala_por_texto:
        escala = _escala_del_texto(plano)
        if escala is None:
            return tarjeta("sin_serie", origen=origen,
                           extra=["la frase no dice la escala (millones, mil millones...): no se compara"])
        valor, nombre_escala = valor / escala[0], escala[1]
        extra = extra + [f"la serie está en US$ corrientes; se expresó en {nombre_escala} para comparar"]
    enlace = _enlace(entrada)
    serie = Serie(fuente=entrada.fuente, id=entrada.id, nombre=entrada.nombre,
                  valor=round(valor, 6), fecha_dato=fecha, enlace=enlace)
    decimales = afirmacion.decimales if afirmacion.decimales is not None else _decimales_de(afirmacion.valor)
    coincide = _redondear(valor, decimales) == _redondear(afirmacion.valor, decimales)
    return tarjeta(
        "coincide" if coincide else "difiere", serie=serie, origen=origen, extra=extra,
        diferencia=round(afirmacion.valor - valor, 6),
    )


def _elegir_acumulado(puntos: list[Punto], periodo: str) -> tuple[Punto | None, list[str]]:
    ultimo = puntos[-1][0]
    mes = periodo[:7]
    if mes > ultimo[:7]:
        return None, [f"el período {periodo} es posterior al último dato publicado ({ultimo})"]
    punto, problema = _acumulado_hasta(puntos, mes)
    if punto is None:
        return None, [problema or "no se pudo componer el acumulado"]
    return punto, []
