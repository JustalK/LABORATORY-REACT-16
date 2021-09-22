import React, { memo } from 'react'
import ButtonMain from './ButtonMain'

const Button2 = ({ val, variable }) => {
  return (
    <div>
      {val} - {variable}
    </div>
  )
}

export default ButtonMain(memo(Button2))
