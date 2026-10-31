"""Compara las afirmaciones del nodo `claims` con las claves de corpus/claves/.

Mide tres cosas por nota, sin llamar a ningun modelo:
  - cobertura: cuantas cifras anotadas aparecen mencionadas en alguna afirmacion;
  - cifras inventadas: numeros de las afirmaciones que NO estan en la nota;
  - afirmaciones sin ubicar: textos que no aparecen literalmente en la nota (parafrasis).

Uso:
    python verificador/eval/puntuar_claims.py
"""
import json
import re
import sys
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
CLAVES = RAIZ / "corpus" / "claves"
SALIDAS = Path(__file__).resolve().parent / "salidas"

NUMERO = re.compile(r"\d[\d.,]*\d|\d")
MILES = re.compile(r"\d{1,3}(?:\.\d{3})+")


def a_numero(token: str) -> float | None:
    """Interpreta un numero en formato argentino: 1.537,35 / 50.580 / 1,9."""
    token = token.strip(".,")
    try:
        if "," in token:
            return round(float(token.replace(".", "").replace(",", ".")), 6)
        if MILES.fullmatch(token):
            return float(token.replace(".", ""))
        return round(float(token), 6)
    except ValueError:
        return None


def numeros(texto: str) -> set[float]:
    valores = {a_numero(t) for t in NUMERO.findall(texto)}
    return {v for v in valores if v is not None}


def es_anio(valor: float) -> bool:
    return float(valor).is_integer() and 1990 <= valor <= 2100


def plano(texto: str) -> str:
    """Minusculas, sin tildes y con espacios simples, para comparar texto."""
    sin_tildes = unicodedata.normalize("NFKD", texto).encode("ascii", "ignore").decode()
    return re.sub(r"\s+", " ", sin_tildes.lower()).strip()


def cuerpo_de(nota: str) -> str:
    ruta = next(NOTAS.glob(f"{nota}-*.md"))
    return "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:])


def puntuar(nota: str) -> dict | None:
    salida = SALIDAS / f"claims-{nota}.json"
    if not salida.exists():
        return None
    registro = json.loads(salida.read_text(encoding="utf-8"))
    if registro["error"]:
        return {"nota": nota, "error": registro["error"]}
    afirmaciones = [c["text"] for c in registro["datos"]["claims"]]
    cuerpo = cuerpo_de(nota)
    en_nota = numeros(cuerpo)
    en_claims = set().union(*(numeros(a) for a in afirmaciones)) if afirmaciones else set()

    clave = json.loads((CLAVES / f"{nota}.json").read_text(encoding="utf-8"))
    cifras = [c for c in clave["cifras"] if numeros(c["texto"])]
    cubiertas = [c for c in cifras if numeros(c["texto"]) <= en_claims]
    inventadas = sorted(v for v in en_claims - en_nota if not es_anio(v))
    plano_cuerpo = plano(cuerpo)
    sin_ubicar = [a for a in afirmaciones if plano(a) not in plano_cuerpo]
    return {
        "nota": nota,
        "modelo": registro["modelo"],
        "segundos": registro["segundos"],
        "afirmaciones": len(afirmaciones),
        "cifras_anotadas": len(cifras),
        "cifras_cubiertas": len(cubiertas),
        "no_cubiertas": [c["texto"] for c in cifras if c not in cubiertas],
        "numeros_inventados": inventadas,
        "sin_ubicar": len(sin_ubicar),
        "ejemplos_sin_ubicar": sin_ubicar[:2],
    }


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    filas = [f for n in sorted({p.name[:2] for p in CLAVES.glob("*.json")}) if (f := puntuar(n))]
    if not filas:
        sys.exit("No hay salidas en verificador/eval/salidas/. Corre antes correr_nodos.py.")
    print(f"{'nota':<5}{'afirm':>6}{'cifras':>7}{'cubiertas':>10}{'inventados':>11}{'sin ubicar':>11}{'seg':>6}")
    total = {"afirm": 0, "cifras": 0, "cub": 0, "inv": 0, "sin": 0}
    for f in filas:
        if "error" in f:
            print(f"{f['nota']:<5}ERROR {f['error'][:70]}")
            continue
        print(f"{f['nota']:<5}{f['afirmaciones']:>6}{f['cifras_anotadas']:>7}{f['cifras_cubiertas']:>10}"
              f"{len(f['numeros_inventados']):>11}{f['sin_ubicar']:>11}{f['segundos']:>6}")
        total["afirm"] += f["afirmaciones"]
        total["cifras"] += f["cifras_anotadas"]
        total["cub"] += f["cifras_cubiertas"]
        total["inv"] += len(f["numeros_inventados"])
        total["sin"] += f["sin_ubicar"]
    print(f"\nTOTAL afirmaciones={total['afirm']}  cifras anotadas={total['cifras']}  "
          f"cubiertas={total['cub']} ({100 * total['cub'] / max(total['cifras'], 1):.0f}%)  "
          f"notas con numeros inventados={sum(1 for f in filas if f.get('numeros_inventados'))}  "
          f"afirmaciones sin ubicar literal={total['sin']} ({100 * total['sin'] / max(total['afirm'], 1):.0f}%)")
    (SALIDAS / "resumen-claims.json").write_text(json.dumps(filas, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
