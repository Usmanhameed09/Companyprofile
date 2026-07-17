import './globals.css'
import { SITE_URL, BUSINESS, AREAS_SERVED, SERVICES } from './seo.config'

const title = 'Car Parking Shades & Steel Structures in Saudi Arabia | NMJ Shades'
const description =
  'NMJ Shades (Nabilah Mohammed Jameel Ali Bati Est.) designs and installs car parking shades, playground shades, PEB warehouses, warehouse curtains, steel structures and tarpaulin covers across Saudi Arabia. Based in Dammam since 2014. Call +966 55 307 7471 for a free quote.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | NMJ Shades',
  },
  description,
  applicationName: BUSINESS.brand,
  authors: [{ name: BUSINESS.brand, url: SITE_URL }],
  creator: BUSINESS.brand,
  publisher: BUSINESS.legalName,
  category: 'Construction',
  keywords: [
    'car parking shades Saudi Arabia',
    'car parking shades Dammam',
    'parking shade contractor KSA',
    'playground shades Saudi Arabia',
    'school shade structures KSA',
    'PEB warehouse Saudi Arabia',
    'pre engineered building Dammam',
    'warehouse curtains KSA',
    'steel structures Dammam',
    'steel fabrication Eastern Province',
    'tarpaulin covers Saudi Arabia',
    'shade manufacturer Khobar',
    'shade contractor Jubail',
    'car parking shades Riyadh',
    'مظلات سيارات',
    'مظلات مواقف السيارات الدمام',
    'مظلات مدارس',
    'هناجر ومستودعات',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: BUSINESS.brand,
    title,
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Car parking shades installed by NMJ Shades in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export const viewport = {
  themeColor: '#0f1c2e',
  width: 'device-width',
  initialScale: 1,
}

// Structured data — helps Google understand the business, its services and where
// it operates. Rendered as JSON-LD so it is present in the static HTML.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS.brand,
      legalName: BUSINESS.legalName,
      alternateName: BUSINESS.legalName,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/og-image.jpg`,
      description,
      foundingDate: BUSINESS.foundingDate,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: '$$',
      currenciesAccepted: 'SAR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        addressCountry: BUSINESS.country,
      },
      areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
      knowsLanguage: ['en', 'ar'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shade & Steel Structure Services',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            serviceType: service.name,
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          },
        })),
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        contactType: 'sales',
        areaServed: 'SA',
        availableLanguage: ['English', 'Arabic'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS.brand,
      description,
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-nmj-cream text-nmj-navy antialiased">
        {children}
      </body>
    </html>
  )
}
