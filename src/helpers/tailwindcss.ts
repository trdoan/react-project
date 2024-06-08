import { twMerge } from 'tailwind-merge'

export const tw = (...values: string[]) => {
  return twMerge(...values)
}
