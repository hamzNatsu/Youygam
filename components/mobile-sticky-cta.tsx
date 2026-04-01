"use client"

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <a
        href="#acheter"
        className="block rounded-xl bg-primary py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
      >
        Essayer maintenant
      </a>
    </div>
  )
}
