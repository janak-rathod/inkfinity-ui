import { NavLink } from 'react-router-dom'
import SectionDivider from './SectionDivider.jsx'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* TODO: replace with a real studio photo (see public/images/README.txt).
          Kept as a dark placeholder so the layout works with no image. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" aria-hidden="true" />

      <div className="container-page relative flex min-h-[86vh] flex-col justify-end gap-6 pb-16 pt-28 sm:min-h-[80vh]">
        <p className="eyebrow">Surat, Gujarat</p>
        <h1 className="max-w-2xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
          Ink that means <span className="text-accent">something</span>.
        </h1>
        <p className="max-w-xl text-base font-body normal-case text-muted sm:text-lg">
          Fine line, realism &amp; custom sketch tattoo work — a steady hand,
          honest advice, and a studio that treats hygiene as seriously as the art.
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <NavLink to="/portfolio" className="btn-secondary">View Tattoos</NavLink>
          <NavLink to="/book" className="btn-primary">Book a Session</NavLink>
        </div>
      </div>

      <SectionDivider className="relative pb-6" />
    </section>
  )
}
