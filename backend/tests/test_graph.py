"""Graph runs all nodes in parallel, one failure does not sink the rest, rows end in done/error."""

from app import graph
from app.schemas import NODES, Parsed


async def test_graph_runs_all_nodes(monkeypatch):
    rows: dict[str, dict] = {}
    article = {"id": "a1", "body": "Texto.", "niche": None, "published_at": "2026-10-27"}
    contexts: dict = {}

    async def fake_extract(node, niche, text, schema, context=None):
        contexts[node] = context
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

    def fake_validar(body, done, usar_modelo, fecha_referencia):
        seen.update(done)
        seen["_fecha"] = fecha_referencia
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
    assert set(seen) - {"_fecha"} == set(NODES) - {"timeline"}  # failed branch is not sent to validation
    assert str(seen["_fecha"]) == "2026-10-27"
    assert contexts["figures"] == "Fecha de publicación de la nota: 2026-10-27"
    assert rows["timeline"] == {"status": "error", "data": None, "error": "boom"}
    assert all(rows[k]["status"] == "done" for k in NODES if k != "timeline")


def test_link_entities():
    outs = {
        "entities": {"nodes": [{"id": "eco-go", "name": "Eco Go", "aliases": ["EcoGo"]}, {"id": "indec", "name": "Indec", "aliases": []}]},
        "claims": {"claims": [{"source": "ecogo"}, {"source": "Nadie"}, {"source": None}]},
        "figures": {"figures": [{"source": "el Indec"}, {"source": "INDEC"}]},
        "timeline": {"events": [{"entities": ["Indec", "Roma"]}]},
    }
    graph.link_entities(outs)
    assert [c["source_id"] for c in outs["claims"]["claims"]] == ["eco-go", None, None]  # alias, unknown, unattributed
    assert [f["source_id"] for f in outs["figures"]["figures"]] == ["indec", "indec"]  # leading article, case ignored
    assert outs["timeline"]["events"][0]["entity_ids"] == ["indec"]


def test_prompt_fallback():
    from app.llm import load_prompt

    assert "política" in load_prompt("claims", "politica")       # override exists
    assert load_prompt("claims", "Política") == load_prompt("claims", "politica")  # accents/case from model
    assert load_prompt("entities", "politica") == load_prompt("entities", None)  # falls back to default
