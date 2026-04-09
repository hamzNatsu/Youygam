"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { ScrollingBanner } from "./scrolling-banner"

const navLinks = [
  { href: "#hero-section", label: "Hero section", eyebrow: "01" },
  { href: "#probleme", label: "Problème & solution", eyebrow: "02" },
  { href: "#comment-ca-marche", label: "Comment ça marche", eyebrow: "03" },
  { href: "#avis", label: "Avis", eyebrow: "04" },
  { href: "#faq", label: "FAQ", eyebrow: "05" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo_dark.png"
              alt="YOUY GUM Logo"
              width={120}
              height={40}
              className="h-10 w-auto scale-[2.5] object-contain"
            />
          </a>

          <div className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-foreground"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 group-hover:text-primary">
                  {link.eyebrow}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Rechercher" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Search className="h-5 w-5" />
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {link.eyebrow}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <ScrollingBanner />
    </>
  )
}
