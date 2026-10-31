"""El selector elige contextos del catálogo cerrado por lo que dice la nota; 'ninguno' es una respuesta válida."""
from verificador.contexto.selector import elegir_contextos

INFLACION = (
    "La inflación de septiembre fue de 1,9% y la expectativa para octubre es parecida. "
    "Los precios de los alimentos siguen empujando la inflación, según las consultoras. "
    "Si la inflación se mantiene cerca del 2%, el dato de octubre será de los más bajos."
)
PARO = (
    "Los universitarios comienzan hoy un nuevo paro por el presupuesto universitario. "
    "Los docentes de las universidades nacionales reclaman una recomposición de los salarios."
)
FUTBOL = "Boca recibe a River en la Bombonera por la fecha 15 del Torneo Clausura con los ojos puestos en la tabla."


def claves(texto, **kw):
    return [e.clave for e in elegir_contextos(texto, **kw)]


def test_una_nota_de_inflacion_trae_poder_adquisitivo_y_canasta():
    assert claves(INFLACION)[:2] == ["poder_adquisitivo", "cobertura_canasta"]


def test_una_nota_de_paro_universitario_trae_universidades_y_salarios():
    elegidos = claves(PARO)
    assert set(elegidos) == {"universidades_constantes", "salarios_por_sector"}


def test_una_nota_de_futbol_no_trae_ningun_contexto():
    assert elegir_contextos(FUTBOL) == []


def test_nunca_devuelve_mas_del_maximo():
    texto = INFLACION + " " + PARO
    assert len(elegir_contextos(texto)) == 2
    assert len(elegir_contextos(texto, maximo=1)) == 1


def test_no_distingue_mayusculas_ni_acentos():
    assert "poder_adquisitivo" in claves(INFLACION.upper())


def test_una_mencion_de_pasada_no_alcanza():
    texto = FUTBOL + " La inflación no afecta al fútbol."
    assert elegir_contextos(texto) == []


def test_cada_eleccion_explica_por_que_con_palabras_de_la_nota():
    for e in elegir_contextos(INFLACION):
        assert e.motivos, e.clave
        assert all(isinstance(m, str) and m for m in e.motivos)


def test_dos_menciones_de_universidad_y_la_palabra_fondos_no_alcanzan():
    agro = (
        "Los fondos comunes de inversión compraron maíz. Un informe de la Universidad de Rosario y otro de "
        "la Universidad de Buenos Aires miden el avance de la cosecha de maíz y soja."
    )
    assert elegir_contextos(agro) == []


def test_la_canasta_complementa_al_poder_adquisitivo_pero_nunca_lo_desplaza():
    texto = INFLACION + " La canasta básica. La canasta alimentaria. La canasta total. Pobreza. Pobreza."
    elegidos = claves(texto)
    assert elegidos[0] == "poder_adquisitivo"
    assert "cobertura_canasta" in elegidos


def test_la_canasta_sola_se_elige_con_su_propio_puntaje():
    texto = "La pobreza y el costo de vida suben. La canasta básica total se encareció."
    assert claves(texto) == ["cobertura_canasta"]


def test_las_elecciones_vienen_ordenadas_por_puntaje():
    puntajes = [e.puntaje for e in elegir_contextos(INFLACION + " " + PARO, maximo=4)]
    assert puntajes == sorted(puntajes, reverse=True)
