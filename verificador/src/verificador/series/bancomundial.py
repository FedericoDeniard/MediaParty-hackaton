"""Pedido de indicadores anuales al Banco Mundial (World Development Indicators), solo desde el servidor."""

from __future__ import annotations

import httpx

from .bcra import USER_AGENT, TIMEOUT_SEGUNDOS, Punto
from .modelos import ErrorFuente

BASE_BANCOMUNDIAL = "https://api.worldbank.org/v2/country/ARG/indicator"
ANIOS_A_PEDIR = 20


def enlace_bancomundial(id_indicador: str) -> str:
    return f"{BASE_BANCOMUNDIAL}/{id_indicador}?format=json&per_page={ANIOS_A_PEDIR}&mrv=6"


def extraer_puntos(cuerpo: object) -> list[Punto]:
    """La API devuelve [meta, datos]; el valor puede ser null (año sin dato publicado)."""
    try:
        datos = cuerpo[1]  # type: ignore[index]
        if datos is None:
            return []
        puntos = [(str(d["date"]), float(d["value"])) for d in datos if d["value"] is not None]
    except (KeyError, IndexError, TypeError, ValueError) as exc:
        raise ErrorFuente(f"respuesta del Banco Mundial con forma inesperada: {exc!r}") from exc
    return sorted(puntos)


def pedir_bancomundial(
    id_indicador: str,
    desde: str,
    hasta: str,
    http: httpx.Client | None = None,
) -> list[Punto]:
    """Puntos anuales (fecha = "AAAA") de más viejo a más nuevo. `desde` y `hasta` filtran por año."""
    params = {"format": "json", "per_page": ANIOS_A_PEDIR, "mrv": ANIOS_A_PEDIR}
    cabeceras = {"User-Agent": USER_AGENT, "Accept": "application/json"}
    propio = http is None
    cliente = http or httpx.Client(timeout=TIMEOUT_SEGUNDOS)
    try:
        resp = cliente.get(f"{BASE_BANCOMUNDIAL}/{id_indicador}", params=params, headers=cabeceras)
        resp.raise_for_status()
        puntos = extraer_puntos(resp.json())
    except (httpx.HTTPError, ValueError) as exc:
        raise ErrorFuente(f"Banco Mundial indicador {id_indicador}: {exc!r}") from exc
    finally:
        if propio:
            cliente.close()
    return [p for p in puntos if desde[:4] <= p[0] <= hasta[:4]]
