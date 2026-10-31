import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EditorContent } from '@tiptap/react'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import EditorToolbar from './EditorToolbar.tsx'
import EnrichmentPanel from './EnrichmentPanel.tsx'
import { editorPage } from '../../data/app.ts'
import {
  noteThemeLabels,
  noteThemes,
  type NoteTheme,
} from '../../data/notes.ts'
import {
  getNote,
  isEphemeralNote,
  listEnrichments,
  listNotes,
  setEnrichmentStatus,
  subscribe,
  updateNote,
} from '../../lib/noteStore.ts'
import { useEditorKit } from '../../lib/editor/useEditorKit.ts'

type SaveState = 'idle' | 'saving' | 'saved' | 'error'

const SAVE_DELAY = 800

/* Fecha de la ficha. Se arma como en la lista: día, mes corto y año,
   sin el punto de la abreviatura. */
const dateFormat = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
})

function formatDate(iso: string): string {
  const date = new Date(iso)
  return `${dateFormat.format(date).replace('.', '')} ${date.getFullYear()}`
}

export default function NoteEditor() {
  const { id = '' } = useParams()
  const navigate = useNavigate()

  const note = useSyncExternalStore(subscribe, () => getNote(id))
  const enrichments = useSyncExternalStore(subscribe, () => listEnrichments(id))

  /* Una nota publicada se lee: no se edita, así que no lleva los
     planos del área editable, ni la toolbar, ni las sugerencias del
     asistente. */
  const isPublished = note?.status === 'published'
  const canEdit = !isPublished

  const [title, setTitle] = useState(note?.title ?? '')
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const [savedAt, setSavedAt] = useState<string | null>(null)

  const timer = useRef<number | undefined>(undefined)
  const pendingDoc = useRef<Parameters<typeof updateNote>[1]>({})

  /* Si la nota no existe (o se borró), se vuelve a la lista. */
  useEffect(() => {
    if (!note) navigate('/app/borradores', { replace: true })
  }, [note, navigate])

  /* Cambiar de nota reinicia el título y el estado de guardado. El
     título del store cambia con cada guardado: si el efecto lo
     escuchara, la hora del último guardado se perdería. */
  const loadedNote = useRef(id)
  useEffect(() => {
    if (loadedNote.current === id) return
    loadedNote.current = id
    setTitle(note?.title ?? '')
    setSaveState('idle')
    setSavedAt(null)
  }, [id, note?.title])

  const flush = useCallback(() => {
    if (timer.current !== undefined) {
      window.clearTimeout(timer.current)
      timer.current = undefined
    }
    if (Object.keys(pendingDoc.current).length === 0) return

    updateNote(id, pendingDoc.current)
    pendingDoc.current = {}
    setSaveState('saved')
    setSavedAt(new Date().toISOString())
  }, [id])

  useEffect(() => flush, [flush])

  const schedule = useCallback(() => {
    setSaveState('saving')
    if (timer.current !== undefined) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(flush, SAVE_DELAY)
  }, [flush])

  const handleDocChange = useCallback(
    (doc: Parameters<typeof updateNote>[1]['doc']) => {
      pendingDoc.current = { ...pendingDoc.current, doc }
      schedule()
    },
    [schedule],
  )

  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value)
      pendingDoc.current = { ...pendingDoc.current, title: value }
      schedule()
    },
    [schedule],
  )

  /* Los pasajes resaltados son los de las piezas aprobadas: una cita
     literal de la nota que respalda cada una. */
  const fragments = enrichments
    .filter((item) => item.status === 'aprobada' && item.citation)
    .map((item) => item.citation as string)

  const editor = useEditorKit({
    content: note?.doc ?? { type: 'doc', content: [{ type: 'paragraph' }] },
    contentKey: id,
    onChange: handleDocChange,
    fragments,
    editable: canEdit,
  })

  const statusLabel =
    saveState === 'saving'
      ? editorPage.saving
      : saveState === 'error'
        ? editorPage.saveError
        : savedAt
          ? `${editorPage.saved} ${new Date(savedAt).toLocaleTimeString('es-AR', {
              hour: '2-digit',
              minute: '2-digit',
            })}`
          : isEphemeralNote(id)
            ? editorPage.unsaved
            : editorPage.saved

  const backTo = note?.status === 'published' ? '/app/publicados' : '/app/borradores'
  const backLabel =
    note?.status === 'published' ? editorPage.backPublished : editorPage.backDrafts

  /* Relacionadas de la vista de lectura: primero las publicadas de la
     misma temática, y si no hay, las más recientes. Tres es el máximo
     que se lee en un rail. */
  const theme = note?.theme ?? null
  const published = listNotes('published')
  const themed = theme
    ? published.filter((item) => item.id !== id && item.theme === theme)
    : []
  const related = (themed.length > 0 ? themed : published.filter((item) => item.id !== id)).slice(
    0,
    3,
  )
  const relatedTitle =
    themed.length > 0 && theme
      ? `${editorPage.moreIn} ${noteThemeLabels[theme]}`
      : editorPage.morePublished

  /* Tiempo de lectura a 200 palabras por minuto, redondeado. */
  const readingMinutes = note ? Math.max(1, Math.round(note.wordCount / 200)) : 0

  const handleThemeChange = (value: string) => {
    updateNote(id, { theme: value ? (value as NoteTheme) : null })
    if (!isEphemeralNote(id)) {
      setSaveState('saved')
      setSavedAt(new Date().toISOString())
    }
  }

  return (
    <div className="editor">
      <header className={`editor__bar${canEdit ? '' : ' editor__bar--read'}`}>
        <Link className="editor__back" to={backTo}>
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>

        {canEdit ? (
          <>
            {/* El título es el encabezado de primer nivel de la pantalla.
                El `h1` lleva el texto y el campo editable va aparte, para
                que la navegación por encabezados anuncie el título. */}
            <h1 className="editor__heading">{title || editorPage.titlePlaceholder}</h1>

            <input
              className="editor__title"
              type="text"
              value={title}
              placeholder={editorPage.titlePlaceholder}
              aria-label="Título de la nota"
              onChange={(event) => handleTitleChange(event.target.value)}
            />
          </>
        ) : (
          <h1 className="editor__title editor__title--read">
            {title || editorPage.titlePlaceholder}
          </h1>
        )}

        {canEdit && (
          <label className="editor__theme">
            <span className="editor__theme-label">{editorPage.theme}</span>
            <span className="editor__theme-control">
              <select
                className="editor__theme-select"
                value={note?.theme ?? ''}
                onChange={(event) => handleThemeChange(event.target.value)}
              >
                <option value="">{editorPage.noTheme}</option>
                {noteThemes.map((item) => (
                  <option key={item} value={item}>
                    {noteThemeLabels[item]}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="editor__theme-chevron"
                size={14}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </label>
        )}

        {canEdit && (
          <p className={`editor__save editor__save--${saveState}`} role="status">
            {statusLabel}
          </p>
        )}
      </header>

      {canEdit &&
        (editor ? (
          <EditorToolbar editor={editor} />
        ) : (
          <div className="bar bar--empty" />
        ))}

      <div className={`editor__body${canEdit ? '' : ' editor__body--read'}`}>
        <div className={`editor__canvas${canEdit ? '' : ' editor__canvas--read'}`}>
          <EditorContent editor={editor} />

          {/* Publicada, la nota se lee: la temática cierra el
              documento como dato, no como un control. */}
          {!canEdit && (
            <footer className="editor__category">
              <span className="editor__category-label">{editorPage.theme}</span>
              <p className="editor__category-value">
                {note?.theme ? noteThemeLabels[note.theme] : editorPage.noTheme}
              </p>
            </footer>
          )}
        </div>

        {!canEdit && (
          <aside className="panel read-rail" aria-labelledby="read-rail-title">
            <h2 className="panel__title" id="read-rail-title">
              {editorPage.readTitle}
            </h2>

            <ul className="panel__list">
              <li className="read-rail__row">
                <span className="read-rail__key">{editorPage.readUpdated}</span>
                <span className="read-rail__value">
                  {note ? formatDate(note.updatedAt) : ''}
                </span>
              </li>
              <li className="read-rail__row">
                <span className="read-rail__key">{editorPage.readWords}</span>
                <span className="read-rail__value">{note?.wordCount ?? 0}</span>
              </li>
              <li className="read-rail__row">
                <span className="read-rail__key">{editorPage.readTime}</span>
                <span className="read-rail__value">
                  {readingMinutes} {editorPage.readMinutes}
                </span>
              </li>
            </ul>

            {related.length > 0 && (
              <section className="read-rail__section" aria-labelledby="read-rail-more">
                <h3 className="panel__title" id="read-rail-more">
                  {relatedTitle}
                </h3>

                <ul className="panel__list">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link className="read-rail__link" to={`/app/notas/${item.id}`}>
                        <span className="read-rail__link-title">
                          {item.title || editorPage.titlePlaceholder}
                        </span>
                        <span className="read-rail__link-date">
                          {formatDate(item.updatedAt)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link className="read-rail__all" to="/app/publicados">
                  {editorPage.viewAllPublished}
                </Link>
              </section>
            )}
          </aside>
        )}

        {canEdit && (
          <EnrichmentPanel
            items={enrichments}
            onApprove={(id) => setEnrichmentStatus(id, 'aprobada')}
            onDiscard={(id) => setEnrichmentStatus(id, 'descartada')}
            onRestore={(id) => setEnrichmentStatus(id, 'pendiente')}
          />
        )}
      </div>
    </div>
  )
}
