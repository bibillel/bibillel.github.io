'use client';

import { useState, type SyntheticEvent } from 'react';

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  function prepareEmail(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (
      form.elements.namedItem('name') as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem('email') as HTMLInputElement
    ).value.trim();
    const message = (
      form.elements.namedItem('message') as HTMLTextAreaElement
    ).value.trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Indiquez votre nom.';
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    if (!email || !emailInput.validity.valid)
      nextErrors.email =
        'Indiquez une adresse e-mail valide, par exemple nom@entreprise.fr.';
    if (!message) nextErrors.message = 'Écrivez votre message.';
    setErrors(nextErrors);
    setReady(false);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLElement)?.focus();
      return;
    }
    const subject = encodeURIComponent('Contact portfolio — ' + name);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    setReady(true);
    window.location.href = `mailto:billel.ezzamari@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="contact-form"
      onSubmit={prepareEmail}
      noValidate
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title">Préparer un message</h3>
      <p id="contact-help">
        Tous les champs sont obligatoires. Ce formulaire ouvre votre application
        de messagerie ; vous y confirmez l’envoi. Aucune donnée n’est
        enregistrée sur ce site.
      </p>
      <label htmlFor="contact-name">Votre nom</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        required
        maxLength={100}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'error-name' : undefined}
      />
      {errors.name && (
        <p id="error-name" className="field-error">
          {errors.name}
        </p>
      )}
      <label htmlFor="contact-email">Votre adresse e-mail</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? 'error-email' : undefined}
      />
      {errors.email && (
        <p id="error-email" className="field-error">
          {errors.email}
        </p>
      )}
      <label htmlFor="contact-message">Votre message</label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={5}
        maxLength={2000}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? 'error-message' : undefined}
      />
      {errors.message && (
        <p id="error-message" className="field-error">
          {errors.message}
        </p>
      )}
      <button
        className="primary-link"
        type="submit"
        aria-describedby="contact-help"
      >
        Ouvrir ma messagerie
      </button>
      <output aria-live="polite">
        {ready
          ? 'Votre message est prêt à être ouvert dans votre messagerie. Il n’a pas encore été envoyé. Si aucune application ne s’ouvre, utilisez l’adresse e-mail ci-dessus.'
          : Object.keys(errors).length
            ? 'Certains champs sont à corriger. Consultez les indications sous chaque champ.'
            : ''}
      </output>
    </form>
  );
}
