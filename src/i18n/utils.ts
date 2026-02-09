import { ui, defaultLang, type Lang } from './ui';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getLangFromUrl(url: URL): Lang {
  const pathWithoutBase = url.pathname.replace(base, '');
  const [, lang] = pathWithoutBase.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `${base}/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function asset(path: string): string {
  return `${base}${path}`;
}
