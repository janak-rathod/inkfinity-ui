import { NavLink } from 'react-router-dom'

export default function MobileMenu({ id, open, onClose, links }) {
  return (
    <div
      id={id}
      className={`overflow-hidden border-b border-line bg-ink transition-[max-height] duration-300 md:hidden ${
        open ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <ul className="container-page flex flex-col gap-1 py-4">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block rounded-md px-2 py-3 text-base font-semibold uppercase tracking-wide ${
                  isActive ? 'text-accent' : 'text-paper/85'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="pt-2">
          <NavLink to="/book" onClick={onClose} className="btn-primary block w-full text-center">
            Book Now
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
