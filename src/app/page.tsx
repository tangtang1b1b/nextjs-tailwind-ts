import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <section className="flex h-full min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-10">
      <Link href="/all">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      </Link>
      <Link href="/favorites" className="rounded-md bg-white px-4 py-1 text-lg text-black duration-300 hover:bg-gray-200">
        收藏夾
      </Link>
    </section>
  )
}
