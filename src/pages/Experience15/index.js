/**
 * Testing the react-responsive
 * Careful to note that it triggers a re-render
 * @module Experiences/Experience0
 */
import React, { Profiler, useState, createRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Testing the react-responsive
 * Careful to note that it triggers a re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const inputRef = createRef()
  const [val, setVal] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  console.log('Re-render')
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>
        Increment val ({val})
      </button>
      {isDesktopOrLaptop && (
        <>
          <p>You are a desktop or laptop</p>
          <input type="text" ref={inputRef} />
        </>
      )}
      {isTabletOrMobile && (
        <>
          <p>You are a mobile</p>
          <input type="text" ref={inputRef} />
        </>
      )}
      <button onClick={() => console.log(inputRef.current.value)}>
        Console me the value of input
      </button>
    </Profiler>
  )
}

export default Experience
