import * as React from 'react'
import { useEvent } from '@/hooks/useEvent'
import { type GenericFunction, throttle } from 'sorting-utils'

/**
 *
 * @param cb: callback function of type: (...args: any[]) => any
 * @param delay: expected time in ms to lock cb until it can be used again
 * @returns memoized callback function
 */
export const useThrottle = (cb: GenericFunction, delay: number): GenericFunction => {
  const event = useEvent(cb)
  return React.useMemo(() => throttle(event, delay), [event, delay])
}
