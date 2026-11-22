// Plan du site généré au build (pages fixes, pages nuisibles, articles).
import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { PESTS } from '../data/pests';
import { ARTICLES } from '../lib/articles';

const STATIC = [
  '/',
  '/services-lutte-nuisibles-paris/',
  '/professionnels-deratisation-paris/',
  '/tarifs-deratisation-desinsectisation-idf/',
  '/qui-sommes-nous/',
  '/contact-elite-nuisibles-idf/',
  '/demander-un-devis/',
  '/blog/',
  '/cgu/',
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...STATIC.map((loc) => ({ loc, lastmod: today, priority: loc === '/' ? '1.0' : '0.8' })),
    ...Object.values(PESTS).map((p) => ({ loc: p.path, lastmod: today, priority: '0.9' })),
    ...ARTICLES.map((a) => ({ loc: `/${a.slug}/`, lastmod: a.updatedIso || a.date, priority: '0.6' })),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${SITE.url}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
