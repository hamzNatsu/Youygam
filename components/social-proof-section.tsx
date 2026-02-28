import { Star } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Trustpilot-style rating */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Excellent 4.9 sur 5</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
        </div>

        <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          {"Plus de 12 000 Francais ont retrouve un sommeil reparateur"}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {"Decouvrez comment des milliers de personnes ont ameliore leur qualite de sommeil, reduit leur stress nocturne et retrouve une energie matinale, sans medicaments ni routines compliquees."}
        </p>
      </div>
    </section>
  )
}
