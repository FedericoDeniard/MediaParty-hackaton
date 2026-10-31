# Plan: verificador integration and AI Gateway decisions

Drafted 2026-10-31. Not executed. Two pieces, in this order: first bring Ignacio's `verificador` into the pipeline, then use decision models where the pipeline only needs a label, a yes/no or a score.

## Part 1: integrate `verificador` (branch `ignacio`)

### What the branch brings

- `verificador/`: a separate Python 3.13 package. `validar_nota(cuerpo, enriquecimientos, usar_modelo)` checks every entity, claim and timeline item against the article text, copies the quote from the stored text, and cross-checks figures against a closed catalog of official series (BCRA, datos.gob.ar, World Bank). It never returns a true/false verdict. Saved series snapshots make it work offline.
- `corpus/claves/*.json`: hand-written answer keys per article (figures, paragraph, expected catalog series, expected result, key points).
- `docs/validacion.md`: Ignacio's integration proposal. `docs/series-verificadas.md`: verified series ids. `docs/plan-demo-19hs.md`: demo plan.
- Frontend chart lab, `db-modeling` and `react-grab` skills, a Swiss `DESIGN.md` addition.
- `git merge-tree` shows it merges cleanly with `origin/main`.

This covers HANDOFF next step 2 (code-only verification) and part of step 6 (official data checks).

### Steps

1. Ignacio opens a PR from `ignacio` to `main`. Review it with the `code-review` skill. Merge.
2. Follow option A in `docs/validacion.md`:
   - `cd backend && uv add --editable ../verificador`.
   - Add a `validar(article_id, art)` step in `backend/app/graph.py` after the `gather`, writing a `validation` row (code is in the doc).
   - In `backend/app/main.py`, create the `validation` row up front: `list(NODES) + ["validation"]`.
   - No migration: `enrichments.kind` is free text.
3. Fix the Docker build. `backend/Dockerfile` copies only `backend/`, so the `../verificador` path dependency won't resolve. Either build from the repo root with both folders copied, or deploy the verificador as its own service (option B in `docs/validacion.md`). The same constraint applies to a Vercel deploy with `backend/` as the root directory.
4. Pass the publication date: `validar_nota` already accepts `fecha_referencia`. Store it on `articles` and pass it to both the verificador and the timeline agent (HANDOFF next step 4).
5. Run the corpus end to end and compare against `corpus/claves/` with `verificador/eval/pipeline_completo.py`.

### Open questions for the team

- Option A (import) or option B (service on port 8100)? A is simpler locally; B avoids the Docker and Vercel path problem.
- `docs/plan-demo-19hs.md` assumes `/notas` routes and SQLite. The built backend uses `/articles` and Supabase. Confirm which one the demo runs on.

## Part 2: decision models through Vercel AI Gateway

### What it is

AI Gateway exposes decision models (`typesafe-ai/jev` and others) that answer typed questions about a shared `state` and return probabilities instead of text. Question types: `boolean`, `choice`, `score`. Python calls it over HTTP at `POST https://ai-gateway.vercel.sh/v1/evaluate` with `AI_GATEWAY_API_KEY`; no Vercel deploy needed. `providerOptions.gateway.zeroDataRetention: true` keeps article text from being retained. Decision fallbacks can rerun low-confidence answers on another model. Docs: https://vercel.com/docs/ai-gateway/modalities/decision.

Use the Gateway, not defapi.org: the defapi listing is a third-party reseller.

### Where it fits, by value

1. **Indicator choice in the verificador.** `verificador/src/verificador/propuesta.py` uses `claude-haiku-5-5` to propose which catalog indicator a figure refers to. That is a `choice` question with the catalog keys plus `sin_serie` as options. The answer keys in `corpus/claves/*.json` (`serie_catalogo`, `resultado_esperado`) are a ready-made eval set. Coordinate with Ignacio; it's his module.
2. **Niche detection.** Replace the Opus `parse` call in `backend/app/graph.py` with a `choice` over the niches. Add `justicia`, since article 11 (a court ruling) lands in política.
3. **Claim filter.** One request after the claims agent, one `boolean` per claim ("is this a checkable fact?"). Targets the padding in articles 13 and 19.
4. **Entity ranking.** A `score` for how central each entity is; keep the top 15 to 20 for the graph. Targets article 16's 53 nodes.

### Steps

1. Get an `AI_GATEWAY_API_KEY` and add it to `backend/.env.example`.
2. Add `backend/app/decide.py`: one `httpx` call to `/v1/evaluate` with `zeroDataRetention`. `httpx` is already a dependency of `verificador`; check whether `backend` has it before adding it.
3. Write an eval script that runs item 2 (niche) on the 18 corpus articles and compares against `docs/enrichments/*.json`. Also confirm Spanish quality, which the docs don't mention.
4. If it holds, switch `parse` to Jev with the Claude call as fallback when confidence is below a threshold, or configure a Gateway decision fallback.
5. Then items 1, 3 and 4, each behind its own eval.

### Risks

- The AI SDK function is experimental and was recently renamed from `evaluate` to `decide`. The HTTP path `/v1/evaluate` is stable.
- No published rate limits for Jev.
- Decision models are a pre-filter, not a verifier. The rule "the model proposes, code checks and copies the quote" from `docs/pipeline.md` still holds: they never replace the code-only checks.
