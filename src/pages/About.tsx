import { HeartHandshake, Leaf, ShieldCheck, Target } from 'lucide-react';
import Seo, { breadcrumbLd, localBusinessLd } from '../components/Seo';
import { FeatureGrid, FinalCta, PageHeader, Reviews, Zones } from '../components/sections';
import { CallButton, Container, SectionHead } from '../components/ui';

export default function About() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui sommes-nous ?', path: '/qui-sommes-nous/' },
  ];
  return (
    <>
      <Seo
        title="Qui sommes-nous ? | Elite Nuisibles IDF"
        description="Elite Nuisibles IDF, entreprise fondée en 2021 en Île-de-France, offre des services de dératisation et désinsectisation pour particuliers et professionnels."
        path="/qui-sommes-nous/"
        jsonLd={[localBusinessLd(), breadcrumbLd(crumbs)]}
      />
      <PageHeader crumbs={crumbs} title="Qui sommes-nous ?" intro="Des artisans fiables et reconnus, au service des particuliers et des professionnels d’Île-de-France." />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <img src="/images/technicien-elite-nuisibles-intervention.webp" alt="Technicien Elite Nuisibles en intervention dans un logement" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
          <div>
            <SectionHead center={false} eyebrow="Notre histoire" title="Votre partenaire de confiance contre les nuisibles" />
            <div className="-mt-4 space-y-4 text-[16.5px] leading-relaxed text-ink-soft">
              <p>
                Fondée en 2021, Elite Nuisibles IDF est une entreprise spécialisée dans la lutte contre les nuisibles. Depuis notre création, nous nous engageons à offrir des services de haute qualité pour garantir un environnement sain et sécurisé à nos clients, qu’ils soient particuliers ou professionnels.
              </p>
              <p>
                Notre équipe de techniciens certifiés Certibiocide intervient dans les 8 départements d’Île-de-France, 7 jours sur 7, avec un objectif simple : une intervention rapide, un prix juste annoncé à l’avance et un résultat durable.
              </p>
            </div>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-brand bg-mist p-6">
              <p className="text-[17px] italic leading-relaxed text-ink">“Notre mission chez Elite Nuisibles IDF est de garantir un environnement sain et sécurisé pour tous nos clients.”</p>
              <footer className="mt-3 text-[14.5px] font-bold text-ink">Bastien Gaumet, Directeur</footer>
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow="L’amour du métier" title="Notre mission et nos valeurs" />
          <FeatureGrid
            cols={2}
            items={[
              { icon: <Target className="h-5 w-5" />, title: 'Notre mission', text: 'Éradiquer les nuisibles rapidement et efficacement, tout en respectant l’environnement et la sécurité de nos clients.' },
              { icon: <Leaf className="h-5 w-5" />, title: 'Des méthodes raisonnées', text: 'Nous privilégions des méthodes et des produits adaptés, appliqués avec précision, pour protéger votre santé et celle de vos proches.' },
              { icon: <ShieldCheck className="h-5 w-5" />, title: 'Certifiés et assurés', text: 'Certification Certibiocide et responsabilité civile professionnelle : vous êtes entre de bonnes mains.' },
              { icon: <HeartHandshake className="h-5 w-5" />, title: 'Transparence', text: 'Déplacement gratuit, devis clair avant toute intervention et prix fixe : pas de mauvaise surprise.' },
            ]}
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <img src="/images/certibiocide.webp" alt="Agréé Certibiocide, traitements raisonnés" width={190} height={100} loading="lazy" className="h-14 w-auto" />
            <CallButton />
          </div>
        </Container>
      </section>

      <Reviews bg="bg-white" />
      <Zones bg="bg-mist" />
      <FinalCta title="Profitez d’un déplacement gratuit" text="Nos techniciens ne facturent pas le déplacement : nous établissons un devis selon votre situation, avant toute intervention." />
    </>
  );
}
