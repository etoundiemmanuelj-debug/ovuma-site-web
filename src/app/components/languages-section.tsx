import { motion } from "motion/react";
import { CheckCircle2, MapPin, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StoreButtons } from "./store-buttons";

const languages = [
  {
    name: "Ewondo",
    regionKey: "languages.items.ewondo.region",
    levelKey: "languages.items.ewondo.level",
    popular: true,
    available: true,
  },
  {
    name: "Duala",
    regionKey: "languages.items.duala.region",
    levelKey: "languages.items.duala.level",
    popular: true,
    available: false,
  },
  {
    name: "Bassa",
    regionKey: "languages.items.bassa.region",
    levelKey: "languages.items.bassa.level",
    popular: false,
    available: false,
  },
  {
    name: "Fe'e fe'",
    regionKey: "languages.items.feefe.region",
    levelKey: "languages.items.feefe.level",
    popular: false,
    available: false,
  },
  {
    name: "Fulfulde",
    regionKey: "languages.items.fulfulde.region",
    levelKey: "languages.items.fulfulde.level",
    popular: false,
    available: false,
  },
  {
    name: "Búlu",
    regionKey: "languages.items.bulu.region",
    levelKey: "languages.items.bulu.level",
    popular: false,
    available: false,
  },
];

export function LanguagesSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Fond avec motifs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="ovm-kicker mb-4">
            <span className="text-accent-foreground font-medium">{t('languages.badge')}</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('languages.title1')}
            <span className="block text-primary mt-2">{t('languages.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('languages.description')}
          </p>
        </motion.div>

        {/* Grille de langues */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 transition-colors hover:border-primary/40 border border-border group"
            >
              {/* Badge populaire */}
              {language.popular && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {t('languages.popular_badge')}
                </div>
              )}

              {/* Badge à venir */}
              {!language.available && (
                <div className="absolute -top-3 -right-3 bg-background text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold border border-border">
                  {t('languages.coming_soon_badge')}
                </div>
              )}

              {/* Nom de la langue */}
              <h3 
                className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {language.name}
              </h3>

              {/* Détails */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={15} className="text-accent" aria-hidden="true" />
                  <span>{t('languages.region_label')} {t(language.regionKey)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen size={15} className="text-accent" aria-hidden="true" />
                  <span>{t(language.levelKey)}</span>
                </div>
              </div>

              {/* Inclus */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {t('languages.included_features')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texte additionnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            {t('languages.bottom_text')}
          </p>
          <StoreButtons className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}