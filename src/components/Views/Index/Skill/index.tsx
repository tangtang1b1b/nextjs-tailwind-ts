import HeadTitle from '@/components/Modal/HeadTitle'

interface skillItem {
  icon: string
  name: string
  level: number
}
interface SkillProps {
  skills?: skillItem[]
}

export default function Skill({ skills }: SkillProps) {
  return (
    <section className="flex h-screen w-full flex-col gap-10">
      <HeadTitle title="AAAAAA" />
      <div className="dev-red flex w-full">
        <div className="w-1/5">111</div>
        <div className="w-4/5">111</div>
      </div>
    </section>
  )
}
