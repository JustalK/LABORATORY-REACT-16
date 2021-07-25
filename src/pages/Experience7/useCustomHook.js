import { useState, useDebugValue } from 'react'

const useCustomHook = (init) => {
  const [val, setVal] = useState(init)
  useDebugValue(val !== 0 ? 'Changed' : 'Initial')

  return [val, setVal]
}

export default useCustomHook
