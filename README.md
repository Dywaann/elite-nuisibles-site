# Elite Nuisibles IDF : site principal (remplace WordPress)

Stack identique aux landings Bolt : Vite + React 18 + TypeScript + Tailwind + lucide-react.
Chaque page est pré-rendue en HTML statique au build (SEO : Google lit tout le contenu et les balises meta sans exécuter de JavaScript).

## Commandes

```
npm install
npm run dev      # développement
npm run build    # build + pré-rendu des 36 pages + sitemap.xml + robots.txt -> dossier dist/
```

Dans Bolt : la commande de build doit être `npm run build` et le dossier publié `dist` (déjà réglé dans netlify.toml).

## Où modifier quoi

| Élément | Fichier |
|---|---|
| Téléphone, email, adresse, avis, zones, tarifs, FAQ générale | `src/data/site.ts` |
| Pages nuisibles (dératisation, punaises, cafards, fourmis) | `src/data/pests.ts` |
| Articles du blog (21 articles repris de WordPress) | `src/data/posts.json` |
| Mentions légales / CGU / CGV | `src/data/cgu.html` |
| Redirections 301 des anciennes URLs | `public/_redirects` |
| GTM, GA4, Clarity, vérification Search Console | `index.html` |

## URLs conservées (identiques à WordPress)

/ · /services-lutte-nuisibles-paris/ · /deratisation-paris/ · /punaises-de-lit/ · /desinsectisation-cafards-blattes-idf/ · /desinsectisation-fourmis-idf/ · /professionnels-deratisation-paris/ · /tarifs-deratisation-desinsectisation-idf/ · /qui-sommes-nous/ · /contact-elite-nuisibles-idf/ · /demander-un-devis/ · /page-de-remerciement/ (noindex) · /blog/ · /cgu/ · les 21 articles à la racine (/hantavirus-rats-idf/, etc.)

Les anciennes landings WordPress (traitement-punaise-de-lit-idf, landing-cafard, traitement-souris-idf, etc.), les pages WooCommerce et les sitemaps Rank Math redirigent en 301 (voir `public/_redirects`).

Le logo des landings Bolt pointe vers `/wp-content/uploads/2024/04/eliteee-nuisible.png` : ce fichier est conservé dans `public/` pour qu'elles ne cassent pas après la bascule.

## Formulaires

Web3Forms (même clé que les landings). Après envoi : redirection vers /page-de-remerciement/ et événement `generate_lead` poussé dans le dataLayer (pour GTM / Google Ads).

## Bascule du domaine (IONOS)

1. Publier le projet et vérifier l'URL temporaire (pages, formulaire, appels).
2. Ajouter le domaine `elite-nuisibles-idf.fr` + `www` dans les réglages de domaine de l'hébergeur.
3. Chez IONOS (Domaines & SSL > DNS) : remplacer uniquement les enregistrements A / AAAA / CNAME du site par ceux indiqués. Ne pas toucher aux MX, TXT (validation Google) ni aux sous-domaines des landings (intervention., punaises., deratisation., souris., devis.).
4. Tester les anciennes URLs (200 ou 301, jamais 404), puis soumettre `https://elite-nuisibles-idf.fr/sitemap.xml` dans Search Console.
5. Garder l'hébergement WordPress IONOS 2 à 3 semaines avant de résilier.
