import Image from "next/image"

interface HeroProps {
  title: string
  subtitle?: string
  imageUrl: string
}

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
