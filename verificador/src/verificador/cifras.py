"""Extracción y normalización de cifras en formato argentino.

Se compara el valor numérico normalizado y la unidad (cuando existe), no el texto.
"""

from __future__ import annotations

import re
import unicodedata
from decimal import Decimal, InvalidOperation

from pydantic import BaseModel, ConfigDict

_MULTIPLICADORES = {
    "mil millones": Decimal(10) ** 9,
    "millones": Decimal(10) ** 6,
    "millon": Decimal(10) ** 6,
    "mil": Decimal(10) ** 3,
    "billones": Decimal(10) ** 12,
    "billon": Decimal(10) ** 12,
}

_PALABRAS = {
    "cero": 0, "un": 1, "uno": 1, "una": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5,
    "seis": 6, "siete": 7, "ocho": 8, "nueve": 9, "diez": 10, "once": 11, "doce": 12,
    "trece": 13, "catorce": 14, "quince": 15, "dieciseis": 16, "diecisiete": 17,
    "dieciocho": 18, "diecinueve": 19, "veinte": 20, "treinta": 30, "cuarenta": 40,
    "cincuenta": 50, "sesenta": 60, "setenta": 70, "ochenta": 80, "noventa": 90, "cien": 100,
}

_MESES = "enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre"

_PATRON = re.compile(
    r"(?P<moneda>US\$|U\$S|U\$D|USD|\$)?[  ]*"
    r"(?:(?P<num>\d[\d.,]*\d|\d)|\b(?P<pal>" + "|".join(sorted(_PALABRAS, key=len, reverse=True)) + r")\b)"
    r"(?:[  ]+(?P<mult>mil[  ]+millones|millones|millón|millon|mil|billones|billón|billon)\b)?"
    r"(?:[  ]*(?P<suf>%|por[  ]+ciento|p\.p\.?|pp\b|puntos[  ]+porcentuales|"
    r"puntos[  ]+básicos|puntos[  ]+basicos|(?:de[  ]+)?(?:dólares|dolares|pesos)))?",
    re.IGNORECASE,
)
_SIGUE_MES = re.compile(r"[  ]+de[  ]+(?:" + _MESES + r")\b", re.IGNORECASE)


class Cifra(BaseModel):
    model_config = ConfigDict(frozen=True)

    texto: str
    valor: Decimal
    unidad: str | None
    inicio: int
    fin: int


def _sin_tildes(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", s) if not unicodedata.combining(c)).lower()


def parsear_numero(token: str) -> Decimal | None:
    """Parsea '1.537,35', '1,9', '50.580', '1536' o '1.5' (decimal con punto)."""
    if "." in token and "," in token:
        if token.rfind(",") < token.rfind("."):
            return None  # formato inglés (1,537.35): no se arriesga una interpretación
        limpio = token.replace(".", "").replace(",", ".")
    elif "," in token:
        if token.count(",") > 1:
            return None
        limpio = token.replace(",", ".")
    elif "." in token:
        if re.fullmatch(r"\d{1,3}(?:\.\d{3})+", token):
            limpio = token.replace(".", "")
        elif token.count(".") == 1:
            limpio = token
        else:
            return None
    else:
        limpio = token
    try:
        return Decimal(limpio)
    except InvalidOperation:
        return None


def _unidad(moneda: str | None, suf: str | None) -> str | None:
    if suf:
        s = _sin_tildes(re.sub(r"\s+", " ", suf))
        if s == "%" or s == "por ciento":
            return "%"
        if s.startswith("p.p") or s == "pp" or s == "puntos porcentuales":
            return "pp"
        if s.startswith("puntos basicos"):
            return "pb"
        if "dolares" in s:
            return "usd"
        if "pesos" in s:
            return "ars"
    if moneda:
        return "ars" if moneda == "$" else "usd"
    return None


def _es_anio(token: str, valor: Decimal) -> bool:
    return token.isdigit() and len(token) == 4 and 1900 <= valor <= 2100


def extraer_cifras(texto: str, incluir_palabras: bool = False) -> tuple[Cifra, ...]:
    """Extrae cifras. Salta años sueltos, días de fecha ('15 de marzo') y fechas con barra."""
    cifras: list[Cifra] = []
    for m in _PATRON.finditer(texto):
        if m.group("pal") and not incluir_palabras:
            continue
        if m.group("num"):
            token = m.group("num")
            valor = parsear_numero(token)
            if valor is None:
                continue
            ini_num, fin_num = m.start("num"), m.end("num")
            previo = texto[ini_num - 1] if ini_num > 0 else ""
            siguiente = texto[fin_num] if fin_num < len(texto) else ""
            if previo == "/" or siguiente == "/":
                continue
        else:
            valor = Decimal(_PALABRAS[_sin_tildes(m.group("pal"))])
            token = ""
        mult = m.group("mult")
        if mult:
            valor *= _MULTIPLICADORES[_sin_tildes(re.sub(r"\s+", " ", mult))]
        unidad = _unidad(m.group("moneda"), m.group("suf"))
        if not mult and unidad is None and token:
            if _es_anio(token, valor):
                continue
            if _SIGUE_MES.match(texto, m.end("num")):
                continue
        cifras.append(Cifra(texto=m.group(0).strip(), valor=valor, unidad=unidad, inicio=m.start(), fin=m.end()))
    return tuple(cifras)


def cifra_respaldada(cifra: Cifra, disponibles: tuple[Cifra, ...]) -> bool:
    """Respaldada si hay una cifra de igual valor y, si la pieza declara unidad, igual unidad."""
    for otra in disponibles:
        if otra.valor != cifra.valor:
            continue
        if cifra.unidad is None or cifra.unidad == otra.unidad:
            return True
    return False


def cifras_faltantes(pieza: str, cuerpo: str) -> tuple[Cifra, ...]:
    """Cifras de la pieza (claim) cuya cantidad no aparece en el cuerpo de la nota."""
    disponibles = extraer_cifras(cuerpo, incluir_palabras=True)
    return tuple(c for c in extraer_cifras(pieza) if not cifra_respaldada(c, disponibles))
