import { useSyncExternalStore } from 'react'
import { NavLink } from 'react-router-dom'
import { CircleHelp, Compass, Files, LogOut, Newspaper, SquarePen } from 'lucide-react'
import { useAuth } from '../AuthProvider.tsx'
import { appNav, appShell } from '../../data/app.ts'
import { listNotes, subscribe } from '../../lib/noteStore.ts'

const navIcons = {
  '/app/notas': Files,
  '/app/publicadas': Newspaper,
}

function countAll() {
  return listNotes().length
}

function countPublished() {
  return listNotes('published').length
}

function initialsOf(text: string) {
  return text
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export default function Sidebar() {
  const { user, signOut } = useAuth()
  const name =
    typeof user?.user_metadata?.name === 'string' ? user.user_metadata.name.trim() : ''
  const displayName = name || user?.email || ''
  const initials = initialsOf(displayName)

  const total = useSyncExternalStore(subscribe, countAll)
  const published = useSyncExternalStore(subscribe, countPublished)

  return (
    <div className="side">
      <NavLink className="side__brand" to="/app/notas">
        <span className="side__mark">
          <span className="side__wordmark">{appShell.wordmark}</span>
          <span className="side__dot" aria-hidden="true" />
        </span>
        <span className="side__tagline">{appShell.workspace}</span>
      </NavLink>

      <NavLink className="side__primary" to="/app/notas/nueva">
        <SquarePen size={16} strokeWidth={1.5} aria-hidden="true" />
        <span>{appShell.primaryAction}</span>
      </NavLink>

      <nav className="side__nav" aria-label="Notas">
        <ul className="side__list">
          {appNav.map((item) => {
            const Icon = navIcons[item.to]
            const count = item.count === 'published' ? published : total

            return (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    `side__link${isActive ? ' side__link--active' : ''}`
                  }
                  to={item.to}
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  <span className="side__link-label">{item.label}</span>
                  <span className="side__count">{String(count).padStart(2, '0')}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="side__manifesto">
        <Compass size={16} strokeWidth={1.5} aria-hidden="true" />
        <p>
          {appShell.manifesto.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <div className="side__foot">
        <a className="side__help" href="/#como-funciona">
          <CircleHelp size={16} strokeWidth={1.5} aria-hidden="true" />
          {appShell.help}
        </a>

        <div className="side__user">
          <span className="side__avatar" aria-hidden="true">
            {initials}
          </span>
          <span className="side__identity">
            <span className="side__user-name">{name || user?.email}</span>
            <span className="side__user-mail">{user?.email}</span>
          </span>
          <button
            className="side__signout"
            type="button"
            onClick={() => void signOut()}
            aria-label={appShell.signOut}
            title={appShell.signOut}
          >
            <LogOut size={16} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
