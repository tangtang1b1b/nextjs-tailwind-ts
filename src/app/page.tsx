import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <Link href="/all">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      </Link>
    </section>
  )
}
