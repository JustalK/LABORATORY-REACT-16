/**
 * Intercept any request made with axios and add kevin header 1337
 * @module Experiences/Experience11
 */

import React, { Profiler, useEffect } from 'react'
import axios from 'axios'
import './interceptors'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 *  Intercept any request made with axios and add kevin header 1337
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
  })

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Just look at the console. The interceptor will be activated.</div>
    </Profiler>
  )
}

export default Experience
