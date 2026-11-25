// Service pages content, in English (British). Same structure as services.fr.ts.
// Prices are identical to the French version (formatted €399).
import { prices } from '../data/site';
import type { ServiceContent, ServiceKey, ServiceUi } from './types';

const price = (n: number) => `€${n.toLocaleString('en-GB')}`;
const cardsWithDesign = prices.businessCards + prices.businessCardsDesign;

export const serviceUiEn: ServiceUi = {
  breadcrumb: 'Breadcrumb',
  offersEyebrow: 'Pricing',
  seePricing: 'See pricing',
  offerLabel: 'Option',
  stepsEyebrow: 'How it works',
  galleryEyebrow: 'In pictures',
  faqEyebrow: 'FAQ',
  faqHeading: { pre: 'Your ', hl: 'questions' },
  ctaHeading: { pre: 'Shall we ', hl: 'talk?' },
  ctaText: 'One WhatsApp message is all it takes. Tell us what you need, we’ll reply quickly, no strings attached.',
  ctaForm: 'Or write to us using the form',
  otherServices: 'Other services',
  vatLine: 'Net prices. VAT not applicable, article 293 B of the French Tax Code (CGI).',
  packTeaser: {
    badge: 'Launch Pack',
    title: 'Website, logo and business cards together',
    text: 'Just starting out? The Launch Pack brings all three together, designed as one, with a single point of contact.',
    cta: 'See the Launch Pack',
  },
};

