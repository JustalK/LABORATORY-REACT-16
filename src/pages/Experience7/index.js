/**
 * Testing the useDebugValue on a customHook
 * Only work on a custom hook and show the result inside React dev tool
 * @module Experiences/Experience7
 */

import React, { Profiler } from 'react'
import useCustomHook from './useCustomHook'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Testing the useDebugValue on a customHook
 * Only work on a custom hook and show the result inside React dev tool
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useCustomHook(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>Increment val</button>
      <div>{val}</div>
    </Profiler>
  )
}

export default Experience
