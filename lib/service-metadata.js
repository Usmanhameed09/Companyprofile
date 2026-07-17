import { SITE_URL, BUSINESS } from '@/app/seo.config'
import { LOCALE_CONFIG, localePath } from '@/lib/i18n'
import { getService } from '@/lib/services-data'

/** Shared metadata builder for both the EN and AR service routes. */
export function buildServiceMetadata(slug, locale) {
  const service = getService(slug)
  if (!service) return {}
  const c = service[locale]
  const path = `/services/${slug}`

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: localePath(locale, path),
      languages: {
        en: localePath('en', path),
        ar: localePath('ar', path),
        'x-default': localePath('en', path),
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_CONFIG[locale].ogLocale,
      url: `${SITE_URL}${localePath(locale, path)}`,
      siteName: BUSINESS.brand,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.metaTitle,
      description: c.metaDescription,
      images: ['/og-image.jpg'],
    },
  }
}

/** Service + FAQ structured data for a service page. */
export function buildServiceJsonLd(slug, locale) {
  const service = getService(slug)
  const c = service[locale]
  const url = `${SITE_URL}${localePath(locale, `/services/${slug}`)}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: c.name,
        description: c.metaDescription,
        serviceType: c.name,
        url,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
        inLanguage: locale,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: locale,
        mainEntity: c.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: BUSINESS.brand,
            item: `${SITE_URL}${localePath(locale, '/')}`,
          },
          { '@type': 'ListItem', position: 2, name: c.name, item: url },
        ],
      },
    ],
  }
}
