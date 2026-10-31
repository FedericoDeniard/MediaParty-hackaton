"""Baja el texto limpio de las notas de prueba para usarlo solo en local.

Lee los enlaces de docs/corpus-prueba.md y guarda cada nota en corpus/bruto/
(carpeta ignorada por git: los textos son de cada medio y el repo es publico).
Respeta el robots.txt de cada sitio y no intenta esquivar bloqueos ni
suscripciones: si una nota no se puede bajar, se avisa y se pega a mano.

Uso:
    pip install trafilatura
    python scripts/bajar_notas.py --listar          # muestra que bajaria, sin bajar
    python scripts/bajar_notas.py                   # las cinco recomendadas
    python scripts/bajar_notas.py --notas 1 3 7     # las que elijas
    python scripts/bajar_notas.py --todas
"""
import argparse
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.request
import urllib.robotparser
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit

RAIZ = Path(__file__).resolve().parent.parent
INDICE = RAIZ / "docs" / "corpus-prueba.md"
SALIDA = RAIZ / "corpus" / "bruto"
RECOMENDADAS = [1, 7, 10, 11, 19]
USER_AGENT = "MediaPartyHackathon-pruebas-internas/0.1 (uso local, sin republicar)"
PAUSA_SEGUNDOS = 2.0
TIMEOUT_SEGUNDOS = 20
MIN_CARACTERES = 400
MIN_PARRAFOS = 3

FILA = re.compile(
    r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*\[(.+?)\]\((https?://[^)\s]+)\)"
)
RUIDO = re.compile(
    r"^(le[eé] tambi[eé]n|mir[aá] tambi[eé]n|te puede interesar|suscrib|seguinos|"
    r"compartir|m[aá]s informaci[oó]n|newsletter|publicidad)",
    re.IGNORECASE,
)


def leer_indice():
    """Devuelve las notas del indice: numero, medio, fecha, titulo y enlace."""
    notas = []
    for linea in INDICE.read_text(encoding="utf-8").splitlines():
        m = FILA.match(linea)
        if m:
            numero, medio, fecha, titulo, url = m.groups()
            notas.append(
                {"numero": int(numero), "medio": medio, "fecha": fecha, "titulo": titulo, "url": url}
            )
    return notas


def pedir(url):
    pedido = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(pedido, timeout=TIMEOUT_SEGUNDOS) as respuesta:
        charset = respuesta.headers.get_content_charset() or "utf-8"
        return respuesta.read().decode(charset, errors="replace")


def robots_del_sitio(url, cache):
    partes = urlsplit(url)
    origen = f"{partes.scheme}://{partes.netloc}"
    if origen in cache:
        return cache[origen]
    parser = urllib.robotparser.RobotFileParser()
    try:
        parser.parse(pedir(f"{origen}/robots.txt").splitlines())
    except urllib.error.HTTPError as error:
        # Sin robots.txt (404) no hay restriccion declarada. Otros errores: no bajamos.
        parser = None if error.code == 404 else False
    except (urllib.error.URLError, TimeoutError):
        parser = False
    cache[origen] = parser
    return parser


def esta_permitido(url, cache):
    parser = robots_del_sitio(url, cache)
    if parser is None:
        return True
    if parser is False:
        return False
    return parser.can_fetch(USER_AGENT, url)


def extraer_parrafos(html, titulo):
    import trafilatura

    texto = trafilatura.extract(
        html, include_comments=False, include_tables=False, favor_precision=True
    )
    if not texto:
        return []
    parrafos = [linea.strip() for linea in texto.splitlines() if linea.strip()]
    parrafos = [p for p in parrafos if not RUIDO.match(p)]
    if parrafos and parrafos[0].casefold() == titulo.casefold():
        parrafos = parrafos[1:]
    return parrafos


def slug(texto):
    sin_tildes = unicodedata.normalize("NFKD", texto).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", sin_tildes.lower()).strip("-")[:50].strip("-")


def guardar(nota, parrafos):
    SALIDA.mkdir(parents=True, exist_ok=True)
    archivo = SALIDA / f"ejemplo-{nota['numero']:02d}-{slug(nota['titulo'])}.md"
    cuerpo = f"# {nota['titulo']}\n\n" + "\n\n".join(parrafos) + "\n"
    archivo.write_text(cuerpo, encoding="utf-8")
    return archivo


def registrar_fuentes(registros):
    """Deja constancia de de donde salio cada texto, fuera del archivo de la nota."""
    ruta = SALIDA / "_fuentes.json"
    existentes = json.loads(ruta.read_text(encoding="utf-8")) if ruta.exists() else {}
    for registro in registros:
        existentes[registro["archivo"]] = registro
    ruta.write_text(json.dumps(existentes, ensure_ascii=False, indent=2), encoding="utf-8")


def elegir(notas, args):
    if args.todas:
        return notas
    numeros = set(args.notas or RECOMENDADAS)
    faltantes = numeros - {n["numero"] for n in notas}
    if faltantes:
        sys.exit(f"No hay notas con los numeros {sorted(faltantes)} en {INDICE.name}.")
    return [n for n in notas if n["numero"] in numeros]


def bajar(nota, cache):
    """Devuelve (archivo, aviso). Si no se puede bajar, archivo es None."""
    if not esta_permitido(nota["url"], cache):
        return None, "el sitio no permite bajarla (robots.txt); pegala a mano"
    try:
        html = pedir(nota["url"])
    except (urllib.error.URLError, TimeoutError) as error:
        return None, f"no se pudo bajar ({error}); pegala a mano"
    parrafos = extraer_parrafos(html, nota["titulo"])
    caracteres = sum(len(p) for p in parrafos)
    if len(parrafos) < MIN_PARRAFOS or caracteres < MIN_CARACTERES:
        return None, "salio muy corta (suscripcion o bloqueo); pegala a mano"
    return guardar(nota, parrafos), None


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--notas", type=int, nargs="+", help="numeros de nota del indice")
    parser.add_argument("--todas", action="store_true", help="todas las del indice")
    parser.add_argument("--listar", action="store_true", help="muestra que bajaria, sin bajar")
    args = parser.parse_args()

    elegidas = elegir(leer_indice(), args)
    if args.listar:
        for n in elegidas:
            print(f"{n['numero']:>2}  {n['medio']:<18} {n['fecha']}  {n['titulo']}")
        print(f"\n{len(elegidas)} notas. Destino: {SALIDA}")
        return

    cache_robots, registros, fallidas = {}, [], []
    for n in elegidas:
        archivo, aviso = bajar(n, cache_robots)
        if archivo:
            print(f"ok   {n['numero']:>2}  {archivo.name}")
            registros.append(
                {
                    "archivo": archivo.name,
                    "medio": n["medio"],
                    "fecha_nota": n["fecha"],
                    "url": n["url"],
                    "descargada": date.today().isoformat(),
                }
            )
        else:
            print(f"FALTA {n['numero']:>2}  {n['medio']}: {aviso}")
            fallidas.append(n["numero"])
        time.sleep(PAUSA_SEGUNDOS)

    if registros:
        registrar_fuentes(registros)
    print(f"\nBajadas: {len(registros)}. A mano: {fallidas or 'ninguna'}.")


if __name__ == "__main__":
    main()
