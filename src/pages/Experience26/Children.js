import React, { Profiler, forwardRef } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const Children = forwardRef(({ val }, inputRef) => {
  return (
    <Profiler id="Children" onRender={onRender}>
      <input ref={inputRef} value={val} />
    </Profiler>
  )
})

Children.displayName = 'azezae'

export default Children
