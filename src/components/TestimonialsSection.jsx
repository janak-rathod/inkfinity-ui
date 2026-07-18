function Stars({ rating }) {
  return (
    <div className="text-accent" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  )
}

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials?.length) return null

  return (
    <section className="bg-charcoal py-16">
      <div className="container-page">
        <p className="eyebrow">What clients say</p>
        <h2 className="mt-2 text-3xl">Real reviews, real healed work</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-card border border-line bg-ink p-6">
              <Stars rating={t.rating} />
              <blockquote className="mt-3 text-sm normal-case leading-relaxed text-paper/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">{t.clientName}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
