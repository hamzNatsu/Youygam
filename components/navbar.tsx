"use client"

import { useState } from "react"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { ScrollingBanner } from "./scrolling-banner"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpeg"
            alt="YOUY GUM Logo"
            width={120}
            height={40}
            className="h-10 w-auto scale-[2.5] object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#benefits" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Bienfaits</a>
          <a href="#ingredients" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Ingredients</a>
          <a href="#reviews" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Avis</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Rechercher" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Panier" className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">0</span>
          </button>
          <button
            aria-label="Menu"
            className="rounded-full p-2 text-muted-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#benefits" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Bienfaits</a>
            <a href="#ingredients" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Ingredients</a>
            <a href="#reviews" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Avis</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>FAQ</a>
          </div>
        </div>
      )}
      
      <ScrollingBanner />
    </header>
  )
}
