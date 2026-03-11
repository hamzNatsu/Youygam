import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { HeroSection } from "@/components/hero-section"
import { PricingComparison } from "@/components/pricing-comparison"
import { SocialProofSection } from "@/components/social-proof-section"
import { ScienceSection } from "@/components/science-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { IngredientsSection } from "@/components/ingredients-section"
import { MissionSection } from "@/components/mission-section"
import { StatsSection } from "@/components/stats-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ExpertSection } from "@/components/expert-section"
import { ModernLifeSection } from "@/components/modern-life-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PricingComparison />
      <SocialProofSection />
      <HeroSlider />
      <ScienceSection />
      <BenefitsGrid />
      <IngredientsSection />
      <MissionSection />
      <StatsSection />
      <ReviewsSection />
      <ExpertSection />
      <ModernLifeSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
