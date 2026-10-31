"""Cálculos puros de los contextos. Sin red, sin estado: reciben series mensuales y devuelven números."""
from __future__ import annotations

Mensual = dict[str, float]  # "AAAA-MM" -> valor
Punto = tuple[str, float]


def por_mes(puntos: list[Punto]) -> Mensual:
    """Una serie con fechas completas pasa a mes -> valor; si un mes repite, queda el último dato."""
    return {fecha[:7]: valor for fecha, valor in sorted(puntos)}


def cortar_hasta(serie: Mensual, mes_max: str) -> Mensual:
    return {mes: valor for mes, valor in serie.items() if mes <= mes_max}


def serie_real(nominal: Mensual, ipc: Mensual, base: str, hasta: str) -> list[Punto]:
    """Nominal dividido por los precios, con el mes `base` igual a 100. Omite los meses sin dato en alguna serie."""
    if base not in nominal or base not in ipc:
        return []
    referencia = nominal[base] / ipc[base]
    return [
        (mes, nominal[mes] / ipc[mes] / referencia * 100)
        for mes in sorted(nominal)
        if mes in ipc and base <= mes <= hasta
    ]


def razon(numerador: Mensual, denominador: Mensual, desde: str, hasta: str) -> list[Punto]:
    return [
        (mes, numerador[mes] / denominador[mes])
        for mes in sorted(numerador)
        if mes in denominador and desde <= mes <= hasta
    ]


def cambio_pct(serie: list[Punto]) -> float | None:
    """Variación entre el primer y el último punto, en %."""
    if len(serie) < 2 or serie[0][1] == 0:
        return None
    return (serie[-1][1] / serie[0][1] - 1) * 100


def acumulado_a_mes(nominal: Mensual, ipc: Mensual, anios: list[int], mes_fin: int, mes_ipc: str) -> list[tuple[int, float]]:
    """Suma de enero a `mes_fin` de cada año, con cada mes llevado a pesos de `mes_ipc`.

    Un año al que le falta algún mes (en el nominal o en los precios) no se devuelve: compararía períodos desiguales.
    """
    if mes_ipc not in ipc:
        return []
    resultado = []
    for anio in anios:
        meses = [f"{anio}-{m:02d}" for m in range(1, mes_fin + 1)]
        if all(m in nominal and m in ipc for m in meses):
            resultado.append((anio, sum(nominal[m] * ipc[mes_ipc] / ipc[m] for m in meses)))
    return resultado


def meses_entre(desde: str, hasta: str) -> int:
    return (int(hasta[:4]) - int(desde[:4])) * 12 + int(hasta[5:7]) - int(desde[5:7])


def ultimo_mes(serie: Mensual) -> str:
    return max(serie)


def retroceder(mes: str, cantidad: int) -> str:
    total = int(mes[:4]) * 12 + int(mes[5:7]) - 1 - cantidad
    return f"{total // 12}-{total % 12 + 1:02d}"
