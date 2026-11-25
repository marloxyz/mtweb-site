# Site MTWeb – création web et print

## Client
MTWeb (Marius Tourniaire, entrepreneur individuel) : création de sites vitrines, identité visuelle et supports imprimés (cartes de visite, flyers, panneaux publicitaires, cartes NFC avis Google).
Positionnement : « un seul interlocuteur pour être visible, en ligne et dans la rue ».
Cible : commerçants, artisans et indépendants qui démarrent ou n'ont pas encore de présence en ligne, souvent peu à l'aise avec le digital. Communication généraliste : ne jamais nommer de métiers ciblés.
Zone : toute la France à distance ; déplacements à Nice, Avignon et en région PACA.
IMPORTANT : aucune mention géographique sur la page d'accueil. Le local passe uniquement par les pages villes (voir Pages) et le SEO.

## Coordonnées
- WhatsApp / téléphone : +33 6 34 41 86 16 (canal principal, bouton flottant sur toutes les pages)
- Domaine : mtwebpro.fr
- Email : contact@mtwebpro.fr [À CONFIRMER]
- Adresse : non affichée sur le site (entreprise sans local client), uniquement dans les mentions légales [À COMPLÉTER]
- Horaires : « disponible 7j/7, réponse rapide sur WhatsApp » [À CONFIRMER]
- Réseaux : [À CONFIRMER]

## Langues : site bilingue FR / EN
- Français par défaut à la racine (/), anglais sous /en/ avec des URLs traduites (routage i18n d'Astro, `prefixDefaultLocale: false`).
- Correspondance des URLs : src/i18n/routes.ts (source unique pour les liens, le sélecteur de langue, hreflang et le sitemap).
- Tous les textes affichés sont dans src/i18n/fr.ts et src/i18n/en.ts (même structure, vérifiée par TypeScript : `npm run check`). Aucun texte en dur dans les composants.
- Les pages sont des vues partagées (src/views/) qui reçoivent `lang` ; les fichiers de src/pages/ et src/pages/en/ ne font qu'appeler la vue.
- Sélecteur FR | EN dans le header ; il renvoie vers la même page dans l'autre langue (ou vers l'accueil de l'autre langue si la page n'existe pas).
- Chaque page a un title et une meta description traduits, des balises hreflang (fr, en, x-default = fr), og:locale et html lang.
- En français uniquement : pages locales (Nice, Avignon, PACA) et pages légales (mentions légales, confidentialité, CGV). Depuis l'anglais, les liens vers ces pages sont marqués « (FR) ».
- Prix identiques dans les deux langues (format « 399 € » en français, « €399 » en anglais). Mention TVA traduite : « VAT not applicable, article 293 B of the French Tax Code (CGI) ».
- Version anglaise : même ton (direct, chaleureux, phrases courtes, sans jargon), anglais britannique. Aucune mention géographique sur /en non plus.

## Pages
URLs : français / anglais. « FR seul » = pas de version anglaise.
- Accueil / et /en (sans aucune ville) :
  1. Hero : « Visible en ligne et dans la rue. » + sous-titre « Sites web, logos, cartes de visite, flyers et panneaux, conçus par un seul interlocuteur. » + CTA « Écrire sur WhatsApp » + CTA secondaire « Voir les réalisations ». Bandeau de preuves : Première version en ligne sous 72 h · Français / English · Contact direct sur WhatsApp
  2. Services : 4 blocs (Sites web / Imprimés / Cartes NFC / Logo et identité), chacun avec prix d'appel et lien vers sa page
  3. Pack Lancement : site + logo + 500 cartes de visite [prix du pack À CONFIRMER]
  4. Réalisations : 4 à 6 projets en vignettes (emplacements vides, voir Contenus)
  5. Méthode en 3 étapes : on se rencontre (ou visio) → première version en ligne sous 72 h → vous validez, on imprime
  6. Pourquoi MTWeb : un seul interlocuteur, joignable directement, bilingue FR/EN, abonnement sans engagement
  7. FAQ (6 à 8 questions)
  8. Contact : WhatsApp + formulaire court
