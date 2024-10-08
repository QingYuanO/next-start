import { CTA } from '@/components/landing/cta';
import { FAQ } from '@/components/landing/faq';
import { FeatureSection } from '@/components/landing/feature-section';
import { HeroSection } from '@/components/landing/hero-section';
import { LogoCloud } from '@/components/landing/logo-cloud';
import { PricingSection } from '@/components/landing/pricing';
import { SocialProof } from '@/components/landing/social-proof';
import LandingWrap from '@/components/layout/landing-wrap';

function LandingPage() {
  return (
    <LandingWrap>
      <HeroSection />
      <LogoCloud />
      <FeatureSection />
      <SocialProof />
      <CTA />
      <FAQ />
      <PricingSection />
    </LandingWrap>
  );
}

export default LandingPage;
