// Table des URLs par langue. Une seule source de vérité pour :
// les liens internes, le sélecteur FR | EN, les balises hreflang et le sitemap.
//
// - `en` absent = page en français uniquement (pages locales, pages légales).
// - Pour ajouter une page : ajouter sa clé ici, puis créer les fichiers
//   src/pages/<fr>.astro et src/pages/en/<en>.astro.
import type { Lang } from './config';

type RouteDef = { fr: string; en?: string };

export const routes = {
  home: { fr: '/', en: '/en' },
  website: { fr: '/creation-site-web', en: '/en/website-design' },
  businessCards: { fr: '/cartes-de-visite', en: '/en/business-cards' },
  flyers: { fr: '/flyers', en: '/en/flyers' },
  signs: { fr: '/panneaux-publicitaires', en: '/en/advertising-signs' },
  logo: { fr: '/logo', en: '/en/logo-design' },
  nfc: { fr: '/cartes-nfc-avis-google', en: '/en/nfc-google-review-cards' },
  portfolio: { fr: '/realisations', en: '/en/portfolio' },
  pricing: { fr: '/tarifs', en: '/en/pricing' },
  contact: { fr: '/contact', en: '/en/contact' },
  notFound: { fr: '/404', en: '/en/404' },

  // Français uniquement
  nice: { fr: '/creation-site-web-nice' },
  avignon: { fr: '/creation-site-web-avignon' },
  paca: { fr: '/agence-web-print-paca' },
  legal: { fr: '/mentions-legales' },
  privacy: { fr: '/politique-de-confidentialite' },
  terms: { fr: '/cgv' },
} satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof routes;

/** Vrai si la page existe dans cette langue. */
export function hasLang(key: RouteKey, lang: Lang): boolean {
  return Boolean((routes[key] as RouteDef)[lang]);
}

/** URL de la page dans la langue demandée (repli sur le français si elle n'existe pas). */
export function localePath(key: RouteKey, lang: Lang): string {
  const def = routes[key] as RouteDef;
  return def[lang] ?? def.fr;
}

/** Langue réelle de la page ciblée (utile pour marquer un lien vers une page FR depuis l'anglais). */
export function targetLang(key: RouteKey, lang: Lang): Lang {
  return hasLang(key, lang) ? lang : 'fr';
}

/** Versions existantes d'une page, pour hreflang et le sitemap. */
export function alternates(key: RouteKey): { lang: Lang; path: string }[] {
  const def = routes[key] as RouteDef;
  return (Object.keys(def) as Lang[]).map((lang) => ({ lang, path: def[lang]! }));
}

/** Retrouve la clé de route à partir d'un chemin (ex. pour le sitemap). */
export function routeKeyFromPath(path: string): RouteKey | undefined {
  const clean = path === '/' ? '/' : path.replace(/\/$/, '').replace(/\.html$/, '');
  return (Object.keys(routes) as RouteKey[]).find((k) =>
    Object.values(routes[k] as RouteDef).includes(clean),
  );
}
