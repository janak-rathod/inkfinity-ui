import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import HeroSection from '../components/HeroSection.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import SectionDivider from '../components/SectionDivider.jsx'
import { api } from '../api/client.js'

const HIGHLIGHTS = [
  { label: 'Years experience', value: '8+' },
  { label: 'Main styles', value: 'Fine line · Realism · Minimal' },
  { label: 'Focus', value: 'Hygiene-first, single-use needles' }
]

export default function HomePage() {
  const [gallery, setGallery] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    api.getGallery().then(setGallery).catch(() => setGallery([]))
    api.getTestimonials().then(setTestimonials).catch(() => setTestimonials([]))
  }, [])

  return (
    <>
      <SEO
        title="Inkfinity Studio — Fine Line & Custom Tattoos in Ahmedabad"
        description="Fine line, realism, minimal and custom sketch tattoo work in Ahmedabad, Gujarat. Hygiene-first studio — book a session or request a custom sketch."
      />

      <HeroSection />

      <section className="container-page py-14">
        <dl className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="rounded-card border border-line bg-charcoal p-6 shadow-card">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</dt>
              <dd className="mt-2 font-display text-xl uppercase text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SectionDivider />

      <section className="container-page py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2 className="mt-2 text-3xl">A few recent pieces</h2>
          </div>
          <NavLink to="/portfolio" className="btn-secondary">View Full Portfolio</NavLink>
        </div>

        <div className="mt-8">
          <GalleryGrid items={gallery} limit={4} />
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <section className="container-page py-16 text-center">
        <h2 className="text-3xl">Have an idea in mind?</h2>
        <p className="mx-auto mt-3 max-w-lg font-body normal-case text-muted">
          Whether it's a full custom tattoo or a one-off sketch commission, tell us
          what you're picturing and we'll take it from there.
        </p>
        <NavLink to="/book" className="btn-primary mt-6 inline-flex">Book a Session</NavLink>
      </section>
    </>
  )
}
