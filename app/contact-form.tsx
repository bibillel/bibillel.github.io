'use client';

import { useState, type SyntheticEvent } from 'react';

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();
const formAction =
  formId && /^[a-z0-9]+$/.test(formId)
    ? `https://formspree.io/f/${formId}`
    : undefined;

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  function clearFieldError(event: SyntheticEvent<HTMLFormElement>) {
    const field = (event.target as HTMLInputElement | HTMLTextAreaElement).name;
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }
  function validateMessage(event: SyntheticEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const email = (
      form.elements.namedItem('email') as HTMLInputElement
    ).value.trim();
    const message = (
      form.elements.namedItem('message') as HTMLTextAreaElement
    ).value.trim();
    const nextErrors: Record<string, string> = {};
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    if (!email || !emailInput.validity.valid)
      nextErrors.email =
        'Indiquez une adresse e-mail valide, par exemple nom@entreprise.fr.';
    if (!message) nextErrors.message = 'Écrivez votre message.';
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      event.preventDefault();
      (form.elements.namedItem(firstError) as HTMLElement)?.focus();
      return;
    }
  }

  if (!formAction) return null;

  return (
    <form
      className="contact-form"
      action={formAction}
      method="POST"
      onSubmit={validateMessage}
      onInput={clearFieldError}
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title">Envoyer un message</h3>
      <p id="contact-help">
        Votre e-mail et votre message sont nécessaires pour que je puisse
        traiter votre demande et vous répondre. Formspree relaie votre message
        vers ma boîte Gmail et peut demander une vérification antispam. Pour
        toute demande liée à vos données, écrivez à Billel Ezzamari à l’adresse
        indiquée ci-dessus.{' '}
        <a
          href="https://formspree.io/legal/privacy-policy/"
          target="_blank"
          rel="noreferrer"
        >
          Confidentialité de Formspree (nouvel onglet)
        </a>
      </p>
      <input
        type="hidden"
        name="_subject"
        value="Contact depuis le portfolio de Billel Ezzamari"
      />
      <div hidden aria-hidden="true">
        <label htmlFor="contact-website">Laisser ce champ vide</label>
        <input
          id="contact-website"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label htmlFor="contact-name">Votre nom (facultatif)</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        maxLength={100}
      />
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
        Envoyer mon message
      </button>
      <output aria-live="polite">
        {Object.keys(errors).length
          ? 'Certains champs sont à corriger. Consultez les indications sous chaque champ.'
          : ''}
      </output>
    </form>
  );
}
