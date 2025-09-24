'use client'
import { useState, useEffect, useRef } from 'react'
export default function Fab() {
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
    const handleMouseMove = (event: MouseEvent) => {
      if (fabRef.current) {
        fabRef.current.style.left = `${event.clientX - 20}px`
        fabRef.current.style.top = `${event.clientY - 20}px`
      }
      setIsMouseInWindow(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInWindow(false)
    }

    const handleMouseEnter = () => {
      setIsMouseInWindow(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`fixed z-3000 size-10 rounded-full bg-white mix-blend-difference transition-transform ${isMouseInWindow ? 'opacity-100' : 'opacity-0'}`}
      ></div>
    </>
  )
}
