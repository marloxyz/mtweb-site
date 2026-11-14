// Langues du site. Le français est la langue par défaut (à la racine),
// l'anglais est servi sous /en/.
export const languages = {
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr', ogLocale: 'fr_FR', hreflang: 'fr' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB', hreflang: 'en' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const langs = Object.keys(languages) as Lang[];
