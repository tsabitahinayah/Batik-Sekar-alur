"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navItems } from "@/lib/data"
import { ChevronDown, Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-secondary sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/images/logobatik.png"
                alt="Logo Batik Sekar Alur"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl font-bold text-secondary-foreground">
              Batik Sekar Alur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.href ? null : item.href)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-lg font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary underline underline-offset-8"
                        : "text-secondary-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expandedItem === item.href && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-lg font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary underline underline-offset-8"
                        : "text-secondary-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu - Click based, not hover */}
                {item.children && expandedItem === item.href && (
                  <div className="absolute left-0 top-full mt-1 w-64 rounded-lg bg-white py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setExpandedItem(null)}
                        className={cn(
                          "block px-4 py-3 text-lg transition-colors",
                          isActive(child.href)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              className="ml-4 p-2 text-secondary-foreground hover:text-primary"
              aria-label="Cari"
            >
              <Search className="h-6 w-6" />
            </button>

            <Link
              href="/admin/login"
              className="ml-4 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.href ? null : item.href)}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-4 text-xl font-medium",
                        isActive(item.href) ? "text-primary" : "text-secondary-foreground"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 transition-transform",
                          expandedItem === item.href && "rotate-180"
                        )}
                      />
                    </button>
                    {expandedItem === item.href && (
                      <div className="bg-secondary/50 pl-6">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setExpandedItem(null)
                            }}
                            className={cn(
                              "block px-4 py-3 text-lg",
                              isActive(child.href)
                                ? "text-primary font-semibold"
                                : "text-secondary-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-4 text-xl font-medium",
                      isActive(item.href) ? "text-primary" : "text-secondary-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mx-4 mt-4 block rounded-lg bg-primary px-6 py-4 text-center text-xl font-semibold text-primary-foreground"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
