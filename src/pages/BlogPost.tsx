import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Phone } from 'lucide-react';
import Seo, { breadcrumbLd, faqLd } from '../components/Seo';
import QuoteForm from '../components/QuoteForm';
import { Breadcrumbs, Faq, FinalCta, PostCard } from '../components/sections';
import { Container } from '../components/ui';
import type { Post } from '../data/posts';
import { POSTS } from '../data/posts';
import { SERVICES_NAV, SITE } from '../data/site';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPost({ post }: { post: Post }) {
  const path = `/${post.slug}/`;
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: post.title, path },
  ];
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.updatedIso || post.date,
    mainEntityOfPage: `${SITE.url}${path}`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo-elite-nuisibles.png` } },
  };
  const lds: object[] = [articleLd, breadcrumbLd(crumbs)];
  if (post.faq.length) lds.push(faqLd(post.faq));

  return (
    <>
      <Seo title={post.seoTitle} description={post.seoDescription} path={path} image={post.image} type="article" jsonLd={lds} />

      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_90%_10%,rgba(29,112,224,.28),transparent)]" />
        <Container className="relative max-w-[900px] py-12 sm:py-16">
          <Breadcrumbs items={crumbs} light />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.12] tracking-[-0.01em] sm:text-[42px]">{post.title}</h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {post.updatedIso ? `Mis à jour le ${fmt(post.updatedIso)}` : `Publié le ${fmt(post.date)}`}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readingMinutes} min de lecture
            </span>
            <span>Par l’équipe Elite Nuisibles IDF</span>
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <article className="min-w-0">
            <img src={post.image} alt={post.title} className="mb-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-card" />
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="mt-10 rounded-2xl bg-navy p-6 text-white sm:p-8">
              <p className="font-display text-[22px] font-extrabold">Besoin d’un professionnel ?</p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-white/80">
                Nos techniciens certifiés interviennent en moins d’1h dans toute l’Île-de-France. Déplacement et devis gratuits.
              </p>
              <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-go px-6 py-3.5 font-bold text-white shadow-go hover:bg-go-dark">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <QuoteForm compact source={`Blog - ${post.slug}`} service="Demande depuis le blog" />
            <div className="rounded-2xl bg-mist p-5 ring-1 ring-line">
              <p className="mb-3 text-[15px] font-bold text-ink">Nos services</p>
              <ul className="space-y-2">
                {SERVICES_NAV.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} className="text-[14.5px] font-medium text-brand hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {post.faq.length > 0 && <Faq items={post.faq} />}

      <section className="bg-mist-light py-16">
        <Container>
          <h2 className="mb-8 font-display text-[26px] font-extrabold text-ink">À lire aussi</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
