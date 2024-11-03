import UAJSON from 'locales/ua.json'
import ENJSON from 'locales/en.json'

import { Language } from '../types'

export const TRANSLATIONS = {
  [Language.UA]: UAJSON,
  [Language.EN]: ENJSON,
}

export const TIME_IN_MS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
}

export const TIME_IN_SECONDS = {
  SECOND: 1,
  MINUTE: 60,
  HOUR: 60 * 60,
  DAY: 60 * 60 * 24,
}
