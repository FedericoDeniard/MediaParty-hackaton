# Local dev commands. `just` lists them.
# The ports can be changed per run: `API_PORT=8001 just dev`.

api_port := env("API_PORT", "8000")
# The pinned pnpm version, so it works without corepack.
pnpm := "npx -y pnpm@12.16.1"

default:
    @just --list

# Start local Supabase and apply pending migrations (keeps data)
db:
    cd supabase && supabase start && supabase migration up

# Run the enrichment API with reload
api:
    cd backend && uv sync && uv run uvicorn app.main:app --port {{api_port}} --reload

# Run the frontend, proxying /api to the backend
web:
    cd frontend && {{pnpm}} install && NEXO_API=http://127.0.0.1:{{api_port}} {{pnpm}} run dev

# Database, API and frontend together; Ctrl-C stops both servers
dev: db
    #!/usr/bin/env bash
    trap 'kill 0' EXIT
    just api &
    just web &
    wait

# Send a corpus article through the pipeline: `just note 01 2026-10-27`
note number date="":
    API=http://127.0.0.1:{{api_port}} backend/scripts/try_note.sh {{number}} {{date}}

# Backend and verificador tests, frontend typecheck and build
test:
    cd backend && uv run pytest -q
    cd verificador && uv run pytest -q
    cd frontend && {{pnpm}} run build
