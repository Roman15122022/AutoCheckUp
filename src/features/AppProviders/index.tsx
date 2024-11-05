import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import AppRoutes from 'src/features/AppRoutes'
import LocalesProvider from 'src/contexts/LocalesProvider'

import { useAppProviders } from 'src/features/AppProviders/useAppProviders'
import { AppProviderProps } from 'src/features/AppProviders/types'
import { queryClient } from 'src/features/AppProviders/constants'

const AppProviders = ({ children }: AppProviderProps): JSX.Element => {
  const { store } = useAppProviders()

  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <LocalesProvider>
              {children}
              <AppRoutes />
            </LocalesProvider>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default AppProviders
