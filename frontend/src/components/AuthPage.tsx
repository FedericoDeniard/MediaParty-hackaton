import { Link, Navigate, useLocation } from 'react-router-dom'
import AuthForm from './AuthForm.tsx'
import { useAuth } from './AuthProvider.tsx'
import Wordmark from './Wordmark.tsx'
import { authEditorial, authSidebar, type AuthMode } from '../data/auth.ts'

export default function AuthPage({ mode }: { mode: AuthMode }) {
  const { status } = useAuth()
  const location = useLocation()

  if (status === 'loading') {
    return <div className="app-boot" role="status" aria-label="Verificando sesión" />
  }

  if (status === 'authenticated') {
    const from = (location.state as { from?: unknown } | null)?.from
    const destination =
      typeof from === 'string' && from.startsWith('/') && !from.startsWith('//')
        ? from
        : '/app/borradores'

    return <Navigate to={destination} replace />
  }

  return (
    <div className="auth">
      <section className="auth__editorial">
        <div className="auth__meta">
          <span>{authEditorial.date}</span>
        </div>

        <p className="auth__kicker eyebrow">{authEditorial.kicker}</p>

        <div className="auth__brand-wrap">
          <span className="auth__plane" aria-hidden="true" />
          <h1 className="auth__brand">
            <Link className="auth__brand-link" to="/">
              <Wordmark size="lg" />
            </Link>
          </h1>
        </div>
      </section>

      <section className="auth__sidebar">
        <h2 className="auth__title">{authSidebar.title}</h2>

        <AuthForm mode={mode} />
      </section>
    </div>
  )
}
