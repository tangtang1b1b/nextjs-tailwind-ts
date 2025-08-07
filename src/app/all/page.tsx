import Image from 'next/image'
import Link from 'next/link'

export default function AllPage() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5">
      <div className="flex w-full gap-5">
        <Link href="/demo/sunclinic" className="relative aspect-video w-1/2 overflow-hidden rounded-lg">
          <Image className="object-cover duration-300 hover:scale-105" src="/images/og_image.jpg" alt="森朗" fill />
        </Link>
        <div className="flex w-1/2 flex-col justify-between text-2xl">
          <p className="text-white">森朗醫學</p>
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
      </div>
    </section>
  )
}
