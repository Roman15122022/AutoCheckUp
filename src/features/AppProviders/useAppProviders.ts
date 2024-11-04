import { setupStore } from '../../store'

export const useAppProviders = () => {
  const store = setupStore()

  return { store }
}
