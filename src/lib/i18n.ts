import es from '@i18n/es';
import en from '@i18n/en';

export const translations = {
  es,
  en,
};

export type Language = keyof typeof translations;

export const LANGUAGES = Object.keys(translations) as Array<Language>;
export const DEFAULT_LANGUAGE = 'es';

export function getTranslations(lang?: string) {
  return translations[lang as Language] ?? translations[DEFAULT_LANGUAGE];
}

export const LANGUAGE_NAMES: Record<Language, string> = {
  es: 'Español',
  en: 'English',
};

export type SplitByPlaceholderResult = {
  before: string;
  after: string;
}

export function splitByPlaceholder(template: string, placeholder: string): SplitByPlaceholderResult {
  const [before, after = ''] = template.split(placeholder);
  return { before, after };
}

export function getLocalePaths() {
  return LANGUAGES.map((lang) => ({ params: { lang } }));
}
