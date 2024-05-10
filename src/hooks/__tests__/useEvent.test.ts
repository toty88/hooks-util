import { useEvent } from '@/hooks/useEvent'
import { describe, it, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useEvent', () => {
  it('Should issue callback once', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useEvent(fn))
    act(() => {
      result.current()
    })
    expect(fn).toHaveBeenCalledOnce()
  })

  it('Should issue the same callback', () => {
    const fn = vi.fn()
    const { result, rerender } = renderHook(() => useEvent(fn))
    const handlerOne = result.current
    rerender()
    const handlerTwo = result.current
    expect(handlerOne).toBe(handlerTwo)
  })
})
