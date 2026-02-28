import Image from "next/image"

const problems = [
  {
    image: "/images/screen-stress.jpg",
    title: "Surexposition aux ecrans",
    description:
      "La lumiere bleue des ecrans supprime la production de melatonine, perturbant le signal naturel d'endormissement de votre cerveau. Le scrolling nocturne stimule le cortisol et maintient le cerveau en etat d'alerte.",
  },
  {
    image: "/images/caffeine-stress.jpg",
    title: "Stress & stimulants excessifs",
    description:
      "Le cafe, les boissons energisantes et le stress chronique maintiennent votre systeme nerveux en mode hypervigilance. Le cortisol eleve empeche la detente necessaire a un sommeil profond et reparateur.",
  },
  {
    image: "/images/busy-lifestyle.jpg",
    title: "Rythme de vie effrenee",
    description:
      "Les horaires irreguliers, le travail tardif et le manque de routine de sommeil desynchronisent votre horloge biologique. Votre corps ne sait plus quand il est temps de dormir.",
  },
  {
    image: "/images/aging-sleep.jpg",
    title: "Declin naturel de la melatonine",
    description:
      "A partir de 30 ans, la production naturelle de melatonine diminue de 10% par decennie. A 50 ans, votre corps produit moitie moins de melatonine qu'a 20 ans, rendant l'endormissement plus difficile.",
  },
]

export function ModernLifeSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {"Pourquoi le sommeil est devenu si difficile"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Nos modes de vie modernes ont profondement perturbe nos mecanismes naturels de sommeil. L'exposition permanente aux ecrans, le stress chronique et les stimulants alterent notre capacite a nous endormir. Notre corps n'a pas ete concu pour ce niveau de sollicitation."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-0 sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
