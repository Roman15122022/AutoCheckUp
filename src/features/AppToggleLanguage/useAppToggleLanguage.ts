import { Language } from 'src/types'
import { useLocales } from 'src/contexts'

export const useAppToggleLanguage = () => {
  const { locale, handleChangeLocale, translations } = useLocales()
  const changeLanguage = (lang: Language): void => {
    handleChangeLocale(lang)
  }

  return { language: locale, changeLanguage, translations }
}
