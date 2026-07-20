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
                <p>Satellite Road, Surat, Gujarat 380015</p>
                <p><a href="tel:+919000000000" className="hover:text-accent">+91 90000 00000</a></p>
                <p><a href="mailto:hello@Inkfinitystudio.in" className="hover:text-accent">hello@Inkfinitystudio.in</a></p>
                <p>Tue–Sun, 11am–8pm · Closed Mondays</p>
              </address>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-paper">Follow</h2>
              <ul className="mt-2 space-y-1 text-sm font-body normal-case text-muted">
                <li><a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
                <li><a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp</a></li>
              </ul>
            </div>

            <MapSection />
          </div>
        </div>
      </section>
    </>
  )
}
