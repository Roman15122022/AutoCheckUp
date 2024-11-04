import { setupStore } from 'src/store'

export const useAppProviders = () => {
  const store = setupStore()

  return { store }
}
