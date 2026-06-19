'use client'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

// Metadata can't be in a client component, so we'll keep it commented for reference
// If you need metadata, consider using a server component wrapper or generateMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} font-sans bg-background`}>
      <head>
        <title>Batik Sekar Alur - Program Desa Cantik Kabupaten Bantul</title>
        <meta name="description" content="Pembinaan Statistik Sektoral tingkat Kalurahan - Desa Cinta Statistik (Desa Cantik) BPS Kabupaten Bantul" />
      </head>
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
