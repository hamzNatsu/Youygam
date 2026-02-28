import Image from "next/image"

export function ExpertSection() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-muted-foreground">15 fevrier 2026</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {"L'avis de Dr. Sophie Laurent, specialiste du sommeil"}
            </h2>
            <blockquote className="mt-6 border-l-4 border-accent pl-6 italic text-muted-foreground leading-relaxed">
              {'"Un sommeil de qualite commence par un bon equilibre hormonal et un systeme nerveux apaise. Les Sleep Gummies de YOUY GUM sont concus pour accompagner ces deux axes. Leur formule a base de melatonine micro-dosee, de L-theanine et de plantes apaisantes offre une approche douce mais efficace. De nombreux patients m\'ont rapporte un endormissement plus rapide, une meilleure qualite de sommeil et un reveil sans lourdeur. Pour quiconque souhaite optimiser son sommeil de facon naturelle, c\'est une approche intelligente et fondee sur la science."'}
            </blockquote>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Essayer les Sleep Gummies
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldIcon />
                Garanti 60 jours
              </span>
              <span className="flex items-center gap-1.5">
                <TruckIcon />
                Livraison Gratuite France
              </span>
            </div>
          </div>

          {/* Expert Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/sleep-expert.jpg"
                alt="Dr. Sophie Laurent, specialiste du sommeil"
                width={500}
                height={600}
                className="h-auto w-full max-w-md object-cover"
              />
            </div>
          </div>
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
