import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

const faqData = [
  {
    category: "Général",
    questions: [
      {
        id: "q1",
        question: "Qu'est-ce qu'Ovúmá ?",
        answer: "Ovúmá est la première plateforme mobile d'apprentissage des langues africaines. Notre mission est de préserver et promouvoir les langues locales comme l'ewondo, le duala, le bassa, le bamiléké et bien d'autres, en rendant leur apprentissage accessible, ludique et efficace."
      },
      {
        id: "q2",
        question: "Quelles langues puis-je apprendre avec Ovúmá ?",
        answer: "Actuellement, Ovúmá propose l'apprentissage de plusieurs langues africaines majeures : ewondo, duala, bassa, bamiléké (variantes fe'fe', ghomala', medumba), fulfulde, beti, et basaa. Nous ajoutons régulièrement de nouvelles langues basées sur la demande de notre communauté."
      },
      {
        id: "q3",
        question: "L'application est-elle disponible sur iOS et Android ?",
        answer: "Oui ! Ovúmá est disponible gratuitement sur l'App Store (iOS) et Google Play (Android). Vous pouvez télécharger l'application et commencer à apprendre immédiatement."
      },
      {
        id: "q4",
        question: "Dois-je avoir des connaissances préalables pour commencer ?",
        answer: "Absolument pas ! Ovúmá est conçu pour tous les niveaux, du débutant complet au niveau avancé. Notre système adapte les leçons à votre niveau et à votre rythme d'apprentissage."
      }
    ]
  },
  {
    category: "Fonctionnalités",
    questions: [
      {
        id: "q5",
        question: "Comment fonctionne l'apprentissage sur Ovúmá ?",
        answer: "Notre méthode combine plusieurs approches pédagogiques : leçons interactives avec audio natif, exercices de prononciation avec reconnaissance vocale, quiz ludiques, conversations simulées, et révisions espacées pour mémoriser durablement. Chaque leçon dure 5-10 minutes pour s'adapter à votre emploi du temps."
      },
      {
        id: "q6",
        question: "Puis-je apprendre plusieurs langues en même temps ?",
        answer: "Oui ! Avec un abonnement Premium, vous pouvez apprendre autant de langues africaines que vous le souhaitez simultanément. Nous recommandons toutefois de se concentrer sur une ou deux langues à la fois pour de meilleurs résultats."
      },
      {
        id: "q7",
        question: "L'application fonctionne-t-elle hors ligne ?",
        answer: "Oui, une fois que vous avez téléchargé les leçons, vous pouvez apprendre hors ligne. Vos progrès seront synchronisés automatiquement dès que vous vous reconnecterez à Internet."
      },
      {
        id: "q8",
        question: "Y a-t-il un système de suivi de progression ?",
        answer: "Absolument ! Ovúmá suit votre progression en temps réel avec des statistiques détaillées : mots appris, leçons complétées, série de jours consécutifs, pourcentage de maîtrise par compétence, et bien plus encore."
      }
    ]
  },
  {
    category: "Abonnement et paiement",
    questions: [
      {
        id: "q9",
        question: "L'application est-elle gratuite ?",
        answer: "Ovúmá propose une version gratuite avec accès aux leçons de base. Pour débloquer l'ensemble du contenu, les exercices avancés, l'apprentissage hors ligne et retirer les publicités, vous pouvez souscrire à Ovúmá Premium à partir de 2 500 FCFA/mois."
      },
      {
        id: "q10",
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Vous pouvez payer via les plateformes App Store (Apple Pay, cartes bancaires) ou Google Play (cartes bancaires, Mobile Money selon votre région). Les abonnements se renouvellent automatiquement."
      },
      {
        id: "q11",
        question: "Puis-je annuler mon abonnement à tout moment ?",
        answer: "Oui, vous pouvez annuler votre abonnement Premium à tout moment via les paramètres de votre compte App Store ou Google Play. Vous continuerez à bénéficier des avantages Premium jusqu'à la fin de la période payée."
      },
      {
        id: "q12",
        question: "Proposez-vous des réductions pour les étudiants ?",
        answer: "Oui ! Nous offrons une réduction de 30% pour les étudiants sur présentation d'une carte étudiante valide. Contactez notre support à contact@ovuma.cm avec votre justificatif."
      }
    ]
  },
  {
    category: "Technique",
    questions: [
      {
        id: "q13",
        question: "Quelles sont les configurations minimales requises ?",
        answer: "Pour iOS : iPhone avec iOS 13.0 ou version ultérieure. Pour Android : appareil avec Android 6.0 (Marshmallow) ou version ultérieure. L'application nécessite environ 150 Mo d'espace de stockage."
      },
      {
        id: "q14",
        question: "Pourquoi la reconnaissance vocale ne fonctionne pas ?",
        answer: "Assurez-vous d'avoir autorisé l'accès au microphone dans les paramètres de votre appareil. Si le problème persiste, vérifiez que vous êtes dans un environnement calme et que votre microphone fonctionne correctement."
      },
      {
        id: "q15",
        question: "Mes progrès sont-ils sauvegardés si je change d'appareil ?",
        answer: "Oui ! Tous vos progrès sont sauvegardés dans le cloud et synchronisés automatiquement. Vous pouvez vous connecter avec le même compte sur plusieurs appareils et retrouver votre progression partout."
      },
      {
        id: "q16",
        question: "Comment mettre à jour l'application ?",
        answer: "Les mises à jour sont disponibles via l'App Store ou Google Play. Nous recommandons d'activer les mises à jour automatiques pour profiter des dernières fonctionnalités et corrections."
      }
    ]
  },
  {
    category: "Pédagogie",
    questions: [
      {
        id: "q17",
        question: "Combien de temps faut-il pour devenir conversationnel ?",
        answer: "Avec une pratique régulière de 15-20 minutes par jour, vous pouvez tenir des conversations de base en 3-6 mois. La fluidité conversationnelle nécessite généralement 6-12 mois de pratique assidue."
      },
      {
        id: "q18",
        question: "Les locuteurs natifs valident-ils vos contenus ?",
        answer: "Absolument ! Tous nos contenus sont créés et validés par des locuteurs natifs et des linguistes experts de chaque langue. Nous collaborons étroitement avec des communautés linguistiques pour garantir l'authenticité."
      },
      {
        id: "q19",
        question: "Proposez-vous des cours pour enfants ?",
        answer: "Oui ! Nous avons un mode spécial 'Enfants' avec des contenus adaptés, des personnages animés et des jeux éducatifs pour les 6-12 ans. C'est un excellent moyen de transmettre nos langues aux nouvelles générations."
      },
      {
        id: "q20",
        question: "Puis-je obtenir un certificat de compétence ?",
        answer: "Nous travaillons actuellement sur un système de certification officielle. En attendant, vous pouvez partager vos badges de réussite et statistiques de progression sur vos réseaux sociaux."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={false}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          {isOpen ? (
            <Minus size={16} className="text-primary" />
          ) : (
            <Plus size={16} className="text-primary" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQPage() {
  const { t } = useTranslation();
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const faqCategories = t('faq.categories', { returnObjects: true }) as any[];

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev =>
      prev.includes(id)
        ? prev.filter(q => q !== id)
        : [...prev, id]
    );
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
                <span className="text-primary font-medium">{t('faq.hero.badge')}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('faq.hero.title1')}
                <span className="block text-primary mt-2">{t('faq.hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('faq.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item: any) => (
                      <FAQItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openQuestions.includes(item.id)}
                        onToggle={() => toggleQuestion(item.id)}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                {t('faq.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('faq.cta.description')}
              </p>
              <a 
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                {t('faq.cta.button')}
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}