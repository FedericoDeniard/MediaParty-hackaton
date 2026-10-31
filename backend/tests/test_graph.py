"""Graph runs all nodes in parallel, one failure does not sink the rest, rows end in done/error."""

from app import graph
from app.schemas import NODES, Parsed


async def test_graph_runs_all_nodes(monkeypatch):
    rows: dict[str, dict] = {}
    article = {"id": "a1", "body": "Texto.", "niche": None}

    async def fake_extract(node, niche, text, schema):
        if node == "parse":
            return Parsed(niche="política", summary="s", paragraphs=["Texto."])
        if node == "timeline":
            raise RuntimeError("boom")
        return schema.model_validate({k: [] for k in schema.model_fields} | ({"tone": "x", "framing": "y", "sentiment": 0} if node == "editorial" else {}))

    seen: dict = {}

    class Report:
        version = "t"

        def model_dump(self, mode):
            return {"ok": True}

    def fake_validar(body, done, usar_modelo):
        seen.update(done)
        return Report()

    monkeypatch.setattr(graph, "extract", fake_extract)
    monkeypatch.setattr(graph, "validar_nota", fake_validar)
    monkeypatch.setattr(graph.db, "get_article", lambda _id: article)
    monkeypatch.setattr(graph.db, "update_article", lambda _id, **f: article.update(f))
    monkeypatch.setattr(
        graph.db, "set_enrichment",
        lambda _id, kind, status, data=None, error=None, model=None: rows.__setitem__(kind, {"status": status, "data": data, "error": error}),
    )

    await graph.run("a1")

    assert article["niche"] == "política"
    assert set(rows) == set(NODES) | {"validation"}
    assert rows["validation"]["status"] == "done"
    assert set(seen) == set(NODES) - {"timeline"}  # failed branch is not sent to validation
    assert rows["timeline"] == {"status": "error", "data": None, "error": "boom"}
    assert all(rows[k]["status"] == "done" for k in NODES if k != "timeline")


def test_prompt_fallback():
    from app.llm import load_prompt

    assert "política" in load_prompt("claims", "politica")       # override exists
    assert load_prompt("claims", "Política") == load_prompt("claims", "politica")  # accents/case from model
    assert load_prompt("entities", "politica") == load_prompt("entities", None)  # falls back to default
