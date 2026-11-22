import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// Sur les aperçus Netlify, tout est fermé aux moteurs de recherche.
const preview = import.meta.env.PUBLIC_NOINDEX === '1';
const body = preview
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\nDisallow: /page-de-remerciement/\n\nSitemap: ${SITE.url}/sitemap.xml\n`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
