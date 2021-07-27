/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import useWindow from './useWindow'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
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
