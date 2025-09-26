'use client'
export default function HeadTitle({ title }: { title: string }) {
  return (
    <h2
      data-fade="fadeRight"
      className="text-foreground after:bg-foreground relative w-fit text-4xl font-bold opacity-0 after:absolute after:top-1/2 after:left-full after:h-1 after:w-10 after:translate-x-3"
    >
      {title}
    </h2>
  )
}
