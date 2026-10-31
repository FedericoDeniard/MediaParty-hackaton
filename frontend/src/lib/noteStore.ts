import type { JSONContent } from '@tiptap/core'
import {
  countWords,
  seedEnrichments,
  seedNotes,
  type Enrichment,
  type EnrichmentStatus,
  type Note,
  type NoteStatus,
} from '../data/notes.ts'

/* ============================================================
   Store mock.

   Todo vive en `localStorage`: la mesa de trabajo sobrevive a un
   refresh y el editor se puede probar sin backend.

   La interfaz es angosta a propósito (list / get / create / update /
   remove). Cuando llegue Supabase, se cambia la implementación de
   estas funciones y no las pantallas.
   ============================================================ */

const NOTES_KEY = 'nexo.notes.v1'
const ENRICHMENTS_KEY = 'nexo.enrichments.v1'

function read<T>(key: string, fallback: T): T {
  if (typeof localStorage === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Sin espacio o en modo privado: la sesión sigue en memoria.
  }
}

function loadNotes(): Note[] {
  const notes = read<Note[]>(NOTES_KEY, [])
  if (notes.length > 0) return notes
  const seeded = seedNotes.map((note) => ({ ...note, wordCount: countWords(note.doc) }))
  write(NOTES_KEY, seeded)
  return seeded
}

function loadEnrichments(): Enrichment[] {
  const items = read<Enrichment[]>(ENRICHMENTS_KEY, [])
  if (items.length > 0) return items
  write(ENRICHMENTS_KEY, seedEnrichments)
  return seedEnrichments
}

let notes: Note[] = loadNotes()
let enrichments: Enrichment[] = loadEnrichments()

const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function persist() {
  write(NOTES_KEY, notes)
  write(ENRICHMENTS_KEY, enrichments)
  invalidate()
  emit()
}

/* `useSyncExternalStore` exige que el snapshot devuelva la misma
   referencia mientras nada cambia. Las listas se cachean y se
   invalidan en cada escritura: sin esto, cada render crea un array
   nuevo y React entra en loop. */
let notesCache: Note[] = []
let publishedCache: Note[] = []
const enrichmentCache = new Map<string, Enrichment[]>()

function invalidate() {
  notesCache = [...notes].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  publishedCache = notesCache.filter((note) => note.status === 'published')
  enrichmentCache.clear()
}

invalidate()

/* ---- Notas ---- */

export function listNotes(status?: NoteStatus): Note[] {
  return status === 'published' ? publishedCache : notesCache
}

export function getNote(id: string): Note | undefined {
  return notes.find((note) => note.id === id)
}

export function createNote(input?: Partial<Pick<Note, 'title' | 'niche' | 'status'>>): Note {
  const now = new Date().toISOString()
  const note: Note = {
    id: `n-${Date.now().toString(36)}`,
    title: input?.title ?? 'Sin título',
    doc: { type: 'doc', content: [{ type: 'paragraph' }] },
    status: input?.status ?? 'draft',
    niche: input?.niche ?? null,
    wordCount: 0,
    createdAt: now,
    updatedAt: now,
  }
  notes = [note, ...notes]
  persist()
  return note
}

export function updateNote(
  id: string,
  patch: Partial<Pick<Note, 'title' | 'doc' | 'status' | 'niche'>>,
): Note | undefined {
  const index = notes.findIndex((note) => note.id === id)
  if (index === -1) return undefined

  const current = notes[index]
  const next: Note = {
    ...current,
    ...patch,
    wordCount: patch.doc ? countWords(patch.doc) : current.wordCount,
    updatedAt: new Date().toISOString(),
  }
  const copy = notes.slice()
  copy[index] = next
  notes = copy
  persist()
  return next
}

export function removeNote(id: string) {
  notes = notes.filter((note) => note.id !== id)
  enrichments = enrichments.filter((item) => item.noteId !== id)
  persist()
}

/* ---- Enriquecimientos ---- */

export function listEnrichments(noteId: string): Enrichment[] {
  const cached = enrichmentCache.get(noteId)
  if (cached) return cached

  const items = enrichments.filter((item) => item.noteId === noteId)
  enrichmentCache.set(noteId, items)
  return items
}

export function setEnrichmentStatus(id: string, status: EnrichmentStatus) {
  enrichments = enrichments.map((item) => (item.id === id ? { ...item, status } : item))
  persist()
}

/* ---- Texto plano ---- */

/* El pipeline parte la nota en párrafos por línea en blanco. El mismo
   corte se usa acá, para que lo que se ve sea lo que se procesa. */
export function plainText(doc: JSONContent, blockSeparator = '\n\n'): string {
  const blocks: string[] = []
  const walk = (node: JSONContent) => {
    if (node.type === 'text' && node.text) {
      blocks.push(node.text)
      return
    }
    if (node.content) for (const child of node.content) walk(child)
  }
  walk(doc)
  return blocks.join(blockSeparator)
}
