export default function MapSection() {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-card border border-line">
      {/* TODO: replace the src with your real Google Maps embed URL
          (Google Maps > Share > Embed a map > copy the src of the iframe) */}
      <iframe
        title="Inkfinity Studio location"
        src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
        className="h-full w-full border-0 grayscale invert-[0.9] contrast-[1.1]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
