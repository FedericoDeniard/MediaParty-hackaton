"""Catálogo CERRADO de indicadores verificados (ver docs/series-verificadas.md).

Nada se elige por búsqueda libre: si un indicador no está acá, el resultado es "sin_serie".
"""

from __future__ import annotations

import unicodedata
from typing import Literal

from pydantic import BaseModel, ConfigDict

from .modelos import Unidad

# Palabras que delatan que la cifra NO es el nivel de la serie (variaciones, rangos, volúmenes...).
_NO_ES_NIVEL = [
    "variacion", "aumento", "suba", "subio", "baja", "cayo", "rango", "minimo",
    "maximo", "intradiario", "volumen", "techo", "piso", "banda", "puntos porcentuales",
    "p.p.", "semana", "semanal",
]
_NO_ES_MENSUAL = [
    "banco mundial", "interanual", "anual", "acumulad", "nucleo", "regulad", "promedio", "puntos porcentuales",
    "p.p.", "semana", "semanal", "aporte", "alimentos", "rubro",
]


class EntradaCatalogo(BaseModel):
    model_config = ConfigDict(frozen=True)

    clave: str
    nombre: str
    fuente: Literal["bcra", "datosgob", "bancomundial"]
    id: str
    unidad: Unidad
    frecuencia: Literal["diaria", "mensual", "anual"]
    palabras_clave: list[str]  # sin acentos y en minúscula
    excluir: list[str] = []
    advertencias: list[str] = []
    en_millones: bool = False  # la serie viene en millones (reservas)
    # Si no está vacío, la frase tiene que contener alguna de estas (contexto obligatorio).
    requerir: list[str] = []
    # La serie está en unidades; la escala (millones, mil millones...) la dice la frase.
    escala_por_texto: bool = False
    # "directo": se compara el valor de la serie; los otros se calculan con código.
    calculo: Literal["directo", "variacion_mensual", "acumulado_anio"] = "directo"


def normalizar(texto: str) -> str:
    """Minúsculas y sin acentos, para reconocer palabras clave."""
    sin = unicodedata.normalize("NFKD", texto.lower())
    return "".join(c for c in sin if not unicodedata.combining(c))


_REZAGO_IPC = (
    "la serie de datos.gob.ar tiene rezago: puede no incluir los últimos meses ya publicados por el INDEC"
)

