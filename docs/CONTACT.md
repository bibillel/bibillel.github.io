# Contact du portfolio

## Pourquoi le formulaire précédent ne transmettait rien

Le formulaire construisait un `mailto:` et demandait au navigateur d’ouvrir la messagerie locale. Sans application correctement configurée, rien ne se passait. Aucun serveur ne recevait le message et le site ne pouvait pas constater un envoi.

## Solution intégrée le 3 novembre 2026

Le navigateur transmet désormais le formulaire par POST HTTPS à `https://formsubmit.co/billel.ezzamari@gmail.com`. FormSubmit relaie le message vers cette adresse. Le champ `email` permet de répondre au visiteur ; le sujet est fixe et le format demandé est un tableau. Aucun secret n’est nécessaire dans le dépôt ou GitHub Actions.

Le contrôle antispam du prestataire est conservé : aucun `_captcha=false` n’est configuré. Un champ piège `_honey` complète ce contrôle. Les limites locales sont de 100 caractères pour le nom, 254 pour l’adresse et 2 000 pour le message. La validation HTML fonctionne sans JavaScript ; la validation React refuse aussi les noms et messages composés d’espaces.

Le formulaire annonce le transfert vers le prestataire et donne accès à sa politique de confidentialité. L’adresse directe et le lien de rédaction Gmail permettent de contacter Billel si le service est indisponible. Le lien Gmail ouvre une rédaction ; il n’envoie pas de message automatiquement.

## Activation du destinataire

L’activation et la livraison réelle ne sont pas attestées au moment de cette modification.

1. Depuis le site publié, envoyer un message de test à sa propre adresse en utilisant le formulaire et terminer la vérification antispam demandée par FormSubmit.
2. Ouvrir l’e-mail d’activation envoyé par FormSubmit à l’adresse destinataire ; vérifier aussi les indésirables.
3. Vérifier que l’activation concerne bien le portfolio `https://bibillel.github.io/`, puis confirmer l’adresse.
4. Envoyer un nouveau test identifié, vérifier sa réception effective et l’adresse de réponse. Une confirmation HTTP ou une page de remerciement ne suffit pas à prouver la livraison dans Gmail.
5. Noter la date du contrôle et son résultat dans le rapport de validation. En cas d’échec, conserver l’alternative Gmail et vérifier le statut du prestataire.

Ne jamais publier dans le dépôt le lien privé d’activation, un jeton d’archive ou une copie de messages reçus. Aucun test ne doit contacter une personne extérieure.

## Sources de fonctionnement

- [Documentation FormSubmit](https://formsubmit.co/documentation) : POST, champ email, sujet, antispam, champ piège et confirmation du destinataire.
- [Mise en route](https://formsubmit.co/) : activation par e-mail lors du premier usage.
- [Confidentialité](https://formsubmit.co/privacy.pdf).

Le relais externe constitue une dépendance opérationnelle : le fonctionnement statique du site ne garantit pas la disponibilité ni la livraison du prestataire. Un service avec compte, tableau de bord et suivi des rejets pourra être étudié si le besoin augmente.
