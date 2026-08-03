import { NavLink } from 'react-router-dom'
import SectionDivider from './SectionDivider.jsx'


// TODO: replace these four with real studio/tattoo photography.
// See public/images/README.txt for the expected folder.
const COLLAGE_IMAGES = [
  { src: '/public/images/hero/coverup.png', alt: 'Studio artist tattooing a client' }
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Mobile / fallback background - single full-bleed image behind a dark gradient. */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-40 md:hidden"
        style={{ backgroundImage: "url('/public/images/hero/coverup.png')" }}
        aria-hidden="true"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30 md:bg-gradient-to-r md:from-ink md:via-ink/70 md:to-ink/10" aria-hidden="true" />

      {/* Desktop / tablet - diagonal collage of 3 images bleeding off the right edge. */}
      <div className="absolute inset-y-0 right-0 hidden w-[62%] md:block" aria-hidden="true">
        {COLLAGE_IMAGES.map((img, i) => (
          <img 
            key={img.src}
            src={img.src}
            alt=""
            className="absolute inset-0 h-[90%] w-full object-cover"
            // style={{
            //   clipPath:
            //     i === 0
            //       ? 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)'
            //       : i === 1
            //         ? 'polygon(38% 0, 62% 0, 46% 100%, 22% 100%)'
            //         : 'polygon(66% 0, 100% 0, 100% 100%, 78% 100%)',
            //   zIndex: i === 1 ? 2 : 1
            // }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
      </div>

      <div className="container-page relative flex min-h-[86vh] flex-col justify-end gap-6 pb-16 pt-30 sm:min-h-[80vh]">
        <p className="eyebrow">Ahmedabad, Gujarat</p>
        <h1 className="max-w-2xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
          Ink that means <span className="text-accent">something</span>.
        </h1>
        <p className="max-w-xl text-base font-body normal-case text-muted sm:text-lg">
          Fine line, realism &amp; custom sketch tattoo work — a steady hand,
          honest advice, and a studio that treats hygiene as seriously as the art.
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <NavLink to="/portfolio" className="btn-secondary">View Tattoos</NavLink>
          <NavLink to="/book" className="btn-primary !px-8 !py-4 !text-base">Book a Session</NavLink>
        </div>
      </div>

      <SectionDivider className="relative pb-6" />
    </section>
  )
}
