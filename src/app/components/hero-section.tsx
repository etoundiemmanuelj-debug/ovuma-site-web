import { motion, useReducedMotion } from "motion/react";
import heroMockup from "figma:asset/c41a0fb54b9770faeb99fe21753bf67eb0dbfedd.webp";
import heroMockup2 from "figma:asset/4b96ede67dc3e538af5080f5fc15659af77cea85.webp";
import { useTranslation } from "react-i18next";
import { StoreButtons } from "./store-buttons";

export function HeroSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="ovm-hero-bg relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Texte */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.p {...rise(0)} className="ovm-kicker mb-6">
              {t("hero.badge")}
            </motion.p>

            <motion.h1
              {...rise(0.1)}
              className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-semibold mb-7 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("hero.title1")} {t("hero.title2")}
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-9 max-w-[34rem] mx-auto md:mx-0 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div {...rise(0.3)}>
              <StoreButtons className="justify-center md:justify-start" />
              <p className="text-sm text-muted-foreground mt-4">{t("hero.compatibility")}</p>
            </motion.div>
          </div>

          {/* Captures de l'application */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex justify-center order-1 md:order-2"
          >
            <div className="relative flex items-end justify-center">
              <img
                src={heroMockup}
                alt={t("hero.title1")}
                width={593}
                height={1200}
                className="w-[150px] sm:w-[200px] lg:w-[250px] -rotate-3 translate-y-6 drop-shadow-[0_30px_40px_rgba(18,61,43,0.25)]"
              />
              <img
                src={heroMockup2}
                alt="Ovúmá - fiche de vocabulaire en Ewondo"
                width={600}
                height={1187}
                className="w-[150px] sm:w-[200px] lg:w-[250px] rotate-3 -ml-6 lg:-ml-8 drop-shadow-[0_30px_40px_rgba(18,61,43,0.25)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
