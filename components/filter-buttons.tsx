"use client"

import { cn } from "@/lib/utils"
import type { Kalurahan } from "@/lib/types"

interface FilterButtonsProps {
  selectedFilter: Kalurahan | "Semua"
  onFilterChange: (filter: Kalurahan | "Semua") => void
}

const filters: (Kalurahan | "Semua")[] = ["Semua", "Pleret", "Srimulyo", "Bantul", "Panggungharjo"]

export function FilterButtons({ selectedFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <section className="bg-white py-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={cn(
                "min-w-[160px] rounded-lg border-2 px-8 py-4 text-lg font-semibold transition-all",
                selectedFilter === filter
                  ? "border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-primary bg-white text-foreground hover:bg-primary/10"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
