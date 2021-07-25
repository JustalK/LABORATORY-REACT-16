/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience1
 */

import React, { Profiler, useState } from 'react'
import Children from '@pages/Experience1/Children'

const onRender = (
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

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Home page
 */
const Experience = () => {
  const [val, setVal] = useState(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
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
