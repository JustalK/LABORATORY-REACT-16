/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, useState } from 'react'
import './Components/templates/Home/styles.css'
import Button from './Components/atoms/Button'
import Ads from './Components/molecules/Ads'
import Modal from './Components/organisms/Modal'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [show, setShow] = useState(false)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div className="global">
        <Modal show={show} setShow={setShow} />
        <div className="half">
          <Ads>This is a test</Ads>
        </div>
        <div className="half">
          <Ads title="My Title">
            <Button onClick={() => setShow((c) => !c)}>Show Organism</Button>
          </Ads>
        </div>
      </div>
    </Profiler>
  )
}

export default Experience
