import { Info } from 'lucide-react';
import Seo, { breadcrumbLd, localBusinessLd } from '../components/Seo';
import { Faq, FinalCta, PageHeader } from '../components/sections';
import { CallButton, Container, LinkButton } from '../components/ui';
import { PRICES } from '../data/site';

const FAQ = [
  { q: 'Le devis est-il vraiment gratuit ?', a: 'Oui. Le déplacement et le devis sont gratuits et sans engagement. Le prix est fixé avant toute intervention.' },
  { q: 'Pourquoi des prix « à partir de » ?', a: 'Le tarif dépend de la surface et du niveau d’infestation. Après diagnostic, nous vous annonçons un prix fixe qui ne bougera pas.' },
  { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Espèces, carte bancaire, virement et chèque (sous réserve d’acceptation préalable). Un paiement échelonné est possible pour les traitements en plusieurs passages.' },
  { q: 'Et au-delà de 120 m² ou pour un local professionnel ?', a: 'Contactez-nous : nous établissons un devis sur-mesure après évaluation de vos locaux.' },
];

export default function Tarifs() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos tarifs', path: '/tarifs-deratisation-desinsectisation-idf/' },
  ];
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Tarifs Elite Nuisibles IDF',
    itemListElement: PRICES.map((p) => ({
      '@type': 'Offer',
      name: p.title,
      priceCurrency: 'EUR',
      price: p.rows[0][1].replace(/[^\d]/g, ''),
      description: `${p.intro} À partir de ${p.rows[0][1]}.`,
    })),
  };
  return (
    <>
      <Seo
        title="Tarifs dératisation & désinsectisation IDF – Elite Nuisibles"
        description="Découvrez nos tarifs transparents pour la dératisation et la désinsectisation en Île-de-France : dès 109 € la dératisation, dès 150 € les punaises de lit. Déplacement gratuit."
        path="/tarifs-deratisation-desinsectisation-idf/"
        jsonLd={[localBusinessLd(), offers, breadcrumbLd(crumbs)]}
      />
      <PageHeader
        crumbs={crumbs}
        title="Nos tarifs"
        intro="Des tarifs compétitifs pour une qualité garantie. Déplacement et devis gratuits, prix fixe annoncé avant l’intervention."
      />

      <section className="bg-mist-light py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRICES.map((p) => (
              <div key={p.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <h2 className="font-display text-[20px] font-extrabold text-ink">{p.title}</h2>
                <p className="mt-1.5 text-[14.5px] text-ink-muted">{p.intro}</p>
                <p className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-ink-muted">À partir de</p>
                <p className="font-display text-[36px] font-extrabold leading-none text-brand">{p.rows[0][1]}</p>
                <table className="mt-5 w-full text-[14.5px]">
                  <caption className="sr-only">Tarifs {p.title} selon la surface</caption>
                  <tbody>
                    {p.rows.map(([s, v]) => (
                      <tr key={s} className="border-t border-line">
                        <th scope="row" className="py-2.5 text-left font-medium text-ink-soft">{s}</th>
                        <td className="py-2.5 text-right font-bold text-ink">dès {v}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-line">
                      <th scope="row" className="py-2.5 text-left font-medium text-ink-soft">Au-delà</th>
                      <td className="py-2.5 text-right font-bold text-brand">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            <div className="flex flex-col justify-between rounded-2xl bg-navy p-6 text-white shadow-lift">
              <div>
                <h2 className="font-display text-[20px] font-extrabold">Besoin d’un prix précis ?</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">Un technicien évalue la situation gratuitement et vous annonce un prix fixe, sans surprise.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <CallButton />
                <LinkButton to="/demander-un-devis/" variant="white">Devis en ligne</LinkButton>
              </div>
            </div>
          </div>
          <p className="mt-8 flex items-start gap-2 text-[14px] text-ink-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0" /> Tarifs TTC indicatifs pour les particuliers, ajustés selon la surface et le degré d’infestation. Devis valable 30 jours.
          </p>
        </Container>
      </section>

      <Faq items={FAQ} title="Questions sur nos tarifs" bg="bg-white" />
      <FinalCta />
    </>
  );
}
