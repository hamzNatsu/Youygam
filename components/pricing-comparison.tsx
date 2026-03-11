"use client"

const pricingOptions = [
  {
    id: "one",
    subtitle: "1 sachet",
    duration: "30 jours",
    pricePerDay: "1,49 €",
    delivery: "Standard",
    popular: false,
  },
  {
    id: "two",
    subtitle: "2 sachets",
    duration: "60 jours",
    pricePerDay: "1,24 €",
    delivery: "Standard",
    popular: true,
  },
  {
    id: "three",
    subtitle: "3 sachets",
    duration: "90 jours",
    pricePerDay: "1,11 €",
    delivery: "Express",
    popular: false,
  },
  {
    id: "four",
    subtitle: "5 sachets - Stock longue durée",
    duration: "150 jours",
    pricePerDay: "0,99 €",
    delivery: "Express",
    popular: false,
  },
]

export function PricingComparison() {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-lg md:p-8">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Comparatif des Packs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="pb-3 text-left font-semibold text-foreground">Pack</th>
                  <th className="pb-3 text-center font-semibold text-foreground">Durée</th>
                  <th className="pb-3 text-center font-semibold text-foreground">Prix/jour</th>
                  <th className="pb-3 text-center font-semibold text-foreground">Livraison</th>
                </tr>
              </thead>
              <tbody>
                {pricingOptions.map((opt) => (
                  <tr 
                    key={opt.id} 
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${
                      opt.popular ? 'bg-accent/10' : ''
                    }`}
                  >
                    <td className="py-4 text-left">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground">{opt.subtitle}</span>
                        {opt.popular && (
                          <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                            ⭐ Best Seller
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 text-center text-foreground">{opt.duration}</td>
                    <td className="py-4 text-center">
                      <span className="text-lg font-bold text-primary">{opt.pricePerDay}</span>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        opt.delivery === 'Express' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {opt.delivery === 'Express' && (
                          <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {opt.delivery}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg bg-accent/5 p-4 text-center">
            <p className="text-sm font-medium text-foreground">
              💰 Plus vous achetez, plus vous économisez !
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Profitez de nos packs avantageux pour faire des économies sur le long terme
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
