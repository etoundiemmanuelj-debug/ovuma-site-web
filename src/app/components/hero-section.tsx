import { motion } from "motion/react";
import { Smartphone, Apple } from "lucide-react";
import heroMockup from "figma:asset/c41a0fb54b9770faeb99fe21753bf67eb0dbfedd.png";
import heroMockup2 from "figma:asset/4b96ede67dc3e538af5080f5fc15659af77cea85.png";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Motif africain en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,10 L30,30 L10,30 Z M70,10 L80,30 L60,30 Z M45,60 L55,80 L35,80 Z" fill="currentColor" />
              <circle cx="50" cy="20" r="3" fill="currentColor" />
              <circle cx="25" cy="70" r="3" fill="currentColor" />
              <circle cx="75" cy="70" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-6">
              <span className="text-secondary-foreground font-medium text-sm md:text-base">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('hero.title1')}
              <span className="block text-primary mt-2">
                {t('hero.title2')}
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              {t('hero.description')}
            </p>

            {/* Boutons de téléchargement */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg group"
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
                className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg group"
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
            
            <p className="text-sm text-muted-foreground mb-8 text-center md:text-left">
              {t('hero.compatibility')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 pt-8 border-t border-border max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  10+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{t('hero.stats1')}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  50k+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{t('hero.stats2')}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  4.8/5
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{t('hero.stats3')}</div>
              </div>
            </div>
          </motion.div>

          {/* Image mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center order-1 md:order-2"
          >
            <div className="relative flex gap-3 md:gap-4 items-center justify-center max-w-[600px]">
              {/* Premier mockup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex-shrink-0"
              >
                <img 
                  src={heroMockup} 
                  alt="Application Ovúmá - Accueil" 
                  className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] drop-shadow-2xl"
                />
              </motion.div>

              {/* Deuxième mockup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative flex-shrink-0"
              >
                <img 
                  src={heroMockup2} 
                  alt="Application Ovúmá - Détails" 
                  className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] drop-shadow-2xl"
                />
              </motion.div>

              {/* Overlay décoratif */}
              <div className="absolute top-1/4 -right-4 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-1/4 -left-4 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full blur-3xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}