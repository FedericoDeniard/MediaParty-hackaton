from datetime import date

from fastapi import BackgroundTasks, FastAPI
from pydantic import BaseModel

from . import db, graph
from .schemas import NODES

app = FastAPI(title="enrich")


class ArticleIn(BaseModel):
    title: str
    body: str
    url: str | None = None
    niche: str | None = None
    published_at: date | None = None


@app.post("/articles")
def create_article(a: ArticleIn, bg: BackgroundTasks) -> dict:
    article_id = db.insert_article(a.title, a.body, a.url, a.niche, a.published_at, list(NODES) + ["validation"])
    bg.add_task(graph.run, article_id)  # ponytail: in-process; swap for a queue if runs outlive a worker
    return {"id": article_id}


@app.get("/articles/{article_id}")
def get_article(article_id: str) -> dict:
    return {"article": db.get_article(article_id), "enrichments": db.get_enrichments(article_id)}
