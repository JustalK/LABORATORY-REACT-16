import { useState, useCallback } from 'react'

const useToggle = ({ initialState = false }) => {
  const [state, setState] = useState(initialState)

  const isToggle = useCallback(() => {
    setState((c) => !c)
  }, [state])

  return [state, isToggle]
}

export default useToggle
