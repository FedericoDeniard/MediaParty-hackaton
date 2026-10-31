"""Texto de la nota: normalización, párrafos y ubicación de fragmentos.

El modelo propone; el código comprueba y copia la cita desde el texto guardado.
"""

from __future__ import annotations

import re
import unicodedata

from pydantic import BaseModel, ConfigDict

_CORTE_PARRAFO = re.compile(r"(?:\r\n|\r|\n)(?:[ \t\f\v]*(?:\r\n|\r|\n))+")

_EQUIVALENCIAS = {
    "‘": "'", "’": "'", "‚": "'", "‛": "'", "′": "'", "`": "'", "´": "'",
    "“": '"', "”": '"', "„": '"', "‟": '"', "«": '"', "»": '"', "″": '"',
    "‐": "-", "‑": "-", "‒": "-", "–": "-", "—": "-", "−": "-",
    "…": "...",
}

_PUNTUACION_BORDE = " \t\r\n.,;:!?¡¿\"'()[]-"


class Parrafo(BaseModel):
    model_config = ConfigDict(frozen=True)

    id: str
    orden: int
    texto: str
    inicio: int
    fin: int


class Ubicacion(BaseModel):
    inicio: int
    fin: int
    parrafo_id: str | None
    exacta: bool
    cita: str


def normalizar(texto: str) -> str:
    """\\r\\n y \\r pasan a \\n y se recortan los bordes."""
    return texto.replace("\r\n", "\n").replace("\r", "\n").strip()


def partir_en_parrafos(texto: str) -> tuple[Parrafo, ...]:
    """Parte por líneas en blanco. inicio/fin son posiciones en el texto recibido."""
    parrafos: list[Parrafo] = []
    cursor = 0
    cortes = [(m.start(), m.end()) for m in _CORTE_PARRAFO.finditer(texto)]
    bloques = []
    for ini_corte, fin_corte in cortes:
        bloques.append((cursor, ini_corte))
        cursor = fin_corte
    bloques.append((cursor, len(texto)))
    for ini, fin in bloques:
        bloque = texto[ini:fin]
        contenido = bloque.strip()
        if not contenido:
            continue
        inicio = ini + (len(bloque) - len(bloque.lstrip()))
        fin_real = inicio + len(contenido)
        orden = len(parrafos) + 1
        parrafos.append(
            Parrafo(id=f"p{orden}", orden=orden, texto=texto[inicio:fin_real], inicio=inicio, fin=fin_real)
        )
    return tuple(parrafos)


def _parrafo_de(parrafos: tuple[Parrafo, ...], posicion: int) -> str | None:
    for p in parrafos:
        if p.inicio <= posicion < p.fin:
            return p.id
    return None


def ubicacion_en_rango(texto: str, inicio: int, fin: int, exacta: bool = True) -> Ubicacion:
    """Construye una Ubicacion copiando la cita desde el texto."""
    return Ubicacion(
        inicio=inicio,
        fin=fin,
        parrafo_id=_parrafo_de(partir_en_parrafos(texto), inicio),
        exacta=exacta,
        cita=texto[inicio:fin],
    )


def _plegar_caracter(c: str) -> str:
    """Minúsculas, sin tildes, comillas y guiones unificados. Puede devolver 0 o más caracteres."""
    if c in _EQUIVALENCIAS:
        return _EQUIVALENCIAS[c]
    if c.isspace():
        return " "
    descompuesto = unicodedata.normalize("NFD", c)
    return "".join(x for x in descompuesto if not unicodedata.combining(x)).lower()


def plegar(texto: str) -> tuple[str, list[int]]:
    """Versión tolerante del texto y, por cada carácter, su posición en el original.

    Los espacios consecutivos se colapsan en uno solo.
    """
    salida: list[str] = []
    mapa: list[int] = []
    for i, c in enumerate(texto):
        for x in _plegar_caracter(c):
            if x == " " and salida and salida[-1] == " ":
                continue
            salida.append(x)
            mapa.append(i)
    return "".join(salida), mapa


def _plegar_fragmento(fragmento: str) -> str:
    return plegar(fragmento)[0].strip()


def _buscar_tolerante(texto: str, fragmento: str) -> tuple[int, int] | None:
    plegado, mapa = plegar(texto)
    buscado = _plegar_fragmento(fragmento)
    candidatos = [buscado]
    recortado = buscado.strip(_PUNTUACION_BORDE)
    if recortado and recortado != buscado:
        candidatos.append(recortado)
    for candidato in candidatos:
        if not candidato:
            continue
        pos = plegado.find(candidato)
        if pos >= 0:
            return mapa[pos], mapa[pos + len(candidato) - 1] + 1
    return None


def ubicar(texto: str, fragmento: str) -> Ubicacion | None:
    """Ubica el fragmento en el texto: literal primero, tolerante después.

    La cita se copia siempre desde `texto`, nunca desde `fragmento`.
    """
    if not fragmento or not fragmento.strip():
        return None
    for candidato in (fragmento, fragmento.strip()):
        pos = texto.find(candidato)
        if pos >= 0:
            return ubicacion_en_rango(texto, pos, pos + len(candidato), exacta=True)
    rango = _buscar_tolerante(texto, fragmento)
    if rango is None:
        return None
    return ubicacion_en_rango(texto, rango[0], rango[1], exacta=False)


def aparece(texto: str, fragmento: str) -> bool:
    return ubicar(texto, fragmento) is not None


__all__ = [
    "Parrafo",
    "Ubicacion",
    "aparece",
    "normalizar",
    "partir_en_parrafos",
    "plegar",
    "ubicacion_en_rango",
    "ubicar",
]
