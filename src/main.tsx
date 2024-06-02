import * as React from 'react'
import { useTimer } from './hooks/useTimer'

import ReactDOM from 'react-dom'

const App = (): React.ReactNode => {
  const time = useTimer()
  return <h1>{time.toString()}</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
