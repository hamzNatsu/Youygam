"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const pricingOptions = [
  {
    id: "one",
    label: "Pack 1 – L'Essai 30 Jours",
    subtitle: "1 sachet",
    price: "44.90",
    originalPrice: "49.90",
    duration: "30 jours",
    pricePerDay: "1,49 €",
    delivery: "Standard",
    perks: [],
    popular: false,
    normalUrl:
      "https://f8cebf-de.myshopify.com/products/pack-1-l-essai-30-jours-abonnement",
    singleUrl:
      "https://f8cebf-de.myshopify.com/products/pack-1-l-essai-30-jours-achat-unique",
  },
  {
    id: "two",
    label: "Pack 2 – L'Équilibre 60 Jours",
    subtitle: "2 sachets",
    price: "74.90",
    originalPrice: "99.80",
    duration: "60 jours",
    pricePerDay: "1,24 €",
    delivery: "Standard",
    perks: ['OFFERT : Guide "Mieux Dormir"'],
    popular: true,
    normalUrl:
      "https://f8cebf-de.myshopify.com/products/pack-2-l-equilibre-60-jours-abonnement-1",
    singleUrl:
      "https://f8cebf-de.myshopify.com/products/pack-2-l-equilibre-60-jours-abonnement",
  },
  {
    id: "three",
    label: "Pack 3 – Vitalité+ 90 Jours",
    subtitle: "3 sachets",
    price: "99.90",
    originalPrice: "149.70",
    duration: "90 jours",
    pricePerDay: "1,11 €",
    delivery: "Express",
    perks: ["Livraison offerte", 'OFFERT : Guide "Mieux Dormir"'],
    popular: false,
    normalUrl:
      "https://f8cebf-de.myshopify.com/products/pack-3-vitalite-90-jours-abonnement",
    singleUrl:
      "https://f8cebf-de.myshopify.com/products/pack-3-vitalite-90-jours-achat-unique",
  },
]

const COUNTDOWN_STORAGE_KEY = "youygum_expiry"
const STOCK_STORAGE_KEY = "youygum_fundator_stock"
const STOCK_DATE_STORAGE_KEY = "youygum_fundator_stock_date"
const STARTING_STOCK = 43
const MIN_STOCK = 11

function getOrCreateExpiry() {
  if (typeof window === "undefined") return Date.now() + 48 * 60 * 60 * 1000

  const saved = window.localStorage.getItem(COUNTDOWN_STORAGE_KEY)
  if (saved && Date.now() < Number(saved)) return Number(saved)

  const newExpiry = Date.now() + 48 * 60 * 60 * 1000
  window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(newExpiry))
  return newExpiry
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10)
}

function getOrCreateStock() {
  if (typeof window === "undefined") return STARTING_STOCK

  const todayKey = getTodayKey()
  const savedDay = window.localStorage.getItem(STOCK_DATE_STORAGE_KEY)
  const savedStock = window.localStorage.getItem(STOCK_STORAGE_KEY)

  if (savedDay === todayKey && savedStock) {
    return Math.max(MIN_STOCK, Number(savedStock))
  }

  window.localStorage.setItem(STOCK_DATE_STORAGE_KEY, todayKey)
  window.localStorage.setItem(STOCK_STORAGE_KEY, String(STARTING_STOCK))
  return STARTING_STOCK
}

