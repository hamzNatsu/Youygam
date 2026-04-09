import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { PricingComparison } from "@/components/pricing-comparison"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { MissionSection } from "@/components/mission-section"
import { StatsSection } from "@/components/stats-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ExpertSection } from "@/components/expert-section"
import { ModernLifeSection } from "@/components/modern-life-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { BottomPricingSection } from "@/components/bottom-pricing-section"
import { Footer } from "@/components/footer"
import { BeforeAfterSection } from "@/components/before-after-section"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"
import { ExitIntentBanner } from "@/components/exit-intent-banner"
import { RecentPurchasesToast } from "@/components/recent-purchases-toast"

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "YOUY GUM Sleep Gummies",
  description:
    "Sleep gummies naturels pour aider a s'endormir plus vite, reduire le stress nocturne et ameliorer la qualite du sommeil.",
  brand: {
    "@type": "Brand",
    name: "YOUY GUM",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12000",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "44.90",
    availability: "https://schema.org/InStock",
    url: "https://f8cebf-de.myshopify.com/products/pack-1-l-essai-30-jours-abonnement",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que sont les Sleep Gummies YOUY GUM et comment fonctionnent-elles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les Sleep Gummies YOUY GUM sont des complements alimentaires sous forme de gommes a macher, formulees avec de la melatonine micro-dosee, de la L-theanine, de la passiflore et de la camomille. Elles agissent en synergie pour calmer le systeme nerveux, reguler le cycle circadien et favoriser un endormissement naturel et rapide.",
      },
    },
    {
      "@type": "Question",
      name: "A qui s'adressent ces gummies ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elles s'adressent a toute personne adulte souhaitant ameliorer la qualite de son sommeil : difficultes d'endormissement, reveils nocturnes, stress en fin de journee, ou simplement envie d'un sommeil plus profond et reparateur. Elles conviennent aux vegans et sont sans gluten.",
      },
    },
    {
      "@type": "Question",
      name: "Les gummies peuvent-elles ameliorer la qualite du sommeil et reduire le stress ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Notre formule associe des ingredients cliniquement etudies pour leurs effets sur la relaxation et le sommeil. La L-theanine reduit le stress et l'anxiete, la melatonine regule le cycle veille-sommeil, et les extraits de plantes favorisent la detente musculaire et mentale.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les effets secondaires possibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les ingredients de YOUY GUM sont naturels et generalement bien toleres. Certaines personnes peuvent ressentir une legere somnolence, ce qui est l'effet recherche. Nous recommandons de ne pas depasser la dose conseillee et de consulter ton medecin si tu es enceinte, allaitante ou sous traitement.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je les prendre avec d'autres medicaments ou complements ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien que nos ingredients soient naturels, nous recommandons de consulter ton medecin ou pharmacien avant de combiner les gummies avec d'autres medicaments, en particulier les sedatifs, anxiolytiques ou anticoagulants.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour voir des resultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La plupart de nos clients constatent une amelioration des la premiere nuit. Pour des resultats optimaux et durables, nous recommandons une cure de 4 semaines minimum. 94% de nos utilisateurs rapportent un endormissement plus rapide apres 2 semaines d'utilisation.",
      },
    },
  ],
}

export default function Home() {
  return (
    <main>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PricingComparison />
      <SocialProofSection />
      <BenefitsGrid />
      <MissionSection />
      <StatsSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <ExpertSection />
      <ModernLifeSection />
      <CtaSection />
      <FaqSection />
      <BottomPricingSection />
      <Footer />
      <MobileStickyCta />
      <RecentPurchasesToast />
      <ExitIntentBanner />
    </main>
  )
}
