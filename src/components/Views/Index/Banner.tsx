import Button from '@/components/Modal/Button'

export default function Banner() {
  return (
    <div className="flex size-full flex-col justify-center gap-5 font-mono font-bold">
      <h1 className="w-2/3 text-8xl tracking-wider">The Template Built For <span className="text-9xl underline under">Next</span></h1>
      <p className="w-1/3 text-2xl">The AI-focused design company for fast-moving teams building what's next.</p>
      <div className="w-fit">
        <Button className="text-xl" text="Get Started" />
      </div>
    </div>
  )
}
