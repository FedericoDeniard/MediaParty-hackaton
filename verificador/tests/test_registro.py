"""Registro de verificadores y snapshot de no regresión."""

import json
import re
from pathlib import Path

import pytest

from verificador import verificacion
from verificador.verificacion import (
    VERIFICADORES,
    VERSION_REGLAS,
    ItemVerificacion,
    verificar_enriquecimientos,
    verificador_de,
)

CUERPO = "Juan Pérez dijo que la inflación fue de 1,9% en septiembre."

RAIZ = Path(__file__).resolve().parents[2]
SALIDAS = RAIZ / "verificador" / "eval" / "salidas"
NOTAS = RAIZ / "corpus" / "notas" / "md"
SNAPSHOT = Path(__file__).parent / "fixtures" / "snapshot_verificacion.json"


@pytest.fixture
def registro_limpio():
    antes = dict(VERIFICADORES)
    yield
    VERIFICADORES.clear()
    VERIFICADORES.update(antes)


def test_nodos_base_estan_registrados():
    assert {"claims", "entities", "timeline", "editorial"} <= set(VERIFICADORES)


def test_nodo_desconocido_no_rompe_y_es_alerta_suave():
    inf = verificar_enriquecimientos(CUERPO, {"inventado": {"x": 1}})
    assert inf.resumen == {"nodo_sin_verificador": 1}
    assert inf.hay_bloqueos is False
    assert inf.items[0].nodo == "inventado"
    assert [a.gravedad for a in inf.items[0].alertas] == ["suave"]
    assert "inventado" not in inf.nodos_verificados


def test_verificador_que_falla_no_rompe_al_resto(registro_limpio):
    @verificador_de("roto")
    def _roto(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
        raise ValueError("boom")

    inf = verificar_enriquecimientos(CUERPO, {
        "roto": {}, "editorial": {"sources_cited": ["Juan Pérez"]},
    })
    estados = {i.nodo: i.estado for i in inf.items}
    assert estados["roto"] == "error_verificador"
    assert estados["editorial.sources_cited"] == "ok"
    assert inf.hay_bloqueos is False
    error = next(i for i in inf.items if i.nodo == "roto")
    assert "ValueError" in error.alertas[0].detalle
    assert inf.nodos_verificados == ["editorial"]


def test_nodo_propio_registrado_se_usa(registro_limpio):
    @verificador_de("temas")
    def _temas(cuerpo: str, datos: dict) -> list[ItemVerificacion]:
        return [ItemVerificacion(nodo="temas", indice=i, campo="tema", estado="ok")
                for i, _ in enumerate(datos["temas"])]

    inf = verificar_enriquecimientos(CUERPO, {"temas": {"temas": ["a", "b"]}})
    assert inf.resumen == {"ok": 2}
    assert inf.nodos_verificados == ["temas"]


def test_informe_incluye_version_y_nodos():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": []}, "timeline": {"events": []}})
    assert inf.version_reglas == VERSION_REGLAS
    assert inf.nodos_verificados == ["claims", "timeline"]


def _cuerpo_de(nn: str) -> str:
    nota = next(NOTAS.glob(f"{nn}-*.md"))
    return "\n".join(nota.read_text(encoding="utf-8").splitlines()[1:])


@pytest.mark.skipif(not SALIDAS.exists() or not NOTAS.exists(), reason="no hay salidas reales ni corpus")
def test_snapshot_sin_regresion():
    por_nota: dict[str, dict] = {}
    for ruta in sorted(SALIDAS.glob("*-*.json")):
        m = re.fullmatch(r"[a-z]+-(\d\d)", ruta.stem)
        if m:
            d = json.loads(ruta.read_text(encoding="utf-8"))
            por_nota.setdefault(m.group(1), {})[d["nodo"]] = d["datos"]
    obtenido = {}
    for nn, enr in sorted(por_nota.items()):
        inf = verificacion.verificar_enriquecimientos(_cuerpo_de(nn), enr)
        obtenido[nn] = {"estados": dict(sorted(inf.resumen.items())), "hay_bloqueos": inf.hay_bloqueos}
    esperado = json.loads(SNAPSHOT.read_text(encoding="utf-8"))
    assert obtenido == esperado
