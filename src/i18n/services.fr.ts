// Contenus des pages services, en français.
// Tarifs : uniquement ceux du CLAUDE.md (src/data/site.ts). Aucune mention géographique.
// Les visuels sont des emplacements vides : déposer /public/visuels/<page>/hero.webp, 1.webp, 2.webp, 3.webp.
import { prices } from '../data/site';
import type { ServiceContent, ServiceKey, ServiceUi } from './types';

const price = (n: number) => `${n.toLocaleString('fr-FR')} €`;
const cardsWithDesign = prices.businessCards + prices.businessCardsDesign;

export const serviceUiFr: ServiceUi = {
  breadcrumb: 'Fil d’Ariane',
  offersEyebrow: 'Tarifs',
  seePricing: 'Voir les tarifs',
  offerLabel: 'Formule',
  stepsEyebrow: 'Comment ça se passe',
  galleryEyebrow: 'En images',
  faqEyebrow: 'Questions fréquentes',
  faqHeading: { pre: 'Vos ', hl: 'questions' },
  ctaHeading: { pre: 'On en ', hl: 'parle ?' },
  ctaText: 'Un message sur WhatsApp suffit. Vous décrivez votre besoin, on vous répond vite, sans engagement.',
  ctaForm: 'Ou écrire via le formulaire',
  otherServices: 'Les autres services',
  vatLine: 'Prix nets. TVA non applicable, art. 293 B du CGI.',
  packTeaser: {
    badge: 'Pack Lancement',
    title: 'Site, logo et cartes de visite ensemble',
    text: 'Vous démarrez ? Le Pack Lancement réunit les trois, pensés ensemble, avec un seul interlocuteur.',
    cta: 'Voir le Pack Lancement',
  },
};

