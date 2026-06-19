"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { activities, koordinasiData, pembinaanData, monevData } from "@/lib/data"
import { FileText, Users, BarChart3, Calendar, Eye, Edit2, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AdminDashboardPage() {
  const { user, userRole, canAccess, isHydrated } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  // Wait for hydration before rendering
  useEffect(() => {
    if (isHydrated) {
      setIsLoading(false)
    }
  }, [isHydrated])

  // Show loading while hydrating
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Memuat dashboard...</p>
        </div>
      </div>
    )
  }

  // Filter data based on user role and kalurahan
  const filteredActivities = user?.kalurahan
    ? activities.filter((a) => a.kalurahan === user.kalurahan)
    : activities

  const filteredKoordinasi = user?.kalurahan
    ? koordinasiData.filter((k) => k.kalurahan === user.kalurahan)
    : koordinasiData

  const recentActivities = filteredActivities.slice(0, 5)

  // Role-based stats
  const getStats = () => {
    const baseStats = [
      {
        title: "Total Kegiatan",
        value: filteredActivities.length,
        icon: FileText,
        href: "/admin/kegiatan",
        description:
          user?.kalurahan
            ? `Kegiatan ${user.kalurahan}`
            : "Kegiatan terdokumentasi",
        visible: true,
      },
      {
        title: "Koordinasi",
        value: filteredKoordinasi.length,
        icon: Users,
        href: "/admin/koordinasi",
        description:
          user?.kalurahan ? `Koordinasi ${user.kalurahan}` : "Dengan kalurahan",
        visible: userRole !== "Viewer",
      },
      {
        title: "Pembinaan",
        value: pembinaanData.length,
        icon: Calendar,
        href: "/admin/pembinaan",
        description: "Sesi pembinaan",
        visible: userRole !== "Viewer",
      },
      {
        title: "Manajemen User",
        value: 5,
        icon: Users,
        href: "/admin/users",
        description: "Admin & Agen Statistik",
        visible: canAccess("canManageUsers"),
      },
    ]

    return baseStats.filter((stat) => stat.visible)
  }

  const stats = getStats()

  return (
    <div className="space-y-8">
      {/* Header with Role Info */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Selamat datang, {user?.fullName || user?.username}
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg px-4 py-2">
            <p className="text-sm font-semibold text-primary">{userRole}</p>
            {user?.kalurahan && (
              <p className="text-xs text-muted-foreground">{user.kalurahan}</p>
            )}
          </div>
        </div>
      </div>

      {/* Permission Info */}
      {userRole === "Agen Statistik" && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <Eye className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900">Akses Terbatas</p>
              <p className="text-sm text-blue-800">
                Anda dapat mengakses dan mengelola data untuk Kalurahan {user?.kalurahan} saja.
              </p>
            </div>
          </div>
        </div>
      )}

      {userRole === "Viewer" && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex gap-3">
            <Eye className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900">Mode Baca Saja</p>
              <p className="text-sm text-amber-800">
                Anda memiliki akses read-only. Tidak dapat membuat, mengubah, atau menghapus data.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full min-h-[160px] flex flex-col justify-between p-6">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-medium text-foreground">
                      {stat.title}
                    </span>
                    <p className="font-serif text-4xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">
                      {stat.description}
                    </p>
                  </div>
                  <Icon className="h-6 w-6 text-primary shrink-0" />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Permissions Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Izin Akses Anda</CardTitle>
          <CardDescription className="text-lg">
            Fitur dan tindakan yang tersedia untuk peran {userRole}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              {canAccess("canRead") ? (
                <Eye className="h-5 w-5 text-green-600" />
              ) : (
                <Eye className="h-5 w-5 text-muted-foreground/50" />
              )}
              <span className="text-sm font-medium">Baca Data</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              {canAccess("canCreate") ? (
                <Plus className="h-5 w-5 text-green-600" />
              ) : (
                <Plus className="h-5 w-5 text-muted-foreground/50" />
              )}
              <span className="text-sm font-medium">Buat Data</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              {canAccess("canUpdate") ? (
                <Edit2 className="h-5 w-5 text-green-600" />
              ) : (
                <Edit2 className="h-5 w-5 text-muted-foreground/50" />
              )}
              <span className="text-sm font-medium">Edit Data</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              {canAccess("canDelete") ? (
                <Trash2 className="h-5 w-5 text-green-600" />
              ) : (
                <Trash2 className="h-5 w-5 text-muted-foreground/50" />
              )}
              <span className="text-sm font-medium">Hapus Data</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              {canAccess("canManageUsers") ? (
                <Users className="h-5 w-5 text-green-600" />
              ) : (
                <Users className="h-5 w-5 text-muted-foreground/50" />
              )}
              <span className="text-sm font-medium">Kelola User</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">
            {user?.kalurahan ? `Kegiatan Terbaru - ${user.kalurahan}` : "Kegiatan Terbaru"}
          </CardTitle>
          <CardDescription className="text-lg">
            Dokumentasi kegiatan terbaru dari program Desa Cantik
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.length > 0 ? (
              recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activity.date} - {activity.kalurahan}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-foreground">
                    {activity.category}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Tidak ada kegiatan yang tersedia
              </p>
            )}
          </div>
          <Link href="/admin/kegiatan">
            <Button variant="outline" className="w-full mt-6">
              Lihat Semua Kegiatan
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
