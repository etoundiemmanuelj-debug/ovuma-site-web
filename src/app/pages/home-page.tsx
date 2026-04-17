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
import { SEOHead } from "../components/seo-head";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Apprenez l'Ewondo, le Bassa, le Duala — Langues Beti & Ekang"
        description="Ovúmá : la première app pour apprendre les langues Beti et Ekang du Cameroun. Ewondo, Bassa, Duala, Bulu, Fe'efe'. Dictionnaire illustré, prononciations natives, proverbes et contes traditionnels."
        keywords="apprendre ewondo, langue beti, culture ekang, dictionnaire ewondo français, apprendre langue africaine cameroun, beti cameroun, ewondo bassa duala, proverbes ewondo, culture beti ekang, langue bantoue, patrimoine linguistique cameroun, ovuma"
        canonical="/"
      />
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