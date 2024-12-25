import { defaultLang, ui } from './ui.ts';

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split('/').filter(Boolean);
  // console.log(segments);

  for (const segment of segments) {
    if (segment in ui) {
      // console.log(segment);
      return segment as keyof typeof ui;
    }
  }

  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
