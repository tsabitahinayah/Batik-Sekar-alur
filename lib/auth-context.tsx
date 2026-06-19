'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { AuthUser, UserRole } from './auth'
import { getRolePermissions, rolePermissions } from './auth'

interface RolePermissions {
  canCreate: boolean
  canRead: boolean
  canUpdate: boolean
  canDelete: boolean
  canManageUsers: boolean
  dataAccess: 'all' | 'own' | 'view-only'
}

interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  userRole: UserRole | null
  permissions: RolePermissions | null
  isHydrated: boolean
  login: (user: AuthUser) => void
  logout: () => void
  canAccess: (requiredPermission: keyof RolePermissions) => boolean
  canAccessData: (dataKalurahan?: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [permissions, setPermissions] = useState<RolePermissions | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('authUser')
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
        setPermissions(getRolePermissions(parsedUser.role))
      }
    } catch {
      localStorage.removeItem('authUser')
    } finally {
      setIsHydrated(true)
    }
  }, [])

  const login = (newUser: AuthUser) => {
    setUser(newUser)
    setIsAuthenticated(true)
    setPermissions(getRolePermissions(newUser.role))
    // Persist user to localStorage
    localStorage.setItem('authUser', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    setPermissions(null)
    localStorage.removeItem('authUser')
  }

  const canAccess = (requiredPermission: keyof RolePermissions): boolean => {
    if (!permissions) return false
    const value = permissions[requiredPermission]
    return typeof value === 'boolean' ? value : false
  }

  const canAccessData = (dataKalurahan?: string): boolean => {
    if (!permissions || !user) return false

    // Admin can access all data
    if (permissions.dataAccess === 'all') return true

    // Viewer can only view
    if (permissions.dataAccess === 'view-only') return false

    // Agen Statistik can only access their own kalurahan data
    if (permissions.dataAccess === 'own') {
      return user.kalurahan === dataKalurahan
    }

    return false
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        userRole: user?.role || null,
        permissions,
        isHydrated,
        login,
        logout,
        canAccess,
        canAccessData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
