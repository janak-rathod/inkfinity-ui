export default function ArtistCard({ name, specialty, photoUrl, bio }) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-charcoal shadow-card">
      <div className="aspect-[4/5] w-full bg-ink">
        {/* TODO: replace with a real portrait at public/images/artists/<name>.jpg */}
        <img src={photoUrl} alt={`Portrait of ${name}`} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg uppercase text-paper">{name}</h3>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-accent">{specialty}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{bio}</p>
      </div>
    </article>
  )
}
