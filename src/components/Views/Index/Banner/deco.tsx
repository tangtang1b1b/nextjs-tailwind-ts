'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'

export default function Deco() {
  const rock = useRef<HTMLDivElement>(null)

  const init = () => {
    if (rock.current) {
      gsap.set(rock.current, {
        width: '100%',
        height: '100%',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      })
      gsap.to(rock.current, {
        width: 400,
        height: 400,
        clipPath: 'polygon(53% 10%, 84% 25%, 89% 61%, 75% 100%, 36% 96%, 0% 60%, 14% 28%)',
        duration: 0.3,
        ease: 'power2.inOut',
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (rock.current) {
      rock.current.style.transform = `translate(${e.clientX / 15}px, ${e.clientY / 15}px) rotate(${e.clientX / 125}deg)`
    }
  }

  useEffect(() => {
    // init()
    // window.addEventListener('mousemove', handleMouseMove)

    return () => {
      // window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className="absolute flex size-full items-center justify-end">
      <div ref={rock} className="bg-foreground"></div>
    </div>
  )
}
