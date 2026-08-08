import { Outlet, useNavigate } from 'react-router-dom'
import { adminAuth } from '../api/client.js'

export default function AdminLayout() {
  const navigate = useNavigate()

  function handleLogout() {
    adminAuth.clearToken()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <header className="border-b border-line bg-charcoal">
        <div className="container-page flex h-16 items-center justify-between">
          <p className="font-display text-lg uppercase tracking-tight">
            Inkline <span className="text-accent">Studio</span>
            <span className="ml-2 text-xs font-body normal-case tracking-normal text-muted">Admin</span>
          </p>
          {adminAuth.isLoggedIn() && (
            <button type="button" onClick={handleLogout} className="btn-secondary !px-4 !py-2 text-xs">
              Log Out
            </button>
          )}
        </div>
      </header>
      <main className="container-page py-10">
        <Outlet />
      </main>
    </div>
  )
}
