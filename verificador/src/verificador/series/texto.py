"""Heurística con regex: de una frase simple en español a una AfirmacionNumerica.

El modelo de lenguaje propone; esto es solo un respaldo para frases simples.
Cifras en formato argentino: 1,9% ; 1.537,35 ; US$ 50.580 millones.
"""

from __future__ import annotations

import re
from datetime import date

from .catalogo import normalizar
from .modelos import AfirmacionNumerica

MESES = {
    "enero": 1, "febrero": 2, "marzo": 3, "abril": 4, "mayo": 5, "junio": 6, "julio": 7,
    "agosto": 8, "septiembre": 9, "setiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12,
}

_NUMERO = r"\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?"
_RE_CIFRA = re.compile(
    rf"(?P<moneda>US\$|U\$S|USD|\$)?\s?(?P<num>{_NUMERO})(?P<resto>\s?(?:%|por ciento|millones|mil millones)?)",
    re.IGNORECASE,
)
_RE_FECHA = re.compile(r"\b(\d{1,2})/(\d{1,2})(?:/(\d{2,4}))?\b")
_RE_ANIO = re.compile(r"(?<![\d$.,])\b(?:19|20)\d{2}\b(?![.,]\d|\s?%|\s?millones)")
_RE_POR_DIA = re.compile(r"\s*(?:por|al) dia")
_INDICADORES = [
    "inflación interanual", "inflación mensual", "inflación acumulada", "inflación",
    "reservas internacionales", "reservas", "dólar mayorista", "dólar minorista", "dólar",
]


def parsear_numero(crudo: str) -> tuple[float, int]:
    """'1.537,35' -> (1537.35, 2) ; '50.580' -> (50580.0, 0) ; '1,9' -> (1.9, 1)."""
    if "," in crudo:
        entero, dec = crudo.replace(".", "").split(",", 1)
        return float(f"{entero}.{dec}"), len(dec)
    return float(crudo.replace(".", "")), 0


_MES_RE = "(?:" + "|".join(MESES) + r")(?!\w)"
_RE_DIA_MES = re.compile(r"(?<![\d/])(\d{1,2}) de (" + _MES_RE + r")(?: de ((?:19|20)\d{2}))?")
_RE_MES = re.compile(r"(?<![\w])(" + _MES_RE + r")(?: de ((?:19|20)\d{2}))?")


def _candidatos_periodo(plano: str, anio_defecto: int) -> list[tuple[int, str]]:
    """(posición, período) de cada fecha, mes o año mencionados, sin repetir el mismo texto."""
    out: list[tuple[int, str]] = []
    libre = list(plano)

    def tomar(m: re.Match, periodo: str) -> None:
        out.append((m.start(), periodo))
        libre[m.start():m.end()] = " " * (m.end() - m.start())

    for m in _RE_FECHA.finditer(plano):
        dia, mes, anio = int(m[1]), int(m[2]), m[3]
        a = anio_defecto if anio is None else (int(anio) + (2000 if len(anio) == 2 else 0))
        if 1 <= mes <= 12 and 1 <= dia <= 31:
            tomar(m, f"{a:04d}-{mes:02d}-{dia:02d}")
    for m in _RE_DIA_MES.finditer("".join(libre)):
        a = int(m[3]) if m[3] else anio_defecto
        tomar(m, f"{a:04d}-{MESES[m[2]]:02d}-{int(m[1]):02d}")
    for m in _RE_MES.finditer("".join(libre)):
        a = int(m[2]) if m[2] else anio_defecto
        tomar(m, f"{a:04d}-{MESES[m[1]]:02d}")
    for m in _RE_ANIO.finditer("".join(libre)):
        tomar(m, m[0])
    return sorted(out)


def periodo_desde_texto(texto: str, anio_defecto: int, ancla: int | None = None) -> str | None:
    """'26/10/2026' -> '2026-10-26' ; 'septiembre de 2026' -> '2026-09' ; '2026' -> '2026'.

    Con `ancla` (posición del indicador en el texto normalizado) el período es el que
    acompaña al indicador: el primero que aparece después; si no hay, el más cercano antes.
    """
    candidatos = _candidatos_periodo(normalizar(texto), anio_defecto)
    if not candidatos:
        return None
    if ancla is None:
        return candidatos[0][1]
    despues = [p for pos, p in candidatos if pos >= ancla]
    return despues[0] if despues else candidatos[-1][1]


def desde_texto(texto: str, anio_defecto: int | None = None) -> AfirmacionNumerica | None:
    """Primera cifra con unidad reconocible de la frase; None si no encuentra ninguna."""
    anio = anio_defecto or date.today().year
    limpio = _RE_ANIO.sub(" ", _RE_FECHA.sub(" ", texto))
    elegida = None
    for m in _RE_CIFRA.finditer(limpio):
        if _RE_POR_DIA.match(normalizar(limpio[m.end():m.end() + 12])):
            continue  # "US$ 3 por día" es un umbral, no la cifra dicha
        if m["moneda"] or "%" in m["resto"] or "por ciento" in m["resto"].lower():
            elegida = m
            break
        elegida = elegida or m
    if elegida is None:
        return None
    valor, decimales = parsear_numero(elegida["num"])
    moneda = (elegida["moneda"] or "").upper()
    if "%" in elegida["resto"] or "por ciento" in elegida["resto"].lower():
        unidad = "porcentaje"
    elif moneda in ("US$", "U$S", "USD") or "dolares" in normalizar(texto):
        unidad = "dolares" if moneda or "millones" in elegida["resto"] else "otra"
    elif moneda == "$":
        unidad = "pesos"
    else:
        unidad = "otra"
    plano = texto.lower()
    indicador = next((i for i in _INDICADORES if i in plano), None)
    ancla = normalizar(texto).find(normalizar(indicador)) if indicador else None
    if ancla is not None and ancla < 0:
        ancla = None
    if indicador == "inflación" and "mensual" in plano:
        indicador = "inflación mensual"
    return AfirmacionNumerica(
        texto=texto.strip(), indicador=indicador, valor=valor, unidad=unidad,
        decimales=decimales, periodo=periodo_desde_texto(texto, anio, ancla),
    )
