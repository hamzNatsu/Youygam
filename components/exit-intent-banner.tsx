"use client"

import { useEffect, useState } from "react"

export function ExitIntentBanner() {
  const [visible, setVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || hasTriggered) return

    const getScrollProgress = () => {
      const doc = document.documentElement
      const body = document.body
      const scrollTop = Math.max(window.scrollY, doc.scrollTop, body.scrollTop)
      const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight)
      const scrollableHeight = Math.max(0, scrollHeight - window.innerHeight)

      if (scrollableHeight === 0) return 0
      return scrollTop / scrollableHeight
    }

    const handleScroll = () => {
      const scrollProgress = getScrollProgress()
      if (scrollProgress >= 0.1) {
        setVisible(true)
        setHasTriggered(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    window.requestAnimationFrame(handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasTriggered])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-accent/40 bg-card p-6 shadow-2xl shadow-accent/20">
        <div className="text-center text-foreground">
          <h3 className="text-3xl font-extrabold leading-tight text-accent md:text-4xl">Encore des nuits difficiles ?</h3>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent md:text-sm">Tu es sélectionné(e) pour gagner :</p>
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
            Voir le résultat →
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
