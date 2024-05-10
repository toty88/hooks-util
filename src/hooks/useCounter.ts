import * as React from 'react'

type UseCounterProps = {
  initialValue?: number
}

type UseCounterReturn = {
  value: number
  setState: (value: number) => void
}

export const useCounter = ({ initialValue = 0 }: UseCounterProps): UseCounterReturn => {
  const [value, setValue] = React.useState<number>(initialValue)

  const setState = (value: number): void => {
    setValue((prev: number) => prev + value)
  }

  return { value, setState }
}
