import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

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
            {children}
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default AppProviders
