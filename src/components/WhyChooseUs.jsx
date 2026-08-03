const REASONS = [
  {
    title: 'Hygienic Studio',
    description: 'Medical-grade disinfection and a sterile workspace, every session.',
    icon: <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
  },
  {
    title: 'Single-Use Needles',
    description: 'Every needle is sealed and opened in front of you, once, then discarded.',
    icon: <path d="M4 20 20 4M14 4l6 6M9 15l-2 5 5-2 7-7-3-3-7 7Z" />
  },
  {
    title: 'Experienced Artists',
    description: 'Years of dedicated work across fine line, realism and blackwork.',
    icon: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 16l9 5 9-5M3 12l9 5 9-5" />
  },
  {
    title: 'Premium Ink',
    description: 'High-quality, skin-safe, long-lasting inks from trusted suppliers.',
    icon: <path d="M12 2c3 3.5 6 7.6 6 11a6 6 0 1 1-12 0c0-3.4 3-7.5 6-11Z" />
  },
  {
    title: 'Free Consultation',
    description: 'Talk through placement, sizing and design before you commit to anything.',
    icon: <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 20l1.1-5.6A8.5 8.5 0 1 1 21 11.5Z" />
  },
  {
    title: 'Custom Designs',
    description: 'Every piece is designed around your idea — never picked off a wall.',
    icon: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
  }
]

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-16">
      <div className="container-page">
        <p className="eyebrow">Why choose us</p>
        <h2 className="mt-2 text-3xl">What makes Inkline different</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-card border border-line bg-ink p-6 transition-colors hover:border-accent/40"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {reason.icon}
              </svg>
              <h3 className="mt-4 font-display text-base uppercase text-paper">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
