import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { noteRow } from '../../data/app.ts'
import { excerpt, noteThemeLabels, type Note } from '../../data/notes.ts'

const dateFormat = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
})

const numberFormat = new Intl.NumberFormat('es-AR')

function formatDate(value: string): string {
  const date = new Date(value)
  return `${dateFormat.format(date).replace('.', '')} ${date.getFullYear()}`
}

export default function NoteRow({ note }: { note: Note }) {
  const theme = note.theme ? noteThemeLabels[note.theme] : null

  return (
    <li>
      <Link className="row" to={`/app/notas/${note.id}`}>
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
    </li>
  )
}
