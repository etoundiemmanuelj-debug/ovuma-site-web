import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { motion } from "motion/react";

export function PolitiqueConfidentialitePage() {
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
              className="max-w-4xl mx-auto"
            >
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Politique de Confidentialité
              </h1>
              <p className="text-lg text-muted-foreground">
                Dernière mise à jour : 9 avril 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto prose prose-lg"
            >
              <div className="text-foreground">
                <p><strong>Ovúmá — Application mobile d'apprentissage des langues africaines</strong></p>
                <p>Date d'entrée en vigueur : 8 avril 2026<br />Dernière mise à jour : 8 avril 2026</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>1. Préambule</h2>
                <p>La présente Politique de Confidentialité décrit la manière dont Ovúmá (« nous », « notre », « nos ») collecte, utilise, conserve, partage et protège les données à caractère personnel des utilisateurs (« vous », « votre ») de l'application mobile Ovúmá et du site web associé (ci-après collectivement désignés comme « les Services »).</p>
                <p>Ovúmá est une application EdTech dont la mission est la préservation, la valorisation et l'enseignement des langues africaines. Nous accordons une importance fondamentale au respect de votre vie privée et à la protection de vos données personnelles, dans le respect de la dignité culturelle qui est au cœur de notre projet.</p>
                <p>En utilisant nos Services, vous reconnaissez avoir lu, compris et accepté les pratiques décrites dans la présente Politique. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser nos Services.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>2. Cadre juridique applicable</h2>
                <p>La présente Politique est établie dans le respect des textes suivants :</p>
                <ul>
                  <li>La loi camerounaise n°2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité ;</li>
                  <li>La loi camerounaise n°2010/013 du 21 décembre 2010 régissant les communications électroniques au Cameroun ;</li>
                  <li>Le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel (Règlement Général sur la Protection des Données — RGPD), pour les utilisateurs résidant dans l'Union européenne ;</li>
                  <li>La Convention de l'Union africaine sur la cybersécurité et la protection des données à caractère personnel (Convention de Malabo, 2014) ;</li>
                  <li>Les principes internationaux de protection de la vie privée applicables dans les autres juridictions où nos Services sont accessibles.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>3. Identité et coordonnées du responsable du traitement</h2>
                <p>Le responsable du traitement des données collectées via les Services est :</p>
                <ul>
                  <li><strong>Nom du projet :</strong> Ovúmá</li>
                  <li><strong>Fondateur et responsable :</strong> Emmanuel Etoundi</li>
                  <li><strong>Adresse :</strong> Douala, République du Cameroun</li>
                  <li><strong>Adresse électronique de contact :</strong> contact@ovuma.app</li>
                </ul>
                <p>Pour toute question relative à la présente Politique ou à l'exercice de vos droits, vous pouvez nous contacter à l'adresse électronique mentionnée ci-dessus.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>4. Données personnelles collectées</h2>
                <p>Nous collectons uniquement les données strictement nécessaires au fonctionnement et à l'amélioration de nos Services. Les catégories de données collectées sont les suivantes :</p>

                <h3>4.1 Données d'identification du compte</h3>
                <ul>
                  <li>Adresse électronique</li>
                  <li>Nom et/ou pseudonyme</li>
                  <li>Mot de passe (stocké sous forme chiffrée et non lisible)</li>
                  <li>Photo de profil (facultative)</li>
                </ul>

                <h3>4.2 Données démographiques</h3>
                <ul>
                  <li>Tranche d'âge ou date de naissance</li>
                  <li>Pays et ville de résidence</li>
                  <li>Langue maternelle et langue(s) parlée(s)</li>
                  <li>Niveau de connaissance déclaré des langues africaines</li>
                </ul>
                <p>Ces données nous permettent d'adapter le contenu pédagogique à votre profil et de mieux comprendre la communauté de locuteurs et d'apprenants que nous servons.</p>

                <h3>4.3 Données d'usage et statistiques d'apprentissage</h3>
                <ul>
                  <li>Identifiant unique d'appareil</li>
                  <li>Données de connexion (dates, durées, fréquence d'utilisation)</li>
                  <li>Progression dans les leçons et modules</li>
                  <li>Historique des écoutes audio et des contenus consultés</li>
                  <li>Recherches effectuées dans le dictionnaire</li>
                  <li>Réponses aux exercices et résultats des évaluations</li>
                  <li>Statistiques d'engagement (DAU, rétention, taux de complétion)</li>
                </ul>

                <h3>4.4 Données techniques</h3>
                <ul>
                  <li>Modèle et système d'exploitation de l'appareil</li>
                  <li>Version de l'application installée</li>
                  <li>Adresse IP (collectée temporairement à des fins de sécurité)</li>
                  <li>Données de diagnostic et rapports d'erreurs anonymisés</li>
                </ul>

                <h3>4.5 Données relatives aux abonnements et paiements</h3>
                <p>Pour les utilisateurs souscrivant à un abonnement Plus (3 000 XAF/mois) ou Premium (25 000 XAF/an), nous collectons :</p>
                <ul>
                  <li>Type d'abonnement souscrit</li>
                  <li>Date de souscription, de renouvellement et d'expiration</li>
                  <li>Historique des paiements et des factures</li>
                </ul>
                <p><strong>Important :</strong> nous ne stockons jamais vos données bancaires complètes (numéro de carte, CVV, etc.). Ces informations sont traitées exclusivement par notre prestataire de paiement Stripe, qui est certifié PCI-DSS niveau 1. Nous recevons uniquement un jeton de transaction et les quatre derniers chiffres de la carte à des fins d'identification.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>5. Bases légales du traitement</h2>
                <p>Conformément au RGPD et aux principes internationaux de protection des données, chaque traitement que nous effectuons repose sur l'une des bases légales suivantes :</p>
                <ul>
                  <li><strong>L'exécution d'un contrat :</strong> pour la création et la gestion de votre compte, ainsi que pour la fourniture des fonctionnalités de l'application ;</li>
                  <li><strong>Votre consentement :</strong> pour la collecte des données démographiques facultatives, l'envoi de communications marketing, et l'utilisation de cookies non essentiels ;</li>
                  <li><strong>Notre intérêt légitime :</strong> pour l'amélioration de nos Services, la sécurité de la plateforme, la prévention de la fraude et l'analyse statistique anonymisée ;</li>
                  <li><strong>Le respect d'obligations légales :</strong> pour la conservation des factures, la lutte contre le blanchiment et la coopération avec les autorités compétentes lorsque la loi l'exige.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>6. Finalités du traitement</h2>
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul>
                  <li>Créer, administrer et sécuriser votre compte utilisateur ;</li>
                  <li>Fournir un parcours d'apprentissage personnalisé et adapté à votre niveau ;</li>
                  <li>Mesurer votre progression et vous proposer des contenus pertinents ;</li>
                  <li>Gérer les abonnements payants, les paiements et la facturation ;</li>
                  <li>Améliorer continuellement nos Services et développer de nouvelles fonctionnalités ;</li>
                  <li>Assurer la sécurité technique de la plateforme et prévenir les abus ;</li>
                  <li>Communiquer avec vous au sujet de votre compte, des mises à jour et, avec votre consentement, de nos actualités ;</li>
                  <li>Produire des statistiques agrégées et anonymisées à des fins de recherche académique sur la valorisation des langues africaines ;</li>
                  <li>Respecter nos obligations légales et réglementaires.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>7. Partage des données avec des tiers</h2>
                <p>Nous ne vendons jamais vos données personnelles. Nous ne les partageons qu'avec un nombre limité de prestataires de confiance, strictement nécessaires au fonctionnement de nos Services :</p>
                
                <h3>7.1 Hébergement et infrastructure technique</h3>
                <ul>
                  <li><strong>Vercel Inc. (États-Unis) :</strong> hébergement du site web vitrine et des fonctions serveur ;</li>
                  <li><strong>Neon (États-Unis) :</strong> hébergement de la base de données PostgreSQL contenant les comptes utilisateurs et les données d'usage ;</li>
                  <li><strong>Vercel Blob :</strong> stockage des fichiers audio des leçons et du dictionnaire.</li>
                </ul>

                <h3>7.2 Traitement des paiements</h3>
                <ul>
                  <li><strong>Stripe Inc. (États-Unis) :</strong> traitement sécurisé des transactions liées aux abonnements Plus et Premium.</li>
                </ul>
                <p>Chacun de ces prestataires est lié par un accord de traitement de données conforme aux exigences du RGPD et applique des mesures de sécurité techniques et organisationnelles appropriées. Lorsque ces prestataires sont situés en dehors de l'Union européenne, les transferts de données sont encadrés par les Clauses Contractuelles Types adoptées par la Commission européenne ou par tout autre mécanisme de transfert reconnu.</p>

                <h3>7.3 Autres cas de divulgation</h3>
                <p>Nous pouvons être amenés à divulguer vos données personnelles dans les cas suivants :</p>
                <ul>
                  <li>Lorsque la loi l'exige ou en réponse à une demande légitime d'une autorité publique compétente ;</li>
                  <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos utilisateurs ;</li>
                  <li>Dans le cadre d'une opération de fusion, d'acquisition ou de transfert d'actifs, sous réserve d'en informer les utilisateurs concernés.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>8. Durée de conservation des données</h2>
                <p>Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux principes de minimisation et de limitation de la conservation :</p>
                <ul>
                  <li><strong>Données de compte :</strong> pendant toute la durée d'utilisation du compte, puis supprimées dans un délai de trente (30) jours après la suppression du compte ;</li>
                  <li><strong>Données d'usage et d'apprentissage :</strong> pendant toute la durée d'utilisation, puis anonymisées à des fins statistiques ;</li>
                  <li><strong>Données de facturation :</strong> conservées pendant dix (10) ans conformément aux obligations comptables et fiscales applicables ;</li>
                  <li><strong>Données techniques et journaux de connexion :</strong> conservés pendant douze (12) mois maximum ;</li>
                  <li><strong>Données collectées sur la base du consentement :</strong> jusqu'au retrait de votre consentement.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>9. Vos droits sur vos données personnelles</h2>
                <p>Conformément aux législations applicables, notamment au RGPD pour les utilisateurs résidant dans l'Union européenne, vous disposez des droits suivants sur vos données personnelles :</p>
                <ul>
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie ;</li>
                  <li><strong>Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes ;</li>
                  <li><strong>Droit à l'effacement (« droit à l'oubli ») :</strong> demander la suppression de vos données dans les conditions prévues par la loi ;</li>
                  <li><strong>Droit à la limitation du traitement :</strong> demander la suspension du traitement de vos données dans certains cas ;</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, et les transmettre à un autre responsable du traitement ;</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes, notamment au profilage et à la prospection commerciale ;</li>
                  <li><strong>Droit de retirer votre consentement</strong> à tout moment, sans que ce retrait n'affecte la licéité des traitements effectués avant celui-ci ;</li>
                  <li><strong>Droit d'introduire une réclamation</strong> auprès de l'autorité de contrôle compétente (la CNIL pour la France, l'ANTIC pour le Cameroun, ou toute autre autorité compétente dans votre pays de résidence) ;</li>
                  <li><strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès.</li>
                </ul>
                <p>Pour exercer l'un quelconque de ces droits, il vous suffit de nous adresser une demande à l'adresse électronique de contact mentionnée à l'article 3 de la présente Politique. Nous nous engageons à y répondre dans un délai d'un (1) mois à compter de la réception de votre demande, conformément aux dispositions du RGPD.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>10. Sécurité des données</h2>
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation, altération ou destruction. Ces mesures comprennent notamment :</p>
                <ul>
                  <li>Le chiffrement des mots de passe au moyen d'algorithmes de hachage robustes ;</li>
                  <li>Le chiffrement des communications entre l'application et nos serveurs au moyen du protocole HTTPS/TLS ;</li>
                  <li>L'accès restreint aux données personnelles, limité aux personnes habilitées et soumises à une obligation de confidentialité ;</li>
                  <li>La réalisation régulière de sauvegardes sécurisées de la base de données ;</li>
                  <li>La surveillance continue de notre infrastructure pour détecter et prévenir les incidents de sécurité ;</li>
                  <li>L'application des mises à jour de sécurité dès leur disponibilité.</li>
                </ul>
                <p>Malgré toutes nos précautions, aucune méthode de transmission ou de stockage électronique n'est totalement sûre. En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, nous nous engageons à vous en informer dans les meilleurs délais, conformément aux obligations légales applicables.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>11. Protection des mineurs</h2>
                <p>Nos Services sont accessibles aux personnes de tout âge, y compris aux enfants, dans la mesure où l'apprentissage des langues maternelles fait partie intégrante de la transmission culturelle intergénérationnelle. Toutefois, conformément au RGPD et aux bonnes pratiques internationales :</p>
                <ul>
                  <li>Les utilisateurs âgés de moins de seize (16) ans doivent obtenir le consentement préalable de leur titulaire de l'autorité parentale avant de créer un compte ;</li>
                  <li>Nous ne collectons sciemment aucune donnée auprès d'un enfant de moins de seize (16) ans sans le consentement vérifiable d'un parent ou tuteur légal ;</li>
                  <li>Si nous apprenons qu'une donnée a été collectée auprès d'un mineur sans ce consentement, nous procédons à sa suppression dans les meilleurs délais.</li>
                </ul>
                <p>Les parents et tuteurs légaux peuvent à tout moment nous contacter pour exercer les droits de leur enfant.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>12. Cookies et technologies similaires</h2>
                <p>Notre site web et notre application peuvent utiliser des cookies et technologies similaires (identifiants d'appareil, stockage local) pour les finalités suivantes :</p>
                <ul>
                  <li><strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement des Services (authentification, sécurité, préférences) ;</li>
                  <li><strong>Cookies de mesure d'audience :</strong> pour comprendre comment nos Services sont utilisés et les améliorer ;</li>
                  <li><strong>Cookies de personnalisation :</strong> pour mémoriser vos préférences linguistiques et pédagogiques.</li>
                </ul>
                <p>Les cookies non essentiels ne sont déposés qu'avec votre consentement préalable, lequel peut être retiré à tout moment depuis les paramètres de l'application ou de votre navigateur.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>13. Transferts internationaux de données</h2>
                <p>Compte tenu de la nature mondiale d'Internet et de l'utilisation de prestataires établis hors d'Afrique, vos données personnelles peuvent être transférées et traitées dans des pays autres que votre pays de résidence, notamment aux États-Unis (Vercel, Neon, Stripe) et au sein de l'Union européenne.</p>
                <p>Lorsque ces pays ne bénéficient pas d'une décision d'adéquation de la Commission européenne ou ne disposent pas d'un niveau de protection équivalent, nous mettons en place des garanties appropriées, notamment :</p>
                <ul>
                  <li>La signature de Clauses Contractuelles Types adoptées par la Commission européenne avec nos prestataires ;</li>
                  <li>La vérification de l'adhésion de nos prestataires américains à des cadres reconnus tels que le Data Privacy Framework ;</li>
                  <li>L'application de mesures techniques complémentaires telles que le chiffrement et la pseudonymisation.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>14. Modifications de la présente Politique</h2>
                <p>Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment, notamment pour refléter les évolutions de nos Services, de la législation applicable ou des bonnes pratiques en matière de protection des données.</p>
                <p>Toute modification substantielle vous sera notifiée par l'un des moyens suivants : message dans l'application, courrier électronique, ou avis publié sur notre site web. La version applicable est toujours celle indiquée par la date de « dernière mise à jour » figurant en tête du présent document. Nous vous encourageons à consulter régulièrement cette Politique.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>15. Contact et réclamations</h2>
                <p>Pour toute question, demande d'information, exercice de vos droits ou réclamation relative à la présente Politique de Confidentialité ou au traitement de vos données personnelles, vous pouvez nous contacter :</p>
                <div className="bg-muted p-6 rounded-xl mt-4 not-prose">
                  <p className="text-foreground font-bold mb-2">Ovúmá EdTech</p>
                  <p className="text-muted-foreground mb-1">Email : <a href="mailto:contact@ovuma.app" className="text-primary hover:underline">contact@ovuma.app</a></p>
                  <p className="text-muted-foreground">Adresse : Douala, République du Cameroun</p>
                </div>
                <p className="mt-6">Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez la possibilité d'introduire une réclamation auprès de l'autorité de contrôle compétente :</p>
                <ul>
                  <li><strong>Au Cameroun :</strong> Agence Nationale des Technologies de l'Information et de la Communication (ANTIC) ;</li>
                  <li><strong>Dans l'Union européenne :</strong> l'autorité de protection des données de votre pays de résidence (par exemple, la CNIL en France).</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
