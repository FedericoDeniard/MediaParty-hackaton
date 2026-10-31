import os

from dotenv import load_dotenv
from supabase import Client, create_client

load_dotenv()

_client: Client | None = None


def sb() -> Client:
    global _client
    if _client is None:
        _client = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])
    return _client


def insert_article(title: str, body: str, url: str | None, niche: str | None, kinds: list[str]) -> str:
    row = sb().table("articles").insert({"title": title, "body": body, "url": url, "niche": niche}).execute().data[0]
    sb().table("enrichments").insert([{"article_id": row["id"], "kind": k} for k in kinds]).execute()
    return row["id"]


def get_article(article_id: str) -> dict:
    return sb().table("articles").select("*").eq("id", article_id).single().execute().data


def get_enrichments(article_id: str) -> list[dict]:
    return sb().table("enrichments").select("*").eq("article_id", article_id).execute().data


def update_article(article_id: str, **fields) -> None:
    sb().table("articles").update(fields).eq("id", article_id).execute()


def set_enrichment(article_id: str, kind: str, status: str, data: dict | None = None, error: str | None = None, model: str | None = None) -> None:
    sb().table("enrichments").update(
        {"status": status, "data": data, "error": error, "model": model, "updated_at": "now()"}
    ).eq("article_id", article_id).eq("kind", kind).execute()
