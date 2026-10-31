"""Armado de los gráficos de contexto con las copias guardadas de las series reales."""
from datetime import date

import pytest

from verificador.contexto.armar import armar_contexto, armar_contextos
from verificador.series.modelos import ErrorFuente

FECHA = date(2026, 10, 31)


def serie(grafico, clave):
    return next(s for s in grafico.series if s.clave == clave)


def test_poder_adquisitivo_arranca_en_100_y_termina_en_el_ultimo_mes_con_precios():
    g = armar_contexto("poder_adquisitivo", fecha_referencia=FECHA)
    assert [s.clave for s in g.series] == ["smvm", "haber", "auh"]
    assert g.referencia == 100
    for s in g.series:
        assert s.puntos[0].x == "2023-11"
        assert s.puntos[0].y == pytest.approx(100.0)
    assert max(p.x for s in g.series for p in s.puntos) == "2026-08"  # el IPC es el que llega menos lejos


def test_poder_adquisitivo_se_corta_en_el_mes_en_curso_y_no_muestra_montos_programados():
    g = armar_contexto("poder_adquisitivo", fecha_referencia=date(2026, 5, 15))
    assert max(p.x for s in g.series for p in s.puntos) == "2026-05"


def test_el_titulo_dice_los_numeros_calculados_sin_veredicto():
    g = armar_contexto("poder_adquisitivo", fecha_referencia=FECHA)
    assert "salario mínimo" in g.titulo and "haber mínimo" in g.titulo and "AUH" in g.titulo
    assert "noviembre de 2023" in g.titulo
    for palabra in ("alcanza", "no alcanza", "falso", "verdadero"):
        assert palabra not in g.titulo.lower()


def test_cada_fuente_trae_enlace_fecha_de_corte_y_rezago():
    g = armar_contexto("poder_adquisitivo", fecha_referencia=FECHA)
    assert len(g.fuentes) == 4
    for f in g.fuentes:
        assert f.enlace.startswith("https://")
        assert f.origen_datos == "guardado"
        assert f.rezago_meses >= 0
    ipc = next(f for f in g.fuentes if f.id.startswith("148.3"))
    assert ipc.ultimo_dato == "2026-08" and ipc.rezago_meses == 2


def test_el_como_leerlo_nombra_el_mes_base():
    g = armar_contexto("poder_adquisitivo", fecha_referencia=FECHA)
    assert "noviembre de 2023" in g.como_leerlo


def test_cobertura_de_canasta_cerca_de_los_valores_verificados():
    g = armar_contexto("cobertura_canasta", fecha_referencia=FECHA)
    smvm, haber = serie(g, "smvm"), serie(g, "haber")
    assert smvm.puntos[-1].x == "2026-08"
    assert smvm.puntos[-1].y == pytest.approx(0.72, abs=0.01)
    assert haber.puntos[-1].y == pytest.approx(0.81, abs=0.01)
    assert g.referencia == 1


def test_salarios_por_sector_el_publico_queda_por_debajo_del_privado():
    g = armar_contexto("salarios_por_sector", fecha_referencia=FECHA)
    assert [s.clave for s in g.series] == ["privado", "publico", "registrado"]
    assert serie(g, "publico").cambio_pct < serie(g, "privado").cambio_pct < 0


def test_universidades_compara_el_mismo_periodo_de_cada_anio_en_pesos_constantes():
    g = armar_contexto("universidades_constantes", fecha_referencia=FECHA)
    assert g.visual == "barras"
    assert [b.etiqueta for b in g.barras] == ["ene–ago 2023", "ene–ago 2024", "ene–ago 2025", "ene–ago 2026"]
    valores = {b.etiqueta: b.valor for b in g.barras}
    assert valores["ene–ago 2023"] == pytest.approx(5.06, abs=0.1)
    assert valores["ene–ago 2024"] == pytest.approx(3.37, abs=0.1)
    assert valores["ene–ago 2026"] == pytest.approx(3.86, abs=0.1)
    assert g.barras[-1].destacada and not any(b.destacada for b in g.barras[:-1])
    assert "billones" in g.unidad


def test_toda_serie_sin_copia_ni_api_corta_con_error_de_fuente(tmp_path):
    with pytest.raises(ErrorFuente):
        armar_contexto("poder_adquisitivo", fecha_referencia=FECHA, directorio=tmp_path)


def test_armar_contextos_elige_por_el_texto_y_guarda_los_motivos():
    texto = "La inflación sube y los precios de los alimentos también; la inflación de octubre preocupa. Inflación."
    graficos, avisos = armar_contextos(texto, fecha_referencia=FECHA)
    assert graficos and graficos[0].id == "poder_adquisitivo"
    assert graficos[0].motivos
    assert avisos == []


def test_armar_contextos_sin_datos_avisa_y_sigue_sin_romper(tmp_path):
    texto = "La inflación sube y los precios de los alimentos también; la inflación de octubre preocupa. Inflación."
    graficos, avisos = armar_contextos(texto, fecha_referencia=FECHA, directorio=tmp_path)
    assert graficos == []
    assert avisos and any("poder_adquisitivo" in a for a in avisos)


def test_armar_contextos_en_una_nota_de_futbol_no_arma_nada():
    graficos, avisos = armar_contextos("Boca recibe a River por la fecha 15 del Clausura.", fecha_referencia=FECHA)
    assert (graficos, avisos) == ([], [])
