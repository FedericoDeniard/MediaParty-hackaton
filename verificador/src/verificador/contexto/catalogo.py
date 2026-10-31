"""Catálogo CERRADO de contextos horizontales (ver docs/graficos-por-nota.md).

Cada contexto declara qué series usa y con qué advertencias se muestra. Nada se elige por búsqueda
libre: el selector (reglas hoy, un modelo después) solo puede escoger una clave de acá. Los ids de
serie salen de llamadas reales a la API de series de tiempo de datos.gob.ar (2026-10-31).
"""
from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, ConfigDict

DESDE_SERIES = "2023-01-01"
MES_BASE = "2023-11"  # el mes desde el que se mide el cambio real (último año completo antes del cambio de gobierno)


class SerieRef(BaseModel):
    model_config = ConfigDict(frozen=True)

    rol: str
    id: str
    nombre: str
    institucion: str


class ContextoDef(BaseModel):
    model_config = ConfigDict(frozen=True)

    clave: str
    visual: Literal["lineas", "barras", "ranking"]
    series: tuple[SerieRef, ...]
    como_leerlo: str
    advertencias: tuple[str, ...] = ()


IPC = SerieRef(
    rol="ipc", id="148.3_INIVELNAL_DICI_M_26", nombre="IPC nacional, nivel general", institucion="INDEC"
)
SMVM = SerieRef(
    rol="smvm", id="57.1_SMVMM_0_M_34", nombre="Salario mínimo, vital y móvil", institucion="Secretaría de Trabajo"
)
HABER = SerieRef(
    rol="haber", id="58.1_MP_0_M_24", nombre="Haber mínimo jubilatorio (sin bono)", institucion="ANSES"
)
AUH = SerieRef(
    rol="auh", id="165.1_AAUH_0_0_3", nombre="Asignación Universal por Hijo (monto por hijo)", institucion="ANSES"
)
CBT = SerieRef(
    rol="cbt", id="150.1_CSTA_BATAL_0_D_20", nombre="Canasta básica total (por adulto equivalente)", institucion="INDEC"
)
PRIVADO = SerieRef(
    rol="privado", id="149.1_SOR_PRIADO_OCTU_0_25", nombre="Índice de salarios, sector privado registrado", institucion="INDEC"
)
PUBLICO = SerieRef(
    rol="publico", id="149.1_SOR_PUBICO_OCTU_0_14", nombre="Índice de salarios, sector público registrado", institucion="INDEC"
)
REGISTRADO = SerieRef(
    rol="registrado", id="149.1_TL_REGIADO_OCTU_0_16", nombre="Índice de salarios, total registrado", institucion="INDEC"
)
UNIVERSIDADES = SerieRef(
    rol="universidades",
    id="379.9_GTOS_CORR_017_7_0_M_38_20",
    nombre="Transferencias corrientes a universidades nacionales",
    institucion="Secretaría de Hacienda",
)

CONTEXTOS: tuple[ContextoDef, ...] = (
    ContextoDef(
        clave="poder_adquisitivo",
        visual="lineas",
        series=(SMVM, HABER, AUH, IPC),
        como_leerlo=(
            "Cada línea es el monto nominal dividido por el IPC, con el valor de {base} igual a 100. "
            "Por debajo de 100 compra menos que en ese mes; por encima, más."
        ),
        advertencias=(
            "El haber mínimo no incluye el bono previsional.",
            "La AUH cambió de regla entre 2023 y 2024, y eso explica parte del salto.",
            "Se corta en el mes con dato de precios más reciente y en el mes en curso para los montos que fija el Estado.",
        ),
    ),
    ContextoDef(
        clave="cobertura_canasta",
        visual="lineas",
        series=(SMVM, HABER, CBT),
        como_leerlo=(
            "Cada línea es cuántas canastas básicas totales (por adulto equivalente) equivale el ingreso de un mes. "
            "1 es una canasta completa."
        ),
        advertencias=(
            "La canasta es por adulto equivalente; el salario mínimo y el haber son ingresos individuales.",
            "El haber mínimo no incluye el bono previsional.",
        ),
    ),
    ContextoDef(
        clave="salarios_por_sector",
        visual="lineas",
        series=(PRIVADO, PUBLICO, REGISTRADO, IPC),
        como_leerlo=(
            "Cada línea es el índice de salarios dividido por el IPC, con el valor de {base} igual a 100. "
            "Por debajo de 100 compra menos que en ese mes."
        ),
        advertencias=(
            "El sector público incluye a docentes y universitarios, pero no los separa.",
            "Es un índice y no un monto en pesos.",
        ),
    ),
    ContextoDef(
        clave="universidades_constantes",
        visual="barras",
        series=(UNIVERSIDADES, IPC),
        como_leerlo=(
            "Cada barra suma lo transferido de enero hasta el mes indicado de cada año, "
            "llevado a pesos de {mes_ipc} con el IPC para poder compararlos."
        ),
        advertencias=(
            "Es solo la transferencia corriente a universidades, no todo el presupuesto universitario ni sus salarios.",
            "Mes a mes es muy irregular, por eso se suman períodos iguales de cada año.",
            "El nivel de 2023 puede reflejar cambios de imputación entre años.",
        ),
    ),
    ContextoDef(
        clave="tabla_anual",
        visual="ranking",
        series=(),
        como_leerlo=(
            "Cada barra son los puntos que suma el equipo entre el Apertura y el Clausura 2026, según la copia del {base}. "
            "Las barras oscuras son las tres primeras posiciones, que según la propia tabla clasifican a la Libertadores 2027; "
            "las siguientes, a la Sudamericana."
        ),
    ),
    ContextoDef(
        clave="historial_superclasico",
        visual="barras",
        series=(),
        como_leerlo=(
            "Cada barra cuenta los Superclásicos de Primera División hasta el {base}: los que ganó cada equipo y los que terminaron empatados."
        ),
    ),
)

_POR_CLAVE = {c.clave: c for c in CONTEXTOS}


def contexto(clave: str) -> ContextoDef:
    return _POR_CLAVE[clave]


def series_a_guardar() -> list[SerieRef]:
    """Las series únicas que usa el catálogo, en orden estable."""
    vistas: dict[str, SerieRef] = {}
    for c in CONTEXTOS:
        for s in c.series:
            vistas.setdefault(s.id, s)
    return list(vistas.values())
