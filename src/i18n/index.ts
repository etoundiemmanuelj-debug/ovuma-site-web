import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import the translation files
import fr from './fr.json';
import en from './en.json';
import es from './es.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already safeguards from XSS
    },
  });

export default i18n;
