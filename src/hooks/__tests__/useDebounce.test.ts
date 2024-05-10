import { useDebounce } from '@/hooks/useDebounce'
import { describe, it, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useDebounce', () => {
  it("Memoized callback should've been issued once", () => {
    const fn = vi.fn()
    vi.useFakeTimers()
    const { result } = renderHook(() => useDebounce(fn, 200))
    act(() => {
      result.current()
      result.current()
      result.current()
    })
    vi.advanceTimersByTime(201)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it("Memoized callback should've been issued twice", () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useDebounce(fn, 200))

    act(() => {
      result.current()
    })

    vi.advanceTimersByTime(201)

    act(() => {
      result.current()
    })

    vi.advanceTimersByTime(201)
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
