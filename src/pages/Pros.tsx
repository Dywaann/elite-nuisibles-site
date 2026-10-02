import { Bug, ClipboardCheck, FileText, Hotel, Rat, ShieldAlert, Star, Store, Utensils, Building } from 'lucide-react';
import Seo, { breadcrumbLd, faqLd, localBusinessLd } from '../components/Seo';
import QuoteForm from '../components/QuoteForm';
import { DarkHero, Faq, FeatureGrid, FinalCta, Reviews, TrustBar } from '../components/sections';
import { Container, SectionHead } from '../components/ui';

const FAQ = [
  { q: 'Proposez-vous des contrats d’entretien pour les professionnels ?', a: 'Oui. En plus des interventions ponctuelles, nous mettons en place des contrats de suivi (passages réguliers, contrôle des postes, rapport) adaptés à votre activité.' },
  { q: 'Fournissez-vous un rapport pour les contrôles sanitaires ?', a: 'Oui, chaque intervention fait l’objet d’un rapport détaillé que vous pouvez présenter lors d’un contrôle des services d’hygiène.' },
  { q: 'Pouvez-vous intervenir en dehors des heures d’ouverture ?', a: 'Oui, nous intervenons 7j/7, tôt le matin, le soir ou pendant la fermeture pour ne pas perturber votre activité ni vos clients.' },
  { q: 'Intervenez-vous discrètement ?', a: 'Oui, nos techniciens peuvent intervenir avec des véhicules non marqués afin de préserver l’image de votre établissement.' },
];

export default function Pros() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Professionnels', path: '/professionnels-deratisation-paris/' },
  ];
  return (
    <>
      <Seo
        title="Dératisation et désinsectisation pour professionnels à Paris | Elite Nuisibles IDF"
        description="Solutions de dératisation et désinsectisation sur-mesure pour hôtels, restaurants, bureaux et commerces à Paris. Intervention rapide et discrète, rapport d’intervention."
        path="/professionnels-deratisation-paris/"
        jsonLd={[localBusinessLd(), faqLd(FAQ), breadcrumbLd(crumbs)]}
      />
      <DarkHero
        image="/images/technicien-desinsectisation-cuisine.webp"
        imageAlt="Technicien traitant une cuisine professionnelle"
        eyebrow="Hôtels, bars, restaurants et commerces"
        title="Dératisation et désinsectisation pour les professionnels"
        tagline="Protégez votre établissement et votre réputation"
        bullets={['Intervention discrète, hors heures d’ouverture', 'Rapport pour vos contrôles sanitaires', 'Contrats de suivi sur-mesure']}
        aside={<QuoteForm source="Site principal - Professionnels" service="Professionnel - Dératisation / désinsectisation" title="Devis professionnel gratuit" subtitle="Un expert vous rappelle pour évaluer vos besoins." />}
      />
      <TrustBar />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-[900px]">
          <SectionHead
            eyebrow="Pourquoi agir"
            title="Les enjeux des nuisibles dans les établissements professionnels"
            intro="Dans l’hôtellerie, la restauration et le commerce, une seule infestation peut entraîner un contrôle sanitaire défavorable, des avis négatifs en ligne et une perte de clientèle."
          />
        </Container>
        <Container>
          <FeatureGrid
            items={[
              { icon: <ClipboardCheck className="h-5 w-5" />, title: 'Conformité aux normes sanitaires', text: 'Les établissements doivent respecter des normes d’hygiène strictes. La présence de nuisibles peut entraîner sanctions et fermetures temporaires.' },
              { icon: <Star className="h-5 w-5" />, title: 'Image de marque', text: 'La découverte de nuisibles par un client peut causer des dommages durables à votre réputation, surtout à l’ère des avis en ligne.' },
              { icon: <ShieldAlert className="h-5 w-5" />, title: 'Sécurité alimentaire', text: 'Dans les restaurants et les bars, les nuisibles contaminent les stocks et font peser un risque sur la santé de vos clients.' },
            ]}
          />
        </Container>
      </section>

      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <SectionHead eyebrow="Nos solutions" title="Une protection totale et durable" />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: <Rat className="h-6 w-6" />, t: 'Élimination des rats et souris', s: 'Éradication efficace des rongeurs (rats, souris et mulots), postes d’appâtage sécurisés et suivi régulier.' },
              { icon: <Bug className="h-6 w-6" />, t: 'Éradication des insectes', s: 'Cafards, blattes, punaises de lit, fourmis : élimination rapide avec prévention durable contre les infestations.' },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-line">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">{i.icon}</span>
                <h3 className="mt-4 font-display text-[21px] font-extrabold text-ink">{i.t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{i.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: <Utensils className="h-5 w-5" />, t: 'Restaurants et bars' },
              { icon: <Hotel className="h-5 w-5" />, t: 'Hôtels et locations' },
              { icon: <Store className="h-5 w-5" />, t: 'Commerces' },
              { icon: <Building className="h-5 w-5" />, t: 'Bureaux et copropriétés' },
            ].map((i) => (
              <div key={i.t} className="flex items-center gap-3 rounded-xl bg-white p-4 text-[14.5px] font-semibold text-ink ring-1 ring-line">
                <span className="text-brand">{i.icon}</span> {i.t}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-navy p-6 text-white">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
            <p className="text-[15px] leading-relaxed text-white/85">
              Chaque intervention donne lieu à un rapport détaillé (zones traitées, produits utilisés, recommandations), à conserver pour vos contrôles d’hygiène.
            </p>
          </div>
        </Container>
      </section>

      <Reviews bg="bg-white" />
      <Faq items={FAQ} title="Vos questions de professionnels" />
      <FinalCta title="Un problème de nuisibles dans votre établissement ?" />
    </>
  );
}
