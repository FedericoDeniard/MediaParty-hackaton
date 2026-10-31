import type { JSONContent } from '@tiptap/core'
import { corpusNote, corpusNotes } from './corpus.ts'

/* ============================================================
   El modelo de una nota.

   `doc` es el documento de Tiptap y es la única fuente de verdad.
   El texto plano nunca se guarda: se deriva con `getText`, que ya
   corta por línea en blanco como espera la ingestión del pipeline.

   Los estados son dominio cerrado: uniones de literales, no
   `enum` (el tsconfig exige `erasableSyntaxOnly`).
   ============================================================ */

export type NoteStatus = 'draft' | 'review' | 'published'

export type EnrichmentType = 'puntos_clave' | 'pregunta_probable' | 'dato_oficial'

export type EnrichmentStatus = 'pendiente' | 'aprobada' | 'descartada'

export interface Note {
  id: string
  title: string
  doc: JSONContent
  status: NoteStatus
  niche: string | null
  wordCount: number
  createdAt: string
  updatedAt: string
}

export interface Enrichment {
  id: string
  noteId: string
  type: EnrichmentType
  text: string
  /** Texto literal de la nota que respalda la pieza. Es lo que se resalta. */
  citation: string | null
  status: EnrichmentStatus
}

/* ---- Texto y conteo ---- */

function docText(node: JSONContent): string {
  if (typeof node.text === 'string') return node.text
  if (!node.content) return ''
  return node.content.map(docText).join(' ')
}

export function countWords(doc: JSONContent): number {
  return docText(doc).split(/\s+/).filter(Boolean).length
}

/* ---- Etiquetas ---- */

export const noteStatusLabels: Record<NoteStatus, string> = {
  draft: 'Borrador',
  review: 'En revisión',
  published: 'Publicada',
}

export const enrichmentTypeLabels: Record<EnrichmentType, string> = {
  puntos_clave: 'Puntos clave',
  pregunta_probable: 'Pregunta probable',
  dato_oficial: 'Dato oficial',
}

/* ============================================================
   Semillas.

   Los textos salen del corpus de pruebas (`corpus/notas/`): 19
   notas reales de la semana del 24 al 31 de octubre de 2026,
   usadas acá sólo para que la mesa de trabajo arranque con
   contenido y no con líneas deguidado.

   Cada piece de enriquecimiento cita un fragmento literal del
   documento, que es lo que el editor resalta al aprobarla.
   ============================================================ */

const handSeeds: Note[] = [
  {
    id: 'n-01',
    title: 'A cuánto llegará el índice de inflación de octubre según las consultoras',
    status: 'review',
    niche: 'economía',
    createdAt: '2026-10-27T14:20:00.000Z',
    updatedAt: '2026-10-31T09:12:00.000Z',
    doc: corpusNote('01').doc,
    wordCount: 0,
  },
  {
    id: 'n-02',
    title: 'La inflación se resiste a bajar del 2%',
    status: 'draft',
    niche: 'economía',
    createdAt: '2026-10-24T10:05:00.000Z',
    updatedAt: '2026-10-30T17:41:00.000Z',
    doc: corpusNote('02').doc,
    wordCount: 0,
  },
  {
    id: 'n-03',
    title: 'Con cambios, el Senado aprobó y giró a Diputados la reforma a la ley de salud mental',
    status: 'draft',
    niche: 'política',
    createdAt: '2026-10-29T08:30:00.000Z',
    updatedAt: '2026-10-31T08:02:00.000Z',
    doc: corpusNote('07').doc,
    wordCount: 0,
  },
  {
    id: 'n-04',
    title: 'Visita del papa León XIV: cómo quedan los feriados de noviembre',
    status: 'published',
    niche: 'sociedad',
    createdAt: '2026-10-26T11:00:00.000Z',
    updatedAt: '2026-10-29T19:26:00.000Z',
    doc: corpusNote('13').doc,
    wordCount: 0,
  },
  {
    id: 'n-05',
    title: 'La calculadora del Superclásico',
    status: 'published',
    niche: 'deportes',
    createdAt: '2026-10-30T09:15:00.000Z',
    updatedAt: '2026-10-30T21:03:00.000Z',
    doc: corpusNote('17').doc,
    wordCount: 0,
  },
  {
    id: 'n-06',
    title: 'La Liga Profesional usará el fuera de juego semiautomático desde la final del Clausura',
    status: 'review',
    niche: 'deportes',
    createdAt: '2026-10-30T12:40:00.000Z',
    updatedAt: '2026-10-31T11:48:00.000Z',
    doc: corpusNote('19').doc,
    wordCount: 0,
  },
]

