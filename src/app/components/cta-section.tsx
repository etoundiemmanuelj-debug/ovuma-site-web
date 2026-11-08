import { motion } from "motion/react";
import { Smartphone, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StoreButtons } from "./store-buttons";

export function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contenu texte */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="ovm-kicker mb-6">
                  <Download size={16} className="text-primary" />
                  <span className="text-primary font-medium text-sm">{t('cta.badge')}</span>
                </div>

                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('cta.title1')}
                  <span className="block text-primary mt-1">{t('cta.title2')}</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('cta.description')}
                </p>

                {/* Avantages */}
                <div className="space-y-3 mb-8">
                  {(t('cta.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Bouton de téléchargement */}
                <StoreButtons />

                <p className="text-xs text-muted-foreground mt-4">
                  {t('cta.stats')}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[460px] md:h-auto md:min-h-[560px] overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img src="/images/ovuma-fond.webp" alt="" loading="lazy" className="w-full h-full object-cover object-[center_75%]" />
                </div>
                {/* Leçon d'ewondo dans l'app, présentée dans un téléphone */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                  <img
                    src="/images/ovuma-app-mockup.webp"
                    alt={t('cta.mockup_alt')}
                    width={636}
                    height={1263}
                    loading="lazy"
                    className="h-full max-h-[520px] w-auto rotate-[4deg] drop-shadow-[0_30px_40px_rgba(18,61,43,0.3)]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}