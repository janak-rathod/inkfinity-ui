import { useEffect, useState } from 'react'
import SEO from '../components/SEO.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { api } from '../api/client.js'

const CATEGORIES = ['All', 'Fine Line', 'Realism', 'Minimal', 'Blackwork', 'Sketches']

export default function PortfolioPage() {
  const [items, setItems] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .getGallery(activeCategory === 'All' ? undefined : activeCategory)
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [activeCategory])

  return (
    <>
      <SEO
        title="Portfolio — Inkfinity Studio, Ahmedabad"
        description="Browse fine line, realism, minimal, blackwork and custom sketch tattoo work from Inkfinity Studio in Ahmedabad."
      />

      <section className="container-page py-14">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-2 text-4xl">Recent work</h1>

        {/* Filter bar - sticky under the navbar so it stays reachable while scrolling the grid */}
        <div
          className="sticky top-16 z-40 -mx-5 mt-8 flex flex-wrap gap-2 border-b border-line
            bg-ink/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8"
          role="tablist"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-chip ${activeCategory === cat ? 'filter-chip-active' : 'filter-chip-inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {loading ? (
            <p className="text-muted">Loading work…</p>
          ) : (
            <GalleryGrid items={items} />
          )}
        </div>
      </section>
    </>
  )
}
