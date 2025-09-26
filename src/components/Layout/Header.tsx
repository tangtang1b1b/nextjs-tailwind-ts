'use client'
import Link from 'next/link'
import Button from '@/components/Modal/Button'
import { useState, useEffect } from 'react'

interface HeaderProps {
  menuItems: {
    name: string
    href: string
    children: { name: string; href: string }[]
  }[]
}
export default function Header({ menuItems }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleMouseEnter = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const style = e.currentTarget.style as CSSStyleDeclaration
    style.color = 'var(--foreground)'
    style.webkitTextStroke = '1px var(--foreground)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const style = e.currentTarget.style as CSSStyleDeclaration
    style.color = 'transparent'
    style.webkitTextStroke = '1px var(--foreground)'
  }

  return (
    <header
      className={`bg-background fixed z-[2000] flex h-20 w-full items-center justify-between px-5 transition-all duration-300 ${isScrolled ? 'border-foreground/50 border-b' : 'border-b border-transparent'}`}
    >
      <nav className="mx-auto flex size-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1
            className="cursor-pointer font-mono text-6xl font-bold duration-300"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px var(--foreground)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            NTEMP
          </h1>
        </Link>
        <div className="flex gap-3">
          <div className="text-foreground cursor-pointer duration-300">{<Button text={menuItems[0].name} />}</div>
          <div className="flex cursor-pointer flex-col justify-center gap-2 rounded-full border-2 px-5 py-2 duration-300 hover:gap-1">
            <div className="bg-foreground h-0.5 w-5"></div>
            <div className="bg-foreground h-0.5 w-5"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}
