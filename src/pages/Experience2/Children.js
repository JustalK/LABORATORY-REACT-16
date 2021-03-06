import React, { Profiler, memo } from 'react'

const onRender = (id, phase) => {
  console.log(id, phase)
}

const Children = ({ val2 }) => {
  return (
    <Profiler id="Children" onRender={onRender}>
      <div>{val2}</div>
    </Profiler>
  )
}

export default memo(Children)
