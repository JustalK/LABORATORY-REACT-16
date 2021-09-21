import React, { memo } from 'react'
import ButtonMain from './ButtonMain'

const Button2 = ({ val }) => {
  return <div>{val}</div>
}

export default ButtonMain(memo(Button2))
