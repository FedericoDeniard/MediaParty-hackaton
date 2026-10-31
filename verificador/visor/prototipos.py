"""Prototipos de gráficos para evaluar antes de integrarlos al contrato de datos (`graficos.py`).

Todo se calcula por código a partir de lo que ya genera el sistema: las afirmaciones, entidades
y eventos del backend, el informe del verificador y las series oficiales guardadas. Nada se
escribe a mano. Si un prototipo convence, pasa a `verificador/src/verificador/graficos.py`.

  A.  proyecciones(): lo que proyecta cada fuente para un período sin dato oficial, contra el
      último dato oficial.
  F1. voces(): quién habla en la nota y a quién no se le nombra.
  F2. nota_anotada(): el texto de la nota con sus cifras, citas y datos oficiales marcados.

Cuando el backend entregue `source` en las afirmaciones (PR 5), F1 lo usa; mientras tanto deduce
la fuente por el nombre de las entidades que aparecen en la frase.
"""
from __future__ import annotations

import re
from collections import defaultdict
from typing import Any

from verificador.series import ClienteSeries, desde_texto
from verificador.series.catalogo import buscar_entrada, normalizar
from verificador.texto import plegar
from verificador.validar import InformeValidacion

PROYECCION = re.compile(
    r"proyect|estim|\bubic|espera|esper[ao]n|oscil|pronostic|anticip|cercan|en torno|podria|preve|marcaria"
)
ATRIBUCION = re.compile(
    r"segun|informo|dijo|afirmo|sostuvo|explico|proyecto|estimo|senalo|indico|aseguro|admitio|declaro|"
    r"advirtio|considero|relevamiento|registro|reporto|calculo|publico|difundio|anuncio|espera"
)
RANGO = re.compile(
    r"entre\s+(?:el\s+)?(\d+(?:[.,]\d+)?)\s*(?:%|por ciento)?\s*y\s+(?:el\s+)?(\d+(?:[.,]\d+)?)\s*(?:%|por ciento)"
)
MEDIO = re.compile(r"\b(medio|diario|portal|radio|canal|agencia|periodico|sitio|television|noticias)\b")
CIFRA = re.compile(
    r"(?:(?:US\$|u\$s|\$)\s?\d[\d.]*(?:,\d+)?(?:\s(?:mil millones|millones|mil))?)"
    r"|(?<![\w.,])\d[\d.]*(?:,\d+)?\s?(?:%|por ciento|puntos porcentuales|puntos básicos|p\.p\.|(?:mil )?millones|dólares|pesos)(?!\w)",
    re.IGNORECASE,
)
CITA_TEXTUAL = re.compile(r"“[^”]{20,}”|«[^»]{20,}»|\"[^\"]{20,}\"")
FUENTE_OFICIAL = {"bcra": "BCRA", "datosgob": "datos.gob.ar", "bancomundial": "Banco Mundial"}
MAX_VOCES = 8
MAX_FALTAN = 4
MIN_VOCES = 2


def _numero(texto: str) -> float:
    return float(texto.replace(",", "."))


def _cita(item: Any) -> dict | None:
    u = getattr(item, "ubicacion", None)
    return {"parrafo_id": u.parrafo_id, "inicio": u.inicio, "fin": u.fin, "cita": u.cita} if u else None


def _items_de_claims(informe: InformeValidacion) -> dict[int, Any]:
    return {i.indice: i for i in informe.verificacion.items if i.nodo == "claims" and i.campo == "text"}


def _posicion(texto_plegado: str, nombre: str) -> int:
    clave = plegar(nombre)[0].strip()
    return texto_plegado.find(clave) if clave else -1


def _fuente_de(texto: str, nodos: list[dict]) -> tuple[str | None, str | None]:
    """(fuente, apoyo): la organización que aparece primero en la frase y, si hay, la persona."""
    plegado = plegar(texto)[0]
    halladas = [(p, n) for n in nodos if (p := _posicion(plegado, n["name"])) >= 0]
    halladas.sort(key=lambda x: x[0])
    orgs = [n for _, n in halladas if n["type"] == "org" and not MEDIO.search(normalizar(n.get("description", "")))]
    personas = [n for _, n in halladas if n["type"] == "person"]
    if orgs:
        return orgs[0]["name"], personas[0]["name"] if personas else None
    return (personas[0]["name"], None) if personas else (None, None)


# --- A. proyecciones por fuente ------------------------------------------------------------


