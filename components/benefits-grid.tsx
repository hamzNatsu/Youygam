import Image from "next/image"
import { Moon, Brain, Heart, Sun } from "lucide-react"

const benefitCards = [
  {
    icon: Moon,
    title: "Endormissement Rapide",
    description:
      "La melatonine naturelle et la L-theanine agissent en synergie pour calmer le systeme nerveux, vous aidant a vous endormir plus vite, sans agitation.",
    position: "top-left" as const,
  },
  {
    icon: Brain,
    title: "Sommeil Profond & Reparateur",
    description:
      "Notre formule favorise les cycles de sommeil profond, essentiels a la recuperation musculaire, la consolidation de la memoire et la regeneration cellulaire.",
    position: "top-right" as const,
  },
  {
    icon: Heart,
    title: "Reduction du Stress Nocturne",
    description:
      "Le L-tryptophane et les extraits de passiflore reduisent naturellement le cortisol, apaisant les pensees agitees pour un endormissement serein.",
    position: "bottom-left" as const,
  },
  {
    icon: Sun,
    title: "Reveil Frais & Energise",
    description:
      "Contrairement aux somniferes, nos gummies ne provoquent aucune somnolence au reveil. Vous vous levez repose, alerte et pret pour la journee.",
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
                src="/images/youy-gummies-pillow.jpeg"
                alt="YOUY GUM Sleep Gummies sur un oreiller"
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
