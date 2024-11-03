import { TRANSLATIONS } from '../constants'

import { Language } from './enums'

export type Locale = (typeof TRANSLATIONS)[Language.EN]
