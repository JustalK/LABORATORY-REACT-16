import { useRef, useEffect } from 'react'

function deepCompareEquals(a, b) {
  return a.value === b.value
}

const useDeepCompareMemoize = (value) => {
  const ref = useRef(value)
  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

const useDeepCompareEffect = (callback, dependencies) => {
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default useDeepCompareEffect
