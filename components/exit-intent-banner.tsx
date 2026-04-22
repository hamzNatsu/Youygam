"use client"

import { useEffect, useState } from "react"

export function ExitIntentBanner() {
  const [visible, setVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

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

  useEffect(() => {
    if (!visible) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
      onClick={() => setVisible(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-accent/40 bg-card p-6 shadow-2xl shadow-accent/20"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted && (
          <div className="text-center text-foreground">
            <h3 className="text-3xl font-extrabold leading-tight text-accent md:text-4xl">Encore des nuits difficiles ?</h3>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent md:text-sm">Tu es sélectionné(e) pour gagner :</p>
            <p className="mt-2 text-2xl font-black uppercase leading-tight text-foreground md:text-3xl">
              Une routine sommeil complète sur 60 jours
            </p>
            <p className="mt-2 text-base font-semibold text-accent md:text-lg">(valeur : 99,80€)</p>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Des résultats dès les premières nuits — directement dans ta boîte mail.
            </p>
          </div>
        )}

        {submitted ? (
          <div className="text-sm leading-relaxed text-foreground md:text-base">
            <p className="text-base font-bold text-foreground md:text-2xl text-center">Merci pour votre participation.</p>
            <p className="mt-4">Votre inscription a bien été prise en compte.</p>
            <p>Nous procéderons prochainement au tirage au sort.</p>
            <p className="mt-4">Si vous êtes sélectionné(e), vous recevrez directement votre accès par email.</p>
            <p>Dans le cas contraire, aucune action n’est requise de votre part.</p>
            <p className="mt-4">À très bientôt.</p>
             <button
              type="button"
              onClick={() => setVisible(false)}
              className="text-xl text-muted-foreground underline decoration-muted-foreground/50 underline-offset-2 hover:text-foreground"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form
            className="mt-5 flex flex-col items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              if (!email.trim()) return
              setSubmitted(true)
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ton adresse email"
              className="w-full rounded-full border border-border bg-secondary px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
            >
              Participer
            </button>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="text-xs text-muted-foreground underline decoration-muted-foreground/50 underline-offset-2 hover:text-foreground"
            >
              Non merci, je préfère continuer à mal dormir.
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
