"""Localiza en la nota el pasaje que sostiene una afirmación y lo copia por código.

No juzga si la afirmación es cierta: solo busca la(s) oración(es) más cercanas.
Si ninguna supera el umbral, devuelve None y no se rellena nada.
"""

from __future__ import annotations

import re
import unicodedata
from dataclasses import dataclass

from pydantic import BaseModel

from verificador.cifras import cifra_respaldada, extraer_cifras
from verificador.texto import partir_en_parrafos

UMBRAL_POR_DEFECTO = 0.4
_MARGEN_PAR = 0.08
_MIN_RAIZ = 5
_PESO_CIFRAS, _PESO_PALABRAS, _PESO_NOMBRES = 0.5, 0.35, 0.15

_CORTE_ORACION = re.compile(r"(?<=[.!?])[\"'”»)]*\s+(?=[A-ZÁÉÍÓÚÑÜ¿¡\"“«(\d$])")
_PALABRA = re.compile(r"[^\W\d_]{3,}", re.UNICODE)

_STOPWORDS = frozenset(
    """para como pero sino porque cuando donde desde hasta entre sobre segun tras ante bajo con sin por del los las
    una unos unas que fue ser son era han hay esta este estos estas ese esa eso esos esas muy mas menos tambien
    sus esto aqui alli solo cada otro otra otros otras todo toda todos todas the cuyo cuya donde luego ademas
    habia hubo seria serian sera seran puede pueden podria podrian tiene tienen tuvo dijo indico afirmo""".split()
)


class Pasaje(BaseModel):
    inicio: int
    fin: int
    parrafo_id: str
    cita: str
    puntaje: float
    criterio: str


@dataclass(frozen=True)
class _Oracion:
    inicio: int
    fin: int
    parrafo_id: str


def _plegar(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", s) if not unicodedata.combining(c)).lower()


def _raices(texto: str) -> set[str]:
    palabras = (_plegar(p) for p in _PALABRA.findall(texto))
    return {p[:_MIN_RAIZ] for p in palabras if p not in _STOPWORDS}


def _nombres_propios(texto: str) -> set[str]:
    """Palabras en mayúscula que no abren oración, y siglas."""
    nombres: set[str] = set()
    for m in re.finditer(r"[^\W\d_]{2,}", texto):
        palabra = m.group(0)
        previo = texto[: m.start()].rstrip()
        abre = not previo or previo[-1] in ".!?:“\"«¿¡"
        sigla = palabra.isupper() and len(palabra) >= 2
        if sigla or (palabra[0].isupper() and not abre):
            nombres.add(_plegar(palabra)[:_MIN_RAIZ])
    return nombres - _STOPWORDS


def _oraciones(cuerpo: str) -> list[list[_Oracion]]:
    """Oraciones por párrafo, con posiciones en el cuerpo recibido."""
    resultado: list[list[_Oracion]] = []
    for p in partir_en_parrafos(cuerpo):
        piezas: list[_Oracion] = []
        cursor = 0
        for m in _CORTE_ORACION.finditer(p.texto):
            piezas.append(_Oracion(p.inicio + cursor, p.inicio + m.start() + _largo_cierre(p.texto, m), p.id))
            cursor = m.end()
        piezas.append(_Oracion(p.inicio + cursor, p.fin, p.id))
        resultado.append([o for o in piezas if cuerpo[o.inicio:o.fin].strip()])
    return resultado


def _largo_cierre(texto: str, m: re.Match[str]) -> int:
    """Incluye en la oración los cierres (comillas, paréntesis) pegados al punto."""
    fragmento = texto[m.start():m.end()]
    return len(fragmento.rstrip())


@dataclass(frozen=True)
class _Pieza:
    cifras: tuple
    raices: frozenset[str]
    nombres: frozenset[str]


def _analizar_afirmacion(afirmacion: str) -> _Pieza:
    return _Pieza(extraer_cifras(afirmacion), frozenset(_raices(afirmacion)), frozenset(_nombres_propios(afirmacion)))


def _puntuar(pieza: _Pieza, candidata: str) -> tuple[float, str]:
    componentes: list[tuple[float, float, str]] = []
    if pieza.cifras:
        disponibles = extraer_cifras(candidata, incluir_palabras=True)
        aciertos = sum(1 for c in pieza.cifras if cifra_respaldada(c, disponibles))
        componentes.append((_PESO_CIFRAS, aciertos / len(pieza.cifras), "cifras"))
    if pieza.raices:
        raices = _raices(candidata)
        comunes = len(pieza.raices & raices)
        recall = comunes / len(pieza.raices)
        jaccard = comunes / len(pieza.raices | raices) if raices else 0.0
        componentes.append((_PESO_PALABRAS, 0.8 * recall + 0.2 * jaccard, "palabras"))
    if pieza.nombres:
        nombres = _raices(candidata) | {_plegar(w)[:_MIN_RAIZ] for w in re.findall(r"[^\W\d_]{2,}", candidata)}
        componentes.append((_PESO_NOMBRES, len(pieza.nombres & nombres) / len(pieza.nombres), "nombres"))
    total = sum(p for p, _, _ in componentes)
    if total == 0:
        return 0.0, ""
    puntaje = sum(p * v for p, v, _ in componentes) / total
    criterio = "+".join(n for _, v, n in componentes if v > 0)
    return puntaje, criterio


def localizar_pasaje(cuerpo: str, afirmacion: str, umbral: float = UMBRAL_POR_DEFECTO) -> Pasaje | None:
    """Devuelve la oración (o dos contiguas) de la nota más cercana a la afirmación, o None."""
    if not afirmacion.strip() or not cuerpo.strip():
        return None
    pieza = _analizar_afirmacion(afirmacion)
    if not pieza.cifras and not pieza.raices:
        return None
    mejor: tuple[float, str, int, int, str] | None = None
    for oraciones in _oraciones(cuerpo):
        simples = [_puntuar(pieza, cuerpo[o.inicio:o.fin]) for o in oraciones]
        for i, o in enumerate(oraciones):
            candidatos = [(simples[i][0], simples[i][1], o.inicio, o.fin, o.parrafo_id)]
            if i + 1 < len(oraciones):
                sig = oraciones[i + 1]
                p_par, c_par = _puntuar(pieza, cuerpo[o.inicio:sig.fin])
                if p_par > max(simples[i][0], simples[i + 1][0]) + _MARGEN_PAR:
                    candidatos.append((p_par, c_par, o.inicio, sig.fin, o.parrafo_id))
            for c in candidatos:
                if mejor is None or c[0] > mejor[0]:
                    mejor = c
    if mejor is None or mejor[0] < umbral or not mejor[1]:
        return None
    puntaje, criterio, inicio, fin, parrafo_id = mejor
    return Pasaje(inicio=inicio, fin=fin, parrafo_id=parrafo_id, cita=cuerpo[inicio:fin],
                  puntaje=round(puntaje, 4), criterio=criterio)
