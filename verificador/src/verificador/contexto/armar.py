"""Arma los gráficos de contexto: trae las series, las corta donde corresponde y calcula. El modelo no pone ninguna cifra."""
from __future__ import annotations

from datetime import date
from pathlib import Path

from ..series.datosgob import enlace_datosgob
from ..series.modelos import ErrorFuente
from .calculos import (
    Mensual,
    acumulado_a_mes,
    cambio_pct,
    cortar_hasta,
    meses_entre,
    por_mes,
    razon,
    retroceder,
    serie_real,
    ultimo_mes,
)
from . import deportes
from .catalogo import MES_BASE, ContextoDef, SerieRef, contexto
from .formato import MESES_CORTOS, mes_largo, numero, porcentaje_con_signo
from .modelos import BarraContexto, FuenteContexto, GraficoContexto, PuntoContexto, SerieContexto
from .selector import elegir_contextos
from .series import Origen, cargar_serie

VENTANA_COBERTURA_MESES = 36
ANIO_INICIAL_UNIVERSIDADES = 2023
BILLON = 1_000_000  # las transferencias vienen en millones de pesos: un billón es un millón de millones


class _Datos:
    """Las series de un contexto ya cargadas y cortadas en el mes en curso."""

    def __init__(self, definicion: ContextoDef, mes_ref: str, modo: str, directorio: Path | None) -> None:
        self.mes_ref = mes_ref
        self.por_rol: dict[str, Mensual] = {}
        self.cortadas: list[str] = []  # roles con meses posteriores al mes en curso (escalas ya fijadas)
        self.referencias: dict[str, SerieRef] = {}
        self.origenes: dict[str, Origen] = {}
        for ref in definicion.series:
            puntos, origen = cargar_serie(ref, modo, directorio)
            completa = por_mes(puntos)
            recortada = cortar_hasta(completa, mes_ref)
            if len(recortada) < len(completa):
                self.cortadas.append(ref.rol)
            if not recortada:
                raise ErrorFuente(f"datos.gob.ar {ref.id} no tiene datos hasta {mes_ref}")
            self.por_rol[ref.rol] = recortada
            self.referencias[ref.rol] = ref
            self.origenes[ref.rol] = origen

    def fuente(self, rol: str) -> FuenteContexto:
        ref, serie = self.referencias[rol], self.por_rol[rol]
        ultimo = ultimo_mes(serie)
        return FuenteContexto(
            nombre=ref.nombre,
            institucion=ref.institucion,
            id=ref.id,
            enlace=enlace_datosgob(ref.id),
            ultimo_dato=ultimo,
            rezago_meses=meses_entre(ultimo, self.mes_ref),
            origen_datos=self.origenes[rol],
        )


def _serie(clave: str, nombre: str, puntos: list[tuple[str, float]]) -> SerieContexto:
    return SerieContexto(
        clave=clave,
        nombre=nombre,
        puntos=[PuntoContexto(x=mes, y=valor) for mes, valor in puntos],
        cambio_pct=cambio_pct(puntos),
    )


def _advertencias(definicion: ContextoDef, datos: _Datos) -> list[str]:
    extra = []
    if "smvm" in datos.cortadas:
        extra.append(
            f"Los montos del salario mínimo posteriores a {mes_largo(datos.mes_ref)} son escalas ya fijadas, no observadas: no se muestran."
        )
    return list(definicion.advertencias) + extra


def _cambios(series: list[SerieContexto]) -> dict[str, str]:
    return {s.clave: porcentaje_con_signo(s.cambio_pct) if s.cambio_pct is not None else "s/d" for s in series}


def _poder_adquisitivo(definicion: ContextoDef, datos: _Datos) -> dict:
    ipc = datos.por_rol["ipc"]
    hasta = ultimo_mes(ipc)
    series = [
        _serie(rol, datos.referencias[rol].nombre, serie_real(datos.por_rol[rol], ipc, MES_BASE, hasta))
        for rol in ("smvm", "haber", "auh")
    ]
    c = _cambios(series)
    return {
        "series": series,
        "referencia": 100.0,
        "unidad": f"poder adquisitivo, base 100 = {mes_largo(MES_BASE)}",
        "titulo": (
            f"Poder adquisitivo entre {mes_largo(MES_BASE)} y {mes_largo(hasta)}: "
            f"salario mínimo {c['smvm']}, haber mínimo {c['haber']} y AUH {c['auh']}"
        ),
        "base": mes_largo(MES_BASE),
        "roles": ("smvm", "haber", "auh", "ipc"),
    }


def _cobertura_canasta(definicion: ContextoDef, datos: _Datos) -> dict:
    cbt = datos.por_rol["cbt"]
    hasta = ultimo_mes(cbt)
    desde = retroceder(hasta, VENTANA_COBERTURA_MESES - 1)
    smvm = razon(datos.por_rol["smvm"], cbt, desde, hasta)
    haber = razon(datos.por_rol["haber"], cbt, desde, hasta)
    series = [_serie("smvm", "Salario mínimo", smvm), _serie("haber", "Haber mínimo", haber)]
    return {
        "series": series,
        "referencia": 1.0,
        "unidad": "canastas básicas totales por adulto equivalente",
        "titulo": (
            f"En {mes_largo(hasta)} un salario mínimo equivale a {numero(smvm[-1][1])} canastas básicas "
            f"y un haber mínimo a {numero(haber[-1][1])} (en {mes_largo(desde)}: {numero(smvm[0][1])} y {numero(haber[0][1])})"
        ),
        "base": mes_largo(desde),
        "roles": ("smvm", "haber", "cbt"),
    }


