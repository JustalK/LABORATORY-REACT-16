import { useState, useEffect, useCallback, useRef } from 'react'

const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const handleResizeTimer = useRef()

  const handleResize = useCallback(() => {
    // I use the clearTimeout for not triggering the re-render too often
    clearTimeout(handleResizeTimer.current)
    handleResizeTimer.current = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }, 400)
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindow
