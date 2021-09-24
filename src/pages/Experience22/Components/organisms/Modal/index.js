import React from 'react'
import Button from '../../atoms/Button'
import Ads from '../../molecules/Ads'
import './style.css'

const Modal = ({ children, path, show, setShow }) => {
  const handleClose = () => {
    setShow(false)
  }

  const handleAds = () => {
    console.log(path)
  }

  return (
    <div className={`modal ${show ? '' : 'hidden'}`}>
      <Button onClick={handleClose}>Close</Button>
      <Ads title="Modals" onClick={handleAds}>
        {children}
      </Ads>
    </div>
  )
}

export default Modal
