"use client"

import { useEffect, useState } from "react"

import { useIsMobile } from "@/hooks/use-mobile"

const PRICING_BLOCK_ID = "pricing-block"

export function MobileStickyCta() {
  const isMobile = useIsMobile()
  const [isPricingVisible, setIsPricingVisible] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setIsPricingVisible(false)
      return
    }

    const pricingBlock = document.getElementById(PRICING_BLOCK_ID)

    if (!pricingBlock) {
      setIsPricingVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPricingVisible(entry.isIntersecting)
      },
      {
        threshold: 0.35,
      },
    )

    observer.observe(pricingBlock)

    return () => {
      observer.disconnect()
    }
  }, [isMobile])

  if (!isMobile || isPricingVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 bg-[linear-gradient(90deg,#0D0D1A_0%,#1A0D33_100%)] px-4 py-2.5 shadow-[0_-4px_20px_rgba(108,63,191,0.4)] md:hidden" style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}>
      <div className="mx-auto flex h-11 max-w-7xl items-center gap-3 text-white">
        <div className="min-w-0 flex-1 leading-none">
          <p className="truncate text-[12px] font-semibold">⭐ Essayer 30 jours — 44,90€</p>
          <p className="mt-1 truncate text-[10px] text-white/75">Remboursé si non convaincu</p>
        </div>

        <a
          href='https://f8cebf-de.myshopify.com/cart/52846096023888:1?selling_plan=689962549584'
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-[#6C3FBF] px-4 text-[13px] font-bold text-white shadow-lg transition-transform hover:scale-[1.01]"
        >
          Essayer maintenant - 44,90€
        </a>
      </div>
    </div>
  )
}
