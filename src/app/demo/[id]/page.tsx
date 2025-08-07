interface DemoPageProps {
  params: {
    id: string
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  return (
    <div>
      <h1>Demo Page</h1>
      <p>Demo ID: {params.id}</p>
    </div>
  )
}
