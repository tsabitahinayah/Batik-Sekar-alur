export type Kalurahan = "Pleret" | "Srimulyo" | "Bantul" | "Panggungharjo"

export interface Activity {
  id: string
  title: string
  date: string
  description: string
  imageUrl?: string
  imageUrls?: string[]
  kalurahan: Kalurahan
  category: "koordinasi" | "pembinaan" | "monev"
  link?: string
}

export interface Koordinasi {
  id: string
  kalurahan: Kalurahan
  date: string
  title: string
  description: string
  imageUrl?: string
  imageUrls?: string[]
}

export interface Pembinaan {
  id: string
  title: string
  date: string
  description: string
  kalurahan: Kalurahan[]
  imageUrls: string[]
}

export interface Monev {
  id: string
  title: string
  date: string
  description: string
  imageUrl?: string
  imageUrls?: string[]
  findings?: string[]
}

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type UserRole = "Admin" | "Agen Statistik" | "Viewer"

export interface User {
  id: string
  username: string
  email?: string
  password?: string
  role: UserRole
  kalurahan?: Kalurahan
  fullName?: string
}

export interface RolePermissions {
  canCreate: boolean
  canRead: boolean
  canUpdate: boolean
  canDelete: boolean
  canManageUsers: boolean
  dataAccess: "all" | "own" | "view-only"
}
