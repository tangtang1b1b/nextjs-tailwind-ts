import Title from '@/components/Views/Index/Banner/title'
import Deco from '@/components/Views/Index/Banner/deco'

export default function Banner() {
  return (
    <section className="relative mx-auto flex size-full">
      <Title />
      <div className="absolute right-0 size-full">
        <Deco />
      </div>
    </section>
  )
}
