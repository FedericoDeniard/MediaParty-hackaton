"""Elige qué contextos del catálogo cerrado encajan con una nota. "Ninguno" es una respuesta válida.

Hoy elige con reglas sobre palabras de la nota, y cada elección explica por qué con las palabras
que encontró. El modelo puede ocupar este lugar después (pedido 7 del PR 4) sin cambiar nada de lo
que viene luego: el armado solo recibe claves del catálogo.
"""
from __future__ import annotations

import re

from pydantic import BaseModel, ConfigDict

from ..series.catalogo import normalizar

Vocabulario = tuple[tuple[str, str], ...]  # (cómo se muestra, expresión sobre el texto sin acentos)

INFLACION = r"inflacion"
MENCIONES_PARA_INFLACION = 3  # una mención de pasada no alcanza

SUELDOS_Y_JUBILACIONES: Vocabulario = (
    ("salario mínimo", r"salario minimo"),
    ("poder adquisitivo", r"poder adquisitivo"),
    ("jubilaciones", r"jubilacion"),
    ("haber mínimo", r"haber minimo"),
    ("AUH", r"\bauh\b"),
    ("asignación universal", r"asignacion universal"),
)
BOLSILLO: Vocabulario = (
    ("canasta", r"canasta"),
    ("pobreza", r"pobreza"),
    ("costo de vida", r"costo de vida"),
)
ALIMENTOS: Vocabulario = (("alimentos", r"alimentos"),)
SALARIOS: Vocabulario = (("salarios", r"salari"), ("paritaria", r"paritaria"), ("docentes", r"docente"))
SECTOR_ESTATAL: Vocabulario = (
    ("universidades", r"universi"),
    ("docentes", r"docente"),
    ("estatales", r"estatal"),
    ("sector público", r"sector publico"),
    ("paro", r"\bparo\b"),
)
UNIVERSIDADES: Vocabulario = (("universidades", r"universi"),)
FINANCIAMIENTO: Vocabulario = (
    ("paro", r"\bparo\b"),
    ("presupuesto", r"presupuesto"),
    ("financiamiento", r"financiamiento"),
    ("recorte", r"recorte"),
)
MINIMO_UNIVERSIDADES = 3  # una nota que cita dos universidades como fuente no es una nota sobre universidades
MINIMO_TABLA_ANUAL = 2  # una mención suelta (por ejemplo en un recuadro) no hace de la nota una nota de tabla
MINIMO_SUPERCLASICO = 1  # el título no siempre llega al análisis: alcanza con que el cuerpo lo nombre
MINIMO_POR_EQUIPO = 2  # y que la nota hable de los dos equipos, no que los cite de pasada
EQUIPOS_DEL_SUPERCLASICO: Vocabulario = (("Boca", r"\bboca\b"), ("River", r"\briver\b"))


class Eleccion(BaseModel):
    model_config = ConfigDict(frozen=True)

    clave: str
    puntaje: int
    motivos: tuple[str, ...]


def _hallado(texto: str, vocabulario: Vocabulario) -> dict[str, int]:
    return {etiqueta: n for etiqueta, patron in vocabulario if (n := len(re.findall(patron, texto)))}


def _motivos(hallado: dict[str, int]) -> tuple[str, ...]:
    return tuple(f"{etiqueta} (×{n})" if n > 1 else etiqueta for etiqueta, n in hallado.items())


def _poder_adquisitivo(texto: str) -> Eleccion | None:
    inflacion = len(re.findall(INFLACION, texto))
    fuertes = _hallado(texto, SUELDOS_Y_JUBILACIONES)
    if inflacion < MENCIONES_PARA_INFLACION and not fuertes:
        return None
    motivos = ((f"inflación (×{inflacion})",) if inflacion >= MENCIONES_PARA_INFLACION else ()) + _motivos(fuertes)
    return Eleccion(clave="poder_adquisitivo", puntaje=min(inflacion, 10) + 3 * len(fuertes), motivos=motivos)


