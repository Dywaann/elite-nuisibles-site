// Données générales du site : coordonnées, navigation, avis, zones, tarifs, FAQ.
// Modifier ici pour mettre à jour toutes les pages d'un coup.

export const SITE = {
  name: 'Elite Nuisibles IDF',
  brand: 'Élite Nuisibles Île-de-France',
  legalName: 'Élite Nuisibles SAS',
  siren: '991 507 831',
  url: 'https://elite-nuisibles-idf.fr',
  phone: '01 79 75 30 40',
  phoneHref: 'tel:+33179753040',
  phoneIntl: '+33179753040',
  email: 'elitenuisibles.organisation@gmail.com',
  address: { street: '34 Rue de Bretagne', zip: '94000', city: 'Créteil' },
  rating: { value: '4,98', count: 169, schemaValue: '4.98' },
  web3formsKey: 'af7c4c07-8a63-4809-bec5-fde132be2be4',
  logo: '/images/logo-elite-nuisibles-horizontal.webp',
  logoPng: '/images/logo-elite-nuisibles.png',
  ogImage: '/images/hero-techniciens-traitement-nuisibles.webp',
  // Balises de suivi reprises à l'identique du site précédent.
  gtmId: 'GTM-PQ4N9D3H',
  ga4Id: 'G-3HEKY02K7H',
  clarityId: 'ut66nbtboi',
  googleSiteVerification: 'znHYazICvjj5Ux4lXmSrEqZUKYLtT0PVUO4cwuuqvZ8',
};

