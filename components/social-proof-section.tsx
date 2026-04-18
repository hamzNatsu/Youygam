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
          {"Plus de 12 000 Français ont retrouvé un sommeil réparateur"}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {"Découvrez comment des milliers de personnes ont amélioré leur qualité de sommeil, réduit leur stress nocturne et retrouvé une énergie matinale, sans médicaments ni routines compliquées."}
        </p>

        <div className="mt-10">
          <a
            href="#acheter"
            className="inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Commencer mes nuits réparatrices
          </a>
        </div>
      </div>
    </section>
  )
}
