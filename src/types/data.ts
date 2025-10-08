interface SkillItem {
  icon: string
  name: string
  level: number
}
export interface SkillCategory {
  category: string
  skills: SkillItem[]
}
export interface JobData {
  name: string
  jobTitle: string
  duration: string
  jobIntro: string
  technology: string[]
  jobDetail: {
    feature: string
    content: string
  }[]
}
