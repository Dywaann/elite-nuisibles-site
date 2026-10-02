import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Seo, { breadcrumbLd, localBusinessLd } from '../components/Seo';
import QuoteForm from '../components/QuoteForm';
import { PageHeader, Zones } from '../components/sections';
import { Container } from '../components/ui';
import { SITE } from '../data/site';

export function ContactBlock({ formSource, formTitle }: { formSource: string; formTitle?: string }) {
  return (
    <section className="bg-mist-light py-16 sm:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <a href={SITE.phoneHref} className="flex items-center gap-4 rounded-2xl bg-brand p-6 text-white shadow-brand transition hover:bg-brand-dark">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Phone className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-[13.5px] text-white/80">Appel gratuit · 24h/24 · 7j/7</span>
              <span className="font-display text-[26px] font-extrabold">{SITE.phone}</span>
            </span>
          </a>
          {[
            { icon: <Mail className="h-5 w-5" />, t: 'Email', v: <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-ink hover:text-brand">{SITE.email}</a> },
            { icon: <Clock className="h-5 w-5" />, t: 'Disponibilité', v: <span className="font-semibold text-ink">7j/7, 24h/24, intervention en moins d’1h</span> },
            { icon: <MapPin className="h-5 w-5" />, t: 'Siège', v: <span className="font-semibold text-ink">{SITE.address.street}, {SITE.address.zip} {SITE.address.city}</span> },
          ].map((i) => (
            <div key={i.t} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-line">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">{i.icon}</span>
              <div>
                <p className="text-[13px] text-ink-muted">{i.t}</p>
                <p className="text-[15.5px]">{i.v}</p>
              </div>
            </div>
          ))}
          <p className="pt-2 text-[15px] leading-relaxed text-ink-soft">
            Une question, un besoin d’accompagnement ? Nos experts vous répondent rapidement et vous conseillent gratuitement par téléphone.
          </p>
        </div>
        <QuoteForm source={formSource} title={formTitle} />
      </Container>
    </section>
  );
}

export default function Contact() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Contact', path: '/contact-elite-nuisibles-idf/' },
  ];
  return (
    <>
      <Seo
        title="Contact Elite Nuisibles IDF | 01 79 75 30 40"
        description="Contactez Elite Nuisibles IDF pour une intervention efficace contre les nuisibles en Île-de-France. Dératisation et désinsectisation rapides, 7j/7."
        path="/contact-elite-nuisibles-idf/"
        jsonLd={[localBusinessLd(), breadcrumbLd(crumbs)]}
      />
      <PageHeader crumbs={crumbs} title="Contactez-nous" intro="Les artisans les mieux notés d’Île-de-France sont disponibles maintenant." />
      <ContactBlock formSource="Site principal - Contact" />
      <Zones />
    </>
  );
}
