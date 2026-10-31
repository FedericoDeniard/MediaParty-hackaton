"""Pruebas del cruce de cifras. Ninguna usa la red: cliente falso o copias guardadas."""

from __future__ import annotations

import pytest

from verificador.series import AfirmacionNumerica, ClienteSeries, ErrorFuente, cruzar, desde_texto
from verificador.series.texto import parsear_numero

BCRA_27 = [
    ("2026-01-31", 2.9), ("2026-02-28", 2.9), ("2026-03-31", 3.4), ("2026-04-30", 2.6),
    ("2026-05-31", 2.1), ("2026-06-30", 1.9), ("2026-07-31", 2.1), ("2026-08-31", 1.7),
    ("2026-09-30", 1.9),
]
BCRA_5 = [("2026-10-23", 1528.26), ("2026-10-26", 1540.48), ("2026-10-30", 1537.3487)]
BCRA_1 = [("2026-10-27", 50579.0), ("2026-10-28", 50603.0)]
INDICE_NUCLEO = [("2026-07-01", 100.0), ("2026-08-01", 102.0)]

SERIES = {
    ("bcra", "27"): BCRA_27, ("bcra", "5"): BCRA_5, ("bcra", "1"): BCRA_1,
    ("datosgob", "148.3_INUCLEONAL_DICI_M_19"): INDICE_NUCLEO,
}


def _pedidor(fuente: str):
    def pedir(id_serie: str, desde: str, hasta: str):
        try:
            return SERIES[(fuente, id_serie)]
        except KeyError:
            raise ErrorFuente(f"sin datos de prueba para {id_serie}") from None
    return pedir


@pytest.fixture
def cliente(tmp_path) -> ClienteSeries:
    return ClienteSeries(
        modo="auto", directorio_guardado=tmp_path,
        pedidores={"bcra": _pedidor("bcra"), "datosgob": _pedidor("datosgob")},
    )


def _afirmacion(**kw) -> AfirmacionNumerica:
    base = dict(texto="", indicador=None, valor=0.0, unidad="porcentaje", decimales=1, periodo=None)
    return AfirmacionNumerica(**{**base, **kw})


def _inflacion(valor: float, periodo: str, decimales: int | None = 1) -> AfirmacionNumerica:
    return _afirmacion(
        texto=f"{valor}% en {periodo}", indicador="inflación mensual (IPC)", valor=valor,
        decimales=decimales, periodo=periodo,
    )


# --- los casos de las notas reales -------------------------------------------------

def test_inflacion_de_septiembre_coincide(cliente):
    t = cruzar(_inflacion(1.9, "2026-09"), cliente)
    assert t.resultado == "coincide"
    assert t.clave_catalogo == "inflacion_mensual"
    assert t.serie and t.serie.fuente == "bcra" and t.serie.id == "27"
    assert t.serie.valor == 1.9 and t.serie.fecha_dato == "2026-09-30"
    assert t.origen_datos == "api"


def test_inflacion_de_agosto_coincide(cliente):
    assert cruzar(_inflacion(1.7, "2026-08"), cliente).resultado == "coincide"


def test_estimacion_de_octubre_es_sin_dato_oficial(cliente):
    t = cruzar(_inflacion(1.8, "2026-10"), cliente)
    assert t.resultado == "sin_dato_oficial"
    assert t.serie is None and t.diferencia is None
    assert any("2026-09-30" in a for a in t.advertencias)  # fecha del último dato


def test_indicador_sin_serie(cliente):
    a = _afirmacion(
        texto="el salario de los docentes subió 12%", indicador="salario de los docentes",
        valor=12.0, decimales=0, periodo="2026-09",
    )
    t = cruzar(a, cliente)
    assert t.resultado == "sin_serie"
    assert t.serie is None and t.clave_catalogo is None


