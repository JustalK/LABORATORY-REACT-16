/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import Button1 from './Button1'
import Button2 from './Button2'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  return (
    <Profiler id="Experience" onRender={onRender}>
      <Button1 val={10} />
      <Button2 val={20} />
    </Profiler>
  )
}

export default Experience
