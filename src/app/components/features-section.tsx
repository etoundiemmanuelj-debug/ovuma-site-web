import { motion } from "motion/react";
import { Book, Volume2, BookText, Sparkles, Globe, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: Book,
    titleKey: "features.items.dict.title",
    descKey: "features.items.dict.desc",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Volume2,
    titleKey: "features.items.pronunciation.title",
    descKey: "features.items.pronunciation.desc",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    titleKey: "features.items.path.title",
    descKey: "features.items.path.desc",
    color: "bg-secondary/10 text-secondary-foreground",
  },
  {
    icon: BookText,
    titleKey: "features.items.proverbs.title",
    descKey: "features.items.proverbs.desc",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    titleKey: "features.items.tales.title",
    descKey: "features.items.tales.desc",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Trophy,
    titleKey: "features.items.fun.title",
    descKey: "features.items.fun.desc",
    color: "bg-secondary/10 text-secondary-foreground",
  },
];

export function FeaturesSection() {
  const { t } = useTranslation();
  return (
    <section id="fonctionnalites" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">{t('features.badge')}</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('features.title1')}
            <span className="block text-primary mt-2">{t('features.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.description')}
          </p>
        </motion.div>

        {/* Grille de fonctionnalités */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Motif décoratif */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/40"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}