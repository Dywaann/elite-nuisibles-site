import { Link } from 'react-router-dom';
import { Phone, Star } from 'lucide-react';
import type { ReactNode } from 'react';
import { SITE } from '../data/site';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-[12.5px] font-bold uppercase tracking-[0.14em] ${light ? 'text-sky-300' : 'text-brand'}`}>{children}</p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = true,
  light = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  light?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={`mb-10 ${center ? 'mx-auto max-w-[720px] text-center' : 'max-w-[680px]'}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag className={`font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[36px] ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </Tag>
      {intro && <p className={`mt-4 text-[16.5px] leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  );
}

export function CallButton({ className = '', label = 'Appeler maintenant', variant = 'go' }: { className?: string; label?: string; variant?: 'go' | 'brand' }) {
  const styles =
    variant === 'go'
      ? 'bg-go hover:bg-go-dark shadow-go'
      : 'bg-brand hover:bg-brand-dark shadow-brand';
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-[16.5px] font-bold text-white transition ${styles} ${className}`}
    >
      <Phone className="h-[18px] w-[18px]" aria-hidden />
      {label}
    </a>
  );
}

export function LinkButton({ to, children, variant = 'navy', className = '' }: { to: string; children: ReactNode; variant?: 'navy' | 'outline' | 'white' | 'brand'; className?: string }) {
  const map = {
    navy: 'bg-navy text-white hover:bg-navy-deep',
    brand: 'bg-brand text-white hover:bg-brand-dark shadow-brand',
    outline: 'border border-line bg-white text-ink hover:border-brand hover:text-brand',
    white: 'bg-white text-navy hover:bg-brand-tint',
  } as const;
  return (
    <Link to={to} className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15.5px] font-bold transition ${map[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Stars({ size = 15 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-star" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} style={{ width: size, height: size }} fill="currentColor" strokeWidth={0} aria-hidden />
      ))}
    </span>
  );
}

export function RatingPill({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold ${
        dark ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-white text-ink ring-1 ring-line'
      }`}
    >
      <Stars size={14} />
      {SITE.rating.value}/5 · {SITE.rating.count} avis clients
    </span>
  );
}

export function IconBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${dark ? 'bg-white/10 text-sky-300' : 'bg-brand-tint text-brand'}`}>
      {children}
    </span>
  );
}
