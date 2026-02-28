export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent-foreground" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold">YOUY GUM</span>
            </div>
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
              <li><a href="#" className="transition-opacity hover:opacity-100">{"Mentions Legales"}</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">{"Politique de Confidentialite"}</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">CGV</a></li>
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
