import HeadTitle from '@/components/Modal/HeadTitle'
import SkillIcon from '@/components/Modal/SkillIcon'
import Image from 'next/image'

interface SkillCategory {
  category: string
  skills: {
    icon: string
    name: string
    level: number
  }[]
}

interface SkillProps {
  skillData?: SkillCategory[] | null
}

export default function Skill({ skillData }: SkillProps) {
  return (
    <section className="flex w-full max-w-screen-2xl flex-col gap-15">
      <HeadTitle title="Skills" />
      {skillData?.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="flex w-full flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/5">
            <h3 className="mb-4 text-center text-2xl font-bold text-neutral-400 md:text-start">{categoryData.category}</h3>
          </div>
          <div className="w-full md:w-4/5">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {categoryData.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="border-foreground/40 shadow-card shadow-foreground/25 flex aspect-square flex-col items-center rounded-lg border bg-stone-800 p-4"
                >
                  <div className="flex size-full flex-col items-center justify-between">
                    <div className="mb-2 flex flex-col items-center justify-between">
                      <SkillIcon iconName={skill.icon} className="mb-2 h-12 w-12" />
                      <span className="text-center text-xl font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
