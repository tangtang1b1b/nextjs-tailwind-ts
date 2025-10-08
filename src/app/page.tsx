'use client'

import Banner from '@/components/Views/Index/Banner'
import Job from '@/components/Views/Index/Job'
import Skill from '@/components/Views/Index/Skill'
import { useFetch } from '@/hooks/useFetch'
import { SkillCategory, JobData } from '@/types/data'

export default function Home() {
  const { data: skillsData } = useFetch<SkillCategory[]>({ url: '/data/skills.json' })
  const { data: jobData } = useFetch<JobData[]>({ url: '/data/job.json' })

  return (
    <>
      <Banner />
      <Skill skillData={skillsData || []} />
      <Job jobData={jobData || []} />
    </>
  )
}
