import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/app/seo.config'
import { isRTL, localePath } from '@/lib/i18n'

const UI = {
  en: {
    backHome: 'Back to home',
    whatWeOffer: 'What we offer',
    ourWork: 'Our work',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Get a free quote',
    ctaBody: 'Tell us about your site and we will get back to you with a quote.',
    callUs: 'Call',
    emailUs: 'Email',
    whatsapp: 'WhatsApp',
    otherServices: 'Other services',
    since: 'Serving Saudi Arabia since 2014',
  },
  ar: {
    backHome: 'العودة إلى الصفحة الرئيسية',
    whatWeOffer: 'ما نقدمه',
    ourWork: 'أعمالنا',
    faqTitle: 'الأسئلة الشائعة',
    ctaTitle: 'احصل على عرض سعر مجاني',
    ctaBody: 'أخبرنا عن موقعك وسنعاود التواصل معك بعرض سعر.',
    callUs: 'اتصل',
    emailUs: 'البريد الإلكتروني',
    whatsapp: 'واتساب',
    otherServices: 'خدمات أخرى',
    since: 'نخدم المملكة العربية السعودية منذ 2014',
  },
}

export default function ServicePage({ service, locale, allServices }) {
  const t = UI[locale]
  const c = service[locale]
  const rtl = isRTL(locale)
  // Bebas Neue and Oswald carry no Arabic glyphs — use Cairo on Arabic pages.
  const display = rtl ? 'font-arabic font-bold' : 'font-display'
  const heading = rtl ? 'font-arabic font-semibold' : 'font-heading'

  return (
    <main className="relative bg-nmj-navy min-h-screen" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={c.h1}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nmj-navy/80 via-nmj-navy/90 to-nmj-navy" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href={localePath(locale, '/')}
            className="inline-flex items-center gap-2 text-nmj-sand/60 hover:text-nmj-gold transition-colors text-sm mb-8"
          >
            <span aria-hidden="true">{rtl ? '→' : '←'}</span>
            {t.backHome}
          </Link>

          <span className={`block ${heading} text-nmj-gold text-xs tracking-[0.25em] uppercase mb-4`}>
            {t.since}
          </span>

          <h1 className={`${display} text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl`}>
            {c.h1}
          </h1>

          <p className="text-nmj-sand/70 text-lg max-w-2xl mb-10">{c.intro}</p>

          <div className={`flex flex-wrap gap-4 ${rtl ? 'justify-end sm:justify-start' : ''}`}>
            <a href={`tel:${BUSINESS.phone}`} className="btn-premium">
              {t.callUs} {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.phone.replace('+', '')}`}
              className="btn-outline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-nmj-navy-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`${display} text-3xl md:text-4xl text-white mb-10`}>{t.whatWeOffer}</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {c.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white/5 border border-white/10 p-5"
              >
                <span className="text-nmj-gold mt-1 shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-nmj-sand/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project gallery */}
      {service.projectImages?.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className={`${display} text-3xl md:text-4xl text-white mb-10`}>{t.ourWork}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.projectImages.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={src}
                    alt={`${c.name} — ${BUSINESS.brand}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-nmj-navy-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`${display} text-3xl md:text-4xl text-white mb-10`}>{t.faqTitle}</h2>
          <div className="max-w-3xl space-y-4">
            {c.faqs.map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 p-6">
                <summary className={`${heading} text-white cursor-pointer list-none flex items-center justify-between gap-4`}>
                  {faq.q}
                  <span className="text-nmj-gold shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-nmj-sand/70 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`${display} text-3xl md:text-4xl text-white mb-10`}>{t.otherServices}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allServices
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={localePath(locale, `/services/${s.slug}`)}
                  className="block bg-white/5 border border-white/10 p-5 hover:border-nmj-gold/50 hover:bg-white/10 transition-all"
                >
                  <span className={`text-white/80 ${heading} text-sm`}>{s[locale].name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-nmj-navy-light border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className={`${display} text-3xl md:text-4xl text-white mb-4`}>{t.ctaTitle}</h2>
          <p className="text-nmj-sand/60 mb-8 max-w-md mx-auto">{t.ctaBody}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-premium">
              {t.callUs} {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="btn-outline">
              {t.emailUs}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
