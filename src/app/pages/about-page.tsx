import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Globe, Target, Award, Zap } from "lucide-react";
import logo from "figma:asset/189dbb7d9fefdb250ffd1b5b14a8ba3709ee199d.png";
import founderImage from "figma:asset/6850c23ad10a139a5e9a54a59e397bfad2fbcd1e.png";
import founderPhoto from "figma:asset/581adecacb510194b718426d60054c54309cd477.png";

const values = [
  {
    icon: Heart,
    title: "Passion culturelle",
    description: "Nous croyons profondément en la richesse de nos langues et cultures camerounaises."
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Nous construisons une communauté d'apprenants unis par l'amour de nos racines."
  },
  {
    icon: Globe,
    title: "Accessibilité",
    description: "Rendre l'apprentissage des langues africaines accessible à tous, partout."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Des contenus de qualité validés par des locuteurs natifs et linguistes experts."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Utiliser la technologie pour préserver et transmettre notre patrimoine linguistique."
  },
  {
    icon: Zap,
    title: "Impact",
    description: "Contribuer activement à la préservation des langues africaines pour les générations futures."
  }
];

const stats = [
  { value: "50 000+", label: "Utilisateurs actifs" },
  { value: "8", label: "Langues disponibles" },
  { value: "15 000+", label: "Leçons complétées/jour" },
  { value: "4.8/5", label: "Note moyenne" }
];

const team = [
  {
    name: "Etoundi Emmanuel",
    role: "Fondateur & CEO",
    image: founderPhoto,
    bio: "Professionnel du digital passionné par la valorisation des cultures et usages locaux. Initiateur d'Ovúmá, projet à la croisée de la technologie, de la pédagogie et de l'identité culturelle africaine."
  }
];

export function AboutPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-center mb-8">
                <img src={logo} alt="Ovúmá Logo" className="w-32 h-32 md:w-40 md:h-40" />
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Préserver notre héritage,
                <span className="block text-primary mt-2">un mot à la fois</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ovúmá est née d'une passion profonde pour les langues africaines et d'une vision : 
                utiliser la technologie pour préserver et transmettre notre riche patrimoine linguistique 
                aux générations futures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center mb-16"
              >
                <div>
                  <h2 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Notre histoire
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Tout a commencé par une conviction forte : celle que la richesse linguistique de l'Afrique ne doit pas disparaître, mais être réinventée.
                    </p>
                    <p>
                      En tant que professionnel du digital, engagé dans la valorisation des cultures et des usages locaux, j'ai été confronté à une réalité préoccupante : une génération entière, notamment dans la diaspora, se déconnecte progressivement de ses langues maternelles.
                    </p>
                    <p>
                      Face à ce constat, j'ai initié Ovúmá, un projet à la croisée de la technologie, de la pédagogie et de l'identité culturelle. Linguistes et locuteurs natif doublé de talents tech, j'ai conçu une solution innovante : une application mobile qui rend l'apprentissage des langues africaines accessible, moderne et engageant.
                    </p>
                    <p>
                      Pensée comme une véritable expérience utilisateur, Ovúmá combine contenus structurés, immersion culturelle et approche intuitive, dans la continuité de mon engagement pour des produits digitaux utiles, impactants et bien conçus.
                    </p>
                    <p>
                      Aujourd'hui, Ovúmá s'inscrit comme une plateforme en croissance, portée par une vision claire : reconnecter les africains à leurs racines et valoriser, à grande échelle, le patrimoine linguistique de l'afrique.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Fondateur d'Ovúmá"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Nos valeurs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre mission au quotidien
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Notre équipe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des passionnés au service des langues et des cultures africaines
              </p>
            </motion.div>

            <div className="flex justify-center max-w-sm mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow w-full"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Rejoignez notre mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ensemble, préservons et transmettons la richesse de nos langues africaines. 
                Téléchargez Ovúmá et commencez votre voyage linguistique dès aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  Télécharger l'application
                </a>
                <a 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-background text-foreground border-2 border-primary rounded-full hover:bg-muted transition-all hover:scale-105"
                >
                  Nous contacter
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}