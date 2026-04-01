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
    savings: "24.90",
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
    savings: "49.80",
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

const startingPrice = pricingOptions.reduce(
  (min, opt) => Math.min(min, Number.parseFloat(opt.price)),
  Number.POSITIVE_INFINITY,
)

const startingPriceLabel = `${startingPrice.toFixed(2).replace(".", ",")} €`

export function HeroSection() {
  const [selected, setSelected] = useState("two")
  const [singlePurchase, setSinglePurchase] = useState(false)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const [imageInView, setImageInView] = useState(false)

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

  const handleBuyNow = () => {
    const option = pricingOptions.find((opt) => opt.id === selected)
    if (!option) return

    const url = singlePurchase ? option.singleUrl : option.normalUrl
    if (!url) return

    window.location.href = url
  }

  return (
    <section id="acheter" className="px-6 py-8 lg:py-12">
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
              onClick={handleBuyNow}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {"Découvrir les Sleep Gummies"}
            </button>
            <span className="text-xs text-muted-foreground">
              {"À partir de "}
              <span className="font-semibold text-foreground">{startingPriceLabel}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom - Product image & details */}
      <div className="mx-auto mt-10 grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left - Product Image (sachet mis en avant, plus grand, sticky + animation à l'apparition) */}
        <div className="relative flex items-start justify-center lg:sticky lg:top-24">
          <div
            ref={imageRef}
            className={`relative w-full max-w-[520px] transition-all duration-700 ease-out ${
              imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-secondary/80 p-4 shadow-2xl shadow-primary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/produit_front.jpeg"
                alt="YOUY GUM Sleep Gummies - Face avant"
                width={720}
                height={720}
                loading="eager"
                fetchPriority="high"
                className="mx-auto h-auto w-full max-h-[460px] object-contain"
              />
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
          <div className="flex flex-col gap-3">
            {pricingOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`relative flex flex-col rounded-xl border-2 p-4 text-left transition-all ${
                  selected === opt.id
                    ? "border-primary bg-card shadow-md"
                    : "border-border bg-card hover:border-primary/30"
                } ${
                  opt.popular ? "scale-105 my-1" : ""
                }`}
              >
                {/* Sachet Count Badge */}
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  {opt.subtitle.match(/^\d+\s+sachet[s]?/)?.[0] || opt.subtitle}
                </span>
                {opt.popular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
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
                      {selected === opt.id && (
                        <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{opt.label}</span>
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
                      {singlePurchase ? opt.originalPrice : opt.price}
                      {""}
                      {"EUR"}
                    </span>
                    <p className={`text-xs text-muted-foreground ${singlePurchase ? "" : "line-through"}`}>
                      {singlePurchase ? opt.price : opt.originalPrice}
                      {"EUR"}
                    </p>
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
              </button>
            ))}
          </div>

          {/* Urgence douce sous le bloc pricing */}
          <p className="mt-2 text-xs text-muted-foreground">
            {"Offre de lancement — tarif fondateur disponible pour une durée limitée."}
          </p>

          {/* Add to cart */}
          <button
            onClick={handleBuyNow}
            className="w-full rounded-xl bg-primary py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Acheter maintenant
          </button>

          {/* Single Purchase Checkbox - discrete legal-style note */}
          <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
            <input
              type="checkbox"
              id="single-purchase"
              checked={singlePurchase}
              onChange={(e) => setSinglePurchase(e.target.checked)}
              className="h-3.5 w-3.5 cursor-pointer accent-primary"
            />
            <label htmlFor="single-purchase" className="cursor-pointer">
              Achat unique
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
