"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const DISPLAY_MS = 4000
const CYCLE_MS = 25000

const MESSAGES = [
  "🛒 Marie de Lyon vient de commander le Pack 2 — il y a 4 min",
  "🛒 Thomas de Paris a choisi Vitalité+ 90 Jours — il y a 11 min",
  "🛒 Claire de Bordeaux a commencé son essai 30 jours — il y a 2 min",
  "🛒 Julien de Nantes vient de commander le Pack 2 — il y a 6 min",
  "🛒 Sarah de Lille a choisi Vitalité+ 90 Jours — il y a 9 min",
  "🛒 Lucie de Toulouse a commencé son essai 30 jours — il y a 3 min",
  "🛒 Karim de Marseille vient de commander le Pack 2 — il y a 8 min",
  "🛒 Chloé de Nice a choisi Vitalité+ 90 Jours — il y a 14 min",
  "🛒 Antoine de Strasbourg a commencé son essai 30 jours — il y a 5 min",
  "🛒 Léa de Rennes vient de commander le Pack 2 — il y a 7 min",
  "🛒 Hugo de Montpellier a choisi Vitalité+ 90 Jours — il y a 12 min",
  "🛒 Emma de Reims a commencé son essai 30 jours — il y a 4 min",
  "🛒 Maxime de Grenoble vient de commander le Pack 2 — il y a 10 min",
  "🛒 Camille de Dijon a choisi Vitalité+ 90 Jours — il y a 13 min",
  "🛒 Paul de Angers a commencé son essai 30 jours — il y a 6 min",
  "🛒 Inès de Brest vient de commander le Pack 2 — il y a 9 min",
  "🛒 Victor de Tours a choisi Vitalité+ 90 Jours — il y a 15 min",
  "🛒 Anaïs de Clermont-Ferrand a commencé son essai 30 jours — il y a 5 min",
]

export function RecentPurchasesToast() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState(MESSAGES[0])
  const previousIndexRef = useRef<number>(-1)

  const shuffled = useMemo(() => [...MESSAGES], [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const pickRandomMessage = () => {
      if (shuffled.length === 0) return

      let nextIndex = Math.floor(Math.random() * shuffled.length)
      if (shuffled.length > 1 && nextIndex === previousIndexRef.current) {
        nextIndex = (nextIndex + 1) % shuffled.length
      }

      previousIndexRef.current = nextIndex
      setMessage(shuffled[nextIndex])
    }

    const showToast = () => {
      pickRandomMessage()
      setVisible(true)

      window.setTimeout(() => {
        setVisible(false)
      }, DISPLAY_MS)
    }

    // Start quickly, then continue with the required cadence.
    showToast()
    const intervalId = window.setInterval(showToast, CYCLE_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [shuffled])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed bottom-24 left-4 z-[9998] max-w-[min(92vw,420px)] md:bottom-4">
      <div className="rounded-xl border border-primary/20 bg-card/95 px-4 py-3 text-sm text-foreground shadow-xl shadow-primary/10 backdrop-blur-sm">
        {message}
      </div>
    </div>
  )
}
