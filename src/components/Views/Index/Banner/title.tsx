'use client'
import { useRef, useEffect } from 'react'
import Button from '@/components/Modal/Button'

export default function Title() {
  const typeRef = useRef<HTMLParagraphElement>(null)
  const highlight = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let typed = ''
    const element = typeRef.current
    const highlightElement = highlight.current

    function startType(word: string, index: number) {
      if (!element || !highlightElement) return

      if (index < word.length) {
        typed += word.charAt(index)
        element.innerHTML = typed
        index++
        setTimeout(() => {
          startType(word, index)
        }, 150)
      } else {
        setTimeout(() => {
          highlightElement.classList.add('highlight')
        }, 2000)

        setTimeout(() => {
          highlightElement.classList.remove('highlight')
          typed = ''
          element.innerHTML = typed
          startType(getRandomWord(), 0)
        }, 2500)
      }
    }

    function getRandomWord() {
      const words = ['Creative', 'Modern', 'Digital', 'Future', 'Dynamic', 'Tech']
      const index = Math.floor(Math.random() * words.length)
      return words[index]
    }

    // 開始打字效果
    startType(getRandomWord(), 0)

    // 清理函數
    return () => {
      if (element) {
        element.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="flex size-full flex-col justify-center gap-5 font-mono font-bold select-none">
      <h1 data-fade="fadeRight" className="w-2/3 text-8xl tracking-wider">
        The Template Built For <br />
        <div className="under relative w-fit text-9xl underline transition-all duration-300">
          <div ref={highlight} className="absolute top-1/2 right-0 h-2/3 w-0 -translate-y-1/2"></div>
          <p ref={typeRef}>Creative</p>
        </div>
      </h1>
      <p data-fade="fadeRight" data-delay="0.1" className="w-1/3 text-2xl">
        The AI-focused design company for fast-moving teams building what&apos;s next.
      </p>
      <div data-fade="fadeRight" data-delay="0.2" className="w-fit">
        <Button className="text-2xl" text="Get Started" />
      </div>
    </div>
  )
}
