// English texts. Same structure as fr.ts (enforced by the `Dict` type).
// Prices are identical to the French version; only the formatting changes (€399).
import { prices, packSeparateValue } from '../data/site';
import type { Dict } from './fr';
import { serviceUiEn, servicesEn } from './services.en';

const price = (n: number) => `€${n.toLocaleString('en-GB')}`;

export const en: Dict = {
  price,

  common: {
    skipLink: 'Skip to content',
    breadcrumbHome: 'Home',
    homeAria: 'MTWeb, back to home page',
    navMain: 'Main navigation',
    navMobile: 'Mobile navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langSwitch: 'Site language',
    newWindow: 'new window',
    frenchOnly: 'in French',
    tagline: 'One single point of contact to be seen, online and on the street.',
    hours: 'Available 7 days a week, quick replies on WhatsApp', // TO CONFIRM
    vatNotice: 'VAT not applicable, article 293 B of the French Tax Code (CGI)',
    netPrices: 'Net prices.',
    legalStatus: 'sole trader (entrepreneur individuel)',
    whatsappCta: 'Message us on WhatsApp',
    whatsappFloatAria: 'Message MTWeb on WhatsApp (new window)',
    contact: 'Contact',
  },

  whatsapp: {
    default: 'Hello MTWeb, I’d like some information about my project.',
    pack: 'Hello MTWeb, I’m interested in the Launch Pack.',
    project: 'Hello MTWeb, I’d like to talk about my project.',
  },

  meta: {
    businessDescription:
      'Small business websites, logos, business cards, flyers, advertising signs and NFC Google review cards.',
    ogImageAlt: 'MTWeb: websites, logos and print',
  },

  pages: {
    home: 'Home',
    website: 'Website design',
    businessCards: 'Business cards',
    flyers: 'Flyers',
    signs: 'Advertising signs',
    logo: 'Logo design',
    nfc: 'NFC Google review cards',
    portfolio: 'Our work',
    pricing: 'Pricing',
    contact: 'Contact',
    notFound: 'Page not found',
    nice: 'Website design in Nice',
    avignon: 'Website design in Avignon',
    paca: 'Web & print agency in PACA',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    terms: 'Terms of sale',
  },

  nav: {
    website: 'Websites',
    prints: 'Print',
    logo: 'Logo',
    nfc: 'NFC cards',
  },

  footer: {
    services: 'Services',
    company: 'MTWeb',
    zones: 'Service areas',
  },

  realisations: {
    type: { site: 'Website', imprime: 'Print' },
    previewAlt: (name: string, label: string) => `Preview: ${name} (${label.toLowerCase()})`,
  },

  heroVisual: {
    cardRole: 'Web & print design',
    nfcHint: ['Tap', 'your phone'],
  },

  form: {
    subject: 'New message from mtwebpro.fr (English)',
    name: 'Your name',
    phone: 'Phone',
    email: 'Email',
    optional: '(optional)',
    message: 'Your project in a few words',
    privacyNote: 'Your details are only used to reply to you.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thank you! Your message is on its way. We’ll get back to you quickly.',
    error: 'Sending didn’t work. Message us on WhatsApp instead, it’s even faster.',
  },

  faq: [
    {
      id: 'delay72',
      q: 'Is 72 hours really realistic?',
      a: 'Yes. That’s 72 business hours (Monday to Friday), counted from when we receive your deposit and your materials: texts, photos and logo. Within that time, you get a link to a first version online, ready to view on your phone. Then we fine-tune it together until you’re happy with it.',
    },
    {
      id: 'plan',
      q: `What does the ${price(prices.hostingMonthly)} monthly plan include?`,
      a: `Hosting for your website, security, updates and ${prices.hostingEditMinutes} minutes of changes per month (opening hours, a price, a photo…). The first ${prices.hostingFreeMonths} months are free. The plan is separate from the website design price.`,
    },
    {
      id: 'domain',
      q: 'Who owns the domain name?',
      a: 'You do. The domain name (your web address, like your-name.com) is registered in your name. It stays yours, whatever happens.',
    },
    {
      id: 'cancel',
      q: 'What happens if I cancel the plan?',
      a: 'There’s no commitment: you can stop anytime with a simple message. Your website is then no longer hosted by MTWeb. You keep your domain name, and we can send you the website files so someone else can take over.',
    },
    {
      id: 'files',
      q: 'For print, do I supply the file or do you design it?',
      a: `Both work. If you already have a print-ready file, we print it as is. If not, we design it for you (for example, +${price(prices.businessCardsDesign)} for business cards). Either way, you get a final proof to approve: nothing is printed without your OK.`,
    },
    {
      id: 'printDelay',
      q: 'How long do printing and delivery take?',
      a: 'Usually about a week between proof approval and delivery, depending on the item and the quantity. Working to a date (opening, trade show, event)? Tell us at the start and we’ll plan around it.',
    },
    {
      id: 'remote',
      q: 'Do you work remotely?',
      a: 'Yes, anywhere in France. Everything is easy over WhatsApp, phone or video call. And if you prefer, we can also meet in person.',
    },
    {
      id: 'signsInstall',
      q: 'Is sign installation included?',
      a: 'No. MTWeb designs and prints your signs. Installation is up to you, or to an installer of your choice.',
    },
  ],

  home: {
    title: 'Website design, logos, business cards and flyers | MTWeb',
    description: `Small business websites from ${price(prices.site)}, logo ${price(prices.logo)}, business cards, flyers and advertising signs. One point of contact, first version online within 72 hours.`,
    hero: {
      eyebrow: 'Web & print design',
      // Espaces insécables : « on the street » reste sur une seule ligne.
      title: { pre: 'Seen online and ', hl: 'on\u00A0the\u00A0street' },
      subtitle: 'Websites, logos, business cards, flyers and signs, all from one person, start to finish.',
      ctaSecondary: 'See our work',
      proofs: ['First version online within 72 hours', 'Français / English', 'Direct contact on WhatsApp'],
    },
    services: {
      eyebrow: 'Services',
      title: { pre: 'What MTWeb ', hl: 'does for you' },
      intro: 'Everything you need to be found and remembered. Clear prices, no surprises.',
      allPrices: 'See all prices',
      items: {
        website: {
          title: 'Websites',
          text: 'A clear, fast website that reads well on a phone. Customers find you, and call you in one tap.',
          price: `from ${price(prices.site)}`,
          cta: 'Build my website',
        },
        prints: {
          title: 'Print',
          text: 'Business cards, flyers, advertising signs. We create the design and take care of the printing.',
          price: `500 cards from ${price(prices.businessCards)}`,
          cta: 'See print services',
          extraFlyers: 'Flyers',
          extraSigns: 'Signs',
        },
        nfc: {
          title: 'NFC cards',
          text: 'Customers tap their phone on the card and leave a Google review in seconds.',
          price: `${price(prices.siteNfc)} with your website`,
          cta: 'Discover the card',
        },
        logo: {
          title: 'Logo & branding',
          text: 'A simple, recognisable logo. Two concepts, two rounds of changes, every format you need.',
          price: price(prices.logo),
          cta: 'Design my logo',
        },
      },
    },
    pack: {
      badge: 'Launch Pack',
      title: 'Everything to get started, in one go',
      text: 'Your website, logo and business cards, designed together. You launch your business with a sharp image, online and in person.',
      items: [
        'A 1 to 5 page website that reads well on a phone',
        'A logo: 2 concepts, 2 rounds of changes, every format',
        '500 double-sided business cards, design included',
        'One single point of contact from start to finish',
      ],
      separately: 'Bought separately:',
      separateValue: price(packSeparateValue),
      askPrice: 'Ask for the pack price on WhatsApp.',
      cta: 'Ask about the Launch Pack',
    },
    work: {
      eyebrow: 'Our work',
      title: { pre: 'A few ', hl: 'projects' },
      intro: 'Websites and print for independent businesses getting started.',
      all: 'See all our work',
      ctaTitle: 'Your project here?',
      ctaText: 'Website, logo or print: let’s talk.',
    },
    method: {
      eyebrow: 'How it works',
      title: { pre: 'Three steps, ', hl: 'that’s it' },
      intro: 'Simple, fast, and you stay in control at every step.',
      steps: [
        {
          title: 'We meet',
          text: 'Over a coffee or on a video call, whichever suits you. You tell us about your business, we note what matters to your customers.',
        },
        {
          title: 'First version online within 72 hours',
          text: 'You see your website for real, on your own phone. Not a sketch: a real website, ready to fine-tune.',
        },
        {
          title: 'You approve, we print',
          text: 'We make the changes with you. Once you’re happy, the website goes live and we print your materials.',
        },
      ],
    },
    why: {
      eyebrow: 'Why MTWeb',
      title: { pre: 'Someone who ', hl: 'answers' },
      reasons: [
        {
          title: 'One point of contact',
          text: 'Website, logo, cards, flyers, signs: the same person handles everything. Your image stays consistent, everywhere.',
        },
        {
          title: 'Easy to reach',
          text: 'No switchboard, no tickets. Send a WhatsApp message, get a quick reply.',
        },
        {
          title: 'Français / English',
          text: 'Do you have international customers? Your website and our conversations can be in both languages.',
        },
        {
          title: 'No commitment',
          text: `Hosting and small changes: ${price(prices.hostingMonthly)} per month, first ${prices.hostingFreeMonths} months free. Stop whenever you like.`,
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: { pre: 'Your ', hl: 'questions' },
      intro: 'Answers to the questions we hear most often.',
    },
    contact: {
      eyebrow: 'Contact',
      title: { pre: 'Let’s talk about ', hl: 'your project' },
      intro: 'The easiest way: a WhatsApp message. Prefer to write? The form is right here.',
      cardTitle: 'One message, one answer',
    },
  },

  serviceUi: serviceUiEn,
  services: servicesEn,

  notFound: {
    title: 'Page not found | MTWeb',
    description: 'This page doesn’t exist or has moved.',
    eyebrow: 'Error 404',
    heading: { pre: 'This page ', hl: 'got lost' },
    text: 'It doesn’t exist, or it has moved. No worries: head back to the home page, or ask us your question directly.',
    back: 'Back to home page',
  },
};
