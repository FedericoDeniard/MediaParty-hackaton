"""Cliente de series: API primero, copia guardada si la red falla."""

from __future__ import annotations

import json
import time
from collections.abc import Callable
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Literal

from . import bancomundial, bcra, datosgob
from .bcra import Punto
from .modelos import ErrorFuente

Modo = Literal["auto", "api", "guardado"]
Pedidor = Callable[[str, str, str], list[Punto]]  # (id, desde, hasta) -> puntos

DIRECTORIO_GUARDADO = Path(__file__).parent / "guardado"
DESDE_POR_DEFECTO = "2026-01-01"
# datos.gob.ar necesita diciembre para calcular la variación mensual de enero
DESDE_DATOSGOB = "2025-12-01"
DESDE_BANCOMUNDIAL = "2015-01-01"  # datos anuales: alcanzan diez años
DESDE_POR_FUENTE = {"datosgob": DESDE_DATOSGOB, "bancomundial": DESDE_BANCOMUNDIAL}
TTL_CACHE_SEGUNDOS = 600  # una serie pedida hace menos de diez minutos no se vuelve a pedir
PAUSA_TRAS_FALLO_SEGUNDOS = 60  # tras un fallo de red no se insiste durante un minuto


class ClienteSeries:
    def __init__(
        self,
        modo: Modo = "auto",
        directorio_guardado: Path | None = None,
        pedidores: dict[str, Pedidor] | None = None,
    ) -> None:
        if modo not in ("auto", "api", "guardado"):
            raise ValueError(f"modo inválido: {modo!r}")
        self.modo = modo
        self._cache: dict[tuple[str, str], tuple[float, list[Punto], Literal["api", "guardado"]]] = {}
        self._api_en_pausa_hasta = 0.0
        self.directorio = Path(directorio_guardado) if directorio_guardado else DIRECTORIO_GUARDADO
        self._pedidores: dict[str, Pedidor] = {
            "bcra": lambda i, d, h: bcra.pedir_bcra(i, d, h),
            "datosgob": lambda i, d, h: datosgob.pedir_datosgob(i, d, h),
            "bancomundial": lambda i, d, h: bancomundial.pedir_bancomundial(i, d, h),
            **(pedidores or {}),
        }

    def _archivo(self, fuente: str, id_serie: str) -> Path:
        return self.directorio / f"{fuente}_{id_serie}.json"

    def obtener(self, fuente: str, id_serie: str) -> tuple[list[Punto], Literal["api", "guardado"]]:
        """Puntos de la serie y de dónde salieron. Lanza ErrorFuente si no hay ni API ni copia.

        Guarda en memoria cada serie unos minutos, así una nota con veinte cifras no pide
        veinte veces lo mismo. Si la API falla, deja de intentar un rato y usa la copia.
        """
        clave = (fuente, id_serie)
        guardado = self._cache.get(clave)
        if guardado and time.monotonic() - guardado[0] < TTL_CACHE_SEGUNDOS:
            return guardado[1], guardado[2]
        resultado = self._obtener_sin_cache(fuente, id_serie)
        self._cache[clave] = (time.monotonic(), *resultado)
        return resultado

    def _obtener_sin_cache(self, fuente: str, id_serie: str) -> tuple[list[Punto], Literal["api", "guardado"]]:
        if self.modo != "guardado":
            if time.monotonic() < self._api_en_pausa_hasta:
                if self.modo == "api":
                    raise ErrorFuente(f"{fuente} {id_serie}: la API falló hace poco y está en pausa")
            else:
                try:
                    puntos = self._desde_api(fuente, id_serie)
                    if self.modo == "auto":
                        self._guardar_si_es_mas_nuevo(fuente, id_serie, puntos)
                    return puntos, "api"
                except ErrorFuente:
                    self._api_en_pausa_hasta = time.monotonic() + PAUSA_TRAS_FALLO_SEGUNDOS
                    if self.modo == "api":
                        raise
        return self._desde_copia(fuente, id_serie), "guardado"

    def _guardar_si_es_mas_nuevo(self, fuente: str, id_serie: str, puntos: list[Punto]) -> None:
        """No pisa una copia buena con una respuesta que llegue menos lejos en el tiempo."""
        try:
            existente = self._desde_copia(fuente, id_serie)
        except ErrorFuente:
            existente = []
        if not existente or max(f for f, _ in puntos) >= max(f for f, _ in existente):
            self.guardar(fuente, id_serie, puntos)

    def _desde_api(self, fuente: str, id_serie: str) -> list[Punto]:
        desde = DESDE_POR_FUENTE.get(fuente, DESDE_POR_DEFECTO)
        puntos = self._pedidores[fuente](id_serie, desde, date.today().isoformat())
        if not puntos:
            raise ErrorFuente(f"{fuente} {id_serie}: la API no devolvió datos")
        return puntos

    def guardar(self, fuente: str, id_serie: str, puntos: list[Punto]) -> Path:
        self.directorio.mkdir(parents=True, exist_ok=True)
        ruta = self._archivo(fuente, id_serie)
        cuerpo = {
            "fuente": fuente,
            "id": id_serie,
            "guardado_el": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "puntos": [{"fecha": f, "valor": v} for f, v in puntos],
        }
        ruta.write_text(json.dumps(cuerpo, ensure_ascii=False, indent=1), encoding="utf-8")
        return ruta

    def _desde_copia(self, fuente: str, id_serie: str) -> list[Punto]:
        ruta = self._archivo(fuente, id_serie)
        try:
            cuerpo = json.loads(ruta.read_text(encoding="utf-8"))
            puntos = [(str(p["fecha"]), float(p["valor"])) for p in cuerpo["puntos"]]
        except (OSError, ValueError, KeyError, TypeError) as exc:
            raise ErrorFuente(f"sin API y sin copia guardada utilizable para {fuente} {id_serie}") from exc
        if not puntos:
            raise ErrorFuente(f"copia guardada vacía para {fuente} {id_serie}")
        return sorted(puntos)
