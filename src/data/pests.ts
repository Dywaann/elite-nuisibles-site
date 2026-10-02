export type PestPageData = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  bullets: string[];
  intro: { title: string; paragraphs: string[] };
  dangers: { title: string; items: { title: string; text: string }[] };
  methods: { eyebrow: string; title: string; intro: string; items: { title: string; text: string; perks: string[]; badge?: string }[] };
  sideImage: string;
  sideAlt: string;
  faq: { q: string; a: string }[];
  serviceName: string;
  formService: string;
  related: string[];
  priceFrom: string;
};

export const PESTS: Record<string, PestPageData> = {
  deratisation: {
    path: '/deratisation-paris/',
    seoTitle: 'Dératisation Paris & IDF : rats et souris | Elite Nuisibles IDF',
    seoDescription:
      'Rats ou souris dans vos locaux à Paris ? Elite Nuisibles IDF vous garantit une dératisation rapide, discrète et durable. Intervention en moins d’1h, devis gratuit.',
    eyebrow: 'Dératisation Paris et Île-de-France',
    h1: 'Dératisation à Paris : rats, souris et mulots',
    tagline: 'Éradication rapide et durable des rongeurs',
    heroImage: '/images/rat-gris-paris.webp',
    heroAlt: 'Rat gris surpris le long d’un mur dans un logement parisien',
    bullets: ['Intervention en moins d’1h, 7j/7', 'Diagnostic et déplacement gratuits', 'Résultat garanti'],
    intro: {
      title: 'Des rongeurs chez vous ? Agissez avant qu’ils ne se multiplient',
      paragraphs: [
        'La présence de rats et de souris est perturbante et dangereuse pour votre maison comme pour votre entreprise. Ces nuisibles causent des dégâts matériels (câbles, isolation, stocks), propagent des maladies et compromettent l’hygiène de vos espaces de vie ou de travail.',
        'Avec notre expertise et nos méthodes éprouvées, nous vous proposons une solution rapide, efficace et durable : repérage des points d’entrée, traitement adapté à votre situation, puis rebouchage et conseils pour éviter toute nouvelle infestation.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir vite contre les rongeurs',
      items: [
        { title: 'Risques sanitaires', text: 'Leptospirose, salmonellose : les rongeurs contaminent surfaces, aliments et eau par leurs urines et déjections.' },
        { title: 'Dégâts matériels', text: 'Câbles électriques rongés, isolation détruite, denrées souillées : les réparations coûtent vite plus cher que le traitement.' },
        { title: 'Prolifération rapide', text: 'Un couple de rats peut donner naissance à plusieurs dizaines de petits par an. Plus on attend, plus l’intervention est lourde.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Une dératisation en 3 étapes',
      intro: 'Chaque infestation est unique. Notre technicien certifié Certibiocide adapte le protocole à votre logement ou à vos locaux.',
      items: [
        { title: 'Diagnostic sur place', text: 'Identification de l’espèce, des zones de passage, des nids et des points d’entrée.', perks: ['Déplacement gratuit', 'Devis clair avant intervention'] },
        { title: 'Traitement ciblé', text: 'Postes d’appâtage sécurisés, pièges mécaniques et traitement des zones sensibles selon la configuration.', perks: ['Produits professionnels homologués', 'Postes sécurisés enfants et animaux'], badge: 'Le plus demandé' },
        { title: 'Prévention et suivi', text: 'Rebouchage des accès, conseils d’hygiène et passage de contrôle pour vérifier l’éradication.', perks: ['Résultat garanti', 'Rapport pour les professionnels'] },
      ],
    },
    sideImage: '/images/technicien-deratisation.webp',
    sideAlt: 'Technicien en combinaison de protection face à un rat dans une cuisine',
    faq: [
      { q: 'Combien coûte une dératisation à Paris ?', a: 'Nos tarifs démarrent à 109 € pour une surface jusqu’à 30 m². Le prix est fixe et annoncé avant l’intervention, après un diagnostic gratuit.' },
      { q: 'Combien de passages faut-il pour se débarrasser des rats ?', a: 'Cela dépend de l’ampleur de l’infestation. Un passage de traitement suivi d’un contrôle suffit dans la plupart des cas. Pour les infestations importantes ou les locaux professionnels, nous mettons en place un suivi.' },
      { q: 'Les méthodes « fait maison » suffisent-elles ?', a: 'Rarement. Les rongeurs se méfient des pièges mal placés et les produits grand public sont souvent sous-dosés. Un professionnel traite aussi la cause : les accès et les nids.' },
      { q: 'Traitez-vous aussi les souris et les mulots ?', a: 'Oui, nous traitons toutes les espèces de rongeurs : rats, surmulots, souris et mulots, en intérieur comme en extérieur.' },
    ],
    serviceName: 'Dératisation',
    formService: 'Dératisation - Rats et souris',
    related: ['hantavirus-rats-idf', 'deratisation-pourquoi-les-methodes-fait-maison-sont-inefficaces', 'deratisation-durable-idf'],
    priceFrom: '109 €',
  },
  punaises: {
    path: '/punaises-de-lit/',
    seoTitle: 'Traitement punaises de lit Paris & IDF | Elite Nuisibles IDF',
    seoDescription:
      'Infestation de punaises de lit à Paris ? Elite Nuisibles IDF propose 3 traitements (chimique, vapeur, cryogénie), une intervention discrète en urgence 7j/7 et un résultat garanti.',
    eyebrow: 'Punaises de lit Paris et Île-de-France',
    h1: 'Traitement des punaises de lit à Paris et en Île-de-France',
    tagline: 'Traitement radical garanti contre les punaises de lit',
    heroImage: '/images/traitement-vapeur-punaises.webp',
    heroAlt: 'Techniciens traitant un canapé à la vapeur contre les punaises de lit',
    bullets: ['Diagnostic gratuit à domicile', 'Intervention discrète en urgence 7j/7', 'Résultat garanti'],
    intro: {
      title: 'Les punaises de lit ne partent pas toutes seules',
      paragraphs: [
        'Les punaises de lit peuvent transformer votre logement en véritable cauchemar. Discrètes, très résistantes, elles se multiplient rapidement et sont difficiles à éliminer sans intervention professionnelle.',
        'Nous sommes spécialisés dans l’éradication totale des punaises de lit, avec trois méthodes professionnelles reconnues. Notre exterminateur certifié choisit avec vous la plus adaptée à votre logement et à votre situation.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir vite est crucial',
      items: [
        { title: 'Piqûres et démangeaisons', text: 'Les punaises se nourrissent de sang humain et laissent des piqûres qui provoquent démangeaisons, réactions allergiques et infections cutanées.' },
        { title: 'Prolifération rapide', text: 'Une femelle pond plusieurs œufs par jour : l’infestation gagne vite d’autres pièces et parfois les logements voisins.' },
        { title: 'Impact psychologique', text: 'Stress, troubles du sommeil, anxiété : vivre avec des punaises de lit épuise. Un traitement efficace vous rend vos nuits.' },
      ],
    },
    methods: {
      eyebrow: 'Nos techniques professionnelles',
      title: '3 méthodes professionnelles, adaptées à chaque situation',
      intro: 'Contrairement aux solutions du commerce, nous proposons 3 méthodes professionnelles reconnues, combinables selon le niveau d’infestation.',
      items: [
        { title: 'Traitement chimique', text: 'Application ciblée d’insecticides professionnels rémanents sur les zones d’infestation. Méthode classique et éprouvée.', perks: ['Efficace même sur infestation forte', 'Effet rémanent 1 à 3 mois', 'Adapté à tous les logements'] },
        { title: 'Traitement vapeur sèche', text: 'Vapeur à 180°C projetée sur matelas, sommiers, textiles, coutures et plinthes. Détruit punaises, larves et œufs sans produit chimique.', perks: ['Sans produit chimique', 'Idéal enfants et animaux', 'Retour immédiat dans le logement'], badge: 'Recommandé familles' },
        { title: 'Cryogénisation', text: 'Neige carbonique à -78°C projetée sur les zones contaminées. Tue instantanément toutes les formes au contact.', perks: ['Efficacité maximale au contact', 'Sans produit chimique', 'Idéal infestations sévères'] },
      ],
    },
    sideImage: '/images/punaise-de-lit-drap.webp',
    sideAlt: 'Punaise de lit repérée dans le pli d’un drap',
    faq: [
      { q: 'Combien coûte un traitement contre les punaises de lit ?', a: 'Le traitement chimique démarre à 150 € (jusqu’à 30 m²), la vapeur sèche à 280 € et la cryogénisation à 769 €. Le prix est fixé avant l’intervention, après diagnostic gratuit.' },
      { q: 'Comment savoir si j’ai des punaises de lit ?', a: 'Piqûres alignées au réveil, petites taches noires sur le matelas ou les coutures, traces de sang sur les draps, mues dans les recoins du lit : au moindre doute, demandez un diagnostic.' },
      { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec la vapeur sèche ou la cryogénisation, vous pouvez réoccuper le logement immédiatement. Avec le traitement chimique, il faut aérer et attendre quelques heures, selon les consignes du technicien.' },
      { q: 'Intervenez-vous discrètement ?', a: 'Oui. Nos techniciens peuvent intervenir avec des véhicules non marqués, sans jugement, chez les particuliers comme dans les hôtels et locations courte durée.' },
    ],
    serviceName: 'Traitement punaises de lit',
    formService: 'Désinsectisation - Punaises de lit',
    related: ['punaises-de-lit-comment-les-detecter-et-sen-debarrasser-efficacement', 'punaises-de-lit-mythes-et-verites', 'limportance-de-la-desinfection-apres-une-infestation'],
    priceFrom: '150 €',
  },
  cafards: {
    path: '/desinsectisation-cafards-blattes-idf/',
    seoTitle: 'Désinsectisation cafards & blattes IDF – Elite Nuisibles',
    seoDescription:
      'Éliminez cafards et blattes en Île-de-France avec Elite Nuisibles IDF : intervention en moins d’1h, traitement professionnel par gel et pulvérisation, devis gratuit.',
    eyebrow: 'Cafards et blattes en Île-de-France',
    h1: 'Désinsectisation cafards et blattes en Île-de-France',
    tagline: 'Éradication complète, de la cuisine aux gaines techniques',
    heroImage: '/images/cafard-blatte.webp',
    heroAlt: 'Cafard sur un évier de cuisine',
    bullets: ['Intervention en moins d’1h, 7j/7', 'Particuliers, restaurants et copropriétés', 'Résultat garanti'],
    intro: {
      title: 'Des nuisibles résistants qui ne pardonnent pas l’attente',
      paragraphs: [
        'Les cafards et les blattes sont des nuisibles tenaces, capables de survivre dans des conditions difficiles et de se reproduire très rapidement. Leur présence nuit à l’hygiène de votre logement et peut porter atteinte à la réputation d’un commerce.',
        'Nous sommes spécialisés dans l’élimination complète des cafards et des blattes, avec des solutions adaptées et durables : traitement des foyers, des circuits de passage et des gaines techniques, puis suivi pour éviter le retour.',
      ],
    },
    dangers: {
      title: 'Un risque sanitaire majeur',
      items: [
        { title: 'Propagation de maladies', text: 'Les cafards transportent salmonelles, E. coli et d’autres bactéries responsables d’intoxications alimentaires et d’infections.' },
        { title: 'Allergies et asthme', text: 'Leurs mues et déjections aggravent les symptômes d’allergie et d’asthme, surtout chez les enfants et les personnes sensibles.' },
        { title: 'Contamination des aliments', text: 'En fouillant poubelles et restes alimentaires, ils contaminent la nourriture et la rendent impropre à la consommation.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Un traitement pensé pour éliminer la colonie entière',
      intro: 'Tuer les cafards visibles ne suffit pas : il faut atteindre les nids, les œufs et les zones cachées. Notre protocole combine plusieurs techniques.',
      items: [
        { title: 'Gel appât professionnel', text: 'Déposé dans les zones de passage, il est rapporté au nid et détruit la colonie de l’intérieur.', perks: ['Très efficace sur la blatte germanique', 'Pas besoin de vider les placards'] },
        { title: 'Pulvérisation ciblée', text: 'Traitement insecticide des plinthes, fissures, arrière-électroménager et gaines techniques.', perks: ['Action rapide', 'Effet rémanent'], badge: 'Le plus complet' },
        { title: 'Contrôle et prévention', text: 'Passage de contrôle, conseils d’hygiène et de calfeutrement pour éviter une réinfestation.', perks: ['Résultat garanti', 'Rapport pour les professionnels'] },
      ],
    },
    sideImage: '/images/traitement-insecticide-cuisine.webp',
    sideAlt: 'Technicien appliquant un traitement sous les meubles d’une cuisine',
    faq: [
      { q: 'Combien coûte un traitement contre les cafards ?', a: 'Nos traitements anti-nuisibles démarrent à 160 € pour une surface jusqu’à 30 m². Le prix est fixe et validé avec vous avant l’intervention.' },
      { q: 'Faut-il traiter tout l’immeuble ?', a: 'En copropriété, les blattes circulent par les gaines et les colonnes. Nous pouvons traiter votre logement seul ou proposer au syndic un traitement des parties communes pour un résultat durable.' },
      { q: 'Combien de temps avant de voir les résultats ?', a: 'Les premiers effets sont visibles en quelques jours. L’éradication complète de la colonie demande en général 2 à 3 semaines, d’où le passage de contrôle.' },
      { q: 'Intervenez-vous dans les restaurants ?', a: 'Oui, nous intervenons dans les cuisines professionnelles, en dehors des heures de service si besoin, avec rapport d’intervention pour vos contrôles sanitaires.' },
    ],
    serviceName: 'Désinsectisation cafards et blattes',
    formService: 'Désinsectisation - Cafards et blattes',
    related: ['infestation-cafards-logement', 'prevention-des-infestations-de-cafards-dans-les-immeubles-anciens-elite-nuisibles', 'proteger-restaurant-nuisibles-idf'],
    priceFrom: '160 €',
  },
  fourmis: {
    path: '/desinsectisation-fourmis-idf/',
    seoTitle: 'Désinsectisation fourmis Île-de-France – Elite Nuisibles IDF',
    seoDescription:
      'Éliminez les fourmis en Île-de-France avec Elite Nuisibles IDF : traitement du nid, intervention en moins d’1h, produits professionnels et devis gratuit.',
    eyebrow: 'Fourmis en Île-de-France',
    h1: 'Désinsectisation fourmis en Île-de-France',
    tagline: 'On traite le nid, pas seulement les fourmis visibles',
    heroImage: '/images/fourmis-colonie.webp',
    heroAlt: 'Colonie de fourmis se nourrissant',
    bullets: ['Intervention en moins d’1h, 7j/7', 'Traitement intérieur et extérieur', 'Résultat garanti'],
    intro: {
      title: 'Une nuisance qui s’installe vite',
      paragraphs: [
        'Les fourmis peuvent sembler inoffensives, mais elles deviennent vite une vraie nuisance lorsqu’elles envahissent votre domicile ou votre entreprise. Attirées par la nourriture, elles sont difficiles à déloger une fois installées.',
        'Nous vous proposons des solutions efficaces et durables : identification de l’espèce, localisation du nid, traitement ciblé et conseils pour couper les voies d’accès.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir est essentiel',
      items: [
        { title: 'Contamination des aliments', text: 'Dans la cuisine ou les réserves, leur passage rend les aliments impropres à la consommation.' },
        { title: 'Prolifération rapide', text: 'Une colonie compte des milliers d’individus. Une fois le nid établi, elle se multiplie et l’éradication se complique.' },
        { title: 'Dégâts sur les structures', text: 'Certaines espèces, comme les fourmis charpentières, creusent le bois et endommagent les structures.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Un traitement qui remonte jusqu’au nid',
      intro: 'Les sprays du commerce tuent les ouvrières visibles mais épargnent la reine. Notre protocole vise la colonie entière.',
      items: [
        { title: 'Identification', text: 'Repérage de l’espèce, des pistes et de la localisation du nid, en intérieur comme en extérieur.', perks: ['Diagnostic gratuit', 'Devis clair'] },
        { title: 'Appâts et traitement du nid', text: 'Gels et appâts rapportés au nid, traitement direct lorsque le nid est accessible.', perks: ['Élimine la reine', 'Action durable'], badge: 'Le plus efficace' },
        { title: 'Barrière préventive', text: 'Traitement des points d’entrée et conseils pour éviter le retour des colonies.', perks: ['Résultat garanti', 'Conseils personnalisés'] },
      ],
    },
    sideImage: '/images/inspection-nuisibles-cuisine.webp',
    sideAlt: 'Technicien inspectant une cuisine à la lampe torche',
    faq: [
      { q: 'Combien coûte un traitement contre les fourmis ?', a: 'Nos traitements anti-nuisibles démarrent à 160 € pour une surface jusqu’à 30 m², avec un prix fixe annoncé avant l’intervention.' },
      { q: 'Pourquoi les fourmis reviennent-elles toujours ?', a: 'Parce que le nid et la reine n’ont pas été traités. Tant que la colonie survit, de nouvelles ouvrières reviennent. Notre traitement cible justement le nid.' },
      { q: 'Traitez-vous les jardins et terrasses ?', a: 'Oui, nous traitons les nids extérieurs (jardins, terrasses, façades) lorsqu’ils sont à l’origine de l’invasion intérieure.' },
    ],
    serviceName: 'Désinsectisation fourmis',
    formService: 'Désinsectisation - Fourmis',
    related: ['invasion-de-fourmis-dans-la-maison-causes-risques-et-solutions-durables', 'comment-se-debarrasser-des-nuisibles-a-la-maison-conseils-pratiques', 'methodes-ecologiques-nuisibles-idf'],
    priceFrom: '160 €',
  },
};
