/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import styled from 'styled-components'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const SimpleStyledComponent = styled.div`
  color: red;
`

const ExtendedSimpleStyledComponent = styled(SimpleStyledComponent)`
  font-size: 8px;
`

const PropsStyledComponent = styled.div`
  color: ${(props) => (props.primary ? 'blue' : 'green')};
`

const PassedStyledComponent = styled.div`
  color: ${(props) => props.primary};
`

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  return (
    <Profiler id="Experience" onRender={onRender}>
      <SimpleStyledComponent>Simple Styled Component</SimpleStyledComponent>
      <ExtendedSimpleStyledComponent>
        Extended Simple Styled Component
      </ExtendedSimpleStyledComponent>
      <PropsStyledComponent primary>
        Props Styled Component (primary)
      </PropsStyledComponent>
      <PropsStyledComponent>Props Styled Component</PropsStyledComponent>
      <PassedStyledComponent>
        Passed Styled Component (no prop)
      </PassedStyledComponent>
      <PassedStyledComponent primary="violet">
        Passed Styled Component
      </PassedStyledComponent>
    </Profiler>
  )
}

export default Experience
