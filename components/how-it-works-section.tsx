"use client"

import { Clock, Sparkles, Moon } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Clock,
      title: "30 minutes avant le coucher",
      text: "Tu prends 2 gummies environ 30 minutes avant de dormir.",
    },
    {
      icon: Sparkles,
      title: "La formule fait son effet",
      text: "La formule calme ton système nerveux naturellement, sans dépendance.",
    },
    {
      icon: Moon,
      title: "Nuit profonde, réveil léger",
      text: "Tu t'endors plus facilement et tu te réveilles reposé.",
    },
  ]

  return (
    <section id="comment-ca-marche" className="bg-background py-16 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {"Comment ça marche ?"}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            {"3 étapes simples pour reprogrammer ton sommeil, sans changer toute ta vie du jour au lendemain."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-start gap-3 rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold text-muted-foreground">{`Étape ${index + 1}`}</div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
