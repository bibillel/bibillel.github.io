# Contrôle des critères — 8 septembre 2026

Périmètre : portfolio et preuves techniques. ZIP de dépôt et préparation de l’oral exclus à la demande de Billel.

| Critère | État et preuve |
|---|---|
| Deux projets de formation minimum | Kasa et Grimoire, plus Menu Maker sans code |
| Contextes, travail, difficultés, apprentissages, résultats, améliorations | Fiches détaillées sur la page |
| Captures et logos techniques | Images locales, agrandissement et légendes ; front fourni du Grimoire explicitement crédité |
| Parcours et objectif professionnel | BTS CI, reconversion, motivations, compétences et recherche Lyon/Grenoble |
| Réalisation en code | React/TypeScript + Sass, export HTML statique |
| Kanban | KANBAN.md et kanban.html : quatre états, estimations, priorités, étiquettes, dépendances ; historique reconstitué explicitement signalé |
| SEO | SEO.md : trois offres analysées, limites de correspondance précisées ; title, description, canonique, langue, robots, sitemap |
| Accessibilité automatique | Lighthouse 100/100 accessibilité, bonnes pratiques et SEO ; axe 4.13 : zéro violation détectée sur l’état initial testé |
| Responsive | Largeurs 320, 360, 768 et 1280 px, pas de débordement horizontal mesuré |
| Clavier | Menu ouvert, Escape ferme et rend le focus au bouton ; fiche Kasa ouverte au clic puis fermée avec Entrée ; focus visible |
| Mouvement | CSS reduced-motion désactive animations/transitions ; IntersectionObserver évite les animations quand la préférence est active. Vérification du code, pas un test avec lecteur d’écran |
| README et journal IA | README.md et JOURNAL-IA.md préparés |
| Dépôt dédié | Code public : https://github.com/bibillel/bibillel.github.io ; déploiement GitHub Actions réussi |
| README des projets | Grimoire documenté ; README détaillé Kasa préparé séparément, publication restante |
| Accès sans connexion | https://bibillel.github.io/ : réponse HTTP 200 sans authentification le 8 septembre 2026, titre et URL canonique vérifiés |

## Mesures et limites

Lighthouse mobile sur export statique local : performance 69/100, accessibilité 100, bonnes pratiques 100, SEO 100. Le score performance demeure un axe d’amélioration ; le réseau/CPU simulés et la machine influencent la mesure. Les rapports HTML/JSON ont été produits ; la commande Lighthouse a ensuite signalé une erreur Windows EPERM lors du nettoyage du profil temporaire. Il ne faut donc pas présenter cette commande comme terminée sans erreur.

Le premier rapport signalait que les noms accessibles des logos ne contenaient pas « BE. » ; correction vérifiée dans le second rapport. TypeScript et lint ciblé sur app passent. Le lint global signale aussi des erreurs du catalogue shadcn livré avec le starter, non utilisé dans le portfolio ; elles ne sont pas présentées comme corrigées.

Audits réalisés sur l’export local, pas un audit WCAG complet, ni une garantie d’acceptation pédagogique. Le parcours avec lecteur d’écran, le zoom à 200 % et les contenus ouverts dans tous les audits ne sont pas encore attestés. L’accès anonyme en production a été vérifié après migration sur GitHub Pages. Billel doit s’approprier le code ; le journal ne certifie pas cet apprentissage.

Le contact actuel est GitHub. Une adresse professionnelle directe n’est pas ajoutée sans choix de Billel.
