"""Carga de las series de los contextos: API primero, copia guardada si la red falla.

En modo "guardado" no sale nunca a la red (la demo y los tests corren así). Las copias se refrescan
a propósito con `scripts/guardar_contexto.py`.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Literal

from ..series.bcra import Punto
from ..series.datosgob import pedir_datosgob
from ..series.modelos import ErrorFuente
from .catalogo import DESDE_SERIES, SerieRef

DIRECTORIO_GUARDADO = Path(__file__).parent / "guardado"
HASTA_ABIERTO = "2099-12-31"  # la API ya corta en el último dato publicado

Origen = Literal["api", "guardado"]


def ruta_copia(id_serie: str, directorio: Path | None = None) -> Path:
    return (directorio or DIRECTORIO_GUARDADO) / f"datosgob_{id_serie}.json"


def guardar_copia(id_serie: str, puntos: list[Punto], directorio: Path | None = None) -> Path:
    ruta = ruta_copia(id_serie, directorio)
    ruta.parent.mkdir(parents=True, exist_ok=True)
    cuerpo = {"fuente": "datosgob", "id": id_serie, "puntos": [{"fecha": f, "valor": v} for f, v in puntos]}
    ruta.write_text(json.dumps(cuerpo, ensure_ascii=False, indent=1), encoding="utf-8")
    return ruta


def _desde_copia(id_serie: str, directorio: Path | None) -> list[Punto]:
    try:
        cuerpo = json.loads(ruta_copia(id_serie, directorio).read_text(encoding="utf-8"))
        puntos = [(str(p["fecha"]), float(p["valor"])) for p in cuerpo["puntos"]]
    except (OSError, ValueError, KeyError, TypeError) as exc:
        raise ErrorFuente(f"sin copia guardada utilizable para datos.gob.ar {id_serie}") from exc
    if not puntos:
        raise ErrorFuente(f"copia guardada vacía para datos.gob.ar {id_serie}")
    return sorted(puntos)


def cargar_serie(ref: SerieRef, modo: str = "guardado", directorio: Path | None = None) -> tuple[list[Punto], Origen]:
    """Puntos de la serie y de dónde salieron. Lanza ErrorFuente si no hay ni API ni copia."""
    if modo != "guardado":
        try:
            puntos = pedir_datosgob(ref.id, DESDE_SERIES, HASTA_ABIERTO)
            if puntos:
                return puntos, "api"
            raise ErrorFuente(f"datos.gob.ar {ref.id} devolvió 0 puntos")
        except ErrorFuente:
            if modo == "api":
                raise
    return _desde_copia(ref.id, directorio), "guardado"
