// Pre-renders every route to static HTML so Google sees full content + meta tags.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://elite-nuisibles-idf.fr';

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, STATIC_ROUTES, POST_ROUTES, ALL_ROUTES } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

let count = 0;
for (const url of ALL_ROUTES) {
  const { html, head, htmlAttrs } = render(url);
  const page = template
    .replace('<html lang="fr">', `<html ${htmlAttrs || 'lang="fr"'}>`)
    .replace('<!--head-->', head)
    .replace('<!--app-->', html);
  const out = url === '/404/' ? path.join(dist, '404.html') : path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  count++;
}

const today = new Date().toISOString().slice(0, 10);
const urls = [
  ...STATIC_ROUTES.map((u) => ({ loc: u, lastmod: today, priority: u === '/' ? '1.0' : '0.8' })),
  ...POST_ROUTES.map((p) => ({ loc: p.path, lastmod: p.lastmod, priority: '0.6' })),
];
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /page-de-remerciement/\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${count} pages, sitemap with ${urls.length} URLs.`);
