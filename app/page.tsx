"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FilterButtons } from "@/components/filter-buttons"
import { ActivityCard } from "@/components/activity-card"
import { Footer } from "@/components/footer"
import { activities, heroImages } from "@/lib/data"
import type { Kalurahan } from "@/lib/types"
import Image from "next/image"
import { WelcomeModal } from "@/components/welcome-modal"

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<Kalurahan | "Semua">("Semua")

  const filteredActivities = activities.filter(
    (activity) => selectedFilter === "Semua" || activity.kalurahan === selectedFilter
  )

  return (
    <div className="flex min-h-screen flex-col">
      <WelcomeModal />
      <Navbar />

      <main>
        <Hero
          title="Batik Sekar Alur"
          subtitle="Pembinaan Statistik Sektoral tingkat Kalurahan"
          imageUrl={heroImages.beranda}
        />

        {/* About Section */}
        <section id="about" className="bg-white py-12 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              <strong className="text-accent">Desa Cantik atau Desa Cinta Statistik</strong>{" "}
              merupakan program inovatif yang diinisiasi oleh Badan Pusat Statistik (BPS) untuk
              percepatan penguatan statistik sektoral terhadap Pemerintah Desa dalam mengolah dan
              memanfaatkan data statistik guna terwujudnya program satu data Indonesia. Program ini
              bertujuan untuk meningkatkan pemahaman masyarakat tentang pentingnya statistik dalam
              konteks pembangunan desa.
            </p>

            <div className="mt-12 text-left bg-muted/30 p-8 rounded-2xl border border-primary/10">
              <h3 className="font-serif text-2xl font-bold text-accent mb-6 text-center">
                Tujuan Desa Cantik
              </h3>
              <ul className="grid gap-6 md:grid-cols-2">
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
                  <span>Meningkatkan literasi, kesadaran dan peran aktif perangkat desa/kelurahan dan Masyarakat dalam penyelenggaraan kegiatan statistik.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
                  <span>Standarisasi pengelolaan data statistik untuk menjaga kualitas dan keterbandingan indicator statistik.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</span>
                  <span>Optimalisasi penggunaan dan pemanfaatan data statistic sehingga program Pembangunan di desa/kelurahan tepat sasaran.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">4</span>
                  <span>Membentuk agen-agen statistic pada level desa/kelurahan.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-left bg-muted/30 p-8 rounded-2xl border border-primary/10">
              <h3 className="font-serif text-2xl font-bold text-accent mb-6 text-center">
                Output Pembinaan Desa Cantik
              </h3>
              <ul className="grid gap-6 md:grid-cols-2">
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
                  <span>Terlaksananya kegiatan pengelolaan statistik di desa/kelurahan (Laporan Akhir Kegiatan Desa Cantik).</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
                  <span>Terbentuknya Agen Statistik di desa/kelurahan yang sudah mendapatkan pembinaan statistik.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pencanangan Section */}
        <section className="bg-muted py-12 px-4">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent text-center mb-8">
              Pencanangan Desa Cantik di Kalurahan Pleret 2025
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/activities/pembukaan.png"
                  alt="Pembukaan oleh Bupati Kabupaten Bantul"
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="bg-white p-4 text-center">
                  <p className="font-semibold text-foreground">Pembukaan oleh Bupati Kabupaten Bantul</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/activities/penandatanganan.png"
                  alt="Penandatanganan Komitmen Desa Cantik 2025"
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="bg-white p-4 text-center">
                  <p className="font-semibold text-foreground">Penandatanganan Komitmen Desa Cantik 2025</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/activities/hadirin.png"
                  alt="Para Hadirin Pencanangan Desa Cantik"
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="bg-white p-4 text-center">
                  <p className="font-semibold text-foreground">Para Hadirin Pencanangan Desa Cantik</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <FilterButtons selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

        {/* Documentation Grid */}
        <section className="bg-white py-12 px-4">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Dokumentasi Kegiatan
            </h2>
            {filteredActivities.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredActivities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Belum ada kegiatan untuk filter yang dipilih.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