/* El resto del corpus entra como borrador, con el nicho de su sección
   en `docs/corpus-prueba.md` y la fecha de publicación de la nota. */
const corpusMeta: Record<string, [niche: string, date: string]> = {
  '03': ['economía', '2026-10-28'],
  '04': ['economía', '2026-10-26'],
  '05': ['economía', '2026-10-29'],
  '06': ['economía', '2026-10-29'],
  '08': ['política', '2026-10-27'],
  '09': ['política', '2026-10-27'],
  '10': ['política', '2026-10-24'],
  '11': ['política', '2026-10-31'],
  '12': ['sociedad', '2026-10-31'],
  '14': ['sociedad', '2026-10-28'],
  '15': ['sociedad', '2026-10-26'],
  '16': ['deportes', '2026-10-28'],
}

export const seedNotes: Note[] = [
  ...handSeeds,
  ...corpusNotes
    .filter((note) => note.number in corpusMeta)
    .map((note): Note => {
      const [niche, date] = corpusMeta[note.number]
      const at = `${date}T12:00:00.000Z`
      return {
        id: `n-corpus-${note.number}`,
        title: note.title,
        doc: note.doc,
        status: 'draft',
        niche,
        wordCount: 0,
        createdAt: at,
        updatedAt: at,
      }
    }),
]

export const seedEnrichments: Enrichment[] = [
  {
    id: 'e-01',
    noteId: 'n-01',
    type: 'puntos_clave',
    text: 'Octubre se ubicaría en 1,8% mensual, la segunda marca más baja en más de un año.',
    citation: 'Las estimaciones privadas ubican la variación mensual de octubre en 1,8%',
    status: 'aprobada',
  },
  {
    id: 'e-02',
    noteId: 'n-01',
    type: 'pregunta_probable',
    text: '¿Cuándo se publica el dato oficial de octubre?',
    citation: null,
    status: 'pendiente',
  },
  {
    id: 'e-03',
    noteId: 'n-01',
    type: 'dato_oficial',
    text: 'IPC de octubre: 1,8% según relevamientos privados; el dato oficial se publica el 12 de noviembre.',
    citation: 'El dato de 1,8% se repite en distintos relevamientos',
    status: 'pendiente',
  },
  {
    id: 'e-04',
    noteId: 'n-06',
    type: 'puntos_clave',
    text: 'El SAOT llega con la final del Clausura 2026 y es total desde el Clausura 2027.',
    citation: 'a partir de la final del Torneo Clausura 2026',
    status: 'aprobada',
  },
  {
    id: 'e-05',
    noteId: 'n-06',
    type: 'pregunta_probable',
    text: '¿Qué costo tendrá la implementación en cada estadio?',
    citation: null,
    status: 'pendiente',
  },
  {
    id: 'e-06',
    noteId: 'n-03',
    type: 'puntos_clave',
    text: 'La prohibición de crear manicomios se mantiene, y la internación sigue siendo excepcional.',
    citation: 'Esa restricción seguirá vigente y se considera a la internación como una medida de carácter excepcional',
    status: 'pendiente',
  },
  {
    id: 'e-07',
    noteId: 'n-05',
    type: 'dato_oficial',
    text: 'River marcha 7° en la Tabla Anual con 52 puntos, dentro de la zona Sudamericana.',
    citation: 'Los de Núñez hoy figuran 7° en la Tabla Anual con 52 puntos',
    status: 'aprobada',
  },
  {
    id: 'e-08',
    noteId: 'n-02',
    type: 'pregunta_probable',
    text: '¿Qué peso tiene la estacionalidad en el precio de los alimentos?',
    citation: null,
    status: 'pendiente',
  },
]
