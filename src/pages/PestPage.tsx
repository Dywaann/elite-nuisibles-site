import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Check } from 'lucide-react';
import Seo, { breadcrumbLd, faqLd, localBusinessLd } from '../components/Seo';
import QuoteForm from '../components/QuoteForm';
import { Breadcrumbs, DarkHero, Faq, FinalCta, PostCard, Reviews, TrustBar, Zones } from '../components/sections';
import { CallButton, Container, LinkButton, SectionHead } from '../components/ui';
import { SITE } from '../data/site';
import type { PestPageData } from '../data/pests';
import { POSTS_BY_SLUG } from '../data/posts';

export default function PestPage({ d }: { d: PestPageData }) {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos services', path: '/services-lutte-nuisibles-paris/' },
    { name: d.serviceName, path: d.path },
  ];
  const related = d.related.map((s) => POSTS_BY_SLUG[s]).filter(Boolean);
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: d.serviceName,
    serviceType: d.serviceName,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    offers: { '@type': 'Offer', priceCurrency: 'EUR', price: d.priceFrom.replace(/[^\d]/g, ''), description: `À partir de ${d.priceFrom}` },
  };

  return (
    <>
      <Seo title={d.seoTitle} description={d.seoDescription} path={d.path} image={d.heroImage} jsonLd={[localBusinessLd(), serviceLd, faqLd(d.faq), breadcrumbLd(crumbs)]} />

      <DarkHero
        image={d.heroImage}
        imageAlt={d.heroAlt}
        eyebrow={d.eyebrow}
        title={d.h1}
        tagline={d.tagline}
        bullets={d.bullets}
        aside={<QuoteForm service={d.formService} source={`Site principal - ${d.serviceName}`} />}
      />
      <TrustBar />

      <div className="border-b border-line bg-white">
        <Container className="py-3.5">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      {/* Intro + dangers */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead center={false} eyebrow={d.serviceName} title={d.intro.title} />
            <div className="-mt-4 space-y-4 text-[16.5px] leading-relaxed text-ink-soft">
              {d.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="brand" label={`Appeler le ${SITE.phone}`} />
              <LinkButton to="/tarifs-deratisation-desinsectisation-idf/" variant="outline">
                Tarifs dès {d.priceFrom}
              </LinkButton>
            </div>
          </div>
          <div className="rounded-3xl bg-mist p-6 ring-1 ring-line sm:p-8">
            <p className="flex items-center gap-2 font-display text-[19px] font-extrabold text-ink">
              <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden /> {d.dangers.title}
            </p>
            <ul className="mt-5 space-y-5">
              {d.dangers.items.map((i) => (
                <li key={i.title}>
                  <p className="text-[16px] font-bold text-ink">{i.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{i.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Methods */}
      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow={d.methods.eyebrow} title={d.methods.title} intro={d.methods.intro} />
          <div className="grid gap-5 lg:grid-cols-3">
            {d.methods.items.map((m, idx) => (
              <div key={m.title} className={`relative rounded-2xl bg-white p-6 shadow-card ${m.badge ? 'ring-2 ring-brand' : 'ring-1 ring-line'}`}>
                {m.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-[12px] font-bold text-white">{m.badge}</span>
                )}
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy font-display text-[15px] font-extrabold text-white">{idx + 1}</span>
                <h3 className="mt-4 font-display text-[19px] font-extrabold text-ink">{m.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{m.text}</p>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-amber-600">Avantages</p>
                <ul className="mt-2.5 space-y-2">
                  {m.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[14.5px] text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-go" aria-hidden /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CallButton className="w-full sm:w-auto sm:min-w-[320px]" label="Appeler un technicien maintenant" />
          </div>
        </Container>
      </section>

      {/* Image + promises */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img src={d.sideImage} alt={d.sideAlt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          <div>
            <SectionHead center={false} eyebrow="Notre engagement" title="Une intervention rapide, au juste prix" />
            <ol className="-mt-4 space-y-5">
              {[
                { t: 'Intervention en moins d’1h en IDF', s: 'Nous comprenons l’urgence : un technicien se déplace rapidement pour limiter les dégâts.' },
                { t: 'Prix fixes connus à l’avance', s: 'Le tarif est annoncé dès le départ, sans surprise sur la facture.' },
                { t: 'Déplacement à 0 €', s: 'Aucun frais caché : déplacement et devis sont entièrement gratuits.' },
              ].map((i, idx) => (
                <li key={i.t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint font-display text-[16px] font-extrabold text-brand">{idx + 1}</span>
                  <div>
                    <p className="text-[16.5px] font-bold text-ink">{i.t}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{i.s}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-mist p-4 ring-1 ring-line">
              <img src="/images/certibiocide.webp" alt="Agréé Certibiocide" width={130} height={68} loading="lazy" className="h-11 w-auto" />
              <p className="text-[14px] leading-relaxed text-ink-soft">Entreprise certifiée Certibiocide : des techniciens formés à l’usage responsable des produits biocides.</p>
            </div>
          </div>
        </Container>
      </section>

      <Reviews />
      <Zones />
      <Faq items={d.faq} title={`Vos questions sur : ${d.serviceName.toLowerCase()}`} />

      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-[26px] font-extrabold text-ink sm:text-[30px]">Nos conseils d’experts</h2>
              <Link to="/blog/" className="hidden items-center gap-1.5 text-[15px] font-bold text-brand sm:inline-flex">
                Tous les articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCta title={`${d.serviceName} : intervention rapide et discrète`} />
    </>
  );
}
