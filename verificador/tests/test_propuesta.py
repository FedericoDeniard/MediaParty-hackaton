from pathlib import Path
from types import SimpleNamespace

import pytest

from verificador.propuesta import (
    CifraModelo,
    SalidaModelo,
    construir_sistema,
    limpiar_cache,
    proponer_cifras,
)
from verificador.series.catalogo import CATALOGO

NOTA = (
    "La inflación de septiembre de 2026 fue de 1,9%, según el INDEC.\n\n"
    "Las reservas internacionales cerraron en US$ 50.580 millones el 26/10/2026. "
    "Las consultoras estiman que octubre cerraría en 1,8%."
)


@pytest.fixture(autouse=True)
def _cache_limpia():
    limpiar_cache()


class ClienteFalso:
    def __init__(self, cifras=None, stop_reason="end_turn", error=None, parsed="auto"):
        self.cifras = cifras or []
        self.stop_reason = stop_reason
        self.error = error
        self.parsed = parsed
        self.llamadas = []

    def parse(self, **kwargs):
        self.llamadas.append(kwargs)
        if self.error:
            raise self.error
        salida = SalidaModelo(cifras=self.cifras) if self.parsed == "auto" else self.parsed
        return SimpleNamespace(parsed_output=salida, stop_reason=self.stop_reason)


def _c(fragmento, valor, unidad="porcentaje", periodo=None, clave="ninguna", periodo_texto=None):
    return CifraModelo(
        fragmento=fragmento, valor_textual=valor, unidad=unidad, periodo=periodo, clave=clave,
        periodo_texto=periodo_texto,
    )


INFLACION = "La inflación de septiembre de 2026 fue de 1,9%"


