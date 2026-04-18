import { Truck, Leaf, ShieldCheck, Clock } from "lucide-react"

const trustItems = [
  { icon: Truck, label: "Livraison Gratuite en France" },
  { icon: Leaf, label: "100% Ingrédients Naturels" },
  { icon: ShieldCheck, label: "Formule Cliniquement Testée" },
  { icon: Clock, label: "Satisfait ou Remboursé 60 jours" },
]

export function TrustBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-4 md:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <item.icon className="h-7 w-7 text-accent" />
            <span className="text-xs font-medium leading-tight md:text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
