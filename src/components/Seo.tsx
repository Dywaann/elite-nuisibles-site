import { Helmet } from 'react-helmet-async';
import { SITE, ZONES } from '../data/site';

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  jsonLd?: object | object[];
};

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControl'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    url: `${SITE.url}/`,
    telephone: SITE.phoneIntl,
    email: SITE.email,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/images/logo-elite-nuisibles.png`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    areaServed: ZONES.map((z) => ({ '@type': 'AdministrativeArea', name: z.name })),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.rating.schemaValue, reviewCount: String(SITE.rating.count), bestRating: '5' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({ '@type': 'ListItem', position: idx + 1, name: i.name, item: `${SITE.url}${i.path}` })),
  };
}

export default function Seo({ title, description, path, image, noindex, type = 'website', jsonLd }: Props) {
  const url = `${SITE.url}${path}`;
  const img = `${SITE.url}${image || SITE.ogImage}`;
  const lds = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      {lds.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}
