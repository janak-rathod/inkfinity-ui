import { NavLink } from 'react-router-dom'

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
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Explore</p>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><NavLink to="/portfolio" className="hover:text-accent">Portfolio</NavLink></li>
            <li><NavLink to="/services" className="hover:text-accent">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:text-accent">About</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-accent">FAQ</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Studio</p>
          {/* TODO: replace with your real address, phone, email and hours */}
          <address className="space-y-2 text-sm not-italic text-paper/80">
            <p>Satellite Road, Surat, Gujarat 380015</p>
            <p><a href="tel:+919000000000" className="hover:text-accent">+91 90000 00000</a></p>
            <p><a href="mailto:hello@Inkfinitystudio.in" className="hover:text-accent">hello@Inkfinitystudio.in</a></p>
            <p>Tue–Sun, 11am–8pm · Closed Mondays</p>
          </address>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Follow</p>
          {/* TODO: swap in your real social URLs */}
          <ul className="space-y-2 text-sm text-paper/80">
            <li><a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer" className="hover:text-accent">Facebook</a></li>
            <li><a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp</a></li>
          </ul>
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
