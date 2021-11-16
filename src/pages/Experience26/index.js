/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, useState, useRef } from 'react'
import Children from './Children'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0)
  const childrenRef = useRef(null)

  const handleClick = () => {
    console.log(childrenRef.current.value)
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>Increment val</button>
      <button onClick={handleClick}>Console ref</button>
      <Children ref={childrenRef} val={val} />
      <Children val={val} />
    </Profiler>
  )
}

export default Experience
