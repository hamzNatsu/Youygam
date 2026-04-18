"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Moon, Brain, Heart, Sparkles, CheckCircle2, Package, Truck, BookOpen, Gift } from "lucide-react"
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
  "/product_carousel/df670059e73c3b778fd3ba10ab09d2ca1806703.jpeg",
  "/product_carousel/1.png",
  "/product_carousel/2.png",
  "/product_carousel/3.png",
  "/product_carousel/4.png",
  "/product_carousel/5.png",
  "/product_carousel/6.png",
  "/product_carousel/7.png",
]

const pricingOptions = [
  {
    id: "one",
    label: "L'Essai 30 Jours",
    subtitle: "Pack 1",
    price: "44.90",
    originalPrice: "49.90",
    savings: "5.00",
    duration: "1 sachet",
    pricePerDay: "1,49 €",
    delivery: "",
    perks: ['Livraison Standard Gratuite'],
    popular: false,
    normalUrl:
      "https://f8cebf-de.myshopify.com/cart/52846096023888:1?selling_plan=689962549584",
    singleUrl:
      "https://f8cebf-de.myshopify.com/cart/52846411710800:1",
  },
  {
    id: "two",
    label: "L'Équilibre 60 Jours",
    subtitle: "Pack 2",
    price: "74.90",
    originalPrice: "99.80",
    savings: "24.90",
    duration: "2 sachets",
    pricePerDay: "1,24 €",
    delivery: "",
    perks: ['OFFERT : Guide "Mieux Dormir"','Livraison Standard Gratuite'],
    popular: true,
    normalUrl:
      "https://f8cebf-de.myshopify.com/cart/52846583087440:1?selling_plan=689962582352",
    singleUrl:
      "https://f8cebf-de.myshopify.com/cart/52846096712016:1",
  },
  {
    id: "three",
    label: "Vitalité+ 90 Jours",
    subtitle: "Pack 3",
    price: "99.90",
    originalPrice: "149.70",
    savings: "49.80",
    duration: "3 sachets",
    pricePerDay: "1,11 €",
    delivery: "",
    perks: ["Livraison Express Gratuite", 'OFFERT : Guide "Mieux Dormir"'],
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

const startingPriceLabel = '1,11 € / jour'

const COUNTDOWN_STORAGE_KEY = "youygum_expiry"
const STOCK_STORAGE_KEY = "youygum_fundator_stock"
const STOCK_DATE_STORAGE_KEY = "youygum_fundator_stock_date"
const STARTING_STOCK = 43
const MIN_STOCK = 11

function getPerkIcon(perk: string) {
  const lower = perk.toLowerCase()
  if (lower.includes("livraison")) return Truck
  if (lower.includes("guide") || lower.includes("ebook")) return BookOpen
  if (lower.includes("offert") || lower.includes("gift")) return Gift
  return CheckCircle2
}

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
    window.location.href = "https://f8cebf-de.myshopify.com/cart/52846583087440:1?selling_plan=689962582352"
  }

  const handleSinglePurchase = () => {
    const option = pricingOptions.find((opt) => opt.id === selected)
    if (!option) return

    const url = option.singleUrl
    if (!url) return

    window.location.href = url
  }

  return (
    <section id="hero-section" className="scroll-mt-24 px-6 py-6 lg:py-12">
      {/* Top - Rating, title, CTA */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-4">
        {/* Rating */}
        <div className="flex items-center justify-center gap-1.5 md:gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent md:h-5 md:w-5" />
            ))}
          </div>
          <span className="text-xs font-medium text-muted-foreground md:text-sm">
            {"4.9/5 Excellent"}
          </span>
        </div>

        {/* Title */}
        <div>
          <div className="mx-auto mb-2 inline-flex items-center rounded-full border border-white/20 bg-gradient-to-r from-white/20 via-black/35 to-white/20 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm md:mb-3 md:px-4 md:py-1.5 md:text-sm">
            {"Dormir est devenu un combat et se réveiller une punition ?"}
          </div>
          <h1 className="font-serif text-[1.5rem] font-bold leading-snug text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            {"Reprends le contrôle de tes nuits, et surtout de tes matins !"}
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-2">
            {"Endors-toi rapidement sans sacrifier ton réveil. Avec Youy Gum, tu t'endors vite et tu te réveilles clair, aligné, opérationnel."}
          </p>

          {/* Primary CTA visible immédiatement avec prix de départ */}
          <div className="mt-3 flex flex-row items-center justify-center gap-2 sm:mt-4 sm:gap-4">
            <button
              onClick={handleGoToAcheter}
              className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
            >
              {"Commencer mes nuits réparatrices →"}
            </button>
            <span className="whitespace-nowrap text-[11px] text-muted-foreground sm:text-xs">
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
                        className="mx-auto !h-full w-full max-h-[460px] object-contain transition-transform md:max-h-[500px]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 size-10 [&_svg]:size-5" />
                <CarouselNext className="right-2 size-10 [&_svg]:size-5" />
              </Carousel>
            </div>

            {/* Floating badge on product image */}
            <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
              <span className="text-sm">⭐</span>
              <span>{"+12 000 clients | Sans dépendance | Vegan & Halal"}</span>
            </div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Benefits */}

          {/* Pricing Options */}
          <div id="pricing-block" className="flex flex-col gap-3 scroll-mt-24">
            {pricingOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`relative flex flex-col rounded-xl border-2 p-4 text-left transition-all ${
                  opt.popular
                    ? "my-1 scale-[1.06] border-transparent bg-[linear-gradient(rgba(183,173,255,0.24),rgba(139,122,255,0.14)),linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#C3BAFF_0%,#8B7AFF_60%,#56E3C6_100%)] [background-clip:padding-box,padding-box,border-box] [background-origin:border-box] shadow-[0_14px_34px_-16px_rgba(139,122,255,0.9)]"
                    : selected === opt.id
                      ? "border-primary bg-card shadow-md"
                      : "border-border bg-card hover:border-primary/30"
                } ${
                  opt.popular && selected === opt.id ? "ring-2 ring-primary/50 shadow-[0_0_0_1px_rgba(195,186,255,0.55)]" : ""
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
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Package className="h-3 w-3" />
                          {opt.duration}
                        </span>
                        <span className="font-medium text-primary">{opt.pricePerDay}/jour</span>
                        <span className="flex items-center gap-1">
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
                  </div>
                </div>
                {/* Perks */}
                {opt.perks.length > 0 && (
                  <div
                    className={`mt-3 overflow-hidden rounded-xl border ${
                      opt.popular
                        ? "border-[#b8abff]/70 bg-[linear-gradient(90deg,#7e67f48f_0%,#ad9bff00_58%,#55307d_100%)] shadow-[0_18px_34px_-18px_rgba(120,98,255,0.75)]"
                        : "border-primary/30 bg-secondary/70 shadow-sm shadow-primary/10"
                    }`}
                  >
                    {opt.perks.map((perk) => {
                      const PerkIcon = getPerkIcon(perk)
                      return (
                        <div
                          key={perk}
                          className={`flex items-center gap-3 border-b px-3 py-2.5 text-white last:border-b-0 ${
                            opt.popular
                              ? "border-[#b8abff]/60 bg-[linear-gradient(169deg,#7e67f48f_35%,#ad9bff85_72%,#edeaeaf0_95%)]"
                              : "border-primary/35 bg-primary/30"
                          }`}
                        >
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm ${
                              opt.popular
                                ? "bg-white/15 text-white shadow-[#8f7bff]/45"
                                : "bg-primary/90 text-primary-foreground shadow-primary/30"
                            }`}
                          >
                            <PerkIcon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-xs font-semibold leading-tight text-white">{perk}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
                {opt.popular && (
                  <div className="mt-3">
                    <span className="inline-flex animate-pulse items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-500 ring-1 ring-emerald-500/30">
                      ⚡ Plus que 12 unités à ce tarif
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Add to cart */}
          <button
            onClick={handleBuyNow}
            className="w-full rounded-xl bg-emerald-500/15 py-4 text-base font-bold uppercase tracking-wider text-emerald-500 ring-1 ring-emerald-500/30 transition-all hover:bg-emerald-500/20 hover:shadow-lg"
          >
            Acheter maintenant
          </button>

          {/* Achat unique */}
          <button
            onClick={handleSinglePurchase}
            className="w-full text-center text-xs text-white"
          >
            Achat unique
          </button>
        </div>
      </div>
    </section>
  )
}
