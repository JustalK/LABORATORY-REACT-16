import React from 'react'

const multiplicator = (val) => {
  return val * val
}

const triggerConsole = () => {
  console.log('TRIGGERED')
}

const ButtonMain = (Component) => {
  return function WihComponent({ ...props }) {
    return (
      <button onClick={() => triggerConsole()}>
        <Component val={multiplicator(props.val)} />
      </button>
    )
  }
}

export default ButtonMain
