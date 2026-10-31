"""Genera datos reales de ejemplo para la UI: corre el pipeline del verificador sobre notas del corpus.

Los gráficos de contexto se dibujan con estos datos en el laboratorio del frontend
(`frontend/graficos-lab.html`), sin backend. No se editan a mano: se regeneran con
    cd verificador && uv run python scripts/generar_ejemplos_ui.py ../frontend/src/data/graficos-ejemplos.ts
"""
from __future__ import annotations

import json
import sys
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(RAIZ / "verificador" / "src"))

from verificador.graficos import armar_graficos  # noqa: E402
from verificador.series import ClienteSeries  # noqa: E402
from verificador.validar import validar_nota  # noqa: E402

NOTAS = tuple(sorted(p.stem for p in (RAIZ / "docs" / "enrichments").glob("*.json")))  # las 18 notas del corpus
FECHA_CORPUS = date(2026, 10, 31)
CABECERA = (
    "/* Datos reales de ejemplo, generados por el verificador sobre las 18 notas del corpus\n"
    "   (`armar_graficos` con las series guardadas al 2026-10-31). No se editan a mano: se regeneran con\n"
    "   `verificador/scripts/generar_ejemplos_ui.py`. */\n"
    "import type { FilasDeAnalisis } from '../components/graficos/pasos.ts'\n"
    "import type { GraficosNota } from '../components/graficos/types.ts'\n\n"
    "export interface EjemploDeNota {\n"
    "  titulo: string\n"
    "  cuerpo: string\n"
    "  /** Las filas del análisis tal como las escribe el backend, recortadas a lo que usa el recorrido. */\n"
    "  filas: FilasDeAnalisis\n"
    "  datos: GraficosNota\n"
    "}\n\n"
)


def filas_de(por_tipo: dict, informe) -> dict:
    """Las filas del análisis, recortadas a lo que usa el recorrido de la UI."""
    return {
        "claims": {"claims": [{"text": c["text"]} for c in por_tipo.get("claims", {}).get("claims", [])]},
        "entities": {
            "nodes": [{"name": n["name"], "mentions": n.get("mentions", 0)} for n in por_tipo.get("entities", {}).get("nodes", [])]
        },
        "timeline": {"events": [{"title": e["title"]} for e in por_tipo.get("timeline", {}).get("events", [])]},
        "validation": {
            "verificacion": {"resumen": informe.verificacion.resumen},
            "tarjetas": [
                {
                    "tarjeta": {
                        "dicho": {"texto": t.tarjeta.dicho.texto},
                        "resultado": t.tarjeta.resultado,
                        "serie": {"nombre": t.tarjeta.serie.nombre, "valor": t.tarjeta.serie.valor} if t.tarjeta.serie else None,
                    }
                }
                for t in informe.tarjetas
            ],
        },
    }


def ejemplo_de(nota: str, cliente: ClienteSeries) -> dict:
    md = next((RAIZ / "corpus" / "notas" / "md").glob(f"{nota}-*.md"))
    lineas = md.read_text(encoding="utf-8").splitlines()
    cuerpo = "\n".join(lineas[1:]).strip()
    datos = json.loads((RAIZ / "docs" / "enrichments" / f"{nota}.json").read_text(encoding="utf-8"))
    por_tipo = {e["kind"]: e["data"] for e in datos["enrichments"] if e["status"] == "done"}
    informe = validar_nota(cuerpo, por_tipo, cliente_series=cliente, fecha_referencia=FECHA_CORPUS)
    graficos = armar_graficos(informe, por_tipo, cliente)
    return {
        "titulo": lineas[0].lstrip("# ").strip(),
        "cuerpo": cuerpo,
        "filas": filas_de(por_tipo, informe),
        "datos": graficos.model_dump(mode="json"),
    }


def main() -> int:
    if len(sys.argv) != 2:
        print("uso: generar_ejemplos_ui.py <archivo-de-salida.ts>")
        return 2
    destino = Path(sys.argv[1])
    cliente = ClienteSeries(modo="guardado")
    ejemplos = {nota: ejemplo_de(nota, cliente) for nota in NOTAS}
    cuerpo = "export const ejemplos: Record<string, EjemploDeNota> = " + json.dumps(ejemplos, ensure_ascii=False, indent=2) + "\n"
    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_text(CABECERA + cuerpo, encoding="utf-8")
    print(f"escrito {destino} ({destino.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
