/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Grouped</div>
      <Select options={options} />

      <div>Animated</div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
      />
    </Profiler>
  )
}

export default Experience
