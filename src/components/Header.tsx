import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react';
import { NAV, SITE } from '../data/site';
import { Container } from './ui';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Aller au contenu principal
      </a>
      <div className="hidden bg-navy-deep text-[13px] text-white/80 md:block">
        <Container className="flex h-9 items-center justify-end gap-6">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" aria-hidden /> {SITE.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden /> 24h/24 · 7j/7
          </span>
        </Container>
      </div>

      <div className="border-b border-line/70 bg-white/95 shadow-[0_2px_8px_rgba(15,28,71,.07)] backdrop-blur">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Elite Nuisibles IDF, retour à l'accueil">
            <img src={SITE.logo} alt="Elite Nuisibles IDF" width={160} height={61} className="h-[46px] w-auto" />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.to} className="group relative">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-semibold transition hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`
                      }
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" aria-hidden />
                    </NavLink>
                    <div className="invisible absolute left-0 top-full w-[300px] pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="rounded-2xl border border-line bg-white p-2 shadow-lift">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="block rounded-xl px-3.5 py-2.5 transition hover:bg-mist">
                              <span className="block text-[15px] font-semibold text-ink">{c.label}</span>
                              {c.desc && <span className="block text-[13px] text-ink-muted">{c.desc}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `rounded-lg px-3 py-2 text-[15px] font-semibold transition hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden text-right xl:block">
              <p className="text-[12px] text-ink-muted">Appel gratuit · 24h/24 · 7j/7</p>
              <a href={SITE.phoneHref} className="font-display text-[17px] font-extrabold text-navy">
                {SITE.phone}
              </a>
            </div>
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-bold text-white shadow-brand transition hover:bg-brand-dark sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden /> Appeler
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {open && (
          <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line bg-white lg:hidden">
            <Container className="py-3">
              <ul className="flex flex-col">
                {NAV.map((item) => (
                  <li key={item.to} className="border-b border-line/60 last:border-0">
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-3.5 text-left text-[16px] font-semibold text-ink"
                          aria-expanded={sub}
                          onClick={() => setSub((v) => !v)}
                        >
                          {item.label}
                          <ChevronDown className={`h-5 w-5 transition ${sub ? 'rotate-180' : ''}`} aria-hidden />
                        </button>
                        {sub && (
                          <ul className="mb-3 rounded-xl bg-mist p-1.5">
                            {item.children.map((c) => (
                              <li key={c.to}>
                                <Link to={c.to} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink">
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link to={item.to} className="block py-3.5 text-[16px] font-semibold text-ink">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link to="/demander-un-devis/" className="mt-3 flex w-full items-center justify-center rounded-xl bg-navy py-3.5 font-bold text-white">
                Demander un devis gratuit
              </Link>
            </Container>
          </nav>
        )}
      </div>
    </header>
  );
}