CATALOGO: list[EntradaCatalogo] = [
    EntradaCatalogo(
        clave="inflacion_mensual", nombre="Inflación mensual (IPC)", fuente="bcra", id="27",
        unidad="porcentaje", frecuencia="mensual",
        palabras_clave=["inflacion mensual", "inflacion de", "inflacion", "ipc mensual", "ipc"],
        excluir=_NO_ES_MENSUAL,
    ),
    EntradaCatalogo(
        clave="inflacion_interanual", nombre="Inflación interanual (IPC)", fuente="bcra", id="28",
        unidad="porcentaje", frecuencia="mensual",
        palabras_clave=["inflacion interanual", "interanual", "inflacion anual"],
        excluir=["banco mundial", "semana", "semanal", "puntos porcentuales", "p.p."],
    ),
    EntradaCatalogo(
        clave="inflacion_acumulada_anio",
        nombre="Inflación acumulada del año (compuesta con las variaciones mensuales)",
        fuente="bcra", id="27", unidad="porcentaje", frecuencia="mensual",
        palabras_clave=["acumulad"],
        excluir=["banco mundial", "interanual", "semana", "semanal", "puntos porcentuales", "p.p."],
        calculo="acumulado_anio",
        advertencias=[
            "el acumulado se calcula componiendo las variaciones mensuales (redondeadas a 1 decimal) "
            "de la serie del BCRA; puede diferir en una décima del dato que publica el INDEC"
        ],
    ),
    EntradaCatalogo(
        clave="reservas", nombre="Reservas internacionales (millones de US$)", fuente="bcra", id="1",
        unidad="dolares", frecuencia="diaria", en_millones=True,
        palabras_clave=["reservas internacionales", "reservas"],
        excluir=_NO_ES_NIVEL + ["tesoro", "deposito"],
    ),
    EntradaCatalogo(
        clave="dolar_mayorista", nombre="Tipo de cambio mayorista de referencia (pesos)",
        fuente="bcra", id="5", unidad="pesos", frecuencia="diaria",
        palabras_clave=["dolar mayorista", "mayorista"],
        excluir=_NO_ES_NIVEL,
    ),
    EntradaCatalogo(
        clave="dolar_minorista", nombre="Tipo de cambio minorista, promedio vendedor (pesos)",
        fuente="bcra", id="4", unidad="pesos", frecuencia="diaria",
        palabras_clave=["dolar minorista", "minorista"],
        excluir=_NO_ES_NIVEL,
    ),
    EntradaCatalogo(
        clave="ipc_nivel_general", nombre="IPC nacional, nivel general (índice base dic. 2016)",
        fuente="datosgob", id="148.3_INIVELNAL_DICI_M_26", unidad="indice", frecuencia="mensual",
        palabras_clave=["indice de precios", "ipc nivel general", "nivel general"],
        excluir=_NO_ES_NIVEL, advertencias=[_REZAGO_IPC],
    ),
    EntradaCatalogo(
        clave="ipc_nucleo_mensual", nombre="IPC núcleo nacional, variación mensual calculada",
        fuente="datosgob", id="148.3_INUCLEONAL_DICI_M_19", unidad="porcentaje", frecuencia="mensual",
        palabras_clave=["nucleo"], excluir=["interanual", "semana", "semanal", "puntos porcentuales", "p.p."],
        calculo="variacion_mensual", advertencias=[_REZAGO_IPC],
    ),
    EntradaCatalogo(
        clave="ipc_regulados_mensual", nombre="IPC regulados nacional, variación mensual calculada",
        fuente="datosgob", id="148.3_IREGULANAL_DICI_M_22", unidad="porcentaje", frecuencia="mensual",
        palabras_clave=["regulados"], excluir=["interanual", "semana", "semanal", "puntos porcentuales", "p.p."],
        calculo="variacion_mensual", advertencias=[_REZAGO_IPC],
    ),
]


_ANUAL = "datos anuales con rezago de uno a tres años: no sirven para el dato del mes o del día"
_FUENTE_BM = "Fuente: Banco Mundial (World Development Indicators)"
_NO_ES_BM = ["indec", "trimestr", "mensual", "semana", "semanal", "interanual", "per capita"]

