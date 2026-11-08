import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInternalLinks } from "../lib/internal-links";
import { SEOHead } from "../components/seo-head";
import { rawPosts, tr, renderBody, capitalize } from "../lib/blog";
import { subscribeNewsletter } from "../lib/newsletter";

export function ArticlePage() {
  const onContentClick = useInternalLinks();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const post = rawPosts.find((p: any) => String(p.id) === id);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-[70vh] pt-40 pb-24 bg-background">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h1 className="text-4xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {t("common.not_found")}
            </h1>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              <ArrowLeft size={16} /> {t("common.back")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const key = `blog.posts_data.post-${post.id}`;
  const article = {
    title: tr(t, i18n, `${key}.title`, post.title),
    excerpt: tr(t, i18n, `${key}.excerpt`, post.excerpt),
    image: post.image,
    author: post.author,
    authorRole: post.authorRole || t("article.author_role_default"),
    date: post.date,
    readTime: t("article.read_time", { time: `${Math.max(2, Math.round(String(post.body ?? "").split(/\s+/).length / 200))} min` }),
    category: capitalize(post.category) || "Culture",
    content: renderBody(tr(t, i18n, `${key}.body`, post.body)),
    authorBio: post.authorBio || t("article.author_bio_default"),
  };

  const url = `https://ovuma.org/blog/${post.id}`;
  const enc = encodeURIComponent;
  const shareLinks = [
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(article.title)}` },
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
  ];
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await subscribeNewsletter(email, `article-${post.id}`);
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <ScrollToTop />
      <SEOHead title={article.title} description={article.excerpt} canonical={`/blog/${post.id}`} ogImage={article.image?.startsWith("http") ? article.image : article.image ? `https://ovuma.org${article.image}` : undefined} />
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
                  <span aria-hidden="true" className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem" }}>{String(article.author || "O").charAt(0)}</span>
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
                {shareLinks.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
                <button type="button" onClick={copyLink} aria-label={t("common.copied")} title={copied ? t("common.copied") : undefined} className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-foreground hover:text-background flex items-center justify-center transition-colors mt-4">
                  <Share2 size={18} />
                </button>
                {copied && <span className="text-xs text-primary">{t("common.copied")}</span>}
              </div>
            </div>

            {/* Contenu principal texte */}
            <div className="lg:col-span-8 pr-0 lg:pr-8">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:font-['var(--font-heading)'] prose-a:text-primary prose-img:rounded-xl prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground"
                onClick={onContentClick}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Partage Mobile */}
              <div className="lg:hidden flex items-center gap-4 mt-12 py-6 border-y border-border">
                <span className="font-semibold">{t('article.share_article')}</span>
                <div className="flex gap-2">
                  {shareLinks.map(({ label, icon: Icon, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Icon size={18} /></a>
                  ))}
                </div>
              </div>
              
              {/* A propos de l'auteur encart */}
              <div className="mt-12 bg-accent/10 border border-accent/20 rounded-3xl p-8 flex flex-col md:flex-row gap-6 mt-16">
                <span aria-hidden="true" className="w-20 h-20 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl" style={{ fontFamily: "var(--font-heading)" }}>{String(article.author || "O").charAt(0)}</span>
                 <div>
                   <h3 className="text-xl font-bold mb-2">{t('article.about_author', { name: article.author })}</h3>
                   <p className="text-muted-foreground leading-relaxed mb-4">{article.authorBio}</p>
                   <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">{t('article.view_all_articles')}</Link>
                 </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Section Newsletter en pied d'article */}
        <section className="container mx-auto px-4 max-w-5xl mt-20">
          <div className="bg-foreground text-background rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{t('article.newsletter.title')}</h2>
               <p className="text-background/80 mb-8 text-lg">{t('article.newsletter.description')}</p>
               <form name="newsletter" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder={t('article.newsletter.placeholder')} className="flex-1 px-6 py-4 rounded-full bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                 <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-secondary hover:text-foreground transition-colors">{t('article.newsletter.button')}</button>
               </form>
               {status !== "idle" && (
                 <p role="status" className="mt-4 text-sm text-background/90">{status === "ok" ? t("common.nl_ok") : t("common.nl_err")}</p>
               )}
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
