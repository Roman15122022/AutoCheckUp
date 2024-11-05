import { Route, Routes } from 'react-router-dom'

import { RoutesPath } from 'src/types'

import Home from 'src/pages/Home'
import Analytics from 'src/pages/Analytics'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<Home />} />
      <Route path={RoutesPath.ANALYTICS} element={<Analytics />} />
    </Routes>
  )
}

export default AppRoutes
