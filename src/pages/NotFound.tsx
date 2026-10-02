import Seo from '../components/Seo';
import { CallButton, Container, LinkButton } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable | Elite Nuisibles IDF" description="Cette page n’existe pas ou a été déplacée." path="/404/" noindex />
      <section className="bg-mist-light py-24">
        <Container className="max-w-[620px] text-center">
          <p className="font-display text-[64px] font-extrabold text-brand">404</p>
          <h1 className="font-display text-[30px] font-extrabold text-ink">Cette page est introuvable</h1>
          <p className="mt-3 text-[16.5px] text-ink-soft">Elle a peut-être été déplacée. Un nuisible à traiter ? Nous restons joignables 7j/7.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton to="/">Retour à l’accueil</LinkButton>
            <CallButton />
          </div>
        </Container>
      </section>
    </>
  );
}
