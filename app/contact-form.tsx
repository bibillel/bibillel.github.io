'use client';

import { useState, type SyntheticEvent } from 'react';

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
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      event.preventDefault();
      (form.elements.namedItem(firstError) as HTMLElement)?.focus();
      return;
    }
    // Let the browser POST to FormSubmit, including its antispam check and
    // confirmation page. A local validation must never claim delivery.
  }

  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/billel.ezzamari@gmail.com"
      method="POST"
      onSubmit={validateMessage}
      onInput={clearFieldError}
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title">Envoyer un message</h3>
      <p id="contact-help">
        Tous les champs sont obligatoires. Votre message est transmis à
        FormSubmit pour me parvenir par e-mail. Une vérification antispam peut
        être demandée avant la confirmation.{' '}
        <a
          href="https://formsubmit.co/privacy.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Confidentialité du service (PDF, nouvel onglet)
        </a>
      </p>
      <input
        type="hidden"
        name="_subject"
        value="Contact depuis le portfolio de Billel Ezzamari"
      />
      <input type="hidden" name="_template" value="table" />
      <div hidden aria-hidden="true">
        <label htmlFor="contact-website">Laisser ce champ vide</label>
        <input
          id="contact-website"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
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
