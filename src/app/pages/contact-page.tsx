import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire (à implémenter avec backend)
    console.log("Form submitted:", formData);
    alert(t('contact_page.form.success_alert'));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                <span className="text-primary font-medium">{t('contact_page.hero.badge')}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('contact_page.hero.title1')}
                <span className="block text-primary mt-2">{t('contact_page.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('contact_page.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t('contact_page.info.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {t('contact_page.info.description')}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:contact@ovuma.org"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@ovuma.org
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('contact_page.info.email_subtitle')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('footer.contact')}</h3>
                      <a 
                        href="tel:+237697765352"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +237 697 765 352
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('contact_page.info.phone_subtitle')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t('contact_page.info.hours.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact_page.info.hours.week')}
                      </p>
                      <p className="text-muted-foreground">
                        {t('contact_page.info.hours.sat')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t('contact_page.info.hours.sun')}
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                    <h3 className="font-bold mb-2 text-accent-foreground">
                      {t('contact_page.info.urgent.title')}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t('contact_page.info.urgent.text')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire de contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t('contact_page.form.title')}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact_page.form.name_label')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('contact_page.form.name_placeholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact_page.form.email_label')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={t('contact_page.form.email_placeholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t('contact_page.form.subject_label')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">{t('contact_page.form.subject_placeholder')}</option>
                        <option value="support">{t('contact_page.form.subjects.support')}</option>
                        <option value="subscription">{t('contact_page.form.subjects.subscription')}</option>
                        <option value="content">{t('contact_page.form.subjects.content')}</option>
                        <option value="partnership">{t('contact_page.form.subjects.partnership')}</option>
                        <option value="other">{t('contact_page.form.subjects.other')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact_page.form.message_label')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder={t('contact_page.form.message_placeholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg font-medium flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      {t('contact_page.form.submit')}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t('contact_page.form.privacy_notice')}
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('contact_page.faq_cta.title')}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('contact_page.faq_cta.description')}
              </p>
              <Link 
                to="/faq"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                {t('contact_page.faq_cta.button')}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
