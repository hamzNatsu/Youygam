"use client"

import { useState } from "react"
import { Star, Moon, Brain, Heart, Sparkles, Users, CheckCircle2 } from "lucide-react"

const benefits = [
  { icon: Moon, text: "Favorise un endormissement rapide et naturel." },
  { icon: Brain, text: "Ameliore la qualite du sommeil profond." },
  { icon: Heart, text: "Reduit le stress et l'anxiete nocturne." },
  { icon: Sparkles, text: "Reveil frais et repose, sans somnolence." },
  { icon: Users, text: "Rejoint par +12 000 dormeurs satisfaits !" },
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
    perks: ["Livraison GRATUITE"],
    popular: false,
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
    perks: ["Livraison GRATUITE", 'OFFERT : Guide "Mieux Dormir"'],
    popular: true,
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
    perks: ["Livraison GRATUITE", 'OFFERT : Guide "Mieux Dormir"', "OFFERT : Masque de Sommeil Premium"],
    popular: false,
  },
  {
    id: "four",
    label: "Pack 4 – Pack Famille",
    subtitle: "5 sachets - Stock longue durée",
    price: "149.90",
    originalPrice: "249.50",
    savings: "99.60",
    duration: "150 jours",
    pricePerDay: "0,99 €",
    delivery: "Express",
    perks: ["Livraison GRATUITE", 'OFFERT : Guide "Mieux Dormir"', "OFFERT : Masque de Sommeil Premium", "OFFERT : Brume d'Oreiller Relaxante"],
    popular: false,
  },
]

export function HeroSection() {
  const [selected, setSelected] = useState("two")

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left - Product Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 z-10 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
              <ShieldBadge />
              <span className="text-xs font-semibold text-foreground">Garanti 60 jours</span>
            </div>
            <div className="absolute -bottom-2 -right-2 z-10 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold text-foreground">{"12 500+ Clients Satisfaits"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/produit_front.jpeg"
                  alt="YOUY GUM Sleep Gummies - Face avant"
                  width={600}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  className="h-auto w-full max-h-[630px] object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/produit_back.jpeg"
                  alt="YOUY GUM Sleep Gummies - Face arrière"
                  width={600}
                  height={600}
                  loading="eager"
                  className="h-auto w-full max-h-[630px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {"4.9/5 Excellent | 2 381 avis verifies"}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Sleep Gummies
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              {"Melatonine + L-Theanine + Plantes Apaisantes"}
            </p>
          </div>

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
                    <span className="text-lg font-bold text-foreground">{opt.price}{""}{"EUR"}</span>
                    <p className="text-xs text-muted-foreground line-through">{opt.originalPrice}{"EUR"}</p>
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

          {/* Subscription option */}
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-4">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded accent-primary" />
            <div>
              <span className="text-sm font-semibold text-foreground">
                {"Economisez 20% avec l'abonnement !"}
              </span>
              <p className="text-xs text-muted-foreground">Sans engagement, annulez a tout moment</p>
            </div>
          </label>

          {/* Add to cart */}
          <button className="w-full rounded-xl bg-primary py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg">
            Ajouter au Panier
          </button>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldBadge />
              Garanti 60 jours
            </span>
            <span className="flex items-center gap-1.5">
              <Truck />
              Livraison Gratuite France
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShieldBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-muted-foreground" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function Truck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-muted-foreground" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}
