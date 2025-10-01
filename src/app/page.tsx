'use client'

import Banner from '@/components/Views/Index/Banner'
import Skill from '@/components/Views/Index/Skill'
import { useFetch } from '@/hooks/useFetch'

export default function Home() {
  const { data: skillsData } = useFetch({ url: '/data/skills.json' })

  return (
    <>
      <Banner />
      <Skill skillData={skillsData || []} />
    </>
  )
}
