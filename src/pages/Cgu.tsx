import Seo, { breadcrumbLd } from '../components/Seo';
import { PageHeader } from '../components/sections';
import { Container } from '../components/ui';
import cgu from '../data/cgu.html?raw';

export default function Cgu() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Mentions légales, CGU et CGV', path: '/cgu/' },
  ];
  return (
    <>
      <Seo
        title="Politique de confidentialité, mentions légales, CGU et CGV | Elite Nuisibles IDF"
        description="Politique de confidentialité (RGPD), mentions légales, conditions générales d’utilisation et conditions générales de vente d’Elite Nuisibles IDF."
        path="/cgu/"
        jsonLd={breadcrumbLd(crumbs)}
      />
      <PageHeader crumbs={crumbs} title="Politique de confidentialité, mentions légales et conditions générales" intro="En vigueur au 01/01/2026." />
      <section className="bg-white py-14 sm:py-16">
        <Container className="max-w-[860px]">
          <div className="prose-article" dangerouslySetInnerHTML={{ __html: cgu }} />
        </Container>
      </section>
    </>
  );
}
