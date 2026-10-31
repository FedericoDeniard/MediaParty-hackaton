import type { GraficoContexto } from './types.ts'

/** "Datos oficiales" solo si todas las fuentes lo son: lo que sale de Wikipedia se dice distinto. */
export function etiquetaDeDatos(grafico: GraficoContexto): string {
  const colaborativa = grafico.fuentes.some((fuente) => fuente.institucion.includes('Wikipedia'))
  return colaborativa ? 'Contexto · datos de Wikipedia' : 'Contexto · datos oficiales'
}