def _rango(texto: str, valor: float) -> tuple[float, float]:
    m = RANGO.search(normalizar(texto))
    if not m:
        return valor, valor
    a, b = _numero(m.group(1)), _numero(m.group(2))
    return min(a, b), max(a, b)


def _es_proyeccion(texto: str, tipo: str) -> bool:
    return tipo in ("attribution", "quote") or bool(PROYECCION.search(normalizar(texto)))


def _referencia(cliente: ClienteSeries, entrada: Any) -> dict | None:
    puntos, origen = cliente.obtener(entrada.fuente, entrada.id)
    puntos = sorted(puntos)
    if not puntos:
        return None
    fecha, valor = puntos[-1]
    return {"fecha": fecha, "valor": valor, "origen_datos": origen, "nombre": entrada.nombre}


def _proyecciones_de_la_nota(claims: list[dict], nodos: list[dict], informe: InformeValidacion, anio: int) -> dict:
    items = _items_de_claims(informe)
    grupos: dict[tuple[str, str], dict[str, dict]] = defaultdict(dict)
    entradas: dict[str, Any] = {}
    for i, claim in enumerate(claims):
        texto = claim["text"]
        a = desde_texto(texto, anio_defecto=anio)
        if a is None or a.unidad != "porcentaje" or not a.periodo or len(a.periodo) != 7:
            continue
        entrada = buscar_entrada(texto, "porcentaje")
        if entrada is None or entrada.calculo != "directo" or entrada.frecuencia != "mensual":
            continue
        if not _es_proyeccion(texto, claim["type"]):
            continue
        fuente, apoyo = _fuente_de(texto, nodos)
        lo, hi = _rango(texto, a.valor)
        fila = grupos[(entrada.clave, a.periodo)].setdefault(
            fuente or "Sin fuente nombrada", {"fuente": fuente, "apoyo": apoyo, "min": lo, "max": hi, "citas": []}
        )
        fila["min"], fila["max"] = min(fila["min"], lo), max(fila["max"], hi)
        fila["citas"].append({"texto": texto, "tipo": claim["type"], "cita": _cita(items.get(i))})
        entradas[entrada.clave] = entrada
    return {"grupos": grupos, "entradas": entradas}


def proyecciones(
    claims: list[dict], nodos: list[dict], informe: InformeValidacion, cliente: ClienteSeries, anio: int
) -> list[dict]:
    hallado = _proyecciones_de_la_nota(claims, nodos, informe, anio)
    salida = []
    for (clave, periodo), filas in sorted(hallado["grupos"].items()):
        entrada = hallado["entradas"][clave]
        ref = _referencia(cliente, entrada)
        if ref is None or periodo <= ref["fecha"][:7]:  # el período ya tiene dato oficial: no es una proyección
            continue
        ordenadas = sorted(
            ({**f, "n": len(f["citas"])} for f in filas.values()), key=lambda f: (f["min"] + f["max"], f["fuente"] or "")
        )
        salida.append({
            "id": f"proyecciones-{clave}-{periodo}",
            "indicador": entrada.nombre,
            "periodo": periodo,
            "unidad": entrada.unidad,
            "referencia": ref,
            "filas": ordenadas,
            "una_fuente": len(ordenadas) < 2,
        })
    return salida


# --- F1. quién habla en la nota ------------------------------------------------------------

_TIPO_DE_FUENTE = {"quote": "citas", "attribution": "atribuciones", "statistic": "cifras"}


def _fuente_de_la_afirmacion(claim: dict, nodos: list[dict]) -> tuple[str | None, str | None]:
    """Usa `source` si el backend lo entrega; si no, deduce por las entidades de la frase."""
    if "source" in claim:
        return claim["source"], None
    dicha = claim["type"] in ("quote", "attribution") or bool(ATRIBUCION.search(normalizar(claim["text"])))
    return _fuente_de(claim["text"], nodos) if dicha else (None, None)


