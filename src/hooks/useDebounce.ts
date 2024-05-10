import * as React from 'react'
import { useEvent } from '@/hooks/useEvent'
import { type GenericFunction, debounce } from 'sorting-utils'

/**
 *
 * @param cb: callback function of type: (...args: any[]) => any
 * @param delay: expected time in ms to get cb unless issue again where time gets reseted
 * @returns memoized callback function
 */
export const useDebounce = (cb: GenericFunction, delay: number): GenericFunction => {
  const event = useEvent(cb)
  return React.useMemo(() => debounce(event, delay), [event, delay])
}
