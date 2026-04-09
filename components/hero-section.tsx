"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Moon, Brain, Heart, Sparkles, Users, CheckCircle2, Leaf } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const benefits = [
  { icon: Moon, text: "Favorise un endormissement rapide et naturel." },
  { icon: Brain, text: "Améliore la qualité du sommeil profond." },
  { icon: Heart, text: "Réduit le stress et l'anxiété nocturne." },
  { icon: Sparkles, text: "Réveil frais et reposé, sans somnolence." },
]

const productCarouselImages = [
  "/product_carousel/1d6ff8f4011c411576bbdb542e64b0291947029.jpeg",
  "/product_carousel/3635427a640aaf71214d6f57b133c8ea1901336.jpeg",
  "/product_carousel/6d84f7d35275324437d77de3e38eee2f1593560.jpeg",
  "/product_carousel/95626ffba4c9e25362a4555b620873eb1941106.jpeg",
  "/product_carousel/df670059e73c3b778fd3ba10ab09d2ca1806703.jpeg",
]

const pricingOptions = [
  {
    id: "one",
    label: "Pack 1 – L'Essai 30 Jours",
    subtitle: "1 sachet",
    price: "44.90",
    originalPrice: "49.90",
    savings: "5.00",
    duration: "30 jours",
    pricePerDay: "1,49 €",
    delivery: "Standard",
    perks: [],
    popular: false,
    normalUrl:
      "https://f8cebf-de.myshopify.com/cart/52846096023888:1?selling_plan=689962549584",
    singleUrl:
      "https://f8cebf-de.myshopify.com/cart/52846411710800:1",
  },
  {
    id: "two",
    label: "Pack 2 – L'Équilibre 60 Jours",
    subtitle: "2 sachets",
    price: "74.90",
    originalPrice: "99.80",
    savings: "24.90",
    duration: "60 jours",
    pricePerDay: "1,24 €",
    delivery: "Standard",
    perks: ['OFFERT : Guide "Mieux Dormir"'],
    popular: true,
    normalUrl:
      "https://f8cebf-de.myshopify.com/cart/52846583087440:1?selling_plan=689962582352",
    singleUrl:
      "https://f8cebf-de.myshopify.com/cart/52846096712016:1",
  },
  {
    id: "three",
    label: "Pack 3 – Vitalité+ 90 Jours",
    subtitle: "3 sachets",
    price: "99.90",
    originalPrice: "149.70",
    savings: "49.80",
    duration: "90 jours",
    pricePerDay: "1,11 €",
    delivery: "Express",
    perks: ["Livraison offerte", 'OFFERT : Guide "Mieux Dormir"'],
    popular: false,
    normalUrl:
      "https://f8cebf-de.myshopify.com/cart/52846115488080:1?selling_plan=689962615120",
    singleUrl:
      "https://f8cebf-de.myshopify.com/cart/52846389363024:1",
  },
]

const startingPrice = pricingOptions.reduce(
  (min, opt) => Math.min(min, Number.parseFloat(opt.price)),
  Number.POSITIVE_INFINITY,
)

const startingPriceLabel = `${startingPrice.toFixed(2).replace(".", ",")} €`

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

