import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'

export const isObject = (value: unknown): boolean => {
  return typeof value === 'object'
}

export function cn(...args: ClassValue[]): string {
  return twMerge(clsx(args))
}
