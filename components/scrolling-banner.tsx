"use client"

export function ScrollingBanner() {
  const items = [
    "⭐ 12 000 Français retrouvent enfin le sommeil",
    "🌿 Formule 100% naturelle · zéro dépendance",
    "⏱ Endormissement moyen : 18 min (avant : 45 min)",
    "🔒 Satisfait ou remboursé 60 jours, sans condition",
    "🇫🇷 Fabriqué en France · Vegan · Sans sucre ajouté",
    "📦 Livraison offerte dès 2 packs",
    "✅ Recommandé par le Dr Sophie Laurent, médecin du sommeil",
  ]

  return (
    <div className="relative z-[99999] w-full overflow-hidden bg-[#0d1020] py-4 text-[#f8f2e6] font-sans">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="mx-8 inline-block text-sm font-medium tracking-wide md:text-base">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
