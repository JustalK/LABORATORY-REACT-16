import React from 'react'
import Button from '../../atoms/Button'
import Subtitle from '../../atoms/Subtitle'
import Title from '../../atoms/Title'
import './styles.css'

const Ads = ({ children, title, subtitle, button, onClick }) => {
  return (
    <div className="ads">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      <Button onClick={onClick}>{button}</Button>
    </div>
  )
}

Ads.defaultProps = {
  onClick: () => {},
  title: 'Default Title',
  Subtitle: 'Default Title',
  button: 'Default Title'
}

export default Ads
