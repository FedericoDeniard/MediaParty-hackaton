import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Suspense, lazy, useEffect, useRef } from 'react'
import Landing from './components/Landing.tsx'
import AuthPage from './components/AuthPage.tsx'
import AppShell from './components/app/AppShell.tsx'
import NoteList from './components/app/NoteList.tsx'
import RequireSession from './components/RequireSession.tsx'
import { draftsPage, publishedPage } from './data/app.ts'
import { createNote } from './lib/noteStore.ts'

/* El editor arrastra ProseMirror y todo el paquete de Tiptap: pesa
   más que el resto de la app junta. Va en su propio chunk para que
   la landing y las listas no lo carguen. */
const NoteEditor = lazy(() => import('./components/app/NoteEditor.tsx'))

/* Crear la nota es un efecto, no un render: en StrictMode el
   componente se monta dos veces y una nota por montaje. La bandera
   evita el duplicado. */
function NewNote() {
  const navigate = useNavigate()
  const created = useRef(false)

  useEffect(() => {
    if (created.current) return
    created.current = true

    const note = createNote({ ephemeral: true })
    navigate(`/app/notas/${note.id}`, { replace: true })
  }, [navigate])

  return null
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/registro" element={<AuthPage mode="register" />} />

      <Route
        path="/app"
        element={
          <RequireSession>
            <AppShell />
          </RequireSession>
        }
      >
        <Route index element={<Navigate to="/app/borradores" replace />} />
        <Route
          path="borradores"
          element={
            <NoteList
              scope="unpublished"
              title={draftsPage.title}
              empty={draftsPage.empty}
            />
          }
        />
        <Route path="notas" element={<Navigate to="/app/borradores" replace />} />
        <Route path="notas/nueva" element={<NewNote />} />
        <Route
          path="notas/:id"
          element={
            <Suspense fallback={<div className="editor editor--loading" />}>
              <NoteEditor />
            </Suspense>
          }
        />
        <Route
          path="publicados"
          element={
            <NoteList
              scope="published"
              title={publishedPage.title}
              empty={publishedPage.empty}
            />
          }
        />
        <Route path="publicadas" element={<Navigate to="/app/publicados" replace />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
