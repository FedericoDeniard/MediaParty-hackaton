import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider.tsx'

export default function RequireSession({ children }: { children: ReactNode }) {
  const { status } = useAuth()
  const location = useLocation()

  if (status === 'loading') {
    return <div className="app-boot" role="status" aria-label="Verificando sesión" />
  }

  if (status !== 'authenticated') {
    const from = `${location.pathname}${location.search}`
    return <Navigate to="/login" state={{ from }} replace />
  }

  return <>{children}</>
}
