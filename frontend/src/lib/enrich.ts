import type { Enrichment, Note } from '../data/notes.ts'
import { plainText, replaceEnrichments } from './noteStore.ts'

/* ============================================================
   Cliente del backend de enriquecimiento (`backend/`).

   `POST /articles` guarda la nota y arranca los agentes; cada uno
   escribe su fila en `enrichments` (`pending` → `running` →
   `done` | `error`). Acá se consulta cada pocos segundos hasta que
   ninguna fila quede abierta, y lo que llegó se traduce a las piezas
   del panel. Vite redirige `/api` al backend (ver `vite.config.ts`).

   Sólo se traducen piezas que el código del backend respalda:
   - `dato_oficial`: las tarjetas del verificador que cruzaron una
     cifra con una serie oficial, con la cita copiada de la nota.
   - `pregunta_probable`: las preguntas de seguimiento del agente
     editorial. No tienen cita: son lo que la nota no responde.
   ============================================================ */

export type RowStatus = 'pending' | 'running' | 'done' | 'error'

export interface EnrichmentRow {
  kind: string
  status: RowStatus
  error: string | null
  data: Record<string, unknown> | null
}

interface Card {
  id: string
  cita: string
  destacada: boolean
  bloqueada: boolean
  tarjeta: {
    dicho: { valor: number; indicador: string | null; periodo: string | null }
    serie: { fuente: string; nombre: string; valor: number; fecha_dato: string } | null
    resultado: 'coincide' | 'difiere' | 'sin_serie' | 'sin_dato_oficial' | 'error_fuente'
  }
}

const POLL_MS = 3000
const TIMEOUT_MS = 10 * 60 * 1000

const sources: Record<string, string> = {
  bcra: 'BCRA',
  datosgob: 'INDEC (datos.gob.ar)',
  bancomundial: 'Banco Mundial',
}

const number = (value: number) => value.toLocaleString('es-AR', { maximumFractionDigits: 2 })

function cardText({ tarjeta: { dicho, serie, resultado } }: Card): string | null {
  if (resultado === 'sin_dato_oficial') {
    return `${dicho.indicador ?? 'Esta cifra'}: todavía no hay dato oficial${dicho.periodo ? ` para ${dicho.periodo}` : ''}.`
  }
  if (!serie) return null
  const official = `${serie.nombre} (${sources[serie.fuente] ?? serie.fuente}) da ${number(serie.valor)} al ${serie.fecha_dato}`
  if (resultado === 'coincide') return `La nota dice ${number(dicho.valor)} y coincide: ${official}.`
  if (resultado === 'difiere') return `La nota dice ${number(dicho.valor)}; ${official}.`
  return null
}

export function toEnrichments(noteId: string, rows: EnrichmentRow[]): Enrichment[] {
  const data = (kind: string) => rows.find((row) => row.kind === kind && row.status === 'done')?.data

  const cards = ((data('validation')?.tarjetas ?? []) as Card[])
    .filter((card) => card.destacada && !card.bloqueada)
    .flatMap((card): Enrichment[] => {
      const text = cardText(card)
      return text
        ? [{ id: `${noteId}-dato-${card.id}`, noteId, type: 'dato_oficial', text, citation: card.cita, status: 'pendiente' }]
        : []
    })

  const questions = ((data('editorial')?.follow_up_questions ?? []) as string[]).map(
    (text, index): Enrichment => ({
      id: `${noteId}-pregunta-${index}`,
      noteId,
      type: 'pregunta_probable',
      text,
      citation: null,
      status: 'pendiente',
    }),
  )

  return [...cards, ...questions]
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`/api${path}`, init)
  if (!response.ok) throw new Error(`El backend respondió ${response.status}`)
  return response.json() as Promise<T>
}

/* Manda la nota al backend y espera a que terminen los agentes.
   `onProgress` recibe las filas en cada consulta, para mostrar qué
   está corriendo. */
export async function analyzeNote(
  note: Note,
  onProgress: (rows: EnrichmentRow[]) => void,
): Promise<EnrichmentRow[]> {
  const { id } = await request<{ id: string }>('/articles', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    /* El cuerpo tiene que ser exactamente el texto que se ve: las citas
       del verificador son posiciones sobre este string. */
    body: JSON.stringify({
      title: note.title,
      body: plainText(note.doc),
      niche: note.niche,
      published_at: note.createdAt.slice(0, 10),
    }),
  })

  const started = Date.now()
  for (;;) {
    const { enrichments: rows } = await request<{ enrichments: EnrichmentRow[] }>(`/articles/${id}`)
    onProgress(rows)
    if (rows.every((row) => row.status === 'done' || row.status === 'error')) {
      replaceEnrichments(note.id, toEnrichments(note.id, rows))
      return rows
    }
    if (Date.now() - started > TIMEOUT_MS) throw new Error('El análisis tardó demasiado')
    await new Promise((resolve) => setTimeout(resolve, POLL_MS))
  }
}
