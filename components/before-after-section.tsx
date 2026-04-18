export function BeforeAfterSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Avant / Après : qualité de sommeil
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          Données issues de retours clients après 4 semaines d'utilisation quotidienne de YOUY GUM Sleep.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Temps d'endormissement moyen</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl bg-destructive/10 p-3">
                <p className="text-xs font-semibold text-destructive">Avant YOUY GUM</p>
                <p className="mt-1 text-lg font-bold text-destructive">45 min</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-3">
                <p className="text-xs font-semibold text-primary">Après 14 nuits</p>
                <p className="mt-1 text-lg font-bold text-primary">18 min</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Réveils nocturnes par nuit</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl bg-destructive/10 p-3">
                <p className="text-xs font-semibold text-destructive">Avant YOUY GUM</p>
                <p className="mt-1 text-lg font-bold text-destructive">3 réveils</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-3">
                <p className="text-xs font-semibold text-primary">Après 4 semaines</p>
                <p className="mt-1 text-lg font-bold text-primary">1 réveil</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Score moyen de repos au réveil</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl bg-destructive/10 p-3">
                <p className="text-xs font-semibold text-destructive">Avant YOUY GUM</p>
                <p className="mt-1 text-lg font-bold text-destructive">4 / 10</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-3">
                <p className="text-xs font-semibold text-primary">Après 4 semaines</p>
                <p className="mt-1 text-lg font-bold text-primary">8 / 10</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          *Résultats indicatifs, basés sur un panel pilote. Les effets peuvent varier selon les individus.
        </p>

        <div className="mt-10 text-center">
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