def test_cifra_bien_ubicada_se_acepta():
    cliente = ClienteFalso([_c(INFLACION, "1,9%", periodo="2026-09", clave="inflacion_mensual")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.origen == "modelo"
    assert p.clave_catalogo == "inflacion_mensual"
    assert p.afirmacion.valor == 1.9 and p.afirmacion.unidad == "porcentaje"
    assert p.afirmacion.decimales == 1
    assert p.afirmacion.periodo == "2026-09"
    assert p.fragmento == INFLACION and p.parrafo_id == "p1"


def test_la_llamada_usa_la_interfaz_pedida():
    cliente = ClienteFalso()
    proponer_cifras(NOTA, cliente=cliente, modelo="m-x")
    k = cliente.llamadas[0]
    assert k["model"] == "m-x" and k["max_tokens"] == 8000
    assert k["output_config"] == {"effort": "low"} and k["output_format"] is SalidaModelo
    assert "[p1] La inflación" in k["messages"][0]["content"]
    for e in CATALOGO:
        assert e.clave in k["system"]
    assert "ninguna" in k["system"] and k["system"] == construir_sistema()


def test_fragmento_inventado_se_descarta():
    cliente = ClienteFalso([_c("El dólar subió a 9.999 pesos", "9.999 pesos", "pesos")])
    assert proponer_cifras(NOTA, cliente=cliente) == []


def test_valor_que_no_esta_en_el_fragmento_se_descarta():
    cliente = ClienteFalso([_c(INFLACION, "2,5%", clave="inflacion_mensual")])
    assert proponer_cifras(NOTA, cliente=cliente) == []


def test_valor_no_interpretable_se_descarta():
    cliente = ClienteFalso([_c(INFLACION, "septiembre")])
    assert proponer_cifras(NOTA, cliente=cliente) == []


def test_cita_se_copia_de_la_nota_no_del_modelo():
    cliente = ClienteFalso([_c("la INFLACION de septiembre de 2026 fue de 1,9%", "1,9%")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.fragmento == INFLACION


def test_clave_inventada_queda_none():
    cliente = ClienteFalso([_c(INFLACION, "1,9%", clave="inflacion_marciana")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.clave_catalogo is None


def test_periodo_que_la_nota_no_dice_queda_none():
    nota = "La inflación fue de 1,9% según el INDEC."
    cliente = ClienteFalso([_c("La inflación fue de 1,9%", "1,9%", periodo="2025-03", periodo_texto="marzo",
                               clave="inflacion_mensual")])
    [p] = proponer_cifras(nota, cliente=cliente)
    assert p.afirmacion.periodo is None
    assert p.clave_catalogo == "inflacion_mensual"  # sin período se mantiene la clave


def test_periodo_del_modelo_que_contradice_la_nota_se_corrige_con_lo_escrito():
    frag = "cerraron en US$ 50.580 millones el 26/10/2026"
    cliente = ClienteFalso([_c(frag, "US$ 50.580 millones", "dolares", periodo="2025-03", clave="reservas")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.afirmacion.periodo == "2026-10-26" and p.clave_catalogo == "reservas"


def test_periodo_con_dia_escrito_se_acepta():
    frag = "cerraron en US$ 50.580 millones el 26/10/2026"
    cliente = ClienteFalso([_c(frag, "US$ 50.580 millones", "dolares", periodo="2026-10-26", clave="reservas")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.afirmacion.periodo == "2026-10-26"


def test_no_se_completa_el_anio():
    nota = "La inflación se ubicó en 1,9% en septiembre."
    cliente = ClienteFalso([_c("La inflación se ubicó en 1,9% en septiembre", "1,9%", periodo="2026-09")])
    [p] = proponer_cifras(nota, cliente=cliente)
    assert p.afirmacion.periodo is None


def test_estimacion_marcada_ninguna_queda_sin_clave():
    frag = "Las consultoras estiman que octubre cerraría en 1,8%"
    cliente = ClienteFalso([_c(frag, "1,8%", clave="ninguna")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.clave_catalogo is None


def test_estimacion_con_indicador_y_mes_conserva_clave_y_periodo():
    frag = "Las consultoras estiman que octubre cerraría en 1,8%"
    cliente = ClienteFalso([_c(frag, "1,8%", clave="inflacion_mensual", periodo_texto="octubre")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert (p.clave_catalogo, p.afirmacion.periodo) == ("inflacion_mensual", "2026-10")


def test_unidad_incompatible_con_la_clave_queda_none():
    cliente = ClienteFalso([_c(INFLACION, "1,9%", clave="reservas")])
    [p] = proponer_cifras(NOTA, cliente=cliente)
    assert p.clave_catalogo is None


def test_fallback_sin_cliente():
    props = proponer_cifras(NOTA)
    assert props and all(p.origen == "reglas" for p in props)
    inf = next(p for p in props if p.afirmacion.valor == 1.9)
    assert inf.clave_catalogo == "inflacion_mensual"
    assert inf.parrafo_id == "p1" and inf.fragmento in NOTA
    est = next(p for p in props if p.afirmacion.valor == 1.8)
    assert est.clave_catalogo is None


def test_excepcion_del_cliente_usa_reglas_sin_lanzar():
    props = proponer_cifras(NOTA, cliente=ClienteFalso(error=RuntimeError("boom")))
    assert props and all(p.origen == "reglas" for p in props)


def test_refusal_usa_reglas():
    props = proponer_cifras(NOTA, cliente=ClienteFalso(stop_reason="refusal"))
    assert props and all(p.origen == "reglas" for p in props)


def test_sin_salida_parseada_usa_reglas():
    props = proponer_cifras(NOTA, cliente=ClienteFalso(parsed=None))
    assert props and all(p.origen == "reglas" for p in props)


def test_cache_evita_repetir_la_llamada():
    cliente = ClienteFalso([_c(INFLACION, "1,9%")])
    a = proponer_cifras(NOTA, cliente=cliente)
    b = proponer_cifras(NOTA, cliente=cliente)
    assert len(cliente.llamadas) == 1 and a == b


def test_nota_vacia():
    assert proponer_cifras("  ", cliente=ClienteFalso()) == []


CORPUS = Path(__file__).resolve().parents[2] / "corpus" / "notas" / "md"


F1 = (
    "Luego de que la inflación se ubicara en 1,9% en septiembre, un salto intermensual "
    "respecto del 1,7% de agosto, la expectativa para octubre está centrada en si podrá lograrse una desaceleración."
)
F2 = "Las estimaciones privadas ubican la variación mensual de octubre en 1,8%, una desaceleración de 0,1 puntos porcentuales."
F3 = "LCG informó que el segmento de alimentos y bebidas aumentó 0,5% durante la tercera semana de octubre."
F4 = "Las carnes subieron 0,5% semanal y el relevamiento marcaría 1,8% para el cierre del mes."


def _con_anio(*frases):
    return " ".join(frases) + " Todo esto ocurre en 2026."


def test_ubica_no_es_estimacion_y_cada_cifra_toma_su_periodo():
    nota = _con_anio(F1)
    cliente = ClienteFalso([
        _c(F1, "1,9%", periodo="2026-09", clave="inflacion_mensual"),
        _c(F1, "1,7%", periodo="2026-09", clave="inflacion_mensual"),
    ])
    p19, p17 = proponer_cifras(nota, cliente=cliente)
    assert (p19.clave_catalogo, p19.afirmacion.periodo) == ("inflacion_mensual", "2026-09")
    assert (p17.clave_catalogo, p17.afirmacion.periodo) == ("inflacion_mensual", "2026-08")


def test_estimacion_con_periodo_explicito_conserva_clave_y_periodo():
    nota = _con_anio(F2)
    cliente = ClienteFalso([_c(F2, "1,8%", periodo="2026-10", clave="inflacion_mensual")])
    [p] = proponer_cifras(nota, cliente=cliente)
    assert (p.clave_catalogo, p.afirmacion.periodo) == ("inflacion_mensual", "2026-10")


def test_semanal_y_cifras_marcadas_ninguna_quedan_sin_clave():
    nota = _con_anio(F3, F4)
    cliente = ClienteFalso([
        _c(F3, "0,5%", clave="inflacion_mensual"),
        _c(F4, "0,5%", clave="ninguna"),
        _c(F4, "1,8%", clave="ninguna"),
    ])
    props = proponer_cifras(nota, cliente=cliente)
    assert len(props) == 3 and all(p.clave_catalogo is None for p in props)


def test_rango_no_conserva_clave():
    frag = "La inflación de octubre estaría entre 1,5% y 2% según los analistas de 2026."
    cliente = ClienteFalso([_c(frag, "1,5%", periodo="2026-10", clave="inflacion_mensual")])
    [p] = proponer_cifras(frag, cliente=cliente)
    assert p.clave_catalogo is None


def test_anio_dominante_completa_el_anio_del_mes():
    nota = "En 2026 todo cambió. La inflación se ubicó en 1,9% en septiembre. Fue así en 2026."
    cliente = ClienteFalso([_c("La inflación se ubicó en 1,9% en septiembre", "1,9%", periodo="2025-09")])
    [p] = proponer_cifras(nota, cliente=cliente)
    assert p.afirmacion.periodo == "2026-09"


def test_anio_dominante_con_empate_o_sin_anio_no_completa():
    from verificador.propuesta import anio_dominante

    assert anio_dominante("en 2025 y en 2026") is None
    assert anio_dominante("sin años") is None
    assert anio_dominante("2026 y 2026 y 2025") == 2026


def test_anio_defecto_tiene_prioridad():
    nota = "En 2026 todo cambió. La inflación se ubicó en 1,9% en septiembre."
    cliente = ClienteFalso([_c("La inflación se ubicó en 1,9% en septiembre", "1,9%", periodo="2024-09")])
    [p] = proponer_cifras(nota, cliente=cliente, anio_defecto=2024)
    assert p.afirmacion.periodo == "2024-09"


@pytest.mark.skipif(not CORPUS.is_dir(), reason="no hay corpus")
def test_nota_real_con_cliente_falso():
    nota = sorted(CORPUS.glob("01-*.md"))[0]
    cuerpo = nota.read_text(encoding="utf-8").split(chr(10), 1)[1]
    cliente = ClienteFalso(
        [
            _c("la inflación se ubicara en 1,9% en septiembre", "1,9%", periodo="2026-09", clave="inflacion_mensual"),
            _c("respecto del 1,7% de agosto", "1,7%", periodo="2026-09", clave="inflacion_mensual"),
            _c("Las estimaciones privadas ubican la variación mensual de octubre en 1,8%", "1,8%",
               periodo="2026-10", clave="inflacion_mensual"),
            _c("la inflación llegó a 7,7% en agosto", "7,7%", clave="inflacion_mensual"),
        ]
    )
    props = proponer_cifras(cuerpo, cliente=cliente)
    assert [p.afirmacion.valor for p in props] == [1.9, 1.7, 1.8]
    assert all(p.fragmento in cuerpo for p in props)
    assert [p.afirmacion.periodo for p in props] == ["2026-09", "2026-08", "2026-10"]
    assert all(p.clave_catalogo == "inflacion_mensual" for p in props)
    reglas = proponer_cifras(cuerpo)
    assert reglas and all(p.fragmento in cuerpo for p in reglas)


CRUDAS = [
    ("Luego de que la inflación se ubicara en 1,9% en septiembre", "1,9%", "porcentaje", "inflacion_mensual"),
    ("respecto del 1,7% de agosto", "1,7%", "porcentaje", "inflacion_mensual"),
    ("Las estimaciones privadas ubican la variación mensual de octubre en 1,8%", "1,8%", "porcentaje", "ninguna"),
    ("una desaceleración de 0,1 puntos porcentuales", "0,1 puntos porcentuales", "otra", "ninguna"),
    ("LCG informó que el segmento de alimentos y bebidas aumentó 0,5% durante la tercera semana de octubre",
     "0,5%", "porcentaje", "ninguna"),
]


@pytest.mark.skipif(not CORPUS.is_dir(), reason="no hay corpus")
@pytest.mark.parametrize("clave_tercera", ["ninguna", "inflacion_mensual"])
def test_salida_cruda_real_de_haiku_sobre_la_nota_01(clave_tercera):
    nota = sorted(CORPUS.glob("01-*.md"))[0]
    cuerpo = nota.read_text(encoding="utf-8").split(chr(10), 1)[1]
    crudas = [_c(f, v, u, periodo=None, clave=k) for f, v, u, k in CRUDAS]
    crudas[2] = _c(CRUDAS[2][0], "1,8%", clave=clave_tercera)
    props = proponer_cifras(cuerpo, cliente=ClienteFalso(crudas))
    assert len(props) == 5
    assert (props[0].clave_catalogo, props[0].afirmacion.periodo) == ("inflacion_mensual", "2026-09")
    assert (props[1].clave_catalogo, props[1].afirmacion.periodo) == ("inflacion_mensual", "2026-08")
    assert props[2].afirmacion.periodo == "2026-10"
    assert props[2].clave_catalogo == (clave_tercera if clave_tercera != "ninguna" else None)
    assert props[3].clave_catalogo is None and props[4].clave_catalogo is None
