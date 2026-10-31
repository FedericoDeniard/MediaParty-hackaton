import type { JSONContent } from '@tiptap/core'
import { corpusNote } from './corpus.ts'
import { CORPUS_DE_NOTA } from './corpusDeNota.ts'
import { ejemplos } from './graficos-ejemplos.ts'
import { countWords, seedNotes as seedsRecortadas, type Note } from './notes.ts'

/* ============================================================
   Semillas con el texto completo.

   `notes.ts` trae extractos de unos pocos párrafos. El análisis (y las
   posiciones de cada cita) se hace sobre la nota entera, así que las
   notas del banco de trabajo se siembran con el texto completo del
   corpus.

   Solo se siembran las notas en las que el motor tiene gráficos para
   recomendar: el banco de trabajo muestra el flujo completo en todas
   y no deja notas donde el análisis no aporta nada.
   ============================================================ */

function tieneRecomendaciones(id: string): boolean {
  const clave = CORPUS_DE_NOTA[id]
  return clave !== undefined && (ejemplos[clave]?.datos.contextos.length ?? 0) > 0
}

function conTextoCompleto(semilla: Note): Note {
  const numero = CORPUS_DE_NOTA[semilla.id]
  if (!numero) return semilla
  const doc = corpusNote(numero).doc
  return { ...semilla, doc, wordCount: countWords(doc) }
}

export const seedNotes: Note[] = seedsRecortadas.filter((nota) => tieneRecomendaciones(nota.id)).map(conTextoCompleto)

const esGrafico = (bloque: JSONContent) => bloque.type === 'grafico'

function textoDe(nodo: JSONContent): string {
  if (typeof nodo.text === 'string') return nodo.text
  return (nodo.content ?? []).map(textoDe).join('')
}

/** El texto de la nota sin los gráficos, bloque por bloque. Compara el contenido y no la forma exacta del JSON,
    que el editor normaliza al guardar: ignora los bloques vacíos, porque al agregar un gráfico al final el
    editor deja un párrafo vacío detrás. */
function firmaDelTexto(doc: JSONContent): string {
  return (doc.content ?? [])
    .filter((bloque) => !esGrafico(bloque) && textoDe(bloque) !== '')
    .map((bloque) => `${bloque.type}:${textoDe(bloque)}`)
    .join('\n')
}

/**
 * Reemplaza por el texto completo las notas ya guardadas que siguen siendo el extracto sin editar,
 * y conserva los gráficos que la autora haya agregado. Una nota cuyo texto editó no se toca.
 */
export function completarNotasGuardadas(guardadas: Note[]): Note[] {
  return guardadas.flatMap((nota) => {
    const recortada = seedsRecortadas.find((semilla) => semilla.id === nota.id)
    if (!recortada) return [nota]
    // Sin editar: sigue siendo el extracto o ya es el texto completo del corpus (migración anterior).
    const firma = firmaDelTexto(nota.doc)
    const sinEditar = firma === firmaDelTexto(recortada.doc) || firma === firmaDelTexto(conTextoCompleto(recortada).doc)
    const completa = seedNotes.find((semilla) => semilla.id === nota.id)
    if (!completa) return sinEditar ? [] : [nota] // semilla sin recomendaciones: sale del banco de trabajo
    if (recortada === completa || !sinEditar) return [nota]

    const graficos = (nota.doc.content ?? []).filter(esGrafico)
    const doc = { ...completa.doc, content: [...(completa.doc.content ?? []), ...graficos] }
    return [{ ...nota, doc, wordCount: countWords(doc) }]
  })
}
