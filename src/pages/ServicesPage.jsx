import SEO from '../components/SEO.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

// Placeholder pricing - replace with your real price list.
const TATTOO_SERVICES = [
  { title: 'Custom Tattoo Design', description: 'A fully custom piece designed around your idea, in fine line, realism, minimal or blackwork.', priceFrom: '₹3,500', ctaLabel: 'Book Tattoo Session' },
  { title: 'Cover-Up Work', description: 'Redesigning or reworking existing tattoos you no longer want, with a consultation first.', priceFrom: '₹5,000', ctaLabel: 'Book Consultation' },
  { title: 'Small / Flash Pieces', description: 'Smaller pre-drawn or simple designs — a good starting point for first tattoos.', priceFrom: '₹1,500', ctaLabel: 'Book Tattoo Session' }
]

const SKETCH_SERVICES = [
  { title: 'Commissioned Sketch / Illustration', description: 'Graphite or ink portrait and illustration commissions, framed or digital.', priceFrom: '₹2,000', ctaLabel: 'Request Sketch', ctaTo: '/contact' },
  { title: 'Tattoo Concept Sketch', description: "A detailed design sketch of your tattoo idea before it's inked, with revisions.", priceFrom: '₹500', ctaLabel: 'Request Sketch', ctaTo: '/contact' }
]

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services & Pricing — Inkfinity Studio, Ahmedabad"
        description="Custom tattoo design, cover-ups, flash pieces and commissioned sketches at Inkfinity Studio, Ahmedabad. See starting prices and book a session."
      />

      <section className="container-page py-14">
        <p className="eyebrow">Services</p>
        <h1 className="mt-2 text-4xl">Tattoo &amp; sketch services</h1>
        <p className="mt-3 max-w-xl font-body normal-case text-muted">
          Prices below are starting points — final pricing depends on size,
          placement and detail, confirmed during a free consultation.
        </p>

        <h2 className="mt-12 text-2xl">Tattoo</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TATTOO_SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <h2 className="mt-14 text-2xl">Sketch &amp; illustration</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKETCH_SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  )
}
