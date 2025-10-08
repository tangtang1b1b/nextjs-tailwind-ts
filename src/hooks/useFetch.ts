import { useState, useEffect, useCallback } from 'react'

interface FetchParams {
  url: string
}

interface UseFetchReturn<T> {
  data: T | null
  refetch: () => void
}

export function useFetch<T>({ url }: FetchParams): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: T = await response.json()
      setData(result)
    } catch (err) {
      console.error('Error fetching skills data:', err)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    refetch: fetchData,
  }
}