export const servicesFr: Record<ServiceKey, ServiceContent> = {
  website: {
    title: 'Création de site vitrine pas cher, dès 399 € | MTWeb',
    description: `Site vitrine professionnel de 1 à 5 pages dès ${price(prices.site)} : lisible sur téléphone, formulaire, bouton d’appel, Google Maps. Première version en ligne sous 72 h ouvrées.`,
    schemaName: 'Création de site vitrine',
    whatsapp: 'Bonjour MTWeb, je souhaite un site vitrine pour mon activité.',
    hero: {
      eyebrow: 'Création de site web',
      heading: { pre: 'Un site clair, ', hl: 'qui vous ressemble' },
      intro: 'Un site vitrine simple et rapide, lisible sur téléphone. Vos clients comprennent ce que vous faites et vous contactent en un geste.',
      priceTag: `dès ${price(prices.site)}`,
      visualAlt: 'Exemple de site vitrine réalisé par MTWeb',
    },
    offers: {
      heading: { pre: 'Deux formules, ', hl: 'prix clairs' },
      intro: 'Le prix du site se paie une fois. L’hébergement est un abonnement à part, détaillé juste en dessous.',
      items: [
        {
          name: 'Site vitrine',
          price: `dès ${price(prices.site)}`,
          amount: prices.site,
          priceNote: 'Paiement unique',
          items: [
            'De 1 à 5 pages : accueil, services, contact…',
            'Lisible sur téléphone, tablette et ordinateur',
            'Formulaire de contact',
            'Bouton d’appel en un geste',
            'Plan Google Maps pour vous trouver',
            'Référencement de base pour être bien présenté sur Google',
            'Première version en ligne sous 72 h ouvrées',
          ],
          cta: 'Demander mon site',
        },
        {
          name: 'Site + carte NFC avis Google',
          price: price(prices.siteNfc),
          amount: prices.siteNfc,
          priceNote: 'Paiement unique',
          badge: 'Plus d’avis clients',
          featured: true,
          items: [
            'Tout le site vitrine',
            'Une carte NFC qui ouvre votre page d’avis Google',
            'Vos clients laissent un avis en quelques secondes',
            'Plus d’avis, plus de confiance pour les nouveaux clients',
          ],
          cta: 'Demander cette formule',
        },
      ],
    },
    extra: {
      eyebrow: 'Hébergement et maintenance',
      heading: { pre: 'L’abonnement, ', hl: 'à part et sans engagement' },
      text: `Pour rester en ligne, votre site a besoin d’un hébergement. C’est un abonnement séparé du prix de création : ${price(prices.hostingMonthly)} par mois, les ${prices.hostingFreeMonths} premiers mois offerts.`,
      items: [
        'L’hébergement de votre site',
        'La sécurité et les mises à jour',
        `${prices.hostingEditMinutes} minutes de modifications par mois (un horaire, un prix, une photo…)`,
        `Les ${prices.hostingFreeMonths} premiers mois offerts`,
        'Sans engagement : vous arrêtez quand vous voulez',
      ],
    },
    steps: {
      heading: { pre: 'Trois étapes, ', hl: 'c’est tout' },
      items: [
        {
          title: 'On se rencontre',
          text: 'Autour d’un café ou en visio. Vous parlez de votre activité, on note ce qui compte pour vos clients.',
        },
        {
          title: 'Première version sous 72 h ouvrées',
          text: 'Dès réception de l’acompte et de vos éléments (textes, photos, logo), vous recevez un lien vers votre site, à voir sur votre téléphone.',
        },
        {
          title: 'Vous validez, on publie',
          text: 'On fait les retouches avec vous. Quand tout vous plaît, votre site est mis en ligne.',
        },
      ],
    },
    gallery: {
      heading: { pre: 'À quoi ressemble ', hl: 'votre site' },
      intro: 'Quelques aperçus de sites réalisés.',
      slots: ['Sur téléphone', 'Sur ordinateur', 'Formulaire et bouton d’appel'],
    },
    faq: {
      ids: ['delay72', 'plan', 'domain', 'cancel'],
      extra: [
        {
          q: 'Mon site sera-t-il visible sur Google ?',
          a: 'Le référencement de base est inclus : titres, descriptions et pages bien structurées, pour que Google comprenne votre activité. Pensez aussi à votre fiche Google Business : elle compte beaucoup pour être trouvé.',
        },
      ],
    },
  },

  businessCards: {
    title: 'Impression de cartes de visite, 500 ex. dès 89 € | MTWeb',
    description: `Impression de 500 cartes de visite recto-verso dès ${price(prices.businessCards)}, ou ${price(cardsWithDesign)} avec création graphique. BAT à valider avant impression.`,
    schemaName: 'Impression de cartes de visite',
    whatsapp: 'Bonjour MTWeb, je souhaite des cartes de visite.',
    hero: {
      eyebrow: 'Cartes de visite',
      heading: { pre: 'Une carte ', hl: 'qu’on garde' },
      intro: 'Des cartes de visite nettes, à vos couleurs. Vous avez déjà votre fichier ? On l’imprime. Sinon, on la crée pour vous.',
      priceTag: `500 cartes dès ${price(prices.businessCards)}`,
      visualAlt: 'Exemple de cartes de visite imprimées par MTWeb',
    },
    offers: {
      heading: { pre: 'Avec ou sans ', hl: 'création' },
      intro: 'Dans les deux cas : 500 cartes recto-verso, et un BAT à valider avant l’impression.',
      items: [
        {
          name: 'Vous avez votre fichier',
          price: price(prices.businessCards),
          amount: prices.businessCards,
          priceNote: '500 cartes recto-verso',
          items: [
            '500 cartes de visite recto-verso',
            'Impression à partir de votre fichier',
            'BAT à valider avant impression',
          ],
          cta: 'Commander mes cartes',
        },
        {
          name: 'On crée votre carte',
          price: price(cardsWithDesign),
          amount: cardsWithDesign,
          priceNote: `${price(prices.businessCards)} + ${price(prices.businessCardsDesign)} de création`,
          badge: 'Avec création',
          featured: true,
          items: [
            'Création graphique à vos couleurs',
            '500 cartes de visite recto-verso',
            'BAT à valider avant impression',
          ],
          cta: 'Créer mes cartes',
        },
      ],
    },
    extra: {
      eyebrow: 'Pas encore de logo ?',
      heading: { pre: 'Une carte commence ', hl: 'par un logo' },
      text: `Si vous n’avez pas encore de logo, on peut le créer en même temps : ${price(prices.logo)}, deux propositions et deux retouches. Votre carte, votre site et vos flyers auront la même image.`,
      link: { label: 'Voir la création de logo', key: 'logo' },
    },
    steps: {
      heading: { pre: 'Simple ', hl: 'comme bonjour' },
      items: [
        { title: 'Vous nous écrivez', text: 'Envoyez votre fichier, ou dites-nous ce que vous voulez sur la carte : nom, métier, téléphone, logo.' },
        { title: 'Vous validez le BAT', text: 'Vous recevez l’aperçu final. Vous vérifiez chaque détail. Rien n’est imprimé sans votre accord.' },
        { title: 'On imprime', text: 'Vos 500 cartes sont imprimées et vous les recevez, prêtes à distribuer.' },
      ],
    },
    gallery: {
      heading: { pre: 'Des cartes ', hl: 'en vrai' },
      intro: 'Quelques cartes réalisées.',
      slots: ['Recto', 'Verso', 'Cartes imprimées'],
    },
    faq: {
      ids: ['files', 'printDelay'],
      extra: [
        {
          q: 'C’est quoi, un BAT ?',
          a: 'Le « bon à tirer » : l’aperçu final de votre carte, telle qu’elle sera imprimée. Vous vérifiez les textes, le numéro et les couleurs, puis vous le validez. Rien n’est imprimé avant.',
        },
      ],
    },
  },

  flyers: {
    title: 'Impression de flyers personnalisés, sur devis | MTWeb',
    description: 'Création et impression de flyers personnalisés. Format, quantité, recto ou recto-verso : devis clair et rapide, BAT à valider avant impression.',
    schemaName: 'Création et impression de flyers',
    whatsapp: 'Bonjour MTWeb, je souhaite un devis pour des flyers.',
    hero: {
      eyebrow: 'Flyers',
      heading: { pre: 'Un flyer ', hl: 'qu’on lit' },
      intro: 'Pour une ouverture, une offre ou un événement : un flyer clair, qui donne envie de venir. On le crée, on l’imprime.',
      priceTag: 'Sur devis', // prix d'appel À CONFIRMER
      visualAlt: 'Exemple de flyer réalisé par MTWeb',
    },
    offers: {
      heading: { pre: 'Un devis ', hl: 'sur mesure' },
      intro: 'Le prix dépend du format, de la quantité et de la création. Dites-nous votre besoin : on vous répond avec un prix clair.',
      items: [
        {
          name: 'Flyers',
          price: 'Sur devis',
          items: [
            'Création du visuel, ou impression de votre fichier',
            'Format et quantité au choix',
            'Recto seul ou recto-verso',
            'BAT à valider avant impression',
          ],
          cta: 'Demander un devis',
        },
      ],
    },
    extra: {
      eyebrow: 'Fichier fourni ou création',
      heading: { pre: 'Vous avez une idée, ', hl: 'on s’occupe du reste' },
      text: 'Vous avez déjà un fichier prêt ? On l’imprime tel quel. Sinon, envoyez-nous vos textes, vos photos et votre logo : on compose un flyer lisible, avec l’essentiel en premier.',
    },
    steps: {
      heading: { pre: 'De l’idée ', hl: 'au flyer' },
      items: [
        { title: 'Vous nous écrivez', text: 'Format, quantité, date de distribution, textes : on fait le point ensemble et on vous envoie un devis.' },
        { title: 'Vous validez le BAT', text: 'Vous recevez l’aperçu final. Vous corrigez si besoin, puis vous validez.' },
        { title: 'On imprime', text: 'Vos flyers sont imprimés et vous les recevez, prêts à distribuer.' },
      ],
    },
    gallery: {
      heading: { pre: 'Des flyers ', hl: 'en vrai' },
      intro: 'Quelques flyers réalisés.',
      slots: ['Recto', 'Verso', 'Flyers imprimés'],
    },
    faq: {
      ids: ['files', 'printDelay'],
      extra: [
        {
          q: 'Comment est calculé le devis ?',
          a: 'Selon le format, la quantité, le recto seul ou le recto-verso, et la création si besoin. Envoyez-nous ces infos sur WhatsApp : on vous répond avec un prix clair.',
        },
      ],
    },
  },

  signs: {
    title: 'Panneau publicitaire personnalisé, création et impression | MTWeb',
    description: 'Panneau publicitaire personnalisé : création du visuel et impression, sur devis. BAT à valider avant impression. Pose non comprise.',
    schemaName: 'Création et impression de panneaux publicitaires',
    whatsapp: 'Bonjour MTWeb, je souhaite un devis pour un panneau publicitaire.',
    hero: {
      eyebrow: 'Panneaux publicitaires',
      heading: { pre: 'Vu de loin, ', hl: 'compris tout de suite' },
      intro: 'Un panneau se lit en deux secondes. On crée un visuel simple et lisible, puis on l’imprime. Vous n’avez plus qu’à l’installer.',
      priceTag: 'Sur devis',
      visualAlt: 'Exemple de panneau publicitaire réalisé par MTWeb',
    },
    offers: {
      heading: { pre: 'Création ', hl: 'et impression' },
      intro: 'Chaque panneau est différent. Dites-nous où il sera installé et la taille souhaitée : on vous conseille et on vous fait un devis.',
      items: [
        {
          name: 'Panneau publicitaire',
          price: 'Sur devis',
          items: [
            'Création d’un visuel lisible de loin',
            'Impression du panneau',
            'BAT à valider avant impression',
            'Conseils sur la taille et le message',
          ],
          cta: 'Demander un devis',
        },
      ],
      note: 'Pose non comprise.',
    },
    extra: {
      eyebrow: 'La pose',
      heading: { pre: 'La pose ', hl: 'n’est pas comprise' },
      text: 'MTWeb s’occupe de la création et de l’impression. L’installation reste à votre charge, ou à celle d’un poseur de votre choix. On vous livre un panneau prêt à poser.',
    },
    steps: {
      heading: { pre: 'Trois étapes, ', hl: 'c’est tout' },
      items: [
        { title: 'Vous nous écrivez', text: 'L’emplacement, la taille, le message principal : on fait le point et on vous envoie un devis.' },
        { title: 'Vous validez le BAT', text: 'Vous voyez le visuel final avant l’impression. Vous corrigez si besoin, puis vous validez.' },
        { title: 'On imprime, vous posez', text: 'Votre panneau est imprimé, prêt à être installé par vous ou par votre poseur.' },
      ],
    },
    gallery: {
      heading: { pre: 'Des panneaux ', hl: 'en situation' },
      intro: 'Quelques panneaux réalisés.',
      slots: ['Le panneau', 'Détail du visuel', 'Le panneau installé'],
    },
    faq: {
      ids: ['signsInstall', 'files', 'printDelay'],
      extra: [
        {
          q: 'Quelle taille choisir ?',
          a: 'Tout dépend de l’endroit et de la distance de lecture. Dites-nous où le panneau sera installé : on vous conseille une taille et un message adaptés.',
        },
      ],
    },
  },

  logo: {
    title: 'Création de logo professionnel, 70 € | MTWeb',
    description: `Création de logo à ${price(prices.logo)} : 2 propositions, 2 retouches, fichiers PNG, SVG et favicon livrés. Un logo simple et reconnaissable.`,
    schemaName: 'Création de logo',
    whatsapp: 'Bonjour MTWeb, je souhaite créer mon logo.',
    hero: {
      eyebrow: 'Logo et identité',
      heading: { pre: 'Un logo ', hl: 'simple et reconnaissable' },
      intro: 'Votre logo apparaît partout : site, cartes, flyers, panneaux. On le crée clair et lisible, pour qu’on se souvienne de vous.',
      priceTag: price(prices.logo),
      visualAlt: 'Exemple de logo créé par MTWeb',
    },
    offers: {
      heading: { pre: 'Un prix, ', hl: 'tout compris' },
      intro: 'Pas de surprise : deux propositions, deux retouches et tous les fichiers utiles.',
      items: [
        {
          name: 'Création de logo',
          price: price(prices.logo),
          amount: prices.logo,
          priceNote: 'Paiement unique',
          items: [
            '2 propositions de logo',
            '2 retouches sur la proposition choisie',
            'Fichiers PNG, SVG et favicon livrés',
          ],
          cta: 'Créer mon logo',
        },
      ],
    },
    extra: {
      eyebrow: 'Vos fichiers',
      heading: { pre: 'Prêt pour ', hl: 'tous les usages' },
      text: 'Vous recevez votre logo dans les formats dont vous aurez besoin, sans avoir à vous en occuper.',
      items: [
        'PNG : pour votre site, vos documents et les réseaux sociaux',
        'SVG : pour l’impression, même en très grand, sans perte de qualité',
        'Favicon : la petite icône qui s’affiche dans l’onglet du navigateur',
      ],
    },
    steps: {
      heading: { pre: 'Trois étapes, ', hl: 'c’est tout' },
      items: [
        { title: 'Vous nous parlez de vous', text: 'Votre activité, vos clients, les couleurs que vous aimez (ou pas) : quelques minutes suffisent.' },
        { title: '2 propositions', text: 'Vous recevez deux pistes différentes. Vous choisissez celle qui vous ressemble.' },
        { title: '2 retouches, vos fichiers', text: 'On ajuste la proposition choisie, puis vous recevez tous vos fichiers.' },
      ],
    },
    gallery: {
      heading: { pre: 'Des logos ', hl: 'en vrai' },
      intro: 'Quelques logos créés.',
      slots: ['Le logo', 'Variantes de couleur', 'Le logo en situation'],
    },
    faq: {
      ids: [],
      extra: [
        {
          q: 'Que comprennent les 2 retouches ?',
          a: 'Une fois la proposition choisie, vous pouvez demander deux séries de modifications : une couleur, une police, une taille, une disposition…',
        },
        {
          q: 'Quels fichiers vais-je recevoir ?',
          a: 'Votre logo en PNG (pour le web et les documents), en SVG (pour l’impression, même en grand) et en favicon (l’icône de l’onglet du navigateur).',
        },
      ],
    },
  },

  nfc: {
    title: 'Carte NFC avis Google : plus d’avis clients | MTWeb',
    description: `Carte NFC avis Google : vos clients approchent leur téléphone et laissent un avis en quelques secondes. ${price(prices.siteNfc)} avec votre site vitrine.`,
    schemaName: 'Carte NFC avis Google',
    whatsapp: 'Bonjour MTWeb, la carte NFC avis Google m’intéresse.',
    hero: {
      eyebrow: 'Cartes NFC avis Google',
      heading: { pre: 'Plus d’avis, ', hl: 'en un geste' },
      intro: 'Vos clients approchent leur téléphone de la carte : votre page d’avis Google s’ouvre. Ils laissent un avis en quelques secondes.',
      priceTag: `${price(prices.siteNfc)} avec le site`,
      visualAlt: 'Carte NFC avis Google réalisée par MTWeb',
    },
    offers: {
      heading: { pre: 'Avec votre ', hl: 'site vitrine' },
      intro: 'La carte NFC est proposée avec la création de votre site vitrine.',
      items: [
        {
          name: 'Site + carte NFC avis Google',
          price: price(prices.siteNfc),
          amount: prices.siteNfc,
          priceNote: 'Paiement unique',
          featured: true,
          items: [
            'Votre site vitrine de 1 à 5 pages',
            'Une carte NFC reliée à votre page d’avis Google',
            'Aucune application à installer pour vos clients',
          ],
          cta: 'Demander cette formule',
        },
        {
          // Prix de la carte seule : À CONFIRMER.
          name: 'Vous avez déjà un site ?',
          price: 'Sur demande',
          items: ['Écrivez-nous pour le prix de la carte NFC seule'],
          cta: 'Demander le prix',
        },
      ],
    },
    extra: {
      eyebrow: 'Pourquoi des avis ?',
      heading: { pre: 'Les avis, ', hl: 'ça rassure' },
      text: 'Avant de choisir, beaucoup de clients regardent les avis. Plus vous en avez, plus un nouveau client vous fait confiance. La carte rend le geste si simple que vos clients satisfaits le font tout de suite.',
    },
    steps: {
      heading: { pre: 'Comment ', hl: 'ça marche' },
      items: [
        { title: 'On prépare votre carte', text: 'On relie la carte à votre page d’avis Google. Il n’y a rien à configurer de votre côté.' },
        { title: 'Vous la montrez', text: 'Sur le comptoir, à la fin d’un rendez-vous, au moment de payer : là où vos clients sont contents.' },
        { title: 'Ils laissent un avis', text: 'Ils approchent leur téléphone, la page s’ouvre, ils notent et écrivent. C’est fait.' },
      ],
    },
    gallery: {
      heading: { pre: 'La carte ', hl: 'en vrai' },
      intro: 'La carte et le geste, en images.',
      slots: ['La carte NFC', 'Le geste', 'La page d’avis Google'],
    },
    faq: {
      ids: [],
      extra: [
        {
          q: 'Mes clients doivent-ils installer une application ?',
          a: 'Non. La plupart des téléphones récents lisent la carte directement : il suffit de l’approcher.',
        },
        {
          q: 'Comment fonctionne la carte ?',
          a: 'Elle contient une petite puce NFC qui ouvre la page d’avis Google de votre établissement. Votre client approche son téléphone, la page s’ouvre, il n’a plus qu’à noter et écrire.',
        },
      ],
    },
  },
};
