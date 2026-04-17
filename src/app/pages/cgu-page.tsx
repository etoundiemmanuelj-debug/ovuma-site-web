import DOMPurify from "dompurify";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function CGUPage() {
  const { t } = useTranslation();

  return (
    <>
      <ScrollToTop />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('legal.cgu.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('legal.cgu.last_update')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto prose prose-lg"
            >
              <div 
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('legal.cgu.content')) }}
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
