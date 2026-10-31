import asyncio
from datetime import date

from pydantic import BaseModel
from verificador.validar import validar_nota

from . import db
from .llm import MODEL, extract, slug
from .schemas import NODES, Parsed


LINKED = {"claims", "figures", "timeline"}  # need entity ids, so they're written after link_entities


async def node(article_id: str, kind: str, niche: str | None, text: str, schema: type[BaseModel], context: str | None) -> dict | None:
    db.set_enrichment(article_id, kind, "running")
    try:
        out = (await extract(kind, niche, text, schema, context)).model_dump()
        if kind not in LINKED:
            db.set_enrichment(article_id, kind, "done", data=out, model=MODEL)
        return out
    except Exception as e:  # one failed branch must not kill the others
        db.set_enrichment(article_id, kind, "error", error=str(e))
        return None


def _key(name: str) -> str:
    """'el Indec' and 'INDEC' -> 'indec'."""
    k = slug(name)
    return k.split(" ", 1)[1] if k.split(" ", 1)[0] in ("el", "la", "los", "las") and " " in k else k


def link_entities(outs: dict[str, dict]) -> None:
    """Nodes run in parallel and can't see entity ids, so they name entities as the text does.
    Resolve those names to ids by name or alias; no match gives None (or is left out of the list)."""
    ids = {}
    for n in (outs.get("entities") or {}).get("nodes", []):
        for name in filter(None, [n["name"], *n.get("aliases", [])]):
            ids.setdefault(_key(name), n["id"])
    for kind, key in (("claims", "claims"), ("figures", "figures")):
        for item in (outs.get(kind) or {}).get(key, []):
            item["source_id"] = ids.get(_key(item["source"])) if item.get("source") else None
    for ev in (outs.get("timeline") or {}).get("events", []):
        ev["entity_ids"] = [ids[_key(e)] for e in ev.get("entities", []) if _key(e) in ids]


async def validate(article_id: str, body: str, done: dict[str, dict], published: date | None) -> None:
    db.set_enrichment(article_id, "validation", "running")
    try:
        report = await asyncio.to_thread(validar_nota, body, done, usar_modelo=True, fecha_referencia=published)
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
    published = date.fromisoformat(art["published_at"]) if art.get("published_at") else None
    context = f"Fecha de publicación de la nota: {published.isoformat()}" if published else None
    outs = await asyncio.gather(*(node(article_id, kind, niche, art["body"], schema, context) for kind, schema in NODES.items()))
    done = {k: o for k, o in zip(NODES, outs) if o is not None}
    link_entities(done)
    for kind in LINKED & done.keys():
        db.set_enrichment(article_id, kind, "done", data=done[kind], model=MODEL)
    await validate(article_id, art["body"], done, published)
