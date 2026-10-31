"""Contextos de fútbol: la Tabla Anual y el historial del Superclásico, desde copias guardadas de Wikipedia.

No hay una fuente abierta y oficial de la AFA, así que los datos salen de Wikipedia en español (texto
CC BY-SA 4.0), que se cita como tal y no como dato oficial. Las copias las genera
`scripts/guardar_deportes.py`, dicen de qué fecha son y estos contextos nunca salen a la red.
"""
from __future__ import annotations

import json
from collections.abc import Callable
from pathlib import Path
from typing import Any

from ..series.modelos import ErrorFuente
from .calculos import meses_entre
from .formato import MESES, numero
from .modelos import BarraContexto, FuenteContexto
from .series import DIRECTORIO_GUARDADO

INSTITUCION = "Wikipedia en español (CC BY-SA 4.0)"
ARCHIVO_TABLA = "wikipedia_tabla_anual.json"
ARCHIVO_HISTORIAL = "wikipedia_historial_superclasico.json"
POSICIONES_EN_PANTALLA = 9  # del 1.º al 9.º: los puestos de copas internacionales
POSICIONES_LIBERTADORES = 3  # las que la tabla marca como clasificadas a la Libertadores


def _leer(archivo: str, directorio: Path | None) -> dict[str, Any]:
    ruta = (directorio or DIRECTORIO_GUARDADO) / archivo
    try:
        return json.loads(ruta.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise ErrorFuente(f"sin copia guardada utilizable de Wikipedia ({archivo})") from exc


def _fecha_larga(iso: str) -> str:
    """'2026-10-31' -> '31 de octubre'."""
    return f"{int(iso[8:10])} de {MESES[int(iso[5:7]) - 1]}"


def _fuente(copia: dict[str, Any], nombre: str, mes_ref: str) -> FuenteContexto:
    mes_copia = copia["copiado"][:7]
    return FuenteContexto(
        nombre=nombre,
        institucion=INSTITUCION,
        id=copia["pagina"],
        enlace=copia["enlace"],
        ultimo_dato=mes_copia,
        rezago_meses=max(0, meses_entre(mes_copia, mes_ref)),
        origen_datos="guardado",
    )


def tabla_anual(mes_ref: str, directorio: Path | None = None) -> dict[str, Any]:
    copia = _leer(ARCHIVO_TABLA, directorio)
    try:
        filas = sorted(copia["filas"], key=lambda f: f["posicion"])[:POSICIONES_EN_PANTALLA]
        barras = [
            BarraContexto(
                etiqueta=f"{f['posicion']}. {f['equipo']}",
                valor=float(f["puntos"]),
                destacada=f["posicion"] <= POSICIONES_LIBERTADORES,
            )
            for f in filas
        ]
        jugados = {f["jugados"] for f in filas}
    except (KeyError, TypeError, ValueError) as exc:
        raise ErrorFuente("la copia de la Tabla Anual tiene un formato inesperado") from exc
    if len(barras) < POSICIONES_LIBERTADORES + 1:
        raise ErrorFuente("la copia de la Tabla Anual tiene muy pocos equipos")

    fecha = _fecha_larga(copia["copiado"])
    primeros = barras[:POSICIONES_LIBERTADORES]
    puntos = lambda barra: numero(barra.valor, 0)  # noqa: E731
    nombre = lambda barra: barra.etiqueta.split(". ", 1)[1]  # noqa: E731
    advertencias = [
        f"La tabla es una copia del {fecha}: si se jugaron partidos después de publicada la nota, los puntos pueden ser otros.",
        "Los datos de Wikipedia los editan voluntarios: se citan como Wikipedia y no como dato oficial de la AFA.",
    ]
    if len(jugados) > 1:
        advertencias.append("No todos los equipos jugaron la misma cantidad de partidos.")
    return {
        "barras": barras,
        "unidad": "puntos de la Tabla Anual 2026 (Apertura + Clausura)",
        "titulo": (
            f"Tabla Anual 2026 al {fecha}: {nombre(primeros[0])} {puntos(primeros[0])}, {nombre(primeros[1])} {puntos(primeros[1])} "
            f"y {nombre(primeros[2])} {puntos(primeros[2])} puntos; del 1.º al {len(barras)}.º hay "
            f"{numero(barras[0].valor - barras[-1].valor, 0)} puntos de diferencia"
        ),
        "base": fecha,
        "fuentes": [_fuente(copia, "Tabla general de la temporada 2026, Primera División", mes_ref)],
        "advertencias": advertencias,
    }


def historial_superclasico(mes_ref: str, directorio: Path | None = None) -> dict[str, Any]:
    copia = _leer(ARCHIVO_HISTORIAL, directorio)
    try:
        boca, empates, river, total = (int(copia[k]) for k in ("boca", "empates", "river", "total"))
    except (KeyError, TypeError, ValueError) as exc:
        raise ErrorFuente("la copia del historial del Superclásico tiene un formato inesperado") from exc
    if boca + empates + river != total:
        raise ErrorFuente("el historial del Superclásico no cierra: ganados + empates no suman el total")

    fecha = _fecha_larga(copia["copiado"])
    return {
        "barras": [
            BarraContexto(etiqueta="Ganó Boca", valor=float(boca)),
            BarraContexto(etiqueta="Empates", valor=float(empates)),
            BarraContexto(etiqueta="Ganó River", valor=float(river)),
        ],
        "unidad": "partidos de Primera División",
        "titulo": f"Superclásicos en Primera División: de {total} partidos, Boca ganó {boca}, River {river} y empataron {empates}",
        "base": fecha,
        "fuentes": [_fuente(copia, "Historial estadístico del Superclásico, Primera División", mes_ref)],
        "advertencias": [
            f"Cuenta hasta el {fecha}: no incluye los partidos posteriores a esa copia.",
            "Es solo Primera División: sumando copas nacionales, internacionales y amistosos las cifras cambian.",
            "Los datos de Wikipedia los editan voluntarios: se citan como Wikipedia y no como dato oficial de la AFA.",
        ],
    }


CONSTRUCTORES: dict[str, Callable[[str, Path | None], dict[str, Any]]] = {
    "tabla_anual": tabla_anual,
    "historial_superclasico": historial_superclasico,
}
