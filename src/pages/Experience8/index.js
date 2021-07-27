/**
 * Test the difference between a normal useHover vs just css
 * if you pay attention, it wont re-render with the css version
 * @module Experiences/Experience8
 */

import React, { Profiler } from 'react'
import useHover from './useHover'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Test the difference between a normal useHover vs just css
 * if you pay attention, it wont re-render with the css version
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [hoveredRef, isHovered] = useHover(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div ref={hoveredRef}>Am I hovering you ? {isHovered ? 'yes' : 'no'}</div>
      <div className="hover">
        Am I hovering you (CSS Version) ? <span className="yes">yes</span>
        <span className="no">no</span>
      </div>
    </Profiler>
  )
}

export default Experience
