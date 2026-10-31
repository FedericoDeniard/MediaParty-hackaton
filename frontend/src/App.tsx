import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing.tsx'
import AuthPage from './components/AuthPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/registro" element={<AuthPage mode="register" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
