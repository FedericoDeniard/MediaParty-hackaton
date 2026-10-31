"""Visor local de gráficos: corre el motor real sobre las notas del corpus y dibuja lo que devuelve.

Por cada nota toma el cuerpo (`corpus/notas/md`) y los enriquecimientos que generó el backend
(`docs/enrichments`), llama a `validar_nota` y `armar_graficos` y entrega el JSON. La página
(`index.html`) no tiene datos propios: solo dibuja ese JSON. Solo lectura y solo local.

`/api/notas/{n}/flujo` cuenta el recorrido paso a paso mientras el motor trabaja de verdad: cada
paso sale de un resultado real de esa nota (lo que encontró, lo que cruzó, lo que eligió y por qué).

    cd verificador
    uv run python visor/servir.py            # http://127.0.0.1:8110
"""
import json
import re
import sys
import time
from collections.abc import Iterator
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(RAIZ / "verificador" / "src"))

import prototipos  # noqa: E402  (módulo de esta carpeta)
import uvicorn  # noqa: E402
from fastapi import HTTPException  # noqa: E402
from fastapi.responses import FileResponse, StreamingResponse  # noqa: E402

from verificador.api import crear_app  # noqa: E402
from verificador.contexto.selector import elegir_contextos  # noqa: E402
from verificador.graficos import armar_graficos  # noqa: E402
from verificador.series import ClienteSeries  # noqa: E402
from verificador.texto import partir_en_parrafos  # noqa: E402
from verificador.validar import InformeValidacion, validar_nota  # noqa: E402

NOTAS = RAIZ / "corpus" / "notas" / "md"
ENRIQUECIMIENTOS = RAIZ / "docs" / "enrichments"
PAGINA = Path(__file__).with_name("index.html")
FECHA_CORPUS = date(2026, 10, 31)  # fecha de las notas del corpus; completa los meses sin año
PUERTO = 8110
PAUSA_ENTRE_PASOS = 0.5  # segundos: el cálculo real tarda décimas; la pausa es solo para poder leer cada paso

NOMBRES_DE_CONTEXTO = {
    "poder_adquisitivo": "poder adquisitivo del salario mínimo, el haber y la AUH",
    "cobertura_canasta": "cobertura de la canasta básica",
    "salarios_por_sector": "salarios reales por sector",
    "universidades_constantes": "transferencias a universidades en pesos constantes",
}

cliente = ClienteSeries(modo="guardado")
app = crear_app(cliente)


def _archivos(n: str) -> tuple[Path, Path]:
    if not re.fullmatch(r"\d{2}", n):
        raise HTTPException(404, "nota inexistente")
    md = next(NOTAS.glob(f"{n}-*.md"), None)
    enr = ENRIQUECIMIENTOS / f"{n}.json"
    if md is None or not enr.exists():
        raise HTTPException(404, "nota inexistente")
    return md, enr


def _titulo(md: Path) -> str:
    return md.read_text(encoding="utf-8").splitlines()[0].lstrip("# ").strip()


def _leer(n: str) -> dict:
    md, enr = _archivos(n)
    lineas = md.read_text(encoding="utf-8").splitlines()
    datos = json.loads(enr.read_text(encoding="utf-8"))
    return {
        "n": n,
        "titulo": _titulo(md),
        "niche": datos.get("niche"),
        "cuerpo": "\n".join(lineas[1:]).strip(),
        "origen": f"docs/enrichments/{n}.json",
        "por_tipo": {e["kind"]: e["data"] for e in datos["enrichments"] if e["status"] == "done"},
    }


def _validar(base: dict) -> InformeValidacion:
    return validar_nota(base["cuerpo"], base["por_tipo"], cliente_series=cliente, fecha_referencia=FECHA_CORPUS)


def _resultado(base: dict, informe: InformeValidacion) -> dict:
    por_tipo = base["por_tipo"]
    graficos = armar_graficos(informe, por_tipo, cliente)
    volcado = graficos.model_dump(mode="json")
    claims = por_tipo.get("claims", {}).get("claims", [])
    nodos = por_tipo.get("entities", {}).get("nodes", [])
    return {
        "prototipos": {
            "proyecciones": prototipos.proyecciones(claims, nodos, informe, cliente, FECHA_CORPUS.year),
            "voces": prototipos.voces(claims, nodos, informe, por_tipo.get("editorial")),
            "anotada": prototipos.nota_anotada(base["cuerpo"], informe),
        },
        "n": base["n"],
        "titulo": base["titulo"],
        "niche": base["niche"],
        "cuerpo": base["cuerpo"],
        "origen": base["origen"],
        "resumen": informe.resumen,
        "graficos": volcado["graficos"],
        "contextos": volcado["contextos"],
        "avisos": volcado["avisos"],
    }


@app.get("/", include_in_schema=False)
def pagina() -> FileResponse:
    return FileResponse(PAGINA)


