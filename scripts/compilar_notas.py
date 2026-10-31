"""Limpia las notas de corpus/bruto/ y las deja juntas y una por una.

Lee corpus/bruto/ejemplo-*.md (las baja scripts/bajar_notas.py), saca el ruido que
queda y escribe:
  - corpus/bruto/notas-limpias.md y .txt: todas juntas, cada nota con su fuente.
  - corpus/notas/md/NN-tema.md y corpus/notas/txt/NN-tema.txt: un archivo por
    nota, solo titulo y parrafos, como la entregaria una periodista.
  - corpus/notas/_indice.md: las fuentes de cada nota (este si va al repo).
Los textos quedan ignorados por git; ver corpus/notas/README.txt.
La carpeta no se sube a git.

Uso:
    python scripts/compilar_notas.py
"""
import json
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
CARPETA = RAIZ / "corpus" / "bruto"
DESTINO = RAIZ / "corpus" / "notas"
FUENTES = CARPETA / "_fuentes.json"
TOTAL_ESPERADO = 19
EXCLUIDAS = {18}  # no se pudo bajar y se decidió dejarla afuera
ANCHO_SEPARADOR = 72

LINEA_RUIDO = re.compile(
    r"^-?\s*\d+\s+minutos?\s+de\s+lectura\W*$"
    r"|^—\s.+\(@\w+\).*\d{4}\s*$"
    r"|pic\.twitter\.com",
    re.IGNORECASE,
)
NUMERO_EN_NOMBRE = re.compile(r"^ejemplo-(\d+)-")
FIN_DE_FRASE = tuple('.?!:;"”»)')


def limpiar_lineas(lineas):
    """Saca el ruido y une los parrafos cortados a mitad de palabra."""
    sin_ruido = [l for l in lineas if not LINEA_RUIDO.search(l)]
    unidas = []
    for linea in sin_ruido:
        if unidas and linea[0].islower() and not unidas[-1].endswith(FIN_DE_FRASE):
            unidas[-1] += linea
        else:
            unidas.append(linea)
    return [re.sub(r",\s*,", ",", l) for l in unidas]


def leer_nota(ruta):
    lineas = [l.strip() for l in ruta.read_text(encoding="utf-8").splitlines() if l.strip()]
    titulo = lineas[0].lstrip("# ").strip()
    cuerpo = limpiar_lineas(lineas[1:])
    return titulo, cuerpo, len(lineas) - 1 - len(cuerpo)


def cargar_fuentes():
    return json.loads(FUENTES.read_text(encoding="utf-8")) if FUENTES.exists() else {}


def armar_notas():
    fuentes = cargar_fuentes()
    notas = []
    for ruta in sorted(CARPETA.glob("ejemplo-*.md")):
        numero = int(NUMERO_EN_NOMBRE.match(ruta.name).group(1))
        titulo, cuerpo, quitadas = leer_nota(ruta)
        fuente = fuentes.get(ruta.name, {})
        notas.append(
            {
                "base": ruta.stem.removeprefix("ejemplo-"),
                "numero": numero,
                "titulo": titulo,
                "cuerpo": cuerpo,
                "quitadas": quitadas,
                "medio": fuente.get("medio", "sin dato"),
                "fecha": fuente.get("fecha_nota", "sin dato"),
                "url": fuente.get("url", "sin dato"),
            }
        )
    return notas


def pendientes(notas):
    presentes = {n["numero"] for n in notas}
    return [n for n in range(1, TOTAL_ESPERADO + 1) if n not in presentes | EXCLUIDAS]


def como_markdown(notas):
    faltan = pendientes(notas)
    salida = [
        "# Notas de prueba (Media Party 2026)",
        "",
        "Uso interno para probar el backend. Los textos son de cada medio y se muestran "
        "con su fuente. No se republican.",
        "",
        f"Notas incluidas: {len(notas)}. Pendientes de pegar a mano: {faltan or 'ninguna'}.",
        "",
        "## Índice",
        "",
    ]
    salida += [f"{n['numero']}. {n['titulo']} ({n['medio']}, {n['fecha']})" for n in notas]
    for n in notas:
        salida += ["", "---", "", f"## {n['numero']:02d}. {n['titulo']}", ""]
        salida += [f"Fuente: {n['medio']}, {n['fecha']}. {n['url']}", ""]
        salida += [f"{p}\n" for p in n["cuerpo"]]
    return "\n".join(salida).rstrip() + "\n"


def como_texto(notas):
    faltan = pendientes(notas)
    linea = "=" * ANCHO_SEPARADOR
    salida = [
        "NOTAS DE PRUEBA (MEDIA PARTY 2026)",
        "Uso interno para probar el backend. Los textos son de cada medio y se",
        "muestran con su fuente. No se republican.",
        "",
        f"Notas incluidas: {len(notas)}. Pendientes de pegar a mano: {faltan or 'ninguna'}.",
        "",
        "INDICE",
    ]
    salida += [f"{n['numero']}. {n['titulo']} ({n['medio']}, {n['fecha']})" for n in notas]
    for n in notas:
        salida += ["", linea, f"{n['numero']:02d}. {n['titulo']}", linea, ""]
        salida += [f"Fuente: {n['medio']}, {n['fecha']}. {n['url']}", ""]
        salida += [f"{p}\n" for p in n["cuerpo"]]
    return "\n".join(salida).rstrip() + "\n"


def escribir_por_nota(notas):
    """Un .md y un .txt por nota, sin fuente dentro: el backend leeria la fuente como texto."""
    destino = DESTINO
    (destino / "md").mkdir(parents=True, exist_ok=True)
    (destino / "txt").mkdir(parents=True, exist_ok=True)
    for n in notas:
        parrafos = "\n\n".join(n["cuerpo"])
        (destino / "md" / f"{n['base']}.md").write_text(
            f"# {n['titulo']}\n\n{parrafos}\n", encoding="utf-8"
        )
        (destino / "txt" / f"{n['base']}.txt").write_text(
            f"{n['titulo']}\n\n{parrafos}\n", encoding="utf-8"
        )
    indice = [
        "# Fuentes de las notas de prueba",
        "",
        "Cada nota pertenece al medio que la publicó. Acá solo figuran el título, el medio,",
        "la fecha y el enlace. Los textos no están en el repositorio: ver README.txt.",
        "",
        "| Archivo | Medio | Fecha | Título | Párrafos | Enlace |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    indice += [
        f"| {n['base']} | {n['medio']} | {n['fecha']} | {n['titulo']} | "
        f"{len(n['cuerpo'])} | {n['url']} |"
        for n in notas
    ]
    (destino / "_indice.md").write_text("\n".join(indice) + "\n", encoding="utf-8")
    return destino


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    notas = armar_notas()
    if not notas:
        sys.exit(f"No hay notas en {CARPETA}. Corré primero scripts/bajar_notas.py.")
    (CARPETA / "notas-limpias.md").write_text(como_markdown(notas), encoding="utf-8")
    (CARPETA / "notas-limpias.txt").write_text(como_texto(notas), encoding="utf-8")
    destino = escribir_por_nota(notas)
    for n in notas:
        print(f"{n['numero']:>2}  párrafos={len(n['cuerpo']):3}  líneas quitadas={n['quitadas']}")
    print(f"\n{len(notas)} notas. Pendientes: {pendientes(notas) or 'ninguna'}.")
    print(f"Juntas: {CARPETA / 'notas-limpias.md'} y .txt")
    print(f"Una por nota: {destino}")


if __name__ == "__main__":
    main()
