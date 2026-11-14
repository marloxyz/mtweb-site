// Liste des réalisations. Pour ajouter un projet : ajouter une entrée ici,
// puis déposer la capture dans /public/realisations/<slug>.webp.
// Tant que le fichier n'existe pas, un cadre vide est affiché (sans lien).
// Ratio unique 16:10 pour toutes les captures (ex. 1600×1000), sites comme imprimés.
// Le libellé du type (« Site web » / « Website ») vient des dictionnaires i18n.

export type RealisationType = 'site' | 'imprime';

export interface Realisation {
  slug: string; // nom du fichier image sans extension
  name: string; // nom du projet (identique dans les deux langues)
  type: RealisationType;
  detail?: { fr: string; en: string }; // précision affichée à la place du type
  url?: string; // lien vers le site en ligne (affiché seulement quand la capture existe)
  featured?: boolean; // affiché sur la page d'accueil
}

export const realisations: Realisation[] = [
  { slug: 'sos-plombier', name: 'SOS Plombier', type: 'site', url: 'https://sosplombier84.com', featured: true },
  { slug: 'lanna-vita', name: 'Lanna Vita', type: 'site', url: 'https://lannavita.com', featured: true },
  { slug: 'la-bonne-bouffe', name: 'La Bonne Bouffe', type: 'site', url: 'https://labonnebouffe-avignon.fr', featured: true },
  {
    slug: 'le-summum',
    name: 'Le Summum',
    type: 'imprime',
    detail: { fr: 'Menu et flyer', en: 'Menu and flyer' },
    featured: true,
  },
  { slug: 'a-m-barber', name: 'A&M Barber' /* nom exact À CONFIRMER */, type: 'site', featured: true },
];
