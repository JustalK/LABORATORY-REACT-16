/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import useHover from './useHover'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [hoveredRef, isHovered] = useHover(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div ref={hoveredRef}>Am I hovering you ? {isHovered ? 'yes' : 'no'}</div>
    </Profiler>
  )
}

export default Experience