export function HeroSection() {
  const [selected, setSelected] = useState("two")
  const imageRef = useRef<HTMLDivElement | null>(null)
  const [imageInView, setImageInView] = useState(false)
  const [countdown, setCountdown] = useState("48:00:00")
  const [stockCount, setStockCount] = useState(STARTING_STOCK)

  useEffect(() => {
    if (!imageRef.current || typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageInView(true)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(imageRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

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

  const handleGoToAcheter = () => {
    window.location.href = "#acheter"
  }

  const handleSinglePurchase = () => {
    const option = pricingOptions.find((opt) => opt.id === selected)
    if (!option) return

    const url = option.singleUrl
    if (!url) return

    window.location.href = url
  }

  return (
    <section className="px-6 py-8 lg:py-12">
      {/* Top - Rating, title, CTA */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-4">
        {/* Rating */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {"4.9/5 Excellent"}
          </span>
        </div>

        {/* Social proof icons line */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{"12 000 clients"}</span>
          </div>
          <span className="opacity-40">•</span>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <span>{"Sans dépendance"}</span>
          </div>
          <span className="opacity-40">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{"Satisfait ou remboursé 60j"}</span>
          </div>
          <span className="opacity-40">•</span>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span>{"Vegan"}</span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {"Retrouve enfin des nuits profondes — et des matins légers."}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {"Tu passes des heures à fixer le plafond ? Tu te réveilles épuisé ? Ce n'est pas une fatalité."}
          </p>

          {/* Primary CTA visible immédiatement avec prix de départ */}
          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <button
              onClick={handleGoToAcheter}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {"Commencer mes nuits réparatrices →"}
            </button>
            <span className="text-xs text-muted-foreground">
              {"À partir de "}
              <span className="font-semibold text-foreground">{startingPriceLabel}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom - Product image & details */}
      <div id="acheter" className="mx-auto mt-10 grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left - Product Image (sachet mis en avant, plus grand, sticky + animation à l'apparition) */}
        <div className="relative flex items-start justify-center lg:sticky lg:top-24">
          <div
            ref={imageRef}
            className={`relative w-full max-w-[520px] transition-all duration-700 ease-out ${
              imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-secondary/80 p-4 shadow-2xl shadow-primary/20 md:p-5">
              <Carousel className="w-full">
                <CarouselContent>
                  {productCarouselImages.map((src, index) => (
                    <CarouselItem key={src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`YOUY GUM Sleep Gummies - Vue produit ${index + 1}`}
                        width={720}
                        height={720}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        className="mx-auto h-auto w-full max-h-[460px] object-contain md:max-h-[500px]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Floating badge on product image */}
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
              <span className="text-sm">⭐</span>
              <span>{"Best Seller • 12 000+ clients"}</span>
            </div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Benefits */}
          <div className="flex flex-col gap-3">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-start gap-3">
                <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">{b.text}</span>
              </div>
            ))}
          </div>

          {/* Pricing Options */}
          <div id="pricing-block" className="flex flex-col gap-3 scroll-mt-24">
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
                } ${
                  opt.popular && selected === opt.id ? "ring-2 ring-primary/30" : ""
                }`}
              >
                {/* Sachet Count Badge */}
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  {opt.subtitle.match(/^\d+\s+sachet[s]?/)?.[0] || opt.subtitle}
                </span>
                {opt.popular && (
                  <>
                    <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground shadow-sm shadow-accent/20">
                      Le + Populaire
                    </span>
                  </>
                )}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        selected === opt.id ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}
                    >
                      {selected === opt.id && (
                        <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{opt.label}</span>
                      {opt.popular && (
                        <p className="mt-1 text-[11px] font-semibold text-primary">
                          Choisi par 68% de nos clients
                        </p>
                      )}
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {opt.duration}
                        </span>
                        <span>•</span>
                        <span className="font-medium text-primary">{opt.pricePerDay}/jour</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v1a1 1 0 001 1h2m-6 0h6" />
                          </svg>
                          {opt.delivery}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-foreground">
                      {opt.price}
                      {""}
                      {"EUR"}
                    </span>
                    <p className="text-xs text-muted-foreground line-through">
                      {opt.originalPrice}
                      {"EUR"}
                    </p>
                    {opt.popular && (
                      <p className="mt-1 text-[10px] font-semibold text-primary">
                        Résultats optimaux dès la 2e semaine
                      </p>
                    )}
                  </div>
                </div>
                {/* Perks */}
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

          {/* Achat unique */}
          <button
            onClick={handleSinglePurchase}
            className="w-full text-center text-xs text-white"
          >
            Achat unique
          </button>

          {/* FOMO doux sous le bloc pricing */}
          <div className="mt-2 grid gap-2 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-xs text-foreground md:grid-cols-2 md:items-center">
            <p className="font-semibold text-destructive">
              {`Il reste ${stockCount} packs au tarif fondateur`}
            </p>
            <p className="md:text-right">
              <span className="font-semibold text-foreground">Cette offre expire dans :</span>{" "}
              <span className="font-mono font-bold text-destructive">{countdown}</span>
            </p>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleBuyNow}
            className="w-full rounded-xl bg-primary py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Acheter maintenant
          </button>
        </div>
      </div>
    </section>
  )
}
