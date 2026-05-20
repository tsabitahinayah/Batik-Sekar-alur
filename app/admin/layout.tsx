"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
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
import { useState } from "react"

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: Home },
  { label: "Kegiatan", href: "/admin/kegiatan", icon: FileText },
  { label: "Koordinasi", href: "/admin/koordinasi", icon: Users },
  { label: "Pembinaan", href: "/admin/pembinaan", icon: FileText },
  { label: "Monev", href: "/admin/monev", icon: BarChart3 },
  { label: "Manajemen User", href: "/admin/users", icon: Users },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

          {/* Bottom section */}
          <div className="px-4 py-6 border-t border-sidebar-border">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Kembali ke Website
            </Link>
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
