import * as React from 'react'
import { Counter, Button } from '../components'
import { useEvent } from '@/hooks/useEvent'
import { useThrottle } from './hooks/useThrottle'

function App(): JSX.Element {
  const [text, setText] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const onClick = useEvent(() => console.log(`send text ${text}`))

  const testOnClick = (): void => {
    console.log('mi throttle')
  }
  const onClickThrottle = useThrottle(testOnClick, 1000)

  return (
    <>
      <Counter />
      <input type="text" onChange={onChange} />
      <Button onClick={onClick} label="SEND" />
      <button onClick={onClickThrottle}>Throttle</button>
    </>
  )
}

export default App
