import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronRight as Sep,
  Clock,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { REVIEWS, SITE, ZONES } from '../data/site';
import { CallButton, Container, IconBadge, LinkButton, RatingPill, SectionHead, Stars } from './ui';
import type { Post } from '../data/posts';

/* ---------- Hero (dark, image overlay, like the landings) ---------- */
export function DarkHero({
  image,
  imageAlt,
  eyebrow,
  title,
  tagline,
  bullets,
  aside,
  children,
  compact = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  tagline?: ReactNode;
  bullets?: string[];
  aside?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" {...({ fetchpriority: "high" } as object)} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(14,28,71,.96)_0%,rgba(21,38,95,.9)_45%,rgba(21,38,95,.55)_100%)]" />
      <Container className={`grid items-center gap-10 ${aside ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''} ${compact ? 'py-14 sm:py-16' : 'py-12 sm:py-16 lg:py-20'}`}>
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Ligne ouverte maintenant
            </span>
            <RatingPill dark />
          </div>
          {eyebrow && (
            <p className="mb-4 inline-flex rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-[13px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">{eyebrow}</p>
          )}
          <h1 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.015em] sm:text-[44px] lg:text-[50px]">{title}</h1>
          {tagline && <p className="mt-4 font-display text-[22px] font-bold leading-snug text-emerald-400 sm:text-[26px]">{tagline}</p>}
          {bullets && (
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[16px] text-white/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden /> {b}
                </li>
              ))}
            </ul>
          )}
          {children ?? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton className="sm:min-w-[240px]" />
              <a href="#devis" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Devis gratuit en ligne
              </a>
            </div>
          )}
        </div>
        {aside && <div className="lg:pl-4">{aside}</div>}
      </Container>
    </section>
  );
}

/* ---------- Light page header for content pages ---------- */
export function PageHeader({ title, intro, crumbs }: { title: ReactNode; intro?: ReactNode; crumbs: { name: string; path: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_90%_10%,rgba(29,112,224,.28),transparent)]" />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs items={crumbs} light />
        <h1 className="mt-4 max-w-[820px] font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.015em] sm:text-[44px]">{title}</h1>
        {intro && <p className="mt-4 max-w-[680px] text-[17px] leading-relaxed text-white/80">{intro}</p>}
      </Container>
    </section>
  );
}

