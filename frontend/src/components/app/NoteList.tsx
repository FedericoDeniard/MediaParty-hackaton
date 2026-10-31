import { useSyncExternalStore } from 'react'
import NoteRow from './NoteRow.tsx'
import { listNotes, subscribe } from '../../lib/noteStore.ts'
import type { NoteStatus } from '../../data/notes.ts'

export default function NoteList({
  status,
  index,
  title,
  lead,
  empty,
}: {
  status?: NoteStatus
  index: string
  title: string
  lead: string
  empty: string
}) {
  const notes = useSyncExternalStore(subscribe, () => listNotes(status))

  return (
    <div className="page">
      <header className="page__head">
        <p className="page__index">{index} — Mesa de trabajo</p>
        <div className="page__content">
          <h1 className="page__title">{title}</h1>
          <p className="page__lead">{lead}</p>
        </div>
      </header>

      {notes.length === 0 ? (
        <p className="page__empty">{empty}</p>
      ) : (
        <ul className="rows">
          {notes.map((note) => (
            <NoteRow key={note.id} note={note} />
          ))}
        </ul>
      )}
    </div>
  )
}
