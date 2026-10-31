"""De las afirmaciones del nodo `claims` a tarjetas con la serie oficial, todo sin red.

Para cada afirmacion intenta `desde_texto` (heuristica), la cruza con las copias guardadas
y busca en la nota el pasaje que la sostiene. Muestra que tarjetas saldrian en la demo.

Uso (despues de correr_nodos.py):
    uv run --directory verificador python eval/cruzar_salidas.py [--notas 01 02]
"""
import argparse
import json
import sys
from collections import Counter
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
SALIDAS = Path(__file__).resolve().parent / "salidas"

sys.path.insert(0, str(RAIZ / "verificador" / "src"))
from verificador.pasaje import localizar_pasaje  # noqa: E402
from verificador.series import ClienteSeries, cruzar, desde_texto  # noqa: E402


def cuerpo_de(nota: str) -> str:
    ruta = next(NOTAS.glob(f"{nota}-*.md"))
    return "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser()
    parser.add_argument("--notas", nargs="+")
    args = parser.parse_args()

    cliente = ClienteSeries(modo="guardado")
    total = Counter()
    for ruta in sorted(SALIDAS.glob("claims-*.json")):
        registro = json.loads(ruta.read_text(encoding="utf-8"))
        nota = registro["nota"]
        if args.notas and nota not in args.notas:
            continue
        cuerpo = cuerpo_de(nota)
        tarjetas = []
        for claim in registro["datos"]["claims"]:
            afirmacion = desde_texto(claim["text"], anio_defecto=2026)
            if afirmacion is None:
                continue
            tarjeta = cruzar(afirmacion, cliente)
            pasaje = localizar_pasaje(cuerpo, claim["text"])
            tarjetas.append((claim["text"], tarjeta, pasaje))
        if not tarjetas:
            continue
        print(f"\n=== nota {nota}: {len(tarjetas)} afirmaciones con cifra reconocible ===")
        for texto, t, pasaje in tarjetas:
            total[t.resultado] += 1
            serie = f"{t.serie.valor} ({t.serie.fecha_dato})" if t.serie else "-"
            parrafo = pasaje.parrafo_id if pasaje else "sin pasaje"
            print(f"  {t.resultado:<17} dicho={t.dicho.valor} {t.dicho.unidad:<10} serie={serie:<26} {parrafo:<10} | {texto[:70]}")
            for aviso in t.advertencias[:1]:
                print(f"      aviso: {aviso[:110]}")
    print(f"\nTOTAL {dict(total)}")


if __name__ == "__main__":
    main()
