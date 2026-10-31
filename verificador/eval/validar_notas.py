"""Valida notas del corpus con el modelo liviano proponiendo las cifras. Hace llamadas reales.

La clave se pasa por entorno, sin que el codigo lea archivos .env:
    cd verificador
    uv run --env-file ../backend/.env python eval/validar_notas.py 01 02 03 04
    uv run --env-file ../backend/.env python eval/validar_notas.py 01 --modelo claude-sonnet-5-5 --todas
"""
import argparse
import json
import sys
import time
from pathlib import Path

import anthropic

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
SALIDAS = Path(__file__).resolve().parent / "salidas"
INFORMES = SALIDAS / "informes"  # aparte de las salidas del grafo, que otros tests leen
sys.path.insert(0, str(RAIZ / "verificador" / "src"))
from verificador.validar import validar_nota  # noqa: E402


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser()
    parser.add_argument("notas", nargs="+")
    parser.add_argument("--modelo", default="claude-haiku-5-5")
    parser.add_argument("--todas", action="store_true", help="muestra tambien las tarjetas sin serie")
    args = parser.parse_args()

    cliente_llm = anthropic.Anthropic()
    INFORMES.mkdir(parents=True, exist_ok=True)
    for nota in args.notas:
        ruta = next(NOTAS.glob(f"{nota}-*.md"))
        cuerpo = "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()
        enr_ruta = SALIDAS / f"claims-{nota}.json"
        enriquecimientos = {"claims": json.loads(enr_ruta.read_text(encoding="utf-8"))["datos"]} if enr_ruta.exists() else None
        inicio = time.time()
        informe = validar_nota(cuerpo, enriquecimientos, usar_modelo=True, cliente_llm=cliente_llm, modelo=args.modelo)
        print(f"\n=== nota {nota} | {args.modelo} | {time.time() - inicio:.1f}s | {informe.resumen} | avisos={informe.avisos}")
        for t in informe.tarjetas:
            if t.destacada or args.todas:
                s = t.tarjeta.serie
                serie = f"{s.fuente}:{s.valor} ({s.fecha_dato})" if s else "-"
                print(f"  [{t.tarjeta.resultado:<16}] {t.origen:<10} {t.parrafo_id or 'sin pasaje':<10} dicho={t.tarjeta.dicho.valor} {t.tarjeta.dicho.periodo or '-':<10} serie={serie}")
                print(f"      {t.texto_afirmacion[:100]}")
        (INFORMES / f"validacion-{nota}.json").write_text(
            json.dumps(informe.model_dump(mode="json"), ensure_ascii=False, indent=1), encoding="utf-8"
        )


if __name__ == "__main__":
    main()
