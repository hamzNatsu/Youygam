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
          <h3 className="text-3xl font-extrabold leading-tight text-accent md:text-4xl">Encore des nuits difficiles ?</h3>
          <p className="mt-3 text-base font-medium text-foreground md:text-lg">
            On t&apos;offre une vraie solution pour reprendre le contrôle.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent md:text-sm">Tu es sélectionné(e) pour recevoir :</p>
          <p className="mt-2 text-2xl font-black uppercase leading-tight text-foreground md:text-3xl">
            Une routine sommeil complète sur 60 jours
          </p>
          <p className="mt-2 text-base font-semibold text-accent md:text-lg">(valeur : 99,80EUR)</p>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Des résultats dès les premières nuits — directement dans ta boîte mail.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <input
            type="email"
            placeholder="Ton adresse email"
            className="w-full rounded-full border border-border bg-secondary px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            Recevoir ma routine offerte →
          </button>
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
