import Image from "next/image"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image src="/images/youy-gummies-pillow.jpeg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative flex flex-col items-center px-8 py-16 text-center md:py-24">
        <h2 className="font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          {"C'est pourquoi les Sleep Gummies YOUY GUM ont été créées"}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          {"En combinant des ingrédients naturels cliniquement étudiés, tu peux restaurer ton cycle de sommeil à sa source : en calmant le système nerveux, en régulant la mélatonine et en préparant ton corps à un repos profond et réparateur."}
        </p>

        <a
          href="#acheter"
          className="mt-8 inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Essayer 30 jours sans risque
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2">
            <ShieldIcon />
            Garanti 60 jours
          </span>
          <span className="flex items-center gap-2">
            <TruckIcon />
            Livraison Gratuite France
          </span>
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}
