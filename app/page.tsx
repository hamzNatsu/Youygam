import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PricingComparison } from "@/components/pricing-comparison"
import { SocialProofSection } from "@/components/social-proof-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { MissionSection } from "@/components/mission-section"
import { StatsSection } from "@/components/stats-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ExpertSection } from "@/components/expert-section"
import { ModernLifeSection } from "@/components/modern-life-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { BeforeAfterSection } from "@/components/before-after-section"
import { MobileStickyCta } from "@/components/mobile-sticky-cta"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
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
      <Footer />
      <MobileStickyCta />
    </main>
  )
}
