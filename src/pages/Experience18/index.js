/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import useLocalStorage from './useLocalStorage'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [name, setName] = useLocalStorage('name', 'Bob')

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setName((c) => `${c}a`)}>
        Change value in localstorage
      </button>
      <div>{name}</div>
    </Profiler>
  )
}

export default Experience
