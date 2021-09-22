import React from 'react'

const multiplicator = (val) => {
  return val * val
}

const triggerConsole = () => {
  console.log('TRIGGERED')
}

const ButtonMain = (Component) => {
  const variable = 'This is a variable.'
  return function WihComponent({ ...props }) {
    return (
      <button onClick={() => triggerConsole()}>
        <Component val={multiplicator(props.val)} variable={variable} />
      </button>
    )
  }
}

export default ButtonMain
