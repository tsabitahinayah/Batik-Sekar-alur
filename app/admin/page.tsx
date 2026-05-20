import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { activities, koordinasiData, pembinaanData, monevData } from "@/lib/data"
import { FileText, Users, BarChart3, Calendar } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Total Kegiatan",
    value: activities.length,
    icon: FileText,
    href: "/admin/kegiatan",
    description: "Kegiatan terdokumentasi",
  },
  {
    title: "Koordinasi",
    value: koordinasiData.length,
    icon: Users,
    href: "/admin/koordinasi",
    description: "Dengan kalurahan",
  },
  {
    title: "Pembinaan",
    value: pembinaanData.length,
    icon: Calendar,
    href: "/admin/pembinaan",
    description: "Sesi pembinaan",
  },
  {
    title: "Manajemen User",
    value: 5,
    icon: Users,
    href: "/admin/users",
    description: "Admin & Agen Statistik",
  },
]

const recentActivities = activities.slice(0, 5)

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Selamat datang di panel admin Batik Sekar Alur
        </p>
      </div>

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
                    <p className="font-serif text-4xl font-bold text-foreground mt-2">{stat.value}</p>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">{stat.description}</p>
                  </div>
                  <Icon className="h-6 w-6 text-primary shrink-0" />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Kegiatan Terbaru</CardTitle>
          <CardDescription className="text-lg">
            Dokumentasi kegiatan terbaru dari program Desa Cantik
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground">
                    {activity.date} - {activity.kalurahan}
                  </p>
                </div>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-foreground">
                  {activity.category}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/admin/kegiatan"
            className="mt-6 inline-flex items-center justify-center w-full rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Lihat Semua Kegiatan
          </Link>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Aksi Cepat</CardTitle>
          <CardDescription className="text-lg">
            Kelola konten website dengan mudah
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/admin/kegiatan/tambah"
              className="flex items-center justify-center text-center rounded-lg bg-primary px-4 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors h-24 shadow-sm"
            >
              Tambah Kegiatan
            </Link>
            <Link
              href="/admin/koordinasi/tambah"
              className="flex items-center justify-center text-center rounded-lg bg-primary px-4 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors h-24 shadow-sm"
            >
              Tambah Koordinasi
            </Link>
            <Link
              href="/admin/pembinaan/tambah"
              className="flex items-center justify-center text-center rounded-lg bg-primary px-4 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors h-24 shadow-sm"
            >
              Tambah Pembinaan
            </Link>
            <Link
              href="/admin/monev/tambah"
              className="flex items-center justify-center text-center rounded-lg bg-primary px-4 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors h-24 shadow-sm"
            >
              Tambah Monev
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
