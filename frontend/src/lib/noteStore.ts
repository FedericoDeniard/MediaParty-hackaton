import type { JSONContent } from '@tiptap/core'
import {
  countWords,
  noteThemes,
  seedEnrichments,
  seedNotes,
  type Enrichment,
  type EnrichmentStatus,
  type Note,
  type NoteScope,
  type NoteTheme,
} from '../data/notes.ts'

/* ============================================================
   Store mock.

   Todo vive en `localStorage`: la mesa de trabajo sobrevive a un
   refresh y el editor se puede probar sin backend.

   La interfaz es angosta a propósito (list / get / create / update /
   remove). Cuando llegue Supabase, se cambia la implementación de
   estas funciones y no las pantallas.
   ============================================================ */

const NOTES_KEY = 'glosa.notes.v1'
const ENRICHMENTS_KEY = 'glosa.enrichments.v1'
const SEEDS_KEY = 'glosa.seeds.v2'

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

/* Las notas guardadas antes de que existiera la temática traen
   `niche` como texto libre. Se migran al leer, sin perder el resto
   de la nota. */
interface StoredNote extends Omit<Note, 'theme'> {
  theme?: NoteTheme | null
  niche?: string | null
}

function toTheme(value: unknown): NoteTheme | null {
  if (typeof value !== 'string') return null
  const key = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase() as NoteTheme
  return noteThemes.includes(key) ? key : null
}

function loadNotes(): Note[] {
  const stored = read<StoredNote[]>(NOTES_KEY, [])
  if (stored.length > 0) {
    const migrated = stored.map(({ niche, theme, ...note }) => ({
      ...note,
      theme: toTheme(theme ?? niche),
    }))
    if (read<boolean>(SEEDS_KEY, false)) return migrated

    /* Esta tanda de semillas se suma una sola vez a lo que ya estaba
       guardado: así se puede probar la paginación sin borrar notas de
       sesiones anteriores. Después la bandera evita que una semilla
       que el usuario borró vuelva a aparecer. */
    const known = new Set(migrated.map((note) => note.id))
    const missing = seedNotes
      .filter((seed) => !known.has(seed.id))
      .map((seed) => ({ ...seed, wordCount: countWords(seed.doc) }))

    const merged = [...migrated, ...missing]
    write(NOTES_KEY, merged)
    write(SEEDS_KEY, true)
    return merged
  }
  const seeded = seedNotes.map((note) => ({ ...note, wordCount: countWords(note.doc) }))
  write(NOTES_KEY, seeded)
  write(SEEDS_KEY, true)
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

/* Las notas nuevas viven en memoria hasta que tienen contenido: si
   la autora abre el editor y no escribe nada, no se guardan. */
const ephemeral = new Set<string>()

function hasContent(note: Note): boolean {
  return (
    countWords(note.doc) > 0 ||
    (note.title.trim() !== '' && note.title !== 'Sin título')
  )
}

function persist() {
  write(
    NOTES_KEY,
    notes.filter((note) => !ephemeral.has(note.id)),
  )
  write(ENRICHMENTS_KEY, enrichments)
  invalidate()
  emit()
}

/* `useSyncExternalStore` exige que el snapshot devuelva la misma
   referencia mientras nada cambia. Las listas se cachean y se
   invalidan en cada escritura: sin esto, cada render crea un array
   nuevo y React entra en loop. */
let notesCache: Note[] = []
let unpublishedCache: Note[] = []
let publishedCache: Note[] = []
const enrichmentCache = new Map<string, Enrichment[]>()

function invalidate() {
  const visible = notes.filter((note) => !ephemeral.has(note.id))
  notesCache = [...visible].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  unpublishedCache = notesCache.filter((note) => note.status !== 'published')
  publishedCache = notesCache.filter((note) => note.status === 'published')
  enrichmentCache.clear()
}

invalidate()

/* ---- Notas ---- */

export function listNotes(scope: NoteScope = 'all'): Note[] {
  if (scope === 'published') return publishedCache
  if (scope === 'unpublished') return unpublishedCache
  return notesCache
}

/* Una nota recién abierta que todavía no tiene contenido. */
export function isEphemeralNote(id: string): boolean {
  return ephemeral.has(id)
}

export function getNote(id: string): Note | undefined {
  return notes.find((note) => note.id === id)
}

export function createNote(
  input?: Partial<Pick<Note, 'title' | 'theme' | 'status'>> & { ephemeral?: boolean },
): Note {
  const now = new Date().toISOString()

  if (input?.ephemeral) {
    notes = notes.filter((note) => !ephemeral.has(note.id))
    ephemeral.clear()
  }

  const note: Note = {
    id: `n-${Date.now().toString(36)}`,
    title: input?.title ?? 'Sin título',
    doc: { type: 'doc', content: [{ type: 'paragraph' }] },
    status: input?.status ?? 'draft',
    theme: input?.theme ?? null,
    wordCount: 0,
    createdAt: now,
    updatedAt: now,
  }
  notes = [note, ...notes]

  if (input?.ephemeral) {
    ephemeral.add(note.id)
    invalidate()
    emit()
  } else {
    persist()
  }

  return note
}

export function updateNote(
  id: string,
  patch: Partial<Pick<Note, 'title' | 'doc' | 'status' | 'theme'>>,
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

  if (ephemeral.has(id) && hasContent(next)) ephemeral.delete(id)

  persist()
  return next
}

export function removeNote(id: string) {
  ephemeral.delete(id)
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
