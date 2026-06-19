// Role-based credentials configuration
// Each user can be assigned to a specific role with different permissions

export type UserRole = "Admin" | "Agen Statistik" | "Viewer"

export interface AuthUser {
  id: string
  username: string
  password: string
  role: UserRole
  kalurahan?: "Pleret" | "Srimulyo" | "Bantul" | "Panggungharjo"
  fullName: string
}

// Hardcoded credentials for demonstration
// In production, use a real authentication service
export const users: AuthUser[] = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    role: "Admin",
    fullName: "Administrator",
  },
  {
    id: "2",
    username: "agen_pleret",
    password: "agen123",
    role: "Agen Statistik",
    kalurahan: "Pleret",
    fullName: "Agen Statistik Pleret",
  },
  {
    id: "3",
    username: "agen_srimulyo",
    password: "agen123",
    role: "Agen Statistik",
    kalurahan: "Srimulyo",
    fullName: "Agen Statistik Srimulyo",
  },
  {
    id: "4",
    username: "agen_bantul",
    password: "agen123",
    role: "Agen Statistik",
    kalurahan: "Bantul",
    fullName: "Agen Statistik Bantul",
  },
  {
    id: "5",
    username: "agen_panggungharjo",
    password: "agen123",
    role: "Agen Statistik",
    kalurahan: "Panggungharjo",
    fullName: "Agen Statistik Panggungharjo",
  },
  {
    id: "6",
    username: "viewer",
    password: "viewer123",
    role: "Viewer",
    fullName: "Viewer",
  },
]

// Role-based permissions
export const rolePermissions: Record<UserRole, {
  canCreate: boolean
  canRead: boolean
  canUpdate: boolean
  canDelete: boolean
  canManageUsers: boolean
  dataAccess: "all" | "own" | "view-only"
}> = {
  "Admin": {
    canCreate: true,
    canRead: true,
    canUpdate: true,
    canDelete: true,
    canManageUsers: true,
    dataAccess: "all",
  },
  "Agen Statistik": {
    canCreate: true,
    canRead: true,
    canUpdate: true,
    canDelete: false,
    canManageUsers: false,
    dataAccess: "own",
  },
  "Viewer": {
    canCreate: false,
    canRead: true,
    canUpdate: false,
    canDelete: false,
    canManageUsers: false,
    dataAccess: "view-only",
  },
}

/**
 * Authenticate user with username and password
 * Returns user object if credentials are correct, null otherwise
 */
export function authenticateUser(username: string, password: string): AuthUser | null {
  const user = users.find(
    (u) => u.username === username && u.password === password
  )
  return user || null
}

/**
 * Get permissions for a specific role
 */
export function getRolePermissions(role: UserRole) {
  return rolePermissions[role]
}
