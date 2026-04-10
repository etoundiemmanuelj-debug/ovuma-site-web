import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import mockup1 from "figma:asset/99d51b7d4bc296e70828c5bf2f36defb1dfaeaa9.png";
import mockup2 from "figma:asset/694f48c740150aaa8d55f69ddd1c258fac779de3.png";
import mockup3 from "figma:asset/2ccc8976f1a18f0ec5a6ebb45085f3fdd30a715e.png";
import mockup4 from "figma:asset/20259e995fd4ef772d7c2bd3088e446eb24edef7.png";

const steps = [
  {
    image: mockup1,
    number: "01",
    titleKey: "how_it_works.steps.1.title",
    descKey: "how_it_works.steps.1.desc",
  },
  {
    image: mockup2,
    number: "02",
    titleKey: "how_it_works.steps.2.title",
    descKey: "how_it_works.steps.2.desc",
  },
  {
    image: mockup3,
    number: "03",
    titleKey: "how_it_works.steps.3.title",
    descKey: "how_it_works.steps.3.desc",
  },
  {
    image: mockup4,
    number: "04",
    titleKey: "how_it_works.steps.4.title",
    descKey: "how_it_works.steps.4.desc",
  },
];

export function HowItWorksSection() {
  const { t } = useTranslation();
  return (
    <section id="comment-ca-marche" className="py-16 md:py-24 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent-foreground font-medium">{t('how_it_works.badge')}</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('how_it_works.title1')}
            <span className="block text-primary mt-2">{t('how_it_works.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('how_it_works.description')}
          </p>
        </motion.div>

        {/* Timeline des étapes avec mockups */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-16 md:mb-24 last:mb-0"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Image mockup */}
                  <div className={`${isEven ? '' : 'md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="relative"
                    >
                      <img 
                        src={step.image} 
                        alt={t(step.titleKey)}
                        className="w-full max-w-[240px] mx-auto drop-shadow-2xl"
                      />
                      {/* Badge numéro */}
                      <div 
                        className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-2xl text-primary-foreground shadow-lg"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenu texte */}
                  <div className={`${isEven ? '' : 'md:order-1'}`}>
                    <div className="space-y-4">
                      <h3 
                        className="text-3xl md:text-4xl font-bold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ligne de connexion (sauf pour le dernier) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-primary to-accent -translate-x-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-lg font-medium">
            {t('how_it_works.cta_button')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}