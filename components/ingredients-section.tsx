"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const ingredients = [
  {
    name: "Mélatonine (1mg micro-dosée)",
    subtitle: "Régulateur naturel du cycle circadien",
    description:
      "La mélatonine est l'hormone naturellement produite par ton cerveau pour signaler qu'il est temps de dormir. Notre micro-dosage de 1mg respecte les rythmes biologiques, favorisant un endormissement doux sans dépendance ni somnolence matinale.",
  },
  {
    name: "L-Théanine (200mg)",
    subtitle: "Acide aminé de la détente mentale",
    description:
      "Extraite du thé vert, la L-théanine stimule la production d'ondes alpha dans le cerveau, favorisant un état de relaxation profonde sans sédation. Elle réduit le cortisol et prépare naturellement le corps au sommeil.",
  },
  {
    name: "Extrait de Passiflore",
    subtitle: "Plante apaisante traditionnelle",
    description:
      "Utilisée depuis des siècles en phytothérapie, la passiflore augmente les niveaux de GABA dans le cerveau, réduisant l'anxiété et les pensées intrusives qui empêchent l'endormissement.",
  },
  {
    name: "Vitamine B6 (1.4mg)",
    subtitle: "Cofacteur essentiel de la melatonine",
    description:
      "La vitamine B6 est indispensable à la conversion du tryptophane en sérotonine, puis en mélatonine. Elle optimise la production naturelle de ton hormone du sommeil pour des nuits plus régulières.",
  },
  {
    name: "Extrait de Camomille",
    subtitle: "Relaxant naturel ancestral",
    description:
      "L'extrait de camomille matricaire contient de l'apigénine, un flavonoïde qui se lie aux récepteurs GABA du cerveau, induisant un effet calmant naturel et préparant le corps au repos.",
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
          {"5 ingrédients actifs, soigneusement dosés pour un sommeil optimal."}
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
