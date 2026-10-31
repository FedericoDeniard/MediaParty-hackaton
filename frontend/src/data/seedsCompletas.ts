import type { JSONContent } from '@tiptap/core'
import { corpusNote } from './corpus.ts'
import { CORPUS_DE_NOTA } from './corpusDeNota.ts'
import { countWords, seedNotes as seedsRecortadas, type Note } from './notes.ts'

/* ============================================================
   Semillas con el texto completo.

   `notes.ts` trae extractos de unos pocos párrafos. El análisis (y las
   posiciones de cada cita) se hace sobre la nota entera, así que las
   notas del banco de trabajo se siembran con el texto completo del
   corpus.
   ============================================================ */

function conTextoCompleto(semilla: Note): Note {
  const numero = CORPUS_DE_NOTA[semilla.id]
  if (!numero) return semilla
  const doc = corpusNote(numero).doc
  return { ...semilla, doc, wordCount: countWords(doc) }
}

export const seedNotes: Note[] = seedsRecortadas.map(conTextoCompleto)

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
  return guardadas.map((nota) => {
    const recortada = seedsRecortadas.find((semilla) => semilla.id === nota.id)
    const completa = seedNotes.find((semilla) => semilla.id === nota.id)
    if (!recortada || !completa || recortada === completa) return nota
    if (firmaDelTexto(nota.doc) !== firmaDelTexto(recortada.doc)) return nota

    const graficos = (nota.doc.content ?? []).filter(esGrafico)
    const doc = { ...completa.doc, content: [...(completa.doc.content ?? []), ...graficos] }
    return { ...nota, doc, wordCount: countWords(doc) }
  })
}
