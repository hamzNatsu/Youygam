"use client"

export function ScrollingBanner() {
  const items = [
    "Formule naturelle",
    "Sans dépendance",
    "Endormissement en 20 min",
    "Satisfait ou remboursé 60 jours",
  ]

  return (
    <div className="relative z-[99999] w-full overflow-hidden bg-[#15162a] py-4 text-[#f8f2e6] font-sans">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mx-8 inline-block text-sm md:text-base font-medium tracking-wide">
            {items.join("  ·  ")}
          </span>
        ))}
      </div>
    </div>
  )
}
