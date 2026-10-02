import { Link } from 'react-router-dom';
import { ArrowRight, Bug, Building2, Clock, Rat, ShieldCheck, Sparkles } from 'lucide-react';
import Seo, { breadcrumbLd, localBusinessLd } from '../components/Seo';
import { Faq, FeatureGrid, FinalCta, PageHeader, Reviews } from '../components/sections';
import { CallButton, Container, LinkButton, SectionHead } from '../components/ui';
import { GENERAL_FAQ, PESTS_ALL } from '../data/site';

const BIG = [
  { icon: <Rat className="h-6 w-6" />, title: 'Dératisation', text: 'Élimination rapide des rats, souris et mulots, avec prévention durable contre les infestations.', to: '/deratisation-paris/', img: '/images/rat-piege-deratisation.webp' },
  { icon: <Bug className="h-6 w-6" />, title: 'Désinsectisation', text: 'Éradication efficace des cafards, punaises de lit, fourmis, puces et mites.', to: '/desinsectisation-cafards-blattes-idf/', img: '/images/traitement-insecticide-cuisine.webp' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'Désinfection', text: 'Désinfection complète après infestation pour retrouver un environnement sain et sécurisé.', to: '/demander-un-devis/', img: '/images/traitement-vapeur-punaises.webp' },
];

export default function Services() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos services', path: '/services-lutte-nuisibles-paris/' },
  ];
  return (
    <>
      <Seo
        title="Services lutte nuisibles Paris & IDF | Elite Nuisibles IDF"
        description="Dératisation, désinsectisation, punaises de lit et désinfection à Paris et en Île-de-France. Intervention en moins d’1h, 7j/7, déplacement et devis gratuits."
        path="/services-lutte-nuisibles-paris/"
        jsonLd={[localBusinessLd(), breadcrumbLd(crumbs)]}
      />
      <PageHeader
        crumbs={crumbs}
        title="Nos services de lutte contre les nuisibles"
        intro="Intervention 7j/7 en moins d’1h. Déplacement et devis 100% gratuits, prix fixes et transparence garantie."
      />

      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {BIG.map((s) => (
              <Link key={s.title} to={s.to} className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">{s.icon}</span>
                  <h2 className="mt-4 font-display text-[22px] font-extrabold text-ink">{s.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="Tous les nuisibles"
            title="Une solution adaptée à chaque nuisible"
            intro="Notre équipe utilise des techniques avancées et des produits professionnels homologués pour garantir l’efficacité de chaque intervention."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PESTS_ALL.map((p) => (
              <Link key={p.name} to={p.to} className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-brand">
                <div>
                  <h3 className="font-display text-[18px] font-extrabold text-ink group-hover:text-brand">{p.name}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-brand opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow="Notre engagement" title="Qualité, réactivité, sécurité" />
          <FeatureGrid
            items={[
              { icon: <ShieldCheck className="h-5 w-5" />, title: 'Qualité et expertise', text: 'Des services de haute qualité grâce à une équipe de techniciens certifiés et des méthodes éprouvées.' },
              { icon: <Clock className="h-5 w-5" />, title: 'Réactivité et disponibilité', text: 'Disponibles 24h/24 et 7j/7 pour répondre à vos urgences avec une solution rapide et efficace.' },
              { icon: <Building2 className="h-5 w-5" />, title: 'Particuliers et pros', text: 'Logements, copropriétés, restaurants, hôtels, commerces et bureaux : un protocole adapté à chaque lieu.' },
            ]}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton />
            <LinkButton to="/demander-un-devis/">Demander un devis gratuit</LinkButton>
          </div>
        </Container>
      </section>

      <Reviews bg="bg-white" />
      <Faq items={GENERAL_FAQ} />
      <FinalCta />
    </>
  );
}
