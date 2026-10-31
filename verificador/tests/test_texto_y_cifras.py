from decimal import Decimal

import pytest

from verificador.cifras import cifras_faltantes, extraer_cifras
from verificador.texto import normalizar, partir_en_parrafos, ubicar


def test_normalizar_unifica_saltos_y_recorta():
    assert normalizar("  a\r\nb\rc \n") == "a\nb\nc"


def test_partir_en_parrafos_posiciones_exactas():
    texto = "\nUno dos.\n\n\nTres  cuatro.\r\n \r\nCinco."
    ps = partir_en_parrafos(texto)
    assert [p.id for p in ps] == ["p1", "p2", "p3"]
    for p in ps:
        assert texto[p.inicio:p.fin] == p.texto
    assert ps[2].texto == "Cinco."


def test_ubicar_literal():
    u = ubicar("Hola mundo. Segundo.", "mundo")
    assert u and u.exacta and u.cita == "mundo" and u.parrafo_id == "p1"


def test_ubicar_tolerante_espacios_comillas_tildes():
    texto = "El ministro dijo: “la inflación  bajará” y se fue.\n\nOtro párrafo."
    u = ubicar(texto, 'dijo: "la inflacion bajara"')
    assert u and not u.exacta
    assert u.cita == "dijo: “la inflación  bajará”"
    assert ubicar(texto, "OTRO PARRAFO").parrafo_id == "p2"


def test_ubicar_salto_de_linea_como_espacio():
    assert ubicar("uno\ndos tres", "uno dos").cita == "uno\ndos"


def test_ubicar_palabra_alterada_no_se_ubica():
    assert ubicar("La inflación bajará en octubre.", "La inflación subirá en octubre.") is None
    assert ubicar("abc", "") is None


@pytest.mark.parametrize(
    "texto,valor,unidad",
    [
        ("1,9%", "1.9", "%"),
        ("1.537,35", "1537.35", None),
        ("US$ 50.580 millones", "50580000000", "usd"),
        ("u$s 877 millones", "877000000", "usd"),
        ("$1536", "1536", "ars"),
        ("23,6 por ciento", "23.6", "%"),
        ("10 mil", "10000", None),
        ("2,3% mensual", "2.3", "%"),
        ("0,4 p.p.", "0.4", "pp"),
        ("USD 3 mil millones", "3000000000", "usd"),
    ],
)
def test_extraer_cifras(texto, valor, unidad):
    (c,) = extraer_cifras(texto)
    assert c.valor == Decimal(valor) and c.unidad == unidad


def test_extraer_cifras_ignora_anios_y_fechas():
    assert extraer_cifras("El 15 de marzo de 2026 y el 3/4/2025") == ()


def test_cifras_comparan_valor_no_texto():
    assert cifras_faltantes("subió 1,80%", "subió 1,8 por ciento") == ()
    assert cifras_faltantes("10.000 dólares", "10 mil dólares") == ()
    assert cifras_faltantes("2 jueces", "dos jueces") == ()
    assert [c.texto for c in cifras_faltantes("subió 2,5%", "subió 1,8%")] == ["2,5%"]
    assert cifras_faltantes("5 puntos porcentuales", "5%") != ()
