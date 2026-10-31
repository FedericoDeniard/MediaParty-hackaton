import json
from pathlib import Path

import pytest

from verificador.pasaje import localizar_pasaje
from verificador.verificacion import verificar_enriquecimientos

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
CLAVES = RAIZ / "corpus" / "claves"
SALIDAS = RAIZ / "verificador" / "eval" / "salidas"

CUERPO = (
    "La inflación de septiembre fue de 1,9%, según el INDEC. Fue un salto frente al 1,7% de agosto.\n\n"
    "El Banco Central compró reservas por US$ 100 millones. El dólar mayorista cerró a $1536."
)


def test_localiza_oracion_por_cifras_y_palabras():
    p = localizar_pasaje(CUERPO, "El INDEC informó que la inflación de septiembre llegó a 1,9 por ciento")
    assert p and p.parrafo_id == "p1" and p.cita == CUERPO[p.inicio:p.fin]
    assert p.cita.startswith("La inflación de septiembre") and "cifras" in p.criterio


def test_localiza_otro_parrafo():
    p = localizar_pasaje(CUERPO, "El Central adquirió reservas por 100 millones de dólares")
    assert p and p.parrafo_id == "p2" and "US$ 100 millones" in p.cita


def test_tema_ajeno_devuelve_none():
    assert localizar_pasaje(CUERPO, "El equipo de fútbol ganó el campeonato de la liga") is None
    assert localizar_pasaje(CUERPO, "") is None


def test_dos_oraciones_contiguas():
    p = localizar_pasaje(CUERPO, "La inflación de septiembre fue 1,9%, un salto frente al 1,7% de agosto según el INDEC")
    assert p and p.cita.count(".") >= 2


def test_integracion_parafraseada_recibe_pasaje():
    inf = verificar_enriquecimientos(CUERPO, {"claims": {"claims": [
        {"text": "En septiembre el IPC marcó 1,9 por ciento según el INDEC"},
        {"text": "Los jugadores de fútbol festejaron el campeonato"}]}})
    a, b = inf.items
    assert a.estado == "parafraseada" and a.cita_copiada and a.criterio == "pasaje_mas_cercano"
    assert a.ubicacion.parrafo_id == "p1"
    assert b.estado == "parafraseada" and b.ubicacion is None
    assert any(x.codigo == "sin_pasaje" and x.gravedad == "suave" for x in b.alertas)
    assert not inf.hay_bloqueos


def _pares():
    if not (NOTAS.is_dir() and CLAVES.is_dir()):
        return []
    salida = []
    for clave in sorted(CLAVES.glob("*.json")):
        datos = json.loads(clave.read_text(encoding="utf-8"))
        nota = next(iter(sorted(NOTAS.glob(f"{clave.stem}-*.md"))), None)
        if nota:
            salida.append((nota, datos))
    return salida


@pytest.mark.skipif(not _pares(), reason="no hay corpus")
def test_cifras_anotadas_caen_en_su_parrafo():
    total = aciertos = 0
    fallos = []
    for nota, datos in _pares():
        cuerpo = nota.read_text(encoding="utf-8").split("\n", 1)[1]
        for c in datos.get("cifras", []):
            total += 1
            p = localizar_pasaje(cuerpo, f"{c['indicador']}: {c['texto']}")
            if p is not None and p.parrafo_id == f"p{c['parrafo']}":
                aciertos += 1
            else:
                fallos.append((nota.name[:2], c["texto"], p.parrafo_id if p else None, c["parrafo"]))
    porcentaje = 100 * aciertos / total
    print(f"\nCIFRAS EN SU PARRAFO: {aciertos}/{total} = {porcentaje:.1f}%")
    for f in fallos[:15]:
        print("  fallo", f)
    assert porcentaje >= 90, f"{porcentaje:.1f}%"


@pytest.mark.skipif(not (SALIDAS.is_dir() and _pares()), reason="no hay salidas del modelo")
def test_informe_salidas_reales():
    total = con_pasaje = cerca = 0
    for archivo in sorted(SALIDAS.glob("claims-*.json")):
        salida = json.loads(archivo.read_text(encoding="utf-8"))
        nota = next(iter(sorted(NOTAS.glob(f"{archivo.stem.split('-')[1]}-*.md"))), None)
        claims = ((salida.get("datos") or {}).get("claims")) or []
        if nota is None:
            continue
        cuerpo = nota.read_text(encoding="utf-8").split("\n", 1)[1]
        for c in claims:
            total += 1
            p = localizar_pasaje(cuerpo, c["text"])
            if p is None:
                continue
            con_pasaje += 1
            n = int(p.parrafo_id[1:])
            if any(abs(n - (c["paragraph_index"] + base)) <= 1 for base in (0, 1)):
                cerca += 1
    print(f"\nSALIDAS REALES: {total} afirmaciones; con pasaje {100*con_pasaje/total:.1f}%; "
          f"dentro de +-1 del paragraph_index {100*cerca/total:.1f}% ({100*cerca/max(con_pasaje,1):.1f}% de las con pasaje)")
    assert total > 0
