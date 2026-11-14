// Données centrales indépendantes de la langue : coordonnées et tarifs.
// Tous les textes affichés sont dans src/i18n/fr.ts et src/i18n/en.ts.
// Les valeurs marquées « À CONFIRMER » viennent du CLAUDE.md et doivent être validées.

export const site = {
  name: 'MTWeb',
  url: 'https://mtwebpro.fr',
  owner: 'Marius Tourniaire',
  phone: '+33 6 34 41 86 16',
  phoneHref: 'tel:+33634418616',
  whatsappNumber: '33634418616',
  email: 'contact@mtwebpro.fr', // À CONFIRMER
  socials: [] as { label: string; href: string }[], // À CONFIRMER
};

/** Lien WhatsApp avec message pré-rempli (le message vient du dictionnaire de la langue). */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Les prix sont identiques en français et en anglais.
export const prices = {
  site: 399,
  siteNfc: 449,
  logo: 70,
  businessCards: 89,
  businessCardsDesign: 20,
  hostingMonthly: 20,
  hostingFreeMonths: 2,
  hostingEditMinutes: 30,
  /** Prix du Pack Lancement : À CONFIRMER. Laisser `null` tant qu'il n'est pas fixé. */
  pack: null as number | null,
};

/** Valeur des éléments du pack achetés séparément (site + logo + 500 cartes avec création). */
export const packSeparateValue =
  prices.site + prices.logo + prices.businessCards + prices.businessCardsDesign;
