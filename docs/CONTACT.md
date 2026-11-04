# Contact du portfolio

Le relais FormSubmit a renvoyé une erreur 522 lors du test du site publié le 4 novembre 2026. Le site utilise désormais un formulaire Formspree lorsqu’un identifiant est configuré. En attendant, la section Contact affiche le lien de rédaction Gmail et l’adresse directe.

## Activation

1. Dans [Formspree](https://formspree.io/), créer un formulaire et vérifier l’adresse destinataire `billel.ezzamari@gmail.com`. Récupérer l’identifiant public indiqué après `/f/` dans l’onglet Integration.
2. Ajouter la variable GitHub Actions `NEXT_PUBLIC_FORMSPREE_ID` avec cet identifiant, puis relancer le workflow Pages.
3. Sur le site publié, envoyer un message de test à sa propre adresse. Vérifier l’arrivée dans Gmail ainsi que l’adresse proposée par la fonction Répondre.

Le navigateur envoie directement l’e-mail, le message et le nom facultatif au prestataire. L’export GitHub Pages utilise l’identifiant public du formulaire. Le champ piège `_gotcha` complète la protection antispam. Une page de confirmation du prestataire indique la prise en charge du message. La réception se vérifie dans Gmail.

- [Intégration HTML Formspree](https://help.formspree.io/articles/building-your-form/building-an-html-form)
- [Confidentialité de Formspree](https://formspree.io/legal/privacy-policy/)
