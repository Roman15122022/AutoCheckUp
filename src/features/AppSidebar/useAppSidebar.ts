import { Home, Calendar, PieChart, Settings } from 'lucide-react'

import { RoutesPath } from 'src/types'
import { useLocales } from 'src/contexts'

import { useNavigation } from 'src/hooks/useNavigation'

export const useAppSidebar = () => {
  const { navigateTo, activeRoute } = useNavigation()
  const { translations } = useLocales()

  const listOfRoutes = [
    {
      title: translations.layout.home,
      icon: Home,
      onClick: (): void => navigateTo(RoutesPath.HOME),
      isActive: activeRoute === RoutesPath.HOME,
    },
    {
      title: translations.layout.calendar,
      icon: Calendar,
      onClick: (): void => navigateTo(RoutesPath.CALENDAR),
      isActive: activeRoute === RoutesPath.CALENDAR,
    },
    {
      title: translations.layout.analytics,
      icon: PieChart,
      onClick: (): void => navigateTo(RoutesPath.ANALYTICS),
      isActive: activeRoute === RoutesPath.ANALYTICS,
    },
    {
      title: translations.layout.setting,
      icon: Settings,
      onClick: (): void => navigateTo(RoutesPath.SETTING),
      isActive: activeRoute === RoutesPath.SETTING,
    },
  ]

  return { listOfRoutes }
}
