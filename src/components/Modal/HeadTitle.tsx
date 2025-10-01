'use client'
export default function HeadTitle({ title }: { title: string }) {
  return (
    <h2
      data-fade="fadeRight"
      className="text-foreground after:bg-foreground before:bg-foreground relative mx-auto w-fit text-4xl font-bold opacity-0 before:absolute before:top-1/2 before:right-full before:h-1 before:w-10 before:-translate-x-3 after:absolute after:top-1/2 after:left-full after:h-1 after:w-10 after:translate-x-3 md:mr-auto md:ml-0 md:before:hidden"
    >
      {title}
    </h2>
  )
}
