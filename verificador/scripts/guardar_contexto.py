"""Refresca las copias guardadas de las series de los contextos.

Sale a la red a propósito (API de series de tiempo de datos.gob.ar). Uso:
    cd verificador && uv run python scripts/guardar_contexto.py
"""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from verificador.contexto.series import guardar_copia  # noqa: E402
from verificador.contexto.catalogo import DESDE_SERIES, series_a_guardar  # noqa: E402
from verificador.series.datosgob import pedir_datosgob  # noqa: E402
from verificador.series.modelos import ErrorFuente  # noqa: E402


def main() -> int:
    fallas = 0
    for ref in series_a_guardar():
        try:
            puntos = pedir_datosgob(ref.id, DESDE_SERIES, "2099-12-31")
        except ErrorFuente as exc:
            fallas += 1
            print(f"FALLA {ref.id}: {exc}")
            continue
        if not puntos:
            fallas += 1
            print(f"FALLA {ref.id}: la API devolvió 0 puntos")
            continue
        ruta = guardar_copia(ref.id, puntos)
        print(f"ok {ref.id}: {len(puntos)} puntos, {puntos[0][0]} a {puntos[-1][0]} -> {ruta.name}")
    return 1 if fallas else 0


if __name__ == "__main__":
    sys.exit(main())
