import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found — Inkfinity Studio" />
      <section className="container-page py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-3xl">That page doesn't exist</h1>
        <NavLink to="/" className="btn-primary mt-6 inline-flex">Back to Home</NavLink>
      </section>
    </>
  )
}
