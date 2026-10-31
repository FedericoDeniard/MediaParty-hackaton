"""Pasa las salidas de los nodos por el verificador y cuenta el estado de cada item.

Uso (despues de correr_nodos.py):
    uv run --directory verificador python eval/verificar_salidas.py
"""
import json
import sys
from collections import Counter
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
NOTAS = RAIZ / "corpus" / "notas" / "md"
SALIDAS = Path(__file__).resolve().parent / "salidas"

sys.path.insert(0, str(RAIZ / "verificador" / "src"))
from verificador.verificacion import verificar_enriquecimientos  # noqa: E402


def cuerpo_de(nota: str) -> str:
    ruta = next(NOTAS.glob(f"{nota}-*.md"))
    return "\n".join(ruta.read_text(encoding="utf-8").splitlines()[1:]).strip()


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    por_nota: dict[str, dict[str, dict]] = {}
    for ruta in sorted(SALIDAS.glob("*-[0-9][0-9].json")):
        registro = json.loads(ruta.read_text(encoding="utf-8"))
        if registro["datos"]:
            por_nota.setdefault(registro["nota"], {})[registro["nodo"]] = registro["datos"]

    total, ejemplos = Counter(), []
    for nota, enriquecimientos in sorted(por_nota.items()):
        informe = verificar_enriquecimientos(cuerpo_de(nota), enriquecimientos)
        conteo = Counter(item.estado for item in informe.items)
        total.update(conteo)
        print(f"{nota}  bloqueos={'SI' if informe.hay_bloqueos else 'no':<3} {dict(conteo)}")
        ejemplos += [(nota, i) for i in informe.items if i.estado in {"no_respaldada", "evidencia_no_encontrada", "fuente_no_encontrada"}]
    print(f"\nTOTAL {dict(total)}")
    for nota, item in ejemplos[:8]:
        print(f"  nota {nota} {item.nodo}[{item.indice}] {item.estado}: {item.alertas}")


if __name__ == "__main__":
    main()
