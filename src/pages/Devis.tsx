import Seo, { breadcrumbLd } from '../components/Seo';
import { PageHeader, Reviews } from '../components/sections';
import { ContactBlock } from './Contact';

export default function Devis() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Demander un devis', path: '/demander-un-devis/' },
  ];
  return (
    <>
      <Seo
        title="Demander un devis dératisation gratuit | Elite Nuisibles IDF"
        description="Obtenez votre devis gratuit en 1 clic pour une dératisation, un traitement punaises de lit ou une désinsectisation en Île-de-France. Réponse en 20 minutes."
        path="/demander-un-devis/"
        jsonLd={breadcrumbLd(crumbs)}
      />
      <PageHeader crumbs={crumbs} title="Demander un devis gratuit" intro="Obtenez votre devis en 1 clic : un expert vous rappelle en moins de 20 minutes." />
      <ContactBlock formSource="Site principal - Page devis" formTitle="Obtenir mon devis gratuit" />
      <Reviews bg="bg-white" />
    </>
  );
}
