"""Coincidencia flexible de entidades y fuentes contra el texto de la nota.

Acepta alias, siglas y apellido solo. Solo dice si el nombre figura en la nota.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from functools import lru_cache
from typing import Literal

from verificador.texto import Ubicacion, plegar, ubicacion_en_rango

Nivel = Literal["completa", "parcial", "ninguna"]

# Grupos de equivalencias frecuentes (ya sin tildes ni mayúsculas).
_GRUPOS_BRUTOS: tuple[tuple[str, ...], ...] = (
    ("bcra", "banco central", "banco central de la republica argentina"),
    ("indec", "instituto nacional de estadistica y censos"),
    ("fmi", "fondo monetario internacional"),
    ("casa rosada", "poder ejecutivo"),
    ("afip", "arca", "agencia de recaudacion y control aduanero"),
    ("ee.uu.", "eeuu", "ee. uu.", "estados unidos"),
    ("cgt", "confederacion general del trabajo"),
    ("uba", "universidad de buenos aires"),
    ("pbi", "pib", "producto bruto interno", "producto interno bruto"),
    ("anses", "administracion nacional de la seguridad social"),
    ("bid", "banco interamericano de desarrollo"),
    ("onu", "naciones unidas", "organizacion de las naciones unidas"),
    ("tesoro", "tesoro nacional"),
    ("banco nacion", "banco de la nacion argentina"),
    ("conicet", "consejo nacional de investigaciones cientificas y tecnicas"),
    ("csjn", "corte suprema", "corte suprema de justicia de la nacion", "suprema corte"),
    ("congreso", "congreso de la nacion", "congreso nacional"),
    ("udesa", "universidad de san andres"),
    ("bcr", "bolsa de comercio de rosario"),
    ("ypf", "yacimientos petroliferos fiscales"),
    ("ocde", "organizacion para la cooperacion y el desarrollo economicos"),
)

# Palabras que abren nombres de instituciones o descripciones: no cuentan como "nombre propio".
_GENERICAS = frozenset(
    """estudio estudios informe informes datos registros estimaciones entrevistas universidad instituto
    ministerio secretaria centro consultora consultoras analistas analista operador economista profesor
    investigador presidente director banco fondo nacional internacional encuesta relevamiento fuentes
    fuente nota articulo medios propio propios sobre segun""".split()
)

_PALABRA = re.compile(r"[^\W\d_]+", re.UNICODE)
_PARENTESIS = re.compile(r"\(([^)]+)\)")


@dataclass(frozen=True)
class Coincidencia:
    nivel: Nivel
    ubicacion: Ubicacion | None
    motivo: str
    tiene_nombres: bool


def _fold(s: str) -> str:
    return re.sub(r"\s+", " ", plegar(s)[0]).strip()


_GRUPOS = tuple(tuple(_fold(a) for a in g) for g in _GRUPOS_BRUTOS)


@lru_cache(maxsize=32)
def _plegado(cuerpo: str) -> tuple[str, list[int]]:
    return plegar(cuerpo)


def _buscar(cuerpo: str, termino: str) -> Ubicacion | None:
    t = _fold(termino)
    if not t:
        return None
    plegado, mapa = _plegado(cuerpo)
    m = re.search(r"(?<!\w)" + re.escape(t) + r"(?!\w)", plegado)
    if not m:
        return None
    return ubicacion_en_rango(cuerpo, mapa[m.start()], mapa[m.end() - 1] + 1, exacta=False)


def _principal(texto: str) -> str:
    return re.split(r",|\(| - ", texto, maxsplit=1)[0].strip()


def _nombres(texto: str, minimo: int = 4) -> list[str]:
    """Palabras capitalizadas (nombres propios) de `minimo`+ letras, sin las genéricas."""
    vistos: list[str] = []
    for m in _PALABRA.finditer(texto):
        p = m.group(0)
        if len(p) >= minimo and p[0].isupper() and _fold(p) not in _GENERICAS and _fold(p) not in vistos:
            vistos.append(_fold(p))
    return vistos


def _siglas(texto: str) -> list[str]:
    """Siglas: lo que va entre paréntesis y las palabras en mayúsculas de 2+ letras."""
    entre = [s.strip() for m in _PARENTESIS.finditer(texto) for s in [m.group(1)] if len(s.strip()) <= 12]
    sueltas = [p for p in _PALABRA.findall(_PARENTESIS.sub(" ", texto)) if p.isupper() and len(p) >= 2]
    return list(dict.fromkeys(entre + sueltas))


def _alias_de(terminos: list[str]) -> list[str]:
    plegados = {_fold(t) for t in terminos}
    extra: list[str] = []
    for grupo in _GRUPOS:
        if plegados & set(grupo):
            extra.extend(grupo)
    return extra


def coincidir(cuerpo: str, texto: str) -> Coincidencia:
    """Compara una fuente o nombre con la nota.

    completa: figura la entidad principal, su sigla entre paréntesis, un alias de la tabla
    o todos sus nombres propios de 4+ letras. parcial: figura solo parte de sus nombres o siglas.
    """
    principal = _principal(texto)
    entre = [s.strip() for m in _PARENTESIS.finditer(texto) for s in [m.group(1)] if len(s.strip()) <= 12]
    candidatos = [principal, *entre]
    candidatos += _alias_de(candidatos)
    for c in candidatos:
        ub = _buscar(cuerpo, c)
        if ub:
            return Coincidencia("completa", ub, f"figura '{c}'", True)
    nombres_principal = _nombres(principal)
    ubicaciones = {n: _buscar(cuerpo, n) for n in nombres_principal}
    if nombres_principal and all(ubicaciones.values()):
        primera = min((u for u in ubicaciones.values() if u), key=lambda u: u.inicio)
        return Coincidencia("completa", primera, "figuran todos sus nombres propios", True)
    todos = list(dict.fromkeys(_nombres(texto) + [_fold(s) for s in _siglas(texto)]))
    hallados = [(n, _buscar(cuerpo, n)) for n in todos]
    hallados = [(n, u) for n, u in hallados if u]
    if hallados:
        n, u = min(hallados, key=lambda h: h[1].inicio)
        return Coincidencia("parcial", u, f"solo figura '{n}'", True)
    return Coincidencia("ninguna", None, "no figura ningún nombre propio ni sigla", bool(todos))
