// ============================================
// SINGLE SOURCE OF TRUTH FOR SEO / BUSINESS DATA
// Edit here — layout.js, sitemap.js, robots.js all read from this.
// ============================================

export const SITE_URL = 'https://www.nmjshades.com'

export const BUSINESS = {
  brand: 'NMJ Shades',
  legalName: 'Nabilah Mohammed Jameel Ali Bati Est.',
  foundingDate: '2014',
  phone: '+966553077471',
  phoneDisplay: '+966 55 307 7471',
  email: 'abdulhameed@nmjshades.com',
  streetAddress: 'Street 14, AlAdamah Tent Market',
  city: 'Dammam',
  region: 'Eastern Province',
  country: 'SA',
}

// Cities with delivered projects — drives areaServed in structured data.
export const AREAS_SERVED = [
  'Dammam',
  'Khobar',
  'Dhahran',
  'Jubail',
  'Riyadh',
  'Al Ahsa',
  'Ras Tanura',
  'Ras Al Khair',
  'Uqair',
  'Jaffurah',
  'Eastern Province',
  'Saudi Arabia',
]

// Mirrors the services in components/Services.js
export const SERVICES = [
  {
    name: 'Car Parking Shades',
    description:
      'High-quality car parking shades designed to protect vehicles from harsh sunlight and heat, ideal for residential, commercial, and industrial use.',
  },
  {
    name: 'Playground Shades',
    description:
      'Durable and UV-protected playground shades for schools, ensuring safety and comfort for children during outdoor activities.',
  },
  {
    name: 'PEB Warehouses',
    description:
      'Pre-engineered steel warehouses built to client specifications — strong, efficient, and suitable for various industrial applications.',
  },
  {
    name: 'Warehouse Curtains',
    description:
      'Flexible and weather-resistant warehouse curtains for commercial spaces to control dust, sunlight, and airflow.',
  },
  {
    name: 'Steel Structures',
    description:
      'Robust steel-framed sheds and shelters suitable for schools, workshops, and commercial spaces, offering long-term durability.',
  },
  {
    name: 'Tarpaulin Covers',
    description:
      'Heavy-duty tarpaulin covers for vehicle and equipment coverage, offering protection from dust, rain, and extreme weather.',
  },
]
