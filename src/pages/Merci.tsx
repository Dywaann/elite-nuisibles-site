import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';
import { CallButton, Container, LinkButton } from '../components/ui';

export default function Merci() {
  useEffect(() => {
    window.dataLayer?.push({ event: 'thank_you_page' });
  }, []);
  return (
    <>
      <Seo
        title="Demande bien reçue | Elite Nuisibles IDF"
        description="Votre demande a bien été reçue par Elite Nuisibles IDF. Un expert vous rappelle dans les plus brefs délais."
        path="/page-de-remerciement/"
        noindex
      />
      <section className="bg-mist-light py-20 sm:py-28">
        <Container className="max-w-[640px] text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-go" />
          <h1 className="mt-6 font-display text-[32px] font-extrabold text-ink sm:text-[40px]">Merci, votre demande est bien reçue !</h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            Un expert Elite Nuisibles vous rappelle en moins de 20 minutes. Pour une urgence, appelez-nous directement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton />
            <LinkButton to="/" variant="outline">Retour à l’accueil</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
