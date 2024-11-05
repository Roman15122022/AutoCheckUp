import { Route, Routes } from 'react-router-dom'

import { RoutesPath } from 'src/types'

import Setting from 'src/pages/Setting'
import Home from 'src/pages/Home'
import Calendar from 'src/pages/Calendar'
import Analytics from 'src/pages/Analytics'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<Home />} />
      <Route path={RoutesPath.ANALYTICS} element={<Analytics />} />
      <Route path={RoutesPath.SETTING} element={<Setting />} />
      <Route path={RoutesPath.CALENDAR} element={<Calendar />} />
    </Routes>
  )
}

export default AppRoutes
