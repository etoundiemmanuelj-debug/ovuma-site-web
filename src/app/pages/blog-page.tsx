import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ScrollToTop } from "../components/scroll-to-top";
import { useState } from "react";
import { Link } from "react-router";

const contentFiles = import.meta.glob("../../content/blog/*.json", { eager: true });
const blogPostsRaw = Object.values(contentFiles).map((file: any) => file.default || file);
const blogPosts = blogPostsRaw.map((post: any) => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  image: post.image,
  author: post.author,
  date: post.date,
  readTime: "5 min", // Estimé par défaut
  category: post.category ? post.category.charAt(0).toUpperCase() + post.category.slice(1) : "Autre",
})).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

const categories = ["Tous", "Culture", "Apprentissage", "Linguistique"];

export function BlogPage() {
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts = selectedCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Merci pour votre inscription à la newsletter !");
      setEmail("");
    }
  };

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
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-medium">📚 Blog Ovúmá</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Explorez notre
                <span className="block text-primary mt-2">univers linguistique</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Découvrez des articles, guides et témoignages sur les langues africaines, 
                la culture et l'apprentissage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtres par catégorie */}
        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles de blog */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 
                        className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {post.title}
                      </h3>

                      {/* Extrait */}
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                          <span>Lire</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors">
                →
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Restez informé
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Recevez nos derniers articles et actualités directement dans votre boîte mail.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="flex-1 px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                  S'abonner
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                Pas de spam. Désinscription à tout moment.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}