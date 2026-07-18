import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
]

const linkClass = ({ isActive }) =>
  `border-b-2 pb-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
    isActive ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-paper'
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="font-display text-xl uppercase tracking-tight text-paper">
          INKFINITY <span className="text-accent">Studio</span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/book" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
          Book Now
        </NavLink>

        {/* Hamburger - mobile only */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 bg-paper transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-paper transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-6 bg-paper transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <MobileMenu id="mobile-menu" open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  )
}
