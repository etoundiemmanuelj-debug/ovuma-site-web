import DOMPurify from "dompurify";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useInternalLinks } from "../lib/internal-links";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export function SupprimerComptePage() {
  const onContentClick = useInternalLinks();
  const { t } = useTranslation();

  return (
    <>
      <ScrollToTop />
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="ovm-page-hero ovm-bg-ciel">
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
                {t('legal.delete_account.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('legal.delete_account.subtitle')}
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
                onClick={onContentClick}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('legal.delete_account.content')) }}
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
