import { ShoppingCart, Clock, Star, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

interface Product {
  id: string;
  name: string;
  category: "Vêtement" | "Livre";
  price: string;
  image: string;
  description: string;
  colors?: string[];
  sizes?: string[];
  badge?: string;
}

const products: Product[] = [
  {
    id: "tshirt-ovuma",
    name: "T-shirt Ovúmá Heritage",
    category: "Vêtement",
    price: "8 500 FCFA",
    image: "https://images.unsplash.com/photo-1615406092575-109dab98bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJpbnQlMjB0LXNoaXJ0JTIwbW9ja3VwfGVufDF8fHx8MTc3NTc0MjA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "T-shirt en coton premium avec motifs africains et logo Ovúmá",
    colors: ["Noir", "Vert", "Blanc", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Populaire"
  },
  {
    id: "sweatshirt-ovuma",
    name: "Sweatshirt Ovúmá Classic",
    category: "Vêtement",
    price: "15 000 FCFA",
    image: "https://images.unsplash.com/photo-1661181402854-8c9408409e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHN3ZWF0c2hpcnQlMjBtb2NrdXB8ZW58MXx8fHwxNzc1NzQyMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sweatshirt confortable avec broderie Ovúmá, parfait pour toutes saisons",
    colors: ["Noir", "Vert foncé", "Gris"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "polo-ovuma",
    name: "Polo Ovúmá Premium",
    category: "Vêtement",
    price: "12 000 FCFA",
    image: "https://images.unsplash.com/photo-1744702590394-5dc0dfe3776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xvJTIwc2hpcnQlMjBncmVlbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzU3NDIwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Polo élégant aux couleurs Ovúmá avec col brodé",
    colors: ["Vert", "Blanc", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "casquette-ovuma",
    name: "Casquette Ovúmá Explorer",
    category: "Vêtement",
    price: "5 500 FCFA",
    image: "https://images.unsplash.com/photo-1691256676359-20e5c6d4bc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGNhcCUyMG1vY2t1cCUyMGJsYWNrfGVufDF8fHx8MTc3NTc0MjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Casquette ajustable avec logo Ovúmá brodé",
    colors: ["Noir", "Vert", "Beige"],
    badge: "Nouveau"
  },
  {
    id: "livre-ewondo",
    name: "Guide d'apprentissage Ewondo",
    category: "Livre",
    price: "7 500 FCFA",
    image: "https://images.unsplash.com/photo-1556713300-38f9ab6dce30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGFuZ3VhZ2UlMjBib29rfGVufDF8fHx8MTc3NTc0MjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Manuel complet pour apprendre l'Ewondo avec exercices et audio",
    badge: "Populaire"
  },
  {
    id: "livre-proverbes",
    name: "Recueil de Proverbes Camerounais",
    category: "Livre",
    price: "6 000 FCFA",
    image: "https://images.unsplash.com/photo-1622555063306-9930f396f051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGVkdWNhdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzc1NzQyMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Collection illustrée de proverbes des 10 régions du Cameroun"
  }
];

export function BoutiquePage() {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      id: "tshirt-ovuma",
      name: t('shop.products_data.tshirt.name'),
      category: "Vêtement",
      price: "8 500 FCFA",
      image: "https://images.unsplash.com/photo-1615406092575-109dab98bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJpbnQlMjB0LXNoaXJ0JTIwbW9ja3VwfGVufDF8fHx8MTc3NTc0MjA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.tshirt.desc'),
      colors: [t('shop.products_data.colors.black'), t('shop.products_data.colors.green'), t('shop.products_data.colors.white'), t('shop.products_data.colors.gold')],
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: t('shop.badges.popular')
    },
    {
      id: "sweatshirt-ovuma",
      name: t('shop.products_data.sweatshirt.name'),
      category: "Vêtement",
      price: "15 000 FCFA",
      image: "https://images.unsplash.com/photo-1661181402854-8c9408409e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHN3ZWF0c2hpcnQlMjBtb2NrdXB8ZW58MXx8fHwxNzc1NzQyMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.sweatshirt.desc'),
      colors: [t('shop.products_data.colors.black'), t('shop.products_data.colors.dark_green'), t('shop.products_data.colors.grey')],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: "polo-ovuma",
      name: t('shop.products_data.polo.name'),
      category: "Vêtement",
      price: "12 000 FCFA",
      image: "https://images.unsplash.com/photo-1744702590394-5dc0dfe3776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xvJTIwc2hpcnQlMjBncmVlbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzU3NDIwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.polo.desc'),
      colors: [t('shop.products_data.colors.green'), t('shop.products_data.colors.white'), t('shop.products_data.colors.black')],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: "casquette-ovuma",
      name: t('shop.products_data.casquette.name'),
      category: "Vêtement",
      price: "5 500 FCFA",
      image: "https://images.unsplash.com/photo-1691256676359-20e5c6d4bc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGNhcCUyMG1vY2t1cCUyMGJsYWNrfGVufDF8fHx8MTc3NTc0MjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.casquette.desc'),
      colors: [t('shop.products_data.colors.black'), t('shop.products_data.colors.green'), t('shop.products_data.colors.beige')],
      badge: t('shop.badges.new')
    },
    {
      id: "livre-ewondo",
      name: t('shop.products_data.livre_ewondo.name'),
      category: "Livre",
      price: "7 500 FCFA",
      image: "https://images.unsplash.com/photo-1556713300-38f9ab6dce30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGFuZ3VhZ2UlMjBib29rfGVufDF8fHx8MTc3NTc0MjA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.livre_ewondo.desc'),
      badge: t('shop.badges.popular')
    },
    {
      id: "livre-proverbes",
      name: t('shop.products_data.livre_proverbes.name'),
      category: "Livre",
      price: "6 000 FCFA",
      image: "https://images.unsplash.com/photo-1622555063306-9930f396f051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGVkdWNhdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzc1NzQyMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: t('shop.products_data.livre_proverbes.desc')
    }
  ];

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
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-accent-foreground font-medium">{t('shop.hero.badge')}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('shop.hero.title1')}
                <span className="block text-primary mt-2">{t('shop.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t('shop.hero.description')}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  <span>{t('shop.hero.features.preorder')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  <span>{t('shop.hero.features.delivery')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-primary" size={20} />
                  <span>{t('shop.hero.features.quality')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bannière Précommande */}
        <section className="py-6 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm md:text-base font-medium">
              {t('shop.banner')}
            </p>
          </div>
        </section>

        {/* Vêtements Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('shop.sections.clothing.title')}
              </h2>
              <p className="text-center text-muted-foreground">
                {t('shop.sections.clothing.subtitle')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.filter(p => p.category === "Vêtement").map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-border">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold shadow-lg">
                        {product.badge}
                      </div>
                    )}

                    {/* Badge Précommande */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <Clock size={12} />
                      {t('shop.product.preorder_badge')}
                    </div>

                    {/* Image */}
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 
                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Couleurs */}
                      {product.colors && (
                        <div className="mb-3">
                          <p className="text-xs text-muted-foreground mb-2">{t('shop.product.colors_label')}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.colors.map((color, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tailles */}
                      {product.sizes && (
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground mb-2">{t('shop.product.sizes_label')}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <p className="text-2xl font-bold text-primary">
                          {product.price}
                        </p>
                        <button className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all hover:scale-110 shadow-lg">
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Livres Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('shop.sections.books.title')}
              </h2>
              <p className="text-center text-muted-foreground">
                {t('shop.sections.books.subtitle')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {products.filter(p => p.category === "Livre").map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-border">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold shadow-lg">
                        {product.badge}
                      </div>
                    )}

                    {/* Badge Précommande */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <Clock size={12} />
                      {t('shop.product.preorder_badge')}
                    </div>

                    {/* Image */}
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 
                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <p className="text-2xl font-bold text-primary">
                          {product.price}
                        </p>
                        <button className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all hover:scale-110 shadow-lg">
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Motif décoratif */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="shop-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M10,5 L15,15 L5,15 Z M45,5 L50,15 L40,15 Z M27,35 L32,45 L22,45 Z" fill="currentColor" />
                      <circle cx="30" cy="10" r="2" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#shop-pattern)" className="text-primary" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('shop.cta.title')}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  {t('shop.cta.description')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-semibold shadow-lg"
                  >
                    {t('shop.cta.contact')}
                  </a>
                  <a 
                    href="#"
                    className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-all hover:scale-105 font-semibold shadow-lg"
                  >
                    {t('shop.cta.size_guide')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={28} />
                </div>
                <h3 className="font-bold mb-2">{t('shop.info.preorder.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('shop.info.preorder.desc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-primary" size={28} />
                </div>
                <h3 className="font-bold mb-2">{t('shop.info.quality.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('shop.info.quality.desc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary" size={28} />
                </div>
                <h3 className="font-bold mb-2">{t('shop.info.delivery.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('shop.info.delivery.desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}