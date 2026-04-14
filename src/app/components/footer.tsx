import { Instagram, Youtube, Mail, MapPin, Phone, Apple, Linkedin } from "lucide-react";
import { Link } from "react-router";
import logo from "figma:asset/189dbb7d9fefdb250ffd1b5b14a8ba3709ee199d.png";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Bandeau de téléchargement */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {t('footer.download_title')}
              </h3>
              <p className="text-background/80">
                {t('footer.download_subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-background text-foreground rounded-lg hover:bg-background/90 transition-all hover:scale-105 shadow-md"
              >
                <Apple size={22} className="flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Télécharger sur</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              
              <a
                href="https://expo.dev/accounts/etoundi/projects/ovuma/builds/0e978de3-1fc9-433d-a155-947ae4c00190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-background text-foreground rounded-lg hover:bg-background/90 transition-all hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Disponible sur</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* À propos */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Ovúmá" className="w-10 h-10" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Ovúmá
              </span>
            </Link>
            <p className="text-background/80 mb-4 leading-relaxed">
              {t('footer.about_text')}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://web.facebook.com/profile.php?id=61574311975034"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/ovuma_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@ovuma237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ovuma-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@ovuma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cgu" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.cgu')}
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-background/80 hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-background/80">
                  Douala rue Eto'o, Bonamoussadi, {t('footer.country')}.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <a href="mailto:contact@ovuma.org" className="text-background/80 hover:text-primary transition-colors">
                  contact@ovuma.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                <a href="tel:+237697765352" className="text-background/80 hover:text-primary transition-colors">
                  +237 697 765 352
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              {t('footer.rights', { year: currentYear, country: t('footer.country') })}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/cgu" className="text-background/70 hover:text-primary transition-colors">
                {t('footer.cgu')}
              </Link>
              <Link to="/politique-de-confidentialite" className="text-background/70 hover:text-primary transition-colors">
                {t('footer.privacy')}
              </Link>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                {t('footer.legal_mentions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}