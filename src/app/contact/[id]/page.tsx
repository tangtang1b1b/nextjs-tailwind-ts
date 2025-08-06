
interface PathProps {
  params: Promise<{
    id: string
  }>
}

export default async function ContactPage({ params }: PathProps) {
  const { id } = await params

  return (
    <div>
      <h1>path : {id}</h1>
      <p>This is the 動態路由</p>
    </div>
  )
}
