import { Star, CheckCircle2 } from "lucide-react"

const reviews = [
  {
    name: "Marie D.",
    location: "Paris",
    rating: 5,
    title: "Enfin un sommeil profond !",
    text: "Depuis que j'ai commence les gummies YOUY GUM, je m'endors en moins de 20 minutes au lieu d'une heure. Le plus incroyable, c'est que je me reveille vraiment reposee. Ca fait des annees que je n'avais pas dormi aussi bien. Merci !",
  },
  {
    name: "Thomas B.",
    location: "Lyon",
    rating: 5,
    title: "Fini les insomnies",
    text: "J'etais sceptique au debut, mais des la premiere semaine j'ai senti une difference. Mon cerveau s'arrete enfin de tourner le soir. Le gout est agreable et l'effet est rapide. Je recommande vivement a tous ceux qui ont du mal a dormir.",
  },
  {
    name: "Claire M.",
    location: "Bordeaux",
    rating: 5,
    title: "Resultat visible en 3 jours",
    text: "Apres seulement 3 jours d'utilisation, j'ai constate un changement notable dans la qualite de mon sommeil. Je ne me reveille plus a 3h du matin. Le matin, je suis fraiche et energisee. C'est devenu un rituel indispensable.",
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"Ce que disent nos clients"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-muted-foreground">
          {"Des milliers de clients ont transforme leurs nuits avec YOUY GUM."}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-foreground">{review.name}</span>
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{review.location} | Client verifie</span>
                </div>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{review.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
