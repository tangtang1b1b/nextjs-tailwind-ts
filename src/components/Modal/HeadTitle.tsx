'use client'
export default function HeadTitle({ title }: { title: string }) {
  return (
    <h2 data-fade="fadeRight" className="text-4xl font-bold text-neutral-400 opacity-0">
      {title}
    </h2>
  )
}
