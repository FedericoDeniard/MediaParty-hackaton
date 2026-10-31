import json
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from verificador.api import crear_app
from verificador.series import ClienteSeries
from verificador.validar import catalogo_publico

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
FIXTURES = Path(__file__).parent / "fixtures"


@pytest.fixture
def cliente_http():
    return TestClient(crear_app(ClienteSeries(modo="guardado")))


def test_salud_informa_version_y_modo(cliente_http):
    cuerpo = cliente_http.get("/salud").json()
    assert cuerpo["estado"] == "ok"
    assert cuerpo["modo_series"] == "guardado"
    assert cuerpo["indicadores"] == len(catalogo_publico())


def test_catalogo_lista_indicadores_y_fuentes(cliente_http):
    catalogo = cliente_http.get("/catalogo").json()
    assert {e["fuente"] for e in catalogo} >= {"bcra", "bancomundial"}


@pytest.mark.skipif(not NOTAS.exists(), reason="no hay notas en corpus/notas/md")
def test_validar_devuelve_la_tarjeta_de_septiembre(cliente_http):
    ruta = next(NOTAS.glob("01-*.md"))
    cuerpo = "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()
    enriquecimientos = json.loads((FIXTURES / "enriquecimientos-01.json").read_text(encoding="utf-8"))
    respuesta = cliente_http.post("/validar", json={"cuerpo": cuerpo, "enriquecimientos": enriquecimientos})
    assert respuesta.status_code == 200
    tarjetas = respuesta.json()["tarjetas"]
    assert any(t["tarjeta"]["resultado"] == "coincide" and "1,9%" in t["cita"] for t in tarjetas)


@pytest.mark.parametrize("cuerpo", ["", None])
def test_validar_sin_cuerpo_da_422(cliente_http, cuerpo):
    assert cliente_http.post("/validar", json={"cuerpo": cuerpo}).status_code == 422
