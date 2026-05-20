"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Shield, User as UserIcon, Lock, Trash2, Pencil, Plus } from "lucide-react"
import type { User as UserType } from "@/lib/types"

const randomUsers: UserType[] = [
  {
    id: "1",
    username: "admin_utama",
    email: "admin.bps@bantulkab.go.id",
    password: "••••••••",
    role: "Admin",
  },
  {
    id: "2",
    username: "agen_pleret",
    email: "pleret.statistik@desa.id",
    password: "••••••••",
    role: "Agen Statistik",
  },
  {
    id: "3",
    username: "agen_srimulyo",
    email: "srimulyo.data@desa.id",
    password: "••••••••",
    role: "Agen Statistik",
  },
  {
    id: "4",
    username: "admin_bantul",
    email: "bantul.kota@bps.go.id",
    password: "••••••••",
    role: "Admin",
  },
  {
    id: "5",
    username: "agen_panggungharjo",
    email: "panggung.sejahtera@desa.id",
    password: "••••••••",
    role: "Agen Statistik",
  },
]

export default function ManajemenUserPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Manajemen User</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Kelola akses dan peran admin serta agen statistik desa
          </p>
        </div>
        <Button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-5 w-5" />
          Tambah User
        </Button>
      </div>

      {/* User List */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Profil User ({randomUsers.length})</CardTitle>
          <CardDescription>Daftar pengguna terdaftar dengan akses ke panel admin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-4 pt-2 font-semibold text-foreground">User</th>
                  <th className="pb-4 pt-2 font-semibold text-foreground">Email</th>
                  <th className="pb-4 pt-2 font-semibold text-foreground">Password</th>
                  <th className="pb-4 pt-2 font-semibold text-foreground">Role</th>
                  <th className="pb-4 pt-2 font-semibold text-foreground text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {randomUsers.map((user) => (
                  <tr key={user.id} className="group hover:bg-muted/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <UserIcon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-foreground">{user.username}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {user.email}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Lock className="h-4 w-4" />
                        {user.password}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-foreground">
                        <Shield className="h-3.5 w-3.5" />
                        {user.role}
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary">
                          <Pencil className="h-4.5 w-4.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4.5 w-4.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
