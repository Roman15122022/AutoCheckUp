import { Language, Locale } from 'src/types'

export type LocalesContextData = {
  locale: Language
  translations: Locale
  handleChangeLocale: (locale: Language) => void
}
