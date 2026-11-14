// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { routes } from './src/i18n/routes.ts';

const SITE = 'https://mtwebpro.fr';
const abs = (/** @type {string} */ p) => `${SITE}${p}`;

// Pour le sitemap : URL absolue → versions linguistiques de la même page (hreflang).
/** @type {Map<string, { url: string; lang: string }[]>} */
const alternatesByUrl = new Map();
for (const def of Object.values(routes)) {
  const links = Object.entries(def).map(([lang, path]) => ({ url: abs(path), lang }));
  if (links.length > 1) for (const l of links) alternatesByUrl.set(l.url, links);
}

export default defineConfig({
  site: SITE,
  // URLs propres sans slash final : /creation-site-web → creation-site-web.html
  // (Cloudflare Pages sert ces fichiers sur l'URL sans extension).
  trailingSlash: 'never',
  build: { format: 'file' },
  // Bilingue : français par défaut à la racine, anglais sous /en/ avec des URLs traduites.
  // Les correspondances d'URLs sont dans src/i18n/routes.ts.
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  // Barre d'outils Astro (dev uniquement) désactivée : elle masquait le contenu en bas d'écran.
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      serialize(item) {
        const url = item.url === `${SITE}/` ? item.url : item.url.replace(/\/$/, '');
        const links = alternatesByUrl.get(url);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
