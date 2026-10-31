# Build from the repo root: docker build -f backend/Dockerfile .
# The root context is needed because backend depends on ../verificador.
FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim
WORKDIR /app/backend
COPY verificador /app/verificador
COPY backend/pyproject.toml backend/uv.lock ./
RUN uv sync --frozen --no-dev
COPY backend/app ./app
EXPOSE 8000
CMD ["uv", "run", "--no-dev", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
