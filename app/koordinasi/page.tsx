import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { koordinasiData, heroImages } from "@/lib/data"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function KoordinasiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <Hero
          title="Koordinasi"
          subtitle="Rapat koordinasi Desa Cantik (Cinta Statistik)"
          imageUrl={heroImages.koordinasi}
        />

        {/* Intro Section */}
        <section className="bg-white py-12 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              <strong className="text-accent">Rapat koordinasi Desa Cantik (Cinta Statistik)</strong>{" "}
              bertujuan untuk meningkatkan literasi, kesadaran, dan peran aktif masyarakat dan
              perangkat desa dalam pengelolaan data statistik untuk pembangunan desa yang lebih
              tepat sasaran. Program ini juga berupaya menstandardisasi pengelolaan data,
              meningkatkan kualitas data, dan optimalisasi pemanfaatan data untuk perencanaan
              pembangunan.
            </p>
          </div>
        </section>

        {/* Koordinasi List */}
        <section className="bg-muted py-12 px-4">
          <div className="mx-auto max-w-6xl space-y-16">
            {koordinasiData.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    {item.imageUrls && item.imageUrls.length > 0 ? (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {item.imageUrls.map((url, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={url}
                                  alt={`${item.title} - ${imgIndex + 1}`}
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
                        src={item.imageUrl || "/public/placeholder.jpg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">
                    <span className="text-foreground">Koordinasi - </span>
                    <span className="text-accent">Kalurahan {item.kalurahan}</span>
                  </h2>
                  <p className="mt-4 text-lg">
                    <strong className="text-foreground">{item.date}</strong>
                    <span className="text-foreground"> - </span>
                    <span className="text-foreground">{item.description}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
