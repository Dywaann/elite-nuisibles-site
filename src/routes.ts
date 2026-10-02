import { POSTS } from './data/posts';

export const STATIC_ROUTES = [
  '/',
  '/services-lutte-nuisibles-paris/',
  '/deratisation-paris/',
  '/punaises-de-lit/',
  '/desinsectisation-cafards-blattes-idf/',
  '/desinsectisation-fourmis-idf/',
  '/professionnels-deratisation-paris/',
  '/tarifs-deratisation-desinsectisation-idf/',
  '/qui-sommes-nous/',
  '/contact-elite-nuisibles-idf/',
  '/demander-un-devis/',
  '/blog/',
  '/cgu/',
];

export const NOINDEX_ROUTES = ['/page-de-remerciement/', '/404/'];

export const POST_ROUTES = POSTS.map((p) => ({ path: `/${p.slug}/`, lastmod: p.updatedIso || p.date }));

export const ALL_ROUTES = [...STATIC_ROUTES, ...POST_ROUTES.map((p) => p.path), ...NOINDEX_ROUTES];
