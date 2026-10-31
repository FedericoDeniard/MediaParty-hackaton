"""Pruebas de la validación completa, sin red: series desde las copias guardadas."""
import json
from pathlib import Path
from types import SimpleNamespace

import pytest

from verificador.series import AfirmacionNumerica, ClienteSeries
from verificador.series.modelos import ErrorFuente
from datetime import date
from functools import partial

from verificador.validar import catalogo_publico
from verificador.validar import validar_nota as _validar_nota

FECHA = date(2026, 10, 31)  # fija, para que las pruebas no dependan del día en que se corran
validar_nota = partial(_validar_nota, fecha_referencia=FECHA)

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
FIXTURES = Path(__file__).parent / "fixtures"
CON_NOTAS = pytest.mark.skipif(not NOTAS.exists(), reason="no hay notas en corpus/notas/md")


def cuerpo_de(nota: str) -> str:
    ruta = next(NOTAS.glob(f"{nota}-*.md"))
    return "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()


def enriquecimientos_de(nota: str) -> dict:
    return json.loads((FIXTURES / f"enriquecimientos-{nota}.json").read_text(encoding="utf-8"))


@pytest.fixture
def cliente():
    return ClienteSeries(modo="guardado")


@CON_NOTAS
def test_la_inflacion_de_septiembre_coincide_con_el_bcra_y_trae_su_cita(cliente):
    informe = validar_nota(cuerpo_de("01"), enriquecimientos_de("01"), cliente_series=cliente)
    septiembre = [t for t in informe.tarjetas if t.tarjeta.resultado == "coincide"]
    assert septiembre, informe.resumen
    t = septiembre[0]
    assert t.tarjeta.dicho.periodo == "2026-09"
    assert t.tarjeta.serie.fuente == "bcra"
    assert "1,9%" in t.cita  # copiada de la nota por el código
    assert t.parrafo_id == "p1"
    assert not t.bloqueada


@CON_NOTAS
@pytest.mark.parametrize("nota", ["01", "02", "03", "04"])
def test_en_las_notas_reales_nunca_hay_un_difiere_falso(cliente, nota):
    informe = validar_nota(cuerpo_de(nota), enriquecimientos_de(nota), cliente_series=cliente)
    resultados = {t.tarjeta.resultado for t in informe.tarjetas}
    assert resultados <= {"coincide", "sin_serie", "sin_dato_oficial"}, resultados


@CON_NOTAS
@CON_NOTAS
def test_las_posiciones_de_cada_cita_apuntan_al_cuerpo_y_a_un_parrafo_del_informe(cliente):
    cuerpo = cuerpo_de("02")
    informe = validar_nota(cuerpo, enriquecimientos_de("02"), cliente_series=cliente)
    ids = {p.id for p in informe.parrafos}
    for t in informe.tarjetas:
        if t.cita:
            assert cuerpo[t.inicio : t.fin] == t.cita
            assert t.parrafo_id in ids


@CON_NOTAS
def test_el_informe_es_json_puro(cliente):
    informe = validar_nota(cuerpo_de("02"), enriquecimientos_de("02"), cliente_series=cliente)
    texto = json.dumps(informe.model_dump(mode="json"), ensure_ascii=False)
    assert json.loads(texto)["version"]


@CON_NOTAS
def test_funciona_solo_con_la_nota_sin_enriquecimientos(cliente):
    informe = validar_nota(cuerpo_de("01"), cliente_series=cliente)
    assert informe.verificacion.items == []
    assert informe.tarjetas  # las reglas encuentran cifras aunque no haya grafo


def cifra(texto="La inflación de septiembre de 2026 fue de 1,9%", valor=1.9, periodo="2026-09"):
    return AfirmacionNumerica(texto=texto, valor=valor, unidad="porcentaje", decimales=1, periodo=periodo)


def test_una_propuesta_con_fragmento_de_la_nota_toma_la_cita_de_la_nota(cliente):
    cuerpo = "La inflación de septiembre de 2026 fue de 1,9%.\n\nSegundo párrafo."
    propuesta = SimpleNamespace(afirmacion=cifra(), fragmento="La inflación de septiembre de 2026 fue de 1,9%", origen="modelo")
    informe = validar_nota(cuerpo, proponer=lambda _: [propuesta], cliente_series=cliente)
    t = informe.tarjetas[0]
    assert t.origen == "modelo"
    assert t.cita == "La inflación de septiembre de 2026 fue de 1,9%"
    assert t.parrafo_id == "p1"
    assert t.tarjeta.resultado == "coincide"


