import { Language } from './enums'
import { TRANSLATIONS } from '../constants'

export type Locale = (typeof TRANSLATIONS)[Language.EN]
