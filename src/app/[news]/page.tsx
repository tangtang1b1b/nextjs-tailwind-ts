interface PathProps {
  params: Promise<{
    news: string
  }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function NewsPage({ params, searchParams }: PathProps) {
  const newsPath = await params
  const newsCategory = await searchParams
  const news = newsPath?.news
  const cat = newsCategory?.cat

  return (
    <div>
      <h1>path : {news}</h1>
      <h1>searchParams : {cat}</h1>
      <p>This is the 動態路由</p>
    </div>
  )
}
