/**
 * Change the text color with conditionnal css (clsx)
 * @module Experiences/Experience20
 */

import React, { Profiler, useState } from 'react'
import clsx from 'clsx'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Change the text color with conditionnal css (clsx)
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(false)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => !c)}>Change color text</button>
      <span className={clsx('test', { red: val })}>Text with clsx</span>
    </Profiler>
  )
}

export default Experience
