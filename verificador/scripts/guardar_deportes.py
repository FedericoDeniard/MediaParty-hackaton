"""Guarda copias de los datos de fútbol que usan los contextos de deportes.

Los baja de Wikipedia en español (texto CC BY-SA 4.0) y los escribe en
`src/verificador/contexto/guardado/`. Se corre a mano, cuando se quiere refrescar:

    uv run python -X utf8 scripts/guardar_deportes.py

Los contextos nunca salen a la red: leen estas copias, que dicen de qué fecha son.
"""
from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

DESTINO = Path(__file__).resolve().parents[1] / "src" / "verificador" / "contexto" / "guardado"
API = "https://es.wikipedia.org/w/api.php"
PAGINA_LIGA = "Campeonato de Primera División 2026 (Argentina)"
PAGINA_SUPERCLASICO = "Superclásico del fútbol argentino"
SECCION_TABLA_GENERAL = 22
SECCION_HISTORIAL_PRIMERA = 17
# Wikimedia pide un User-Agent que identifique quién llama.
USER_AGENT = {"User-Agent": "NexoMediaParty/0.1 (hackaton MediaParty) python-urllib"}

FILA_TABLA = re.compile(
    r"\{\{Tabla de posiciones equipo\|pos=(?P<pos>\d+)\|g=(?P<g>\d+)\|e=(?P<e>\d+)\|p=(?P<p>\d+)"
    r"\|gf=(?P<gf>\d+)\|gc=(?P<gc>\d+)\|eq=(?P<eq>.+?)(?:\|color=[^|}]*)?\}\}$"
)
NOTA_AL_PIE = re.compile(r"\{\{refn\|.*?\}\}")


def _wikitext(pagina: str, seccion: int) -> str:
    consulta = urllib.parse.urlencode(
        {"action": "parse", "page": pagina, "prop": "wikitext", "section": seccion, "format": "json", "formatversion": 2}
    )
    with urllib.request.urlopen(urllib.request.Request(f"{API}?{consulta}", headers=USER_AGENT), timeout=30) as respuesta:
        return json.load(respuesta)["parse"]["wikitext"]


def _enlace(pagina: str) -> str:
    return "https://es.wikipedia.org/wiki/" + urllib.parse.quote(pagina.replace(" ", "_"))


def tabla_anual() -> dict:
    filas = []
    for linea in _wikitext(PAGINA_LIGA, SECCION_TABLA_GENERAL).splitlines():
        coincidencia = FILA_TABLA.match(NOTA_AL_PIE.sub("", linea).strip())
        if not coincidencia:
            continue
        d = coincidencia.groupdict()
        g, e, p = int(d["g"]), int(d["e"]), int(d["p"])
        filas.append(
            {
                "posicion": int(d["pos"]),
                "equipo": re.sub(r"\s*\(.*?\)$", "", d["eq"]).strip(),  # "Sarmiento (J)" -> "Sarmiento"
                "puntos": 3 * g + e,
                "jugados": g + e + p,
                "diferencia_gol": int(d["gf"]) - int(d["gc"]),
            }
        )
    if len(filas) < 20:
        raise SystemExit(f"la tabla trajo {len(filas)} filas: la página cambió de formato")
    return {
        "fuente": "wikipedia",
        "pagina": PAGINA_LIGA,
        "enlace": _enlace(PAGINA_LIGA),
        "copiado": date.today().isoformat(),
        "filas": filas,
    }


def historial_superclasico() -> dict:
    texto = _wikitext(PAGINA_SUPERCLASICO, SECCION_HISTORIAL_PRIMERA)
    boca = re.search(r"Victorias de Boca Juniors'''\|\|'''(\d+)", texto)
    empates = re.search(r"Empates'''\|\|'''(\d+)", texto)
    river = re.search(r"Victorias de River Plate'''\|\|'''(\d+)", texto)
    total = re.search(r"Total!!width=\d+%\|(\d+)", texto)
    if not (boca and empates and river and total):
        raise SystemExit("no se encontró el historial en Primera: la página cambió de formato")
    datos = {
        "boca": int(boca[1]),
        "empates": int(empates[1]),
        "river": int(river[1]),
        "total": int(total[1]),
    }
    if datos["boca"] + datos["empates"] + datos["river"] != datos["total"]:
        raise SystemExit(f"el historial no cierra: {datos}")
    return {
        "fuente": "wikipedia",
        "pagina": PAGINA_SUPERCLASICO,
        "enlace": _enlace(PAGINA_SUPERCLASICO),
        "copiado": date.today().isoformat(),
        "competicion": "Primera División",
        **datos,
    }


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for nombre, contenido in (
        ("wikipedia_tabla_anual.json", tabla_anual()),
        ("wikipedia_historial_superclasico.json", historial_superclasico()),
    ):
        (DESTINO / nombre).write_text(json.dumps(contenido, ensure_ascii=False, indent=1), encoding="utf-8")
        print("guardado", nombre)


if __name__ == "__main__":
    main()
