"""Modelos públicos del cruce de cifras con series oficiales.

Regla del producto: el código busca el dato, compara y copia la cita.
Acá no hay veredictos de verdadero o falso: solo los cinco resultados de abajo.
"""

from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field

Unidad = Literal["porcentaje", "pesos", "dolares", "indice", "otra"]
Resultado = Literal[
    "coincide", "difiere", "sin_serie", "sin_dato_oficial", "error_fuente"
]


class AfirmacionNumerica(BaseModel):
    texto: str  # la frase de la nota
    indicador: str | None = None  # pista libre, ej. "inflación mensual"
    valor: float
    unidad: Unidad = "otra"
    decimales: int | None = None  # cuántos decimales trae la cifra dicha (1,9% -> 1)
    periodo: str | None = None  # "2026-09" (mes), "2026-10-26" (día) o "2026"


class Serie(BaseModel):
    fuente: Literal["bcra", "datosgob", "bancomundial"]
    id: str
    nombre: str
    valor: float
    fecha_dato: str
    enlace: str


class TarjetaDato(BaseModel):
    dicho: AfirmacionNumerica
    clave_catalogo: str | None = None
    serie: Serie | None = None
    resultado: Resultado
    diferencia: float | None = None  # valor_dicho - valor_serie
    advertencias: list[str] = Field(default_factory=list)
    origen_datos: Literal["api", "guardado"] | None = None


class ErrorFuente(Exception):
    """La fuente no respondió (o respondió algo que no se entiende) y no hay copia."""
