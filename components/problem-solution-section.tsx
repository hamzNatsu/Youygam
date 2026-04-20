import { Brain, Moon, Sparkles, Zap } from "lucide-react"

const symptoms = [
  "Réveils nocturnes à répétition",
  "Pensées constantes au moment de dormir",
  "Fatigue dès le réveil",
]

const simpleSolution = [
  "Des gummies faciles à prendre",
  "Un effet rapide au coucher",
  "Une approche naturelle, sans dépendance",
]

export function ProblemSolutionSection() {
  return (
    <section id="probleme" className="px-6 pt-0 pb-14 md:py-20 scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        <article id="vous-vous-reconnaissez" className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm scroll-mt-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <Moon className="h-3.5 w-3.5" />
            Vous vous reconnaissez ?
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">Des nuits qui épuisent</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {symptoms.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article id="pourquoi-ca-arrive" className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm scroll-mt-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            <Brain className="h-3.5 w-3.5" />
            Pourquoi ça arrive
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">Ton cerveau reste en mode alerte</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Le soir, quand ton corps devrait ralentir, ton mental peut rester actif: pensées, tensions,
            anticipation du lendemain. Ce "bruit" intérieur retarde l'endormissement et fragmente le sommeil.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Résultat: tu dors, mais tu ne récupères pas vraiment.
          </p>
        </article>

        <article id="solution-simple" className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm scroll-mt-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-500">
            <Zap className="h-3.5 w-3.5" />
            La solution simple
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">Un rituel court, un esprit plus calme</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {simpleSolution.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mx-auto mt-10 max-w-7xl text-center">
        <a
          href="#acheter"
          className="inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Essayer 30 jours sans risque
        </a>
      </div>
    </section>
  )
}
