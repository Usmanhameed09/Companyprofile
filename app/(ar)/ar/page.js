import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS } from '@/app/seo.config'
import { SERVICES_DATA } from '@/lib/services-data'

const STATS = [
  { value: '10+', label: 'سنوات من الخبرة' },
  { value: '50+', label: 'عميل موثوق' },
  { value: '100%', label: 'رضا العملاء' },
]

const CLIENTS = [
  { name: 'الخطوط الحديدية السعودية', logo: '/images/sr.png' },
  { name: 'المراعي', logo: '/images/Almarailogo.PNG' },
  { name: 'مجموعة التميمي', logo: '/images/tamami.PNG' },
  { name: 'مجموعة الشلوي', logo: '/images/shalwi.png' },
  { name: 'مجموعة المدارس العالمية', logo: '/images/isgggg.png' },
  { name: 'شركة المحولات السعودية', logo: '/images/stc-logo.png' },
  { name: 'ويسكوسا', logo: '/images/wesco.png' },
  { name: 'يوسف بن أحمد كانو', logo: '/images/kanoo.PNG' },
]

const PROJECT_IMAGES = [
  { src: '/images/ras.jpeg', alt: 'مظلات مواقف السيارات — منشأة أرامكو رأس تنورة' },
  { src: '/images/Bisak.png', alt: 'مظلات ملاعب — مدرسة بيساك الخبر' },
  { src: '/images/n4.jpeg', alt: 'مظلات مواقف السيارات — قاعدة الجبيل البحرية' },
  { src: '/images/tent.jpeg', alt: 'مظلات مواقف الموظفين — شركة المحولات السعودية' },
  { src: '/images/rail.jpeg', alt: 'مظلات مواقف السيارات — محطة قطار الرياض' },
  { src: '/images/isgdammam.jpeg', alt: 'مظلات ملاعب — مجموعة المدارس العالمية الدمام' },
  { src: '/images/wes.jpeg', alt: 'حواجز اللحام — مصنع ويسكوسا الدمام' },
  { src: '/images/slfe.jpg', alt: 'مظلات مواقف السيارات — شركة SLFE الدمام' },
]

const AREAS = [
  'الدمام',
  'الخبر',
  'الظهران',
  'الجبيل',
  'الرياض',
  'الأحساء',
  'رأس تنورة',
  'رأس الخير',
  'العقير',
  'الجافورة',
]

export default function ArabicHome() {
  const wa = `https://wa.me/${BUSINESS.phone.replace('+', '')}`

  return (
    <main className="relative bg-nmj-navy min-h-screen font-arabic">
      {/* Language switch */}
      <div className="border-b border-white/10 bg-nmj-navy">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <span className="text-nmj-gold font-bold text-lg">NMJ | إن إم جيه للمظلات</span>
          <Link href="/" className="text-nmj-sand/60 hover:text-nmj-gold text-sm transition-colors">
            English
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/carpark.jpeg"
            alt="مظلات مواقف السيارات في السعودية"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nmj-navy/85 via-nmj-navy/90 to-nmj-navy" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="inline-block px-4 py-2 border border-nmj-gold/30 bg-nmj-gold/5 text-nmj-gold text-xs tracking-widest mb-6">
            تأسست عام 2014 • الدمام، المملكة العربية السعودية
          </span>

          <h1 className="font-arabic font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight">
            مظلات مواقف السيارات والهياكل الحديدية في المملكة العربية السعودية
          </h1>

          <p className="text-nmj-sand/70 text-lg max-w-2xl mb-10 leading-relaxed">
            مؤسسة نبيلة محمد جميل علي باتي — أكثر من عشر سنوات في تصميم وتصنيع وتركيب مظلات مواقف السيارات ومظلات المدارس
            والمستودعات سابقة الهندسة والهياكل الحديدية في جميع أنحاء المملكة.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-premium">
              اتصل <span dir="ltr">{BUSINESS.phoneDisplay}</span>
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline">
              واتساب
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mt-16">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <span dir="ltr" className="block font-arabic font-bold text-3xl md:text-5xl text-nmj-gold mb-1">
                  {s.value}
                </span>
                <span className="text-nmj-sand/50 text-xs md:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-nmj-navy-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-arabic font-bold text-3xl md:text-5xl text-white mb-4">خدماتنا</h2>
          <p className="text-nmj-sand/60 mb-12 max-w-2xl">
            حلول متكاملة للمظلات والهياكل الحديدية — من التصميم والتصنيع حتى التركيب.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.slug}
                href={`/ar/services/${service.slug}`}
                className="group block bg-white/5 border border-white/10 hover:border-nmj-gold/50 hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.ar.name}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-arabic font-semibold text-xl text-white group-hover:text-nmj-gold transition-colors mb-2">
                    {service.ar.name}
                  </h3>
                  <p className="text-nmj-sand/60 text-sm leading-relaxed">{service.ar.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-arabic font-bold text-3xl md:text-5xl text-white mb-4">مشاريعنا</h2>
          <p className="text-nmj-sand/60 mb-12 max-w-2xl">
            نفّذنا مشاريع لأرامكو السعودية والخطوط الحديدية السعودية والقوات البحرية الملكية
            السعودية ومجموعة المدارس العالمية وغيرها.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROJECT_IMAGES.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 bg-nmj-navy-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-arabic font-bold text-3xl md:text-5xl text-white mb-12">
            عملاؤنا
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="bg-white/5 border border-white/10 p-6 flex flex-col items-center"
              >
                <div className="relative w-full aspect-[16/10] mb-3">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <span className="text-white/80 text-sm text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-arabic font-bold text-3xl md:text-5xl text-white mb-6">
            المناطق التي نخدمها
          </h2>
          <p className="text-nmj-sand/60 mb-8 max-w-2xl">
            مقرنا في الدمام بالمنطقة الشرقية، ونعمل في جميع أنحاء المملكة العربية السعودية.
          </p>
          <div className="flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-5 py-2 bg-white/5 border border-white/10 text-nmj-sand/70 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-nmj-navy-light border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-arabic font-bold text-3xl md:text-5xl text-white mb-12">
            تواصل معنا
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="space-y-6">
              <div>
                <span className="block text-nmj-gold text-sm mb-1">العنوان</span>
                <span className="text-nmj-sand/70">
                  شارع 14، سوق الخيام، العدامة
                  <br />
                  الدمام، المملكة العربية السعودية
                </span>
              </div>
              <div>
                <span className="block text-nmj-gold text-sm mb-1">الهاتف</span>
                <a href={`tel:${BUSINESS.phone}`} className="text-nmj-sand/70 hover:text-nmj-gold" dir="ltr">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-nmj-gold text-sm mb-1">البريد الإلكتروني</span>
                <a href={`mailto:${BUSINESS.email}`} className="text-nmj-sand/70 hover:text-nmj-gold" dir="ltr">
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 flex flex-col justify-center">
              <h3 className="font-arabic font-semibold text-xl text-white mb-3">
                احصل على عرض سعر مجاني
              </h3>
              <p className="text-nmj-sand/60 mb-6 text-sm leading-relaxed">
                أخبرنا عن مشروعك وسنعاود التواصل معك بعرض سعر.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS.phone}`} className="btn-premium">
                  اتصل بنا
                </a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-nmj-sand/40 text-sm">
            © {new Date().getFullYear()} إن إم جيه للمظلات — مؤسسة نبيلة محمد جميل علي باتي
          </span>
          <Link href="/" className="text-nmj-sand/60 hover:text-nmj-gold text-sm">
            English
          </Link>
        </div>
      </footer>
    </main>
  )
}
