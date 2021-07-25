/**
 * In this test, I make sure Children is only re-render when val2 is changed by using memo
 * @module Experiences/Experience2
 */

import React, { Profiler, useState } from 'react'
import Children from '@pages/Experience2/Children'

const onRender = (id, phase) => {
  console.log(id, phase)
}

/**
 * @function Experience
 * In this test, I make sure Children is only re-render when val2 is changed by using memo
 * @return {Object} Return the dom
 */
const Experience = () => {
  const [val, setVal] = useState(0)
  const [val2, setVal2] = useState(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>
        <button onClick={() => setVal((c) => c + 1)}>
          Increment ({val}) and look console
        </button>
        <button onClick={() => setVal2((c) => c + 1)}>
          Increment second ({val2}) and look console
        </button>
        <Children val2={val2} />
      </div>
    </Profiler>
  )
}

export default Experience
