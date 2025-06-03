import {
  Navigation,
  HeroSection,
  FeaturesSection,
  AboutSection,
  TestimonialsSection,
  FaqSection,
  CtaSection,
  NewsletterSection,
  Footer,
  // PricingSection, // Commented out - requires Stripe API keys
} from "@/components/landing-page";

// Mock components for demo without Stripe keys
import { MockPricingSection } from "@/components/mock-comp";

export default function ModernLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      {/* <PricingSection /> */}{" "}
      {/* Commented out - requires Stripe API keys */}
      <MockPricingSection /> {/* Demo version - no Stripe keys required */}
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