export const servicesEn: Record<ServiceKey, ServiceContent> = {
  website: {
    title: 'Affordable small business website design, from €399 | MTWeb',
    description: `Professional 1 to 5 page small business website from ${price(prices.site)}: mobile-friendly, contact form, call button, Google Maps. First version online within 72 business hours.`,
    schemaName: 'Small business website design',
    whatsapp: 'Hello MTWeb, I’d like a website for my business.',
    hero: {
      eyebrow: 'Website design',
      heading: { pre: 'A clear website ', hl: 'that feels like you' },
      intro: 'A simple, fast website that reads well on a phone. Customers understand what you do and contact you in one tap.',
      priceTag: `from ${price(prices.site)}`,
      visualAlt: 'Example of a website designed by MTWeb',
    },
    offers: {
      heading: { pre: 'Two options, ', hl: 'clear prices' },
      intro: 'You pay for the website once. Hosting is a separate plan, explained just below.',
      items: [
        {
          name: 'Small business website',
          price: `from ${price(prices.site)}`,
          amount: prices.site,
          priceNote: 'One-off payment',
          items: [
            '1 to 5 pages: home, services, contact…',
            'Reads well on phone, tablet and computer',
            'Contact form',
            'One-tap call button',
            'Google Maps so people can find you',
            'Basic SEO so you show up properly on Google',
            'First version online within 72 business hours',
          ],
          cta: 'Ask for my website',
        },
        {
          name: 'Website + NFC Google review card',
          price: price(prices.siteNfc),
          amount: prices.siteNfc,
          priceNote: 'One-off payment',
          badge: 'More customer reviews',
          featured: true,
          items: [
            'Everything in the website option',
            'An NFC card that opens your Google review page',
            'Customers leave a review in seconds',
            'More reviews, more trust from new customers',
          ],
          cta: 'Ask for this option',
        },
      ],
    },
    extra: {
      eyebrow: 'Hosting and maintenance',
      heading: { pre: 'The plan, ', hl: 'separate and no commitment' },
      text: `To stay online, your website needs hosting. This is a plan separate from the design price: ${price(prices.hostingMonthly)} per month, first ${prices.hostingFreeMonths} months free.`,
      items: [
        'Hosting for your website',
        'Security and updates',
        `${prices.hostingEditMinutes} minutes of changes per month (opening hours, a price, a photo…)`,
        `First ${prices.hostingFreeMonths} months free`,
        'No commitment: stop whenever you like',
      ],
    },
    steps: {
      heading: { pre: 'Three steps, ', hl: 'that’s it' },
      items: [
        {
          title: 'We meet',
          text: 'Over a coffee or on a video call. You tell us about your business, we note what matters to your customers.',
        },
        {
          title: 'First version within 72 business hours',
          text: 'Once we receive your deposit and your materials (texts, photos, logo), you get a link to your website, ready to view on your phone.',
        },
        {
          title: 'You approve, we go live',
          text: 'We make the changes with you. Once you’re happy, your website goes live.',
        },
      ],
    },
    gallery: {
      heading: { pre: 'What ', hl: 'your website looks like' },
      intro: 'A few previews of websites we’ve built.',
      slots: ['On a phone', 'On a computer', 'Contact form and call button'],
    },
    faq: {
      ids: ['delay72', 'plan', 'domain', 'cancel'],
      extra: [
        {
          q: 'Will my website show up on Google?',
          a: 'Basic SEO is included: titles, descriptions and well-structured pages, so Google understands your business. Your Google Business Profile matters a lot too for being found.',
        },
      ],
    },
  },

  businessCards: {
    title: 'Business card printing, 500 cards from €89 | MTWeb',
    description: `500 double-sided business cards printed from ${price(prices.businessCards)}, or ${price(cardsWithDesign)} with design included. Proof to approve before printing.`,
    schemaName: 'Business card printing',
    whatsapp: 'Hello MTWeb, I’d like some business cards.',
    hero: {
      eyebrow: 'Business cards',
      heading: { pre: 'A card ', hl: 'people keep' },
      intro: 'Sharp business cards in your colours. Already have a file? We print it. If not, we design it for you.',
      priceTag: `500 cards from ${price(prices.businessCards)}`,
      visualAlt: 'Example of business cards printed by MTWeb',
    },
    offers: {
      heading: { pre: 'With or without ', hl: 'design' },
      intro: 'Either way: 500 double-sided cards, and a proof to approve before printing.',
      items: [
        {
          name: 'You have your file',
          price: price(prices.businessCards),
          amount: prices.businessCards,
          priceNote: '500 double-sided cards',
          items: ['500 double-sided business cards', 'Printed from your file', 'Proof to approve before printing'],
          cta: 'Order my cards',
        },
        {
          name: 'We design your card',
          price: price(cardsWithDesign),
          amount: cardsWithDesign,
          priceNote: `${price(prices.businessCards)} + ${price(prices.businessCardsDesign)} for the design`,
          badge: 'Design included',
          featured: true,
          items: ['Design in your colours', '500 double-sided business cards', 'Proof to approve before printing'],
          cta: 'Design my cards',
        },
      ],
    },
    extra: {
      eyebrow: 'No logo yet?',
      heading: { pre: 'A card starts ', hl: 'with a logo' },
      text: `If you don’t have a logo yet, we can design it at the same time: ${price(prices.logo)}, two concepts and two rounds of changes. Your card, website and flyers will share the same look.`,
      link: { label: 'See logo design', key: 'logo' },
    },
    steps: {
      heading: { pre: 'As simple ', hl: 'as hello' },
      items: [
        { title: 'You message us', text: 'Send your file, or tell us what goes on the card: name, trade, phone number, logo.' },
        { title: 'You approve the proof', text: 'You get the final preview. You check every detail. Nothing is printed without your OK.' },
        { title: 'We print', text: 'Your 500 cards are printed and delivered to you, ready to hand out.' },
      ],
    },
    gallery: {
      heading: { pre: 'Cards ', hl: 'for real' },
      intro: 'A few cards we’ve made.',
      slots: ['Front', 'Back', 'Printed cards'],
    },
    faq: {
      ids: ['files', 'printDelay'],
      extra: [
        {
          q: 'What is a proof?',
          a: 'The final preview of your card, exactly as it will be printed. You check the text, phone number and colours, then you approve it. Nothing is printed before that.',
        },
      ],
    },
  },

  flyers: {
    title: 'Custom flyer design and printing, quote on request | MTWeb',
    description: 'Custom flyer design and printing. Size, quantity, single or double-sided: a clear, quick quote, with a proof to approve before printing.',
    schemaName: 'Flyer design and printing',
    whatsapp: 'Hello MTWeb, I’d like a quote for flyers.',
    hero: {
      eyebrow: 'Flyers',
      heading: { pre: 'A flyer ', hl: 'people read' },
      intro: 'For an opening, an offer or an event: a clear flyer that makes people want to come. We design it, we print it.',
      priceTag: 'Quote on request',
      visualAlt: 'Example of a flyer made by MTWeb',
    },
    offers: {
      heading: { pre: 'A quote ', hl: 'made for you' },
      intro: 'The price depends on the size, the quantity and the design work. Tell us what you need: we’ll reply with a clear price.',
      items: [
        {
          name: 'Flyers',
          price: 'Quote on request',
          items: [
            'Design, or printing from your file',
            'Size and quantity of your choice',
            'Single or double-sided',
            'Proof to approve before printing',
          ],
          cta: 'Ask for a quote',
        },
      ],
    },
    extra: {
      eyebrow: 'Your file or our design',
      heading: { pre: 'You bring the idea, ', hl: 'we handle the rest' },
      text: 'Already have a print-ready file? We print it as is. If not, send us your texts, photos and logo: we put together an easy-to-read flyer, with the essentials first.',
    },
    steps: {
      heading: { pre: 'From idea ', hl: 'to flyer' },
      items: [
        { title: 'You message us', text: 'Size, quantity, distribution date, texts: we go through it together and send you a quote.' },
        { title: 'You approve the proof', text: 'You get the final preview. You correct it if needed, then you approve it.' },
        { title: 'We print', text: 'Your flyers are printed and delivered to you, ready to hand out.' },
      ],
    },
    gallery: {
      heading: { pre: 'Flyers ', hl: 'for real' },
      intro: 'A few flyers we’ve made.',
      slots: ['Front', 'Back', 'Printed flyers'],
    },
    faq: {
      ids: ['files', 'printDelay'],
      extra: [
        {
          q: 'How is the quote worked out?',
          a: 'Based on the size, the quantity, single or double-sided, and design work if needed. Send us these details on WhatsApp: we’ll reply with a clear price.',
        },
      ],
    },
  },

  signs: {
    title: 'Custom advertising signs, design and printing | MTWeb',
    description: 'Custom advertising signs: design and printing, quote on request. Proof to approve before printing. Installation not included.',
    schemaName: 'Advertising sign design and printing',
    whatsapp: 'Hello MTWeb, I’d like a quote for an advertising sign.',
    hero: {
      eyebrow: 'Advertising signs',
      heading: { pre: 'Seen from afar, ', hl: 'understood at once' },
      intro: 'A sign is read in two seconds. We design a simple, readable visual, then we print it. All you have to do is put it up.',
      priceTag: 'Quote on request',
      visualAlt: 'Example of an advertising sign made by MTWeb',
    },
    offers: {
      heading: { pre: 'Design ', hl: 'and printing' },
      intro: 'Every sign is different. Tell us where it will go and the size you have in mind: we’ll advise you and send a quote.',
      items: [
        {
          name: 'Advertising sign',
          price: 'Quote on request',
          items: [
            'A visual designed to be read from a distance',
            'Printing of the sign',
            'Proof to approve before printing',
            'Advice on size and message',
          ],
          cta: 'Ask for a quote',
        },
      ],
      note: 'Installation not included.',
    },
    extra: {
      eyebrow: 'Installation',
      heading: { pre: 'Installation ', hl: 'isn’t included' },
      text: 'MTWeb handles the design and printing. Installation is up to you, or to an installer of your choice. You get a sign that’s ready to put up.',
    },
    steps: {
      heading: { pre: 'Three steps, ', hl: 'that’s it' },
      items: [
        { title: 'You message us', text: 'The location, the size, the main message: we go through it and send you a quote.' },
        { title: 'You approve the proof', text: 'You see the final visual before printing. You correct it if needed, then you approve it.' },
        { title: 'We print, you install', text: 'Your sign is printed, ready to be put up by you or your installer.' },
      ],
    },
    gallery: {
      heading: { pre: 'Signs ', hl: 'in place' },
      intro: 'A few signs we’ve made.',
      slots: ['The sign', 'Close-up of the design', 'The sign in place'],
    },
    faq: {
      ids: ['signsInstall', 'files', 'printDelay'],
      extra: [
        {
          q: 'What size should I choose?',
          a: 'It depends on the location and how far away people will read it. Tell us where the sign will go: we’ll suggest a size and a message that work.',
        },
      ],
    },
  },

  logo: {
    title: 'Professional logo design, €70 | MTWeb',
    description: `Logo design for ${price(prices.logo)}: 2 concepts, 2 rounds of changes, PNG, SVG and favicon files included. A simple, recognisable logo.`,
    schemaName: 'Logo design',
    whatsapp: 'Hello MTWeb, I’d like a logo for my business.',
    hero: {
      eyebrow: 'Logo & branding',
      heading: { pre: 'A logo that’s ', hl: 'simple and memorable' },
      intro: 'Your logo appears everywhere: website, cards, flyers, signs. We make it clear and readable, so people remember you.',
      priceTag: price(prices.logo),
      visualAlt: 'Example of a logo designed by MTWeb',
    },
    offers: {
      heading: { pre: 'One price, ', hl: 'all included' },
      intro: 'No surprises: two concepts, two rounds of changes and every file you need.',
      items: [
        {
          name: 'Logo design',
          price: price(prices.logo),
          amount: prices.logo,
          priceNote: 'One-off payment',
          items: ['2 logo concepts', '2 rounds of changes on the chosen concept', 'PNG, SVG and favicon files included'],
          cta: 'Design my logo',
        },
      ],
    },
    extra: {
      eyebrow: 'Your files',
      heading: { pre: 'Ready for ', hl: 'every use' },
      text: 'You get your logo in every format you’ll need, without having to think about it.',
      items: [
        'PNG: for your website, documents and social media',
        'SVG: for printing, even very large, with no loss of quality',
        'Favicon: the small icon shown in the browser tab',
      ],
    },
    steps: {
      heading: { pre: 'Three steps, ', hl: 'that’s it' },
      items: [
        { title: 'Tell us about you', text: 'Your business, your customers, the colours you like (or don’t): a few minutes is enough.' },
        { title: '2 concepts', text: 'You get two different directions. You pick the one that feels like you.' },
        { title: '2 rounds of changes, your files', text: 'We fine-tune the chosen concept, then you get all your files.' },
      ],
    },
    gallery: {
      heading: { pre: 'Logos ', hl: 'for real' },
      intro: 'A few logos we’ve designed.',
      slots: ['The logo', 'Colour variations', 'The logo in use'],
    },
    faq: {
      ids: [],
      extra: [
        {
          q: 'What do the 2 rounds of changes cover?',
          a: 'Once you’ve chosen a concept, you can ask for two sets of changes: a colour, a font, a size, a layout…',
        },
        {
          q: 'Which files will I get?',
          a: 'Your logo as PNG (for web and documents), SVG (for printing, even large) and favicon (the browser tab icon).',
        },
      ],
    },
  },

  nfc: {
    title: 'NFC Google review card: more customer reviews | MTWeb',
    description: `NFC Google review card: customers tap their phone and leave a review in seconds. ${price(prices.siteNfc)} with your small business website.`,
    schemaName: 'NFC Google review card',
    whatsapp: 'Hello MTWeb, I’m interested in the NFC Google review card.',
    hero: {
      eyebrow: 'NFC Google review cards',
      heading: { pre: 'More reviews, ', hl: 'in one tap' },
      intro: 'Customers tap their phone on the card: your Google review page opens. They leave a review in seconds.',
      priceTag: `${price(prices.siteNfc)} with your website`,
      visualAlt: 'NFC Google review card made by MTWeb',
    },
    offers: {
      heading: { pre: 'With your ', hl: 'website' },
      intro: 'The NFC card comes with your small business website.',
      items: [
        {
          name: 'Website + NFC Google review card',
          price: price(prices.siteNfc),
          amount: prices.siteNfc,
          priceNote: 'One-off payment',
          featured: true,
          items: [
            'Your 1 to 5 page small business website',
            'An NFC card linked to your Google review page',
            'No app for your customers to install',
          ],
          cta: 'Ask for this option',
        },
        {
          name: 'Already have a website?',
          price: 'On request',
          items: ['Message us for the price of the NFC card on its own'],
          cta: 'Ask for the price',
        },
      ],
    },
    extra: {
      eyebrow: 'Why reviews?',
      heading: { pre: 'Reviews ', hl: 'build trust' },
      text: 'Before choosing, many customers check the reviews. The more you have, the more a new customer trusts you. The card makes it so easy that happy customers do it straight away.',
    },
    steps: {
      heading: { pre: 'How ', hl: 'it works' },
      items: [
        { title: 'We set up your card', text: 'We link the card to your Google review page. There’s nothing for you to configure.' },
        { title: 'You show it', text: 'On the counter, at the end of an appointment, when people pay: wherever your customers are happy.' },
        { title: 'They leave a review', text: 'They tap their phone, the page opens, they rate and write. Done.' },
      ],
    },
    gallery: {
      heading: { pre: 'The card ', hl: 'for real' },
      intro: 'The card and the gesture, in pictures.',
      slots: ['The NFC card', 'The tap', 'The Google review page'],
    },
    faq: {
      ids: [],
      extra: [
        {
          q: 'Do my customers need to install an app?',
          a: 'No. Most recent phones read the card directly: they just need to hold it close.',
        },
        {
          q: 'How does the card work?',
          a: 'It contains a small NFC chip that opens your business’s Google review page. Your customer taps their phone, the page opens, and they just rate and write.',
        },
      ],
    },
  },
};
