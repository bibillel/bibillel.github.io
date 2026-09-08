# Portfolio de Billel Ezzamari

Portfolio de développeur web full-stack : Kasa, Mon Vieux Grimoire et Menu Maker. Interface React et TypeScript avec styles Sass, exécutée avec Vinext/Vite et exportée en pages statiques. Aucune base de données ni API métier nécessaire pour le portfolio.

## Démarrer

Node.js >= 22.13 et npm. Exécuter `npm ci`, puis `npm run dev`. `npm run build` produit l'export statique. La configuration Sites conserve l'identité du site ; ne pas créer un nouveau site à chaque modification.

## Organisation

- `app/page.tsx` : ordre des sections.
- `app/portfolio.tsx` : composants React, menu mobile, contenu des projets et déclenchement des animations.
- `app/styles/` : fichiers Sass séparés pour la base, l'accueil, les projets, le parcours et les animations.
- `app/globals.css` : palette et variables partagées.
- `app/layout.tsx` : langue et métadonnées.

Les projets se déplient avec l'élément HTML natif details, utilisable au clavier. Les animations jouent une seule fois et respectent prefers-reduced-motion. Le contenu reste lisible sans JavaScript.

## Projets et attribution

Les textes proviennent des échanges avec Billel et des dépôts/documentations consultés. Les pistes d'amélioration sont des propositions. Menu Maker est une étude de conception sans application codée. Le front-end de Mon Vieux Grimoire était fourni.

- [Kasa](https://github.com/bibillel/projet-5) : interface React/Sass, capture réelle de l’accueil exécuté localement.
- [Mon Vieux Grimoire](https://github.com/bibillel/openclassroom-projet-D-veloppez-le-back-end-d-un-site-de-notation-de-livres) : API Node.js/MongoDB. La capture montre la connexion du front-end fourni ; l’API avec base de données n’a pas été réauditée dans le cadre du portfolio.
- Menu Maker : 28 tâches, spécifications et veille ; extrait du dossier de Billel, sans application codée.

Les logos locaux proviennent de [Simple Icons](https://simpleicons.org/) ; les marques appartiennent à leurs titulaires. Les visuels sont issus des projets OpenClassrooms et du dossier Menu Maker, pas de maquettes générées.

## Vérifications et maintenance

La commande `npx tsc --noEmit` vérifie les types. Servir `dist/client` avec un serveur HTTP statique après `npm run build`. Aucune variable secrète n’est nécessaire. `scripts/build.mjs` adapte la fin du processus Vinext sous Windows pour éviter une erreur native de fermeture après un build réussi.

- [Suivi des tâches](docs/KANBAN.md)
- [Analyse SEO de trois offres](docs/SEO.md)
- [Journal IA détaillé](docs/JOURNAL-IA.md)
- [Rapports Lighthouse et axe](docs/audits/)

Le contenu est pré-rendu en HTML ; le menu mobile utilise JavaScript. Captures agrandissables, détails natifs, navigation par ancres et réduction des mouvements sont intégrés. Modifier le tableau projects pour les textes et les fichiers Sass pour les styles. Refaire le build et les audits après modification. Les audits automatiques ne constituent pas une certification WCAG complète.

La recherche vise Lyon/Grenoble et leurs environs en Auvergne-Rhône-Alpes. [Portfolio hébergé](https://billel-ezzamari-portfolio.billel-ezzamari.chatgpt.site/). L’accès public reste à confirmer après publication. ZIP et préparation de l’oral sont exclus de cette passe à la demande de Billel.

## Journal de l'IA

7 septembre 2026 : aide à l'analyse des consignes, rédaction à partir du vécu de Billel, exploration puis validation d'une direction graphique rouge/noir, création des composants et styles. Billel doit relire les fichiers, comprendre les imports, l'état du menu et l'observation du défilement, puis adapter et expliquer son code avant la soutenance.
