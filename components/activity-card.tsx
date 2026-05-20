import Image from "next/image"
import Link from "next/link"
import type { Activity } from "@/lib/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const hasMultipleImages = activity.imageUrls && activity.imageUrls.length > 0
  const displayImages = hasMultipleImages ? activity.imageUrls : [activity.imageUrl]

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        {hasMultipleImages ? (
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {activity.imageUrls?.map((url, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={url}
                      alt={`${activity.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <Image
            src={activity.imageUrl || "/public/placeholder.jpg"}
            alt={activity.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            {activity.kalurahan}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-base font-semibold text-accent">{activity.date}</time>
        <h3 className="mt-2 font-serif text-xl font-bold text-card-foreground line-clamp-2">
          {activity.title}
        </h3>
        <p className="mt-3 flex-1 text-lg leading-relaxed text-muted-foreground line-clamp-3">
          {activity.description}
        </p>
        <Link
          href={`/aktivitas/${activity.id}`}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  )
}
