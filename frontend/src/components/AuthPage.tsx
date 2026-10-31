import { Link } from 'react-router-dom'
import Logo from './Logo.tsx'
import AuthForm from './AuthForm.tsx'
import { authFacts, authModes, type AuthMode } from '../data/auth.ts'

export default function AuthPage({ mode }: { mode: AuthMode }) {
  const copy = authModes[mode]

  return (
    <div className="auth">
      <header className="auth__bar">
        <div className="auth__bar-inner">
          <Link className="auth__brand" to="/">
            <Logo size={32} />
            <span className="auth__wordmark">Nexo</span>
          </Link>

          <Link className="auth__back" to="/">
            Volver al sitio
          </Link>
        </div>
      </header>

      <main className="auth__layout">
        <aside className="auth__aside">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="auth__title">{copy.title}</h1>
          <p className="auth__lead">{copy.lead}</p>

          <dl className="auth__facts">
            {authFacts.map((fact) => (
              <div className="auth__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <section className="auth__main">
          <AuthForm mode={mode} />
        </section>
      </main>
    </div>
  )
}
