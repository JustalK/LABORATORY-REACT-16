/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import useObservable from './useObservable'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const api =
  'https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo'
const getName = (user) => `${user.name.first} ${user.name.last}`
const names$ = ajax
  .getJSON(api)
  .pipe(map(({ results: users }) => users.map(getName)))

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const names = useObservable(names$)

  return (
    <Profiler id="Experience" onRender={onRender}>
      {names &&
        names.map((name) => {
          return <div key={name}>{name}</div>
        })}
    </Profiler>
  )
}

export default Experience
