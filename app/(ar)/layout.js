import '../globals.css'
import { SITE_URL, BUSINESS, AREAS_SERVED } from '../seo.config'
import { SERVICES_DATA } from '@/lib/services-data'

const title = 'مظلات سيارات وهياكل حديدية في السعودية | إن إم جيه للمظلات'
const description =
  'إن إم جيه للمظلات (مؤسسة نبيلة محمد جميل علي باتي) — تصميم وتصنيع وتركيب مظلات مواقف السيارات ومظلات المدارس والمستودعات سابقة الهندسة والهياكل الحديدية في جميع أنحاء المملكة العربية السعودية. مقرنا الدمام منذ 2014. للاستفسار: 0553077471'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | إن إم جيه للمظلات',
  },
  description,
  applicationName: BUSINESS.brand,
  publisher: BUSINESS.legalName,
  category: 'Construction',
  keywords: [
    'مظلات سيارات',
    'مظلات مواقف السيارات',
    'مظلات سيارات الدمام',
    'مظلات سيارات الرياض',
    'مظلات مدارس',
    'مظلات ملاعب',
    'هناجر ومستودعات',
    'مستودعات سابقة الهندسة',
    'هياكل حديدية',
    'ستائر مستودعات',
    'مقاول مظلات السعودية',
    'تركيب مظلات الخبر',
    'مظلات الجبيل',
  ],
  alternates: {
    canonical: '/ar',
    languages: {
      en: '/',
      ar: '/ar',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: `${SITE_URL}/ar`,
    siteName: BUSINESS.brand,
    title,
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مظلات مواقف السيارات من إن إم جيه للمظلات في السعودية',
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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0f1c2e',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      // Same @id as the English layout: one business, two languages.
      '@id': `${SITE_URL}/#business`,
      name: 'إن إم جيه للمظلات',
      alternateName: BUSINESS.brand,
      legalName: 'مؤسسة نبيلة محمد جميل علي باتي',
      url: `${SITE_URL}/ar`,
      image: `${SITE_URL}/og-image.jpg`,
      description,
      foundingDate: BUSINESS.foundingDate,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: '$$',
      currenciesAccepted: 'SAR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'شارع 14، سوق الخيام، العدامة',
        addressLocality: 'الدمام',
        addressRegion: 'المنطقة الشرقية',
        addressCountry: 'SA',
      },
      areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
      knowsLanguage: ['ar', 'en'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات المظلات والهياكل الحديدية',
        itemListElement: SERVICES_DATA.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.ar.name,
            description: service.ar.intro,
            serviceType: service.ar.name,
            url: `${SITE_URL}/ar/services/${service.slug}`,
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
          },
        })),
      },
    },
  ],
}

export default function ArabicRootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Cairo:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-arabic bg-nmj-cream text-nmj-navy antialiased">{children}</body>
    </html>
  )
}