CATALOGO += [
    EntradaCatalogo(
        clave="bm_inflacion_anual", nombre="Inflación, precios al consumidor (% anual)",
        fuente="bancomundial", id="FP.CPI.TOTL.ZG", unidad="porcentaje", frecuencia="anual",
        palabras_clave=["inflacion"], requerir=["banco mundial"],
        excluir=_NO_ES_BM + ["acumulad", "nucleo", "regulad"],
        advertencias=[
            _FUENTE_BM,
            "definición: variación porcentual anual promedio del IPC; no es la inflación diciembre a diciembre del INDEC",
            _ANUAL,
        ],
    ),
    EntradaCatalogo(
        clave="bm_crecimiento_pib", nombre="Crecimiento del PIB (% anual)",
        fuente="bancomundial", id="NY.GDP.MKTP.KD.ZG", unidad="porcentaje", frecuencia="anual",
        palabras_clave=["pib crecio", "crecio el pib", "crecimiento del pib", "expansion del pib",
                        "crecimiento de la economia"],
        excluir=_NO_ES_BM + ["% del pib", "por ciento del pib", "deuda", "gasto", "deficit", "superavit",
                             "inversion", "educacion", "inflacion"],
        advertencias=[
            _FUENTE_BM,
            "definición: crecimiento anual del PIB a precios constantes; puede diferir de las revisiones del INDEC",
            _ANUAL,
        ],
    ),
    EntradaCatalogo(
        clave="bm_desempleo", nombre="Desempleo total (% de la fuerza laboral)",
        fuente="bancomundial", id="SL.UEM.TOTL.ZS", unidad="porcentaje", frecuencia="anual",
        palabras_clave=["desempleo", "desocupacion"],
        excluir=_NO_ES_BM + ["juvenil", "jovenes", "mujeres", "varones", "gba", "conurbano", "gran buenos aires"],
        advertencias=[
            _FUENTE_BM,
            "definición: estimación modelada de la OIT; no es la tasa de desocupación de la EPH del INDEC",
            _ANUAL,
        ],
    ),
    EntradaCatalogo(
        clave="bm_gasto_educacion", nombre="Gasto público en educación (% del PIB)",
        fuente="bancomundial", id="SE.XPD.TOTL.GD.ZS", unidad="porcentaje", frecuencia="anual",
        palabras_clave=["gasto en educacion", "gasto publico en educacion", "gasto educativo"],
        requerir=["pib"], excluir=_NO_ES_BM + ["universitari", "provincia"],
        advertencias=[
            _FUENTE_BM,
            "definición: gasto público total en educación como porcentaje del PIB (consolidado, según reporta el país al Banco Mundial)",
            _ANUAL,
        ],
    ),
    EntradaCatalogo(
        clave="bm_pib_usd", nombre="PIB (US$ corrientes)",
        fuente="bancomundial", id="NY.GDP.MKTP.CD", unidad="dolares", frecuencia="anual",
        palabras_clave=["pib", "producto interno bruto"], escala_por_texto=True,
        excluir=_NO_ES_BM + ["crec", "expansi", "contrac", "del pib", "deuda", "deficit", "superavit",
                             "inversion", "gasto", "reservas"],
        advertencias=[
            _FUENTE_BM,
            "definición: PIB a precios corrientes en dólares estadounidenses (tipo de cambio oficial promedio del año)",
            _ANUAL,
        ],
    ),
    EntradaCatalogo(
        clave="bm_pobreza_3usd", nombre="Pobreza a US$ 3,00 por día (PPA 2021, % de la población)",
        fuente="bancomundial", id="SI.POV.DDAY", unidad="porcentaje", frecuencia="anual",
        palabras_clave=["pobreza"],
        requerir=["3 dolares", "us$3", "us$ 3", "usd 3", "usd3", "u$s 3", "u$s3", "3 por dia", "3 al dia"],
        excluir=_NO_ES_BM + ["indigencia", "extrema"],
        advertencias=[
            _FUENTE_BM,
            "definición: población que vive con menos de US$ 3,00 por día (PPA 2021); no es la pobreza por ingresos del INDEC",
            _ANUAL,
        ],
    ),
]


def buscar_entrada(texto: str, unidad: str, contexto: str | None = None) -> EntradaCatalogo | None:
    """Reconoce el indicador por palabras clave; gana la palabra clave más larga.

    Cerrado a propósito: sin coincidencia clara o con unidad incompatible, devuelve None.
    """
    plano = normalizar(texto)
    ctx = normalizar(contexto) if contexto is not None else plano
    mejor: tuple[int, EntradaCatalogo] | None = None
    for entrada in CATALOGO:
        if entrada.unidad != unidad:
            continue
        if "banco mundial" in ctx and entrada.fuente != "bancomundial":
            continue  # si la frase cita al Banco Mundial, solo vale su serie
        if any(x in plano for x in entrada.excluir):
            continue
        if entrada.requerir and not any(x in ctx for x in entrada.requerir):
            continue
        largo = max((len(k) for k in entrada.palabras_clave if k in plano), default=0)
        if largo and (mejor is None or largo > mejor[0]):
            mejor = (largo, entrada)
    return mejor[1] if mejor else None


def series_a_guardar() -> list[tuple[str, str]]:
    """(fuente, id) únicos del catálogo, en orden estable."""
    vistos: dict[tuple[str, str], None] = {}
    for e in CATALOGO:
        vistos[(e.fuente, e.id)] = None
    return list(vistos)
