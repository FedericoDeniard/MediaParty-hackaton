import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EditorContent } from '@tiptap/react'
import { ArrowLeft } from 'lucide-react'
import EditorToolbar from './EditorToolbar.tsx'
import EnrichmentPanel, { type Analysis } from './EnrichmentPanel.tsx'
import { analyzeNote } from '../../lib/enrich.ts'
import { editorPage } from '../../data/app.ts'
import {
  getNote,
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
  const [analysis, setAnalysis] = useState<Analysis>({ state: 'idle', rows: [] })

  const timer = useRef<number | undefined>(undefined)
  const pendingDoc = useRef<Parameters<typeof updateNote>[1]>({})

  /* Si la nota no existe (o se borró), se vuelve a la lista. */
  useEffect(() => {
    if (!note) navigate('/app/notas', { replace: true })
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

  /* Se guarda antes de analizar: el backend tiene que recibir el texto
     que se ve, no el del último guardado. */
  const handleAnalyze = useCallback(async () => {
    flush()
    const current = getNote(id)
    if (!current) return
    setAnalysis({ state: 'running', rows: [] })
    try {
      const rows = await analyzeNote(current, (rows) => setAnalysis({ state: 'running', rows }))
      setAnalysis({ state: 'idle', rows }) // quedan a la vista si falló algún agente
    } catch (error) {
      setAnalysis({ state: 'error', rows: [], error: error instanceof Error ? error.message : String(error) })
    }
  }, [flush, id])

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
          : editorPage.saved

  return (
    <div className="editor">
      <header className="editor__bar">
        <Link className="editor__back" to="/app/notas">
          <ArrowLeft size={16} aria-hidden="true" />
          {editorPage.back}
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
          analysis={analysis}
          onAnalyze={handleAnalyze}
        />
      </div>
    </div>
  )
}
