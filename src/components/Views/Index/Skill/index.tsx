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
  skillData?: SkillCategory[]
}

export default function Skill({ skillData }: SkillProps) {
  return (
    <section className="flex h-screen w-full flex-col gap-10">
      <HeadTitle title="Skills" />
      {skillData?.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="flex w-full gap-8">
          <div className="w-1/4">
            <h3 className="mb-4 text-2xl font-bold text-neutral-400">{categoryData.category}</h3>
          </div>
          <div className="w-3/4">
            <div className="grid grid-cols-2 gap-6">
              {categoryData.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-background/50 hover:bg-background/80 flex items-center gap-4 rounded-lg p-4 transition-colors"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
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
