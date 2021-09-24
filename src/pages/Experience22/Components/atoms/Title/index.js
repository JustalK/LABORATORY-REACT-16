import React from 'react'
import './style.css'

export const TitleColor = {
  GREEN: 'green',
  BLUE: 'blue'
}

const Title = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>
}

Title.defaultProps = {
  className: TitleColor.GREEN,
  disabled: false
}

export default Title
