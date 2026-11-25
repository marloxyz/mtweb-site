// Types partagés des contenus traduits (pages services).
import type { RouteKey } from './routes';

/** Titre avec un mot clé surligné en jaune : « pre » + <hl> + point rouge. */
export interface TitleHl {
  pre: string;
  hl: string;
}

/** Identifiants des questions de la FAQ générale (fr.ts / en.ts), réutilisables sur les pages services. */
export type FaqId = 'delay72' | 'plan' | 'domain' | 'cancel' | 'files' | 'printDelay' | 'remote' | 'signsInstall';

export type ServiceKey = 'website' | 'businessCards' | 'flyers' | 'signs' | 'logo' | 'nfc';

export interface Offer {
  name: string;
  /** Prix affiché (« dès 399 € », « Sur devis »…). */
  price: string;
  /** Montant en euros pour le schéma Schema.org (absent si sur devis). */
  amount?: number;
  /** Précision sous le prix (« paiement unique », « 89 € + 20 € de création »…). */
  priceNote?: string;
  /** Pastille au-dessus de la carte (« Avec création »…). */
  badge?: string;
  items: string[];
  /** Mise en avant visuelle. */
  featured?: boolean;
  /** Texte du bouton ; le message WhatsApp pré-rempli est celui du service. */
  cta: string;
}

export interface ServiceContent {
  /** Balise <title> et meta description (uniques par page et par langue). */
  title: string;
  description: string;
  /** Nom du service pour Schema.org. */
  schemaName: string;
  /** Message WhatsApp pré-rempli. */
  whatsapp: string;
  hero: {
    eyebrow: string;
    heading: TitleHl;
    intro: string;
    /** Prix d'appel affiché dans le hero. */
    priceTag: string;
    /** Texte alternatif du visuel du hero (utilisé quand l'image est déposée). */
    visualAlt: string;
  };
  offers: {
    heading: TitleHl;
    intro: string;
    items: Offer[];
    /** Mention sous les formules (abonnement à part, pose non comprise…). */
    note?: string;
  };
  /** Bloc spécifique au service (hébergement, formats de fichiers, pose…). */
  extra: {
    eyebrow: string;
    heading: TitleHl;
    text: string;
    items?: string[];
    link?: { label: string; key: RouteKey };
  };
  steps: {
    heading: TitleHl;
    items: { title: string; text: string }[];
  };
  gallery: {
    heading: TitleHl;
    intro: string;
    /** Légendes des emplacements visuels (fichiers 1.webp, 2.webp, 3.webp…). */
    slots: string[];
  };
  faq: {
    /** Questions reprises de la FAQ générale. */
    ids: FaqId[];
    /** Questions propres au service. */
    extra: { q: string; a: string }[];
  };
}

/** Textes communs à toutes les pages services. */
export interface ServiceUi {
  breadcrumb: string;
  offersEyebrow: string;
  seePricing: string;
  /** Préfixe ajouté au message WhatsApp quand on clique sur une formule (« Formule : … »). */
  offerLabel: string;
  stepsEyebrow: string;
  galleryEyebrow: string;
  faqEyebrow: string;
  faqHeading: TitleHl;
  ctaHeading: TitleHl;
  ctaText: string;
  ctaForm: string;
  otherServices: string;
  vatLine: string;
  packTeaser: { badge: string; title: string; text: string; cta: string };
}
