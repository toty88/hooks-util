import React from 'react'
import { useCounter } from '@/hooks/useCounter'

export const Counter = (): React.JSX.Element => {
  const { value, setState } = useCounter({ initialValue: 0 })

  const handleCounter = (value: number): void => {
    setState(value)
  }

  return (
    <>
      <h1>Count: {value}</h1>
      <button onClick={() => handleCounter(1)}>+</button>
      <button onClick={() => handleCounter(-1)}>-</button>
    </>
  )
}
