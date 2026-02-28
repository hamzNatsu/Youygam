"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const ingredients = [
  {
    name: "Melatonine (1mg micro-dosee)",
    subtitle: "Regulateur naturel du cycle circadien",
    description:
      "La melatonine est l'hormone naturellement produite par votre cerveau pour signaler qu'il est temps de dormir. Notre micro-dosage de 1mg respecte les rythmes biologiques, favorisant un endormissement doux sans dependance ni somnolence matinale.",
  },
  {
    name: "L-Theanine (200mg)",
    subtitle: "Acide amine de la detente mentale",
    description:
      "Extraite du the vert, la L-theanine stimule la production d'ondes alpha dans le cerveau, favorisant un etat de relaxation profonde sans sedation. Elle reduit le cortisol et prepare naturellement le corps au sommeil.",
  },
  {
    name: "Extrait de Passiflore",
    subtitle: "Plante apaisante traditionnelle",
    description:
      "Utilisee depuis des siecles en phytotherapie, la passiflore augmente les niveaux de GABA dans le cerveau, reduisant l'anxiete et les pensees intrusives qui empechent l'endormissement.",
  },
  {
    name: "Vitamine B6 (1.4mg)",
    subtitle: "Cofacteur essentiel de la melatonine",
    description:
      "La vitamine B6 est indispensable a la conversion du tryptophane en serotonine, puis en melatonine. Elle optimise la production naturelle de votre hormone du sommeil pour des nuits plus regulieres.",
  },
  {
    name: "Extrait de Camomille",
    subtitle: "Relaxant naturel ancestral",
    description:
      "L'extrait de camomille matricaire contient de l'apigenine, un flavonoide qui se lie aux recepteurs GABA du cerveau, induisant un effet calmant naturel et preparant le corps au repos.",
  },
]

export function IngredientsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="ingredients" className="bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"Dans chaque gummy :"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-muted-foreground">
          {"5 ingredients actifs, soigneusement doses pour un sommeil optimal."}
        </p>

        <div className="mt-10 flex flex-col gap-3">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className="overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{ing.name}</span>
                    <p className="text-xs text-muted-foreground">{ing.subtitle}</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-6 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{ing.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
