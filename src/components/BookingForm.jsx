import { useState } from 'react'
import { api, ApiError } from '../api/client.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  preferredDateTime: '',
  serviceType: 'TATTOO',
  stylePreference: 'Fine Line',
  notes: ''
}

const STYLE_OPTIONS = ['Fine Line', 'Realism', 'Minimal', 'Blackwork', 'Custom Sketch', 'Not sure yet']

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setErrors({})
    try {
      await api.createBooking(form)
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
        Booking request received. We'll confirm your slot by email or phone shortly.
        <button type="button" className="mt-3 block text-accent underline" onClick={() => setStatus('idle')}>
          Book another session
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-card border border-line bg-charcoal p-6 sm:p-8">
      <div>
        <label htmlFor="booking-name" className="field-label">Name</label>
        <input id="booking-name" name="name" value={form.name} onChange={handleChange} className="field-input" required />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-email" className="field-label">Email</label>
          <input id="booking-email" type="email" name="email" value={form.email} onChange={handleChange} className="field-input" required />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="booking-phone" className="field-label">Phone</label>
          <input id="booking-phone" name="phone" value={form.phone} onChange={handleChange} className="field-input" />
          {errors.phone && <p className="field-error">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-datetime" className="field-label">Preferred date &amp; time</label>
          <input
            id="booking-datetime"
            type="datetime-local"
            name="preferredDateTime"
            value={form.preferredDateTime}
            onChange={handleChange}
            className="field-input"
            required
          />
          {errors.preferredDateTime && <p className="field-error">{errors.preferredDateTime}</p>}
        </div>
        <div>
          <label htmlFor="booking-service" className="field-label">Service type</label>
          <select id="booking-service" name="serviceType" value={form.serviceType} onChange={handleChange} className="field-input">
            <option value="TATTOO">Tattoo</option>
            <option value="SKETCH">Sketch / illustration</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-style" className="field-label">Style preference</label>
        <select id="booking-style" name="stylePreference" value={form.stylePreference} onChange={handleChange} className="field-input">
          {STYLE_OPTIONS.map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="booking-notes" className="field-label">Tell us about the idea (optional)</label>
        <textarea id="booking-notes" name="notes" value={form.notes} onChange={handleChange} rows={4} className="field-input" />
        {errors.notes && <p className="field-error">{errors.notes}</p>}
      </div>

      {status === 'error' && !Object.keys(errors).length && (
        <p className="field-error">Something went wrong submitting your booking. Please try again.</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Submitting…' : 'Request Booking'}
      </button>
    </form>
  )
}
