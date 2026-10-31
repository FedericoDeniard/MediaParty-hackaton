"""Pruebas del armado de gráficos: de un informe y sus enriquecimientos salen series, línea de tiempo y ranking.

Reglas que se comprueban: sin cita no hay punto, el código cuenta (no el modelo), y lo que no
hay se muestra como hueco o se omite, nunca se rellena.
"""
import json
from datetime import date
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from verificador.api import crear_app
from verificador.graficos import MAX_PUNTOS_SERIE, armar_graficos
from verificador.series import ClienteSeries
from verificador.validar import validar_nota

FECHA = date(2026, 10, 31)
RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
FIXTURES = Path(__file__).parent / "fixtures"
CON_NOTAS = pytest.mark.skipif(not NOTAS.exists(), reason="no hay notas en corpus/notas/md")

CUERPO_TIEMPO = (
    "En agosto de 2026 la inflación fue de 1,7%.\n\n"
    "En septiembre de 2026 subió a 1,9%.\n\n"
    "El 15 de octubre de 2026 el Gobierno anunció medidas."
)
CUERPO_ENTIDADES = (
    "Javier Milei habló con Radio Rivadavia sobre el INDEC.\n\n"
    "Milei dijo que el INDEC publicará el dato y el BCRA lo comentará.\n\n"
    "El INDEC informó el viernes que Milei estaba equivocado."
)


def cuerpo_de(nota: str) -> str:
    ruta = next(NOTAS.glob(f"{nota}-*.md"))
    return "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()


def enriquecimientos_de(nota: str) -> dict:
    return json.loads((FIXTURES / f"enriquecimientos-{nota}.json").read_text(encoding="utf-8"))


@pytest.fixture
def cliente():
    return ClienteSeries(modo="guardado")


def graficos_de(cuerpo: str, enriquecimientos: dict | None, cliente: ClienteSeries):
    informe = validar_nota(cuerpo, enriquecimientos, cliente_series=cliente, fecha_referencia=FECHA)
    return armar_graficos(informe, enriquecimientos, cliente)


def por_tipo(resultado, tipo: str):
    return [g for g in resultado.graficos if g.tipo == tipo]


def evento(fecha: str, precision: str, titulo: str) -> dict:
    return {"date": fecha, "precision": precision, "title": titulo, "description": titulo, "paragraph_index": 1}


def nodo(nombre: str, menciones: int = 1) -> dict:
    return {"id": nombre.lower(), "name": nombre, "type": "org", "mentions": menciones, "description": nombre}


# --- serie oficial con la cifra de la nota marcada -------------------------------------------


@CON_NOTAS
def test_la_nota_01_arma_la_serie_de_inflacion_con_septiembre_marcado(cliente):
    cuerpo = cuerpo_de("01")
    resultado = graficos_de(cuerpo, enriquecimientos_de("01"), cliente)

    serie = next(g for g in por_tipo(resultado, "serie") if g.id == "serie-bcra-27")
    assert serie.titulo == "Inflación mensual (IPC)"
    assert serie.enlace.startswith("https://api.bcra.gob.ar/")
    assert any(p.x == "2026-09-30" and p.y == 1.9 for p in serie.puntos)

    septiembre = next(m for m in serie.marcas if m.x == "2026-09-30")
    assert septiembre.resultado == "coincide"
    assert septiembre.y == 1.9
    assert septiembre.cita and septiembre.cita.cita in cuerpo
    assert septiembre.cita.parrafo_id is not None


@CON_NOTAS
def test_lo_que_no_tiene_dato_oficial_queda_como_hueco_y_no_se_rellena(cliente):
    resultado = graficos_de(cuerpo_de("02"), enriquecimientos_de("02"), cliente)

    huecos = [m for g in por_tipo(resultado, "serie") for m in g.marcas if m.resultado == "sin_dato_oficial"]
    assert huecos, "la nota 02 trae una cifra de un mes que la serie todavía no publicó"
    serie = next(g for g in por_tipo(resultado, "serie") if huecos[0] in g.marcas)
    hueco_en_serie = [p for p in serie.puntos if p.x == huecos[0].x]
    assert hueco_en_serie and all(p.y is None for p in hueco_en_serie)


