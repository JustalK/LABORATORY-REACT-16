import { useCallback, useState, useRef } from 'react'

const useHover = () => {
  const [value, setValue] = useState(false)
  const ref = useRef()

  const onMouseOver = () => {
    setValue(true)
  }

  const onMouseOut = () => {
    setValue(false)
  }

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', onMouseOver)
        ref.current.removeEventListener('mouseout', onMouseOut)
      }

      ref.current = node

      if (ref.current) {
        ref.current.addEventListener('mouseover', onMouseOver)
        ref.current.addEventListener('mouseout', onMouseOut)
      }
    },
    [onMouseOver, onMouseOut]
  )

  return [callbackRef, value]
}

export default useHover
