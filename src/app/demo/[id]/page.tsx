interface DemoPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5">
      <h1>Demo Page</h1>
      <p>Demo ID: {id}</p>
    </section>
  )
}