@app.get("/api/notas")
def listar_notas() -> list[dict]:
    salida = []
    for enr in sorted(ENRIQUECIMIENTOS.glob("*.json")):
        md = next(NOTAS.glob(f"{enr.stem}-*.md"), None)
        if md is None:
            continue
        niche = json.loads(enr.read_text(encoding="utf-8")).get("niche")
        salida.append({"n": enr.stem, "titulo": _titulo(md), "niche": niche})
    return salida


@app.get("/api/notas/{n}")
def nota(n: str) -> dict:
    base = _leer(n)
    return _resultado(base, _validar(base))


# --- el recorrido en vivo ------------------------------------------------------------------


def _paso(fase: str, texto: str, **extra: object) -> str:
    return f"data: {json.dumps({'fase': fase, 'texto': texto, **extra}, ensure_ascii=False)}\n\n"


def _resumen_de_verificacion(informe: InformeValidacion) -> str:
    estados = informe.verificacion.resumen
    total = sum(estados.values())
    en_el_texto = estados.get("ok", 0) + estados.get("parafraseada", 0)
    return (
        f"Compruebo contra el texto de la nota lo que dijeron los agentes: {total} elementos revisados, "
        f"{en_el_texto} se encuentran en el texto y {total - en_el_texto} quedan marcados para revisar."
    )


def _pasos_de_cifras(informe: InformeValidacion) -> Iterator[str]:
    con_serie = [t for t in informe.tarjetas if t.tarjeta.serie]
    yield _paso("cifras", f"Detecto {len(informe.tarjetas)} cifras en la nota; {len(con_serie)} tienen una serie oficial en el catálogo.")
    for t in con_serie[:4]:
        serie = t.tarjeta.serie
        resultado = t.tarjeta.resultado.replace("_", " ")
        yield _paso("cifras", f"Cruzo «{t.tarjeta.dicho.texto[:70]}» con {serie.nombre}: {resultado} (dato oficial {str(serie.valor).replace('.', ',')}).")
    if not con_serie:
        yield _paso("cifras", "Ninguna cifra de esta nota tiene una serie oficial verificada, así que no las comparo: prefiero no inventar un cruce.")


def _pasos_de_contexto(texto: str) -> Iterator[str]:
    elegidos = elegir_contextos(texto)
    for e in elegidos:
        yield _paso("contexto", f"La nota menciona {', '.join(e.motivos)}: elijo el contexto de {NOMBRES_DE_CONTEXTO.get(e.clave, e.clave)}.")
    if not elegidos:
        yield _paso("contexto", "Ningún contexto del catálogo encaja con esta nota: prefiero no armar un gráfico que no aporte.")


def _flujo(n: str) -> Iterator[str]:
    inicio = time.time()
    base = _leer(n)
    parrafos = partir_en_parrafos(base["cuerpo"])
    yield _paso("leer", f"Leo la nota: {len(parrafos)} párrafos y {len(base['cuerpo'].split())} palabras.")
    time.sleep(PAUSA_ENTRE_PASOS)

    por_tipo = base["por_tipo"]
    claims = por_tipo.get("claims", {}).get("claims", [])
    nodos = por_tipo.get("entities", {}).get("nodes", [])
    eventos = por_tipo.get("timeline", {}).get("events", [])
    yield _paso("agentes", f"Los agentes ya analizaron la nota (análisis guardado): {len(claims)} afirmaciones, {len(nodos)} entidades y {len(eventos)} eventos.")
    principales = sorted(nodos, key=lambda x: -x.get("mentions", 0))[:3]
    if principales:
        time.sleep(PAUSA_ENTRE_PASOS)
        yield _paso("agentes", "Los nombres que más aparecen: " + ", ".join(x["name"] for x in principales) + ".")
    time.sleep(PAUSA_ENTRE_PASOS)

    informe = _validar(base)
    yield _paso("verificar", _resumen_de_verificacion(informe))
    time.sleep(PAUSA_ENTRE_PASOS)

    for linea in _pasos_de_cifras(informe):
        yield linea
        time.sleep(PAUSA_ENTRE_PASOS)
    for linea in _pasos_de_contexto(base["cuerpo"]):
        yield linea
        time.sleep(PAUSA_ENTRE_PASOS)

    resultado = _resultado(base, informe)
    for c in resultado["contextos"]:
        yield _paso("armar", f"Armé: {c['titulo']}")
        time.sleep(PAUSA_ENTRE_PASOS)
    proyecciones = resultado["prototipos"]["proyecciones"]
    if any(not p["una_fuente"] for p in proyecciones):
        yield _paso("armar", "Armé la comparación de lo que proyecta cada fuente contra el último dato oficial.")
        time.sleep(PAUSA_ENTRE_PASOS)
    cuantos = len(resultado["graficos"]) + len(resultado["contextos"])
    unidad = "gráfico" if cuantos == 1 else "gráficos"
    yield _paso("listo", f"Listo en {time.time() - inicio:.1f} s: {cuantos} {unidad} para esta nota.", nota=resultado)


@app.get("/api/notas/{n}/flujo")
def flujo(n: str) -> StreamingResponse:
    _archivos(n)  # 404 antes de abrir el stream
    return StreamingResponse(_flujo(n), media_type="text/event-stream", headers={"Cache-Control": "no-cache"})


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=PUERTO)
