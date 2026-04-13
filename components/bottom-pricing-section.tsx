"use client"

import { useState } from "react"
import { CheckCircle2, Package, Truck, BookOpen, Gift } from "lucide-react"

const pricingOptions = [
  {
    id: "one",
    label: "L'Essai 30 Jours",
    subtitle: "Pack 1",
    price: "44.90",
    originalPrice: "49.90",
    duration: "1 sachet",
    pricePerDay: "1,49 €",
    delivery: "",
    perks: ["Livraison Standard Gratuite"],
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
    duration: "2 sachets",
    pricePerDay: "1,24 €",
    delivery: "",
    perks: ['OFFERT : Guide "Mieux Dormir"', "Livraison Standard Gratuite"],
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

function getPerkIcon(perk: string) {
  const lower = perk.toLowerCase()
  if (lower.includes("livraison")) return Truck
  if (lower.includes("guide") || lower.includes("ebook")) return BookOpen
  if (lower.includes("offert") || lower.includes("gift")) return Gift
  return CheckCircle2
}

export function BottomPricingSection() {
  const [selected, setSelected] = useState("two")

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
                  ? "my-1 scale-[1.06] border-transparent bg-[linear-gradient(rgba(183,173,255,0.24),rgba(139,122,255,0.14)),linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#C3BAFF_0%,#8B7AFF_60%,#56E3C6_100%)] [background-clip:padding-box,padding-box,border-box] [background-origin:border-box] shadow-[0_14px_34px_-16px_rgba(139,122,255,0.9)]"
                  : selected === opt.id
                    ? "border-primary bg-card shadow-md"
                    : "border-border bg-card hover:border-primary/30"
              } ${
                opt.popular && selected === opt.id ? "ring-2 ring-primary/50 shadow-[0_0_0_1px_rgba(195,186,255,0.55)]" : ""
              }`}
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
                    <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        {opt.duration}
                      </span>
                      <span className="font-medium text-primary">{opt.pricePerDay}/jour</span>
                      <span className="flex items-center gap-1">{opt.delivery}</span>
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
                </div>
              </div>

              {opt.perks.length > 0 && (
                <div
                  className={`mt-3 overflow-hidden rounded-xl border ${
                    opt.popular
                      ? "border-[#b8abff]/70 bg-[radial-gradient(circle_at_20%_0%,rgba(136,110,255,0.42),rgba(132,118,220,0.84)_42%,rgba(255,255,255,0.96)_100%)] shadow-[0_18px_34px_-18px_rgba(120,98,255,0.75)]"
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
                            ? "border-[#b8abff]/60 bg-[linear-gradient(90deg,rgba(126,103,244,0.56)_0%,rgba(173,155,255,0.52)_58%,rgba(255,255,255,0.94)_100%)]"
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

        <button
          onClick={handleBuyNow}
          className="mt-4 w-full rounded-xl bg-emerald-500/15 py-4 text-base font-bold uppercase tracking-wider text-emerald-500 ring-1 ring-emerald-500/30 transition-all hover:bg-emerald-500/20 hover:shadow-lg"
        >
          Acheter maintenant
        </button>

        <button
          onClick={handleSinglePurchase}
          className="mt-2 w-full text-center text-xs text-white"
        >
          Achat unique
        </button>
      </div>
    </section>
  )
}
