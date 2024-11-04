import { Route, Routes } from 'react-router-dom'

import { RoutesPath } from 'src/types'

import Home from 'src/pages/Home'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
