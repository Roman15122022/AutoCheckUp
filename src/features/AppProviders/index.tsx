import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { useAppProviders } from './useAppProviders'
import { AppProviderProps } from './types'
import { queryClient } from './constants'

const AppProviders = ({ children }: AppProviderProps): JSX.Element => {
  const { store } = useAppProviders()

  return (
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  )
}

export default AppProviders
