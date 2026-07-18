import { useState } from 'react'

/**
 * Responsive portfolio grid: 2 columns on mobile, 3-4 on desktop.
 * `items` come from GET /api/gallery (see src/pages/PortfolioPage.jsx).
 * Pass `limit` to show only the first N (used for the Home page highlights).
 */
export default function GalleryGrid({ items, limit }) {
  const [lightboxItem, setLightboxItem] = useState(null)
  const visibleItems = limit ? items.slice(0, limit) : items

  if (!visibleItems.length) {
    return <p className="text-muted">No pieces in this category yet — check back soon.</p>
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxItem(item)}
            className="group relative aspect-[4/5] overflow-hidden rounded-card border border-line
              bg-charcoal text-left shadow-card transition-colors hover:border-accent/50"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t
                from-ink/95 via-ink/20 to-transparent p-4 opacity-0 transition-opacity
                duration-300 group-hover:opacity-100"
            >
              <h3 className="font-display text-base uppercase leading-tight text-paper">{item.title}</h3>
              <span className="tag-chip mt-2 w-fit">{item.category}</span>
            </div>
            <span
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full
                bg-ink/70 text-accent opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        ))}
      </div>

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-3xl leading-none text-paper/80 hover:text-accent"
            aria-label="Close"
            onClick={() => setLightboxItem(null)}
          >
            &times;
          </button>
          <figure className="max-h-[85vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              className="max-h-[75vh] w-full rounded-card border border-line object-contain"
            />
            <figcaption className="mt-3 text-sm text-muted">
              <span className="font-medium text-paper">{lightboxItem.title}</span> — {lightboxItem.description}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
