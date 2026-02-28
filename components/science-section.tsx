import { CheckCircle2 } from "lucide-react"

const checkpoints = [
  "Melatonine micro-dosee pour un sommeil naturel",
  "Sans sucre, vegan & sans gluten",
  "Fabrique en France, norme ISO 22000",
]

export function ScienceSection() {
  return (
    <section className="bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
          {"Formule scientifique, dosages optimaux, soutenue par +200 etudes cliniques"}
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {checkpoints.map((cp) => (
            <div key={cp} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-primary">{cp}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {"Notre formule premium contient exactement ce dont votre corps a besoin pour :"}
        </p>
      </div>
    </section>
  )
}
