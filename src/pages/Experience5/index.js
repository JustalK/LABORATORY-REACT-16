/**
 * If we are using a useEffect, the useEffect will be trigger everytime since
 * the comparison function cannot compare object
 * The problem is fixed using a custom use effect
 * @module Experiences/Experience5
 */

import React, { Profiler, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'
import Children from './Children'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * If we are using a useEffect, the useEffect will be trigger everytime since
 * the comparison function cannot compare object
 * The problem is fixed using a custom use effect
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0)
  const [count, setCount] = useState({ value: 0, value2: 0 })

  useDeepCompareEffect(() => {
    setCount((c) => ({ value: 2, value2: c.value2 }))
  }, [count])

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>Increment val</button>
      <Children val={val} />
      <div>Count: {count.value}</div>
    </Profiler>
  )
}

export default Experience
