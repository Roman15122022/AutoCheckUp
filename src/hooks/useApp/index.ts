import { useNavigation } from 'src/hooks/useNavigation'
import { useLocales } from 'src/contexts'

export const useApp = () => {
  const { navigateTo, activeRoute } = useNavigation()
  const { translations } = useLocales()

  return { locale: translations.layout }
}
