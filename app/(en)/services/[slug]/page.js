import { notFound } from 'next/navigation'
import ServicePage from '@/components/ServicePage'
import { SERVICES_DATA, getService } from '@/lib/services-data'
import { buildServiceMetadata, buildServiceJsonLd } from '@/lib/service-metadata'

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  return buildServiceMetadata(params.slug, 'en')
}

export default function Page({ params }) {
  const service = getService(params.slug)
  if (!service) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceJsonLd(params.slug, 'en')),
        }}
      />
      <ServicePage service={service} locale="en" allServices={SERVICES_DATA} />
    </>
  )
}
