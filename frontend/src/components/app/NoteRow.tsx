import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Archive, ArrowUpRight, Trash2 } from 'lucide-react'
import { noteRow } from '../../data/app.ts'
import { excerpt, noteThemeLabels, type Note } from '../../data/notes.ts'
import { archiveNote, removeNote } from '../../lib/noteStore.ts'

const dateFormat = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
})

const numberFormat = new Intl.NumberFormat('es-AR')

function formatDate(value: string): string {
  const date = new Date(value)
  return `${dateFormat.format(date).replace('.', '')} ${date.getFullYear()}`
}

export default function NoteRow({
  note,
  onAction,
}: {
  note: Note
  onAction: (message: string) => void
}) {
  const theme = note.theme ? noteThemeLabels[note.theme] : null
  const isPublished = note.status === 'published'

  /* Las publicaciones se archivan; los borradores se borran. Borrar
     pide un segundo toque: no hay deshacer. */
  const [confirming, setConfirming] = useState(false)

  const handleAction = () => {
    if (isPublished) {
      archiveNote(note.id)
      onAction(noteRow.archived(note.title))
      return
    }

    if (!confirming) {
      setConfirming(true)
      return
    }

    removeNote(note.id)
    onAction(noteRow.deleted(note.title))
  }

  const label = isPublished
    ? noteRow.archive
    : confirming
      ? noteRow.confirm
      : noteRow.delete

  const ariaLabel = isPublished
    ? noteRow.archiveLabel(note.title)
    : confirming
      ? noteRow.confirmLabel(note.title)
      : noteRow.deleteLabel(note.title)

  return (
    <li className="row">
      <Link className="row__link" to={`/app/notas/${note.id}`}>
        <span className="row__body">
          <span className="row__theme">{theme ?? noteRow.noTheme}</span>
          <span className="row__title">{note.title}</span>
          <span className="row__preview">{excerpt(note.doc)}</span>
        </span>

        <span className="row__meta">
          <time className="row__date tabular" dateTime={note.updatedAt}>
            {formatDate(note.updatedAt)}
          </time>
          <span className="row__words tabular">
            {numberFormat.format(note.wordCount)} {noteRow.words}
          </span>
          <span className="row__action">
            {noteRow.open}
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </span>
      </Link>

      {/* La acción va fuera del enlace: un botón no puede vivir dentro
          de otro control. Se lee como una acción de la fila, no como un
          botón relleno. */}
      <div
        className="row__tools"
        onKeyDown={(event) => {
          if (event.key === 'Escape') setConfirming(false)
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setConfirming(false)
          }
        }}
      >
        <button
          className={`row__tool${confirming ? ' row__tool--confirm' : ''}`}
          type="button"
          aria-label={ariaLabel}
          onClick={handleAction}
        >
          {isPublished ? (
            <Archive size={14} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Trash2 size={14} strokeWidth={1.5} aria-hidden="true" />
          )}
          {label}
        </button>

        {confirming ? (
          <button
            className="row__tool"
            type="button"
            aria-label={noteRow.cancelLabel(note.title)}
            onClick={() => setConfirming(false)}
          >
            {noteRow.cancel}
          </button>
        ) : null}

        <span className="row__notice" role="status">
          {confirming ? noteRow.confirmPrompt(note.title) : ''}
        </span>
      </div>
    </li>
  )
}
