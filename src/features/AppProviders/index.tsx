import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { ProviderProps } from 'src/types'

import ThemeProvider from 'src/contexts/ThemeProvider'
import LocalesProvider from 'src/contexts/LocalesProvider'

import { useAppProviders } from 'src/features/AppProviders/useAppProviders'
import { queryClient } from 'src/features/AppProviders/constants'

const AppProviders = ({ children }: ProviderProps): JSX.Element => {
  const { store } = useAppProviders()

  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <LocalesProvider>{children}</LocalesProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default AppProviders
