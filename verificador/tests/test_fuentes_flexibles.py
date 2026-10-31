import json
from pathlib import Path

import pytest

from verificador.verificacion import verificar_enriquecimientos

RAIZ = Path(__file__).resolve().parents[2]
SALIDAS = RAIZ / "verificador" / "eval" / "salidas"
NOTAS = RAIZ / "corpus" / "notas" / "md"

CUERPO = (
    "El BCRA compró reservas, informó el INDEC. El operador Díaz Mayer, de ABC Mercado, dijo que "
    "el Tesoro Nacional seguirá comprando. Santiago Bausili habló del Fondo Monetario Internacional "
    "y de Lorenzo Sigaut.\n\nEl informe de Casa Rosada llegó tarde."
)


def _fuentes(*fuentes: str):
    inf = verificar_enriquecimientos(CUERPO, {"editorial": {"sources_cited": list(fuentes)}})
    return inf


def test_sigla_entre_parentesis_respalda_la_fuente():
    inf = _fuentes("Banco Central de la República Argentina (BCRA)")
    assert inf.items[0].estado == "ok" and inf.items[0].cita_copiada == "BCRA"


def test_entidad_principal_antes_de_la_coma():
    inf = _fuentes("Díaz Mayer, operador de ABC Mercado de Cambios")
    assert inf.items[0].estado == "ok" and not inf.hay_bloqueos


def test_todos_los_nombres_propios_respaldan():
    inf = _fuentes("Fondo Internacional Monetario")
    assert inf.items[0].estado == "ok"


def test_parcial_es_alerta_suave():
    inf = _fuentes("Francisco Lorenzo Sigaut Gravina")
    assert inf.items[0].estado == "fuente_parcial" and not inf.hay_bloqueos
    assert inf.items[0].alertas[0].gravedad == "suave"


def test_ninguna_coincidencia_es_grave():
    inf = _fuentes("Reuters", "Ministerio de Economía de Chile (MEC)")
    assert [i.estado for i in inf.items] == ["fuente_no_encontrada"] * 2 and inf.hay_bloqueos


def test_equivalencias_de_entidades():
    inf = _fuentes("Banco Central", "Instituto Nacional de Estadística y Censos", "Poder Ejecutivo")
    assert [i.estado for i in inf.items] == ["ok"] * 3


def test_nodos_de_entidades_con_alias_apellido_y_ausentes():
    inf = verificar_enriquecimientos(CUERPO, {"entities": {"nodes": [
        {"name": "Banco Central de la República Argentina"},
        {"name": "Bausili"},
        {"name": "Fondo Monetario"},
        {"name": "Mario Draghi"},
        {"name": "Francisco Díaz Mayer"}]}})
    assert [i.estado for i in inf.items] == ["ok", "ok", "ok", "nombre_no_encontrado", "nombre_parcial"]
    assert not inf.hay_bloqueos


def test_evidencia_ausente_sigue_siendo_grave():
    inf = verificar_enriquecimientos(CUERPO, {"entities": {"edges": [{"evidence": "frase inventada por el modelo"}]}})
    assert inf.items[0].estado == "evidencia_no_encontrada" and inf.hay_bloqueos


@pytest.mark.skipif(not (SALIDAS.is_dir() and NOTAS.is_dir()), reason="no hay salidas del modelo")
def test_regresion_fuentes_no_encontradas_bajan_de_57():
    no_encontradas = 0
    for archivo in sorted(SALIDAS.glob("editorial-*.json")):
        salida = json.loads(archivo.read_text(encoding="utf-8"))
        nota = next(iter(sorted(NOTAS.glob(f"{archivo.stem.split('-')[1]}-*.md"))), None)
        if nota is None or not salida.get("datos"):
            continue
        cuerpo = nota.read_text(encoding="utf-8").split("\n", 1)[1]
        inf = verificar_enriquecimientos(cuerpo, {"editorial": salida["datos"]})
        no_encontradas += sum(i.estado == "fuente_no_encontrada" for i in inf.items)
    assert no_encontradas < 15, no_encontradas
