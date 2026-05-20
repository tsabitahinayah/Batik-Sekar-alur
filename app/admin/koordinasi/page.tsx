"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { koordinasiData } from "@/lib/data"
import { Plus, Pencil, Trash2, Eye, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminKoordinasiPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Manajemen Koordinasi</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Kelola data koordinasi dengan berbagai kalurahan
          </p>
        </div>
        <Link
          href="/admin/koordinasi/tambah"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Tambah Koordinasi
        </Link>
      </div>

      {/* List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Koordinasi ({koordinasiData.length})</CardTitle>
          <CardDescription>Semua riwayat koordinasi yang tercatat dalam sistem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {koordinasiData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center"
              >
                <div className="w-full sm:w-32 flex-shrink-0">
                  <Image
                    src={item.imageUrl || (item.imageUrls && item.imageUrls[0]) || "/images/hero/hero-koordinasi.png"}
                    alt={item.title}
                    width={128}
                    height={96}
                    className="w-full sm:w-32 h-24 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {item.date} - {item.kalurahan}
                  </p>
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
