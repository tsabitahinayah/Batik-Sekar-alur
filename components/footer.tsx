import Image from "next/image"
import { Globe, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary py-4 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-40 md:h-28 md:w-48 -my-4">
              <Image
                src="/images/logobps.png"
                alt="Logo BPS Bantul"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://bantulkab.bps.go.id"
              target="_blank"
              className="text-primary-foreground hover:opacity-80 transition-opacity"
              aria-label="Website BPS Bantul"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground">
                <Globe className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/bpsbantul/"
              target="_blank"
              className="text-primary-foreground hover:opacity-80 transition-opacity"
              aria-label="Instagram BPS Bantul"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground">
                <Instagram className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/bpsbantul/"
              target="_blank"
              className="text-primary-foreground hover:opacity-80 transition-opacity"
              aria-label="Facebook BPS Bantul"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground">
                <Facebook className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="https://wa.me/6282170003402"
              target="_blank"
              className="text-primary-foreground hover:opacity-80 transition-opacity"
              aria-label="WhatsApp BPS Bantul"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
                </svg>
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@bpsbantul3402"
              target="_blank"
              className="text-primary-foreground hover:opacity-80 transition-opacity"
              aria-label="YouTube BPS Bantul"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground">
                <Youtube className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
