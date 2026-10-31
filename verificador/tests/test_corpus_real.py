import json
from pathlib import Path

import pytest

from verificador.texto import partir_en_parrafos, ubicar

RAIZ = Path(__file__).resolve().parents[2] / "corpus"
NOTAS = RAIZ / "notas" / "md"
CLAVES = RAIZ / "claves"

pytestmark = pytest.mark.skipif(not (NOTAS.is_dir() and CLAVES.is_dir()), reason="no hay corpus")


def _pares():
    for clave in sorted(CLAVES.glob("*.json")):
        datos = json.loads(clave.read_text(encoding="utf-8"))
        nota = NOTAS / datos["archivo"] if (NOTAS / datos["archivo"]).exists() else None
        if nota is None:
            candidatas = sorted(NOTAS.glob(f"{clave.stem}-*.md"))
            nota = candidatas[0] if candidatas else None
        if nota is not None:
            yield pytest.param(nota, datos, id=clave.stem)


def _cuerpo(nota: Path) -> str:
    return nota.read_text(encoding="utf-8").split("\n", 1)[1]


@pytest.mark.parametrize("nota,datos", list(_pares()))
def test_cada_cifra_anotada_se_ubica(nota, datos):
    cuerpo = _cuerpo(nota)
    faltan = [c["texto"] for c in datos.get("cifras", []) if ubicar(cuerpo, c["texto"]) is None]
    assert faltan == []


@pytest.mark.parametrize("nota,datos", list(_pares()))
def test_parrafos_de_nota_real(nota, datos):
    cuerpo = _cuerpo(nota)
    ps = partir_en_parrafos(cuerpo)
    assert all(cuerpo[p.inicio:p.fin] == p.texto for p in ps)
    assert len(ps) == datos["parrafos_total"]
