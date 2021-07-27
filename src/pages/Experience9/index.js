/**
 * Get the size of the window and handle the resize
 * @module Experiences/Experience9
 */

import React, { Profiler } from 'react'
import useWindow from './useWindow'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Get the size of the window and handle the resize
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const { width, height } = useWindow()

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Width: {width}</div>
      <div>Height: {height}</div>
    </Profiler>
  )
}

export default Experience
