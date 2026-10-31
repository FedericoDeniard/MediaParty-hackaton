import asyncio

from pydantic import BaseModel

from . import db
from .llm import MODEL, extract
from .schemas import NODES, Parsed


async def node(article_id: str, kind: str, niche: str | None, text: str, schema: type[BaseModel]) -> None:
    db.set_enrichment(article_id, kind, "running")
    try:
        out = await extract(kind, niche, text, schema)
        db.set_enrichment(article_id, kind, "done", data=out.model_dump(), model=MODEL)
    except Exception as e:  # one failed branch must not kill the others
        db.set_enrichment(article_id, kind, "error", error=str(e))


async def run(article_id: str) -> None:
    art = db.get_article(article_id)
    niche = art["niche"]
    if not niche:
        try:
            niche = (await extract("parse", None, art["body"], Parsed)).niche
            db.update_article(article_id, niche=niche)
        except Exception:
            niche = None  # fall through with default prompts
    await asyncio.gather(*(node(article_id, kind, niche, art["body"], schema) for kind, schema in NODES.items()))
