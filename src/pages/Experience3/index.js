/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, useEffect, useState } from 'react'
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
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>Increment val</button>
      <Children val={val} />
      <div>Count: {count}</div>
    </Profiler>
  )
}

export default Experience
