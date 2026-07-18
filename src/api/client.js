const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.janakrathod.com/api'

/**
 * Thin wrapper around fetch for the backend API. Throws an ApiError with
 * `.fieldErrors` populated when the server returns a 400 validation map
 * (see GlobalExceptionHandler on the backend), so forms can show inline
 * messages under each input.
 */
export class ApiError extends Error {
  constructor(message, fieldErrors = {}) {
    super(message)
    this.fieldErrors = fieldErrors
  }
}

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  if (!res.ok) {
    let body = {}
    try { body = await res.json() } catch { /* no body */ }
    if (res.status === 400) {
      throw new ApiError('Please fix the highlighted fields.', body)
    }
    throw new ApiError(body.error || 'Something went wrong. Please try again.')
  }

  if (res.status === 204) return null
  return res.json()
}

export const api = {
  createBooking: (payload) => request('/bookings', { method: 'POST', body: JSON.stringify(payload) }),
  createContactMessage: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
  getGallery: (category) => request(`/gallery${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  getTestimonials: () => request('/testimonials')
}
