import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Amina Ndiaye",
    role: "Étudiante en sociologie",
    location: "Yaoundé",
    image: "https://images.unsplash.com/photo-1513904989243-829fd07f1725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcm9vbiUyMHlvdW5nJTIwcGVvcGxlJTIwaGFwcHl8ZW58MXx8fHwxNzc1NjY3NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Ovúmá m'a permis de renouer avec mes racines béti. Les leçons sont captivantes et la communauté est incroyablement bienveillante. Je peux enfin parler avec ma grand-mère dans sa langue maternelle !",
    rating: 5,
  },
  {
    name: "Jean-Paul Mbida",
    role: "Entrepreneur",
    location: "Douala",
    image: "https://images.unsplash.com/photo-1770843093640-c44ae557928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc1NjY3NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "En tant que chef d'entreprise, je comprends l'importance de nos langues locales. Ovúmá est l'outil parfait pour les transmettre à mes enfants tout en s'amusant.",
    rating: 5,
  },
  {
    name: "Marie Foko",
    role: "Professeure de français",
    location: "Bamenda",
    image: "https://images.unsplash.com/photo-1633455153917-7651231ad61b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWFydHBob25lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc1NjY3NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "L'approche pédagogique d'Ovúmá est remarquable. Mes élèves adorent apprendre le duala et l'ewondo grâce aux exercices interactifs et aux histoires culturelles.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Motif décoratif */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            className="text-primary"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.4,73.8C27,80.6,11.2,82.6,-4.3,82.1C-19.8,81.6,-35.3,78.6,-48.7,71.8C-62.1,65,-73.4,54.4,-79.8,41.4C-86.2,28.4,-87.7,13.2,-85.6,-1.1C-83.5,-15.4,-77.8,-28.8,-70.3,-41.2C-62.8,-53.6,-53.5,-65,-41.8,-71.9C-30.1,-78.8,-15.1,-81.2,0.5,-82.3C16.1,-83.4,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

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
            <span className="text-primary font-medium">Témoignages</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ils ont transformé
            <span className="block text-primary mt-2">leur vie avec Ovúmá</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez des milliers d'Africains qui redécouvrent et préservent leur héritage linguistique.
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
                "{testimonial.content}"
              </p>

              {/* Profil */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {testimonial.role}
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