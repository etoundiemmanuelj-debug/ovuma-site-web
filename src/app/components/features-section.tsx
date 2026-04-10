import { motion } from "motion/react";
import { Book, Volume2, BookText, Sparkles, Globe, Trophy } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Dictionnaire illustré",
    description: "Des milliers de mots avec illustrations visuelles et prononciations authentiques par des locuteurs natifs.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Volume2,
    title: "Prononciation authentique",
    description: "Écoutez et pratiquez avec des enregistrements de locuteurs natifs pour perfectionner votre accent.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Parcours d'apprentissage",
    description: "Des leçons structurées et progressives adaptées à votre niveau, du débutant à l'avancé.",
    color: "bg-secondary/10 text-secondary-foreground",
  },
  {
    icon: BookText,
    title: "Proverbes & sagesse",
    description: "Découvrez les proverbes traditionnels qui transmettent la sagesse ancestrale de nos cultures.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Contes traditionnels",
    description: "Plongez dans les histoires et contes qui font la richesse de notre patrimoine oral.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Trophy,
    title: "Apprentissage ludique",
    description: "Progressez en jouant ! Collectez des points, débloquez des badges et relevez des défis.",
    color: "bg-secondary/10 text-secondary-foreground",
  },
];

export function FeaturesSection() {
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
            <span className="text-primary font-medium">Fonctionnalités</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tout ce dont vous avez besoin
            <span className="block text-primary mt-2">pour réussir</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme complète pensée pour rendre l'apprentissage des langues africaines accessible et passionnant.
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
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
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