def test_dolar_mayorista_del_lunes_difiere_y_aclara_el_cierre(cliente):
    a = _afirmacion(
        texto="el dólar mayorista cerró a $1541", indicador="dólar mayorista, cierre",
        valor=1541.0, unidad="pesos", decimales=0, periodo="2026-10-26",
    )
    t = cruzar(a, cliente)
    assert t.resultado == "difiere"
    assert t.serie and t.serie.valor == 1540.48
    assert t.diferencia == pytest.approx(0.52)
    assert any("cierre de mercado" in adv and "valor de referencia" in adv for adv in t.advertencias)


def test_variacion_del_dolar_no_se_compara_con_el_nivel(cliente):
    a = _afirmacion(
        texto="subió $11,50", indicador="variación del dólar mayorista frente al viernes",
        valor=11.5, unidad="pesos", decimales=2, periodo="2026-10-26",
    )
    assert cruzar(a, cliente).resultado == "sin_serie"


def test_cifra_semanal_privada_es_sin_serie(cliente):
    a = _afirmacion(texto="0,5%", indicador="aumento semanal de alimentos y bebidas (LCG)",
                    valor=0.5, periodo="2026-10")
    assert cruzar(a, cliente).resultado == "sin_serie"


# --- regla de comparación ---------------------------------------------------------

def test_difiere_muestra_la_diferencia(cliente):
    t = cruzar(_inflacion(1.8, "2026-09"), cliente)
    assert t.resultado == "difiere"
    assert t.diferencia == pytest.approx(-0.1)


def test_se_redondea_a_los_decimales_de_la_cifra_dicha(cliente):
    # la serie dice 1,9; "2%" sin decimales coincide, "1,95" con dos decimales difiere
    assert cruzar(_inflacion(2.0, "2026-09", decimales=0), cliente).resultado == "coincide"
    assert cruzar(_inflacion(1.95, "2026-09", decimales=2), cliente).resultado == "difiere"


def test_sin_periodo_es_sin_serie_y_no_compara_con_el_ultimo_dato(cliente):
    t = cruzar(_inflacion(1.9, None), cliente)  # type: ignore[arg-type]
    assert t.resultado == "sin_serie" and t.serie is None
    assert any("no se pudo determinar el período" in a for a in t.advertencias)


def test_reservas_en_millones(cliente):
    a = _afirmacion(texto="reservas por US$ 50.580 millones", indicador="reservas internacionales",
                    valor=50580.0, unidad="dolares", decimales=0, periodo="2026-10-27")
    t = cruzar(a, cliente)
    assert t.resultado == "difiere" and t.diferencia == 1.0
    assert cruzar(a.model_copy(update={"valor": 50579.0}), cliente).resultado == "coincide"


def test_fecha_sin_publicacion_es_sin_dato_oficial(cliente):
    a = _afirmacion(texto="dólar mayorista $1540", indicador="dólar mayorista", valor=1540.0,
                    unidad="pesos", decimales=0, periodo="2026-10-25")  # sábado
    assert cruzar(a, cliente).resultado == "sin_dato_oficial"


def test_variacion_mensual_calculada_con_codigo(cliente):
    a = _afirmacion(texto="la inflación núcleo fue de 2%", indicador="inflación núcleo",
                    valor=2.0, decimales=0, periodo="2026-08")
    t = cruzar(a, cliente)
    assert t.resultado == "coincide" and t.serie and t.serie.valor == 2.0
    assert any("rezago" in adv for adv in t.advertencias)


def test_acumulado_del_anio_compone_las_variaciones_mensuales(cliente):
    esperado = 1.0
    for _, v in BCRA_27:
        esperado *= 1 + v / 100
    esperado = round((esperado - 1) * 100, 1)
    a = _afirmacion(texto="la inflación acumulada de enero a septiembre fue", valor=esperado,
                    indicador="inflación acumulada del año", decimales=1, periodo="2026-09")
    t = cruzar(a, cliente)
    assert t.clave_catalogo == "inflacion_acumulada_anio"
    assert t.resultado == "coincide"


# --- origen de los datos ----------------------------------------------------------

