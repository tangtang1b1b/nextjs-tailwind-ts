'use client'

import Banner from '@/components/Views/Index/Banner'
import Job from '@/components/Views/Index/Experience'
import Skill from '@/components/Views/Index/Skill'
import { useFetch } from '@/hooks/useFetch'

export default function Home() {
  const { data: skillsData } = useFetch({ url: '/data/skills.json' })
  const { data: jobData } = useFetch({ url: '/data/experience.json' })

  return (
    <>
      <Banner />
      <Skill skillData={skillsData || []} />
      <Job jobData={jobData || []} />
    </>
  )
}
