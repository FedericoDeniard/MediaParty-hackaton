"""Recorrido completo en local: API de chisco -> sus cuatro agentes -> validación.

Usa el backend REAL (app.main, app.graph, app.llm) por HTTP con TestClient, pero cambia la base
de Supabase por una en memoria (solo en este script) y el modelo por uno liviano. No modifica
nada del backend. Hace llamadas reales al modelo con la clave de backend/.env.

Uso:
    uv run --directory backend python -X utf8 ../verificador/eval/pipeline_completo.py 01 03
    uv run --directory backend python -X utf8 ../verificador/eval/pipeline_completo.py 01 --supabase   # base local real
    MODELO_EVAL=claude-sonnet-5-5 uv run --directory backend python -X utf8 ../verificador/eval/pipeline_completo.py 01
"""
import json
import os
import sys
import time
import uuid
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
BACKEND = RAIZ / "backend"
NOTAS_TXT = RAIZ / "corpus" / "notas" / "txt"
INFORMES = Path(__file__).resolve().parent / "salidas" / "informes"
sys.path.insert(0, str(BACKEND))
sys.path.insert(0, str(RAIZ / "verificador" / "src"))

from dotenv import load_dotenv  # noqa: E402

load_dotenv(BACKEND / ".env")

from app import db, llm  # noqa: E402

ARTICULOS: dict[str, dict] = {}
ENRIQUECIMIENTOS: dict[str, dict[str, dict]] = {}


def _insert_article(title, body, url, niche, kinds):
    article_id = str(uuid.uuid4())
    ARTICULOS[article_id] = {"id": article_id, "title": title, "body": body, "url": url, "niche": niche}
    ENRIQUECIMIENTOS[article_id] = {k: {"kind": k, "status": "pending", "data": None, "error": None, "model": None} for k in kinds}
    return article_id


def _set_enrichment(article_id, kind, status, data=None, error=None, model=None):
    ENRIQUECIMIENTOS[article_id][kind].update(status=status, data=data, error=error, model=model)


CON_SUPABASE = "--supabase" in sys.argv  # sin la bandera usa la base en memoria


def _usar_memoria() -> None:
    db.insert_article = _insert_article
    db.get_article = lambda article_id: ARTICULOS[article_id]
    db.update_article = lambda article_id, **campos: ARTICULOS[article_id].update(campos)
    db.get_enrichments = lambda article_id: list(ENRIQUECIMIENTOS[article_id].values())
    db.set_enrichment = _set_enrichment


if not CON_SUPABASE:
    _usar_memoria()

llm.MODEL = os.environ.get("MODELO_EVAL", "claude-haiku-5-5")

from fastapi.testclient import TestClient  # noqa: E402

from app.main import app  # noqa: E402
from verificador.validar import validar_nota  # noqa: E402


def correr(nota: str, http: TestClient) -> None:
    ruta = next(NOTAS_TXT.glob(f"{nota}-*.txt"))
    cuerpo = ruta.read_text(encoding="utf-8")  # igual que el runner de chisco: el archivo entero
    titulo = cuerpo.split("\n", 1)[0]

    inicio = time.time()
    respuesta = http.post("/articles", json={"title": titulo, "body": cuerpo})  # corre el grafo en segundo plano
    t_grafo = time.time() - inicio
    article_id = respuesta.json()["id"]
    leido = http.get(f"/articles/{article_id}").json()
    estados = {e["kind"]: e["status"] for e in leido["enrichments"]}

    hechos = {e["kind"]: e["data"] for e in leido["enrichments"] if e["status"] == "done" and e["data"]}
    inicio = time.time()
    informe = validar_nota(leido["article"]["body"], hechos, usar_modelo=True)
    t_validar = time.time() - inicio

    print(f"\n=== nota {nota} | {llm.MODEL}")
    print(f"  API + grafo (4 agentes): {t_grafo:.1f}s  estados={estados}")
    print(f"  validación: {t_validar:.1f}s  tarjetas={informe.resumen}  bloqueos={informe.hay_bloqueos}  avisos={informe.avisos}")
    print(f"  verificación del grafo: {informe.verificacion.resumen}")
    for t in informe.tarjetas:
        if t.destacada:
            s = t.tarjeta.serie
            serie = f"{s.fuente}:{s.valor} ({s.fecha_dato})" if s else "-"
            print(f"  [{t.tarjeta.resultado:<16}] {t.parrafo_id or 'sin pasaje'} dicho={t.tarjeta.dicho.valor} {t.tarjeta.dicho.periodo or '-'} serie={serie}")
            print(f"       cita: {(t.cita or '')[:100]}")
    if CON_SUPABASE:
        # Así lo haría el grafo integrado: una fila más en `enrichments` que la interfaz recibe por realtime.
        db.sb().table("enrichments").insert(
            {"article_id": article_id, "kind": "validation", "status": "done", "data": informe.model_dump(mode="json"), "model": f"verificador-{informe.version}"}
        ).execute()
        releido = http.get(f"/articles/{article_id}").json()
        print(f"  en Supabase: {[(e['kind'], e['status']) for e in releido['enrichments']]}")
    INFORMES.mkdir(parents=True, exist_ok=True)
    (INFORMES / f"completo-{nota}.json").write_text(json.dumps(informe.model_dump(mode="json"), ensure_ascii=False, indent=1), encoding="utf-8")


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    http = TestClient(app)
    for nota in [a for a in sys.argv[1:] if not a.startswith("--")] or ["01"]:
        correr(nota, http)


if __name__ == "__main__":
    main()
