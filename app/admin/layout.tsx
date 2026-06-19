"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"

const allSidebarItems = [
  { label: "Dashboard", href: "/admin", icon: Home, roles: ["Admin", "Agen Statistik", "Viewer"] },
  { label: "Kegiatan", href: "/admin/kegiatan", icon: FileText, roles: ["Admin", "Agen Statistik"] },
  { label: "Koordinasi", href: "/admin/koordinasi", icon: Users, roles: ["Admin", "Agen Statistik"] },
  { label: "Pembinaan", href: "/admin/pembinaan", icon: FileText, roles: ["Admin", "Agen Statistik"] },
  { label: "Monev", href: "/admin/monev", icon: BarChart3, roles: ["Admin", "Agen Statistik"] },
  { label: "Manajemen User", href: "/admin/users", icon: Users, roles: ["Admin"] },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, userRole, isAuthenticated } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication on mount
  useEffect(() => {
    setIsLoading(false)
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [isAuthenticated, pathname, router])

  // Filter sidebar items based on user role
  const sidebarItems = allSidebarItems.filter(
    (item) => userRole && item.roles.includes(userRole)
  )

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-muted">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-secondary text-secondary-foreground shadow-lg"
        aria-label={sidebarOpen ? "Tutup sidebar" : "Buka sidebar"}
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar text-sidebar-foreground transform transition-transform lg:translate-x-0 lg:static",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 px-6 border-b border-sidebar-border">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/logobatik.png"
                alt="Logo Batik Sekar Alur"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-lg font-bold">Admin Panel</span>
              <p className="text-sm text-sidebar-foreground/70">Batik Sekar Alur</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Bottom section - User Info and Logout */}
          <div className="px-4 py-6 border-t border-sidebar-border space-y-4">
            {/* User Info Card */}
            <div className="bg-sidebar-primary/10 rounded-lg p-4">
              <p className="text-xs text-sidebar-foreground/60 uppercase tracking-wider">Pengguna</p>
              <p className="font-semibold text-sidebar-foreground mt-1 truncate">
                {user?.fullName || user?.username}
              </p>
              <p className="text-xs text-sidebar-foreground/60 mt-1">
                {userRole}
                {user?.kalurahan && ` • ${user.kalurahan}`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Kembali ke Website
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  )
}
