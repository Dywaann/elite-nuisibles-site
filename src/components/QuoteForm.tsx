import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Lock, Phone, Zap } from 'lucide-react';
import { SITE } from '../data/site';

type Props = {
  service?: string;
  source?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

type Errors = Partial<Record<'name' | 'phone' | 'postal_code', string>>;

function validate(fd: FormData): Errors {
  const e: Errors = {};
  const name = String(fd.get('name') || '').trim();
  const phone = String(fd.get('phone') || '').replace(/[\s.-]/g, '');
  const cp = String(fd.get('postal_code') || '').trim();
  if (name.length < 2) e.name = 'Indiquez votre nom.';
  if (!/^(\+33|0033|0)[1-9]\d{8}$/.test(phone)) e.phone = 'Numéro de téléphone invalide.';
  if (!/^\d{5}$/.test(cp)) e.postal_code = 'Code postal à 5 chiffres.';
  return e;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function QuoteForm({
  service = 'Demande de devis - Site principal',
  source = 'Site principal',
  id = 'devis',
  title = 'Obtenir un devis immédiat',
  subtitle = 'Un expert vous rappelle sous peu.',
  compact = false,
}: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const navigate = useNavigate();

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        window.dataLayer?.push({ event: 'generate_lead', form_source: source, service });
        form.reset();
        navigate('/page-de-remerciement/');
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const field =
    'w-full rounded-xl border bg-white px-4 py-3 text-[15.5px] text-ink placeholder:text-[#9ca3af] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15';

  return (
    <div id={id} className="relative scroll-mt-28 rounded-[20px] bg-white px-5 pb-7 pt-6 text-left shadow-lift sm:px-7">
      <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[12.5px] font-bold text-white shadow-brand">
        <Zap className="h-3.5 w-3.5" aria-hidden /> Réponse en 20 minutes
      </span>
      <p className="mt-2 font-display text-[22px] font-extrabold text-ink">{title}</p>
      <p className="mb-5 text-[14.5px] text-ink-muted">{subtitle}</p>

      <form onSubmit={onSubmit} noValidate className="space-y-3.5">
        <input type="hidden" name="access_key" value={SITE.web3formsKey} />
        <input type="hidden" name="subject" value={`Nouveau lead · ${source}`} />
        <input type="hidden" name="from_name" value={`${source} Elite Nuisibles`} />
        <input type="hidden" name="Service" value={service} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-[14px] font-semibold text-ink">
            Nom complet <span className="text-red-600">*</span>
          </label>
          <input id={`${id}-name`} name="name" autoComplete="name" placeholder="Jean Dupont" className={`${field} ${errors.name ? 'border-red-400' : 'border-line'}`} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-[13px] text-red-600">{errors.name}</p>}
        </div>

        <div className={`grid gap-3.5 ${compact ? '' : 'sm:grid-cols-[1.4fr_1fr]'}`}>
          <div>
            <label htmlFor={`${id}-phone`} className="mb-1.5 block text-[14px] font-semibold text-ink">
              Téléphone <span className="text-red-600">*</span>
            </label>
            <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={`${field} ${errors.phone ? 'border-red-400' : 'border-line'}`} aria-invalid={!!errors.phone} />
            {errors.phone && <p className="mt-1 text-[13px] text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor={`${id}-cp`} className="mb-1.5 block text-[14px] font-semibold text-ink">
              Code postal <span className="text-red-600">*</span>
            </label>
            <input id={`${id}-cp`} name="postal_code" inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="75011" className={`${field} ${errors.postal_code ? 'border-red-400' : 'border-line'}`} aria-invalid={!!errors.postal_code} />
            {errors.postal_code && <p className="mt-1 text-[13px] text-red-600">{errors.postal_code}</p>}
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-msg`} className="mb-1.5 block text-[14px] font-semibold text-ink">
            Message
          </label>
          <textarea id={`${id}-msg`} name="message" rows={compact ? 2 : 3} placeholder="Ex : traces de rongeurs dans la cuisine depuis quelques jours…" className={`${field} border-line resize-none`} />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 text-[16px] font-bold text-white transition hover:bg-navy-deep disabled:opacity-70"
        >
          {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          J’obtiens mon devis maintenant
        </button>
        {status === 'error' && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-[13.5px] text-red-700" role="alert">
            L’envoi a échoué. Appelez-nous directement au {SITE.phone}.
          </p>
        )}
        <p className="flex items-center justify-center gap-1.5 text-[13px] text-ink-muted">
          <Lock className="h-3.5 w-3.5" aria-hidden /> Vos données restent confidentielles. Aucun engagement.
        </p>
      </form>

      <div className="mt-5 border-t border-line pt-4 text-center">
        <p className="text-[13.5px] text-ink-muted">Une urgence ? Appelez directement :</p>
        <a href={SITE.phoneHref} className="mt-1 inline-flex items-center gap-2 font-display text-[20px] font-extrabold text-brand">
          <Phone className="h-4 w-4" aria-hidden /> {SITE.phone}
        </a>
      </div>
    </div>
  );
}
