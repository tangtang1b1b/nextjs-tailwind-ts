import Image from 'next/image'
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
  return (
    <header className="relative z-[2000] mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5">
      <nav className="flex size-full items-center justify-between">
        <Link href="/">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={45} priority />
        </Link>
        <div className="flex gap-2">
          {/* <ul className="flex h-full gap-5">
            {menuItems.map((item) => (
              <li className="group relative flex h-full items-center" key={item.name}>
                {item.children.length === 0 ? (
                  <Link className="text-gray-300 duration-300 hover:text-white" href={item.href}>
                    {item.name}
                  </Link>
                ) : (
                  <div className="cursor-pointer text-gray-300 hover:text-white">{item.name}</div>
                )}
                {item.children.length > 0 && (
                  <ul className="pointer-events-none absolute top-full left-1/2 flex -translate-x-1/2 flex-col items-center overflow-hidden rounded-md border bg-black opacity-0 duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li className="group/children w-full px-2 text-center duration-300 hover:bg-white" key={child.name}>
                        <Link
                          className="block h-full py-2 break-keep text-gray-300 duration-300 group-hover/children:text-black"
                          href={child.href}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul> */}
          <div className="cursor-pointer text-gray-300 duration-300">
            {<Button text={menuItems[0].name} />}
          </div>
          <div className="flex cursor-pointer flex-col justify-center gap-2 rounded-full border-2 px-5 py-2 duration-300 hover:gap-1">
            <div className="h-0.5 w-5 bg-white"></div>
            <div className="h-0.5 w-5 bg-white"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}
