import SEO from '../components/SEO.jsx'
import BookingForm from '../components/BookingForm.jsx'

export default function BookingPage() {
  return (
    <>
      <SEO
        title="Book a Session — Inkfinity Studio, Ahmedabad"
        description="Request a tattoo or sketch session at Inkfinity Studio in Ahmedabad. Pick a service type, style preference and preferred date and time."
      />

      <section className="container-page py-14">
        <p className="eyebrow">Booking</p>
        <h1 className="mt-2 text-4xl">Book a session</h1>
        <p className="mt-3 max-w-xl font-body normal-case text-muted">
          Fill this in and we'll confirm your slot by email or phone. For larger
          custom pieces we may follow up to schedule a short consultation first.
        </p>

        <div className="mt-10 max-w-xl">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
