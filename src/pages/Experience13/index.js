/**
 * useEffect no-state vs no-dependencies
 * @module Experiences/Experience0
 */

import React, { Profiler, useState, useEffect, useMemo } from 'react'

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

  const valBigger = useMemo(() => {
    return val2 > 10
  }, [val2])

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
    console.log('depencies array of false')
  }, [false])

  useEffect(() => {
    console.log('depencies array of function')
  }, [setVal])

  useEffect(() => {
    console.log('depencies array of new function')
  }, [setInterval(() => {}, 1000)])

  useEffect(() => {
    console.log('depencies array of useEffect')
  }, [
    useEffect(() => {
      console.log('useEffect with val dependencies')
    }, [val])
  ])

  useEffect(() => {
    console.log('depencies array of a memo')
  }, [valBigger])

  useEffect(() => {
    console.log('depencies array of a boolean')
  }, [val2 > 10])

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
