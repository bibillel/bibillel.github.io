# Validation du portfolio — 10 septembre 2026

## Contrôles réalisés

- Sections accueil, projets, à propos, compétences, parcours et contact présentes.
- Trois projets : Kasa, Mon Vieux Grimoire et Menu Maker ; contextes, objectifs, stacks, compétences, résultats et améliorations explicités.
- Réalisation full-code React/TypeScript/Sass, dépôt Git dédié et README.
- Formulaire : labels associés, type email, champs obligatoires, erreurs textuelles, aria-invalid, annonce des erreurs et focus sur le premier champ invalide. Les cas vide et adresse invalide ont été testés le 9 septembre.
- Le formulaire ouvre un mailto prérempli ; le visiteur confirme l'envoi dans sa messagerie. Aucun envoi effectif n'a été testé.
- Largeurs 320, 360, 768 et 1280 px : aucun débordement horizontal mesuré le 9 septembre.
- Navigation clavier : focus visible, menu mobile, fermeture par Échap et restitution du focus, ouverture des trois fiches avec Entrée.
- Images : aucune image sans attribut alt dans le DOM contrôlé. HTML sémantique et métadonnées SEO présents.
- Axe Chrome et Firefox : aucune violation détectée dans l'état initial testé, rapports du 9 septembre dans audits/.
- Lighthouse final local du 9 septembre : performance 84, accessibilité 100, bonnes pratiques 100, SEO 100. Deux outils d'accessibilité ont ainsi été utilisés, conformément à la page Accessibilité OpenClassrooms consultée.
- Lint global, TypeScript et build réussis après retrait du catalogue de composants inutilisés.
- PDF et ZIP : une page avec liens cliquables, archive contenant seulement le PDF ; intégrité vérifiée. Voir ../LIVRABLE.md.

## Limites

Les audits automatiques couvrent notamment les contrastes détectables dans les états analysés, sans certifier une conformité WCAG complète. Les tests manuels détaillés ont été effectués dans le navigateur Chromium. Firefox a été testé avec axe, pas par un parcours manuel complet. Lecteur d'écran et zoom à 200 % restent non attestés. La réduction des mouvements a été vérifiée dans le code.

Les mesures Lighthouse concernent l'export local. Les rapports ont été produits avant une erreur Windows EPERM de nettoyage du profil ; la commande ne doit pas être décrite comme terminée sans erreur. La publication et les contrôles publics finaux sont à confirmer après le dernier envoi.

L'explication du code et des choix par Billel reste à préparer et à évaluer en soutenance. Ce rapport ne garantit pas l'acceptation pédagogique.
