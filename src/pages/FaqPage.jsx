import SEO from '../components/SEO.jsx'

const FAQS = [
  { q: 'How do you sterilize equipment?', a: 'Every needle is single-use and opened in front of you. Work surfaces and non-disposable tools are disinfected with medical-grade solutions between every client.' },
  { q: 'Does it hurt?', a: "It varies by placement and person, but most describe it as a scratching or vibrating sensation rather than sharp pain. We work at a pace that's comfortable for you." },
  { q: 'How long does a session take?', a: 'Small pieces can take 30–60 minutes; larger custom work is usually split across multiple sessions, discussed during your consultation.' },
  { q: 'How do I care for a new tattoo?', a: "We'll walk you through aftercare in person and send written instructions — generally: keep it clean and moisturized, avoid direct sun and swimming for about two weeks." },
  { q: 'What about touch-ups?', a: 'Minor touch-ups within a few months of your original session are complimentary — just get in touch to schedule one.' },
  { q: 'Can I reschedule my booking?', a: 'Yes — let us know at least 24 hours ahead via the contact page or phone and we\'ll find a new slot.' }
]

export default function FaqPage() {
  return (
    <>
      <SEO
        title="Hygiene & FAQs — Inkfinity Studio, Ahmedabad"
        description="Answers on hygiene and sterilization, pain, session length, aftercare, touch-ups and rescheduling at Inkfinity Studio, Ahmedabad."
      />

      <section className="container-page py-14">
        <p className="eyebrow">Good to know</p>
        <h1 className="mt-2 text-4xl">Hygiene &amp; frequently asked questions</h1>

        <dl className="mt-10 divide-y divide-line border-t border-line">
          {FAQS.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="font-display text-lg uppercase text-paper">{item.q}</dt>
              <dd className="mt-2 text-sm font-body normal-case leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