export function BottomPricingSection() {
  const [selected, setSelected] = useState("two")
  const [countdown, setCountdown] = useState("48:00:00")
  const [stockCount, setStockCount] = useState(STARTING_STOCK)

  useEffect(() => {
    const updateCountdown = () => {
      const expiry = getOrCreateExpiry()
      const diff = Math.max(0, expiry - Date.now())
      const h = Math.floor(diff / 3600000)
        .toString()
        .padStart(2, "0")
      const m = Math.floor((diff % 3600000) / 60000)
        .toString()
        .padStart(2, "0")
      const s = Math.floor((diff % 60000) / 1000)
        .toString()
        .padStart(2, "0")

      setCountdown(`${h}:${m}:${s}`)
    }

    const updateStock = () => {
      const dayStock = getOrCreateStock()
      setStockCount(dayStock)

      const currentMinuteBucket = Math.floor((Date.now() % 86400000) / 240000)
      const nextStock = Math.max(MIN_STOCK, STARTING_STOCK - currentMinuteBucket)
      window.localStorage.setItem(STOCK_STORAGE_KEY, String(nextStock))
      window.localStorage.setItem(STOCK_DATE_STORAGE_KEY, getTodayKey())
      setStockCount(nextStock)
    }

    updateCountdown()
    updateStock()

    const intervalId = window.setInterval(() => {
      updateCountdown()

      const expiry = getOrCreateExpiry()
      if (expiry <= Date.now()) {
        window.localStorage.removeItem(COUNTDOWN_STORAGE_KEY)
        updateCountdown()
      }

      const currentMinuteBucket = Math.floor((Date.now() % 86400000) / 240000)
      const nextStock = Math.max(MIN_STOCK, STARTING_STOCK - currentMinuteBucket)
      window.localStorage.setItem(STOCK_STORAGE_KEY, String(nextStock))
      window.localStorage.setItem(STOCK_DATE_STORAGE_KEY, getTodayKey())
      setStockCount(nextStock)
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const handleBuyNow = () => {
    const option = pricingOptions.find((opt) => opt.id === selected)
    if (!option) return

    const url = option.normalUrl
    if (!url) return

    window.location.href = url
  }

  const handleSinglePurchase = () => {
    const option = pricingOptions.find((opt) => opt.id === selected)
    if (!option) return

    const url = option.singleUrl
    if (!url) return

    window.location.href = url
  }

  return (
    <section className="bg-card/30 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Prêt à reprendre le contrôle de tes nuits ?
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {pricingOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`relative flex flex-col rounded-xl border-2 p-4 text-left transition-all ${
                opt.popular
                  ? "my-1 scale-105 border-transparent bg-[linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#8B7AFF_0%,#56E3C6_100%)] [background-clip:padding-box,border-box] [background-origin:border-box] shadow-md"
                  : selected === opt.id
                    ? "border-primary bg-card shadow-md"
                    : "border-border bg-card hover:border-primary/30"
              } ${opt.popular && selected === opt.id ? "ring-2 ring-primary/30" : ""}`}
            >
              <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                {opt.subtitle.match(/^\d+\s+sachet[s]?/)?.[0] || opt.subtitle}
              </span>

              {opt.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground shadow-sm shadow-accent/20">
                  Le + Populaire
                </span>
              )}

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      selected === opt.id ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}
                  >
                    {selected === opt.id && <div className="h-2 w-2 rounded-full bg-primary-foreground" />}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{opt.label}</span>
                    {opt.popular && (
                      <p className="mt-1 text-[11px] font-semibold text-primary">Choisi par 68% de nos clients</p>
                    )}
                    <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>{opt.duration}</span>
                      <span>•</span>
                      <span className="font-medium text-primary">{opt.pricePerDay}/jour</span>
                      <span>•</span>
                      <span>{opt.delivery}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-bold text-foreground">
                    {opt.price}EUR
                  </span>
                  <p className="text-xs text-muted-foreground line-through">
                    {opt.originalPrice}EUR
                  </p>
                  {opt.popular && (
                    <p className="mt-1 text-[10px] font-semibold text-primary">Résultats optimaux dès la 2e semaine</p>
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                {opt.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-primary">{perk}</span>
                  </div>
                ))}
              </div>

              {opt.popular && (
                <div className="mt-3">
                  <span className="inline-flex animate-pulse items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-500 ring-1 ring-emerald-500/30">
                    ⚡ Plus que 12 au tarif fondateur
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-3 grid gap-2 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-xs text-foreground md:grid-cols-2 md:items-center">
          <p className="font-semibold text-destructive">{`Il reste ${stockCount} packs au tarif fondateur`}</p>
          <p className="md:text-right">
            <span className="font-semibold text-foreground">Cette offre expire dans :</span>{" "}
            <span className="font-mono font-bold text-destructive">{countdown}</span>
          </p>
        </div>

        <button
          onClick={handleBuyNow}
          className="mt-4 w-full rounded-xl bg-primary py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Acheter maintenant
        </button>

        <button
          onClick={handleSinglePurchase}
          className="mt-2 w-full text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Achat unique
        </button>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border bg-background px-3 py-1.5">🔒 Paiement sécurisé</span>
          <span className="rounded-full border border-border bg-background px-3 py-1.5">🇫🇷 Fabriqué en France</span>
          <span className="rounded-full border border-border bg-background px-3 py-1.5">60j remboursé</span>
          <span className="rounded-full border border-border bg-background px-3 py-1.5">Livraison offerte dès 2 packs</span>
        </div>
      </div>
    </section>
  )
}
