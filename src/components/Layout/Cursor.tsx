'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Cursor() {
  const [isMouseInWindow, setIsMouseInWindow] = useState(false)
  const fabRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback(() => {
    if (fabRef.current) {
      fabRef.current.style.transform = 'scale(2)'
    }
  }, [])

  const handleMouseUp = useCallback(() => {
    if (fabRef.current) {
      fabRef.current.style.transform = 'scale(1)'
    }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (fabRef.current) {
      fabRef.current.style.left = `${e.clientX - 20}px`
      fabRef.current.style.top = `${e.clientY - 20}px`
    }
    setIsMouseInWindow(true)
  }, [])

  const handleGlobalMouseDown = useCallback(() => {
    handleMouseDown()
  }, [handleMouseDown])

  const handleGlobalMouseUp = useCallback(() => {
    handleMouseUp()
  }, [handleMouseUp])

  const handleMouseLeave = useCallback(() => {
    setIsMouseInWindow(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsMouseInWindow(true)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleGlobalMouseDown)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleGlobalMouseDown)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [handleMouseMove, handleGlobalMouseDown, handleGlobalMouseUp, handleMouseLeave, handleMouseEnter])
  return (
    <>
      <style jsx global>{`
        @media (min-width: 1024px) {
          body {
            cursor: none !important;
          }
          *,
          *:before,
          *:after {
            cursor: none !important;
          }
        }
      `}</style>
      <div
        ref={fabRef}
        className={`pointer-events-none fixed z-3000 size-10 rounded-full mix-blend-difference transition-transform lg:bg-white ${isMouseInWindow ? 'opacity-100' : 'opacity-0'}`}
      ></div>
    </>
  )
}
