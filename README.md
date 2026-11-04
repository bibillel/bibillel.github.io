# Portfolio de Billel Ezzamari

Portfolio de développeur web full-stack : Kasa, Mon Vieux Grimoire et Menu Maker. Interface React et TypeScript avec styles Sass, exécutée avec Vinext/Vite et exportée en pages statiques. Aucune base de données ni API métier nécessaire pour le portfolio.

Billel poursuit son Bachelor CDA à Epitech Lyon et est désormais en alternance. Le portfolio présente son parcours et ses projets ; il ne diffuse plus de recherche de poste ou d’alternance.

## Démarrer

Node.js >= 22.13 et npm. Exécuter `npm ci`, puis `npm run dev`. `npm run build` produit l'export statique.

## Organisation

- `app/page.tsx` : ordre des sections.
- `app/portfolio.tsx` : composants React, menu mobile, contenu des projets et déclenchement des animations.
- `app/styles/` : fichiers Sass séparés pour la base, l'accueil, les projets, le parcours et les animations.
- `app/globals.css` : palette et variables partagées.
- `app/layout.tsx` : langue et métadonnées.

Les projets se déplient avec l'élément HTML natif details, utilisable au clavier. Les animations jouent une seule fois et respectent prefers-reduced-motion. Le contenu reste lisible sans JavaScript.

## Projets et attribution

Les textes proviennent des dépôts/documentations consultés. Les pistes d'amélioration sont des propositions. Menu Maker est une étude de conception sans application codée. Le front-end de Mon Vieux Grimoire était fourni.

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

Le [portfolio public](https://bibillel.github.io/) est accessible sans connexion. Les contrôles et leurs limites sont détaillés dans [VALIDATION.md](docs/VALIDATION.md).

Le contact propose l’adresse e-mail et un lien de rédaction Gmail. Le formulaire externe s’affiche une fois Formspree configuré et transmet l’e-mail, le message et le nom facultatif par POST HTTPS. Voir [la procédure d’activation et de test](docs/CONTACT.md).

## Statistiques de visite

[GoatCounter](https://www.goatcounter.com/) compte les visites et les clics sur les dépôts des projets, le PDF du Kanban, le profil GitHub et les liens de contact. Les chiffres couvrent les visiteurs qui activent la mesure dans le pied de page. Le choix vaut jusqu’au rechargement de la page et peut être retiré au même endroit. Seuls le chemin fixe de la page ou un nom d’événement prédéfini sont envoyés par le site. Aucun contenu du formulaire ni URL de destination n’est inclus.

1. Créer le site dans [GoatCounter](https://www.goatcounter.com/signup) avec le domaine `bibillel.github.io` et garder la collecte individuelle des pages vues désactivée.
2. Dans les variables GitHub Actions du dépôt, ajouter `NEXT_PUBLIC_GOATCOUNTER_CODE` avec le nom de compte qui précède `.goatcounter.com`, puis relancer le workflow Pages. Sans cette variable, la mesure est désactivée.
3. Sur le site publié, ouvrir « Statistiques de visite », autoriser la mesure, puis cliquer sur un lien de projet. Vérifier les compteurs dans le tableau de bord GoatCounter, sous le chemin `/` et dans les événements.

- [Pistes d’amélioration priorisées](docs/AMELIORATIONS.md)

## Publication

Le dépôt principal est [bibillel.github.io](https://github.com/bibillel/bibillel.github.io). Chaque envoi sur `main` lance `.github/workflows/pages.yml` : installation avec `npm ci`, export statique puis publication de `dist/client` sur GitHub Pages. Dans les paramètres Pages du dépôt, la source est GitHub Actions.

## Journal de l'IA

7 septembre 2026 : aide à l'analyse des consignes, exploration puis validation d'une direction graphique rouge/noir, création des composants et styles. 
