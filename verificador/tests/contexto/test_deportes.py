"""Los contextos de fútbol: la Tabla Anual y el historial del Superclásico salen de copias guardadas de Wikipedia."""
import json
from datetime import date

import pytest

from verificador.contexto.armar import armar_contexto, armar_contextos
from verificador.contexto.selector import elegir_contextos
from verificador.series.modelos import ErrorFuente

HOY = date(2026, 10, 31)
TABLA = (
    "Argentinos alcanzó a Boca en la Tabla Anual. Boca encabeza la Tabla Anual con 57 puntos. "
    "Las dos primeras tablas son del Clausura y la tercera es la Tabla Anual."
)
SUPERCLASICO = (
    "El Superclásico de este domingo es un punto crucial. Boca recibe a River en la Bombonera. "
    "River quiere cerrar bien el Superclásico y Boca también."
)
VAR = "La Liga Profesional usará el fuera de juego semiautomático desde la fecha 16 del Clausura, según la AFA."


def claves(texto):
    return [e.clave for e in elegir_contextos(texto)]


def test_una_nota_que_habla_de_la_tabla_anual_trae_la_tabla():
    assert claves(TABLA) == ["tabla_anual"]


def test_una_mencion_suelta_de_la_tabla_anual_no_alcanza():
    assert claves("El torneo definirá la Tabla Anual al final de la fecha 16.") == []


def test_el_historial_pide_el_superclasico_y_a_los_dos_equipos():
    assert claves(SUPERCLASICO) == ["historial_superclasico"]
    assert claves("El Superclásico del domingo. Boca llega mejor. El Superclásico se juega de día.") == []


def test_una_nota_de_reglamento_no_trae_ningun_contexto_de_futbol():
    assert claves(VAR) == []


def test_la_tabla_anual_es_un_ranking_de_nueve_equipos_con_las_tres_primeras_destacadas():
    grafico = armar_contexto("tabla_anual", fecha_referencia=HOY, motivos=("Tabla Anual (×3)",))

    assert grafico.visual == "ranking"
    assert len(grafico.barras) == 9
    assert [b.destacada for b in grafico.barras] == [True] * 3 + [False] * 6
    assert [b.valor for b in grafico.barras] == sorted((b.valor for b in grafico.barras), reverse=True)
    assert grafico.titulo.startswith("Tabla Anual 2026 al 31 de octubre")


def test_la_tabla_cita_a_wikipedia_con_la_fecha_de_la_copia_y_avisa_que_puede_haber_cambiado():
    grafico = armar_contexto("tabla_anual", fecha_referencia=HOY)

    fuente = grafico.fuentes[0]
    assert "Wikipedia" in fuente.institucion and fuente.enlace.startswith("https://es.wikipedia.org/")
    assert fuente.origen_datos == "guardado"
    assert any("copia del 31 de octubre" in a for a in grafico.advertencias)
    assert "31 de octubre" in grafico.como_leerlo


def test_el_historial_cierra_ganados_mas_empates_igual_al_total():
    grafico = armar_contexto("historial_superclasico", fecha_referencia=HOY)

    ganó_boca, empates, ganó_river = (b.valor for b in grafico.barras)
    assert ganó_boca + empates + ganó_river == 218
    assert grafico.titulo == "Superclásicos en Primera División: de 218 partidos, Boca ganó 80, River 73 y empataron 65"


def test_sin_copia_guardada_falla_con_un_error_de_fuente(tmp_path):
    with pytest.raises(ErrorFuente):
        armar_contexto("tabla_anual", fecha_referencia=HOY, directorio=tmp_path)


def test_un_historial_que_no_cierra_se_rechaza(tmp_path):
    copia = {"pagina": "p", "enlace": "https://es.wikipedia.org/wiki/p", "copiado": "2026-10-31", "boca": 1, "empates": 1, "river": 1, "total": 9}
    (tmp_path / "wikipedia_historial_superclasico.json").write_text(json.dumps(copia), encoding="utf-8")

    with pytest.raises(ErrorFuente, match="no cierra"):
        armar_contexto("historial_superclasico", fecha_referencia=HOY, directorio=tmp_path)


def test_si_falta_una_copia_el_aviso_no_tira_los_demas_contextos(tmp_path):
    graficos, avisos = armar_contextos(TABLA, fecha_referencia=HOY, directorio=tmp_path)

    assert graficos == []
    assert len(avisos) == 1 and "tabla_anual" in avisos[0]
