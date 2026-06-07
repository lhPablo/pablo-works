import es from '../i18n/es';
import en from '../i18n/en';
import fr from '../i18n/fr';

export const translations = {
  es,
  en,
  fr,
};

export function getTranslations(lang: keyof typeof translations) {
  return translations[lang] ?? translations.es;
}