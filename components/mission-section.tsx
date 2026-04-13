import Image from "next/image"

const stats = [
  { value: "94%", label: "des utilisateurs rapportent un endormissement plus rapide en 2 semaines" },
  { value: "89%", label: "des utilisateurs constatent un réveil plus frais et plus énergisé" },
]

export function MissionSection() {
  return (
    <section id="reviews" className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Lifestyle Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/youy-lifestyle.jpeg"
              alt="Clients YOUY GUM - Femme detendue, gummies Stress Relief, et couple dormant paisiblement"
              width={700}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text + Stats */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
              {"Notre mission : aider 1 000 000 de Français à retrouver un sommeil naturel et réparateur"}
            </h2>

            <p className="mt-4 text-base text-muted-foreground">{"Voici où nous en sommes aujourd'hui :"}</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              {stats.map((stat) => (
                <div key={stat.value} className="flex-1 rounded-2xl bg-primary p-6 text-primary-foreground">
                  <span className="font-serif text-4xl font-bold">{stat.value}</span>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground italic">
              {"*Basé sur un panel indépendant de 4 semaines auprès de 500 utilisateurs."}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#acheter"
            className="inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Essayer 30 jours sans risque
          </a>
        </div>
      </div>
    </section>
  )
}
