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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  )
}

export default AppProviders
