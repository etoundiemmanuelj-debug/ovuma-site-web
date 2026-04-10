import { motion } from "motion/react";
import { Heart, Globe, Users, Target } from "lucide-react";
import mockupLeaderboard from "figma:asset/d522d6e93858b2b31043668e01abde4dfe40dfdc.png";
import mockupDictionary from "figma:asset/8b2261b930b5ae15e1af60a65d1fdd309a02da8e.png";

const values = [
  {
    icon: Heart,
    title: "Passion culturelle",
    description: "Nous croyons que chaque langue est un trésor à préserver pour les générations futures.",
  },
  {
    icon: Globe,
    title: "Accessibilité",
    description: "Rendre l'apprentissage des langues africaines accessible à tous, partout dans le monde.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Créer un espace d'échange et d'entraide entre apprenants et locuteurs natifs.",
  },
  {
    icon: Target,
    title: "Excellence pédagogique",
    description: "Des méthodes d'enseignement innovantes basées sur les recherches en linguistique.",
  },
];

export function AboutSection() {
  return (
    <section id="a-propos" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
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
            <span className="text-primary font-medium">À propos</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Notre mission :
            <span className="block text-primary mt-2">préserver notre héritage</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ovúmá est né d'une conviction : nos langues maternelles ne doivent pas disparaître. 
            Chaque jour, nous travaillons pour que les Africains puissent transmettre leur langue 
            et leur culture à leurs enfants, où qu'ils soient dans le monde.
          </p>
        </motion.div>

        {/* Section image + texte */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img 
              src={mockupDictionary} 
              alt="Dictionnaire Ovúmá"
              className="w-full max-w-[240px] mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Un dictionnaire vivant et illustré
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explorez des milliers de mots avec des illustrations visuelles, des prononciations 
              authentiques par des locuteurs natifs et des exemples d'usage concrets. Chaque mot 
              est une porte ouverte sur notre culture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre dictionnaire grandit chaque jour grâce à la contribution de notre communauté 
              de locuteurs natifs et d'experts linguistes.
            </p>
          </motion.div>
        </div>

        {/* Section 2 - inversée */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Apprenez en vous amusant
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Défiez vos amis, gagnez des points et montez dans le classement ! 
              Notre approche ludique rend l'apprentissage addictif et motivant.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Rejoignez une communauté de plus de 50 000 apprenants passionnés 
              qui progressent ensemble chaque jour.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={mockupLeaderboard} 
              alt="Classement Ovúmá"
              className="w-full max-w-[240px] mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nos valeurs
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}