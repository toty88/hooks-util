import { describe, it, expect } from 'vitest'
import { useCounter } from '@/hooks/useCounter'
import { act, renderHook } from '@testing-library/react-hooks'

describe('useCounter', () => {
  it('Should return counter with value of 0', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }))
    expect(result.current.value).toBe(0)
  })
  it('Should return counter = 0 plus 1, result = 1', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }))
    act(() => {
      result.current.setState(1)
    })
    expect(result.current.value).toBe(1)
  })
  it('Should return counter = 0 plus 5, result = 5', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }))
    act(() => {
      result.current.setState(5)
    })
    expect(result.current.value).toBe(5)
  })
  it('Should return counter = 5 plus 5, result = 10', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))
    act(() => {
      result.current.setState(5)
    })
    expect(result.current.value).toBe(10)
  })
  it('Should return counter = 5 minus 6, result = -1', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))
    act(() => {
      result.current.setState(-6)
    })
    expect(result.current.value).toBe(-1)
  })

  it('Should return counter = 5 minus 6, then plus 1, result = 0', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }))
    act(() => {
      result.current.setState(-6)
    })
    act(() => {
      result.current.setState(1)
    })
    expect(result.current.value).toBe(0)
  })
})
