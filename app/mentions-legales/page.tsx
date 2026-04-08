import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Mentions Légales - YOUY GUM',
  description: 'Mentions légales et informations juridiques de YOUY GUM',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Mentions Légales
        </h1>
        
        <Card className="p-8 md:p-12">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">
              <strong>Date de dernière mise à jour :</strong> 11 mars 2026
            </p>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">1. Éditeur du site</h2>
              <p className="text-foreground/80">
                Le site web www.youygum.fr est édité par :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Raison sociale :</strong> YOUY GUM</li>
                <li><strong>Forme juridique :</strong> [SAS / SARL / etc.]</li>
                <li><strong>Capital social :</strong> [Montant] euros</li>
                <li><strong>Siège social :</strong> [Adresse complète]</li>
                <li><strong>RCS :</strong> [Ville] [Numéro]</li>
                <li><strong>SIRET :</strong> [Numéro SIRET]</li>
                <li><strong>Numéro TVA intracommunautaire :</strong> [Numéro TVA]</li>
                <li><strong>Téléphone :</strong> [Numéro de téléphone]</li>
                <li><strong>Email :</strong> contact@youygum.fr</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                <strong>Directeur de la publication :</strong> [Nom du directeur de publication]
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">2. Hébergement</h2>
              <p className="text-foreground/80">
                Le site est hébergé par :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web :</strong> https://vercel.com</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">3. Propriété intellectuelle</h2>
              <p className="text-foreground/80">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes, 
                etc.) est la propriété exclusive de YOUY GUM ou de ses partenaires et est protégé par 
                les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-4 text-foreground/80">
                Toute reproduction, représentation, modification, publication, adaptation, totale ou 
                partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
                interdite sans l'autorisation écrite préalable de YOUY GUM.
              </p>
              <p className="mt-4 text-foreground/80">
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il 
                contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément 
                aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">4. Marques</h2>
              <p className="text-foreground/80">
                Les marques, logos et signes distinctifs reproduits sur le site sont la propriété de 
                YOUY GUM. Toute reproduction, imitation ou usage, total ou partiel, de ces marques, 
                logos et signes distinctifs sans l'autorisation expresse de YOUY GUM est prohibé et 
                constitue une contrefaçon.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">5. Limitation de responsabilité</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.1 Contenu du site</h3>
              <p className="text-foreground/80">
                YOUY GUM s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                sur ce site. Toutefois, YOUY GUM ne peut garantir l'exactitude, la précision ou 
                l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="mt-4 text-foreground/80">
                En conséquence, YOUY GUM décline toute responsabilité pour toute imprécision, 
                inexactitude ou omission portant sur des informations disponibles sur le site.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.2 Disponibilité du site</h3>
              <p className="text-foreground/80">
                YOUY GUM met tout en œuvre pour assurer l'accessibilité du site 24h/24 et 7j/7. 
                Cependant, YOUY GUM ne saurait être tenu responsable en cas d'interruption, de 
                suspension ou de modification sans préavis du site pour des raisons de maintenance, 
                de mise à jour, ou pour tout autre motif (panne technique, etc.).
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.3 Liens hypertextes</h3>
              <p className="text-foreground/80">
                Le site peut contenir des liens hypertextes vers d'autres sites web. YOUY GUM ne 
                saurait être tenu responsable du contenu de ces sites externes ou de l'utilisation 
                qui pourrait être faite de ces sites par les utilisateurs.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">6. Protection des données personnelles</h2>
              <p className="text-foreground/80">
                Les données personnelles collectées sur ce site font l'objet d'un traitement 
                informatique destiné à la gestion des commandes et de la relation client.
              </p>
              <p className="mt-4 text-foreground/80">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
                Règlement Général sur la Protection des Données (RGPD), tu disposes d'un droit 
                d'accès, de rectification, de suppression et d'opposition aux données personnelles 
                te concernant.
              </p>
              <p className="mt-4 text-foreground/80">
                Pour plus d'informations sur la protection des données et l'exercice de tes droits, 
                consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary underline hover:no-underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">7. Cookies</h2>
              <p className="text-foreground/80">
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le 
                trafic. Lors de ta première visite, un bandeau t'informe de l'utilisation de 
                cookies et te permet d'accepter ou de refuser leur dépôt.
              </p>
              <p className="mt-4 text-foreground/80">
                Pour plus d'informations sur les cookies utilisés, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary underline hover:no-underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">8. Droit applicable et juridiction</h2>
              <p className="text-foreground/80">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et 
                à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
                conformément aux règles de compétence en vigueur.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">9. Crédits</h2>
              <p className="text-foreground/80">
                <strong>Conception et développement :</strong> [Nom de l'agence ou développeur]
              </p>
              <p className="mt-2 text-foreground/80">
                <strong>Photographies :</strong> [Sources des images]
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">10. Médiation</h2>
              <p className="text-foreground/80">
                Conformément à l'article L.612-1 du Code de la consommation, nous proposons un 
                dispositif de médiation de la consommation. L'entité de médiation retenue est :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Médiateur :</strong> [Nom du médiateur]</li>
                <li><strong>Adresse :</strong> [Adresse du médiateur]</li>
                <li><strong>Site web :</strong> [Site web du médiateur]</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">11. Contact</h2>
              <p className="text-foreground/80">
                Pour toute question concernant ces mentions légales, tu peux nous contacter :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Email :</strong> contact@youygum.fr</li>
                <li><strong>Téléphone :</strong> [Numéro de téléphone]</li>
                <li><strong>Courrier :</strong> YOUY GUM, [Adresse complète]</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
      
      <Footer />
    </main>
  )
}
