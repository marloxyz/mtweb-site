// Point d'entrée i18n : dictionnaires + helpers de routes.
import { fr, type Dict } from './fr';
import { en } from './en';
import type { Lang } from './config';

export * from './config';
export * from './routes';
export type { Dict };

const dictionaries: Record<Lang, Dict> = { fr, en };

/** Textes de la langue demandée. */
export function useTranslations(lang: Lang): Dict {
  return dictionaries[lang];
}
