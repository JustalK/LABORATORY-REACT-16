/**
 * useEffect no-state vs no-dependencies
 * @module Experiences/Experience0
 */

import React, { Profiler, useState, useEffect } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * useEffect no-state vs no-dependencies
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0)
  const [val2, setVal2] = useState(0)

  useEffect(() => {
    console.log('no state')
  })

  useEffect(() => {
    console.log('no depencies')
  }, [])

  useEffect(() => {
    console.log('depencies')
  }, [val])

  useEffect(() => {
    console.log('depencies null')
  }, null)

  /**
  useEffect(() => {
    console.log('depencies false')
  }, false)
  * */

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>
        Increment val ({val})
      </button>
      <button onClick={() => setVal2((c) => c + 1)}>
        Increment val 2 ({val2})
      </button>
    </Profiler>
  )
}

export default Experience
