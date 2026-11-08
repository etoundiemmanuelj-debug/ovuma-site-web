import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Amina Ndiaye",
    roleKey: "testimonials.items.1.role",
    location: "Yaoundé",
    contentKey: "testimonials.items.1.content",
    rating: 5,
  },
  {
    name: "Jean-Paul Mbida",
    roleKey: "testimonials.items.2.role",
    location: "Douala",
    contentKey: "testimonials.items.2.content",
    rating: 5,
  },
  {
    name: "Marie Foko",
    roleKey: "testimonials.items.3.role",
    location: "Bamenda",
    contentKey: "testimonials.items.3.content",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section id="temoignages" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="ovm-kicker mb-4">
            <span className="text-primary font-medium">{t('testimonials.badge')}</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('testimonials.title1')}
            <span className="block text-primary mt-2">{t('testimonials.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border relative"
            >
              {/* Icône citation */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="text-primary" size={20} />
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>

              {/* Contenu */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{t(testimonial.contentKey)}"
              </p>

              {/* Profil */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div aria-hidden="true" className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {testimonial.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {t(testimonial.roleKey)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}