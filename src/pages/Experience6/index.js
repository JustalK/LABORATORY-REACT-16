/**
 * Creating multiple ref on a dynamic list
 * @module Experiences/Experience6
 */

import React, { Profiler, useRef } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const NUMBER_OF_ELEMENTS = 10

/**
 * @function Experience
 * Creating multiple ref on a dynamic list
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const list = useRef([])

  const changeRandomText = () => {
    const index = Math.floor(Math.random() * NUMBER_OF_ELEMENTS)
    list.current[index].innerText = 'Change done'
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={changeRandomText}>Change Random Text</button>
      {Array.from({ length: NUMBER_OF_ELEMENTS }).map((_, index) => {
        return (
          <div key={index} ref={(r) => (list.current[index] = r)}>
            {index}
          </div>
        )
      })}
    </Profiler>
  )
}

export default Experience
