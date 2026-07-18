import { useState } from 'react'
import { api, ApiError } from '../api/client.js'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setErrors({})
    try {
      await api.createContactMessage(form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      if (err instanceof ApiError) setErrors(err.fieldErrors)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-sage/40 bg-sage/10 p-6 text-sm text-paper">
        Thanks — your message is in. We usually reply within a day.
        <button type="button" className="mt-3 block text-accent underline" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-card border border-line bg-charcoal p-6 sm:p-8">
      <div>
        <label htmlFor="contact-name" className="field-label">Name</label>
        <input id="contact-name" name="name" value={form.name} onChange={handleChange} className="field-input" required />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="field-label">Email</label>
          <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} className="field-input" required />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="field-label">Phone (optional)</label>
          <input id="contact-phone" name="phone" value={form.phone} onChange={handleChange} className="field-input" />
          {errors.phone && <p className="field-error">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">Message</label>
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows={5} className="field-input" required />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>

      {status === 'error' && !Object.keys(errors).length && (
        <p className="field-error">Something went wrong sending your message. Please try again.</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
