import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  menuItems: {
    name: string
    href: string
    children: { name: string; href: string }[]
  }[]
}
export default function Header({ menuItems }: HeaderProps) {
  return (
    <header className="mx-auto flex h-20 max-w-[1280px] items-center justify-center px-5">
      <nav className="flex size-full items-center justify-between">
        <Link href="/">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={45} priority />
        </Link>
        <ul className="flex h-full gap-5">
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
                <ul className="dev-white pointer-events-none absolute top-full flex flex-col overflow-hidden rounded-md bg-black opacity-0 duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li className="group/children px-2 duration-300 hover:bg-white" key={child.name}>
                      <Link className="block h-full py-2 text-gray-300 duration-300 group-hover/children:text-black" href={child.href}>
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
