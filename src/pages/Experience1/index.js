/**
 * The module managing the home page
 * @module Home
 */

import React, { Profiler, useState } from 'react'
import Children from '@pages/Experience1/Children'

/**
 * @function Experience
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Experience = () => {
  const [val, setVal] = useState(0)

  const callback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    )
  }

  console.log('Re-render')
  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
        <button onClick={() => setVal((c) => c + 1)}>
          Increment and look console
        </button>
        <Children val={val} />
      </div>
    </Profiler>
  )
}

export default Experience
