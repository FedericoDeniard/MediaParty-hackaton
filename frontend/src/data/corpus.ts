import type { JSONContent } from '@tiptap/core'

/* ============================================================
   Las notas completas del corpus de pruebas (`corpus/notas/txt/`).

   Cada archivo trae el título en la primera línea y los párrafos
   separados por una línea en blanco, el mismo corte que usa la
   ingestión del backend. Se cargan tal cual, sin recortar: el
   verificador cita posiciones sobre el texto completo.

   Los subtítulos no vienen marcados en el texto plano, así que todo
   entra como párrafo.

   Los derechos de cada nota son de su medio (ver
   `corpus/notas/README.txt`): sirven para probar el sistema dentro
   del proyecto, no para mostrarse a lectores.
   ============================================================ */

const files = import.meta.glob<string>('../../../corpus/notas/txt/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export interface CorpusNote {
  /** Número de la nota en `docs/corpus-prueba.md`, con dos dígitos. */
  number: string
  title: string
  doc: JSONContent
}

function parse(path: string, raw: string): CorpusNote {
  const number = path.split('/').pop()!.slice(0, 2)
  const [title, ...blocks] = raw
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
  return {
    number,
    title,
    doc: {
      type: 'doc',
      content: blocks.map((text) => ({ type: 'paragraph', content: [{ type: 'text', text }] })),
    },
  }
}

export const corpusNotes: CorpusNote[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => a.number.localeCompare(b.number))

export function corpusNote(number: string): CorpusNote {
  const note = corpusNotes.find((item) => item.number === number)
  if (!note) throw new Error(`No está la nota ${number} en corpus/notas/txt`)
  return note
}