def test_una_cifra_con_dia_sobre_una_serie_mensual_se_marca_en_el_punto_real(cliente):
    resultado = graficos_de("La inflación del 15 de septiembre de 2026 fue de 1,9%.", None, cliente)

    serie = por_tipo(resultado, "serie")[0]
    marca = serie.marcas[0]
    assert marca.resultado == "coincide"
    assert marca.x == "2026-09-30"
    assert [p for p in serie.puntos if p.y is None] == []


def test_una_cifra_vieja_no_agranda_la_serie_mas_alla_del_tope(tmp_path):
    cliente_largo = ClienteSeries(modo="guardado", directorio_guardado=tmp_path)
    meses = [(f"{anio}-{mes:02d}-28", 2.0) for anio in range(2000, 2027) for mes in range(1, 13)]
    cliente_largo.guardar("bcra", "27", meses)

    resultado = graficos_de("La inflación de enero de 2012 fue de 2,0%.", None, cliente_largo)

    serie = por_tipo(resultado, "serie")[0]
    assert serie.marcas[0].x == "2012-01-28"
    assert len(serie.puntos) <= MAX_PUNTOS_SERIE + 1
    assert any(p.x == "2012-01-28" for p in serie.puntos)


def test_una_nota_sin_cifras_con_serie_no_inventa_graficos_de_serie(cliente):
    resultado = graficos_de("El jueves hubo una reunión en la Casa Rosada.", None, cliente)
    assert por_tipo(resultado, "serie") == []


def test_si_la_serie_no_responde_ni_hay_copia_el_informe_sigue_y_avisa(cliente, tmp_path):
    sin_copias = ClienteSeries(modo="guardado", directorio_guardado=tmp_path)
    informe = validar_nota(
        "La inflación de septiembre fue de 1,9%.", None, cliente_series=cliente, fecha_referencia=FECHA
    )
    resultado = armar_graficos(informe, None, sin_copias)
    assert por_tipo(resultado, "serie") == []
    assert any("bcra" in a for a in resultado.avisos)


# --- línea de tiempo -------------------------------------------------------------------------


def test_la_linea_de_tiempo_solo_lleva_eventos_que_la_nota_sostiene(cliente):
    enriquecimientos = {
        "timeline": {
            "events": [
                evento("2026-08", "month", "Inflación de agosto"),
                evento("2026-09", "month", "Inflación de septiembre"),
                evento("2026-10-15", "day", "Anuncio de medidas"),
                evento("2031-03", "month", "Evento que la nota nunca menciona"),
            ]
        }
    }
    resultado = graficos_de(CUERPO_TIEMPO, enriquecimientos, cliente)

    linea = por_tipo(resultado, "linea_tiempo")[0]
    assert [p.etiqueta for p in linea.puntos] == [
        "Inflación de agosto",
        "Inflación de septiembre",
        "Anuncio de medidas",
    ]
    assert all(p.cita and p.cita.cita in CUERPO_TIEMPO for p in linea.puntos)
    assert any("sin cita" in a and "2031-03" in a for a in linea.avisos)


def test_un_evento_no_se_grafica_con_mas_precision_de_la_que_la_nota_respalda(cliente):
    enriquecimientos = {
        "timeline": {
            "events": [
                evento("2026-08", "month", "Inflación de agosto"),
                evento("2026-09", "month", "Inflación de septiembre"),
                evento("2026-10-15", "day", "Anuncio de medidas"),
                evento("2026-10-20", "day", "Día que la nota no dice"),
                {"date": "2026-05-05", "title": "Evento sin precisión", "description": "x"},
            ]
        }
    }
    resultado = graficos_de(CUERPO_TIEMPO, enriquecimientos, cliente)

    linea = por_tipo(resultado, "linea_tiempo")[0]
    fechas = {p.etiqueta: p.x for p in linea.puntos}
    assert "Día que la nota no dice" not in fechas
    assert fechas["Evento sin precisión"] == "2026"
    assert fechas["Anuncio de medidas"] == "2026-10-15"


