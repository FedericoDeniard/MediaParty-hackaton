# enrich backend

Article in, four parallel Claude agents out (entities graph, claims, timeline, editorial notes), results stored in Supabase.

```sh
cp .env.example .env            # fill in keys
# local DB: cd ../supabase && pnpm install && pnpm run start  (applies migrations)
uv sync
uv run uvicorn app.main:app --reload
curl -X POST localhost:8000/articles -H 'content-type: application/json' \
  -d '{"title":"Título","body":"Texto del artículo en español..."}'
curl localhost:8000/articles/<id>
```

Frontend reads `articles` and `enrichments` directly from Supabase (realtime on `enrichments` for progress).

Niche-specific prompts: drop a file at `app/prompts/<niche>/<node>.md`; it overrides `app/prompts/default/<node>.md`.
New node: add a Pydantic model to `app/schemas.py`, register it in `NODES`, add `app/prompts/default/<node>.md`.

Tests: `uv run pytest`. Docker: `docker build -t enrich . && docker run --env-file .env -p 8000:8000 enrich`.