def _cobertura_canasta(texto: str) -> Eleccion | None:
    inflacion = len(re.findall(INFLACION, texto))
    bolsillo = _hallado(texto, BOLSILLO)
    if not bolsillo and inflacion < MENCIONES_PARA_INFLACION:
        return None
    alimentos = _hallado(texto, ALIMENTOS)
    motivos = ((f"inflación (×{inflacion})",) if inflacion >= MENCIONES_PARA_INFLACION else ()) + _motivos(bolsillo)
    puntaje = sum(bolsillo.values()) + sum(alimentos.values()) + (1 if inflacion >= MENCIONES_PARA_INFLACION else 0)
    return Eleccion(clave="cobertura_canasta", puntaje=puntaje, motivos=motivos)


def _salarios_por_sector(texto: str) -> Eleccion | None:
    salarios, estatal = _hallado(texto, SALARIOS), _hallado(texto, SECTOR_ESTATAL)
    if not salarios or not estatal:
        return None
    return Eleccion(
        clave="salarios_por_sector",
        puntaje=sum(salarios.values()) + sum(estatal.values()),
        motivos=_motivos(salarios) + _motivos({k: v for k, v in estatal.items() if k not in salarios}),
    )


def _universidades_constantes(texto: str) -> Eleccion | None:
    universidades, financiamiento = _hallado(texto, UNIVERSIDADES), _hallado(texto, FINANCIAMIENTO)
    if sum(universidades.values()) < MINIMO_UNIVERSIDADES or not financiamiento:
        return None
    return Eleccion(
        clave="universidades_constantes",
        puntaje=sum(universidades.values()) + sum(financiamiento.values()),
        motivos=_motivos(universidades) + _motivos(financiamiento),
    )


def _tabla_anual(texto: str) -> Eleccion | None:
    menciones = len(re.findall(r"tabla anual", texto))
    if menciones < MINIMO_TABLA_ANUAL:
        return None
    return Eleccion(clave="tabla_anual", puntaje=menciones, motivos=(f"Tabla Anual (×{menciones})",))


def _historial_superclasico(texto: str) -> Eleccion | None:
    menciones = len(re.findall(r"superclasico", texto))
    equipos = _hallado(texto, EQUIPOS_DEL_SUPERCLASICO)
    habla_de_los_dos = len(equipos) == len(EQUIPOS_DEL_SUPERCLASICO) and min(equipos.values()) >= MINIMO_POR_EQUIPO
    if menciones < MINIMO_SUPERCLASICO or not habla_de_los_dos:
        return None
    return Eleccion(
        clave="historial_superclasico",
        puntaje=menciones + sum(equipos.values()),
        motivos=(f"Superclásico (×{menciones})", *_motivos(equipos)),
    )


REGLAS = (
    _poder_adquisitivo,
    _cobertura_canasta,
    _salarios_por_sector,
    _universidades_constantes,
    _tabla_anual,
    _historial_superclasico,
)


def elegir_contextos(texto: str, maximo: int = 2) -> list[Eleccion]:
    """Los contextos que encajan, del más al menos relevante, hasta `maximo`. Puede ser una lista vacía."""
    plano = normalizar(texto)
    candidatas = {e.clave: e for regla in REGLAS if (e := regla(plano))}
    # La canasta completa al poder adquisitivo, no lo reemplaza: nunca queda por encima de él.
    principal, canasta = candidatas.get("poder_adquisitivo"), candidatas.get("cobertura_canasta")
    if principal and canasta and canasta.puntaje >= principal.puntaje:
        candidatas["cobertura_canasta"] = canasta.model_copy(update={"puntaje": principal.puntaje - 1})
    # sorted es estable: a igual puntaje queda primero el que viene antes en el catálogo
    return sorted(candidatas.values(), key=lambda e: -e.puntaje)[:maximo]
