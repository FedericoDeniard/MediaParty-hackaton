"""Modelos públicos de los gráficos de contexto: JSON puro que la interfaz dibuja sin recalcular nada."""
from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class _Modelo(BaseModel):
    model_config = ConfigDict(frozen=True)


class PuntoContexto(_Modelo):
    x: str  # mes ISO "AAAA-MM"
    y: float


class SerieContexto(_Modelo):
    clave: str
    nombre: str
    puntos: list[PuntoContexto]
    cambio_pct: float | None = None  # variación entre el primer y el último punto, en %


class BarraContexto(_Modelo):
    etiqueta: str
    valor: float
    destacada: bool = False


class FuenteContexto(_Modelo):
    nombre: str
    institucion: str
    id: str
    enlace: str
    ultimo_dato: str  # "AAAA-MM" del último dato usado
    rezago_meses: int  # distancia entre ese dato y la fecha de referencia
    origen_datos: Literal["api", "guardado"]


class GraficoContexto(_Modelo):
    """Un gráfico de contexto horizontal: no repite lo que dice la nota, la completa con datos oficiales."""

    id: str
    visual: Literal["lineas", "barras", "ranking"]
    titulo: str  # arma el código con los números calculados: dice el hallazgo, sin veredicto
    unidad: str
    referencia: float | None = None  # línea de referencia (por ejemplo 100 en las bases)
    series: list[SerieContexto] = Field(default_factory=list)
    barras: list[BarraContexto] = Field(default_factory=list)
    fuentes: list[FuenteContexto]
    como_leerlo: str
    advertencias: list[str] = Field(default_factory=list)
    motivos: list[str] = Field(default_factory=list)  # por qué se eligió para esta nota