export type NavChild = { label: string; to: string; desc?: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const SERVICES_NAV: NavChild[] = [
  { label: 'Dératisation rats & souris', to: '/deratisation-paris/', desc: 'Rats, souris, mulots' },
  { label: 'Punaises de lit', to: '/punaises-de-lit/', desc: 'Chimique, vapeur, cryogénie' },
  { label: 'Cafards & blattes', to: '/desinsectisation-cafards-blattes-idf/', desc: 'Gel, pulvérisation, suivi' },
  { label: 'Fourmis', to: '/desinsectisation-fourmis-idf/', desc: 'Traitement du nid' },
  { label: 'Tous nos services', to: '/services-lutte-nuisibles-paris/', desc: 'Puces, acariens, mites…' },
];

export const NAV: NavItem[] = [
  { label: 'Nuisibles', to: '/services-lutte-nuisibles-paris/', children: SERVICES_NAV },
  { label: 'Professionnels', to: '/professionnels-deratisation-paris/' },
  { label: 'Tarifs', to: '/tarifs-deratisation-desinsectisation-idf/' },
  { label: 'Qui sommes-nous ?', to: '/qui-sommes-nous/' },
  { label: 'Blog', to: '/blog/' },
];

// Références clients du bandeau défilant. Renseigner `logo` (fichier dans public/images/clients/)
// dès que le logo officiel est fourni : il remplacera automatiquement le nom en texte.
export const CLIENTS: { name: string; logo?: string }[] = [
  { name: 'Century 21' },
  { name: 'Franprix' },
  { name: 'G20' },
  { name: 'Hôtel F1' },
  { name: 'Monoprix' },
];

// Les 4 chiffres validés pour l'accueil (le premier est mis en avant).
export const KEY_FIGURES = [
  { value: '0 €', label: 'de déplacement et de diagnostic', highlight: true },
  { value: "Moins d'1h", label: 'pour intervenir à Paris et en petite couronne' },
  { value: '20 min', label: 'pour recevoir votre devis' },
  { value: '7j/7', label: 'et téléphone ouvert 24h/24' },
];

export const ENGAGEMENTS = [
  { icon: 'clock', title: "Intervention en moins d'1h", text: 'Sur Paris et la petite couronne, 7j/7.' },
  { icon: 'tag', title: 'Prix fixes, sans surprise', text: 'Annoncés après le diagnostic, avant toute intervention. Paiement échelonné possible.' },
  { icon: 'shield', title: 'Certifiés Certibiocide', text: 'Techniciens certifiés, entreprise assurée en responsabilité civile professionnelle.' },
  { icon: 'heart', title: 'Sans danger pour vos proches', text: 'Produits homologués et consignes claires pour les enfants et les animaux.' },
  { icon: 'refresh', title: 'Résultat garanti', text: 'Retour gratuit si les nuisibles reviennent pendant la période de garantie.' },
  { icon: 'eyeoff', title: 'Intervention discrète', text: 'Véhicules non marqués, passages possibles tôt le matin ou le soir.' },
];

export const HOME_SERVICES = [
  { title: 'Dératisation', text: 'Rats, souris, mulots. Diagnostic, traitement et suivi.', to: '/deratisation-paris/', from: '109 €' },
  { title: 'Punaises de lit', text: 'Traitement chimique, vapeur sèche à 180 °C ou cryogénisation.', to: '/punaises-de-lit/', from: '150 €' },
  { title: 'Cafards et blattes', text: 'Gel appât et pulvérisation, traitement des nids inclus.', to: '/desinsectisation-cafards-blattes-idf/', from: '160 €' },
];

export const ZONES = [
  { name: 'Paris', code: '75', cities: 'Tous les arrondissements de Paris' },
  { name: 'Hauts-de-Seine', code: '92', cities: 'Boulogne-Billancourt, Nanterre, Courbevoie, Neuilly-sur-Seine' },
  { name: 'Seine-Saint-Denis', code: '93', cities: 'Saint-Denis, Montreuil, Aubervilliers, Bobigny' },
  { name: 'Val-de-Marne', code: '94', cities: 'Créteil, Vitry-sur-Seine, Saint-Maur-des-Fossés, Ivry-sur-Seine' },
  { name: 'Seine-et-Marne', code: '77', cities: 'Melun, Meaux, Chelles, Pontault-Combault, Torcy' },
  { name: 'Yvelines', code: '78', cities: 'Versailles, Saint-Germain-en-Laye, Mantes-la-Jolie, Poissy' },
  { name: 'Essonne', code: '91', cities: 'Évry-Courcouronnes, Massy, Corbeil-Essonnes, Palaiseau' },
  { name: "Val-d'Oise", code: '95', cities: 'Argenteuil, Cergy, Sarcelles, Pontoise' },
];

// Avis Google repris du site précédent (textes d'origine).
export const REVIEWS = [
  { name: 'Manisekar Indira', date: 'Décembre 2025', text: "Intervention rapide et efficace. L'équipe d'Élite Nuisibles a identifié le problème en quelques minutes et a traité complètement l'infestation. Techniciens sérieux et discrets ! Je recommande sans hésiter." },
  { name: 'Marcel Op', date: 'Novembre 2025', text: "Merci à cette société d'être intervenue dans mon restaurant pour une désinfection complète, rapide et surtout efficace." },
  { name: 'Emma Loussaif', date: 'Décembre 2025', text: 'Très satisfaite du service Élite Nuisibles ! Intervention rapide, équipe professionnelle et vraiment rassurante du début à la fin.' },
  { name: 'Johnny', date: 'Novembre 2025', text: "Merci à l'équipe Élite Nuisibles pour leur patience car au début j'étais sceptique, mais ils m'ont montré avec les résultats que je pouvais leur faire confiance." },
  { name: 'Asma A.', date: 'Décembre 2025', text: 'Incroyable, je recommande vivement. En 1 passage ils ont pu tout enlever !' },
  { name: 'Marie-Caroline Guillon', date: 'Décembre 2025', text: "Intervention rapide et efficace. Le technicien a pris le temps d'expliquer la situation et le traitement mis en place. Je recommande." },
  { name: 'Narek Hakobyan', date: 'Novembre 2025', text: 'Je vivais un calvaire, merci au technicien, il a fait un super boulot ! Je recommande.' },
  { name: 'Anaïs', date: 'Décembre 2025', text: "Entreprise sérieuse, travail propre et bonnes explications. On sent l'expérience. Merci encore." },
  { name: 'Noah Rebus', date: 'Décembre 2025', text: 'Contact facile, intervention rapide et conseils utiles après le traitement. Service au top.' },
  { name: 'Lou', date: 'Décembre 2025', text: 'Très professionnel, ponctuel et rassurant. Problème bien pris en charge du début à la fin.' },
  { name: 'Max', date: 'Décembre 2025', text: 'Très professionnel, un grand merci pour leur efficacité et leur réactivité. Je recommande à 100%.' },
  { name: 'Theo Riviere', date: 'Octobre 2025', text: "C'est super, ils sont très aimables et travaillent efficacement, merci à eux." },
];

export const PESTS_ALL = [
  { name: 'Rats', desc: 'Élimination des rats et prévention des infestations dans vos locaux.', to: '/deratisation-paris/' },
  { name: 'Souris', desc: 'Éradication rapide des souris avec des méthodes sûres et efficaces.', to: '/deratisation-paris/' },
  { name: 'Mulots', desc: 'Traitement et prévention des invasions de mulots dans votre environnement.', to: '/deratisation-paris/' },
  { name: 'Punaises de lit', desc: 'Extermination complète des punaises de lit et prévention des réinfestations.', to: '/punaises-de-lit/' },
  { name: 'Cafards & blattes', desc: 'Éradication des cafards et blattes avec des techniques adaptées et durables.', to: '/desinsectisation-cafards-blattes-idf/' },
  { name: 'Fourmis', desc: 'Solutions pour éliminer les fourmis et empêcher leur retour.', to: '/desinsectisation-fourmis-idf/' },
  { name: 'Puces', desc: 'Traitements efficaces contre les puces pour un environnement sans parasites.', to: '/demander-un-devis/' },
  { name: 'Mites', desc: 'Mites alimentaires et vestimentaires : traitement ciblé des zones de ponte.', to: '/demander-un-devis/' },
  { name: 'Acariens', desc: "Interventions pour réduire les acariens et améliorer la qualité de l'air intérieur.", to: '/demander-un-devis/' },
];

export const PRICES = [
  {
    title: 'Dératisation',
    intro: 'Rats, souris, mulots : diagnostic, traitement et suivi.',
    rows: [
      ['De 0 à 30 m²', '109 €'],
      ['De 31 à 60 m²', '129 €'],
      ['De 61 à 90 m²', '149 €'],
      ['De 91 à 120 m²', '179 €'],
    ],
  },
  {
    title: 'Punaises de lit · traitement chimique',
    intro: 'Insecticides professionnels rémanents, adapté à la majorité des cas.',
    rows: [
      ['De 0 à 30 m²', '150 €'],
      ['De 31 à 60 m²', '160 €'],
      ['De 61 à 90 m²', '180 €'],
      ['De 91 à 120 m²', '200 €'],
    ],
  },
  {
    title: 'Punaises de lit · vapeur sèche',
    intro: 'Vapeur à 180°C, sans produit chimique.',
    rows: [
      ['De 0 à 30 m²', '280 €'],
      ['De 31 à 60 m²', '580 €'],
      ['De 61 à 90 m²', '830 €'],
    ],
  },
  {
    title: 'Punaises de lit · cryogénisation',
    intro: 'Neige carbonique à -78°C, la méthode la plus radicale.',
    rows: [
      ['De 0 à 30 m²', '769 €'],
      ['De 31 à 60 m²', '1 070 €'],
      ['De 61 à 90 m²', '1 430 €'],
      ['De 91 à 120 m²', '1 730 €'],
    ],
  },
  {
    title: 'Anti-nuisibles',
    intro: 'Cafards, blattes, fourmis, puces et autres insectes.',
    rows: [
      ['De 0 à 30 m²', '160 €'],
      ['De 31 à 60 m²', '170 €'],
      ['De 61 à 90 m²', '190 €'],
      ['De 91 à 120 m²', '210 €'],
    ],
  },
];

export const GENERAL_FAQ = [
  { q: 'En combien de temps pouvez-vous intervenir ?', a: "Nous intervenons en moins d'1 heure sur Paris et la petite couronne, 7j/7, et dans les meilleurs délais sur le reste de l'Île-de-France." },
  { q: 'Le déplacement et le devis sont-ils payants ?', a: "Non. Le déplacement et l'établissement du devis sont entièrement gratuits, et nos prix sont fixes et annoncés avant toute intervention." },
  { q: 'Vos traitements sont-ils adaptés aux enfants et aux animaux ?', a: "Oui. Nos techniciens certifiés Certibiocide utilisent des produits professionnels homologués et vous indiquent les consignes à respecter (aération, délai avant de réoccuper les pièces) pour la sécurité de toute la famille et de vos animaux." },
  { q: 'Quels nuisibles traitez-vous ?', a: 'Rats, souris, mulots, surmulots, punaises de lit, cafards et blattes, fourmis, puces, mites et acariens, chez les particuliers comme chez les professionnels.' },
  { q: 'Intervenez-vous pour les professionnels ?', a: "Oui : restaurants, hôtels, commerces, bureaux, copropriétés et bailleurs. Nous proposons des interventions ponctuelles et des contrats de suivi, avec rapport d'intervention pour vos contrôles sanitaires." },
];
