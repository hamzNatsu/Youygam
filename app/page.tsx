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
    "Sleep gummies naturels pour aider à s'endormir plus vite, réduire le stress nocturne et améliorer la qualité du sommeil.",
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
        text: "Les Sleep Gummies YOUY GUM sont des compléments alimentaires sous forme de gommes à mâcher, formulées avec de la mélatonine micro-dosée, de la L-théanine, de la passiflore et de la camomille. Elles agissent en synergie pour calmer le système nerveux, réguler le cycle circadien et favoriser un endormissement naturel et rapide.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adressent ces gummies ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elles s'adressent à toute personne adulte souhaitant améliorer la qualité de son sommeil : difficultés d'endormissement, réveils nocturnes, stress en fin de journée, ou simplement envie d'un sommeil plus profond et réparateur. Elles conviennent aux véganes et sont sans gluten.",
      },
    },
    {
      "@type": "Question",
      name: "Les gummies peuvent-elles améliorer la qualité du sommeil et réduire le stress ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Notre formule associe des ingrédients cliniquement étudiés pour leurs effets sur la relaxation et le sommeil. La L-théanine réduit le stress et l'anxiété, la mélatonine régule le cycle veille-sommeil, et les extraits de plantes favorisent la détente musculaire et mentale.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les effets secondaires possibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les ingrédients de YOUY GUM sont naturels et généralement bien tolérés. Certaines personnes peuvent ressentir une légère somnolence, ce qui est l'effet recherché. Nous recommandons de ne pas dépasser la dose conseillée et de consulter ton médecin si tu es enceinte, allaitante ou sous traitement.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je les prendre avec d'autres médicaments ou compléments ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien que nos ingrédients soient naturels, nous recommandons de consulter ton médecin ou pharmacien avant de combiner les gummies avec d'autres médicaments, en particulier les sédatifs, anxiolytiques ou anticoagulants.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour voir des résultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La plupart de nos clients constatent une amélioration dès la première nuit. Pour des résultats optimaux et durables, nous recommandons une cure de 4 semaines minimum. 94% de nos utilisateurs rapportent un endormissement plus rapide après 2 semaines d'utilisation.",
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
