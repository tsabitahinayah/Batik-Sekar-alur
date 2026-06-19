"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/lib/auth-context"
import { authenticateUser } from "@/lib/auth"
import Image from "next/image"

export default function AdminLoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    // Validate inputs
    if (!username.trim() || !password.trim()) {
      setError("Mohon masukkan username dan password")
      return
    }

    setIsLoading(true)
    
    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Authenticate user
    const authenticatedUser = authenticateUser(username, password)
    
    if (authenticatedUser) {
      login(authenticatedUser)
      router.push("/admin")
    } else {
      setError("Username atau password salah")
      setPassword("")
    }

    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary to-secondary/50 px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/images/logobatik.png"
                alt="Logo Batik Sekar Alur"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <CardTitle className="font-serif text-2xl">Batik Sekar Alur</CardTitle>
            <CardDescription className="mt-2 text-base">
              Portal Admin
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-base">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="h-10"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 text-base"
            >
              {isLoading ? "Memproses..." : "Login"}
            </Button>
          </form>

          {/* Demo Credentials Display */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-3">Demo Credentials:</p>
            <div className="text-xs space-y-2 text-muted-foreground">
              <p><strong>Admin:</strong> admin / admin123</p>
              <p><strong>Agen Statistik:</strong> agen_pleret / agen123</p>
              <p><strong>Viewer:</strong> viewer / viewer123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}