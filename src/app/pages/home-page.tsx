import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { FeaturesSection } from "../components/features-section";
import { LanguagesSection } from "../components/languages-section";
import { HowItWorksSection } from "../components/how-it-works-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { AboutSection } from "../components/about-section";
import { StatsSection } from "../components/stats-section";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LanguagesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <AboutSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}