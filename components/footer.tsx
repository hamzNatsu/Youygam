export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/logo_dark.png" 
                alt="YOUY GUM Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto scale-[2.5] object-contain" 
              />
            </a>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              {"Des gummies premium pour un sommeil naturel et reparateur. Fabriquees en France avec des ingredients d'excellence."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Produit</h4>
            <ul className="flex flex-col gap-2 text-sm opacity-70">
              <li><a href="#" className="transition-opacity hover:opacity-100">Sleep Gummies</a></li>
              <li><a href="#ingredients" className="transition-opacity hover:opacity-100">Ingredients</a></li>
              <li><a href="#benefits" className="transition-opacity hover:opacity-100">Bienfaits</a></li>
              <li><a href="#reviews" className="transition-opacity hover:opacity-100">Avis Clients</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Support</h4>
            <ul className="flex flex-col gap-2 text-sm opacity-70">
              <li><a href="#faq" className="transition-opacity hover:opacity-100">FAQ</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Contact</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Livraison & Retours</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Garantie 60 jours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm opacity-70">
              <li><a href="/mentions-legales" className="transition-opacity hover:opacity-100">{"Mentions Legales"}</a></li>
              <li><a href="/politique-confidentialite" className="transition-opacity hover:opacity-100">{"Politique de Confidentialite"}</a></li>
              <li><a href="/cgv" className="transition-opacity hover:opacity-100">CGV</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            {"2026 YOUY GUM. Tous droits reserves. Complement alimentaire - Ne se substitue pas a une alimentation variee et equilibree."}
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded bg-primary-foreground/10 px-3 py-1 text-xs font-medium">VISA</span>
            <span className="rounded bg-primary-foreground/10 px-3 py-1 text-xs font-medium">Mastercard</span>
            <span className="rounded bg-primary-foreground/10 px-3 py-1 text-xs font-medium">PayPal</span>
            <span className="rounded bg-primary-foreground/10 px-3 py-1 text-xs font-medium">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
