/**
 * Profile the app for knowing when everything re-render
 *
 * For testing this experience, you need to install the storybook
 *
 *
 * "@storybook/addon-actions": "^6.3.8",
 * "@storybook/react": "^6.3.8",
 *    "@storybook/addon-essentials": "^6.3.8",
     "@storybook/addon-links": "^6.3.8",
     "@storybook/node-logger": "^6.3.8",
     "@storybook/preset-create-react-app": "^3.2.0",
 *
 *
 * @module Experiences/Experience0
 */

import React, { Profiler, useState } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>Increment val</button>
      <div>{val}</div>
    </Profiler>
  )
}

export default Experience
