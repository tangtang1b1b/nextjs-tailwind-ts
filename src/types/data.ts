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

export interface ProjectData {
  name: string
  image: string
  url: string
  type: string
  year: string
  jobIntro: string
  features: string[]
  core: string[]
  technology: { type: string; items: string[] }[]
  mainDetail: {
    feature: string
    content: string
    use: string
  }[]
}
