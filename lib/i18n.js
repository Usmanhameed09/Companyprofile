// ============================================
// i18n CONFIGURATION
// English is served at "/" (no prefix) so the existing canonical homepage
// URL is preserved. Arabic is served at "/ar".
// ============================================

export const LOCALES = ['en', 'ar']
export const DEFAULT_LOCALE = 'en'

export const LOCALE_CONFIG = {
  en: {
    code: 'en',
    htmlLang: 'en',
    dir: 'ltr',
    name: 'English',
    nativeName: 'English',
    ogLocale: 'en_US',
    // English lives at the root.
    prefix: '',
  },
  ar: {
    code: 'ar',
    htmlLang: 'ar',
    dir: 'rtl',
    name: 'Arabic',
    nativeName: 'العربية',
    ogLocale: 'ar_SA',
    prefix: '/ar',
  },
}

export function isRTL(locale) {
  return LOCALE_CONFIG[locale]?.dir === 'rtl'
}

/** Build a locale-aware path: localePath('ar', '/services/car-parking-shades') */
export function localePath(locale, path = '/') {
  const prefix = LOCALE_CONFIG[locale]?.prefix ?? ''
  if (path === '/') return prefix || '/'
  return `${prefix}${path}`
}
