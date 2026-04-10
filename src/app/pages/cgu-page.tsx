import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { motion } from "motion/react";
import { Link } from "react-router";

export function CGUPage() {
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
                Conditions Générales d'Utilisation
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
                <p>Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation de l'application mobile Ovúmá et du site web associé (ci-après collectivement désignés comme « les Services »), édités par Ovúmá (ci-après « nous », « notre », « nos »).</p>
                <p>Ovúmá est une plateforme EdTech dédiée à la préservation, à la valorisation et à l'enseignement des langues africaines, à travers des contenus pédagogiques, des enregistrements audio authentiques et des outils interactifs d'apprentissage.</p>
                <p>L'utilisation de nos Services implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas tout ou partie de ces conditions, nous vous invitons à ne pas utiliser nos Services.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>2. Définitions</h2>
                <p>Pour les besoins des présentes CGU, les termes ci-dessous sont définis comme suit :</p>
                <ul>
                  <li><strong>« Application »</strong> : l'application mobile Ovúmá, disponible sur les plateformes de téléchargement Apple App Store et Google Play Store ;</li>
                  <li><strong>« Compte »</strong> : l'espace personnel créé par l'Utilisateur pour accéder aux fonctionnalités des Services ;</li>
                  <li><strong>« Contenus »</strong> : l'ensemble des textes, images, sons, vidéos, leçons, exercices, dictionnaires et autres éléments mis à disposition via les Services ;</li>
                  <li><strong>« Éditeur »</strong> : Ovúmá, responsable de l'édition et de l'exploitation des Services ;</li>
                  <li><strong>« Services »</strong> : l'Application et le site web associé, ainsi que l'ensemble des fonctionnalités proposées ;</li>
                  <li><strong>« Utilisateur »</strong> : toute personne physique qui accède aux Services, qu'elle soit titulaire d'un Compte ou non ;</li>
                  <li><strong>« Abonnement »</strong> : la souscription payante (Plus ou Premium) donnant accès à des fonctionnalités étendues.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>3. Mentions légales et identification de l'éditeur</h2>
                <p>Les Services sont édités par :</p>
                <ul>
                  <li><strong>Nom du projet :</strong> Ovúmá</li>
                  <li><strong>Fondateur et responsable de la publication :</strong> Emmanuel Etoundi</li>
                  <li><strong>Adresse :</strong> Douala, République du Cameroun</li>
                  <li><strong>Adresse électronique de contact :</strong> contact@ovuma.app</li>
                </ul>
                <p>L'hébergement des Services est assuré par Vercel Inc. (États-Unis) et Neon Inc. (États-Unis).</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>4. Acceptation et opposabilité des CGU</h2>
                <p>L'Utilisateur reconnaît avoir pris connaissance des présentes CGU avant toute utilisation des Services. L'utilisation des Services vaut acceptation pleine, entière et sans réserve des présentes CGU.</p>
                <p>Lors de la création d'un Compte, l'Utilisateur est expressément invité à confirmer son acceptation des CGU et de la Politique de Confidentialité. Cette acceptation est une condition préalable et indispensable à l'ouverture du Compte.</p>
                <p>Les CGU applicables sont celles en vigueur à la date d'utilisation des Services. Nous nous réservons le droit de les modifier à tout moment dans les conditions prévues à l'article 16.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>5. Description des Services</h2>
                <p>Ovúmá propose une plateforme d'apprentissage des langues africaines comprenant notamment :</p>
                <ul>
                  <li>Des leçons structurées par niveau (Débutant, Intermédiaire, Avancé) ;</li>
                  <li>Des contenus audio enregistrés par des locuteurs natifs ;</li>
                  <li>Un dictionnaire multilingue (français, anglais, langues africaines) ;</li>
                  <li>Des exercices interactifs (choix multiples, association, remise en ordre) ;</li>
                  <li>Des contenus culturels destinés à valoriser le patrimoine linguistique africain ;</li>
                  <li>Le suivi personnalisé de la progression d'apprentissage.</li>
                </ul>
                <p>Nous nous réservons le droit, à tout moment et sans préavis, d'ajouter, de modifier, de suspendre ou de supprimer tout ou partie des Services et fonctionnalités, dans le but d'en améliorer la qualité ou pour des raisons techniques, légales ou commerciales.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>6. Accès aux Services</h2>
                <h3>6.1 Conditions techniques</h3>
                <p>L'accès aux Services nécessite un équipement compatible (smartphone ou tablette fonctionnant sous Android ou iOS, dans une version supportée), une connexion Internet active et, pour l'Application, son téléchargement préalable depuis une plateforme de distribution officielle.</p>
                <p>Les coûts liés à l'équipement, à la connexion Internet et au téléchargement de l'Application sont à la charge exclusive de l'Utilisateur.</p>

                <h3>6.2 Création de Compte</h3>
                <p>L'accès à certaines fonctionnalités requiert la création d'un Compte. Lors de l'inscription, l'Utilisateur s'engage à :</p>
                <ul>
                  <li>Fournir des informations exactes, complètes et à jour ;</li>
                  <li>Mettre à jour ces informations en cas de modification ;</li>
                  <li>Préserver la confidentialité de ses identifiants (adresse électronique et mot de passe) ;</li>
                  <li>Ne pas partager son Compte avec un tiers et ne pas créer plusieurs Comptes pour une même personne ;</li>
                  <li>Nous notifier sans délai toute utilisation non autorisée de son Compte.</li>
                </ul>
                <p>L'Utilisateur est seul responsable de toute activité effectuée depuis son Compte.</p>

                <h3>6.3 Conditions d'âge</h3>
                <p>Les Services sont accessibles à toute personne, à l'exception toutefois des mineurs de moins de seize (16) ans qui doivent obtenir le consentement préalable d'un titulaire de l'autorité parentale avant de créer un Compte. En s'inscrivant, l'Utilisateur déclare avoir l'âge requis ou avoir obtenu cette autorisation.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>7. Abonnements payants et conditions financières</h2>
                <h3>7.1 Offres disponibles</h3>
                <p>Ovúmá propose un modèle freemium structuré comme suit :</p>
                <ul>
                  <li><strong>Offre Gratuite :</strong> accès limité à un ensemble de fonctionnalités de base, sans engagement ;</li>
                  <li><strong>Abonnement Plus :</strong> 3 000 XAF par mois, donnant accès à des fonctionnalités étendues ;</li>
                  <li><strong>Abonnement Premium :</strong> 25 000 XAF par an, offrant l'accès complet à l'ensemble des Services et des contenus premium.</li>
                </ul>

                <h3>7.2 Souscription et paiement</h3>
                <p>La souscription à un Abonnement s'effectue directement depuis l'Application. Les paiements sont traités par notre prestataire Stripe Inc., certifié PCI-DSS niveau 1, qui assure la sécurité des transactions. Aucune donnée bancaire complète n'est conservée par Ovúmá.</p>
                <p>Les prix sont indiqués en francs CFA (XAF), toutes taxes éventuelles comprises. Nous nous réservons le droit de modifier nos tarifs à tout moment, étant entendu que toute modification ne s'appliquera qu'aux nouvelles souscriptions et aux renouvellements postérieurs à ladite modification.</p>

                <h3>7.3 Renouvellement et résiliation</h3>
                <p>Sauf indication contraire, les Abonnements sont renouvelés automatiquement à l'échéance pour une période identique, au tarif en vigueur. L'Utilisateur peut résilier son Abonnement à tout moment depuis les paramètres de son Compte. La résiliation prend effet à la fin de la période d'abonnement en cours, sans donner lieu à un remboursement prorata temporis.</p>

                <h3>7.4 Droit de rétractation</h3>
                <p>Conformément aux dispositions applicables dans certaines juridictions, notamment au sein de l'Union européenne, l'Utilisateur consommateur dispose d'un délai de quatorze (14) jours à compter de la souscription pour exercer son droit de rétractation, sauf si l'exécution du contrat a commencé avec son accord exprès et qu'il a renoncé à ce droit. En activant immédiatement son Abonnement, l'Utilisateur reconnaît expressément renoncer à son droit de rétractation pour les contenus déjà consultés.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>8. Propriété intellectuelle</h2>
                <h3>8.1 Droits d'Ovúmá</h3>
                <p>L'ensemble des Contenus mis à disposition via les Services, incluant notamment les leçons, textes, enregistrements audio, dictionnaires, illustrations, logos, marques, interfaces graphiques, codes sources, bases de données et structures pédagogiques, sont la propriété exclusive d'Ovúmá ou de ses partenaires, et sont protégés par les lois en vigueur en matière de propriété intellectuelle.</p>
                <p>Les enregistrements audio des langues africaines ont été produits avec le consentement éclairé des locuteurs ayant participé à leur réalisation, et sont diffusés dans le cadre d'une mission de sauvegarde et de transmission du patrimoine linguistique.</p>

                <h3>8.2 Licence concédée à l'Utilisateur</h3>
                <p>Sous réserve du respect des présentes CGU, Ovúmá concède à l'Utilisateur une licence personnelle, non exclusive, non transférable, non cessible et révocable, lui permettant d'accéder aux Contenus et d'utiliser les Services à des fins strictement personnelles, privées et non commerciales d'apprentissage.</p>
                <p>Sont notamment interdits, sauf autorisation écrite préalable d'Ovúmá :</p>
                <ul>
                  <li>La reproduction, la représentation, la modification, l'adaptation ou la traduction de tout ou partie des Contenus ;</li>
                  <li>L'extraction, la réutilisation, la revente ou la mise à disposition de tiers des Contenus, en particulier des enregistrements audio et des entrées du dictionnaire ;</li>
                  <li>L'utilisation des Contenus pour entraîner des modèles d'intelligence artificielle, sauf accord de licence spécifique avec Ovúmá ;</li>
                  <li>Toute exploitation commerciale, directe ou indirecte, des Contenus ou des Services.</li>
                </ul>

                <h3>8.3 Reconnaissance du patrimoine culturel</h3>
                <p>Ovúmá reconnaît que les langues africaines appartiennent au patrimoine vivant des communautés qui les parlent. Notre démarche s'inscrit dans une logique de valorisation, de préservation et de transmission, dans le respect des locuteurs et des dépositaires de ces traditions linguistiques.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>9. Obligations et engagements de l'Utilisateur</h2>
                <p>L'Utilisateur s'engage à utiliser les Services dans le respect des lois en vigueur, des présentes CGU, ainsi que des droits des tiers. À ce titre, il s'interdit notamment :</p>
                <ul>
                  <li>D'utiliser les Services à des fins illicites, frauduleuses ou contraires à l'ordre public ;</li>
                  <li>De porter atteinte aux droits de propriété intellectuelle d'Ovúmá ou de tiers ;</li>
                  <li>De diffuser, par l'intermédiaire des Services, des contenus illicites, diffamatoires, racistes, haineux, ou contraires à la dignité humaine ;</li>
                  <li>De tenter d'accéder de manière non autorisée aux Services, aux serveurs ou à la base de données ;</li>
                  <li>D'introduire des virus ou tout autre code malveillant ;</li>
                  <li>De pratiquer le « scraping », la rétro-ingénierie ou la décompilation ;</li>
                  <li>D'usurper l'identité d'un tiers.</li>
                </ul>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>10. Responsabilité de l'Éditeur</h2>
                <h3>10.1 Obligation de moyens</h3>
                <p>Ovúmá s'engage à mettre en œuvre tous les moyens raisonnables pour assurer la disponibilité, la qualité et la sécurité des Services. Toutefois, la fourniture des Services constitue une obligation de moyens et non de résultat.</p>

                <h3>10.2 Limitations de responsabilité</h3>
                <p>Dans les limites autorisées par la loi applicable, Ovúmá ne saurait être tenu responsable :</p>
                <ul>
                  <li>Des interruptions, dysfonctionnements ou indisponibilités temporaires des Services ;</li>
                  <li>Des dommages indirects ou immatériels résultant de l'utilisation ou de l'impossibilité d'utiliser les Services ;</li>
                  <li>Des dysfonctionnements liés à la connexion Internet ou à l'équipement de l'Utilisateur ;</li>
                  <li>Des conséquences d'une utilisation non conforme aux présentes CGU.</li>
                </ul>

                <h3>10.3 Exactitude pédagogique des Contenus</h3>
                <p>Ovúmá met tout en œuvre pour garantir l'exactitude des Contenus. Néanmoins, les langues africaines présentent une grande richesse de variantes dialectales. L'Utilisateur reconnaît cette diversité et accepte que les Contenus puissent évoluer.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>11. Suspension et résiliation du Compte</h2>
                <p>L'Utilisateur peut supprimer son Compte directement depuis les paramètres. Nous nous réservons le droit de suspendre ou de résilier le Compte d'un Utilisateur en cas de manquement grave aux présentes CGU ou d'utilisation frauduleuse des Services.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>12. Données personnelles</h2>
                <p>Le traitement des données personnelles est régi par notre Politique de Confidentialité, accessible en permanence depuis l'Application et le site web.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>13. Liens et services tiers</h2>
                <p>Les Services peuvent contenir des liens vers des sites externes ou intégrer des contenus issus de plateformes tierces. L'accès à ces sites tiers se fait sous la seule responsabilité de l'Utilisateur.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>14. Force majeure</h2>
                <p>La responsabilité d'Ovúmá ne pourra être engagée en cas de force majeure telle que définie par la jurisprudence applicable (catastrophes naturelles, guerres, défaillances des réseaux, etc.).</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>15. Loi applicable et règlement des litiges</h2>
                <p>Les présentes CGU sont régies par le droit camerounais. En cas de différend, les parties s'engagent à rechercher une solution amiable avant toute confrontation judiciaire. À défaut, le litige sera soumis aux tribunaux compétents de Douala, République du Cameroun.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>16. Modifications des CGU</h2>
                <p>Nous nous réservons le droit de modifier les présentes CGU à tout moment. Toute modification substantielle sera notifiée aux utilisateurs. Si vous continuez d'utiliser l'application, cela vaudra comme accord.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>17. Dispositions diverses</h2>
                <p>Les présentes CGU constituent l'intégralité de l'accord. En cas de nullité ou d'inapplicabilité de l'une quelconque des clauses, les autres resteront valides. La langue unique applicable est le français.</p>

                <h2 style={{ fontFamily: 'var(--font-heading)' }}>18. Contact</h2>
                <p>Pour toute question ou demande :</p>
                <div className="bg-muted p-6 rounded-xl mt-4 not-prose">
                  <p className="text-foreground font-bold mb-2">Ovúmá EdTech</p>
                  <p className="text-muted-foreground mb-1">Email : <a href="mailto:contact@ovuma.app" className="text-primary hover:underline">contact@ovuma.app</a></p>
                  <p className="text-muted-foreground">Adresse : Douala, République du Cameroun</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
