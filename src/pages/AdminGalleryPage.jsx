import { useState, useEffect, useCallback } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://inkfinity.api.janakrathod.com/api'

export default function AdminGalleryPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem('admin_token') || '')
  const [tokenInput, setTokenInput] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [form, setForm] = useState({ title: '', category: 'Fine Line', description: '', file: null })

  const categories = ['Fine Line', 'Realism', 'Minimal', 'Blackwork', 'Sketches']

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/gallery`)
      if (res.ok) setItems(await res.json())
    } catch {
      setError('Could not load gallery items.')
    }
  }, [])

  useEffect(() => { fetchItems() }, [fetchItems])

  const handleUnlock = (e) => {
    e.preventDefault()
    sessionStorage.setItem('admin_token', tokenInput)
    setToken(tokenInput)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    setToken('')
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.file) {
      setError('Please select an image.')
      return
    }

    setLoading(true)
    const data = new FormData()
    data.append('file', form.file)
    data.append('title', form.title)
    data.append('category', form.category)
    data.append('description', form.description)

    try {
      const res = await fetch(`${API_BASE}/gallery`, {
        method: 'POST',
        headers: { 'X-Admin-Token': token }, // do NOT set Content-Type — browser sets multipart boundary automatically
        body: data,
      })

      if (res.status === 403) {
        setError('Invalid admin token — please log in again.')
        handleLogout()
        return
      }
      if (!res.ok) throw new Error('Upload failed. Please try again.')

      setSuccess('Uploaded successfully.')
      setForm({ title: '', category: 'Fine Line', description: '', file: null })
      e.target.reset()
      fetchItems()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this piece?')) return
    try {
      const res = await fetch(`${API_BASE}/gallery/${id}`, {
        method: 'DELETE',
        headers: { 'X-Admin-Token': token },
      })
      if (res.status === 403) {
        setError('Invalid admin token — please log in again.')
        handleLogout()
        return
      }
      if (res.ok) fetchItems()
      else setError('Delete failed.')
    } catch {
      setError('Delete failed — network error.')
    }
  }

  if (!token) {
    return (
      <div className="mx-auto mt-24 max-w-sm p-6">
        <h1 className="mb-4 font-display text-xl text-paper">Admin Access</h1>
        <form onSubmit={handleUnlock} className="space-y-3">
          <input
            type="password"
            placeholder="Admin token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="w-full rounded-card border border-line bg-charcoal p-2 text-paper"
            required
          />
          <button type="submit" className="w-full rounded-card bg-accent p-2 text-ink">
            Unlock
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-xl text-paper">Manage Gallery</h1>
        <button onClick={handleLogout} className="text-sm text-muted hover:text-accent">
          Log out
        </button>
      </div>

      <form onSubmit={handleUpload} className="mb-10 space-y-3 rounded-card border border-line p-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-card border border-line bg-charcoal p-2 text-paper"
          required
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full rounded-card border border-line bg-charcoal p-2 text-paper"
        >
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <textarea
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full rounded-card border border-line bg-charcoal p-2 text-paper"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          className="w-full text-paper"
          required
        />
        <button type="submit" disabled={loading} className="w-full rounded-card bg-accent p-2 text-ink disabled:opacity-50">
          {loading ? 'Uploading…' : 'Upload'}
        </button>
        {error && <p className="text-sm text-red-400">{error}</p>}
        {success && <p className="text-sm text-green-400">{success}</p>}
      </form>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="relative rounded-card border border-line p-2">
            <img src={item.imageUrl} alt={item.title} className="mb-2 aspect-square w-full rounded object-cover" />
            <p className="text-sm text-paper">{item.title}</p>
            <p className="text-xs text-muted">{item.category}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-2 w-full rounded-card border border-red-400 p-1 text-xs text-red-400 hover:bg-red-400/10"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}