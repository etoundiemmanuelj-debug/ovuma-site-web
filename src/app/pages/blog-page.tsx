import { motion } from "motion/react";
import { SEOHead } from "../components/seo-head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ScrollToTop } from "../components/scroll-to-top";
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const contentFiles = import.meta.glob("../../content/blog/*.json", { eager: true });
export function BlogPage() {
  const { t, i18n } = useTranslation();
  const blogPostsRaw = Object.values(contentFiles).map((file: any) => file.default || file);

  const blogPosts = blogPostsRaw.map((post: any) => {
    const postKey = `post-${post.id}`;
    return {
      id: post.id,
      title: t(`blog.posts_data.${postKey}.title`) || post.title,
      excerpt: t(`blog.posts_data.${postKey}.excerpt`) || post.excerpt,
      image: post.image,
      author: post.author,
      date: post.date,
      readTime: "5 min",
      category: post.category ? post.category.charAt(0).toUpperCase() + post.category.slice(1) : "Autre",
    };
  }).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = [
    { id: "Tous", label: t('blog.categories.all') },
    { id: "Culture", label: t('blog.categories.culture') },
    { id: "Apprentissage", label: t('blog.categories.learning') },
    { id: "Linguistique", label: t('blog.categories.linguistics') }
  ];

  const filteredPosts = selectedCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(t('blog.newsletter.success'));
      setEmail("");
    }
  };

  return (
    <>
      <ScrollToTop />
      <SEOHead
        title="Blog — Culture Beti, Ekang et langues africaines du Cameroun"
        description="Articles, guides et ressources sur la culture Beti et Ekang, les langues africaines (Ewondo, Bassa, Duala), les proverbes traditionnels et le patrimoine linguistique du Cameroun."
        keywords="blog langues africaines, culture beti cameroun, proverbes ewondo, apprendre ewondo en ligne, culture ekang, histoire langue bantoue, linguistique cameroun, conte africain"
        canonical="/blog"
      />
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
                <span className="text-primary font-medium">{t('blog.hero.badge')}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('blog.hero.title1')}
                <span className="block text-primary mt-2">{t('blog.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('blog.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtres par catégorie */}
        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {cat.label}
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
                          <span>{t('blog.post.read_time', { time: 5 })}</span>
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
                          <span>{t('blog.post.read_more')}</span>
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
                {t('blog.newsletter.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('blog.newsletter.description')}
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('blog.newsletter.placeholder')}
                  required
                  className="flex-1 px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                  {t('blog.newsletter.button')}
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                {t('blog.newsletter.spam_notice')}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}