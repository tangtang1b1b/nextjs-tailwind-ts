import Image from 'next/image'
import Link from 'next/link'
// import { useAllStore } from '@/stores/all'

export default function AllPage() {
  // const { all, setAll } = useAllStore()
  const lists = [
    { id: 'sunclinic', name: '森朗醫學' },
    { id: 'example2', name: '範例二' },
    { id: 'example3', name: '範例三' },
  ]
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5">
      <ul className="flex w-full flex-col gap-5">
        {lists.map((item) => (
          <li key={item.id} className="flex w-full gap-5">
            <Link href="/demo/sunclinic" className="relative aspect-video w-1/2 overflow-hidden rounded-lg">
              <Image className="object-cover duration-300 hover:scale-105" src="/images/og_image.jpg" alt="森朗" fill />
            </Link>
            <div className="flex w-1/2 flex-col justify-between text-2xl">
              <p className="text-white">{item.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="group cursor-pointer transition-colors duration-300"
              >
                <polygon
                  points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="group-hover:fill-yellow-400"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
