'use client';

import { useEffect, useRef, useState } from 'react';

const account = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE?.trim();
const endpoint =
  account && /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(account)
    ? `https://${account}.goatcounter.com/count`
    : undefined;

function record(endpoint: string, path: string, event = false) {
  const url = new URL(endpoint);
  url.searchParams.set('p', path);
  url.searchParams.set('rnd', String(Date.now()));
  if (event) url.searchParams.set('e', '1');

  void fetch(url, {
    mode: 'no-cors',
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    cache: 'no-store',
    keepalive: true,
  }).catch(() => {
    // Statistics are optional and must never interrupt navigation.
  });
}

export function Audience() {
  const [enabled, setEnabled] = useState(false);
  const pageRecorded = useRef(false);

  useEffect(() => {
    if (!endpoint || !enabled) return;
    const counter = endpoint;

    if (!pageRecorded.current) {
      pageRecorded.current = true;
      record(counter, '/');
    }

    function recordClick(event: MouseEvent) {
      if (!event.isTrusted || event.defaultPrevented) return;
      if (event.type === 'auxclick' && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[data-audience]');
      const name = link?.dataset.audience;
      if (name) record(counter, name, true);
    }

    document.addEventListener('click', recordClick);
    document.addEventListener('auxclick', recordClick);
    return () => {
      document.removeEventListener('click', recordClick);
      document.removeEventListener('auxclick', recordClick);
    };
  }, [enabled]);

  if (!endpoint) return null;

  return (
    <details>
      <summary>Statistiques de visite</summary>
      <p>
        Si vous l’autorisez, GoatCounter mesure les visites et les clics sur les
        liens de projet et de contact. Votre choix vaut jusqu’au rechargement de
        la page.
      </p>
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(event) => setEnabled(event.currentTarget.checked)}
        />{' '}
        Autoriser les statistiques
      </label>
      <p>
        <a href="https://www.goatcounter.com/help/privacy">
          Confidentialité de GoatCounter
        </a>
      </p>
    </details>
  );
}
