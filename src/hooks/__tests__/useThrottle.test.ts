import { useThrottle } from '@/hooks/useThrottle'
import { describe, it, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useThrottle', () => {
  it("Memoized callback should've been issued once, after time's passed", () => {
    const fn = vi.fn()
    vi.useFakeTimers()
    const { result } = renderHook(() => useThrottle(fn, 200))
    act(() => {
      result.current()
      result.current()
    })
    vi.advanceTimersByTime(201)
    expect(fn).toHaveBeenCalledOnce()
  })

  it("Memoized callback wasn't used", () => {
    const fn = vi.fn()

    const { result } = renderHook(() => useThrottle(fn, 200))
    vi.advanceTimersByTime(201)
    expect(fn).not.toHaveBeenCalled()
  })

  it("Memoized callback should've been issued twice", () => {
    const fn = vi.fn()
    const delay = 200

    const { result } = renderHook(() => useThrottle(fn, delay))

    act(() => {
      result.current()
    })

    vi.advanceTimersByTime(201)

    act(() => {
      result.current()
    })

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('Memoized callback should be the same after rerender', () => {
    const fn = vi.fn()
    const { result, rerender } = renderHook(() => useThrottle(fn, 200))
    const handlerOne = result.current
    rerender()
    const handlerTwo = result.current
    expect(handlerOne).toBe(handlerTwo)
  })
})
