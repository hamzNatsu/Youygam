import Image from "next/image"

const articleUrl =
  "https://www.lemonde.fr/economie/article/2023/07/31/la-folie-des-gummies-ces-complements-alimentaires-aux-allures-de-bonbons_6183932_3234.html"

export function ExpertSection() {
  return (
    <section className="bg-secondary px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="lg:pt-2">
            <p className="text-sm font-medium text-muted-foreground">15 février 2026</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {"La folie des « gummies », ces compléments alimentaires aux allures de bonbons"}
            </h2>

            <article className="mt-6 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
              <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                {"Économie - Industrie pharmaceutique"}
              </div>

              <p className="text-[15px] leading-8 text-muted-foreground md:text-base">
                {
                  "Avec leur goût fruité et leur texture gélifiée, elles séduisent de plus en plus les adeptes de cocktails nutritionnels en quête de bien-être. Les « gummies », ces gommes à mâcher aux airs de bonbons et enrichies en concentrés de plantes, de vitamines ou de minéraux, envahissent les rayons des pharmacies et des supermarchés ces dernières années. De quoi ringardiser les vieilles gélules et comprimés ?"
                }
              </p>

              <p className="mt-5 text-[15px] leading-8 text-muted-foreground md:text-base">
                {
                  "Saveur pomme, ananas, mûre, pêche, fraise… Les petits flacons aux couleurs pop, qui s'inspirent des codes de la confiserie, se déclinent pour tous les maux (sommeil, stress, vitalité, digestion, confort menstruel…) et à tous les prix sur les étagères. Leur coût varie en moyenne entre 10 euros et 20 euros la cure de trois à quatre semaines."
                }
              </p>

              <p className="mt-5 text-[15px] leading-8 text-muted-foreground md:text-base">
                {
                  "Des tarifs qui ne semblent pas décourager les acheteurs, conquis par le côté pratique de ce format. Dans les pharmacies, où sont effectuées 54 % des ventes de compléments alimentaires en France, leur chiffre d'affaires a bondi de 16 millions d'euros en 2020 à 59 millions d'euros en 2022. « Les gummies occupent aujourd'hui 12 % de l'espace des officines consacré aux compléments alimentaires pour le sommeil, et déjà plus de 40 % de celui réservé aux multivitamines pour les enfants », observe Jean-Sébastien Eudes."
                }
              </p>
            </article>

            <div className="mt-8">
              <a
                href={articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                <span>Afficher plus</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-8">
              <a
                href="#acheter"
                className="inline-block rounded-xl bg-primary px-10 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                  Essayer 30 jours sans risque
              </a>
            </div>
          </div>

          {/* Expert Image */}
          <div className="flex justify-center lg:justify-end lg:pt-16">
            <div className="relative overflow-hidden rounded-2xl lg:-mt-6">
              <Image
                src="/images/sleep-expert.jpg"
                alt="Dr. Sophie Laurent, spécialiste du sommeil"
                width={500}
                height={600}
                className="h-auto w-full max-w-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
