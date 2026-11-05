// To add a language, list it here with its direction, for example:
// ar: { dir: 'rtl' }
export const locales = {
  en: { dir: 'ltr' },
} as const

export const currentLocale: keyof typeof locales = 'en'
