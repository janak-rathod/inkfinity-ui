import SEO from '../components/SEO.jsx'
import ContactForm from '../components/ContactForm.jsx'
import MapSection from '../components/MapSection.jsx'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact — Inkfinity Studio, Surat"
        description="Get in touch with Inkfinity Studio in Surat, Gujarat — address, phone, email, working hours and a contact form for general inquiries."
      />

      <section className="container-page py-14">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl">Get in touch</h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            {/* TODO: replace with your real details */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-paper">Studio</h2>
              <address className="mt-2 space-y-1 text-sm font-body normal-case not-italic text-muted">
                <p>G-09, SHREENATHJI ICON VIP CIRCLE OPP. POWER HOUSE,UTTRAN,SURAT</p>
                <p><a href="tel:+917600589307" className="hover:text-accent">+91 76005 89307</a></p>
                <p>Mon–Sat, 10 AM – 08 PM</p>
              </address>
            </div>

            <MapSection />
          </div>
        </div>
      </section>
    </>
  )
}
