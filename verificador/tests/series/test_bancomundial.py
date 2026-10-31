"""Banco Mundial como tercera fuente: datos anuales, definición y rezago siempre a la vista.

Sin red: copias guardadas del repo o un pedidor falso.
"""

from __future__ import annotations

import pytest

from verificador.series import ClienteSeries, ErrorFuente, cruzar, desde_texto
from verificador.series.bancomundial import extraer_puntos

CLIENTE = ClienteSeries(modo="guardado")


def _cruzar(texto: str):
    afirmacion = desde_texto(texto, anio_defecto=2026)
    assert afirmacion is not None, texto
    return cruzar(afirmacion, CLIENTE)


def test_pib_2025_coincide_con_el_valor_guardado_redondeado():
    t = _cruzar("El PIB creció 4,4% en 2025")
    assert t.resultado == "coincide"
    assert t.serie and t.serie.fuente == "bancomundial" and t.serie.id == "NY.GDP.MKTP.KD.ZG"
    assert t.serie.fecha_dato == "2025" and round(t.serie.valor, 2) == 4.37


def test_desempleo_2025_coincide_y_aclara_la_definicion():
    t = _cruzar("El desempleo fue de 7,1% en 2025")
    assert t.resultado == "coincide" and t.origen_datos == "guardado"
    avisos = " ".join(t.advertencias)
    assert "Banco Mundial" in avisos
    assert "estimación modelada de la OIT" in avisos and "no es la tasa de desocupación" in avisos
    assert "datos anuales con rezago" in avisos


def test_desempleo_2026_es_sin_dato_oficial_con_la_fecha_del_ultimo_dato():
    t = _cruzar("El desempleo fue de 7,1% en 2026")
    assert t.resultado == "sin_dato_oficial"
    assert any("2025" in a for a in t.advertencias)


def test_pib_sin_cifra_ni_anio_no_se_cruza():
    assert desde_texto("El PIB creció", anio_defecto=2026) is None


def test_gasto_educativo_sin_anio_es_sin_serie():
    t = _cruzar("El gasto en educación fue de 4% del PIB")
    assert t.resultado == "sin_serie"
    assert any("no se pudo determinar el período" in a for a in t.advertencias)


def test_gasto_educativo_con_anio_cruza():
    assert _cruzar("El gasto en educación fue de 5% del PIB en 2023").resultado == "coincide"
    assert _cruzar("El gasto en educación fue de 4% del PIB en 2023").resultado == "difiere"


def test_pobreza_del_indec_no_se_cruza_con_la_de_3_dolares():
    assert _cruzar("La pobreza fue de 31,6% en 2025").resultado == "sin_serie"
    assert _cruzar("La pobreza a US$ 3 por día fue de 1% en 2024").resultado == "coincide"


def test_pib_en_dolares_exige_escala():
    assert _cruzar("El PIB fue de US$ 683.098 millones en 2025").resultado == "coincide"
    assert _cruzar("El PIB fue de US$ 683 mil millones en 2025").resultado == "coincide"
    assert _cruzar("El PIB fue de US$ 700 mil millones en 2025").resultado == "difiere"
    assert _cruzar("El PIB fue de US$ 683 en 2025").resultado == "sin_serie"


def test_inflacion_anual_solo_si_dice_banco_mundial_y_el_anio():
    t = _cruzar("Según el Banco Mundial, la inflación de 2024 fue de 219,9%")
    assert t.resultado == "coincide" and t.serie and t.serie.fuente == "bancomundial"
    assert _cruzar("Según el Banco Mundial, la inflación de 2026 fue de 30%").resultado == "sin_dato_oficial"
    # sin nombrar al Banco Mundial y con solo un año, no hay serie mensual que sirva
    assert _cruzar("La inflación de 2024 fue de 219,9%").resultado == "sin_serie"


@pytest.mark.parametrize("texto", [
    "El desempleo fue de 7,1% en marzo de 2025",              # mes: la serie es anual
    "El desempleo del INDEC fue de 7,1% en 2025",             # otra definición
    "Se estima que el desempleo fue de 7,1% en 2025",         # estimación
    "El desempleo subió 1% en 2025",                          # variación
    "El desempleo estará entre 7% y 8% en 2025",              # rango
    "El PIB creció en promedio 4,4% en 2025",                 # promedio
])
def test_exclusiones_siguen_valiendo(texto):
    afirmacion = desde_texto(texto, anio_defecto=2026)
    assert afirmacion is None or cruzar(afirmacion, CLIENTE).resultado == "sin_serie"


def test_extraer_puntos_descarta_valores_nulos():
    cuerpo = [{"page": 1}, [
        {"date": "2025", "value": None}, {"date": "2024", "value": 7.15}, {"date": "2023", "value": 6.139},
    ]]
    assert extraer_puntos(cuerpo) == [("2023", 6.139), ("2024", 7.15)]
    assert extraer_puntos([{"message": "sin datos"}, None]) == []


def test_extraer_puntos_forma_inesperada():
    with pytest.raises(ErrorFuente):
        extraer_puntos({"error": "x"})


def test_api_caida_sin_copia_es_error_fuente(tmp_path):
    def caida(*_):
        raise ErrorFuente("sin red")

    c = ClienteSeries(modo="auto", directorio_guardado=tmp_path, pedidores={"bancomundial": caida})
    afirmacion = desde_texto("El desempleo fue de 7,1% en 2025", anio_defecto=2026)
    assert cruzar(afirmacion, c).resultado == "error_fuente"
