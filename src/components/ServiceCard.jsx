import { NavLink } from 'react-router-dom'

export default function ServiceCard({ title, description, priceFrom, ctaLabel, ctaTo = '/book' }) {
  return (
    <article className="flex flex-col justify-between rounded-card border border-line bg-charcoal
      p-6 shadow-card transition-colors hover:border-accent/40">
      <div>
        <h3 className="font-display text-xl uppercase text-paper">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
        {/* Placeholder pricing - update once you finalize your price list */}
        <p className="text-sm font-semibold text-accent">From {priceFrom}</p>
        <NavLink to={ctaTo} className="btn-secondary !px-4 !py-2 text-xs">
          {ctaLabel}
        </NavLink>
      </div>
    </article>
  )
}
