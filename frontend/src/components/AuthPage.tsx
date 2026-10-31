import { Navigate, useLocation } from 'react-router-dom'
import AuthForm from './AuthForm.tsx'
import { useAuth } from './AuthProvider.tsx'
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
          <span>{authEditorial.meta.left}</span>
          <span>{authEditorial.meta.right}</span>
        </div>

        <p className="auth__kicker eyebrow">{authEditorial.kicker}</p>

        <div className="auth__poster-wrap">
          <span className="auth__plane" aria-hidden="true" />
          <h1 className="auth__poster">{authEditorial.poster}</h1>
        </div>

        <div className="auth__editorial-foot">
          <p className="auth__editorial-lead">{authEditorial.lead}</p>
          <p className="auth__editorial-note">{authEditorial.note}</p>
        </div>
      </section>

      <section className="auth__sidebar">
        <h2 className="auth__title">{authSidebar.title}</h2>

        <AuthForm mode={mode} />
      </section>
    </div>
  )
}
