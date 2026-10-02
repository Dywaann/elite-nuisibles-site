import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SERVICES_NAV, SITE } from '../data/site';
import { Container } from './ui';

export default function Footer() {
  return (
    <footer className="bg-navy-night pb-24 pt-14 text-[#9aa3b5] md:pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block rounded-lg bg-white p-2">
              <img src={SITE.logo} alt="Elite Nuisibles IDF" width={140} height={53} className="h-[44px] w-auto" loading="lazy" />
            </Link>
            <p className="mt-4 max-w-[300px] text-[14.5px] leading-relaxed">
              Dératisation, désinsectisation et traitement des punaises de lit à Paris et dans toute l’Île-de-France. Entreprise certifiée Certibiocide.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[15px] font-bold text-white">Nos services</p>
            <ul className="space-y-2.5 text-[14.5px]">
              {SERVICES_NAV.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/professionnels-deratisation-paris/" className="hover:text-white">
                  Professionnels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[15px] font-bold text-white">L’entreprise</p>
            <ul className="space-y-2.5 text-[14.5px]">
              <li><Link to="/qui-sommes-nous/" className="hover:text-white">Qui sommes-nous ?</Link></li>
              <li><Link to="/tarifs-deratisation-desinsectisation-idf/" className="hover:text-white">Nos tarifs</Link></li>
              <li><Link to="/blog/" className="hover:text-white">Blog et conseils</Link></li>
              <li><Link to="/contact-elite-nuisibles-idf/" className="hover:text-white">Contact</Link></li>
              <li><Link to="/demander-un-devis/" className="hover:text-white">Demander un devis</Link></li>
              <li><Link to="/cgu/" className="hover:text-white">Mentions légales, CGU et CGV</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[15px] font-bold text-white">Contact</p>
            <ul className="space-y-3 text-[14.5px]">
              <li>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white">
                  <Phone className="h-4 w-4 text-sky-300" aria-hidden /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-start gap-2 break-all hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-sky-300" aria-hidden /> Disponible 7j/7 · 24h/24
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                <span>
                  {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
                  <br />
                  Intervention dans toute l’Île-de-France
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] sm:flex-row">
          <p>© {new Date().getFullYear()} Elite Nuisibles IDF. Tous droits réservés.</p>
          <p>Paris (75) · 77 · 78 · 91 · 92 · 93 · 94 · 95</p>
        </div>
      </Container>
    </footer>
  );
}
