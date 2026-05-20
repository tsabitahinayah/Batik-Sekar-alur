"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { pembinaanData, heroImages, kalurahans } from "@/lib/data"
import type { Kalurahan } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function PembinaanPage() {
  const [selectedKalurahan, setSelectedKalurahan] = useState<Kalurahan | "Semua">("Semua")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <Hero
          title="Pembinaan dan Pendampingan"
          subtitle="Program Pembinaan Desa Cantik"
          imageUrl={heroImages.pembinaan}
        />

        {/* Pembinaan Overview Header */}
        <section className="bg-white py-8 px-4 border-b">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 p-4 rounded-lg border-2 border-primary/30 text-center">
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-accent">
                Pembinaan Desa Cantik Pertama
              </h2>
            </div>

            {/* Kalurahan Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {kalurahans.map((kalurahan) => (
                <Link
                  key={kalurahan}
                  href={`/pembinaan/${kalurahan.toLowerCase()}`}
                  className={cn(
                    "min-w-[160px] rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold transition-all text-center",
                    selectedKalurahan === kalurahan
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-white text-foreground hover:bg-primary/10"
                  )}
                >
                  {kalurahan}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pembinaan Content */}
        <section className="bg-white py-12 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Pembinaan Desa Cantik Pertama
            </h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed">
                Pada Tahun 2025 ini, BPS Kabupaten Bantul tidak hanya melakukan pembinaan pada satu
                Desa saja, tapi juga melakukan pembinaan ke 3 Desa sebagai keberlanjutan dari
                pembinaan Desa Cantik yang dilakukan mulai tahun 2021 sampai dengan 2024. Desa-desa
                yang dilakukan pembinaan tahun 2025 adalah:
              </p>
              <ol className="mt-6 space-y-2 text-lg">
                <li>
                  <strong>Kalurahan Pleret</strong> (sebagai lokus utama penilaian Desa Cantik tahun
                  2025)
                </li>
                <li>
                  <strong>Kalurahan Srimulyo</strong>
                </li>
                <li>
                  <strong>Kalurahan Bantul</strong>
                </li>
                <li>
                  <strong>Kalurahan Panggungharjo</strong>
                </li>
              </ol>
              <p className="mt-6 text-lg leading-relaxed">
                Pembinaan Desa Cantik tahap pertama dilakukan secara serentak melalui media zoom
                meeting dengan mengundang seluruh aparat desa dari 4 kalurahan yang dibina.
                Pembinaan ini dimaksudkan untuk membekali para aparat desa terkait tahapan Desa
                Cantik mulai dari perencanaan, pengumpulan data sampai dengan teknik penyajiannya.
                Diharapkan nanti agar desa memiliki tenaga-tenaga terlatih dalam pelaksanaan
                pengumpulan data untuk memenuhi setiap kebutuhan data yang ada di desa bisa
                digunakan untuk perencanaan pembangunan.
              </p>
            </div>
          </div>
        </section>

        {/* Pembinaan Timeline */}
        <section className="bg-muted py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Timeline Pembinaan
            </h2>
            <div className="space-y-12">
              {pembinaanData.map((pembinaan, index) => (
                <article
                  key={pembinaan.id}
                  className={`flex flex-col gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2">
                    {pembinaan.imageUrls.length > 0 ? (
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
                      <div className="flex items-center justify-center rounded-xl bg-secondary/20 aspect-[4/3]">
                        <p className="text-muted-foreground text-lg">Dokumentasi akan segera hadir</p>
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                      {pembinaan.title}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-foreground">{pembinaan.date}</p>
                    <p className="mt-4 text-lg text-foreground leading-relaxed">
                      {pembinaan.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pembinaan.kalurahan.map((k) => (
                        <span
                          key={k}
                          className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-foreground"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