def voces(claims: list[dict], nodos: list[dict], informe: InformeValidacion, editorial: dict | None) -> dict:
    items = _items_de_claims(informe)
    por_fuente: dict[str, dict] = {}
    sin_fuente: list[dict] = []
    universo = 0
    for i, claim in enumerate(claims):
        if claim["type"] not in _TIPO_DE_FUENTE:
            continue  # los hechos ("X venció a Y") no los dice nadie en particular
        universo += 1
        ejemplo = {"texto": claim["text"], "tipo": claim["type"], "cita": _cita(items.get(i))}
        fuente, apoyo = _fuente_de_la_afirmacion(claim, nodos)
        if fuente is None:
            sin_fuente.append(ejemplo)
            continue
        fila = por_fuente.setdefault(
            fuente, {"fuente": fuente, "apoyos": [], "citas": 0, "atribuciones": 0, "cifras": 0, "ejemplos": []}
        )
        fila[_TIPO_DE_FUENTE[claim["type"]]] += 1
        if apoyo and apoyo not in fila["apoyos"]:
            fila["apoyos"].append(apoyo)
        fila["ejemplos"].append(ejemplo)
    filas = sorted(
        ({**f, "total": f["citas"] + f["atribuciones"] + f["cifras"]} for f in por_fuente.values()),
        key=lambda f: -f["total"],
    )
    faltan = [a for a in (editorial or {}).get("missing_angles", []) if isinstance(a, str)][:MAX_FALTAN]
    return {
        "filas": filas[:MAX_VOCES],
        "otras": max(len(filas) - MAX_VOCES, 0),
        "sin_fuente": {"n": len(sin_fuente), "ejemplos": sin_fuente[:3]},
        "universo": universo,
        "hay_grafico": len(filas) >= MIN_VOCES,
        "faltan": faltan,
        "fuente_de_datos": "source" if any("source" in c for c in claims) else "deducido",
    }


# --- F2. la nota anotada -------------------------------------------------------------------


def _buscar_cifra(cuerpo: str, t: Any) -> tuple[int, int] | None:
    if t.inicio is None or t.fin is None:
        return None
    forma = f"{t.tarjeta.dicho.valor:g}".replace(".", ",")
    m = re.search(rf"(?<![\d,.]){re.escape(forma)}(?!\d)(?:\s?%| por ciento)?", cuerpo[t.inicio : t.fin])
    return (t.inicio + m.start(), t.inicio + m.end()) if m else None


def _marcas_oficiales(cuerpo: str, informe: InformeValidacion) -> list[dict]:
    tipo_de = {"coincide": "ok", "difiere": "difiere", "sin_dato_oficial": "pendiente"}
    marcas: dict[tuple[int, int], dict] = {}
    for t in informe.tarjetas:
        tipo = tipo_de.get(t.tarjeta.resultado)
        span = _buscar_cifra(cuerpo, t) if tipo else None
        if not span or span in marcas:
            continue
        serie = t.tarjeta.serie
        fuente = FUENTE_OFICIAL.get(serie.fuente, serie.fuente) if serie else None
        etiqueta = {
            "ok": f"✓ {fuente} {serie.valor:g}".replace(".", ",") if serie else "✓",
            "difiere": f"≠ {fuente} {serie.valor:g}".replace(".", ",") if serie else "≠",
            "pendiente": "sin dato oficial",
        }[tipo]
        marcas[span] = {
            "tipo": tipo, "inicio": span[0], "fin": span[1], "etiqueta": etiqueta,
            "detalle": {
                "afirmacion": t.texto_afirmacion, "resultado": t.tarjeta.resultado, "fuente": fuente,
                "valor_nota": t.tarjeta.dicho.valor, "valor_serie": serie.valor if serie else None,
                "enlace": serie.enlace if serie else None,
            },
        }
    return list(marcas.values())


def _solapa(a: tuple[int, int], b: tuple[int, int]) -> bool:
    return a[0] < b[1] and b[0] < a[1]


def nota_anotada(cuerpo: str, informe: InformeValidacion) -> dict:
    oficiales = _marcas_oficiales(cuerpo, informe)
    ocupado = [(m["inicio"], m["fin"]) for m in oficiales]
    cifras = [
        {"tipo": "cifra", "inicio": m.start(), "fin": m.end(), "etiqueta": None, "detalle": {"texto": m.group(0)}}
        for m in CIFRA.finditer(cuerpo)
        if not any(_solapa((m.start(), m.end()), o) for o in ocupado)
    ]
    citas = [
        {"tipo": "cita", "inicio": m.start(), "fin": m.end(), "etiqueta": None, "detalle": {"texto": m.group(0)}}
        for m in CITA_TEXTUAL.finditer(cuerpo)
    ]
    marcas = sorted(oficiales + cifras + citas, key=lambda m: (m["inicio"], m["fin"]))
    return {
        "texto": cuerpo,
        "marcas": marcas,
        "resumen": {
            "cifras": len(cifras) + len(oficiales),
            "citas": len(citas),
            "con_dato_oficial": sum(1 for m in oficiales if m["tipo"] in ("ok", "difiere")),
            "pendientes": sum(1 for m in oficiales if m["tipo"] == "pendiente"),
        },
    }
