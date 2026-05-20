import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { monevData, heroImages } from "@/lib/data"
import { CheckCircle } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function MonevPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <Hero
          title="Monitoring dan Evaluasi"
          subtitle="Evaluasi Kegiatan Desa Cinta Statistik"
          imageUrl={heroImages.monev}
        />

        {/* Monev Content */}
        <section className="bg-white py-12 px-4">
          <div className="mx-auto max-w-6xl">
            {monevData.map((monev) => (
              <article key={monev.id} className="space-y-8">
                <div className="flex flex-col gap-8 lg:flex-row">
                  <div className="lg:w-1/2">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      {monev.imageUrls && monev.imageUrls.length > 0 ? (
                        <Carousel className="w-full">
                          <CarouselContent>
                            {monev.imageUrls.map((url, index) => (
                              <CarouselItem key={index}>
                                <div className="relative aspect-[4/3]">
                                  <Image
                                    src={url}
                                    alt={`${monev.title} - ${index + 1}`}
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
                          src={monev.imageUrl || "/public/placeholder.jpg"}
                          alt={monev.title}
                          width={700}
                          height={500}
                          className="w-full aspect-[4/3] object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <p className="text-lg font-semibold text-accent underline underline-offset-4">
                      {monev.date}
                    </p>
                    <p className="mt-4 text-lg text-foreground leading-relaxed">
                      {monev.description}
                    </p>
                  </div>
                </div>

                {/* Findings Section */}
                {monev.findings && monev.findings.length > 0 && (
                  <div className="mt-12 rounded-xl bg-muted p-8">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Temuan dan Rekomendasi
                    </h3>
                    <ul className="space-y-4">
                      {monev.findings.map((finding, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <span className="text-lg text-foreground">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Statistics Summary */}
        <section className="bg-secondary py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-12">
              Ringkasan Program 2025
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-primary p-6 text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground">4</p>
                <p className="mt-2 text-lg font-medium text-primary-foreground">Kalurahan Binaan</p>
              </div>
              <div className="rounded-xl bg-primary p-6 text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground">3</p>
                <p className="mt-2 text-lg font-medium text-primary-foreground">Sesi Pembinaan</p>
              </div>
              <div className="rounded-xl bg-primary p-6 text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground">50+</p>
                <p className="mt-2 text-lg font-medium text-primary-foreground">Peserta Terlatih</p>
              </div>
              <div className="rounded-xl bg-primary p-6 text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground">12</p>
                <p className="mt-2 text-lg font-medium text-primary-foreground">Agen Statistik</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