export function Breadcrumbs({ items, light = false }: { items: { name: string; path: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Fil d’Ariane">
      <ol className={`flex flex-wrap items-center gap-1.5 text-[13.5px] ${light ? 'text-white/65' : 'text-ink-muted'}`}>
        {items.map((c, i) => (
          <li key={c.path} className="inline-flex items-center gap-1.5">
            {i > 0 && <Sep className="h-3.5 w-3.5 opacity-60" aria-hidden />}
            {i === items.length - 1 ? (
              <span aria-current="page" className={light ? 'text-white' : 'text-ink'}>
                {c.name}
              </span>
            ) : (
              <Link to={c.path} className="hover:underline">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Trust strip ---------- */
export function TrustBar() {
  const items = [
    { icon: <Zap className="h-5 w-5" />, t: 'Intervention en urgence', s: 'En moins d’1h · 7j/7' },
    { icon: <ShieldCheck className="h-5 w-5" />, t: 'Certifié Certibiocide', s: 'Traitements sécurisés' },
    { icon: <BadgeCheck className="h-5 w-5" />, t: 'Entreprise assurée', s: 'Responsabilité civile pro' },
    { icon: <Clock className="h-5 w-5" />, t: 'Déplacement gratuit', s: 'Prix fixes annoncés' },
  ];
  return (
    <div className="border-y border-white/10 bg-navy">
      <Container className="grid grid-cols-2 gap-x-4 gap-y-5 py-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.t} className="flex items-center gap-3 text-white">
            <IconBadge dark>{i.icon}</IconBadge>
            <div>
              <p className="text-[14.5px] font-bold leading-tight">{i.t}</p>
              <p className="text-[12.5px] text-white/60">{i.s}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

/* ---------- Feature card grid ---------- */
export function FeatureGrid({ items, cols = 3 }: { items: { icon: ReactNode; title: string; text: string }[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((i) => (
        <div key={i.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
          <IconBadge>{i.icon}</IconBadge>
          <h3 className="mt-4 font-display text-[18px] font-extrabold text-ink">{i.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{i.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Reviews ---------- */
export function Reviews({ bg = 'bg-mist' }: { bg?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.85), behavior: 'smooth' });
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <Container>
        <SectionHead eyebrow="Avis clients" title="Ils nous ont fait confiance" />
        <div className="-mt-4 mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-ink shadow-card ring-1 ring-line">
            <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
              <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
            </svg>
            <Stars size={14} /> Google Reviews · {SITE.rating.value}/5
          </span>
        </div>
        <div className="relative">
          <button type="button" onClick={() => scroll(-1)} aria-label="Avis précédents" className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-line md:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div ref={ref} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="w-[85%] shrink-0 snap-start rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:w-[46%] lg:w-[31.5%]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-[13px] font-bold text-white">
                    {r.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <figcaption>
                    <p className="text-[15px] font-bold text-ink">{r.name}</p>
                    <p className="text-[12.5px] text-ink-muted">Avis Google · {r.date}</p>
                  </figcaption>
                </div>
                <div className="mt-3">
                  <Stars />
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-soft">“{r.text}”</blockquote>
              </figure>
            ))}
          </div>
          <button type="button" onClick={() => scroll(1)} aria-label="Avis suivants" className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-line md:flex">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Zones ---------- */
export function Zones({ detailed = false, bg = 'bg-white' }: { detailed?: boolean; bg?: string }) {
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <Container>
        <SectionHead
          eyebrow="Zone d’intervention"
          title={
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-7 w-7 text-brand" aria-hidden /> Présents partout en Île-de-France
            </span>
          }
          intro="Nous intervenons dans les 8 départements d’Île-de-France, 7 jours sur 7, en moins d’1 heure sur Paris et la petite couronne."
        />
        {detailed ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((z) => (
              <div key={z.code} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="font-display text-[17px] font-extrabold text-ink">
                  {z.name} <span className="text-brand">({z.code})</span>
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{z.cities}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mx-auto flex max-w-[760px] flex-wrap justify-center gap-2.5">
            {ZONES.map((z) => (
              <li key={z.code} className="rounded-full border border-line bg-white px-4 py-2 text-[14.5px] font-semibold text-ink shadow-card">
                {z.name} ({z.code})
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items, title = 'Questions fréquentes', bg = 'bg-mist' }: { items: { q: string; a: string }[]; title?: string; bg?: string }) {
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <Container className="max-w-[860px]">
        <SectionHead eyebrow="FAQ" title={title} />
        <div className="space-y-3">
          {items.map((i) => (
            <details key={i.q} className="group rounded-2xl bg-white shadow-card ring-1 ring-line open:ring-brand/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[16.5px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                {i.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand transition group-open:rotate-45">
                  <span className="text-[20px] leading-none">+</span>
                </span>
              </summary>
              <p className="px-6 pb-5 text-[15.5px] leading-relaxed text-ink-soft">{i.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCta({ title = 'Un nuisible chez vous ? Intervention rapide et discrète', text }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-center text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_90%_10%,rgba(29,112,224,.22),transparent)]" />
      <Container className="relative max-w-[760px]">
        <h2 className="font-display text-[28px] font-extrabold leading-tight sm:text-[36px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[16.5px] leading-relaxed text-white/75">
          {text ?? 'Nos techniciens certifiés interviennent en moins d’1 heure, 7j/7. Diagnostic et déplacement gratuits, prix fixes, résultat garanti.'}
        </p>
        <a
          href={SITE.phoneHref}
          className="mx-auto mt-8 flex w-full max-w-[340px] flex-col items-center rounded-2xl bg-brand px-6 py-4 shadow-brand transition hover:bg-brand-dark"
        >
          <span className="text-[13px] text-white/80">Appel gratuit · 24h/24 · Réponse immédiate</span>
          <span className="mt-1 font-display text-[24px] font-extrabold">{SITE.phone}</span>
        </a>
        <LinkButton to="/demander-un-devis/" variant="white" className="mt-4">
          <Mail className="h-4 w-4" /> Devis par mail
        </LinkButton>
        <p className="mt-8 text-[13px] text-white/45">Elite Nuisibles IDF · Entreprise certifiée Certibiocide</p>
      </Container>
    </section>
  );
}

/* ---------- Blog card ---------- */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-lift">
      <Link to={`/${post.slug}/`} className="block aspect-[16/9] overflow-hidden bg-mist">
        <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand">
          {new Date(post.updatedIso || post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readingMinutes} min
        </p>
        <h3 className="mt-2 font-display text-[18px] font-extrabold leading-snug text-ink">
          <Link to={`/${post.slug}/`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[14.5px] leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Link to={`/${post.slug}/`} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[14.5px] font-bold text-brand">
          Lire l’article <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
