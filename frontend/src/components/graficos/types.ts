/* ============================================================
   Contrato de los gráficos que arma el sistema.

   Espeja los modelos de `verificador/src/verificador/contexto/modelos.py`
   y `graficos.py`. El backend los guarda como una fila `graficos` de
   `enrichments` (`GraficosNota.model_dump(mode="json")`).
   ============================================================ */

export interface PuntoContexto {
  /** Mes ISO, `AAAA-MM`. */
  x: string
  y: number
}

export interface SerieContexto {
  clave: string
  nombre: string
  puntos: PuntoContexto[]
  /** Variación entre el primer y el último punto, en %. */
  cambio_pct: number | null
}

export interface BarraContexto {
  etiqueta: string
  valor: number
  destacada: boolean
}

export interface FuenteContexto {
  nombre: string
  institucion: string
  id: string
  enlace: string
  /** `AAAA-MM` del último dato usado. */
  ultimo_dato: string
  rezago_meses: number
  origen_datos: 'api' | 'guardado'
}

/** Un gráfico de contexto horizontal: no repite la nota, la completa con datos oficiales. */
export interface GraficoContexto {
  id: string
  visual: 'lineas' | 'barras' | 'ranking'
  /** Lo arma el código con los números calculados: dice el hallazgo, sin veredicto. */
  titulo: string
  unidad: string
  /** Línea de referencia (por ejemplo 100 en las bases). */
  referencia: number | null
  series: SerieContexto[]
  barras: BarraContexto[]
  fuentes: FuenteContexto[]
  como_leerlo: string
  advertencias: string[]
  /** Por qué se sugiere para esta nota, en palabras de la nota. */
  motivos: string[]
}

export interface GraficosNota {
  graficos: unknown[]
  contextos: GraficoContexto[]
  avisos: string[]
}
