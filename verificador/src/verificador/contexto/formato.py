"""Números y fechas en el formato de la nota: coma decimal, meses en español."""
from __future__ import annotations

MESES = (
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
)
MESES_CORTOS = ("ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic")


def mes_largo(mes: str) -> str:
    """'2023-11' -> 'noviembre de 2023'."""
    return f"{MESES[int(mes[5:7]) - 1]} de {mes[:4]}"


def numero(valor: float, decimales: int = 2) -> str:
    return f"{valor:.{decimales}f}".replace(".", ",")


def porcentaje_con_signo(valor: float) -> str:
    """-40.5 -> '−40,5%'; 102.3 -> '+102%'. Con signo, para que se lea como cambio."""
    signo = "+" if valor > 0 else "−" if valor < 0 else ""
    decimales = 0 if abs(valor) >= 100 else 1
    return f"{signo}{numero(abs(valor), decimales)}%"