- /creation-site-web · /en/website-design : site vitrine 399 €, site + carte NFC 449 €, contenu détaillé, abonnement
- /cartes-de-visite · /en/business-cards : 500 ex. recto-verso 89 € (fichier fourni), + 20 € avec création graphique
- /flyers · /en/flyers : sur devis [prix d'appel À CONFIRMER]
- /panneaux-publicitaires · /en/advertising-signs : création + impression, pose non comprise, sur devis
- /logo · /en/logo-design : 70 €, 2 propositions + 2 retouches, PNG/SVG/favicon
- /cartes-nfc-avis-google · /en/nfc-google-review-cards
- /realisations · /en/portfolio : grille filtrable (Sites / Imprimés)
- /tarifs · /en/pricing : tableau récapitulatif « à partir de »
- Pages locales SEO, FR seul (non liées depuis le hero, liées dans le footer « Zones d'intervention ») :
  - /creation-site-web-nice
  - /creation-site-web-avignon
  - /agence-web-print-paca
  Chacune avec un contenu propre (déplacement sur place, réalisations locales, communes voisines). Interdit : dupliquer le texte en changeant seulement la ville.
- /contact · /en/contact
- Mentions légales, Politique de confidentialité, CGV (texte fourni séparément) : FR seul
- 404 : /404 et /en/404

## Contenus
Tarifs à afficher (prix nets, mention « TVA non applicable, art. 293 B du CGI ») :
- Site vitrine 1 à 5 pages : dès 399 € (responsive, formulaire, bouton d'appel, Google Maps, référencement de base)
- Site + carte NFC avis Google : 449 €
- Logo : 70 €
- Cartes de visite 500 ex. recto-verso : 89 € (+ 20 € création graphique)
- Flyers, panneaux : sur devis
- Hébergement et maintenance : 20 €/mois, 2 premiers mois offerts, sans engagement, 30 min de modifications par mois incluses
Préciser clairement sur /creation-site-web et /tarifs ce qui est inclus à 399 € et que l'hébergement est un abonnement à part.

Réalisations : EMPLACEMENTS VIDES, les captures seront ajoutées plus tard.
- Chaque vignette = un cadre vide au ratio 16:10 pour tous les projets (sites comme imprimés, pour aligner les lignes), fond teinté bleu clair, bordure fine.
- Sur l'accueil : 5 projets + une 6e carte « Votre projet ici ? » avec bouton WhatsApp (même format). Grille : 1 colonne sur mobile, 2 sur tablette, 3 dès 1024 px ; aucune carte seule sur sa ligne. Aucune image factice, aucune maquette générée, aucun texte de remplissage dans le cadre.
- Sous le cadre : nom du projet + type (site ou imprimé). Pas de lien tant que la capture n'est pas là.
- Chaque cadre affiche automatiquement l'image dès qu'un fichier du même nom est déposé dans /public/realisations/ :
  - sos-plombier.webp (site, sosplombier84.com)
  - lanna-vita.webp (site, lannavita.com)
  - la-bonne-bouffe.webp (site, labonnebouffe-avignon.fr)
  - le-summum.webp (menu / flyer imprimé)
  - a-m-barber.webp (site)
- Les projets sont listés dans un seul fichier de données (src/data/realisations.ts) pour en ajouter ou retirer facilement.
- Même principe pour les visuels des pages services (cadres vides 16:10 réservés) : déposer les images dans /public/visuels/<page-fr>/ (ex. /public/visuels/creation-site-web/) sous les noms hero.webp (visuel du hero) et 1.webp, 2.webp, 3.webp (galerie, dans l'ordre des légendes de src/i18n/services.fr.ts). Les mêmes images servent aux versions FR et EN.

Délai des 72 h : 72 heures ouvrées (du lundi au vendredi), comptées à partir de la réception de l'acompte et des éléments du client (textes, photos, logo). À préciser partout où le délai est détaillé.

FAQ à rédiger : délai réel des 72 h, ce que contient l'abonnement, à qui appartient le nom de domaine, que se passe-t-il si j'arrête l'abonnement, fichier fourni ou création pour les imprimés (BAT obligatoire), délais d'impression et livraison, travaillez-vous à distance, la pose des panneaux est-elle comprise (non).

Textes : rédigés par Claude Code, ton direct et chaleureux, phrases courtes, vouvoiement, zéro jargon technique. Version anglaise : même ton, en anglais britannique.

## Stack
Astro + Tailwind, site 100 % statique, déploiement Cloudflare Pages. Bilingue FR/EN via le routage i18n d'Astro (voir Langues).
Formulaire de contact via Web3Forms (pas de Netlify Forms), clé d'accès dans une variable d'environnement.
Polices auto-hébergées (pas d'appel à Google Fonts).

## SEO
- Accueil : mots-clés nationaux sans ville (création site vitrine, site internet professionnel, cartes de visite, flyers, panneaux publicitaires, logo)
- Pages services : service + intention (« création site vitrine pas cher », « impression cartes de visite », « panneau publicitaire personnalisé »)
- Pages locales : création site web Nice, création site internet Avignon, graphiste Nice, impression flyers Avignon, agence web PACA, + communes voisines (Cagnes-sur-Mer, Saint-Laurent-du-Var, Antibes / Le Pontet, Carpentras, Cavaillon) [À CONFIRMER]
- Title + meta description uniques par page et par langue
- hreflang fr / en / x-default (fr) sur chaque page traduite, aussi dans le sitemap (xhtml:link)
- Version anglaise : mots-clés « website design », « small business website », « business cards », « flyers », « logo design »
- Schema.org ProfessionalService avec areaServed (France, Provence-Alpes-Côte d'Azur, Nice, Avignon), téléphone, priceRange ; FAQPage sur la FAQ ; Service + Offer sur les pages services
- sitemap.xml, robots.txt, Open Graph, URLs propres, domaine canonique https://mtwebpro.fr

## Style : direction « Atelier », aux couleurs du logo
Logo fourni : /public/logo.png (fond transparent). « MT » en bleu gras, « Web » en gris anthracite, point final rouge.
- Fond papier #F4EFE6, surfaces claires #FBF8F3
- Encre (texte, boutons principaux) : #2C3137, gris anthracite du logo
- Bleu du logo : #4678E1, pour les grands titres, aplats, icônes et éléments graphiques. Pour du texte bleu de petite taille ou un bouton bleu avec texte blanc, utiliser la teinte foncée #2F5FC4 (contraste AA)
- Rouge du point : #CC2D28, en touche ponctuelle uniquement (point final des titres, pastilles, badge « nouveau »), jamais en aplat large
- Jaune surligneur : #FFD400, en surlignage derrière un mot clé des titres, jamais en texte
- Signature graphique : reprendre le point rouge du logo à la fin des titres principaux (« Visible en ligne et dans la rue. » avec le point en rouge)
- Titres : Fraunces (serif éditorial, grandes tailles) ; texte : Inter
- Motifs discrets : repères de coupe dans les coins des cartes, légère texture papier
- Animations sobres (apparition au scroll, léger survol des cartes), désactivées si prefers-reduced-motion
- Mobile-first, bouton WhatsApp flottant visible en permanence
- Favicon : généré à partir du logo (« MT » bleu + point rouge sur fond transparent)
- Le site doit être visiblement plus soigné que les sites clients : c'est la vitrine du savoir-faire

## Règles
- Site bilingue : français (par défaut) et anglais. Toute nouvelle page ou tout nouveau texte doit être ajouté dans les deux dictionnaires (sauf pages FR seul)
- Pas de librairies lourdes, images WebP + lazy-loading
- Accessibilité : contrastes AA, alt sur toutes les images
- Mentions légales : éditeur = Marius Tourniaire, entrepreneur individuel, nom commercial MTWeb, SIRET [À COMPLÉTER], adresse [À COMPLÉTER], TVA non applicable art. 293 B du CGI ; hébergeur = Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA
- Pas de traceurs par défaut (donc pas de bandeau cookies) ; politique de confidentialité pour le formulaire
- Logo MTWeb présent dans le header, le footer, le favicon et l'image OG

## Checklist de livraison
- [ ] Responsive testé mobile / tablette / desktop
- [ ] Lighthouse > 90 sur les 4 catégories
- [ ] Favicon + image OG
- [ ] Formulaire fonctionnel (test d'envoi réel)
- [ ] Mentions légales + politique de confidentialité + CGV
- [ ] Page 404 (FR et EN)
- [ ] Version anglaise complète : chaque page traduite, hreflang, sélecteur FR | EN, `npm run check` sans erreur
- [ ] Aucune ville sur la page d'accueil
- [ ] Pages locales avec contenu unique
- [ ] Emplacements des réalisations vides et prêts à recevoir les captures
- [ ] Domaine mtwebpro.fr branché sur Cloudflare Pages + HTTPS
- [ ] Fiche Google Business (zone desservie, adresse masquée) liée au site
