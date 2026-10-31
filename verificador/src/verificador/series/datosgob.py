"""Pedido de series a la API de series de tiempo de datos.gob.ar (solo desde el servidor)."""

from __future__ import annotations

import httpx

from .bcra import USER_AGENT, TIMEOUT_SEGUNDOS, Punto
from .modelos import ErrorFuente

BASE_DATOSGOB = "https://apis.datos.gob.ar/series/api/series/"
LIMITE_PUNTOS = 120


def enlace_datosgob(id_serie: str) -> str:
    return f"{BASE_DATOSGOB}?ids={id_serie}&limit=12&sort=desc&format=json"


def extraer_puntos(cuerpo: dict) -> list[Punto]:
    """La API devuelve {"data": [[fecha, valor], ...]}; descartamos los valores nulos."""
    try:
        filas = cuerpo["data"]
        puntos = [(str(f[0])[:10], float(f[1])) for f in filas if f[1] is not None]
    except (KeyError, IndexError, TypeError, ValueError) as exc:
        raise ErrorFuente(f"respuesta de datos.gob.ar con forma inesperada: {exc!r}") from exc
    return sorted(puntos)


def pedir_datosgob(
    id_serie: str,
    desde: str,
    hasta: str,
    http: httpx.Client | None = None,
) -> list[Punto]:
    """Puntos de la serie desde `desde` (ordenados de más viejo a más nuevo).

    `hasta` se ignora en el pedido (la API ya corta en el último dato publicado)
    y se aplica acá para que las dos fuentes se comporten igual.
    """
    params = {
        "ids": id_serie,
        "limit": LIMITE_PUNTOS,
        "sort": "desc",
        "format": "json",
        "start_date": desde,
    }
    cabeceras = {"User-Agent": USER_AGENT, "Accept": "application/json"}
    propio = http is None
    cliente = http or httpx.Client(timeout=TIMEOUT_SEGUNDOS)
    try:
        resp = cliente.get(BASE_DATOSGOB, params=params, headers=cabeceras)
        resp.raise_for_status()
        puntos = extraer_puntos(resp.json())
    except (httpx.HTTPError, ValueError) as exc:
        raise ErrorFuente(f"datos.gob.ar serie {id_serie}: {exc!r}") from exc
    finally:
        if propio:
            cliente.close()
    return [p for p in puntos if p[0] <= hasta]
