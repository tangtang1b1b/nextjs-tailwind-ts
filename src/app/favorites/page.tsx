import Image from 'next/image'

export default function FavoritesPage() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <p className="text-gray-300">No favorites added yet.</p>
      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative aspect-square">
          <Image
            src="/images/og_image.jpg"
            alt="Favorite Image"
            fill
            sizes="(min-width: 1024px) 33.3vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/og_image.jpg"
            alt="Favorite Image"
            fill
            sizes="(min-width: 1024px) 33.3vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/og_image.jpg"
            alt="Favorite Image"
            fill
            sizes="(min-width: 1024px) 33.3vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
