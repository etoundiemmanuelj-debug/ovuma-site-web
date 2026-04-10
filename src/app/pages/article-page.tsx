import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// On importe les fichiers générés par le CMS (les JSON)
const contentFiles = import.meta.glob("../../content/blog/*.json", { eager: true });
const articlesArray = Object.values(contentFiles).map((file: any) => file.default || file);

export function ArticlePage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const articlesData = articlesArray.reduce((acc: any, post: any) => {
    const postKey = `post-${post.id}`;
    acc[post.id.toString()] = {
      title: t(`blog.posts_data.${postKey}.title`) || post.title,
      excerpt: t(`blog.posts_data.${postKey}.excerpt`) || post.excerpt,
      image: post.image,
      author: post.author,
      authorRole: post.authorRole || t('article.author_role_default'),
      authorImage: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
      date: post.date,
      readTime: t('article.read_time', { time: 5 }),
      category: post.category ? post.category.charAt(0).toUpperCase() + post.category.slice(1) : "Autre",
      content: t(`blog.posts_data.${postKey}.body`) || post.body,
      authorBio: post.authorBio || t('article.author_bio_default')
    };
    return acc;
  }, {} as Record<string, any>);

  const articleId = id && Object.keys(articlesData).includes(id) ? id : "1";
  const article = articlesData[articleId as keyof typeof articlesData];
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(t('article.newsletter.success'));
      setEmail("");
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      
      <main className="min-h-screen pt-20 pb-16 bg-background">
        
        {/* En-tête de l'article */}
        <section className="pt-12 pb-8">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
              <ArrowLeft size={16} /> {t('article.back_to_blog')}
            </Link>
            
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {article.category}
              </span>
              <span className="text-muted-foreground flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-center gap-4 py-6 border-y border-border">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3">
                  <img 
                    src={article.authorImage} 
                    alt={article.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <p className="font-bold text-foreground">{article.author}</p>
                    <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-px h-10 bg-border"></div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>{t('article.published_on', { date: article.date })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image de couverture */}
        <section className="container mx-auto px-4 max-w-5xl mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] bg-muted relative"
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Corps de l'article & Partage */}
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
            
            {/* Colonne latérale de partage (sticky) */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="sticky top-32 flex flex-col items-center gap-4 border border-border p-6 rounded-3xl bg-card shadow-sm">
                <span className="text-sm font-semibold text-muted-foreground mb-2">{t('article.share')}</span>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-foreground hover:text-background flex items-center justify-center transition-all mt-4" title="Copier le lien">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Contenu principal texte */}
            <div className="lg:col-span-8 pr-0 lg:pr-8">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:font-['var(--font-heading)'] prose-a:text-primary prose-img:rounded-xl prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Partage Mobile */}
              <div className="lg:hidden flex items-center gap-4 mt-12 py-6 border-y border-border">
                <span className="font-semibold">{t('article.share_article')}</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Twitter size={18}/></button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Facebook size={18}/></button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Linkedin size={18}/></button>
                </div>
              </div>
              
              {/* A propos de l'auteur encart */}
              <div className="mt-12 bg-accent/10 border border-accent/20 rounded-3xl p-8 flex flex-col md:flex-row gap-6 mt-16">
                <img 
                    src={article.authorImage} 
                    alt={article.author} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
                 />
                 <div>
                   <h3 className="text-xl font-bold mb-2">{t('article.about_author', { name: article.author })}</h3>
                   <p className="text-muted-foreground leading-relaxed mb-4">{article.authorBio}</p>
                   <button className="text-sm font-semibold text-accent hover:underline">{t('article.view_all_articles')} &rarr;</button>
                 </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Section Newsletter en pied d'article */}
        <section className="container mx-auto px-4 max-w-5xl mt-20">
          <div className="bg-foreground text-background rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-10">
               {/* Pattern Africain simplifié */}
               <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="article-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M0,0 L40,40 L0,80 Z" fill="currentColor"/><path d="M80,0 L40,40 L80,80 Z" fill="currentColor" opacity="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#article-pattern)" />
               </svg>
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{t('article.newsletter.title')}</h2>
               <p className="text-background/80 mb-8 text-lg">{t('article.newsletter.description')}</p>
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder={t('article.newsletter.placeholder')} className="flex-1 px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                 <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all">{t('article.newsletter.button')}</button>
               </form>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
