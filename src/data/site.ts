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
  logo: '/images/logo-elite-nuisibles-ile-de-france.webp',
  logoPng: '/images/logo-elite-nuisibles-idf.png',
  ogImage: '/images/techniciens-desinsectisation-logement-ile-de-france.webp',
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

// Références clients du bandeau défilant. Les logos sont dans public/images/clients/
// et s'affichent en noir transparent (voir .clients dans global.css).
// h = hauteur d'affichage en pixels, w/hh = dimensions d'origine du fichier (pour réserver la place).
export const CLIENTS: { name: string; logo?: string; h?: number; w?: number; hh?: number }[] = [
  { name: 'Century 21', logo: '/images/clients/logo-century-21.svg', h: 22, w: 170, hh: 20 },
  { name: 'Franprix', logo: '/images/clients/logo-franprix.png', h: 38, w: 644, hh: 133 },
  { name: 'G20', logo: '/images/clients/logo-g20.png', h: 56, w: 338, hh: 179 },
  { name: 'Hôtel F1', logo: '/images/clients/logo-hotel-f1.png', h: 52, w: 912, hh: 264 },
  { name: 'Monoprix', logo: '/images/clients/logo-monoprix.svg', h: 26, w: 539, hh: 75 },
];

// Les 4 chiffres validés pour l'accueil (le premier est mis en avant).
export const KEY_FIGURES = [
  { value: '0 €', label: 'le déplacement et le diagnostic', highlight: true },
  { value: "Moins d'1h", label: 'à Paris et en petite couronne' },
  { value: '20 min', label: 'pour recevoir votre devis' },
  { value: '7j/7', label: 'téléphone ouvert 24h/24' },
];

export const ENGAGEMENTS = [
  { icon: 'clock', title: "Sur place en moins d'1h", text: 'Paris et petite couronne. Toute l’Île-de-France, 7j/7.' },
  { icon: 'tag', title: 'Prix fixe, sans surprise', text: "Annoncé avant l'intervention. Paiement échelonné possible." },
  { icon: 'shield', title: 'Certifiés Certibiocide', text: 'Techniciens certifiés, entreprise assurée.' },
  { icon: 'heart', title: 'Sûr pour vos proches', text: 'Produits homologués, consignes claires pour enfants et animaux.' },
  { icon: 'refresh', title: 'Résultat garanti', text: 'Retour gratuit si les nuisibles reviennent pendant la garantie.' },
  { icon: 'eyeoff', title: 'Intervention discrète', text: 'Véhicules non marqués, passages tôt le matin ou le soir.' },
];

export const HOME_SERVICES = [
  { title: 'Dératisation', text: 'Rats, souris, mulots.', to: '/deratisation-paris/', from: '109 €' },
  { title: 'Punaises de lit', text: 'Chimique, vapeur sèche ou cryogénie.', to: '/punaises-de-lit/', from: '150 €' },
  { title: 'Cafards et blattes', text: 'Gel appât et pulvérisation, nids inclus.', to: '/desinsectisation-cafards-blattes-idf/', from: '160 €' },
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
  { name: 'Rats', desc: 'Élimination et rebouchage des accès.', to: '/deratisation-paris/' },
  { name: 'Souris', desc: 'Éradication rapide et sûre.', to: '/deratisation-paris/' },
  { name: 'Mulots', desc: 'Traitement et prévention.', to: '/deratisation-paris/' },
  { name: 'Punaises de lit', desc: 'Chimique, vapeur ou cryogénie.', to: '/punaises-de-lit/' },
  { name: 'Cafards & blattes', desc: 'Colonie et nids traités.', to: '/desinsectisation-cafards-blattes-idf/' },
  { name: 'Fourmis', desc: 'Traitement du nid.', to: '/desinsectisation-fourmis-idf/' },
  { name: 'Puces', desc: 'Traitement complet du logement.', to: '/demander-un-devis/' },
  { name: 'Mites', desc: 'Alimentaires et vestimentaires.', to: '/demander-un-devis/' },
  { name: 'Acariens', desc: 'Air intérieur assaini.', to: '/demander-un-devis/' },
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
  { q: 'En combien de temps pouvez-vous intervenir ?', a: "En moins d'1 heure à Paris et en petite couronne, 7j/7. Au plus vite dans le reste de l'Île-de-France." },
  { q: 'Où intervenez-vous ?', a: 'À Paris et dans toute l’Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Seine-et-Marne, Yvelines, Essonne et Val-d’Oise.' },
  { q: 'Le déplacement et le devis sont-ils payants ?', a: 'Non. Les deux sont gratuits, et le prix est fixé avant toute intervention.' },
  { q: 'Vos traitements sont-ils adaptés aux enfants et aux animaux ?', a: 'Oui. Nos techniciens certifiés Certibiocide utilisent des produits homologués et vous donnent les consignes à suivre : aération, délai avant de réoccuper les pièces.' },
  { q: 'Quels nuisibles traitez-vous ?', a: 'Rats, souris, mulots, punaises de lit, cafards, blattes, fourmis, puces, mites et acariens. Chez les particuliers comme chez les professionnels.' },
  { q: 'Intervenez-vous pour les professionnels ?', a: 'Oui : restaurants, hôtels, commerces, bureaux, copropriétés. Interventions ponctuelles ou contrats de suivi, avec rapport pour vos contrôles sanitaires.' },
];
