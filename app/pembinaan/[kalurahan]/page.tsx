import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { pembinaanData, heroImages, kalurahans, activities } from "@/lib/data"
import type { Kalurahan } from "@/lib/types"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PageProps {
  params: Promise<{ kalurahan: string }>
}

export function generateStaticParams() {
  return kalurahans.map((k) => ({
    kalurahan: k.toLowerCase(),
  }))
}

export default async function KalurahanPembinaanPage({ params }: PageProps) {
  const { kalurahan: slug } = await params
  const kalurahanName = kalurahans.find((k) => k.toLowerCase() === slug)

  if (!kalurahanName) {
    notFound()
  }

  const heroImage = heroImages[slug] || heroImages.pembinaan
  
  // Filter pembinaan data for this kalurahan
  const relevantPembinaan = pembinaanData.filter((p) =>
    p.kalurahan.includes(kalurahanName as Kalurahan)
  )

  // Filter activities for this kalurahan
  const relevantActivities = activities.filter(
    (a) => a.kalurahan === kalurahanName && a.category === "pembinaan"
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <Hero
          title={`Kalurahan ${kalurahanName}`}
          subtitle="Pembinaan dan Pendampingan"
          imageUrl={heroImage}
        />

        {/* Navigation Tabs */}
        <section className="bg-white py-8 px-4 border-b">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 p-4 rounded-lg border-2 border-primary/30 text-center">
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-accent">
                Pembinaan Desa Cantik Pertama
              </h2>
            </div>

            {/* Kalurahan Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {kalurahans.map((k) => (
                <Link
                  key={k}
                  href={`/pembinaan/${k.toLowerCase()}`}
                  className={cn(
                    "min-w-[160px] rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold transition-all text-center",
                    k === kalurahanName
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-white text-foreground hover:bg-primary/10"
                  )}
                >
                  {k}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pembinaan Content for this Kalurahan */}
        <section className="bg-white py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Pembinaan di Kalurahan {kalurahanName}
            </h2>

            {relevantPembinaan.length > 0 ? (
              <div className="space-y-12">
                {relevantPembinaan.map((pembinaan, index) => (
                  <article
                    key={pembinaan.id}
                    className={`flex flex-col gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="lg:w-1/2">
                      {pembinaan.imageUrls && pembinaan.imageUrls.length > 1 ? (
                        <div className="overflow-hidden rounded-xl shadow-lg">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {pembinaan.imageUrls.map((url, imgIndex) => (
                                <CarouselItem key={imgIndex}>
                                  <div className="relative aspect-[4/3]">
                                    <Image
                                      src={url}
                                      alt={`${pembinaan.title} - ${imgIndex + 1}`}
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
                        </div>
                      ) : pembinaan.imageUrls && pembinaan.imageUrls.length === 1 ? (
                        <div className="overflow-hidden rounded-xl shadow-lg">
                          <Image
                            src={pembinaan.imageUrls[0]}
                            alt={pembinaan.title}
                            width={600}
                            height={400}
                            className="w-full aspect-[4/3] object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center rounded-xl bg-muted aspect-[4/3]">
                          <p className="text-muted-foreground text-lg">
                            Dokumentasi akan segera hadir
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-1/2">
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent">
                            {pembinaan.title}
                          </h3>
                          <p className="mt-4 text-lg">
                            <strong className="text-foreground">{pembinaan.date}</strong>
                            <span className="text-foreground"> - </span>
                            <span className="text-foreground">
                              {pembinaan.description}
                            </span>
                          </p>
                        </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Belum ada data pembinaan untuk Kalurahan {kalurahanName}.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Activities */}
        {relevantActivities.length > 0 && (
          <section className="bg-muted py-12 px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Kegiatan Terkait
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relevantActivities.map((activity) => (
                  <article
                    key={activity.id}
                    className="rounded-xl bg-white p-6 shadow-md"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{activity.title}</h3>
                      <p className="text-muted-foreground mt-1">
                        {activity.date}
                      </p>
                      <p className="mt-2 text-foreground line-clamp-3">{activity.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
