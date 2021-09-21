import React, { memo } from 'react'
import ButtonMain from './ButtonMain'

const Button1 = ({ val }) => {
  return <div>{val}</div>
}

export default ButtonMain(memo(Button1))
