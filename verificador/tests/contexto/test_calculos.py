"""Cálculos puros de los contextos: valores reales, razones y acumulados en pesos constantes."""
import pytest

from verificador.contexto.calculos import (
    acumulado_a_mes,
    cambio_pct,
    cortar_hasta,
    meses_entre,
    por_mes,
    razon,
    serie_real,
)
from verificador.contexto.catalogo import AUH, HABER, IPC, MES_BASE, SMVM
from verificador.contexto.series import cargar_serie


def test_por_mes_se_queda_con_el_ultimo_valor_de_cada_mes():
    puntos = [("2026-01-01", 1.0), ("2026-01-15", 2.0), ("2026-02-01", 3.0)]
    assert por_mes(puntos) == {"2026-01": 2.0, "2026-02": 3.0}


def test_cortar_hasta_descarta_los_meses_posteriores():
    serie = {"2026-09": 1.0, "2026-10": 2.0, "2026-11": 3.0}
    assert cortar_hasta(serie, "2026-10") == {"2026-09": 1.0, "2026-10": 2.0}


def test_serie_real_divide_por_los_precios_y_vale_100_en_el_mes_base():
    nominal = {"2023-11": 100.0, "2023-12": 110.0, "2024-01": 121.0}
    ipc = {"2023-11": 10.0, "2023-12": 11.0, "2024-01": 13.31}
    real = serie_real(nominal, ipc, base="2023-11", hasta="2024-01")
    assert real[0] == ("2023-11", pytest.approx(100.0))
    assert real[1] == ("2023-12", pytest.approx(100.0))  # el nominal subió igual que los precios
    assert real[2] == ("2024-01", pytest.approx(90.909, abs=0.001))  # subió menos que los precios


def test_serie_real_omite_los_meses_que_faltan_en_alguna_de_las_dos_series():
    nominal = {"2023-11": 100.0, "2023-12": 110.0, "2024-01": 121.0}
    ipc = {"2023-11": 10.0, "2024-01": 13.31}
    meses = [m for m, _ in serie_real(nominal, ipc, base="2023-11", hasta="2024-01")]
    assert meses == ["2023-11", "2024-01"]


def test_serie_real_sin_dato_en_el_mes_base_devuelve_vacio():
    assert serie_real({"2023-12": 1.0}, {"2023-12": 1.0}, base="2023-11", hasta="2023-12") == []


def test_razon_divide_mes_a_mes_dentro_del_rango():
    num = {"2026-01": 50.0, "2026-02": 60.0, "2026-03": 90.0}
    den = {"2026-01": 100.0, "2026-02": 100.0, "2026-03": 100.0}
    assert razon(num, den, desde="2026-02", hasta="2026-03") == [("2026-02", 0.6), ("2026-03", 0.9)]


def test_cambio_pct_mide_del_primer_al_ultimo_punto():
    assert cambio_pct([("a", 100.0), ("b", 59.5)]) == pytest.approx(-40.5)
    assert cambio_pct([("a", 100.0)]) is None


def test_acumulado_a_mes_lleva_cada_mes_a_pesos_del_mes_de_referencia():
    nominal = {"2023-01": 10.0, "2023-02": 20.0, "2024-01": 5.0, "2024-02": 5.0}
    ipc = {"2023-01": 1.0, "2023-02": 2.0, "2024-01": 4.0, "2024-02": 4.0, "2026-08": 4.0}
    resultado = acumulado_a_mes(nominal, ipc, anios=[2023, 2024], mes_fin=2, mes_ipc="2026-08")
    assert resultado == [(2023, pytest.approx(80.0)), (2024, pytest.approx(10.0))]  # 10*4/1 + 20*4/2 ; 5 + 5


def test_acumulado_a_mes_ignora_el_anio_al_que_le_falta_un_mes():
    nominal = {"2023-01": 10.0}
    ipc = {"2023-01": 1.0, "2023-02": 2.0, "2026-08": 4.0}
    assert acumulado_a_mes(nominal, ipc, anios=[2023], mes_fin=2, mes_ipc="2026-08") == []


def test_meses_entre_cuenta_meses_calendario():
    assert meses_entre("2026-08", "2026-10") == 2
    assert meses_entre("2025-12", "2026-01") == 1
    assert meses_entre("2026-10", "2026-10") == 0


# --- contra las copias reales de las series (verificadas el 2026-10-31 con una segunda cuenta independiente) ---


def real_hasta(ref, hasta):
    nominal = por_mes(cargar_serie(ref)[0])
    ipc = por_mes(cargar_serie(IPC)[0])
    return serie_real(nominal, ipc, base=MES_BASE, hasta=hasta)


def test_salario_minimo_real_cae_cerca_de_40_5_por_ciento_hasta_julio_de_2026():
    assert cambio_pct(real_hasta(SMVM, "2026-07")) == pytest.approx(-40.5, abs=0.1)


def test_haber_minimo_real_sube_cerca_de_9_8_por_ciento_hasta_julio_de_2026():
    assert cambio_pct(real_hasta(HABER, "2026-07")) == pytest.approx(9.8, abs=0.2)


def test_auh_real_se_duplica_hasta_julio_de_2026():
    assert cambio_pct(real_hasta(AUH, "2026-07")) == pytest.approx(102, abs=1.5)
