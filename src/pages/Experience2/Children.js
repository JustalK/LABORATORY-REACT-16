import React, { Profiler, memo } from 'react'

const Children = ({ val2 }) => {
  const onRender = (id, phase) => {
    console.log(id, phase)
  }

  return (
    <Profiler id="Children" onRender={onRender}>
      <div>{val2}</div>
    </Profiler>
  )
}

export default memo(Children)
