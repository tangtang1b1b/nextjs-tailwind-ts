import Title from '@/components/Views/Index/Banner/title'
import Deco from '@/components/Views/Index/Banner/deco'

export default function Banner() {
  return (
    <section className="relative mx-auto flex h-[calc(100vh-80px)] w-full max-w-screen-2xl border-foreground/50 border-b">
      <Title />
      <div className="absolute size-full">
        <Deco />
      </div>
    </section>
  )
}
