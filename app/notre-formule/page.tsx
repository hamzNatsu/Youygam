export default function NotreFormulePage() {
  return (
    <main className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Notre formule scientifique
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Chaque gummy YOUY GUM Sleep a été conçue pour apporter un effet ciblé sur la qualité de ton sommeil,
          en s'appuyant sur des ingrédients et des dosages documentés par la littérature scientifique.
        </p>

        <section className="mt-10 space-y-8">
          <article>
            <h2 className="text-xl font-semibold text-foreground">Mélatonine (1 mg micro-dosée)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Micro-dosée à 1 mg pour respecter la physiologie naturelle et limiter tout risque de somnolence
              au réveil. Aide à réduire le temps d'endormissement lorsque l'hygiène de sommeil est respectée.
            </p>
            <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Exemples de sources
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
              <li>Études cliniques sur la mélatonine et la latence d'endormissement (Journal of Sleep Research).</li>
              <li>Recommandations des autorités européennes sur les doses efficaces et bien tolérées.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-foreground">L-Théanine (200 mg)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Acide aminé extrait du thé vert, contribue à un état de détente sans sédation en modulant les ondes
              cérébrales alpha et en réduisant le stress perçu.</p>
            <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Exemples de sources
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
              <li>Travaux cliniques sur la L-théanine et la relaxation mentale.</li>
              <li>Publications sur l'effet combiné L-théanine + caféine sur la qualité de l'état d'éveil.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-foreground">Extraits de plantes apaisantes</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Passiflore et camomille sont traditionnellement utilisées pour favoriser la détente et réduire les
              pensées envahissantes du soir, via une modulation des récepteurs GABA.</p>
            <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Exemples de sources
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
              <li>Études d'observation en phytothérapie sur la passiflore et la qualité du sommeil.</li>
              <li>Recherches sur l'apigénine de camomille et ses effets calmants.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-foreground">Vitamine B6</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cofacteur clé de la synthèse de la sérotonine puis de la mélatonine, la vitamine B6 soutient la
              production naturelle de tes neurotransmetteurs du sommeil.</p>
            <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Exemples de sources
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
              <li>Données de biochimie sur la voie tryptophane &rarr; sérotonine &rarr; mélatonine.</li>
              <li>Publications nutritionnelles sur le rôle de la vitamine B6 dans la régulation de l'humeur.</li>
            </ul>
          </article>
        </section>

        <section className="mt-12 rounded-2xl bg-card p-6 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground">Transparence &amp; sécurité</h2>
          <p className="mt-2">
            YOUY GUM Sleep est fabriqué en France dans une usine certifiée ISO pour les compléments alimentaires.
            Les lots sont contrôlés systématiquement (métaux lourds, microbiologie) et la liste d'ingrédients est
            courte, sans sirop de glucose inutile.
          </p>
          <p className="mt-3 text-xs">
            Ces informations sont données à titre indicatif et ne remplacent pas l'avis d'un professionnel de santé.
          </p>
        </section>
      </div>
    </main>
  )
}
