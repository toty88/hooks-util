/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react'
import { type GenericFunction } from 'sorting-utils'

export const useEvent = (callback: GenericFunction): GenericFunction => {
  const ref = React.useRef(callback)
  return React.useCallback((...args: Parameters<GenericFunction>) => ref.current(...args), [])
}

// type AnyFunction = (...args: unknown[]) => unknown

// export const useEvent = <T extends GenericFunction>(callback: T): T => {
//   const ref = React.useRef<T>(callback)

//   return React.useCallback((...args: Parameters<GenericFunction>) => ref.current(args), []) as T
// }
