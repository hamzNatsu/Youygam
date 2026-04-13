import Image from "next/image"
import { Moon, Brain, Heart, Sun } from "lucide-react"

const benefitCards = [
  {
    icon: Moon,
    title: "Endormissement Rapide",
    description:
      "La mélatonine naturelle et la L-théanine agissent en synergie pour calmer le système nerveux, t'aidant à t'endormir plus vite, sans agitation.",
    position: "top-left" as const,
  },
  {
    icon: Brain,
    title: "Sommeil Profond & Réparateur",
    description:
      "Notre formule favorise les cycles de sommeil profond, essentiels à la récupération musculaire, la consolidation de la mémoire et la régénération cellulaire.",
    position: "top-right" as const,
  },
  {
    icon: Heart,
    title: "Réduction du Stress Nocturne",
    description:
      "Le L-tryptophane et les extraits de passiflore réduisent naturellement le cortisol, apaisant les pensées agitées pour un endormissement serein.",
    position: "bottom-left" as const,
  },
  {
    icon: Sun,
    title: "Réveil Frais & Énergisé",
    description:
      "Contrairement aux somnifères, nos gummies ne provoquent aucune somnolence au réveil. Tu te lèves reposé, alerte et prêt pour la journée.",
    position: "bottom-right" as const,
  },
]

export function BenefitsGrid() {
  return (
    <section id="benefits" className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {benefitCards
              .filter((b) => b.position.includes("left"))
              .map((b) => (
                <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
              ))}
          </div>

          {/* Center - Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/image_2.jpeg"
                alt="YOUY GUM - Image 2"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {benefitCards
              .filter((b) => b.position.includes("right"))
              .map((b) => (
                <BenefitCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
              ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Moon
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
