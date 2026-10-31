import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.tsx'

export default function AppShell() {
  return (
    <div className="shell">
      <Sidebar />
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  )
}
