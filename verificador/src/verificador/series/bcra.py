"""Pedido de variables monetarias a la API del BCRA v4.0 (solo desde el servidor)."""

from __future__ import annotations

import httpx

from .modelos import ErrorFuente

BASE_BCRA = "https://api.bcra.gob.ar/estadisticas/v4.0/Monetarias"
USER_AGENT = "verificador-media-party/0.1 (hackaton; cruce de cifras con series oficiales)"
TIMEOUT_SEGUNDOS = 8.0
LIMITE_PUNTOS = 1000

Punto = tuple[str, float]  # (fecha ISO "AAAA-MM-DD", valor)


def enlace_bcra(id_variable: str) -> str:
    return f"{BASE_BCRA}/{id_variable}"


def extraer_puntos(cuerpo: dict) -> list[Punto]:
    """Saca (fecha, valor) de results[0].detalle; falla fuerte si la forma cambió."""
    try:
        detalle = cuerpo["results"][0]["detalle"]
        puntos = [(str(d["fecha"])[:10], float(d["valor"])) for d in detalle]
    except (KeyError, IndexError, TypeError, ValueError) as exc:
        raise ErrorFuente(f"respuesta del BCRA con forma inesperada: {exc!r}") from exc
    return sorted(puntos)


def pedir_bcra(
    id_variable: str,
    desde: str,
    hasta: str,
    http: httpx.Client | None = None,
) -> list[Punto]:
    """Devuelve los puntos de la variable entre `desde` y `hasta`, de más viejo a más nuevo."""
    url = enlace_bcra(id_variable)
    params = {"desde": desde, "hasta": hasta, "limit": LIMITE_PUNTOS}
    cabeceras = {"User-Agent": USER_AGENT, "Accept": "application/json"}
    propio = http is None
    cliente = http or httpx.Client(timeout=TIMEOUT_SEGUNDOS)
    try:
        resp = cliente.get(url, params=params, headers=cabeceras)
        resp.raise_for_status()
        return extraer_puntos(resp.json())
    except (httpx.HTTPError, ValueError) as exc:
        raise ErrorFuente(f"BCRA variable {id_variable}: {exc!r}") from exc
    finally:
        if propio:
            cliente.close()
