import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - YOUY GUM',
  description: 'Conditions générales de vente de YOUY GUM',
}

export default function ConditionsGeneralesVente() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Conditions Générales de Vente
        </h1>
        
        <Card className="p-8 md:p-12">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">
              <strong>Date de dernière mise à jour :</strong> 11 mars 2026
            </p>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">1. Objet et champ d'application</h2>
              <p className="text-foreground/80">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre YOUY GUM, société [forme juridique] au capital de [montant] euros, immatriculée 
                au RCS de [ville] sous le numéro [numéro], dont le siège social est situé [adresse] 
                (ci-après « le Vendeur »), et toute personne physique ou morale souhaitant procéder à 
                un achat via le site internet www.youygum.fr (ci-après « l'Acheteur » ou « le Client »).
              </p>
              <p className="mt-4 text-foreground/80">
                Les présentes CGV s'appliquent à toutes les ventes de produits effectuées sur le site 
                www.youygum.fr. Le fait de passer commande implique l'acceptation pleine et entière des 
                présentes CGV.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">2. Produits</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">2.1 Description des produits</h3>
              <p className="text-foreground/80">
                Les produits proposés à la vente sont les gummies YOUY GUM, compléments alimentaires 
                destinés à favoriser le sommeil naturel et réparateur. Les produits sont décrits avec 
                la plus grande exactitude possible sur le site.
              </p>
              <p className="mt-4 text-foreground/80">
                Les photographies des produits sont aussi fidèles que possible mais n'ont qu'une valeur 
                indicative et ne peuvent engager la responsabilité du Vendeur.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">2.2 Avertissements</h3>
              <p className="text-foreground/80">
                Les compléments alimentaires ne se substituent pas à une alimentation variée et 
                équilibrée ni à un mode de vie sain. Il est recommandé de :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Respecter les doses recommandées</li>
                <li>Tenir hors de portée des jeunes enfants</li>
                <li>Ne pas utiliser en cas de grossesse ou d'allaitement sans avis médical</li>
                <li>Consulter un professionnel de santé en cas de traitement médical concomitant</li>
                <li>Conserver dans un endroit frais et sec, à l'abri de la lumière</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">3. Commandes</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.1 Processus de commande</h3>
              <p className="text-foreground/80">
                Pour passer commande, le Client doit :
              </p>
              <ol className="ml-6 list-decimal text-foreground/80">
                <li>Sélectionner le(s) produit(s) et les ajouter au panier</li>
                <li>Vérifier le contenu du panier</li>
                <li>Renseigner les informations de livraison et de facturation</li>
                <li>Choisir le mode de livraison</li>
                <li>Choisir le mode de paiement</li>
                <li>Accepter les présentes CGV en cochant la case prévue à cet effet</li>
                <li>Valider la commande et procéder au paiement</li>
              </ol>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.2 Confirmation de commande</h3>
              <p className="text-foreground/80">
                Une fois la commande validée et le paiement effectué, le Client reçoit un email de 
                confirmation récapitulant les détails de sa commande. Cette confirmation vaut 
                acceptation de la commande par le Vendeur.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">3.3 Disponibilité des produits</h3>
              <p className="text-foreground/80">
                Les produits sont proposés dans la limite des stocks disponibles. En cas 
                d'indisponibilité d'un produit après passation de la commande, le Client en est informé 
                par email. Le Vendeur procède alors au remboursement du produit indisponible dans un 
                délai de 14 jours.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">4. Prix</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">4.1 Prix des produits</h3>
              <p className="text-foreground/80">
                Les prix des produits sont indiqués en euros (€), toutes taxes comprises (TTC), hors 
                frais de livraison. Les prix incluent la TVA au taux en vigueur en France.
              </p>
              <p className="mt-4 text-foreground/80">
                Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les produits sont 
                facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">4.2 Frais de livraison</h3>
              <p className="text-foreground/80">
                Les frais de livraison sont indiqués avant la validation finale de la commande. Ils 
                varient selon le mode de livraison choisi et le montant de la commande.
              </p>
              <p className="mt-4 text-foreground/80">
                La livraison est offerte pour toute commande supérieure à [montant] euros.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">5. Paiement</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.1 Modalités de paiement</h3>
              <p className="text-foreground/80">
                Le paiement s'effectue en ligne par :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                <li>PayPal</li>
                <li>Apple Pay</li>
                <li>Google Pay</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                Le paiement est exigible immédiatement à la commande. La commande ne sera validée 'après 
                confirmation du paiement par l'établissement bancaire.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.2 Sécurisation des paiements</h3>
              <p className="text-foreground/80">
                Toutes les transactions sont sécurisées par protocole SSL. Les données bancaires ne sont 
                pas conservées par le Vendeur mais sont directement transmises à notre prestataire de 
                paiement agréé.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">5.3 Facture</h3>
              <p className="text-foreground/80">
                Une facture est mise à disposition du Client dans son espace personnel et envoyée par 
                email, dès validation de la commande.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">6. Livraison</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">6.1 Zone de livraison</h3>
              <p className="text-foreground/80">
                Les livraisons sont effectuées :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>En France métropolitaine</li>
                <li>En Corse</li>
                <li>Dans les DOM-TOM (nous consulter pour les tarifs)</li>
                <li>Dans l'Union Européenne</li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">6.2 Délais de livraison</h3>
              <p className="text-foreground/80">
                Les délais de livraison sont communiqués à titre indicatif lors de la commande :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>France métropolitaine :</strong> 2 à 4 jours ouvrés</li>
                <li><strong>Corse et DOM-TOM :</strong> 5 à 10 jours ouvrés</li>
                <li><strong>Union Européenne :</strong> 5 à 8 jours ouvrés</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                Les délais courent à compter de la confirmation de la commande. En cas de dépassement 
                du délai de livraison de plus de 7 jours, le Client peut annuler sa commande et obtenir 
                le remboursement intégral.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">6.3 Modalités de livraison</h3>
              <p className="text-foreground/80">
                Les produits sont livrés à l'adresse indiquée par le Client lors de la commande. Il 
                appartient au Client de vérifier l'exactitude de l'adresse de livraison.
              </p>
              <p className="mt-4 text-foreground/80">
                Le Client est informé de l'expédition de sa commande par email avec un numéro de suivi.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">6.4 Réception de la commande</h3>
              <p className="text-foreground/80">
                Lors de la réception, le Client doit vérifier l'état du colis. En cas de dommage 
                apparent (colis ouvert, abîmé, produits manquants), le Client doit :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Refuser le colis ou émettre des réserves précises sur le bon de livraison</li>
                <li>Confirmer ces réserves par email à contact@youygum.fr dans les 48 heures</li>
                <li>Joindre des photos du colis et des produits endommagés</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">7. Droit de rétractation</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">7.1 Délai de rétractation</h3>
              <p className="text-foreground/80">
                Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un 
                délai de 14 jours à compter de la réception de sa commande pour exercer son droit de 
                rétractation, sans avoir à justifier de motif ni à payer de pénalité.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">7.2 Modalités d'exercice</h3>
              <p className="text-foreground/80">
                Pour exercer son droit de rétractation, le Client doit notifier sa décision au Vendeur 
                par email à contact@youygum.fr ou par courrier à [adresse].
              </p>
              <p className="mt-4 text-foreground/80">
                Le Client doit retourner les produits dans leur emballage d'origine, non ouverts et non 
                utilisés, dans un état permettant leur remise en vente, dans un délai de 14 jours suivant 
                la notification de rétractation.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">7.3 Frais de retour</h3>
              <p className="text-foreground/80">
                Les frais de retour sont à la charge du Client.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">7.4 Remboursement</h3>
              <p className="text-foreground/80">
                Le Vendeur procède au remboursement de la totalité des sommes versées (produits + frais 
                de livraison initiaux) dans un délai de 14 jours à compter de la réception des produits 
                retournés ou de la preuve d'expédition.
              </p>
              <p className="mt-4 text-foreground/80">
                Le remboursement est effectué via le même moyen de paiement que celui utilisé lors de 
                l'achat.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">8. Garantie et conformité</h2>
              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">8.1 Garantie légale de conformité</h3>
              <p className="text-foreground/80">
                Le Client bénéficie de la garantie légale de conformité prévue aux articles L217-4 et 
                suivants du Code de la consommation. En cas de défaut de conformité, le Client peut 
                choisir entre la réparation et le remplacement du produit.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">8.2 Garantie des vices cachés</h3>
              <p className="text-foreground/80">
                Le Client bénéficie également de la garantie légale des vices cachés prévue aux articles 
                1641 et suivants du Code civil. En présence d'un vice caché, le Client peut choisir 
                entre le remboursement du prix ou la réduction du prix de vente.
              </p>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">8.3 Garantie satisfaction</h3>
              <p className="text-foreground/80">
                YOUY GUM propose une garantie satisfaction de 60 jours. Si le Client n'est pas satisfait 
                des produits, il peut retourner les boîtes non ouvertes et obtenir un remboursement 
                intégral dans un délai de 60 jours suivant la réception.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">9. Service client</h2>
              <p className="text-foreground/80">
                Pour toute question, réclamation ou information concernant une commande, le Client peut 
                contacter le service client :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li><strong>Email :</strong> contact@youygum.fr</li>
                <li><strong>Téléphone :</strong> [Numéro de téléphone] (du lundi au vendredi, 9h-18h)</li>
                <li><strong>Courrier :</strong> YOUY GUM, [Adresse complète]</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">10. Responsabilité</h2>
              <p className="text-foreground/80">
                Le Vendeur ne saurait être tenu responsable de l'inexécution du contrat en cas de :
              </p>
              <ul className="ml-6 list-disc text-foreground/80">
                <li>Force majeure</li>
                <li>Fait imprévisible et insurmontable d'un tiers au contrat</li>
                <li>Faute du Client (adresse de livraison erronée, absence lors de la livraison, etc.)</li>
              </ul>
              <p className="mt-4 text-foreground/80">
                Le Vendeur ne saurait être tenu responsable des dommages résultant d'une mauvaise 
                utilisation du produit ou du non-respect des précautions d'emploi.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">11. Protection des données personnelles</h2>
              <p className="text-foreground/80">
                Les données personnelles collectées lors de la commande sont traitées conformément à 
                notre{" "}
                <a href="/politique-confidentialite" className="text-primary underline hover:no-underline">
                  Politique de Confidentialité
                </a>{" "}
                et au RGPD.
              </p>
              <p className="mt-4 text-foreground/80">
                Le Client dispose d'un droit d'accès, de rectification, de suppression et d'opposition 
                aux données le concernant. Pour exercer ces droits, le Client peut contacter le Vendeur 
                à l'adresse contact@youygum.fr.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">12. Propriété intellectuelle</h2>
              <p className="text-foreground/80">
                Tous les éléments du site www.youygum.fr (marques, logos, textes, images, vidéos, etc.) 
                sont protégés par les droits de propriété intellectuelle. Toute reproduction, même 
                partielle, est strictement interdite sans autorisation préalable du Vendeur.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">13. Médiation</h2>
              <p className="text-foreground/80">
                Conformément à l'article L.612-1 du Code de la consommation, le Client a la possibilité, 
                en cas de litige, de recourir gratuitement à un médiateur de la consommation en vue de 
                la résolution amiable du litige. Les coordonnées du médiateur sont disponibles sur 
                demande ou dans nos{" "}
                <a href="/mentions-legales" className="text-primary underline hover:no-underline">
                  Mentions Légales
                </a>.
              </p>
              <p className="mt-4 text-foreground/80">
                Le Client peut également recourir à la plateforme de règlement en ligne des litiges de 
                la Commission Européenne :{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">14. Droit applicable et juridiction</h2>
              <p className="text-foreground/80">
                Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d'accord 
                amiable, le litige sera porté devant les tribunaux compétents.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">15. Modification des CGV</h2>
              <p className="text-foreground/80">
                Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les CGV 
                applicables sont celles en vigueur au moment de la passation de la commande.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">16. Contact</h2>
              <p className="text-foreground/80">
                Pour toute question concernant les présentes CGV, le Client peut contacter :
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
