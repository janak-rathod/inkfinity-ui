import { NavLink } from 'react-router-dom'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm5.6 14.3c-.2.6-1.4 1.2-2 1.3-.5.1-1.2.2-3.5-.8-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.3 0 .5-.1.2-.2.3-.4.5-.2.2-.4.4-.5.6-.2.2-.4.4-.2.7.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.1 1.4Z" />
    </svg>
  )
}

function StarRow() {
  return (
    <div className="text-accent" aria-hidden="true">
      {'★★★★★'}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg uppercase tracking-tight text-paper">
            Inkfinity <span className="text-accent">Studio</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Fine line, realism &amp; custom sketch tattoo work in Surat, Gujarat.
          </p>

          {/* Google rating */}
          <div className="mt-5 flex items-center gap-2">
            <StarRow />
            <span className="text-sm font-semibold text-paper">4.9/5</span>
            <span className="text-xs text-muted">(120+ Google reviews)</span>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Explore</p>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><NavLink to="/portfolio" className="hover:text-accent">Portfolio</NavLink></li>
            <li><NavLink to="/services" className="hover:text-accent">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:text-accent">About Studio</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-accent">FAQ</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Studio</p>
          {/* TODO: replace with your real address, phone, email and hours */}
          <address className="space-y-2 text-sm not-italic text-paper/80">
            <p>G-09, SHREENATHJI ICON VIP CIRCLE OPP. POWER HOUSE,UTTRAN,SURAT</p>
            <p><a href="tel:+917600589307" className="hover:text-accent">+91 76005 89307</a></p>
            <p>Mon–Sat, 10 AM – 08 PM</p>
          </address>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Follow</p>
          {/* TODO: swap in your real social URLs */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Inkfinity Studio on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line
                text-paper/80 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/917600589307"
              target="_blank"
              rel="noreferrer"
              aria-label="Message Inkfinity Studio on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line
                text-paper/80 transition-colors hover:border-accent hover:text-accent"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <p className="container-page text-xs text-muted">
          © {new Date().getFullYear()} Inkfinity Studio, Surat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
