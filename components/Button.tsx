import * as React from 'react'

type ButtonProps = {
  label: string
  onClick: () => void
}
const Component = ({ ...props }: ButtonProps): JSX.Element => {
  console.log('button got rendered')
  return <button onClick={props.onClick}>{props.label}</button>
}

export const Button = React.memo(Component)
