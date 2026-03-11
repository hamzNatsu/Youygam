export function ScrollingBanner() {
  const message = "PRÉCOMMANDE - Offre spéciale de lancement - Profitez-en avant la disponibilité complète ! 🎉"

  return (
    <div className="relative w-full overflow-hidden bg-accent py-2 text-accent-foreground">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 inline-block text-sm font-medium">
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
