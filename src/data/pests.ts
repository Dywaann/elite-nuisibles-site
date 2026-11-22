// Pages nuisibles. Chaque entrée produit une page (URL = path).
// Textes volontairement courts : une idée par phrase, listes de 3 éléments maximum.

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
    tagline: 'Rongeurs éliminés vite, et durablement.',
    heroImage: '/images/rat-gris-paris.webp',
    heroAlt: 'Rat gris surpris le long d’un mur dans un logement parisien',
    bullets: ['Sur place en moins d’1h, 7j/7', 'Diagnostic et déplacement gratuits', 'Résultat garanti'],
    intro: {
      title: 'Des rongeurs chez vous ? Agissez avant qu’ils ne se multiplient',
      paragraphs: [
        'Câbles rongés, stocks souillés, maladies : rats et souris abîment votre logement comme vos locaux, et ne partent jamais seuls.',
        'Notre méthode : repérer les points d’entrée, traiter, puis reboucher les accès pour éviter leur retour.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir vite contre les rongeurs',
      items: [
        { title: 'Risques sanitaires', text: 'Leptospirose, salmonellose : urines et déjections contaminent surfaces, aliments et eau.' },
        { title: 'Dégâts matériels', text: 'Câbles rongés, isolation détruite, denrées souillées : réparer coûte vite plus cher que traiter.' },
        { title: 'Prolifération rapide', text: 'Un couple de rats donne plusieurs dizaines de petits par an. Plus on attend, plus c’est lourd.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Une dératisation en 3 étapes',
      intro: 'Un protocole adapté à votre logement ou à vos locaux, par un technicien certifié Certibiocide.',
      items: [
        { title: 'Diagnostic sur place', text: 'Espèce, zones de passage, nids et points d’entrée : tout est identifié.', perks: ['Déplacement gratuit', 'Devis clair avant intervention'] },
        { title: 'Traitement ciblé', text: 'Postes d’appâtage sécurisés, pièges mécaniques, traitement des zones sensibles.', perks: ['Produits professionnels homologués', 'Postes sécurisés enfants et animaux'], badge: 'Le plus demandé' },
        { title: 'Prévention et suivi', text: 'Rebouchage des accès, conseils d’hygiène et passage de contrôle.', perks: ['Résultat garanti', 'Rapport pour les professionnels'] },
      ],
    },
    sideImage: '/images/technicien-deratisation.webp',
    sideAlt: 'Technicien en combinaison de protection face à un rat dans une cuisine',
    faq: [
      { q: 'Combien coûte une dératisation à Paris ?', a: 'À partir de 109 € jusqu’à 30 m². Le prix est fixe et annoncé avant l’intervention, après un diagnostic gratuit.' },
      { q: 'Combien de passages faut-il pour se débarrasser des rats ?', a: 'Un traitement suivi d’un contrôle suffit le plus souvent. Pour une forte infestation ou des locaux professionnels, nous mettons en place un suivi.' },
      { q: 'Les méthodes « fait maison » suffisent-elles ?', a: 'Rarement. Pièges mal placés, produits grand public sous-dosés : un professionnel traite aussi la cause, les accès et les nids.' },
      { q: 'Traitez-vous aussi les souris et les mulots ?', a: 'Oui : rats, surmulots, souris et mulots, en intérieur comme en extérieur.' },
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
    tagline: 'Trois méthodes professionnelles. Résultat garanti.',
    heroImage: '/images/traitement-vapeur-punaises.webp',
    heroAlt: 'Techniciens traitant un canapé à la vapeur contre les punaises de lit',
    bullets: ['Diagnostic gratuit à domicile', 'Intervention discrète, 7j/7', 'Résultat garanti'],
    intro: {
      title: 'Les punaises de lit ne partent pas toutes seules',
      paragraphs: [
        'Discrètes et très résistantes, elles se multiplient vite et survivent aux produits du commerce.',
        'Notre technicien certifié choisit avec vous la méthode adaptée à votre logement : chimique, vapeur sèche ou cryogénisation.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir vite est crucial',
      items: [
        { title: 'Piqûres et démangeaisons', text: 'Elles se nourrissent de sang : démangeaisons, réactions allergiques, infections cutanées.' },
        { title: 'Prolifération rapide', text: 'Une femelle pond plusieurs œufs par jour. L’infestation gagne les autres pièces, parfois les voisins.' },
        { title: 'Impact psychologique', text: 'Stress, insomnies, anxiété : un traitement efficace vous rend vos nuits.' },
      ],
    },
    methods: {
      eyebrow: 'Nos techniques professionnelles',
      title: '3 méthodes, adaptées à chaque situation',
      intro: 'Des méthodes professionnelles reconnues, combinables selon le niveau d’infestation.',
      items: [
        { title: 'Traitement chimique', text: 'Insecticides professionnels rémanents, appliqués sur les zones infestées.', perks: ['Efficace sur forte infestation', 'Effet rémanent 1 à 3 mois', 'Adapté à tous les logements'] },
        { title: 'Traitement vapeur sèche', text: 'Vapeur à 180°C sur matelas, sommiers, textiles et plinthes. Détruit punaises, larves et œufs.', perks: ['Sans produit chimique', 'Idéal enfants et animaux', 'Retour immédiat dans le logement'], badge: 'Recommandé familles' },
        { title: 'Cryogénisation', text: 'Neige carbonique à -78°C : toutes les formes sont tuées au contact.', perks: ['Efficacité maximale au contact', 'Sans produit chimique', 'Idéal infestations sévères'] },
      ],
    },
    sideImage: '/images/punaise-de-lit-drap.webp',
    sideAlt: 'Punaise de lit repérée dans le pli d’un drap',
    faq: [
      { q: 'Combien coûte un traitement contre les punaises de lit ?', a: 'Traitement chimique dès 150 € (jusqu’à 30 m²), vapeur sèche dès 280 €, cryogénisation dès 769 €. Le prix est fixé avant l’intervention, après un diagnostic gratuit.' },
      { q: 'Comment savoir si j’ai des punaises de lit ?', a: 'Piqûres alignées au réveil, taches noires sur le matelas, traces de sang sur les draps, mues dans les recoins du lit. Au moindre doute, demandez un diagnostic.' },
      { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Vapeur sèche ou cryogénisation : vous restez chez vous. Traitement chimique : aérez et attendez quelques heures, selon les consignes du technicien.' },
      { q: 'Intervenez-vous discrètement ?', a: 'Oui. Véhicules non marqués, sans jugement, chez les particuliers comme dans les hôtels et locations courte durée.' },
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
    tagline: 'Colonie éliminée, de la cuisine aux gaines techniques.',
    heroImage: '/images/cafard-blatte.webp',
    heroAlt: 'Cafard sur un évier de cuisine',
    bullets: ['Sur place en moins d’1h, 7j/7', 'Particuliers, restaurants, copropriétés', 'Résultat garanti'],
    intro: {
      title: 'Des nuisibles résistants qui ne pardonnent pas l’attente',
      paragraphs: [
        'Cafards et blattes se reproduisent très vite. Ils dégradent l’hygiène d’un logement et la réputation d’un commerce.',
        'Nous traitons les foyers, les circuits de passage et les gaines techniques, puis nous contrôlons pour éviter leur retour.',
      ],
    },
    dangers: {
      title: 'Un risque sanitaire majeur',
      items: [
        { title: 'Propagation de maladies', text: 'Salmonelles, E. coli : ils transportent des bactéries responsables d’intoxications et d’infections.' },
        { title: 'Allergies et asthme', text: 'Leurs mues et déjections aggravent allergies et asthme, surtout chez les enfants.' },
        { title: 'Aliments contaminés', text: 'Des poubelles à vos placards : ils rendent la nourriture impropre à la consommation.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Un traitement qui élimine toute la colonie',
      intro: 'Tuer les cafards visibles ne suffit pas : il faut atteindre les nids et les œufs.',
      items: [
        { title: 'Gel appât professionnel', text: 'Déposé sur les zones de passage et rapporté au nid : la colonie est détruite de l’intérieur.', perks: ['Très efficace sur la blatte germanique', 'Pas besoin de vider les placards'] },
        { title: 'Pulvérisation ciblée', text: 'Plinthes, fissures, arrière de l’électroménager et gaines techniques.', perks: ['Action rapide', 'Effet rémanent'], badge: 'Le plus complet' },
        { title: 'Contrôle et prévention', text: 'Passage de contrôle, conseils d’hygiène et de calfeutrement.', perks: ['Résultat garanti', 'Rapport pour les professionnels'] },
      ],
    },
    sideImage: '/images/traitement-insecticide-cuisine.webp',
    sideAlt: 'Technicien appliquant un traitement sous les meubles d’une cuisine',
    faq: [
      { q: 'Combien coûte un traitement contre les cafards ?', a: 'À partir de 160 € jusqu’à 30 m². Le prix est fixe et validé avec vous avant l’intervention.' },
      { q: 'Faut-il traiter tout l’immeuble ?', a: 'En copropriété, les blattes circulent par les gaines. Nous traitons votre logement seul, ou les parties communes avec le syndic pour un résultat durable.' },
      { q: 'Combien de temps avant de voir les résultats ?', a: 'Premiers effets en quelques jours. Comptez 2 à 3 semaines pour éliminer toute la colonie, d’où le passage de contrôle.' },
      { q: 'Intervenez-vous dans les restaurants ?', a: 'Oui, y compris en dehors des heures de service, avec rapport d’intervention pour vos contrôles sanitaires.' },
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
    tagline: 'On traite le nid, pas seulement les fourmis visibles.',
    heroImage: '/images/fourmis-colonie.webp',
    heroAlt: 'Colonie de fourmis se nourrissant',
    bullets: ['Sur place en moins d’1h, 7j/7', 'Traitement intérieur et extérieur', 'Résultat garanti'],
    intro: {
      title: 'Une nuisance qui s’installe vite',
      paragraphs: [
        'Attirées par la nourriture, les fourmis sont difficiles à déloger une fois installées.',
        'Nous identifions l’espèce, localisons le nid, le traitons, puis coupons les voies d’accès.',
      ],
    },
    dangers: {
      title: 'Pourquoi agir est essentiel',
      items: [
        { title: 'Aliments contaminés', text: 'En cuisine ou en réserve, leur passage rend les aliments impropres à la consommation.' },
        { title: 'Prolifération rapide', text: 'Une colonie compte des milliers d’individus. Une fois le nid établi, tout se complique.' },
        { title: 'Dégâts sur les structures', text: 'Certaines espèces, comme les fourmis charpentières, creusent le bois.' },
      ],
    },
    methods: {
      eyebrow: 'Notre méthode',
      title: 'Un traitement qui remonte jusqu’au nid',
      intro: 'Les sprays du commerce épargnent la reine. Notre protocole vise la colonie entière.',
      items: [
        { title: 'Identification', text: 'Espèce, pistes et emplacement du nid, dedans comme dehors.', perks: ['Diagnostic gratuit', 'Devis clair'] },
        { title: 'Appâts et traitement du nid', text: 'Gels et appâts rapportés au nid, traitement direct s’il est accessible.', perks: ['Élimine la reine', 'Action durable'], badge: 'Le plus efficace' },
        { title: 'Barrière préventive', text: 'Traitement des points d’entrée et conseils pour éviter le retour.', perks: ['Résultat garanti', 'Conseils personnalisés'] },
      ],
    },
    sideImage: '/images/inspection-nuisibles-cuisine.webp',
    sideAlt: 'Technicien inspectant une cuisine à la lampe torche',
    faq: [
      { q: 'Combien coûte un traitement contre les fourmis ?', a: 'À partir de 160 € jusqu’à 30 m², avec un prix fixe annoncé avant l’intervention.' },
      { q: 'Pourquoi les fourmis reviennent-elles toujours ?', a: 'Parce que le nid et la reine n’ont pas été traités. Tant que la colonie survit, les ouvrières reviennent. Notre traitement vise le nid.' },
      { q: 'Traitez-vous les jardins et terrasses ?', a: 'Oui : jardins, terrasses et façades, quand le nid extérieur est à l’origine de l’invasion.' },
    ],
    serviceName: 'Désinsectisation fourmis',
    formService: 'Désinsectisation - Fourmis',
    related: ['invasion-de-fourmis-dans-la-maison-causes-risques-et-solutions-durables', 'comment-se-debarrasser-des-nuisibles-a-la-maison-conseils-pratiques', 'methodes-ecologiques-nuisibles-idf'],
    priceFrom: '160 €',
  },
};
