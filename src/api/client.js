const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://inkfinity.api.janakrathod.com/api'
const ADMIN_TOKEN_KEY = 'inkfinity_admin_token'

/**
 * Thin wrapper around fetch for the backend API. Throws an ApiError with
 * `.fieldErrors` populated when the server returns a 400 validation map
 * (see GlobalExceptionHandler on the Spring backend / formatValidationError
 * on the Node backend), so forms can show inline messages under each input.
 * `.sessionExpired` is set when an authenticated admin request comes back
 * 401 (expired/invalid JWT) - see middleware/requireAuth.ts on the backend.
 */
export class ApiError extends Error {
  constructor(message, { fieldErrors = {}, sessionExpired = false } = {}) {
    super(message)
    this.fieldErrors = fieldErrors
    this.sessionExpired = sessionExpired
  }
}

export const adminAuth = {
  getToken: () => localStorage.getItem(ADMIN_TOKEN_KEY),
  setToken: (token) => localStorage.setItem(ADMIN_TOKEN_KEY, token),
  clearToken: () => localStorage.removeItem(ADMIN_TOKEN_KEY),
  isLoggedIn: () => Boolean(localStorage.getItem(ADMIN_TOKEN_KEY))
}

async function request(path, options = {}, { auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }

  if (auth) {
    const token = adminAuth.getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers })

  if (!res.ok) {
    let body = {}
    try { body = await res.json() } catch { /* no body */ }

    if (auth && (res.status === 401 || res.status === 403)) {
      adminAuth.clearToken()
      throw new ApiError(body.error || 'Your session has expired. Please log in again.', { sessionExpired: true })
    }

    if (res.status === 400) {
      // Spring returns a flat {field: message} map; the Node/Hono backend
      // wraps the same shape as {errors: {field: message}} - support both.
      throw new ApiError('Please fix the highlighted fields.', { fieldErrors: body.errors || body })
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
  getTestimonials: () => request('/testimonials'),

  // Admin - JWT issued by /api/auth/login, sent as Authorization: Bearer <token>
  login: (payload) => request('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  getAdminBookings: () => request('/admin/bookings', {}, { auth: true }),
  getAdminContacts: () => request('/admin/contacts', {}, { auth: true })
}
