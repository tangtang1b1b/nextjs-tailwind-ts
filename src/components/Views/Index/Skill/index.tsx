import HeadTitle from '@/components/Modal/HeadTitle'

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
    <section className="flex h-screen w-full flex-col gap-15">
      <HeadTitle title="Skills" />
      {skillData?.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="flex w-full gap-8">
          <div className="w-1/5">
            <h3 className="mb-4 text-2xl font-bold text-neutral-400">{categoryData.category}</h3>
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-4 gap-10">
              {categoryData.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="border-foreground/40 shadow-card shadow-foreground/25 flex aspect-square flex-col items-center rounded-lg border bg-stone-800 p-4"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <div className="flex w-full flex-col items-center">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xl font-medium">{skill.name}</span>
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
                    <span className="text-lg">{skill.level}%</span>
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
