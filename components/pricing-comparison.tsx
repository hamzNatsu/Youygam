export function PricingComparison() {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {"Insomnie"} <span className="text-muted-foreground">vs</span> {"Bonne nuit"}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            {"Deux colonnes, une seule journée : l'impact très concret de ton sommeil sur ta vie quotidienne."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-destructive/40 bg-destructive/5 p-6">
            <h3 className="font-serif text-xl font-semibold text-destructive">Les nuits d'insomnie</h3>
            <ul className="mt-4 space-y-3 text-sm text-destructive/90">
              <li>• Humeur fragile, irritabilité dès le matin</li>
              <li>• Concentration en chute libre</li>
              <li>• Immunité basse, récupération nulle</li>
              <li>• Appétit dérégulé, fringales sucrées</li>
              <li>• Teint terne, cernes, regard éteint</li>
              <li>• Cercle vicieux : plus fatigué = moins de sommeil</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6">
            <h3 className="font-serif text-xl font-semibold text-primary">Avec YOUY GUM</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              <li>• Réveil serein, disponible, stable émotionnellement</li>
              <li>• Clarté mentale, décisions fluides dès le matin</li>
              <li>• Corps régénéré, énergie stable toute la journée</li>
              <li>• Hormones équilibrées, appétit naturel retrouvé</li>
              <li>• Peau régénérée, vitalité visible, regard vif</li>
              <li>• Cercle vertueux : mieux dormi = encore mieux demain</li>
            </ul>
          </div>
        </div>

        {/* 07 — Comparatif concurrents */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              {"YOUY GUM vs Somnifères"}
            </h3>
            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              {"Comparatif indicatif basé sur la littérature disponible et les retours clients. Les effets peuvent varier selon les profils."}
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="pb-3 text-left font-semibold text-foreground">Critère</th>
                  <th className="pb-3 text-center font-semibold text-foreground">YOUY GUM</th>
                  <th className="pb-3 text-center font-semibold text-foreground">
                    {"Somnifères"}{" "}
                    <span className="text-destructive font-semibold">(créent une dépendance)</span>
                  </th>
                  <th className="pb-3 text-center font-semibold text-foreground">Autres gummies</th>
                </tr>
              </thead>
              <tbody>
                {/* Risque de dépendance — mis en avant visuellement */}
                <tr className="border-b border-border bg-destructive/5">
                  <td className="py-3 font-semibold text-foreground">Risque de dépendance</td>
                  <td className="py-3 text-center font-semibold text-emerald-500">Aucune*</td>
                  <td className="py-3 text-center font-semibold text-destructive">
                    Élevée — arrêt difficile
                  </td>
                  <td className="py-3 text-center text-amber-500">Variable selon les formules</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-medium text-foreground">Somnolence au réveil</td>
                  <td className="py-3 text-center text-emerald-500">Très rare</td>
                  <td className="py-3 text-center text-destructive">Fréquente</td>
                  <td className="py-3 text-center text-amber-500">Selon dosage et sucres</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Composition</td>
                  <td className="py-3 text-center">
                    Naturelle, mélatonine micro-dosée + plantes apaisantes
                  </td>
                  <td className="py-3 text-center">Molécules de synthèse</td>
                  <td className="py-3 text-center">Souvent sucrées, arômes & additifs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            {"*YOUY GUM Sleep reste un complément alimentaire : demande conseil à ton médecin en cas de traitement en cours ou de trouble du sommeil chronique."}
          </p>
        </div>
      </div>
    </section>
  )
}
