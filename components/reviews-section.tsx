import Image from "next/image"
import { Star, CheckCircle2 } from "lucide-react"

const reviews = [
  {
    name: "Marie D.",
    location: "Paris",
    image: "/images/reviews/marie.jpg",
    rating: 5,
    title: "Enfin un sommeil profond !",
    text: "Depuis que j'ai commencé les gummies YOUY GUM, je m'endors en moins de 20 minutes au lieu d'une heure. Le plus incroyable, c'est que je me réveille vraiment reposée. Ça fait des années que je n'avais pas dormi aussi bien. Merci !",
  },
  {
    name: "Thomas B.",
    location: "Lyon",
    image: "/images/reviews/thomas.jpg",
    rating: 5,
    title: "Fini les insomnies",
    text: "J'étais sceptique au début, mais dès la première semaine j'ai senti une différence. Mon cerveau s'arrête enfin de tourner le soir. Le goût est agréable et l'effet est rapide. Je recommande vivement à tous ceux qui ont du mal à dormir.",
  },
  {
    name: "Pierre M.",
    location: "Bordeaux",
    image: "/images/reviews/claire.jpg",
    rating: 5,
    title: "Résultat visible en 3 jours",
    text: "Après seulement 3 jours d'utilisation, j'ai constaté un changement notable dans la qualité de mon sommeil. Je ne me réveille plus à 3h du matin. Le matin, je suis fraîche et énergisée. C'est devenu un rituel indispensable.",
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
          {"Des milliers de clients ont transformé leurs nuits avec YOUY GUM."}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-muted">
                    <Image
                      src={review.image}
                      alt={`Photo de ${review.name}`}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-foreground">{review.name}</span>
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{review.location} | Client vérifié</span>
                  </div>
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