def test_api_caida_usa_la_copia_guardada(tmp_path):
    ok = ClienteSeries(modo="auto", directorio_guardado=tmp_path, pedidores={"bcra": _pedidor("bcra")})
    ok.obtener("bcra", "27")  # deja la copia

    def caida(*_):
        raise ErrorFuente("sin red")

    caido = ClienteSeries(modo="auto", directorio_guardado=tmp_path, pedidores={"bcra": caida})
    t = cruzar(_inflacion(1.9, "2026-09"), caido)
    assert t.resultado == "coincide" and t.origen_datos == "guardado"
    assert any("copia guardada" in a for a in t.advertencias)


def test_api_caida_sin_copia_es_error_fuente(tmp_path):
    def caida(*_):
        raise ErrorFuente("sin red")

    c = ClienteSeries(modo="auto", directorio_guardado=tmp_path, pedidores={"bcra": caida})
    t = cruzar(_inflacion(1.9, "2026-09"), c)
    assert t.resultado == "error_fuente"
    assert t.serie is None and t.origen_datos is None


def test_modo_api_no_cae_a_la_copia(tmp_path):
    def caida(*_):
        raise ErrorFuente("sin red")

    ClienteSeries(modo="auto", directorio_guardado=tmp_path,
                  pedidores={"bcra": _pedidor("bcra")}).obtener("bcra", "27")
    c = ClienteSeries(modo="api", directorio_guardado=tmp_path, pedidores={"bcra": caida})
    assert cruzar(_inflacion(1.9, "2026-09"), c).resultado == "error_fuente"


def test_modo_invalido():
    with pytest.raises(ValueError):
        ClienteSeries(modo="loquesea")  # type: ignore[arg-type]


def test_modo_auto_guarda_la_respuesta(cliente, tmp_path):
    cruzar(_inflacion(1.9, "2026-09"), cliente)
    assert (tmp_path / "bcra_27.json").exists()


def test_copias_guardadas_reales_dan_coincide():
    """Usa las copias del repo (sin red): las dos cifras de las notas 1 y 2."""
    c = ClienteSeries(modo="guardado")
    for valor, periodo in [(1.9, "2026-09"), (1.7, "2026-08")]:
        t = cruzar(_inflacion(valor, periodo), c)
        assert t.resultado == "coincide" and t.origen_datos == "guardado"


# --- formato argentino y heurística de texto -----------------------------------------

@pytest.mark.parametrize("crudo,valor,decimales", [
    ("1,9", 1.9, 1), ("1.537,35", 1537.35, 2), ("50.580", 50580.0, 0),
    ("1532", 1532.0, 0), ("0,75", 0.75, 2), ("1.946,73", 1946.73, 2),
])
def test_parsear_numero_argentino(crudo, valor, decimales):
    assert parsear_numero(crudo) == (valor, decimales)


def test_desde_texto_porcentaje_con_mes():
    a = desde_texto("La inflación mensual de septiembre de 2026 fue de 1,9%")
    assert a and a.valor == 1.9 and a.unidad == "porcentaje" and a.decimales == 1
    assert a.periodo == "2026-09" and a.indicador == "inflación mensual"


def test_desde_texto_dolares_en_millones():
    a = desde_texto("Las reservas llegaron a US$ 50.580 millones")
    assert a and a.valor == 50580.0 and a.unidad == "dolares" and a.indicador == "reservas"


def test_desde_texto_pesos_y_fecha():
    a = desde_texto("El lunes 26/10/2026 el dólar mayorista cerró a $1.537,35")
    assert a and a.valor == 1537.35 and a.unidad == "pesos" and a.decimales == 2
    assert a.periodo == "2026-10-26"


def test_desde_texto_sin_cifra():
    assert desde_texto("No hay números en esta frase") is None


def test_desde_texto_y_cruce_de_punta_a_punta(cliente):
    a = desde_texto("La inflación de agosto de 2026 fue 1,7%")
    assert a and cruzar(a, cliente).resultado == "coincide"
