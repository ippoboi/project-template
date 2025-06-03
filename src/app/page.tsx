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
} from "@/components/landing-page";

export default function ModernLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
