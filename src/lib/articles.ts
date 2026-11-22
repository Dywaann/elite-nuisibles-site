// Articles du blog.
// Deux sources fusionnées :
//  1. src/content/articles-wordpress.json : les 21 articles repris de l'ancien site (HTML).
//  2. src/content/articles/*.md : les nouveaux articles, un fichier Markdown par article.
//     C'est dans ce dossier que l'automatisation quotidienne dépose ses fichiers.
import legacy from '../content/articles-wordpress.json';

export type Faq = { q: string; a: string };
export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string; // AAAA-MM-JJ
  updatedIso: string | null;
  image: string;
  excerpt: string;
  readingMinutes: number;
  html: string;
  faq: Faq[];
};

const MONTHS: Record<string, string> = {
  janvier: '01', février: '02', mars: '03', avril: '04', mai: '05', juin: '06',
  juillet: '07', août: '08', septembre: '09', octobre: '10', novembre: '11', décembre: '12',
};

function toIso(fr: string | null | undefined): string | null {
  if (!fr) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(fr)) return fr.slice(0, 10);
  const m = fr.toLowerCase().match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/);
  if (!m || !MONTHS[m[2]]) return null;
  return `${m[3]}-${MONTHS[m[2]]}-${m[1].padStart(2, '0')}`;
}

function isoDate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).slice(0, 10);
}

const fromLegacy: Article[] = (legacy as any[]).map((p) => ({
  slug: p.slug,
  title: p.title,
  seoTitle: p.seoTitle,
  seoDescription: p.seoDescription,
  date: p.date,
  updatedIso: toIso(p.updated),
  image: p.image,
  excerpt: p.excerpt,
  readingMinutes: p.readingMinutes,
  html: p.html,
  faq: p.faq || [],
}));

type MdModule = {
  frontmatter: Record<string, any>;
  compiledContent: () => string | Promise<string>;
  rawContent?: () => string;
};

const mdModules = import.meta.glob<MdModule>('../content/articles/*.md', { eager: true });

const fromMarkdown: Article[] = await Promise.all(
  Object.entries(mdModules).map(async ([file, mod]) => {
    const fm = mod.frontmatter || {};
    const slug = fm.slug || file.split('/').pop()!.replace(/\.md$/, '');
    const html = await mod.compiledContent();
    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return {
      slug,
      title: fm.title,
      seoTitle: fm.seoTitle || fm.title,
      seoDescription: fm.seoDescription || fm.excerpt || '',
      date: isoDate(fm.date),
      updatedIso: fm.updated ? isoDate(fm.updated) : null,
      image: fm.image || '/images/technicien-elite-nuisibles-intervention.webp',
      excerpt: fm.excerpt || '',
      readingMinutes: fm.readingMinutes || Math.max(1, Math.round(words / 220)),
      html,
      faq: fm.faq || [],
    } as Article;
  }),
);

export const ARTICLES: Article[] = [...fromMarkdown, ...fromLegacy].sort((a, b) =>
  (b.updatedIso || b.date).localeCompare(a.updatedIso || a.date),
);

export const ARTICLES_BY_SLUG: Record<string, Article> = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));

export const formatDateFr = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
