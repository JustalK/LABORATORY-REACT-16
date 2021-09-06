/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import useSWR from 'swr'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const { data, error } = useSWR('https://randomuser.me/api/', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const { results } = data

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>{results[0].email}</div>
    </Profiler>
  )
}

export default Experience
