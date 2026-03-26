"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

function formatTimeLeft(timeLeft: TimeLeft | null) {
  if (!timeLeft) return ""

  const { days, hours, minutes, seconds } = timeLeft

  const pad = (value: number) => value.toString().padStart(2, "0")

  return `${pad(days)}j ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}

export function ScrollingBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    let startTime = Date.now()

    try {
      const stored = window.localStorage.getItem("youygum_banner_start")
      const parsed = stored ? Number.parseInt(stored, 10) : NaN

      if (!Number.isNaN(parsed) && parsed > 0 && Date.now() - parsed < SEVEN_DAYS_MS) {
        startTime = parsed
      } else {
        window.localStorage.setItem("youygum_banner_start", String(startTime))
      }
    } catch {
      // If localStorage is unavailable, just fall back to a simple rolling timer
      startTime = Date.now()
    }

    const updateTimeLeft = () => {
      const now = Date.now()
      let diff = startTime + SEVEN_DAYS_MS - now

      // When 7 days have passed, reset the counter and start a new 7-day window
      if (diff <= 0) {
        startTime = now
        diff = SEVEN_DAYS_MS

        try {
          window.localStorage.setItem("youygum_banner_start", String(startTime))
        } catch {
          // ignore storage errors
        }
      }

      const days = Math.floor(diff / (24 * 60 * 60 * 1000))
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((diff % (60 * 1000)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateTimeLeft()
    const interval = window.setInterval(updateTimeLeft, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const message =
    "PRÉCOMMANDE - Offre spéciale de lancement - Profitez-en avant la disponibilité complète ! 🎉"

  const countdownLabel = timeLeft
    ? `Offre se termine dans ${formatTimeLeft(timeLeft)}`
    : "Offre en cours"

  return (
    <div className="relative z-[99999] w-full overflow-hidden bg-accent py-5 text-accent-foreground">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 inline-block text-base font-medium">
            {message}
            <span className="ml-4 inline-flex items-center gap-2 rounded-full bg-accent-foreground/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest shadow-sm">
              <span
                className="h-2 w-2 rounded-full bg-destructive animate-pulse"
                aria-hidden="true"
              />
              <span>{countdownLabel}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
