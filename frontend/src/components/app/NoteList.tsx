import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import NoteRow from './NoteRow.tsx'
import { notesFilters } from '../../data/app.ts'
import {
  noteThemeLabels,
  noteThemes,
  type NoteScope,
  type NoteTheme,
} from '../../data/notes.ts'
import { listNotes, subscribe } from '../../lib/noteStore.ts'

type Order = 'recent' | 'oldest'

const PAGE_SIZE = 5

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
}

export default function NoteList({
  scope,
  title,
  empty,
}: {
  scope: Exclude<NoteScope, 'all'>
  title: string
  empty: string
}) {
  const notes = useSyncExternalStore(subscribe, () => listNotes(scope))

  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<NoteTheme | 'all'>('all')
  const [order, setOrder] = useState<Order>('recent')
  const [page, setPage] = useState(1)

  const visible = useMemo(() => {
    const needle = normalize(query)
    const matches = notes.filter((note) => {
      if (theme !== 'all' && note.theme !== theme) return false
      return needle === '' || normalize(note.title).includes(needle)
    })
    return order === 'recent' ? matches : [...matches].reverse()
  }, [notes, query, theme, order])

  /* Cambiar un filtro vuelve a la primera página. */
  useEffect(() => {
    setPage(1)
  }, [query, theme, order])

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const first = (currentPage - 1) * PAGE_SIZE
  const pageNotes = visible.slice(first, first + PAGE_SIZE)
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <div className="page">
      <header className="page__head">
        <div className="page__content">
          <h1 className="page__title">{title}</h1>
        </div>

        <div className="filters">
          <label className="filters__field filters__field--search">
            <span className="filters__label">{notesFilters.search}</span>
            <span className="filters__control">
              <Search
                className="filters__icon"
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <input
                className="filters__input"
                type="search"
                value={query}
                placeholder={notesFilters.searchPlaceholder}
                onChange={(event) => setQuery(event.target.value)}
              />
            </span>
          </label>

          <label className="filters__field">
            <span className="filters__label">{notesFilters.theme}</span>
            <span className="filters__control">
              <select
                className="filters__select"
                value={theme}
                onChange={(event) => setTheme(event.target.value as NoteTheme | 'all')}
              >
                <option value="all">{notesFilters.allThemes}</option>
                {noteThemes.map((item) => (
                  <option key={item} value={item}>
                    {noteThemeLabels[item]}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="filters__chevron"
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </label>

          <label className="filters__field">
            <span className="filters__label">{notesFilters.order}</span>
            <span className="filters__control">
              <select
                className="filters__select"
                value={order}
                onChange={(event) => setOrder(event.target.value as Order)}
              >
                <option value="recent">{notesFilters.recent}</option>
                <option value="oldest">{notesFilters.oldest}</option>
              </select>
              <ChevronDown
                className="filters__chevron"
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </label>
        </div>
      </header>

      {notes.length === 0 ? (
        <p className="page__empty">{empty}</p>
      ) : visible.length === 0 ? (
        <p className="page__empty">{notesFilters.noMatches}</p>
      ) : (
        <>
          <ul className="rows">
            {pageNotes.map((note) => (
              <NoteRow key={note.id} note={note} />
            ))}
          </ul>

          <footer className="pager">
            <p className="pager__status tabular" role="status">
              {notesFilters.results(first + 1, first + pageNotes.length, visible.length)}
            </p>

            {pageCount > 1 ? (
              <nav className="pager__nav" aria-label={notesFilters.pagination}>
                <button
                  className="pager__step"
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setPage(currentPage - 1)}
                >
                  <ChevronLeft size={14} strokeWidth={1.5} aria-hidden="true" />
                  {notesFilters.previous}
                </button>

                <ol className="pager__pages">
                  {pages.map((number) => (
                    <li key={number}>
                      <button
                        className={`pager__page${number === currentPage ? ' pager__page--active' : ''}`}
                        type="button"
                        aria-label={notesFilters.page(number)}
                        aria-current={number === currentPage ? 'page' : undefined}
                        onClick={() => setPage(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                </ol>

                <button
                  className="pager__step"
                  type="button"
                  disabled={currentPage === pageCount}
                  onClick={() => setPage(currentPage + 1)}
                >
                  {notesFilters.next}
                  <ChevronRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </nav>
            ) : null}
          </footer>
        </>
      )}
    </div>
  )
}
