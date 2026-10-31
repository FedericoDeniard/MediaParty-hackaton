"""Revisa que las notas de corpus/notas/ esten limpias y consistentes.

Controla, nota por nota: codificacion, titulo, largo, restos de pagina (menus,
suscripcion, redes, enlaces, creditos), parrafos repetidos y que el .md y el
.txt tengan el mismo texto. Informa cada hallazgo con un fragmento corto.

Uso:
    python scripts/validar_notas.py
Termina con codigo 1 si hay hallazgos graves.
"""
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
MD = RAIZ / "corpus" / "notas" / "md"
TXT = RAIZ / "corpus" / "notas" / "txt"
MIN_PARRAFOS = 3
MIN_CARACTERES = 400
MAX_TITULO = 200
FRAGMENTO = 70

RUIDO = {
    "suscripcion": r"suscribite|suscribirse|suscripci[oó]n|hacete socio",
    "compartir": r"\bcompartir\b|compart[ií] (esta|la) nota",
    "lectura relacionada": r"le[eé] tambi[eé]n|mir[aá] tambi[eé]n|te puede interesar|notas relacionadas",
    "seguir en redes": r"seguinos|segu[ií] a |newsletter|canal de whatsapp",
    "publicidad": r"\bpublicidad\b|contenido patrocinado",
    "enlace": r"https?://|www\.",
    "red social": r"pic\.twitter|@\w{3,}|#\w{3,}",
    "tiempo de lectura": r"minutos? de lectura",
    "credito": r"\bfoto:|\bimagen:|cr[eé]dito:|\bfuente:|\bepa\b/|\bafp\b/|\breuters\b/",
    "legal": r"todos los derechos|copyright|©|pol[ií]tica de privacidad|cookies",
    "sesion": r"inici[aá] sesi[oó]n|registrate|ingres[aá] a tu cuenta",
    "leer mas": r"leer m[aá]s|ver m[aá]s|seguir leyendo",
    "hora relativa": r"\bhace \d+ (minutos?|horas?)\b",
    "html": r"<[a-z/][^>]*>|&nbsp;|&amp;",
}
GRAVES = {"codificacion", "titulo", "largo", "paridad", "html", "enlace", "suscripcion"}
MOJIBAKE = re.compile(r"Ã.|â€|Â\s|�")
DOBLE_ESPACIO = re.compile(r"\S {2,}\S")
PUNTUACION_SUELTA = re.compile(r"\s[,.;:]\s|,\s*,|\(\s*\)|\[\s*\]")


def fragmento(texto, patron=None):
    if patron:
        m = re.search(patron, texto, re.IGNORECASE)
        inicio = max(0, m.start() - 20) if m else 0
        return texto[inicio : inicio + FRAGMENTO]
    return texto[:FRAGMENTO]


def revisar(ruta_md):
    texto = ruta_md.read_text(encoding="utf-8")
    lineas = [l for l in texto.splitlines() if l.strip()]
    hallazgos = []

    def anotar(tipo, detalle):
        hallazgos.append((tipo, detalle))

    if MOJIBAKE.search(texto):
        anotar("codificacion", fragmento(texto, MOJIBAKE.pattern))
    if not lineas or not lineas[0].startswith("# "):
        anotar("titulo", "falta el titulo con '# '")
    elif len(lineas[0]) > MAX_TITULO or re.search(r"\s[-|–]\s*[A-ZÁÉÍÓÚ][\w .]+$", lineas[0]):
        anotar("titulo", f"titulo dudoso: {lineas[0][:FRAGMENTO]}")

    cuerpo = lineas[1:]
    if len(cuerpo) < MIN_PARRAFOS or sum(map(len, cuerpo)) < MIN_CARACTERES:
        anotar("largo", f"{len(cuerpo)} parrafos, {sum(map(len, cuerpo))} caracteres")
    for parrafo in {p for p in cuerpo if cuerpo.count(p) > 1}:
        anotar("repetido", fragmento(parrafo))

    for tipo, patron in RUIDO.items():
        for parrafo in cuerpo:
            if re.search(patron, parrafo, re.IGNORECASE):
                anotar(tipo, fragmento(parrafo, patron))
    for parrafo in cuerpo:
        if DOBLE_ESPACIO.search(parrafo):
            anotar("espacios", fragmento(parrafo, DOBLE_ESPACIO.pattern))
        if PUNTUACION_SUELTA.search(parrafo):
            anotar("puntuacion", fragmento(parrafo, PUNTUACION_SUELTA.pattern))

    ruta_txt = TXT / f"{ruta_md.stem}.txt"
    if not ruta_txt.exists():
        anotar("paridad", "falta el .txt")
    elif ruta_txt.read_text(encoding="utf-8").split("\n", 1)[1] != texto.split("\n", 1)[1]:
        anotar("paridad", "el texto del .txt difiere del .md")
    return hallazgos, cuerpo


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    archivos = sorted(MD.glob("*.md"))
    if not archivos:
        sys.exit(f"No hay notas en {MD}. Corré scripts/compilar_notas.py.")
    graves = 0
    for ruta in archivos:
        hallazgos, cuerpo = revisar(ruta)
        estado = "ok" if not hallazgos else f"{len(hallazgos)} hallazgos"
        print(f"{ruta.name[:2]}  párrafos={len(cuerpo):3}  {estado}")
        for tipo, detalle in hallazgos:
            marca = "GRAVE" if tipo in GRAVES else "revisar"
            graves += tipo in GRAVES
            print(f"      {marca:7} {tipo}: {detalle!r}")
        if cuerpo:
            print(f"      primera: {cuerpo[0][:FRAGMENTO]!r}")
            print(f"      última:  {cuerpo[-1][:FRAGMENTO]!r}")
    print(f"\n{len(archivos)} notas, {graves} hallazgos graves.")
    sys.exit(1 if graves else 0)


if __name__ == "__main__":
    main()
