// Données structurées (schema.org) partagées entre les pages.
import { SITE, ZONES } from '../data/site';

export type Crumb = { name: string; path: string };

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
    logo: `${SITE.url}${SITE.logoPng}`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.schemaValue,
      reviewCount: String(SITE.rating.count),
      bestRating: '5',
    },
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
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.name,
      item: `${SITE.url}${i.path}`,
    })),
  };
}
