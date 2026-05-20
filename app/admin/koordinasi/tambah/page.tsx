"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { kalurahans } from "@/lib/data"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function TambahKoordinasiPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    router.push("/admin/koordinasi")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/koordinasi"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Kembali"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Tambah Koordinasi</h1>
          <p className="mt-1 text-lg text-muted-foreground">
            Tambahkan dokumentasi koordinasi baru dengan kalurahan
          </p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Koordinasi</CardTitle>
          <CardDescription>
            Isi informasi lengkap tentang kegiatan koordinasi yang akan ditambahkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-foreground mb-2">
                Judul Koordinasi <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="Masukkan judul koordinasi"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-lg font-medium text-foreground mb-2">
                Tanggal <span className="text-destructive">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Kalurahan */}
            <div>
              <label htmlFor="kalurahan" className="block text-lg font-medium text-foreground mb-2">
                Kalurahan <span className="text-destructive">*</span>
              </label>
              <select
                id="kalurahan"
                name="kalurahan"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Pilih Kalurahan</option>
                {kalurahans.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-lg font-medium text-foreground mb-2">
                Deskripsi <span className="text-destructive">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                placeholder="Masukkan deskripsi koordinasi"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-lg font-medium text-foreground mb-2">
                Foto Dokumentasi <span className="text-destructive">*</span>
              </label>
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="mt-4 text-lg text-muted-foreground">
                  Klik atau seret file ke sini untuk mengunggah
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Format: JPG, PNG, WebP (Maks. 5MB)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end pt-4">
              <Link
                href="/admin/koordinasi"
                className="inline-flex items-center justify-center rounded-lg border-2 border-border h-12 w-full sm:w-60 text-lg font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Batal
              </Link>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-primary h-12 w-full sm:w-60 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Menyimpan..." : "Simpan Koordinasi"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
