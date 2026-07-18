import { useEffect } from 'react'

/**
 * Minimal per-route SEO: sets document.title and the description meta tag.
 * Good enough for a small marketing site rendered client-side. If you later
 * need real crawler-visible per-route meta (not just what a JS-executing
 * bot sees), consider pre-rendering the build or migrating to a
 * server-rendered framework - see README "SEO notes".
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