def test_menos_de_tres_eventos_no_arman_una_linea_de_tiempo(cliente):
    enriquecimientos = {
        "timeline": {
            "events": [evento("2026-08", "month", "Agosto"), evento("2026-09", "month", "Septiembre")]
        }
    }
    resultado = graficos_de(CUERPO_TIEMPO, enriquecimientos, cliente)
    assert por_tipo(resultado, "linea_tiempo") == []
    assert any("línea de tiempo" in a for a in resultado.avisos)


# --- ranking de entidades --------------------------------------------------------------------


def test_el_ranking_cuenta_las_menciones_en_codigo_y_no_las_que_dice_el_modelo(cliente):
    enriquecimientos = {
        "entities": {
            "nodes": [
                nodo("Milei", menciones=50),
                nodo("INDEC", menciones=1),
                nodo("BCRA"),
                nodo("Radio Rivadavia"),
                nodo("Fantasma", menciones=99),
            ],
            "edges": [],
        }
    }
    resultado = graficos_de(CUERPO_ENTIDADES, enriquecimientos, cliente)

    ranking = por_tipo(resultado, "ranking")[0]
    valores = {p.etiqueta: p.y for p in ranking.puntos}
    assert valores == {"Milei": 3, "INDEC": 3, "Radio Rivadavia": 1, "BCRA": 1}
    assert [p.etiqueta for p in ranking.puntos][:2] == ["Milei", "INDEC"]
    assert "Fantasma" not in valores
    assert all(p.cita and p.cita.cita in CUERPO_ENTIDADES for p in ranking.puntos)


def test_un_nombre_parcial_se_cuenta_con_la_forma_que_figura_en_la_nota(cliente):
    enriquecimientos = {
        "entities": {"nodes": [nodo("Javier Milei"), nodo("INDEC"), nodo("BCRA")], "edges": []}
    }
    cuerpo = "Milei habló. Milei volvió a hablar y Milei cerró. El INDEC y el BCRA no dijeron nada."
    resultado = graficos_de(cuerpo, enriquecimientos, cliente)

    ranking = por_tipo(resultado, "ranking")[0]
    milei = next(p for p in ranking.puntos if p.etiqueta == "Javier Milei")
    assert milei.y == 3
    assert any("Milei" in a for a in milei.alertas)


def test_con_menos_de_tres_entidades_verificadas_no_hay_ranking(cliente):
    enriquecimientos = {"entities": {"nodes": [nodo("Milei"), nodo("INDEC"), nodo("Fantasma")], "edges": []}}
    resultado = graficos_de(CUERPO_ENTIDADES, enriquecimientos, cliente)
    assert por_tipo(resultado, "ranking") == []


# --- contextos horizontales ------------------------------------------------------------------


@CON_NOTAS
def test_una_nota_de_inflacion_trae_el_contexto_de_poder_adquisitivo_primero(cliente):
    resultado = graficos_de(cuerpo_de("01"), enriquecimientos_de("01"), cliente)

    assert [c.id for c in resultado.contextos][:2] == ["poder_adquisitivo", "cobertura_canasta"]
    assert resultado.contextos[0].motivos
    assert all(f.enlace.startswith("https://") for c in resultado.contextos for f in c.fuentes)


def test_una_nota_de_futbol_no_trae_contextos(cliente):
    resultado = graficos_de("Boca recibe a River por la fecha 15 del Clausura.", None, cliente)
    assert resultado.contextos == []


# --- servicio HTTP ---------------------------------------------------------------------------


@CON_NOTAS
def test_la_ruta_graficos_devuelve_la_serie_de_la_nota_01():
    http = TestClient(crear_app(ClienteSeries(modo="guardado")))
    respuesta = http.post(
        "/graficos",
        json={
            "cuerpo": cuerpo_de("01"),
            "enriquecimientos": enriquecimientos_de("01"),
            "fecha_referencia": "2026-10-31",
        },
    )
    assert respuesta.status_code == 200
    graficos = respuesta.json()["graficos"]
    assert "serie-bcra-27" in [g["id"] for g in graficos]
