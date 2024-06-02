import * as React from 'react'

export const useTimer = (): Date => {
  const [value, setValue] = React.useState(new Date())

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue(new Date())
    }, 1000)

    return (): void => {
      window.clearInterval(intervalId)
    }
  }, [])

  return value
}
