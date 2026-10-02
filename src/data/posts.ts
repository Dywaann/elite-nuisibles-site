import raw from './posts.json';

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  updated: string | null;
  updatedIso: string | null;
  image: string;
  excerpt: string;
  readingMinutes: number;
  html: string;
  faq: { q: string; a: string }[];
};

const MONTHS: Record<string, string> = {
  janvier: '01', février: '02', mars: '03', avril: '04', mai: '05', juin: '06',
  juillet: '07', août: '08', septembre: '09', octobre: '10', novembre: '11', décembre: '12',
};

function toIso(fr: string | null): string | null {
  if (!fr) return null;
  const m = fr.toLowerCase().match(/(\d{1,2})\s+([a-zéû]+)\s+(\d{4})/);
  if (!m || !MONTHS[m[2]]) return null;
  return `${m[3]}-${MONTHS[m[2]]}-${m[1].padStart(2, '0')}`;
}

export const POSTS: Post[] = (raw as Omit<Post, 'updatedIso'>[])
  .map((p) => ({ ...p, updatedIso: toIso(p.updated) }))
  .sort((a, b) => (b.updatedIso || b.date).localeCompare(a.updatedIso || a.date));

export const POSTS_BY_SLUG: Record<string, Post> = Object.fromEntries(POSTS.map((p) => [p.slug, p]));