def test_un_anio_que_la_nota_no_escribe_se_corrige_con_el_de_la_nota(cliente):
    # el grafo reescribió "septiembre" como "septiembre de 2025"; la nota solo habla de 2026
    cuerpo = "La inflación de septiembre fue de 1,9% mensual en 2026.\n\nOtro párrafo."
    enriquecimientos = {"claims": {"claims": [{"text": "La inflación de septiembre de 2025 fue de 1,9% mensual."}]}}
    informe = validar_nota(cuerpo, enriquecimientos, cliente_series=cliente)
    t = informe.tarjetas[0]
    assert t.tarjeta.dicho.periodo == "2026-09"
    assert t.tarjeta.resultado == "coincide"
    assert any("2025" in alerta for alerta in t.alertas)


def test_el_anio_por_defecto_es_el_de_publicacion_aunque_la_nota_hable_mas_de_otro(cliente):
    # la nota menciona 2027 tres veces (proyecciones) y 2026 ninguna: "agosto" es de 2026
    cuerpo = (
        "La inflación de agosto fue de 1,7% mensual.\n\n"
        "Para 2027 se espera menos; en 2027 y también en 2027 habría una baja."
    )
    enriquecimientos = {"claims": {"claims": [{"text": "La inflación de agosto fue de 1,7% mensual."}]}}
    informe = validar_nota(cuerpo, enriquecimientos, cliente_series=cliente)
    assert informe.tarjetas[0].tarjeta.dicho.periodo == "2026-08"
    assert informe.tarjetas[0].tarjeta.resultado == "coincide"
    assert informe.fecha_referencia == FECHA


def test_un_anio_que_la_nota_si_escribe_no_se_toca(cliente):
    cuerpo = "En septiembre de 2025 la inflación fue de 2,1%, y en septiembre de 2026 fue de 1,9%.\n\nOtro párrafo."
    enriquecimientos = {"claims": {"claims": [{"text": "La inflación de septiembre de 2025 fue de 2,1% mensual."}]}}
    informe = validar_nota(cuerpo, enriquecimientos, cliente_series=cliente)
    assert informe.tarjetas[0].tarjeta.dicho.periodo == "2025-09"


def test_sin_pasaje_en_la_nota_la_tarjeta_queda_bloqueada(cliente):
    cuerpo = "Una nota que no menciona ninguna cifra relevante.\n\nOtro párrafo."
    propuesta = SimpleNamespace(afirmacion=cifra(), fragmento="Esto no está en la nota", origen="modelo")
    informe = validar_nota(cuerpo, proponer=lambda _: [propuesta], cliente_series=cliente)
    assert informe.tarjetas[0].bloqueada
    assert informe.tarjetas[0].cita is None
    assert informe.hay_bloqueos


def test_una_fuente_caida_no_tira_el_informe():
    def caida(*_):
        raise ErrorFuente("sin red")

    cliente = ClienteSeries(modo="api", pedidores={"bcra": caida})
    cuerpo = "La inflación de septiembre de 2026 fue de 1,9%.\n\nOtro párrafo."
    propuesta = SimpleNamespace(afirmacion=cifra(), fragmento="La inflación de septiembre de 2026 fue de 1,9%", origen="modelo")
    informe = validar_nota(cuerpo, proponer=lambda _: [propuesta], cliente_series=cliente)
    assert informe.tarjetas[0].tarjeta.resultado == "error_fuente"


def test_si_el_modelo_falla_se_siguen_usando_las_reglas_y_se_avisa(cliente, monkeypatch):
    import verificador.propuesta as propuesta

    def explota(*_, **__):
        raise RuntimeError("sin cuota")

    monkeypatch.setattr(propuesta, "proponer_cifras", explota)
    cuerpo = "La inflación de septiembre de 2026 fue de 1,9% mensual.\n\nOtro párrafo."
    informe = validar_nota(cuerpo, usar_modelo=True, cliente_series=cliente)
    assert any("modelo" in aviso for aviso in informe.avisos)
    assert informe.tarjetas  # el informe sale igual


def test_el_catalogo_publico_nombra_la_fuente_de_cada_indicador():
    catalogo = catalogo_publico()
    assert {e["fuente"] for e in catalogo} >= {"bcra", "datosgob", "bancomundial"}
    assert all(e["id"] and e["nombre"] for e in catalogo)
