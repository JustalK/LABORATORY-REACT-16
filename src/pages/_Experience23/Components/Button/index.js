import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const Button = ({ children, onClick, size, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={size}>
      {children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
  disabled: false
}

export default Button
