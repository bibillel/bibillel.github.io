# Pistes d’amélioration du portfolio

État au 3 novembre 2026. Ces pistes sont des propositions ; elles ne décrivent pas des fonctions déjà livrées. Le portfolio sert maintenant à présenter le travail d’un développeur en alternance, et non à annoncer une recherche de contrat.

| Priorité | Piste | Travail concret | Critère de fin | Effort indicatif |
|---|---|---|---|---|
| P0 | Confirmer la réception des contacts | Configurer Formspree et faire un test de bout en bout avec sa propre adresse ; vérifier aussi Répondre | Message reçu dans la bonne boîte et réponse adressée à l’expéditeur | Court, dépend de l’activation |
| P1 | Décrire l’expérience en alternance | Ajouter entreprise, intitulé, début et missions uniquement après confirmation de Billel ; distinguer travail personnel et travail d’équipe | Profil GitHub et portfolio cohérents, sans information confidentielle | Court |
| P1 | Montrer les projets récents | Préparer une fiche Jikabo et actualiser Garage à partir de l’état réel : périmètre, rôle personnel, stack, captures et liens accessibles | Chaque affirmation peut être rapprochée d’un livrable ou dépôt ; aucune fonctionnalité prévue présentée comme réalisée | Moyen |
| P1 | Protéger la publication | Ajouter lint et TypeScript au workflow Pages, puis un contrôle navigateur du contact sans envoyer de message réel dans la CI | Un défaut de type ou de formulaire bloque le déploiement ; aucun e-mail n’est émis par les tests automatiques | Court à moyen |
| P2 | Refaire les contrôles d’accessibilité | Parcourir menu et contact au clavier, lecteur d’écran et zoom 200 pour cent ; tester mobile après les changements | Rapport daté séparant contrôles manuels et automatiques et couvrant les erreurs du formulaire | Moyen |
| P2 | Rendre les projets essayables | Choisir des démonstrations maintenables et des données fictives ; documenter les projets qui nécessitent une base ou un serveur | Liens valides, lancement documenté, aucun secret ni donnée réelle exposé | Moyen |
| P2 | Réduire la maintenance | Examiner les dépendances non utilisées et la taille des bundles ; prévoir la mise à jour progressive du moteur Vinext bêta | Avant et après mesurés, build statique et parcours principaux conservés | Moyen |
| P3 | Clarifier la documentation publique | Séparer les audits historiques des validations actuelles, vérifier régulièrement les liens et captures | Un lecteur identifie immédiatement la date et le périmètre de chaque contrôle | Court |

## Changements réalisés dans cette intervention

- Formulaire `mailto:` remplacé par une transmission HTTPS à un prestataire externe, avec antispam conservé et procédure d’activation documentée.
- Alternative de rédaction dans Gmail pour éviter de dépendre d’une application de messagerie installée.
- Profil GitHub, présentation du parcours, contact et métadonnées alignés sur la situation en alternance.
- Aucun nom d’entreprise, date de début ou mission ajouté sans information confirmée.

## Ordre conseillé

Terminer d’abord l’activation et le contrôle de réception. Ajouter ensuite l’expérience et une preuve de projet récente, puis sécuriser le workflow et actualiser les audits.
