import Seo, { breadcrumbLd } from '../components/Seo';
import { FinalCta, PageHeader, PostCard } from '../components/sections';
import { Container } from '../components/ui';
import { POSTS } from '../data/posts';
import { SITE } from '../data/site';

export default function Blog() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Blog', path: '/blog/' },
  ];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Le blog Elite Nuisibles IDF',
    url: `${SITE.url}/blog/`,
    blogPost: POSTS.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE.url}/${p.slug}/`, datePublished: p.date })),
  };
  return (
    <>
      <Seo
        title="Blog : guide pratique contre les nuisibles | Elite Nuisibles IDF"
        description="Conseils d’experts pour prévenir et traiter rats, souris, punaises de lit, cafards et fourmis en Île-de-France. Le guide pratique d’Elite Nuisibles IDF."
        path="/blog/"
        jsonLd={[ld, breadcrumbLd(crumbs)]}
      />
      <PageHeader crumbs={crumbs} title="Guide pratique contre les nuisibles" intro="Nos conseils d’experts pour reconnaître, prévenir et traiter les infestations." />
      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
