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

## Contenus et prochaines étapes

Les textes proviennent des échanges avec Billel et des dépôts/documentations consultés. Les pistes d'amélioration sont des propositions. Menu Maker est une étude de conception sans application codée. Le front-end de Mon Vieux Grimoire était fourni.

Avant le rendu OpenClassrooms : intégrer des captures réelles des applications ; ajouter le contact professionnel choisi par Billel ; analyser trois offres d'emploi pour ajuster le SEO ; effectuer et conserver les résultats Lighthouse et axe/WAVE ; vérifier responsive et clavier ; créer le dépôt GitHub dédié ; assurer l'accès public et préparer le PDF/ZIP de rendu. L'accès Sites initial est privé.

## Journal de l'IA

7 septembre 2026 : aide à l'analyse des consignes, rédaction à partir du vécu de Billel, exploration puis validation d'une direction graphique rouge/noir, création des composants et styles. Billel doit relire les fichiers, comprendre les imports, l'état du menu et l'observation du défilement, puis adapter et expliquer son code avant la soutenance.
