import type { GraficosNota } from './types.ts'

/* ============================================================
   El recorrido del motor.

   Cada paso sale de una fila real de `enrichments` que el backend ya
   escribe (afirmaciones, entidades, línea de tiempo, validación,
   gráficos). Es una función pura: a medida que llegan las filas por
   tiempo real, aparecen más pasos. Como cada paso dice lo que el motor
   encontró en ESA nota, ninguna nota se analiza igual a otra.
   ============================================================ */

export type FasePaso = 'lectura' | 'agentes' | 'verificacion' | 'cifras' | 'contexto' | 'armado' | 'listo'

export interface Paso {
  fase: FasePaso
  texto: string
}

export const ETIQUETAS_FASE: Record<FasePaso, string> = {
  lectura: 'Lectura',
  agentes: 'Agentes',
  verificacion: 'Verificación',
  cifras: 'Cifras',
  contexto: 'Contexto',
  armado: 'Armado',
  listo: 'Listo',
}

const NOMBRES_DE_CONTEXTO: Record<string, string> = {
  poder_adquisitivo: 'poder adquisitivo del salario mínimo, el haber y la AUH',
  cobertura_canasta: 'cobertura de la canasta básica',
  salarios_por_sector: 'salarios reales por sector',
  universidades_constantes: 'transferencias a universidades en pesos constantes',
}

interface TarjetaResumida {
  tarjeta: {
    dicho: { texto: string }
    resultado: string
    serie: { nombre: string; valor: number } | null
  }
}

/** Solo los campos que usa el recorrido: la fila real trae muchos más. */
export interface FilasDeAnalisis {
  claims?: { claims: unknown[] }
  entities?: { nodes: { name: string; mentions: number }[] }
  timeline?: { events: unknown[] }
  validation?: { verificacion: { resumen: Record<string, number> }; tarjetas: TarjetaResumida[] }
  graficos?: GraficosNota
}

const MAX_CRUCES = 4
const MAX_NOMBRES = 3

function unir(partes: string[]): string {
  if (partes.length <= 1) return partes.join('')
  return `${partes.slice(0, -1).join(', ')} y ${partes[partes.length - 1]}`
}

function coma(valor: number): string {
  return String(valor).replace('.', ',')
}

function pasosDeAgentes(filas: FilasDeAnalisis): Paso[] {
  const partes: string[] = []
  if (filas.claims) partes.push(`${filas.claims.claims.length} afirmaciones`)
  if (filas.entities) partes.push(`${filas.entities.nodes.length} entidades`)
  if (filas.timeline) partes.push(`${filas.timeline.events.length} eventos`)
  if (partes.length === 0) return []

  const pasos: Paso[] = [{ fase: 'agentes', texto: `Los agentes analizaron la nota: ${unir(partes)}.` }]
  const principales = [...(filas.entities?.nodes ?? [])]
    .sort((a, b) => b.mentions - a.mentions)
    .slice(0, MAX_NOMBRES)
  if (principales.length > 0) {
    pasos.push({ fase: 'agentes', texto: `Los nombres que más aparecen: ${principales.map((n) => n.name).join(', ')}.` })
  }
  return pasos
}

function pasosDeValidacion(filas: FilasDeAnalisis): Paso[] {
  const validacion = filas.validation
  if (!validacion) return []

  const estados = validacion.verificacion.resumen
  const total = Object.values(estados).reduce((suma, n) => suma + n, 0)
  const enElTexto = (estados.ok ?? 0) + (estados.parafraseada ?? 0)
  const pasos: Paso[] = [
    {
      fase: 'verificacion',
      texto: `Compruebo contra el texto de la nota lo que dijeron los agentes: ${total} elementos revisados, ${enElTexto} se encuentran en el texto y ${total - enElTexto} quedan marcados para revisar.`,
    },
  ]

  const conSerie = validacion.tarjetas.filter((t) => t.tarjeta.serie)
  pasos.push({
    fase: 'cifras',
    texto: `Detecto ${validacion.tarjetas.length} cifras en la nota; ${conSerie.length} tienen una serie oficial en el catálogo.`,
  })
  for (const { tarjeta } of conSerie.slice(0, MAX_CRUCES)) {
    const serie = tarjeta.serie
    if (!serie) continue
    pasos.push({
      fase: 'cifras',
      texto: `Cruzo «${tarjeta.dicho.texto.slice(0, 70)}» con ${serie.nombre}: ${tarjeta.resultado.replaceAll('_', ' ')} (dato oficial ${coma(serie.valor)}).`,
    })
  }
  if (conSerie.length === 0) {
    pasos.push({
      fase: 'cifras',
      texto: 'Ninguna cifra de esta nota tiene una serie oficial verificada, así que no las comparo: prefiero no inventar un cruce.',
    })
  }
  return pasos
}

function pasosDeGraficos(filas: FilasDeAnalisis): Paso[] {
  const graficos = filas.graficos
  if (!graficos) return []

  const pasos: Paso[] = graficos.contextos.map((c) => ({
    fase: 'contexto' as const,
    texto: `La nota menciona ${c.motivos.join(', ')}: elijo el contexto de ${NOMBRES_DE_CONTEXTO[c.id] ?? c.id}.`,
  }))
  if (graficos.contextos.length === 0) {
    pasos.push({
      fase: 'contexto',
      texto: 'Ningún contexto del catálogo encaja con esta nota: prefiero no armar un gráfico que no aporte.',
    })
  }
  for (const c of graficos.contextos) pasos.push({ fase: 'armado', texto: `Armé: ${c.titulo}` })

  const cuantos = graficos.graficos.length + graficos.contextos.length
  pasos.push({ fase: 'listo', texto: `Listo: ${cuantos} ${cuantos === 1 ? 'gráfico' : 'gráficos'} para esta nota.` })
  return pasos
}

/** Los pasos que corresponden a las filas que ya llegaron. `cuerpo` (opcional) agrega el paso de lectura. */
export function pasosDeAnalisis(filas: FilasDeAnalisis, cuerpo?: string): Paso[] {
  const lectura: Paso[] = cuerpo
    ? [
        {
          fase: 'lectura',
          texto: `Leo la nota: ${cuerpo.split(/\n\s*\n/).filter(Boolean).length} párrafos y ${cuerpo.split(/\s+/).filter(Boolean).length} palabras.`,
        },
      ]
    : []
  return [...lectura, ...pasosDeAgentes(filas), ...pasosDeValidacion(filas), ...pasosDeGraficos(filas)]
}
