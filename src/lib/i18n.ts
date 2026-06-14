import es from '../i18n/es';
import en from '../i18n/en';
import fr from '../i18n/fr';

export const translations = {
  es,
  en,
  fr,
};

export type Language = keyof typeof translations;

export const LANGUAGES = Object.keys(translations) as Array<Language>;
export const DEFAULT_LANGUAGE = 'es';

export function getTranslations(lang: Language) {
  return translations[lang] ?? translations[DEFAULT_LANGUAGE];
}