import { Link } from 'react-router-dom'
import { noteStatusLabels, type Note, type NoteStatus } from '../../data/notes.ts'

const dateFormat = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
})

function formatDate(value: string): string {
  return dateFormat.format(new Date(value)).replace('.', '')
}

export default function NoteRow({ note }: { note: Note }) {
  const status: NoteStatus = note.status

  return (
    <li className="row">
      <Link className="row__main" to={`/app/notas/${note.id}`}>
        <span className="row__title">{note.title}</span>
        {note.niche ? <span className="row__niche">{note.niche}</span> : null}
      </Link>

      <span className="row__meta">
        <span className={`row__status row__status--${status}`}>{noteStatusLabels[status]}</span>
        <span className="row__words tabular">{note.wordCount}</span>
        <time className="row__date tabular" dateTime={note.updatedAt}>
          {formatDate(note.updatedAt)}
        </time>
      </span>
    </li>
  )
}
