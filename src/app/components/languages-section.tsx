import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const languages = [
  {
    name: "Ewondo",
    region: "Centre, Cameroun",
    level: "Débutant à Avancé",
    popular: true,
    available: true,
  },
  {
    name: "Duala",
    region: "Littoral, Cameroun",
    level: "Débutant à Avancé",
    popular: true,
    available: false,
  },
  {
    name: "Bassa",
    region: "Centre & Littoral, Cameroun",
    level: "Débutant à Intermédiaire",
    popular: false,
    available: false,
  },
  {
    name: "Fe'e fe'",
    region: "Ouest, Cameroun",
    level: "Débutant à Intermédiaire",
    popular: false,
    available: false,
  },
  {
    name: "Fulfulde",
    region: "Nord, Cameroun",
    level: "Débutant",
    popular: false,
    available: false,
  },
  {
    name: "Búlu",
    region: "Centre & Sud, Cameroun",
    level: "Débutant à Intermédiaire",
    popular: false,
    available: false,
  },
];

export function LanguagesSection() {
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
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent-foreground font-medium">Nos langues</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Découvrez la richesse
            <span className="block text-primary mt-2">linguistique de l'Afrique</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plus de 10 langues disponibles, avec de nouveaux cours ajoutés régulièrement.
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
              className="relative bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-border group"
            >
              {/* Badge populaire */}
              {language.popular && (
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Populaire
                </div>
              )}

              {/* Badge à venir */}
              {!language.available && (
                <div className="absolute -top-3 -right-3 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-border">
                  À venir
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
                  <span className="text-base">🗺️</span>
                  <span>Région : {language.region}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-base">📚</span>
                  <span>{language.level}</span>
                </div>
              </div>

              {/* Inclus */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Cours audio, exercices interactifs, culture & traditions
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
            ... et plus encore !
          </p>
          <a 
            href="#"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all hover:scale-105 font-semibold shadow-lg"
          >
            📱 Télécharger l'app
          </a>
        </motion.div>
      </div>
    </section>
  );
}