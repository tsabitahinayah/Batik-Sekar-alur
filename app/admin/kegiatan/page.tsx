"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { activities, kalurahans } from "@/lib/data"
import type { Kalurahan } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Plus, Pencil, Trash2, Eye } from "lucide-react"
import Link from "next/link"

type FilterType = Kalurahan | "Semua"
type CategoryFilter = "semua" | "koordinasi" | "pembinaan" | "monev"

export default function AdminKegiatanPage() {
  const [kaluFilter, setKaluFilter] = useState<FilterType>("Semua")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("semua")

  const filteredActivities = activities.filter((activity) => {
    const matchesKalurahan = kaluFilter === "Semua" || activity.kalurahan === kaluFilter
    const matchesCategory = categoryFilter === "semua" || activity.category === categoryFilter
    return matchesKalurahan && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Kegiatan</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Kelola dokumentasi kegiatan Desa Cantik
          </p>
        </div>
        <Link
          href="/admin/kegiatan/tambah"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Tambah Kegiatan
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
          <CardDescription>Filter kegiatan berdasarkan kalurahan dan kategori</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Kalurahan Filter */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Kalurahan</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setKaluFilter("Semua")}
                className={cn(
                  "rounded-lg px-4 py-2 text-base font-medium transition-colors",
                  kaluFilter === "Semua"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                Semua
              </button>
              {kalurahans.map((k) => (
                <button
                  key={k}
                  onClick={() => setKaluFilter(k)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-base font-medium transition-colors",
                    kaluFilter === k
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Kategori</label>
            <div className="flex flex-wrap gap-2">
              {(["semua", "koordinasi", "pembinaan", "monev"] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-base font-medium transition-colors capitalize",
                    categoryFilter === cat
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activities Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Kegiatan ({filteredActivities.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center"
                >
                  <div className="w-full sm:w-32 flex-shrink-0">
                    <Image
                      src={activity.imageUrl || (activity.imageUrls && activity.imageUrls[0]) || "/images/hero/hero-beranda.png"}
                      alt={activity.title}
                      width={128}
                      height={96}
                      className="w-full sm:w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{activity.title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {activity.date} - {activity.kalurahan}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-sm font-medium text-foreground capitalize">
                        {activity.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:flex-col">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Eye className="h-4 w-4 mr-1" />
                      Lihat
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <Pencil className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Hapus
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Tidak ada kegiatan yang sesuai filter.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
