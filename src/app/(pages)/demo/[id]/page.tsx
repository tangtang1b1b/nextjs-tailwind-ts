interface DemoPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params

  return (
    <section className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Demo ID: {id}</h1>
      <p className="text-gray-300">No favorites added yet.</p>
    </section>
  )
}
