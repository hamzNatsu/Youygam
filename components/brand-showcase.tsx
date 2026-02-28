import Image from "next/image"

export function BrandShowcase() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-15%20at%2015.22.13-XCUHijBwWhtM4DGG6bBKLAfQYSQYLs.jpeg"
            alt="YOUY GUM - Gummies naturels pour le sommeil"
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
