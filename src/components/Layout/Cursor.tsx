'use client'
import { useState, useEffect, useRef } from 'react'

export default function Cursor() {
  const [isMouseInWindow, setIsMouseInWindow] = useState(true)
  const fabRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    if (fabRef.current) {
      fabRef.current.style.transform = 'scale(2)'
    }
  }

  const handleMouseUp = () => {
    if (fabRef.current) {
      fabRef.current.style.transform = 'scale(1)'
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (fabRef.current) {
        fabRef.current.style.left = `${e.clientX - 20}px`
        fabRef.current.style.top = `${e.clientY - 20}px`
      }
      setIsMouseInWindow(true)
    }

    const handleGlobalMouseDown = () => {
      handleMouseDown()
    }

    const handleGlobalMouseUp = () => {
      handleMouseUp()
    }

    const handleMouseLeave = () => {
      setIsMouseInWindow(false)
    }

    const handleMouseEnter = () => {
      setIsMouseInWindow(true)
    }

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
  }, [])
  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        *,
        *:before,
        *:after {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={fabRef}
        className={`pointer-events-none fixed z-3000 size-10 rounded-full bg-white mix-blend-difference transition-transform ${isMouseInWindow ? 'opacity-100' : 'opacity-0'}`}
      ></div>
    </>
  )
}
