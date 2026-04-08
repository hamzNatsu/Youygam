"use client"

import { useEffect, useState } from "react"

import { useIsMobile } from "@/hooks/use-mobile"

const EXIT_INTENT_STORAGE_KEY = "youygum_exit_intent_shown"

export function ExitIntentBanner() {
  const [visible, setVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (typeof window === "undefined") return
    const alreadyShown = window.localStorage.getItem(EXIT_INTENT_STORAGE_KEY)
    if (alreadyShown === "1") return

    const openExitIntent = () => {
      setVisible(true)
      window.localStorage.setItem(EXIT_INTENT_STORAGE_KEY, "1")
    }

    const handleMouseOut = (event: MouseEvent) => {
      if (isMobile) return
      if (event.clientY <= 0 && !visible) {
        openExitIntent()
      }
    }

    let lastY = window.scrollY
    let lastTs = Date.now()
    const handleScroll = () => {
      if (!isMobile || visible) return

      const now = Date.now()
      const currentY = window.scrollY
      const deltaY = currentY - lastY
      const deltaTime = now - lastTs

      // On mobile, a sharp upward movement usually signals an intent to leave.
      if (deltaY < -90 && deltaTime > 0 && deltaTime < 220 && currentY > 180) {
        openExitIntent()
      }

      lastY = currentY
      lastTs = now
    }

    window.addEventListener("mouseout", handleMouseOut)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile, visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-accent/40 bg-card p-6 shadow-2xl shadow-accent/20">
        <div className="text-center text-foreground">
          <h3 className="text-xl font-bold text-accent">Encore des nuits difficiles ? On t&apos;offre une aide.</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Utilise le code <span className="font-bold text-foreground">DEBUT10</span> pour -10% sur ta première commande.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <a
            href="#acheter"
            onClick={() => setVisible(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            J&apos;accepte — économiser 10%
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="text-xs text-muted-foreground underline decoration-muted-foreground/50 underline-offset-2 hover:text-foreground"
          >
            Non merci, je préfère continuer à mal dormir.
          </button>
        </div>
      </div>
    </div>
  )
}
