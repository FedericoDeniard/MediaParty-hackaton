"""Regresión con afirmaciones reales que devolvió el modelo (notas 01 a 04).

Prioridad: precisión. Ante la duda, "sin_serie" o "sin_dato_oficial"; nunca un "difiere" falso.
Sin red: se usan las copias guardadas del repo.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import pytest

from verificador.series import ClienteSeries, cruzar, desde_texto

SALIDAS = Path(__file__).resolve().parents[2] / "eval" / "salidas"
CLIENTE = ClienteSeries(modo="guardado")


def _resultado(texto: str) -> str:
    """Resultado del cruce con la heurística; sin cifra reconocible equivale a no cruzar."""
    afirmacion = desde_texto(texto, anio_defecto=2026)
    if afirmacion is None:
        return "sin_serie"
    return cruzar(afirmacion, CLIENTE).resultado


def test_01_dos_meses_en_la_frase_el_periodo_es_el_del_indicador():
    t = cruzar(
        desde_texto("La inflación de septiembre de 2026 fue de 1,9% mensual, frente al 1,7% de agosto", 2026),
        CLIENTE,
    )
    assert t.resultado == "coincide"
    assert t.serie and t.serie.fecha_dato == "2026-09-30"


def test_02_estimacion_de_octubre_es_sin_dato_oficial():
    texto = "Las estimaciones privadas ubican la inflación de octubre de 2026 en 1,8%"
    assert _resultado(texto) == "sin_dato_oficial"


def test_03_promedio_de_cuatro_semanas_es_sin_serie():
    texto = "LCG ubicó la inflación promedio de las últimas cuatro semanas en 3,8%"
    assert _resultado(texto) == "sin_serie"


@pytest.mark.parametrize("texto", [
    "Equilibra proyecta una inflación anual de entre 30% y 31% para 2026",
    "Eco Go espera una inflación anual cercana al 30%",
])
def test_04_inflacion_anual_nunca_difiere(texto):
    assert _resultado(texto) in ("sin_dato_oficial", "sin_serie")


def test_05_no_hay_cifra_de_un_indicador():
    texto = "El BCRA no intervino en el mercado cambiario durante tres días consecutivos"
    assert _resultado(texto) == "sin_serie"


def test_06_una_suba_no_es_un_nivel():
    texto = "El dólar mayorista vendedor cerró con una suba de $4 (+0,26%)"
    assert _resultado(texto) == "sin_serie"


def test_07_sin_fecha_explicita_es_sin_serie_y_con_fecha_cruza_con_aviso():
    sin_fecha = "El dólar mayorista cerró a $1532 para la compra y $1541 para la venta"
    assert _resultado(sin_fecha) == "sin_serie"
    con_fecha = desde_texto("El 26 de octubre el dólar mayorista cerró a $1541", 2026)
    t = cruzar(con_fecha, CLIENTE)
    assert t.resultado == "difiere" and t.serie and t.serie.fecha_dato == "2026-10-26"
    assert any("cierre de mercado" in a for a in t.advertencias)


def test_08_rango_intradiario_es_sin_serie():
    texto = "El dólar mayorista operó entre un mínimo de $1539 y un máximo de $1542"
    assert _resultado(texto) == "sin_serie"


def test_09_regulados_sin_periodo_es_sin_serie():
    texto = "Los precios regulados registran un aumento promedio de 2,3% mensual"
    assert _resultado(texto) == "sin_serie"


def test_10_rango_estimado_nunca_difiere():
    texto = "Gabriel Caamaño estima que la inflación mensual se mantendrá entre 1,7% y 2%"
    assert _resultado(texto) in ("sin_serie", "sin_dato_oficial")


def test_11_inflacion_de_agosto_coincide():
    assert _resultado("La inflación de agosto de 2026 fue de 1,7% mensual") == "coincide"


# --- invariante sobre todas las salidas reales del modelo --------------------------------

_PALABRAS_DUDOSAS = re.compile(
    r"semana|promedio|proyecta|estima|ubica|espera|mínimo|máximo|suba|baja|aumento de|entre \d+",
    re.IGNORECASE,
)


def _claims_reales() -> list[str]:
    textos = []
    for ruta in sorted(SALIDAS.glob("claims-*.json")):
        registro = json.loads(ruta.read_text(encoding="utf-8"))
        textos += [c["text"] for c in registro["datos"]["claims"]]
    return textos


@pytest.mark.skipif(not list(SALIDAS.glob("claims-*.json")), reason="no hay salidas del modelo")
def test_invariante_afirmaciones_dudosas_no_son_difiere_ni_coincide():
    culpables = [
        t for t in _claims_reales()
        if _PALABRAS_DUDOSAS.search(t) and _resultado(t) in ("difiere", "coincide")
    ]
    assert culpables == []
