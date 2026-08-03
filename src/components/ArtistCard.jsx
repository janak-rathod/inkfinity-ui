export default function ArtistCard({ name, specialty, photoUrl, bio }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line
      bg-charcoal shadow-card sm:flex-row sm:items-stretch">
      <div className="h-64 w-full shrink-0 bg-ink sm:h-auto sm:w-2/5">
        {/* TODO: replace with a real portrait at public/images/artists/<name>.jpg */}
        <img src={photoUrl} alt={`Portrait of ${name}`} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <h3 className="font-display text-xl uppercase text-paper">{name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">{specialty}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{bio}</p>
      </div>
    </article>
  )
}