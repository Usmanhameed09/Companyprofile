import { SITE_URL } from './seo.config'
import { SERVICES_DATA } from '@/lib/services-data'

/** Both language versions of a path, for sitemap hreflang alternates. */
function alternates(path) {
  return {
    languages: {
      en: `${SITE_URL}${path === '/' ? '' : path}`,
      ar: `${SITE_URL}/ar${path === '/' ? '' : path}`,
    },
  }
}

export default function sitemap() {
  const lastModified = new Date()

  const home = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alternates('/'),
    },
    {
      url: `${SITE_URL}/ar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alternates('/'),
    },
  ]

  const servicePages = SERVICES_DATA.flatMap((service) => {
    const path = `/services/${service.slug}`
    return [
      {
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternates(path),
      },
      {
        url: `${SITE_URL}/ar${path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: alternates(path),
      },
    ]
  })

  return [...home, ...servicePages]
}
