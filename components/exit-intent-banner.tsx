"use client"

import { useEffect, useState } from "react"

export function ExitIntentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const alreadyShown = window.localStorage.getItem("youygum_exit_intent_shown")
    if (alreadyShown === "1") return

    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !visible) {
        setVisible(true)
        window.localStorage.setItem("youygum_exit_intent_shown", "1")
      }
    }

    window.addEventListener("mouseout", handleMouseOut)
    return () => {
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-2xl items-center justify-between gap-4 rounded-2xl border border-accent/40 bg-card/95 p-4 shadow-2xl shadow-accent/20">
        <div className="text-xs md:text-sm text-foreground">
          <div className="font-semibold text-accent">
            {"Avant de partir"}
          </div>
          <div className="mt-1">
            {"Ta première commande à -10 % — offre de lancement réservée aux nouveaux clients."}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#acheter"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
          >
            {"Profiter de l'offre"}
          </a>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground"
          >
            {"Fermer"}
          </button>
        </div>
      </div>
    </div>
  )
}
