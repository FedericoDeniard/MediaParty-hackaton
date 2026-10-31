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
  setEnrichmentStatus,
  subscribe,
  updateNote,
} from '../../lib/noteStore.ts'
import { useEditorKit } from '../../lib/editor/useEditorKit.ts'

type SaveState = 'idle' | 'saving' | 'saved' | 'error'

const SAVE_DELAY = 800

export default function NoteEditor() {
  const { id = '' } = useParams()
  const navigate = useNavigate()

  const note = useSyncExternalStore(subscribe, () => getNote(id))
  const enrichments = useSyncExternalStore(subscribe, () => listEnrichments(id))

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

  const handleThemeChange = (value: string) => {
    updateNote(id, { theme: value ? (value as NoteTheme) : null })
    if (!isEphemeralNote(id)) {
      setSaveState('saved')
      setSavedAt(new Date().toISOString())
    }
  }

  return (
    <div className="editor">
      <header className="editor__bar">
        <Link className="editor__back" to={backTo}>
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>

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

        <p className={`editor__save editor__save--${saveState}`} role="status">
          {statusLabel}
        </p>
      </header>

      {editor ? <EditorToolbar editor={editor} /> : <div className="bar bar--empty" />}

      <div className="editor__body">
        <div className="editor__canvas">
          <EditorContent editor={editor} />
        </div>

        <EnrichmentPanel
          items={enrichments}
          onApprove={(id) => setEnrichmentStatus(id, 'aprobada')}
          onDiscard={(id) => setEnrichmentStatus(id, 'descartada')}
          onRestore={(id) => setEnrichmentStatus(id, 'pendiente')}
        />
      </div>
    </div>
  )
}
