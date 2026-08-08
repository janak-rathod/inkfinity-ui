import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { api, ApiError } from '../../api/client.js'
import AdminGalleryPage from '../AdminGalleryPage.jsx'

function formatDate(value) {
  if (!value) return '—'
  // SQLite's CURRENT_TIMESTAMP comes back as "YYYY-MM-DD HH:MM:SS" (no "T"),
  // which some browsers won't parse - normalize before handing to Date.
  const date = new Date(value.includes('T') ? value : `${value.replace(' ', 'T')}Z`)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleString(undefined, {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  })
}

const TABS = [
  { key: 'bookings', label: 'Bookings' },
  { key: 'contacts', label: 'Contact Messages' },
  { key: 'uploadPhoto', label: 'Upload Photo'}
]

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('bookings')
  const [bookings, setBookings] = useState(null)
  const [contacts, setContacts] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    function handleError(err, fallback) {
      if (err instanceof ApiError && err.sessionExpired) {
        navigate('/admin/login', { replace: true })
        return
      }
      setError(err instanceof ApiError ? err.message : fallback)
    }

    api.getAdminBookings()
      .then(setBookings)
      .catch((err) => handleError(err, 'Failed to load bookings.'))
    api.getAdminContacts()
      .then(setContacts)
      .catch((err) => handleError(err, 'Failed to load contact messages.'))
  }, [navigate])

  return (
    <>
      <SEO title="Admin Dashboard — Inkline Studio" />

      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 text-3xl">Bookings &amp; Contact Messages</h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`filter-chip ${activeTab === tab.key ? 'filter-chip-active' : 'filter-chip-inactive'}`}
          >
            {tab.label}
            {tab.key === 'bookings' && bookings ? ` (${bookings.length})` : ''}
            {tab.key === 'contacts' && contacts ? ` (${contacts.length})` : ''}
          </button>
        ))}
      </div>

      {error && <p className="field-error mt-4">{error}</p>}

      <div className="mt-6">
        {activeTab === 'bookings' && <BookingsTable bookings={bookings} />}
        {activeTab === 'contacts' && <ContactsTable contacts={contacts} />}
        {activeTab === 'uploadPhoto' && <AdminGalleryPage />}
      </div>
    </>
  )
}

function TableShell({ children }) {
  return (
    <div className="overflow-x-auto rounded-card border border-line bg-charcoal">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">{children}</table>
    </div>
  )
}

function Th({ children }) {
  return (
    <th className="border-b border-line px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
      {children}
    </th>
  )
}

function Td({ children, className = '' }) {
  return <td className={`border-b border-line px-4 py-3 align-top text-paper/90 ${className}`}>{children}</td>
}

function BookingsTable({ bookings }) {
  if (bookings === null) return <p className="text-muted">Loading bookings…</p>
  if (!bookings.length) return <p className="text-muted">No bookings yet.</p>

  return (
    <TableShell>
      <thead>
        <tr>
          <Th>Submitted</Th>
          <Th>Name</Th>
          <Th>Contact</Th>
          <Th>Preferred date/time</Th>
          <Th>Service</Th>
          <Th>Style</Th>
          <Th>Notes</Th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <tr key={b.id} className="hover:bg-ink/40">
            <Td className="whitespace-nowrap text-muted">{formatDate(b.createdAt)}</Td>
            <Td className="font-medium">{b.name}</Td>
            <Td>
              <div>{b.email}</div>
              {b.phone && <div className="text-muted">{b.phone}</div>}
            </Td>
            <Td>{b.preferredDateTime || '—'}</Td>
            <Td>
              <span className="tag-chip">{b.serviceType}</span>
            </Td>
            <Td>{b.stylePreference || '—'}</Td>
            <Td className="max-w-xs">{b.notes || '—'}</Td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  )
}

function ContactsTable({ contacts }) {
  if (contacts === null) return <p className="text-muted">Loading contact messages…</p>
  if (!contacts.length) return <p className="text-muted">No contact messages yet.</p>

  return (
    <TableShell>
      <thead>
        <tr>
          <Th>Submitted</Th>
          <Th>Name</Th>
          <Th>Contact</Th>
          <Th>Message</Th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((msg) => (
          <tr key={msg.id} className="hover:bg-ink/40">
            <Td className="whitespace-nowrap text-muted">{formatDate(msg.createdAt)}</Td>
            <Td className="font-medium">{msg.name}</Td>
            <Td>
              <div>{msg.email}</div>
              {msg.phone && <div className="text-muted">{msg.phone}</div>}
            </Td>
            <Td className="max-w-md">{msg.message}</Td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  )
}
