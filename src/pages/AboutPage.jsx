import { useEffect, useState } from 'react'
import SEO from '../components/SEO.jsx'
import ArtistCard from '../components/ArtistCard.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import { api } from '../api/client.js'

// TODO: replace with your real artists
const ARTISTS = [
  { name: 'Studio Founder', specialty: 'Fine line & minimal', photoUrl: '/images/portfolio/artist.jpeg', bio: 'Started Inkfinity Studio to bring a calmer, more custom approach to tattooing in Surat.' }
]

const EXPERIENCE_STATS = [
  { label: 'Years experience', value: '8+' },
  { label: 'Happy clients', value: '500+' },
  { label: 'Hygiene focus', value: '100%' },
  { label: 'Google rating', value: '4.9/5' }
]

export default function AboutPage() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    api.getTestimonials().then(setTestimonials).catch(() => setTestimonials([]))
  }, [])

  return (
    <>
      <SEO
        title="About — Inkfinity Studio, Surat"
        description="Meet the artists behind Inkfinity Studio in Surat and learn about our hygiene standards and approach to custom tattoo design."
      />

      {/* Who we are + story, with a photo alongside on tablet/desktop */}
      <section className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">About the studio</p>
            <h1 className="mt-2 max-w-2xl text-4xl">
              Based in Surat, built around custom design and careful craft.
            </h1>
            {/* TODO: replace with your real studio story */}
            <p className="mt-5 max-w-2xl font-body normal-case text-muted">
              Inkfinity Studio started as a small sketch and tattoo practice with one
              simple idea: every piece should be designed for the person wearing it,
              not picked off a wall. That means real consultations, honest advice on
              what will age well, and a studio that takes hygiene as seriously as the
              art itself.
            </p>
          </div>

          {/* TODO: replace with a real studio/artist photo, e.g. public/images/about/studio-hero.jpg */}
          {/* <div className="aspect-[4/3] w-full overflow-hidden rounded-card border border-line md:aspect-[5/4]">
            <img
              src="/images/about/studio-hero.jpg"
              alt="Artist at work in Inkfinity Studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div> */}
        </div>

        {/* Experience highlights */}
        <dl className="mt-10 grid grid-cols-2 gap-4 rounded-card border border-line bg-charcoal p-6 sm:grid-cols-4 sm:p-8">
          {EXPERIENCE_STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-2xl uppercase text-accent sm:text-3xl">{stat.value}</dd>
              <dt className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Meet the artists - single column so one artist doesn't leave a gap in a multi-column grid */}
      <section className="container-page pb-14">
        <h2 className="text-2xl">Meet the artists</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      </section>

      {/* Approach and hygiene philosophy - why you'd choose to work with us specifically */}
      <section className="bg-charcoal py-14">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">Our approach</h2>
            <p className="mt-3 font-body normal-case text-muted">
              Every project starts with a conversation — about placement, sizing,
              and what the piece needs to say. We'd rather talk you out of a
              design that won't age well than rush into it.
            </p>
          </div>
          <div>
            <h2 className="text-2xl">Hygiene &amp; standards</h2>
            <p className="mt-3 font-body normal-case text-muted">
              Single-use, sterile needles opened in front of you, medical-grade
              disinfection between every client, and licensed ink from
              trusted suppliers. See our full FAQ for details on aftercare.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
    </>
  )
}