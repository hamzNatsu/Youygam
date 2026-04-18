"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "Que sont les Sleep Gummies YOUY GUM et comment fonctionnent-elles ?",
    answer:
      "Les Sleep Gummies YOUY GUM sont des compléments alimentaires sous forme de gommes à mâcher, formulées avec de la mélatonine micro-dosée, de la L-théanine, de la passiflore et de la camomille. Elles agissent en synergie pour calmer le système nerveux, réguler le cycle circadien et favoriser un endormissement naturel et rapide.",
  },
  {
    question: "À qui s'adressent ces gummies ?",
    answer:
      "Elles s'adressent à toute personne adulte souhaitant améliorer la qualité de son sommeil : difficultés d'endormissement, réveils nocturnes, stress en fin de journée, ou simplement envie d'un sommeil plus profond et réparateur. Elles conviennent aux véganes et sont sans gluten.",
  },
  {
    question: "Les gummies peuvent-elles améliorer la qualité du sommeil et réduire le stress ?",
    answer:
      "Oui. Notre formule associe des ingrédients cliniquement étudiés pour leurs effets sur la relaxation et le sommeil. La L-théanine réduit le stress et l'anxiété, la mélatonine régule le cycle veille-sommeil, et les extraits de plantes favorisent la détente musculaire et mentale.",
  },
  {
    question: "Quels sont les effets secondaires possibles ?",
    answer:
      "Les ingrédients de YOUY GUM sont naturels et généralement bien tolérés. Certaines personnes peuvent ressentir une légère somnolence, ce qui est l'effet recherché. Nous recommandons de ne pas dépasser la dose conseillée et de consulter ton médecin si tu es enceinte, allaitante ou sous traitement.",
  },
  {
    question: "Puis-je les prendre avec d'autres médicaments ou compléments ?",
    answer:
      "Bien que nos ingrédients soient naturels, nous recommandons de consulter ton médecin ou pharmacien avant de combiner les gummies avec d'autres médicaments, en particulier les sédatifs, anxiolytiques ou anticoagulants.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "La plupart de nos clients constatent une amélioration dès la première nuit. Pour des résultats optimaux et durables, nous recommandons une cure de 4 semaines minimum. 94% de nos utilisateurs rapportent un endormissement plus rapide après 2 semaines d'utilisation.",
  },
  {
    question: "Les gummies sont-elles véganes et sans allergènes ?",
    answer:
      "Oui, nos gummies sont 100% véganes, sans gluten, sans lactose et sans allergènes majeurs. Elles sont fabriquées en France dans un laboratoire certifié ISO 22000.",
  },
  {
    question: "Les ingrédients sont-ils naturels et sûrs ?",
    answer:
      "Absolument. Tous nos ingrédients sont d'origine naturelle et ont été sélectionnés pour leur efficacité prouvée cliniquement et leur excellent profil de sécurité. Chaque lot est testé par un laboratoire indépendant.",
  },
  {
    question: "Ai-je besoin d'une ordonnance ?",
    answer:
      "Non. Les Sleep Gummies YOUY GUM sont un complément alimentaire et ne nécessitent pas de prescription médicale. Elles sont en vente libre.",
  },
  {
    question: "Comment conserver le produit ?",
    answer:
      "Conservez les gummies dans un endroit frais et sec, à l'abri de la lumière directe du soleil. Refermez bien le pot après chaque utilisation. Ne pas réfrigérer.",
  },
]

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 5])

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <section id="faq" className="bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Questions fréquentes
        </h2>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-border bg-background"
            >
              <button
                onClick={() => toggleItem(i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="pr-4 text-sm font-medium text-foreground md:text-base">{faq.question}</span>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ChevronRight
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openIndexes.includes(i) ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </button>
              {openIndexes.includes(i) && (
                <div className="border-t border-border px-6 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}
