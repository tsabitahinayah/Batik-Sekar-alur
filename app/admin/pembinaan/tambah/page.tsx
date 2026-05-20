"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { kalurahans } from "@/lib/data"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function TambahPembinaanPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    router.push("/admin/pembinaan")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/pembinaan"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Kembali"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Tambah Pembinaan</h1>
          <p className="mt-1 text-lg text-muted-foreground">
            Tambahkan dokumentasi sesi pembinaan dan pendampingan baru
          </p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Pembinaan</CardTitle>
          <CardDescription>
            Isi informasi lengkap tentang sesi pembinaan yang akan ditambahkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-foreground mb-2">
                Judul Pembinaan <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="Masukkan judul pembinaan"
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

            {/* Kalurahan (Multiple Selection) */}
            <div>
              <label className="block text-lg font-medium text-foreground mb-2">
                Kalurahan Binaan <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 rounded-lg border border-input p-4">
                {kalurahans.map((k) => (
                  <label key={k} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="kalurahan" value={k} className="h-5 w-5 rounded border-input text-primary focus:ring-primary" />
                    <span className="text-lg text-foreground">{k}</span>
                  </label>
                ))}
              </div>
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
                placeholder="Masukkan deskripsi pembinaan"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-lg font-medium text-foreground mb-2">
                Foto Pembinaan <span className="text-destructive">*</span>
              </label>
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="mt-4 text-lg text-muted-foreground">
                  Klik atau seret file ke sini untuk mengunggah (Bisa lebih dari satu)
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Format: JPG, PNG, WebP (Maks. 5MB)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end pt-4">
              <Link
                href="/admin/pembinaan"
                className="inline-flex items-center justify-center rounded-lg border-2 border-border h-12 w-full sm:w-60 text-lg font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Batal
              </Link>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-primary h-12 w-full sm:w-60 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Menyimpan..." : "Simpan Pembinaan"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
