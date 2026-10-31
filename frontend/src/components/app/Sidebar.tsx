import { NavLink } from 'react-router-dom'
import { FilePlus } from 'lucide-react'
import Logo from '../Logo.tsx'
import { useAuth } from '../AuthProvider.tsx'
import { appNav, appShell } from '../../data/app.ts'

export default function Sidebar() {
  const { user, signOut } = useAuth()
  const name =
    typeof user?.user_metadata?.name === 'string' ? user.user_metadata.name.trim() : ''

  return (
    <div className="side">
      <NavLink className="side__brand" to="/app/notas">
        <Logo size={28} />
        <span className="side__wordmark">{appShell.wordmark}</span>
      </NavLink>

      <NavLink className="button button--solid side__primary" to="/app/notas/nueva">
        <FilePlus size={16} aria-hidden="true" />
        {appShell.primaryAction}
      </NavLink>

      <nav className="side__nav" aria-label="Notas">
        <p className="side__label">Notas</p>
        <ul>
          {appNav.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) => `side__link${isActive ? ' side__link--active' : ''}`}
                to={item.to}
                end={'end' in item ? item.end : false}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="side__foot">
        <p className="side__user">
          <span className="side__user-name">{name || user?.email}</span>
          <span className="side__user-mail">{user?.email}</span>
        </p>
        <button className="side__signout" type="button" onClick={() => void signOut()}>
          {appShell.signOut}
        </button>
      </div>
    </div>
  )
}
