import { useLocales } from 'src/contexts'

export const useAppToggleLanguage = () => {
  const { locale, handleChangeLocale, translations } = useLocales()

  return { language: locale, handleChangeLocale, translations }
}
