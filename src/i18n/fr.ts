// Textes français (langue par défaut).
// Le dictionnaire anglais (en.ts) doit avoir exactement la même structure : TypeScript le vérifie.
// Les titres avec surlignage jaune sont découpés en { pre, hl } : « pre » + mot surligné + point rouge.
import { prices, packSeparateValue } from '../data/site';

const price = (n: number) => `${n.toLocaleString('fr-FR')} €`;

export const fr = {
  price,

  common: {
    skipLink: 'Aller au contenu',
    homeAria: 'MTWeb, retour à l’accueil',
    navMain: 'Navigation principale',
    navMobile: 'Navigation mobile',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    langSwitch: 'Langue du site',
    newWindow: 'nouvelle fenêtre',
    frenchOnly: 'en français',
    tagline: 'Un seul interlocuteur pour être visible, en ligne et dans la rue.',
    hours: 'Disponible 7j/7, réponse rapide sur WhatsApp', // À CONFIRMER
    vatNotice: 'TVA non applicable, art. 293 B du CGI',
    netPrices: 'Prix nets.',
    legalStatus: 'entrepreneur individuel',
    whatsappCta: 'Écrire sur WhatsApp',
    whatsappFloatAria: 'Écrire à MTWeb sur WhatsApp (nouvelle fenêtre)',
    contact: 'Contact',
  },

  whatsapp: {
    default: 'Bonjour MTWeb, je souhaite des informations pour mon projet.',
    pack: 'Bonjour MTWeb, le Pack Lancement m’intéresse.',
    project: 'Bonjour MTWeb, j’aimerais vous parler de mon projet.',
  },

  meta: {
    businessDescription:
      'Création de sites vitrines, logos, cartes de visite, flyers, panneaux publicitaires et cartes NFC avis Google.',
    ogImageAlt: 'MTWeb : sites web, logos et imprimés',
  },

  // Libellés des pages (menu, footer, liens)
  pages: {
    home: 'Accueil',
    website: 'Création de site web',
    businessCards: 'Cartes de visite',
    flyers: 'Flyers',
    signs: 'Panneaux publicitaires',
    logo: 'Logo',
    nfc: 'Cartes NFC avis Google',
    portfolio: 'Réalisations',
    pricing: 'Tarifs',
    contact: 'Contact',
    notFound: 'Page introuvable',
    nice: 'Création site web Nice',
    avignon: 'Création site web Avignon',
    paca: 'Agence web et print PACA',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: 'CGV',
  },

  nav: {
    website: 'Sites web',
    prints: 'Imprimés',
    logo: 'Logo',
    nfc: 'Cartes NFC',
  },

  footer: {
    services: 'Services',
    company: 'MTWeb',
    zones: 'Zones d’intervention',
  },

  realisations: {
    type: { site: 'Site web', imprime: 'Imprimé' },
    previewAlt: (name: string, label: string) => `Aperçu : ${name} (${label.toLowerCase()})`,
  },

  heroVisual: {
    cardRole: 'Création web et print',
    nfcHint: ['Approchez', 'votre téléphone'],
  },

  form: {
    subject: 'Nouveau message depuis mtwebpro.fr',
    name: 'Votre nom',
    phone: 'Téléphone',
    email: 'E-mail',
    optional: '(facultatif)',
    message: 'Votre projet en quelques mots',
    privacyNote: 'Vos informations servent uniquement à vous répondre.',
    submit: 'Envoyer le message',
    sending: 'Envoi en cours…',
    success: 'Merci ! Votre message est bien parti. Réponse rapide, promis.',
    error: 'L’envoi n’a pas fonctionné. Écrivez-nous directement sur WhatsApp, c’est encore plus rapide.',
  },

  // Questions fréquentes. Les réponses marquées « À CONFIRMER » reposent sur des hypothèses.
  faq: [
    {
      q: 'Les 72 h, c’est vraiment réaliste ?',
      a: 'Oui. Il s’agit de 72 heures ouvrées (du lundi au vendredi), comptées à partir de la réception de l’acompte et de vos éléments : textes, photos et logo. Dans ce délai, vous recevez un lien vers une première version en ligne, à consulter sur votre téléphone. Ensuite, on ajuste ensemble jusqu’à ce qu’elle vous plaise.',
    },
    {
      q: `Que comprend l’abonnement à ${price(prices.hostingMonthly)} par mois ?`,
      a: `L’hébergement de votre site, sa sécurité, les mises à jour et ${prices.hostingEditMinutes} minutes de modifications par mois (un horaire, un prix, une photo…). Les ${prices.hostingFreeMonths} premiers mois sont offerts. L’abonnement est séparé du prix de création du site.`,
    },
    {
      q: 'À qui appartient le nom de domaine ?',
      // À CONFIRMER : domaine enregistré au nom du client.
      a: 'À vous. Le nom de domaine (votre adresse, du type votre-nom.fr) est enregistré à votre nom. Vous en restez propriétaire, quoi qu’il arrive.',
    },
    {
      q: 'Que se passe-t-il si j’arrête l’abonnement ?',
      // À CONFIRMER : conditions de sortie.
      a: 'Il est sans engagement : vous arrêtez quand vous voulez, par simple message. Votre site n’est alors plus hébergé par MTWeb. Vous gardez votre nom de domaine, et nous pouvons vous transmettre les fichiers du site pour le confier à quelqu’un d’autre.',
    },
    {
      q: 'Pour les imprimés, je fournis le fichier ou vous le créez ?',
      a: `Les deux sont possibles. Si vous avez déjà un fichier prêt, on l’imprime tel quel. Sinon, on crée le visuel pour vous (par exemple + ${price(prices.businessCardsDesign)} pour des cartes de visite). Dans tous les cas, vous recevez un BAT, c’est-à-dire un aperçu final à valider : rien n’est imprimé sans votre accord.`,
    },
    {
      q: 'Quels sont les délais d’impression et de livraison ?',
      // À CONFIRMER : délais réels de l’imprimeur.
      a: 'Comptez en général une semaine entre la validation du BAT et la réception, selon le support et la quantité. Pour une date précise (ouverture, salon, événement), dites-le dès le départ : on s’organise en conséquence.',
    },
    {
      q: 'Travaillez-vous à distance ?',
      a: 'Oui, partout en France. Tout se fait facilement par WhatsApp, téléphone ou visio. Et si vous préférez, on peut aussi se rencontrer en personne.',
    },
    {
      q: 'La pose des panneaux est-elle comprise ?',
      a: 'Non. MTWeb s’occupe de la création et de l’impression de vos panneaux. La pose reste à votre charge, ou à celle d’un poseur de votre choix.',
    },
  ],

  // Page d'accueil — AUCUNE mention géographique.
  home: {
    title: 'Création de site vitrine, logo, cartes de visite et flyers | MTWeb',
    description: `Site vitrine dès ${price(prices.site)}, logo ${price(prices.logo)}, cartes de visite, flyers et panneaux publicitaires. Un seul interlocuteur, première version en ligne sous 72 h.`,
    hero: {
      eyebrow: 'Création web et print',
      title: { pre: 'Visible en ligne ', hl: 'et dans la rue' },
      subtitle: 'Sites web, logos, cartes de visite, flyers et panneaux, conçus par un seul interlocuteur.',
      ctaSecondary: 'Voir les réalisations',
      proofs: ['Première version en ligne sous 72 h', 'Français / English', 'Contact direct sur WhatsApp'],
    },
    services: {
      eyebrow: 'Services',
      title: { pre: 'Ce que MTWeb ', hl: 'fait pour vous' },
      intro: 'Tout ce qu’il faut pour qu’on vous trouve et qu’on se souvienne de vous. Prix affichés, sans surprise.',
      allPrices: 'Tous les tarifs',
      items: {
        website: {
          title: 'Sites web',
          text: 'Un site clair, rapide et lisible sur téléphone. Vos clients vous trouvent, et vous appellent en un geste.',
          price: `dès ${price(prices.site)}`,
          cta: 'Créer mon site',
        },
        prints: {
          title: 'Imprimés',
          text: 'Cartes de visite, flyers, panneaux publicitaires. On crée le visuel et on s’occupe de l’impression.',
          price: `500 cartes dès ${price(prices.businessCards)}`,
          cta: 'Voir les imprimés',
          extraFlyers: 'Flyers',
          extraSigns: 'Panneaux',
        },
        nfc: {
          title: 'Cartes NFC',
          text: 'Vos clients approchent leur téléphone de la carte, et laissent un avis Google en quelques secondes.',
          price: `${price(prices.siteNfc)} avec le site`,
          cta: 'Découvrir la carte',
        },
        logo: {
          title: 'Logo et identité',
          text: 'Un logo simple et reconnaissable. Deux propositions, deux retouches, tous les formats utiles.',
          price: price(prices.logo),
          cta: 'Créer mon logo',
        },
      },
    },
    pack: {
      badge: 'Pack Lancement',
      title: 'Tout pour démarrer, en une seule fois',
      text: 'Votre site, votre logo et vos cartes de visite, pensés ensemble. Vous lancez votre activité avec une image nette, en ligne comme en main propre.',
      items: [
        'Un site vitrine de 1 à 5 pages, lisible sur téléphone',
        'Un logo : 2 propositions, 2 retouches, tous les formats',
        '500 cartes de visite recto-verso, création comprise',
        'Un seul interlocuteur du début à la fin',
      ],
      separately: 'Acheté séparément :',
      separateValue: price(packSeparateValue),
      askPrice: 'Demandez le prix du pack sur WhatsApp.',
      cta: 'Demander le Pack Lancement',
    },
    work: {
      eyebrow: 'Réalisations',
      title: { pre: 'Quelques ', hl: 'projets' },
      intro: 'Des sites et des imprimés pour des indépendants qui démarrent.',
      all: 'Toutes les réalisations',
      ctaTitle: 'Votre projet ici ?',
      ctaText: 'Site, logo ou imprimés : parlons-en.',
    },
    method: {
      eyebrow: 'Méthode',
      title: { pre: 'Trois étapes, ', hl: 'c’est tout' },
      intro: 'Simple, rapide, et vous gardez la main à chaque étape.',
      steps: [
        {
          title: 'On se rencontre',
          text: 'Autour d’un café ou en visio, comme vous préférez. Vous parlez de votre activité, on note ce qui compte pour vos clients.',
        },
        {
          title: 'Première version en ligne sous 72 h',
          text: 'Vous découvrez votre site en vrai, sur votre propre téléphone. Pas un croquis : un vrai site, prêt à être ajusté.',
        },
        {
          title: 'Vous validez, on imprime',
          text: 'On fait les retouches avec vous. Quand tout vous plaît, le site est publié et on lance l’impression de vos supports.',
        },
      ],
    },
    why: {
      eyebrow: 'Pourquoi MTWeb',
      title: { pre: 'Quelqu’un qui ', hl: 'répond' },
      reasons: [
        {
          title: 'Un seul interlocuteur',
          text: 'Site, logo, cartes, flyers, panneaux : la même personne s’occupe de tout. Votre image reste cohérente, partout.',
        },
        {
          title: 'Joignable directement',
          text: 'Pas de standard, pas de ticket. Vous écrivez sur WhatsApp, vous avez une réponse rapide.',
        },
        {
          title: 'Français / English',
          text: 'Vous avez une clientèle internationale ? Votre site et vos échanges peuvent se faire dans les deux langues.',
        },
        {
          title: 'Sans engagement',
          text: `Hébergement et petites modifications : ${price(prices.hostingMonthly)} par mois, les ${prices.hostingFreeMonths} premiers mois offerts. Vous arrêtez quand vous voulez.`,
        },
      ],
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: { pre: 'Vos ', hl: 'questions' },
      intro: 'Les réponses aux questions qu’on nous pose le plus souvent.',
    },
    contact: {
      eyebrow: 'Contact',
      title: { pre: 'Parlons de ', hl: 'votre projet' },
      intro: 'Le plus simple : un message sur WhatsApp. Vous préférez écrire ? Le formulaire est là pour ça.',
      cardTitle: 'Un message, une réponse',
    },
  },

  notFound: {
    title: 'Page introuvable | MTWeb',
    description: 'Cette page n’existe pas ou a été déplacée.',
    eyebrow: 'Erreur 404',
    heading: { pre: 'Cette page s’est ', hl: 'égarée' },
    text: 'Elle n’existe pas, ou elle a changé d’adresse. Pas de souci : repartez de l’accueil, ou posez-nous directement votre question.',
    back: 'Retour à l’accueil',
  },
};

export type Dict = typeof fr;
