'use client'
import Link from 'next/link'
import Button from '@/components/Modal/Button'
interface HeaderProps {
  menuItems: {
    name: string
    href: string
    children: { name: string; href: string }[]
  }[]
}
export default function Header({ menuItems }: HeaderProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLParagraphElement>) => {
    ;(e.currentTarget.style as any).color = 'var(--foreground)'
    ;(e.currentTarget.style as any).webkitTextStroke = '1px var(--foreground)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLParagraphElement>) => {
    ;(e.currentTarget.style as any).color = 'transparent'
    ;(e.currentTarget.style as any).webkitTextStroke = '1px var(--foreground)'
  }

  return (
    <header className="relative z-[2000] mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5">
      <nav className="flex size-full items-center justify-between">
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
