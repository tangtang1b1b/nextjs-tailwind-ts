import { useState, useEffect } from 'react'

interface FetchParams {
  url: string
}

interface SkillItem {
  icon: string
  name: string
  level: number
}

interface SkillCategory {
  category: string
  skills: SkillItem[]
}

interface UseSkillsReturn {
  data: SkillCategory[] | null
  refetch: () => void
}

export function useFetch({ url }: FetchParams): UseSkillsReturn {
  const [data, setData] = useState<SkillCategory[] | null>(null)

  const fetchData = async () => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: SkillCategory[] = await response.json()
      setData(result)
    } catch (err) {
      console.error('Error fetching skills data:', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    refetch: fetchData,
  }
}
