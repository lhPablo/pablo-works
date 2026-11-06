import { DEFAULT_LANGUAGE, type Language, LANGUAGES } from '../src/lib/i18n';

// Header present but no supported language accepted → international visitor.
const FALLBACK_LANGUAGE: Language = 'en';

function isLanguage(value: string): value is Language {
  return (LANGUAGES as string[]).includes(value);
}

function preferredLanguage(acceptLanguage: string | null): Language {
  if (!acceptLanguage) return DEFAULT_LANGUAGE;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return {
        lang: tag.trim().toLowerCase().split('-')[0],
        quality: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality);

  return ranked.map(({ lang }) => lang).find(isLanguage) ?? FALLBACK_LANGUAGE;
}

export default {
  fetch(request: Request): Response {
    const lang = preferredLanguage(request.headers.get('Accept-Language'));
    const url = new URL(`/${lang}/`, request.url);

    return new Response(null, {
      status: 302,
      headers: {
        Location: url.toString(),
        Vary: 'Accept-Language',
      },
    });
  },
};
