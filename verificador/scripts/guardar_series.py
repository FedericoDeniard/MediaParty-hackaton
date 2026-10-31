"""Refresca las copias guardadas de las series del catálogo.

Es la ÚNICA parte del módulo que sale a la red a propósito. Uso:
    cd verificador && uv run python scripts/guardar_series.py
"""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from verificador.series.catalogo import series_a_guardar
from verificador.series.cliente import ClienteSeries
from verificador.series.modelos import ErrorFuente


def main() -> int:
    cliente = ClienteSeries(modo="api")
    fallas = 0
    for fuente, id_serie in series_a_guardar():
        try:
            puntos, _ = cliente.obtener(fuente, id_serie)
        except ErrorFuente as exc:
            fallas += 1
            print(f"FALLA {fuente} {id_serie}: {exc}")
            continue
        ruta = cliente.guardar(fuente, id_serie, puntos)
        print(f"ok {fuente} {id_serie}: {len(puntos)} puntos, último {puntos[-1]} -> {ruta.name}")
    return 1 if fallas else 0


if __name__ == "__main__":
    sys.exit(main())
