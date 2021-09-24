import React from 'react'
import './styles.css'

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  className: ButtonSize.MEDIUM,
  disabled: false
}

export default Button
