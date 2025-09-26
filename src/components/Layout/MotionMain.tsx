'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function MotionMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPath = useRef(pathname)
  const [displayLocation, setDisplayLocation] = useState(pathname)

  useEffect(() => {
    if (prevPath.current !== pathname) {
      // console.log('Route changed from:', prevPath.current, 'to:', pathname)

      if (typeof document !== 'undefined' && document.startViewTransition) {
        const transition = document.startViewTransition(() => {
          setDisplayLocation(pathname)
        })

        transition.finished
          .then(() => {})
          .catch(() => {
            setDisplayLocation(pathname)
          })
      } else {
        setDisplayLocation(pathname)
      }

      prevPath.current = pathname
    }
  }, [pathname])

  const shouldShowCurrentChildren = displayLocation === pathname

  return (
    <main className="size-full flex flex-col gap-30" style={{ viewTransitionName: 'main' }}>
      {shouldShowCurrentChildren ? children : null}
    </main>
  )
}
