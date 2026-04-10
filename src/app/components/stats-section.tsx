import { motion } from "motion/react";
import { Users, BookOpen, Award, Globe } from "lucide-react";
import { AfricanPatternBg } from "./african-pattern-bg";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    labelKey: "stats.items.learners.label",
    descriptionKey: "stats.items.learners.desc",
  },
  {
    icon: BookOpen,
    value: "10+",
    labelKey: "stats.items.languages.label",
    descriptionKey: "stats.items.languages.desc",
  },
  {
    icon: Award,
    value: "15,000+",
    labelKey: "stats.items.lessons.label",
    descriptionKey: "stats.items.lessons.desc",
  },
  {
    icon: Globe,
    value: "25+",
    labelKey: "stats.items.countries.label",
    descriptionKey: "stats.items.countries.desc",
  },
];

import { useTranslation } from "react-i18next";

export function StatsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <AfricanPatternBg variant="mixed" opacity={0.08} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">{t('stats.badge')}</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('stats.title1')}
            <span className="block text-primary mt-2">{t('stats.title2')}</span>
          </h2>
        </motion.div>

        {/* Grille de statistiques */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-border text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={32} className="text-primary" />
                </div>
                <div 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t(stat.labelKey)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(stat.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Citation inspirante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <blockquote 
                className="text-xl md:text-2xl font-medium mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('stats.quote')}
              </blockquote>
              <p className="text-muted-foreground italic">
                — {t('stats.quote_author')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}