def _salarios_por_sector(definicion: ContextoDef, datos: _Datos) -> dict:
    roles = ("privado", "publico", "registrado")
    hasta = min(ultimo_mes(datos.por_rol[r]) for r in (*roles, "ipc"))
    ipc = datos.por_rol["ipc"]
    series = [
        _serie(rol, datos.referencias[rol].nombre, serie_real(datos.por_rol[rol], ipc, MES_BASE, hasta)) for rol in roles
    ]
    c = _cambios(series)
    return {
        "series": series,
        "referencia": 100.0,
        "unidad": f"poder adquisitivo del salario, base 100 = {mes_largo(MES_BASE)}",
        "titulo": (
            f"Salarios registrados en términos reales entre {mes_largo(MES_BASE)} y {mes_largo(hasta)}: "
            f"privado {c['privado']}, público {c['publico']} y total {c['registrado']}"
        ),
        "base": mes_largo(MES_BASE),
        "roles": (*roles, "ipc"),
    }


def _universidades_constantes(definicion: ContextoDef, datos: _Datos) -> dict:
    transferencias, ipc = datos.por_rol["universidades"], datos.por_rol["ipc"]
    mes_ipc = ultimo_mes(ipc)
    tope = min(ultimo_mes(transferencias), mes_ipc)
    mes_fin = int(tope[5:7])
    anios = list(range(ANIO_INICIAL_UNIVERSIDADES, int(tope[:4]) + 1))
    acumulados = acumulado_a_mes(transferencias, ipc, anios, mes_fin, mes_ipc)
    if len(acumulados) < 2:
        raise ErrorFuente("no hay años completos para comparar las transferencias a universidades")
    periodo = f"ene–{MESES_CORTOS[mes_fin - 1]}"
    barras = [
        BarraContexto(etiqueta=f"{periodo} {anio}", valor=total / BILLON, destacada=(anio == acumulados[-1][0]))
        for anio, total in acumulados
    ]
    primero, ultimo = barras[0], barras[-1]
    variacion = porcentaje_con_signo((ultimo.valor / primero.valor - 1) * 100)
    return {
        "barras": barras,
        "unidad": f"billones de pesos de {mes_largo(mes_ipc)}",
        "titulo": (
            f"Transferencias a universidades, en pesos de {mes_largo(mes_ipc)}: {numero(ultimo.valor)} billones "
            f"en {ultimo.etiqueta} contra {numero(primero.valor)} en {primero.etiqueta} ({variacion})"
        ),
        "mes_ipc": mes_largo(mes_ipc),
        "roles": ("universidades", "ipc"),
    }


_CONSTRUCTORES = {
    "poder_adquisitivo": _poder_adquisitivo,
    "cobertura_canasta": _cobertura_canasta,
    "salarios_por_sector": _salarios_por_sector,
    "universidades_constantes": _universidades_constantes,
}


def armar_contexto(
    clave: str,
    *,
    fecha_referencia: date,
    modo: str = "guardado",
    directorio: Path | None = None,
    motivos: tuple[str, ...] = (),
) -> GraficoContexto:
    """El gráfico de contexto `clave` con los datos al `fecha_referencia`. Lanza ErrorFuente si falta una serie."""
    definicion = contexto(clave)
    mes_ref = fecha_referencia.strftime("%Y-%m")
    if clave in deportes.CONSTRUCTORES:  # los datos de fútbol salen siempre de copias guardadas, no de datos.gob.ar
        armado = deportes.CONSTRUCTORES[clave](mes_ref, directorio)
        fuentes, advertencias = armado["fuentes"], [*definicion.advertencias, *armado["advertencias"]]
    else:
        datos = _Datos(definicion, mes_ref, modo, directorio)
        armado = _CONSTRUCTORES[clave](definicion, datos)
        fuentes, advertencias = [datos.fuente(rol) for rol in armado["roles"]], _advertencias(definicion, datos)
    leer = definicion.como_leerlo.format(base=armado.get("base", ""), mes_ipc=armado.get("mes_ipc", ""))
    return GraficoContexto(
        id=clave,
        visual=definicion.visual,
        titulo=armado["titulo"],
        unidad=armado["unidad"],
        referencia=armado.get("referencia"),
        series=armado.get("series", []),
        barras=armado.get("barras", []),
        fuentes=fuentes,
        como_leerlo=leer,
        advertencias=advertencias,
        motivos=list(motivos),
    )


def armar_contextos(
    texto: str,
    *,
    fecha_referencia: date,
    modo: str = "guardado",
    directorio: Path | None = None,
    maximo: int = 2,
) -> tuple[list[GraficoContexto], list[str]]:
    """Elige los contextos que encajan con la nota y los arma. Un contexto que falla avisa y no tira a los demás."""
    graficos: list[GraficoContexto] = []
    avisos: list[str] = []
    for eleccion in elegir_contextos(texto, maximo):
        try:
            graficos.append(
                armar_contexto(
                    eleccion.clave,
                    fecha_referencia=fecha_referencia,
                    modo=modo,
                    directorio=directorio,
                    motivos=eleccion.motivos,
                )
            )
        except ErrorFuente as exc:
            avisos.append(f"no se pudo armar el contexto {eleccion.clave}: {exc}")
    return graficos, avisos
