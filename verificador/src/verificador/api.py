"""Servicio HTTP de la validación, para que el backend o la interfaz lo llamen sin importar el paquete.

Arranque local (la clave de Anthropic solo hace falta con `usar_modelo=true`):
    cd verificador
    uv run --env-file ../backend/.env uvicorn verificador.api:crear_app --factory --port 8100

Variables de entorno:
    VERIFICADOR_SERIES  guardado (por defecto, instantáneo y sin red) | auto | api
    VERIFICADOR_CORS    orígenes permitidos separados por coma
"""
from __future__ import annotations

import os
from datetime import date

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .series import ClienteSeries
from .validar import VERSION_VALIDACION, InformeValidacion, catalogo_publico, validar_nota

ORIGENES_POR_DEFECTO = "http://localhost:3000,http://localhost:5173"


class SolicitudValidacion(BaseModel):
    cuerpo: str = Field(min_length=1, max_length=200_000)
    enriquecimientos: dict[str, dict] = Field(default_factory=dict)
    usar_modelo: bool = False
    fecha_referencia: date | None = None  # fecha de publicación; por defecto, hoy


def crear_app(cliente_series: ClienteSeries | None = None) -> FastAPI:
    modo = os.environ.get("VERIFICADOR_SERIES", "guardado")
    cliente = cliente_series or ClienteSeries(modo=modo)  # un cliente por proceso: comparte su memoria
    app = FastAPI(title="Validación de notas", version=VERSION_VALIDACION)

    origenes = [o.strip() for o in os.environ.get("VERIFICADOR_CORS", ORIGENES_POR_DEFECTO).split(",") if o.strip()]
    app.add_middleware(
        CORSMiddleware, allow_origins=origenes, allow_methods=["GET", "POST"], allow_headers=["Content-Type"]
    )

    @app.get("/salud")
    def salud() -> dict:
        return {"estado": "ok", "version": VERSION_VALIDACION, "modo_series": cliente.modo, "indicadores": len(catalogo_publico())}

    @app.get("/catalogo")
    def catalogo() -> list[dict[str, str]]:
        return catalogo_publico()

    @app.post("/validar", response_model=InformeValidacion)
    def validar(solicitud: SolicitudValidacion) -> InformeValidacion:
        return validar_nota(
            solicitud.cuerpo,
            solicitud.enriquecimientos,
            cliente_series=cliente,
            usar_modelo=solicitud.usar_modelo,
            fecha_referencia=solicitud.fecha_referencia,
        )

    return app
