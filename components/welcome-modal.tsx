"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function WelcomeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal")
    if (!hasSeenModal) {
      setOpen(true)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem("hasSeenWelcomeModal", "true")
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Piagam Komitmen Batik Sekar Alur</DialogTitle>
          <DialogDescription>
            Selamat datang di website Batik Sekar Alur. Berikut adalah piagam komitmen kami.
          </DialogDescription>
        </DialogHeader>
        
        {/* Container untuk Gambar */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/images/modal-popup.png"
            alt="Piagam Komitmen Batik Sekar Alur"
            fill
            className="object-contain"
            priority
          />
        </div>

      </DialogContent>
    </Dialog>
  )
}
