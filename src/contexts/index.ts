import { useContext, createContext } from 'react'

import { LocalesContextData } from 'src/contexts/types'

export const LocalesContext = createContext<LocalesContextData | null>(null)

export const useLocales = (): LocalesContextData => {
  const data = useContext(LocalesContext)

  if (!data) {
    throw new Error('useLocales was used outside of its Provider')
  }

  return data
}
