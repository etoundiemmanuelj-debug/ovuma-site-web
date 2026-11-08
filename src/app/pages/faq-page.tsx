import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SEOHead } from "../components/seo-head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={false}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          {isOpen ? (
            <Minus size={16} className="text-primary" />
          ) : (
            <Plus size={16} className="text-primary" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQPage() {
  const { t } = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const faqCategories = t('faq.categories', { returnObjects: true }) as any[];

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev =>
      prev.includes(id)
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <ScrollToTop />
      <SEOHead
        title="FAQ - Questions sur l'apprentissage des langues Beti & Ekang"
        description="Toutes vos questions sur Ovúmá : comment apprendre l'Ewondo, le Bassa, le Duala ? L'application est-elle gratuite ? Fonctionne-t-elle hors ligne ? Trouvez vos réponses ici."
        keywords="faq ovuma, questions ewondo, apprendre langue beti, aide application langues africaines, ewondo débutant, bassa duala tutoriel"
        canonical="/faq"
      />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="ovm-page-hero ovm-bg-ciel">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="ovm-kicker mb-6">
                <span className="text-primary font-medium">{t('faq.hero.badge')}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('faq.hero.title1')}
                <span className="block text-primary mt-2">{t('faq.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('faq.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item: any) => (
                      <FAQItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openQuestions.includes(item.id)}
                        onToggle={() => toggleQuestion(item.id)}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('faq.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('faq.cta.description')}
              </p>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all  shadow-lg"
              >
                {t('faq.cta.button')}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}