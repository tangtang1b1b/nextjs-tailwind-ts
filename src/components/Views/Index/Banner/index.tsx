'use client'
import Button from '@/components/Modal/Button'
import Deco from '@/components/Views/Index/Banner/deco'
import '@/lib/gsap'

export default function Banner() {
  return (
    <section className="relative mx-auto flex size-full">
      <div className="flex size-full flex-col justify-center gap-5 font-mono font-bold select-none">
        <h1 data-fade="fadeRight" className="w-2/3 text-8xl tracking-wider">
          The Template Built For <span className="under text-9xl underline">Next</span>
        </h1>
        <p data-fade="fadeRight" data-delay="0.1" className="w-1/3 text-2xl">
          The AI-focused design company for fast-moving teams building what&apos;s next.
        </p>
        <div data-fade="fadeRight" data-delay="0.2" className="w-fit">
          <Button className="text-2xl" text="Get Started" />
        </div>
      </div>
      <div className="absolute right-0 size-full">
        <Deco />
      </div>
    </section>
  )
}
