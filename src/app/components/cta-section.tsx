import { motion } from "motion/react";
import { Smartphone, Apple, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Fond avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
      
      {/* Motif décoratif africain */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary" />
              <circle cx="40" cy="40" r="2" fill="currentColor" className="text-accent" />
              <circle cx="70" cy="10" r="2" fill="currentColor" className="text-secondary" />
              <path d="M20,20 L30,30 L20,40 L10,30 Z" fill="currentColor" className="text-primary" opacity="0.3" />
              <path d="M50,50 L60,60 L50,70 L40,60 Z" fill="currentColor" className="text-accent" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contenu texte */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 w-fit">
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

                {/* Boutons de téléchargement */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <Apple size={24} className="flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs opacity-90">{t('hero.download_on')}</div>
                      <div className="text-sm font-semibold -mt-0.5">App Store</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://expo.dev/accounts/etoundi/projects/ovuma/builds/0e978de3-1fc9-433d-a155-947ae4c00190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-90">{t('hero.available_on')}</div>
                      <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                    </div>
                  </a>
                </div>

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
                className="relative h-64 md:h-auto"
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1682668701024-b6508708a764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsJTIwYXJ0fGVufDF8fHx8MTc3NTY2NzQ3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Culture africaine"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-card/50"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}