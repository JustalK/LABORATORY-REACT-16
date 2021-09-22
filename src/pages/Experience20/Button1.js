import React, { memo } from 'react'
import ButtonMain from './ButtonMain'

const Button1 = ({ val, variable }) => {
  return (
    <div>
      {val} - {variable}
    </div>
  )
}

export default ButtonMain(memo(Button1))
