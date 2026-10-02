import { Link } from 'react-router-dom';
import { ArrowRight, BadgeEuro, Clock, Euro, Leaf, Phone, ShieldCheck, Sparkles, Timer, Users } from 'lucide-react';
import Seo, { faqLd, localBusinessLd } from '../components/Seo';
import QuoteForm from '../components/QuoteForm';
import { DarkHero, Faq, FeatureGrid, FinalCta, PostCard, Reviews, TrustBar, Zones } from '../components/sections';
import { CallButton, Container, LinkButton, SectionHead } from '../components/ui';
import { GENERAL_FAQ, PESTS_ALL, SITE } from '../data/site';
import { POSTS } from '../data/posts';

const SERVICES = [
  {
    title: 'Dératisation',
    text: 'Rats, souris ou mulots : détection, traitement et rebouchage des accès pour une éradication durable.',
    img: '/images/rat-piege-deratisation.webp',
    alt: 'Rat pris dans une cage de capture',
    to: '/deratisation-paris/',
    from: '109 €',
  },
  {
    title: 'Punaises de lit',
    text: '3 traitements au choix : chimique, vapeur sèche à 180°C ou cryogénisation. Intervention discrète.',
    img: '/images/punaise-de-lit-drap.webp',
    alt: 'Punaise de lit sur un drap',
    to: '/punaises-de-lit/',
    from: '150 €',
  },
  {
    title: 'Cafards et blattes',
    text: 'Gel appât professionnel et pulvérisation ciblée pour éliminer la colonie entière, nids compris.',
    img: '/images/cafard-blatte.webp',
    alt: 'Cafard sur un évier',
    to: '/desinsectisation-cafards-blattes-idf/',
    from: '160 €',
  },
  {
    title: 'Fourmis',
    text: 'Localisation et traitement du nid pour que les fourmis ne reviennent pas.',
    img: '/images/fourmis-colonie.webp',
    alt: 'Colonie de fourmis',
    to: '/desinsectisation-fourmis-idf/',
    from: '160 €',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Dératisation Paris & Désinsectisation IDF | Intervention 1h"
        description="Entreprise de dératisation Paris et IDF. Intervention en moins d'1h, 7j/7. Devis gratuit, prix fixes. Punaises de lit, rats, cafards. ☎ 01 79 75 30 40"
        path="/"
        jsonLd={[localBusinessLd(), faqLd(GENERAL_FAQ)]}
      />

      <DarkHero
        image="/images/hero-techniciens-traitement-nuisibles.webp"
        imageAlt="Techniciens Elite Nuisibles en combinaison traitant un salon"
        eyebrow="Paris (75) et toute l’Île-de-France"
        title={<>Dératisation Paris & désinsectisation en Île-de-France</>}
        tagline="Intervention en moins d’1h, 7j/7"
        bullets={['Déplacement et devis 100% gratuits', 'Prix fixes, connus à l’avance', 'Techniciens certifiés Certibiocide']}
        aside={<QuoteForm source="Site principal - Accueil" />}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton className="sm:min-w-[240px]" />
          <LinkButton to="/tarifs-deratisation-desinsectisation-idf/" variant="white" className="!bg-white/10 !text-white ring-1 ring-white/25 hover:!bg-white/15">
            Voir nos tarifs
          </LinkButton>
        </div>
      </DarkHero>
      <TrustBar />

      {/* Services */}
      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <SectionHead
            eyebrow="Nos services"
            title="Votre entreprise de dératisation et désinsectisation en Île-de-France"
            intro="Particuliers ou professionnels (restaurant, hôtel, commerce, copropriété) : nos techniciens éliminent rats, souris, punaises de lit, cafards, fourmis et tout autre nuisible, avec un suivi rigoureux après chaque intervention."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link key={s.to} to={s.to} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[12.5px] font-bold text-navy">dès {s.from}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[19px] font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[14.5px] font-bold text-brand">
                    En savoir plus <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
            <h3 className="font-display text-[20px] font-extrabold text-ink">Tous les nuisibles que nous traitons</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {PESTS_ALL.map((p) => (
                <li key={p.name} className="text-[14.5px] leading-relaxed text-ink-soft">
                  <Link to={p.to} className="font-bold text-ink hover:text-brand">
                    {p.name}
                  </Link>{' '}
                  : {p.desc}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process / promises */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow="Notre engagement" title="Pourquoi choisir Elite Nuisibles IDF ?" />
          <FeatureGrid
            items={[
              { icon: <Timer className="h-5 w-5" />, title: 'Intervention en moins d’1h', text: 'Réactivité inégalée sur Paris et la petite couronne, 7 jours sur 7, y compris en urgence.' },
              { icon: <Euro className="h-5 w-5" />, title: 'Prix fixes connus à l’avance', text: 'Tranquillité d’esprit assurée : le tarif est annoncé avant l’intervention, sans surprise.' },
              { icon: <BadgeEuro className="h-5 w-5" />, title: 'Déplacement à 0 €', text: 'Aucun frais caché : le déplacement et l’établissement du devis sont entièrement gratuits.' },
              { icon: <ShieldCheck className="h-5 w-5" />, title: 'Certifiés Certibiocide', text: 'Nos techniciens sont formés et habilités à utiliser les produits biocides professionnels en toute sécurité.' },
              { icon: <Leaf className="h-5 w-5" />, title: 'Sécurité de votre famille', text: 'Produits homologués et consignes claires pour protéger enfants et animaux domestiques.' },
              { icon: <Sparkles className="h-5 w-5" />, title: 'Résultat garanti', text: 'Si les nuisibles reviennent pendant la période de garantie, nous repassons gratuitement.' },
            ]}
          />
        </Container>
      </section>

      {/* About strip */}
      <section className="bg-mist py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img src="/images/technicien-pulverisation-exterieur.webp" alt="Technicien Elite Nuisibles pulvérisant un traitement en extérieur" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-lift ring-1 ring-line sm:left-auto sm:w-[320px]">
              <p className="text-[15px] italic leading-relaxed text-ink-soft">“Notre mission est de garantir un environnement sain et sécurisé pour tous nos clients.”</p>
              <p className="mt-2 text-[14px] font-bold text-ink">Bastien Gaumet, Directeur</p>
            </div>
          </div>
          <div className="pt-6 lg:pt-0">
            <SectionHead
              center={false}
              eyebrow="Qui sommes-nous"
              title="Une entreprise francilienne, des techniciens certifiés"
              intro="Fondée en 2021, Elite Nuisibles IDF est spécialisée dans la lutte contre les nuisibles. Nos techniciens certifiés Certibiocide interviennent chez les particuliers comme chez les professionnels, avec des méthodes éprouvées et un suivi rigoureux."
            />
            <ul className="-mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Users className="h-4 w-4" />, t: 'Particuliers et professionnels' },
                { icon: <Clock className="h-4 w-4" />, t: 'Disponibles 24h/24, 7j/7' },
                { icon: <ShieldCheck className="h-4 w-4" />, t: 'Entreprise assurée' },
                { icon: <Phone className="h-4 w-4" />, t: 'Conseils gratuits par téléphone' },
              ].map((i) => (
                <li key={i.t} className="flex items-center gap-2.5 text-[15px] font-semibold text-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">{i.icon}</span>
                  {i.t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <LinkButton to="/qui-sommes-nous/">Découvrir l’entreprise</LinkButton>
              <img src="/images/certibiocide.webp" alt="Agréé Certibiocide, traitements raisonnés" width={170} height={89} loading="lazy" className="h-12 w-auto" />
            </div>
          </div>
        </Container>
      </section>

      <Reviews bg="bg-white" />
      <Zones detailed bg="bg-mist-light" />

      {/* Blog */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHead center={false} eyebrow="Conseils d’experts" title="Nos derniers articles" />
            <LinkButton to="/blog/" variant="outline" className="mb-10 shrink-0">
              Tous les articles <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
          <div className="-mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <Faq items={GENERAL_FAQ} />
      <FinalCta title={`Un nuisible chez vous ? Appelez le ${SITE.phone}`} />
    </>
  );
}
