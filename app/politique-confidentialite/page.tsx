import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - YOUY GUM',
  description: 'Politique de confidentialité et protection des données personnelles de YOUY GUM',
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Politique de Confidentialité
        </h1>
        
        <Card className="p-8 md:p-12">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">
              <strong>Date de dernière mise à jour :</strong> 11 mars 2026
            </p>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-foreground/80">
                YOUY GUM accorde une grande importance à la protection de tes données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons 
                et protégeons tes informations personnelles conformément au Règlement Général sur la 
                Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">2. Responsable du traitement</h2>
              <p className="text-foreground/80">
                Le responsable du traitement des données est :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Raison sociale : YOUY GUM</li>
                <li>Adresse : [Adresse complète]</li>
                <li>Email : contact@youygum.fr</li>
                <li>Téléphone : [Numéro de téléphone]</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">3. Données collectées</h2>
              <p className="text-foreground/80">
                Nous collectons les données personnelles suivantes :
              </p>
              
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.1 Données d'identification</h3>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale de livraison et de facturation</li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.2 Données de commande</h3>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Historique des achats</li>
                <li>Détails des transactions</li>
                <li>Préférences de produits</li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.3 Données de navigation</h3>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Adresse IP</li>
                <li>Cookies et traceurs</li>
                <li>Pages visitées et durée de visite</li>
                <li>Données de connexion</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">4. Finalités du traitement</h2>
              <p className="text-foreground/80">
                Tes données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Gestion et traitement de tes commandes</li>
                <li>Livraison des produits</li>
                <li>Service client et support</li>
                <li>Gestion des paiements et facturation</li>
                <li>Envoi de communications marketing (avec ton consentement)</li>
                <li>Amélioration de nos services et de notre site web</li>
                <li>Prévention de la fraude</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">5. Base légale du traitement</h2>
              <p className="text-foreground/80">
                Le traitement de tes données repose sur les bases légales suivantes :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Exécution du contrat :</strong> traitement des commandes et livraisons</li>
                <li><strong>Consentement :</strong> communications marketing et cookies non essentiels</li>
                <li><strong>Intérêt légitime :</strong> amélioration de nos services et prévention de la fraude</li>
                <li><strong>Obligation légale :</strong> comptabilité, fiscalité</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">6. Destinataires des données</h2>
              <p className="text-foreground/80">
                Tes données personnelles peuvent être partagées avec :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Prestataires de services logistiques (transporteurs)</li>
                <li>Prestataires de paiement sécurisé</li>
                <li>Hébergeurs de notre site web</li>
                <li>Outils de marketing et d'analyse (avec ton consentement)</li>
                <li>Autorités légales sur demande légale</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                Tous nos prestataires sont soumis à des obligations contractuelles strictes de protection 
                des données personnelles.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">7. Durée de conservation</h2>
              <p className="text-foreground/80">
                Tes données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Données de compte client :</strong> pendant toute la durée de la relation commerciale et 3 ans après le dernier contact</li>
                <li><strong>Données de commande :</strong> 10 ans pour les obligations comptables et fiscales</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
                <li><strong>Données de prospection :</strong> 3 ans à compter du dernier contact</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">8. Tes droits</h2>
              <p className="text-foreground/80">
                Conformément au RGPD, tu disposes des droits suivants :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Droit d'accès :</strong> obtenir une copie de tes données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de tes données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de tes données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer tes données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> t'opposer au traitement de tes données</li>
                <li><strong>Droit de retirer ton consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                Pour exercer ces droits, contactez-nous à : <strong>contact@youygum.fr</strong>
              </p>
              <p className="text-foreground/80">
                Tu disposes également du droit d'introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">9. Cookies</h2>
              <p className="text-foreground/80">
                Notre site utilise des cookies pour améliorer ton expérience de navigation. Lors de 
                ta première visite, un bandeau te permet d'accepter ou de refuser les cookies non 
                essentiels. Tu peux modifier tes préférences à tout moment via les paramètres de 
                ton navigateur.
              </p>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">Types de cookies utilisés :</h3>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour analyser l'utilisation du site</li>
                <li><strong>Cookies marketing :</strong> pour personnaliser les publicités (avec ton consentement)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">10. Sécurité des données</h2>
              <p className="text-foreground/80">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                protéger tes données personnelles contre la perte, l'utilisation abusive, l'accès non 
                autorisé, la divulgation, l'altération ou la destruction :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                <li>Serveurs sécurisés et sauvegardés régulièrement</li>
                <li>Accès limité aux données personnelles</li>
                <li>Formation du personnel sur la protection des données</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">11. Transfert de données hors UE</h2>
              <p className="text-foreground/80">
                Tes données personnelles sont stockées et traitées dans l'Union Européenne. Si un 
                transfert hors UE est nécessaire, nous nous assurons que des garanties appropriées sont 
                en place (clauses contractuelles types de la Commission Européenne, etc.).
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">12. Modifications de la politique</h2>
              <p className="text-foreground/80">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                En cas de modification substantielle, nous t'en informerons par email ou via un avis 
                sur notre site web. La version à jour sera toujours disponible sur cette page.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">13. Contact</h2>
              <p className="text-foreground/80">
                Pour toute question concernant cette politique de confidentialité ou le traitement de tes 
                données personnelles, tu peux nous contacter :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Email : contact@youygum.fr</li>
                <li>Courrier : YOUY GUM, [Adresse complète]</li>
                <li>Téléphone : [Numéro de téléphone]</li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
      
      <Footer />
    </main>
  )
}
