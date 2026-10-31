import asyncio

from pydantic import BaseModel
from verificador.validar import validar_nota

from . import db
from .llm import MODEL, extract
from .schemas import NODES, Parsed


async def node(article_id: str, kind: str, niche: str | None, text: str, schema: type[BaseModel]) -> dict | None:
    db.set_enrichment(article_id, kind, "running")
    try:
        out = (await extract(kind, niche, text, schema)).model_dump()
        db.set_enrichment(article_id, kind, "done", data=out, model=MODEL)
        return out
    except Exception as e:  # one failed branch must not kill the others
        db.set_enrichment(article_id, kind, "error", error=str(e))
        return None


async def validate(article_id: str, body: str, done: dict[str, dict]) -> None:
    db.set_enrichment(article_id, "validation", "running")
    try:
        report = await asyncio.to_thread(validar_nota, body, done, usar_modelo=True)
        db.set_enrichment(article_id, "validation", "done", data=report.model_dump(mode="json"), model=f"verificador-{report.version}")
    except Exception as e:  # validation must not sink the enrichments already stored
        db.set_enrichment(article_id, "validation", "error", error=str(e))


async def run(article_id: str) -> None:
    art = db.get_article(article_id)
    niche = art["niche"]
    if not niche:
        try:
            niche = (await extract("parse", None, art["body"], Parsed)).niche
            db.update_article(article_id, niche=niche)
        except Exception:
            niche = None  # fall through with default prompts
    outs = await asyncio.gather(*(node(article_id, kind, niche, art["body"], schema) for kind, schema in NODES.items()))
    await validate(article_id, art["body"], {k: o for k, o in zip(NODES, outs) if o})
