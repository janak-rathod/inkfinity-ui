import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { api, adminAuth, ApiError } from '../../api/client.js'

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      const { token } = await api.login(form)
      adminAuth.setToken(token)
      navigate('/admin', { replace: true })
    } catch (err) {
      setStatus('idle')
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <SEO title="Admin Login — Inkfinity Studio" />
      <div className="flex min-h-screen items-center justify-center bg-ink px-4">
        <div className="w-full max-w-sm rounded-card border border-line bg-charcoal/80 p-8 backdrop-blur-sm">
          <p className="font-display text-lg uppercase tracking-tight">
            Inkfinity <span className="text-accent">Studio</span>
          </p>
          <h1 className="mt-4 text-2xl">Admin Login</h1>
          <p className="mt-1 text-sm text-muted">Sign in to view bookings and contact messages.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="admin-username" className="field-label">Username</label>
              <input
                id="admin-username"
                name="username"
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
                className="w-full border-b border-line bg-transparent py-2 text-paper
                  outline-none placeholder:text-muted/50 focus:border-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="field-label">Password</label>
              <input
                id="admin-password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-line bg-transparent py-2 text-paper
                  outline-none placeholder:text-muted/50 focus:border-accent"
                required
              />
            </div>

            {error && <p className="field-error">{error}</p>}

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
              {status === 'submitting' ? 'Signing in…' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
