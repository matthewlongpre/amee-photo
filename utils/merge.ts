import classNames, { Argument } from 'classnames'
import { twMerge } from 'tailwind-merge'

export function merge(...args: Argument[]): string {
  return twMerge(classNames(args))
}
