"""Cruce de cifras de una nota con series oficiales argentinas."""

from .cliente import ClienteSeries
from .cruce import cruzar
from .modelos import AfirmacionNumerica, ErrorFuente, Serie, TarjetaDato
from .texto import desde_texto

__all__ = [
    "AfirmacionNumerica",
    "ClienteSeries",
    "ErrorFuente",
    "Serie",
    "TarjetaDato",
    "cruzar",
    "desde_texto",
]
