import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function ContactPage() {
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
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
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
                <span className="text-primary font-medium">✉️ Contactez-nous</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Nous sommes là
                <span className="block text-primary mt-2">pour vous aider</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Une question ? Une suggestion ? Notre équipe est à votre écoute et 
                vous répond dans les 24 heures.
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
                    Nos coordonnées
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    N'hésitez pas à nous contacter par le moyen qui vous convient le mieux. 
                    Nous sommes ravis d'échanger avec vous !
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
                        href="mailto:contact@ovuma.cm"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@ovuma.cm
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pour toute question générale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a 
                        href="tel:+237600000000"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +237 6 00 00 00 00
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lun-Ven, 9h-18h (GMT+1)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Yaoundé, Cameroun
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quartier Bastos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 9h - 18h
                      </p>
                      <p className="text-muted-foreground">
                        Samedi : 10h - 14h
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fermé le dimanche
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support urgent */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-bold mb-2 text-accent-foreground">
                    Besoin d'aide urgente ?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pour un support technique urgent, consultez notre{" "}
                    <Link to="/faq" className="text-primary hover:underline">
                      FAQ
                    </Link>
                    {" "}ou contactez-nous directement via l'application.
                  </p>
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
                    Envoyez-nous un message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="support">Support technique</option>
                        <option value="subscription">Question sur l'abonnement</option>
                        <option value="content">Suggestion de contenu</option>
                        <option value="partnership">Partenariat</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg font-medium flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Envoyer le message
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez notre{" "}
                      <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                        politique de confidentialité
                      </Link>
                      .
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
                Vous cherchez une réponse rapide ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Consultez notre FAQ pour trouver rapidement des réponses aux questions les plus courantes.
              </p>
              <Link 
                to="/faq"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                Voir la FAQ
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
