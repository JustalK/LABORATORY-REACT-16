/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import AsyncSelect from 'react-select/async'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const getUser = async (search = '') => {
  const response = await fetch(
    `https://randomuser.me/api/?results=5&email=${search}`
  )
  return response.json()
}

const createOptions = async (response) => {
  const users = await response
  return users.results.map((user) => ({
    label: user.email,
    value: user.email
  }))
}

const promiseOptions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createOptions(getUser()))
    }, 1000)
  })
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const selectRef = useRef(null)

  const handleChange = (selectedOptions) => {
    selectRef.current = selectedOptions
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Select with promise</div>
      <AsyncSelect
        ref={selectRef}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={handleChange}
      />
      <button onClick={() => console.log(selectRef.current)}>See values</button>
    </Profiler>
  )
}

export default Experience
