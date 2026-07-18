import SEO from '../components/SEO.jsx'
import ArtistCard from '../components/ArtistCard.jsx'

// TODO: replace with your real artists
const ARTISTS = [
  { name: 'Studio Founder', specialty: 'Fine line & minimal', photoUrl: '/images/artists/founder.jpg', bio: 'Started Inkfinity Studio to bring a calmer, more custom approach to tattooing in Ahmedabad.' },
  { name: 'Guest Artist', specialty: 'Realism & blackwork', photoUrl: '/images/artists/guest.jpg', bio: 'Specializes in black & grey realism and larger geometric blackwork pieces.' }
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About — Inkfinity Studio, Ahmedabad"
        description="Meet the artists behind Inkfinity Studio in Ahmedabad and learn about our hygiene standards and approach to custom tattoo design."
      />

      <section className="container-page py-14">
        <p className="eyebrow">About the studio</p>
        <h1 className="mt-2 max-w-2xl text-4xl">
          Based in Ahmedabad, built around custom design and careful craft.
        </h1>
        {/* TODO: replace with your real studio story */}
        <p className="mt-5 max-w-2xl font-body normal-case text-muted">
          Inkfinity Studio started as a small sketch and tattoo practice with one
          simple idea: every piece should be designed for the person wearing it,
          not picked off a wall. That means real consultations, honest advice on
          what will age well, and a studio that takes hygiene as seriously as the
          art itself.
        </p>
      </section>

      <section className="container-page pb-14">
        <h2 className="text-2xl">The artists</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-14">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">Our approach</h2>
            <p className="mt-3 font-body normal-case text-muted">
              Every project starts with a conversation — about placement, sizing,
              and what the piece needs to say. We'd rather talk you out of a
              design that won't age well than rush into it.
            </p>
          </div>
          <div>
            <h2 className="text-2xl">Hygiene &amp; standards</h2>
            <p className="mt-3 font-body normal-case text-muted">
              Single-use, sterile needles opened in front of you, medical-grade
              disinfection between every client, and licensed ink from
              trusted suppliers. See our full FAQ for details on aftercare.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
