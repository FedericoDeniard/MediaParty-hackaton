"""Corre los nodos del backend de chisco con un modelo liviano sobre las notas del corpus.

No modifica nada del backend: importa sus funciones (`app.llm.extract`, `app.schemas`)
y cambia el modelo solo en memoria. La clave sale de backend/.env (ignorado por git).

Uso (desde la raiz del repo; -X utf8 hace falta en Windows por la lectura de prompts):
    uv run --directory backend python -X utf8 ../verificador/eval/correr_nodos.py
    uv run --directory backend python -X utf8 ../verificador/eval/correr_nodos.py --nodos claims entities --notas 01 03
    MODELO_EVAL=claude-sonnet-5-5 uv run --directory backend python -X utf8 ...

Las salidas quedan en verificador/eval/salidas/ (ignorada por git).
"""
import argparse
import asyncio
import json
import os
import sys
import time
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
BACKEND = RAIZ / "backend"
NOTAS = RAIZ / "corpus" / "notas" / "md"
SALIDAS = Path(__file__).resolve().parent / "salidas"
MODELO_POR_DEFECTO = "claude-haiku-5-5"
NOTAS_SIN_ENRIQUECER = {"16", "17"}  # agendas y tablas, no notas escritas
SIMULTANEAS = 4

sys.path.insert(0, str(BACKEND))
from dotenv import load_dotenv  # noqa: E402

load_dotenv(BACKEND / ".env")

from app import llm  # noqa: E402
from app.schemas import NODES  # noqa: E402


def leer_cuerpo(ruta: Path) -> str:
    """El cuerpo es la nota sin su primera linea (el titulo)."""
    lineas = ruta.read_text(encoding="utf-8").splitlines()
    return "\n".join(lineas[1:]).strip()


async def correr(nota: str, cuerpo: str, nodo: str, semaforo: asyncio.Semaphore) -> dict:
    async with semaforo:
        inicio = time.time()
        try:
            salida = await llm.extract(nodo, None, cuerpo, NODES[nodo])
            datos, error = salida.model_dump(), None
        except Exception as e:  # una nota que falla no frena a las demas
            datos, error = None, f"{type(e).__name__}: {e}"
        segundos = round(time.time() - inicio, 1)
    registro = {"nota": nota, "nodo": nodo, "modelo": llm.MODEL, "segundos": segundos, "datos": datos, "error": error}
    (SALIDAS / f"{nodo}-{nota}.json").write_text(json.dumps(registro, ensure_ascii=False, indent=2), encoding="utf-8")
    estado = "ERROR " + error[:80] if error else "ok"
    print(f"{nodo:<10} nota {nota}  {segundos:>5}s  {estado}", flush=True)
    return registro


async def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--nodos", nargs="+", default=["claims"], choices=list(NODES))
    parser.add_argument("--notas", nargs="+", help="numeros de nota, ej. 01 03")
    parser.add_argument("--todas", action="store_true", help="incluye 16 y 17")
    args = parser.parse_args()

    llm.MODEL = os.environ.get("MODELO_EVAL", MODELO_POR_DEFECTO)
    SALIDAS.mkdir(parents=True, exist_ok=True)
    archivos = sorted(NOTAS.glob("*.md"))
    if args.notas:
        archivos = [a for a in archivos if a.name[:2] in set(args.notas)]
    elif not args.todas:
        archivos = [a for a in archivos if a.name[:2] not in NOTAS_SIN_ENRIQUECER]

    semaforo = asyncio.Semaphore(SIMULTANEAS)
    tareas = [correr(a.name[:2], leer_cuerpo(a), nodo, semaforo) for a in archivos for nodo in args.nodos]
    print(f"modelo={llm.MODEL}  notas={len(archivos)}  nodos={args.nodos}", flush=True)
    resultados = await asyncio.gather(*tareas)
    fallidas = [r for r in resultados if r["error"]]
    print(f"\nlistas: {len(resultados) - len(fallidas)}/{len(resultados)}  fallidas: {len(fallidas)}")


if __name__ == "__main__":
    asyncio.run(main())
