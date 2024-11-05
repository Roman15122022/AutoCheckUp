import { ReactNode } from 'react'

import { TRANSLATIONS } from 'src/constants'

import { Language } from 'src/types/enums'

export type Locale = (typeof TRANSLATIONS)[Language.EN]

export type ProviderProps = {
  children: ReactNode
}
