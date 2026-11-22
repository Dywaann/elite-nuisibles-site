# Elite Nuisibles IDF : site principal (refonte 2026)

Site pré-généré avec Astro : chaque page sort en HTML statique dans `dist/`, sans JavaScript de rendu.
Direction visuelle « Clair givré » : bleus du logo, vert réservé aux appels, cartes en verre dépoli.

## Commandes

```
npm install
npm run dev      # développement (http://localhost:4321)
npm run build    # génère le site dans dist/ (+ sitemap.xml et robots.txt)
```

Netlify : commande `npm run build`, dossier publié `dist` (déjà réglé dans `netlify.toml`).

## Où modifier quoi

| Élément | Fichier |
|---|---|
| Téléphone, email, adresse, note Google, avis, zones, tarifs, FAQ, chiffres clés, engagements | `src/data/site.ts` |
| Références clients du bandeau défilant (nom + logo) | `CLIENTS` dans `src/data/site.ts`, logos dans `public/images/clients/` |
| Pages nuisibles (dératisation, punaises, cafards, fourmis) | `src/data/pests.ts` |
| Nouveaux articles du blog : un fichier Markdown par article | `src/content/articles/*.md` |
| 21 articles repris de WordPress | `src/content/articles-wordpress.json` |
| Mentions légales / CGU / CGV | `src/content/cgu.html` |
| Couleurs, verre, animations | `src/styles/global.css` |
| GTM, GA4, Clarity, vérification Search Console | identifiants dans `src/data/site.ts`, balises dans `src/layouts/Base.astro` |
| Redirections 301 des anciennes URLs | `public/_redirects` |

## Ajouter un article

Créer `src/content/articles/mon-article.md` (le nom du fichier devient l'URL `/mon-article/`) :

```
---
title: Titre de l'article
seoTitle: Titre SEO (facultatif)
seoDescription: Description SEO
date: 2026-11-23
image: /images/blog/mon-image.webp
excerpt: Résumé affiché sur les cartes du blog.
faq:
  - q: Une question ?
    a: Sa réponse.
---

Contenu en Markdown.
```

L'article apparaît automatiquement dans le blog, l'accueil et le sitemap au prochain build.

## URLs conservées (identiques à l'ancien site)

/ · /services-lutte-nuisibles-paris/ · /deratisation-paris/ · /punaises-de-lit/ · /desinsectisation-cafards-blattes-idf/ · /desinsectisation-fourmis-idf/ · /professionnels-deratisation-paris/ · /tarifs-deratisation-desinsectisation-idf/ · /qui-sommes-nous/ · /contact-elite-nuisibles-idf/ · /demander-un-devis/ · /page-de-remerciement/ (noindex) · /blog/ · /cgu/ · les 21 articles à la racine.

Le logo des landings Bolt pointe vers `/wp-content/uploads/2024/04/eliteee-nuisible.png` : ce fichier est conservé dans `public/`.

## Formulaires

Web3Forms (même clé que les landings). Après envoi : redirection vers /page-de-remerciement/ et événement `generate_lead` poussé dans le dataLayer. Les clics sur un numéro de téléphone poussent `click_to_call`.
