import { Heart, Users, Globe, Target, Award, Zap, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import logo from "figma:asset/189dbb7d9fefdb250ffd1b5b14a8ba3709ee199d.png";
import founderImage from "figma:asset/6850c23ad10a139a5e9a54a59e397bfad2fbcd1e.png";
import founderPhoto from "figma:asset/581adecacb510194b718426d60054c54309cd477.png";

const values = [
  {
    icon: Heart,
    titleKey: "about.values_items.passion.title",
    descriptionKey: "about_page.values_desc.passion",
  },
  {
    icon: Users,
    titleKey: "about.values_items.community.title",
    descriptionKey: "about_page.values_desc.community",
  },
  {
    icon: Globe,
    titleKey: "about.values_items.access.title",
    descriptionKey: "about_page.values_desc.access",
  },
  {
    icon: Target,
    titleKey: "about_page.values_items.excellence.title",
    descriptionKey: "about_page.values_desc.excellence",
  },
  {
    icon: Award,
    titleKey: "about_page.values_items.innovation.title",
    descriptionKey: "about_page.values_desc.innovation",
  },
  {
    icon: Zap,
    titleKey: "about_page.values_items.impact.title",
    descriptionKey: "about_page.values_desc.impact",
  }
];

const stats = [
  { 
    icon: "users",
    value: "5 000+",
    labelKey: "stats.items.learners.label",
    subKey: "stats.items.learners.desc"
  },
  { 
    icon: "book",
    value: "10+",
    labelKey: "stats.items.languages.label",
    subKey: "stats.items.languages.desc"
  },
  { 
    icon: "award",
    value: "15 000+",
    labelKey: "stats.items.lessons.label",
    subKey: "stats.items.lessons.desc"
  },
  { 
    icon: "globe",
    value: "25+",
    labelKey: "stats.items.countries.label",
    subKey: "stats.items.countries.desc"
  }
];

const team = [
  {
    name: "Etoundi Emmanuel",
    roleKey: "about_page.team.members.emmanuel.role",
    image: founderPhoto,
    bioKey: "about_page.team.members.emmanuel.bio"
  }
];

export function AboutPage() {
  const { t } = useTranslation();
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
                {t('about_page.hero.title1')}
                <span className="block text-primary mt-2">{t('about_page.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about_page.hero.description')}
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
                    {t('about_page.history.title')}
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t('about_page.history.p1')}</p>
                    <p>{t('about_page.history.p2')}</p>
                    <p>{t('about_page.history.p3')}</p>
                    <p>{t('about_page.history.p4')}</p>
                    <p>{t('about_page.history.p5')}</p>
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

        {/* Statistiques — cartes avec icônes */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon === 'users' && <Users className="text-primary" size={22} />}
                    {stat.icon === 'book' && <BookOpen className="text-primary" size={22} />}
                    {stat.icon === 'award' && <Award className="text-primary" size={22} />}
                    {stat.icon === 'globe' && <Globe className="text-primary" size={22} />}
                  </div>
                  <div>
                    <div
                      className="text-4xl font-bold text-primary mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-medium text-foreground text-sm mb-1">{t(stat.labelKey)}</div>
                    <div className="text-xs text-muted-foreground">{t(stat.subKey)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                {t('about_page.values.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about_page.values.subtitle')}
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
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(value.descriptionKey)}
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
                {t('about_page.team.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about_page.team.subtitle')}
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
                    <p className="text-primary font-medium mb-3">{t(member.roleKey)}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(member.bioKey)}
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
                {t('about_page.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about_page.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#"
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  {t('about_page.cta.button_download')}
                </a>
                <a 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-background text-foreground border-2 border-primary rounded-full hover:bg-muted transition-all hover:scale-105"
                >
                  {t('about_page.cta.button_contact')}
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