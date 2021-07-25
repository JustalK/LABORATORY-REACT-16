/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'

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
      <div>
        This is a test - This is a test - This is a test - This is a test -
      </div>
    </Profiler>
  )
}

export default Experience
