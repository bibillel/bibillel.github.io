import type { Metadata } from 'next';
import './globals.css';
import './styles/main.scss';
export const metadata: Metadata = {
  verification: { google: 'Q335_-2ADBRtrdb-Of-zXhVYtf_pe8V3CoSVXqrmuQo' },
  icons: { icon: '/mark.svg' },
  metadataBase: new URL('https://bibillel.github.io'),
  alternates: { canonical: '/' },
  title: 'Billel Ezzamari — Développeur full-stack junior | Lyon, Grenoble',
  description:
    'Développeur web full-stack junior : projets React, Sass et API REST Node.js/MongoDB. Recherche à Lyon, Grenoble et en Auvergne-Rhône-Alpes.',
  keywords: [
    'Billel Ezzamari',
    'développeur web junior',
    'développeur full-stack Lyon',
    'développeur full-stack Grenoble',
    'React',
    'Node.js',
    'Sass',
    'MongoDB',
  ],
  authors: [{ name: 'Billel Ezzamari', url: 'https://github.com/bibillel' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Billel Ezzamari — Portfolio',
    title: 'Billel Ezzamari — Développeur full-stack junior',
    description:
      'Portfolio de Billel Ezzamari, développeur web full-stack junior à la recherche d’un poste à Lyon, Grenoble et leurs environs.',
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Billel Ezzamari',
              url: 'https://bibillel.github.io/',
              jobTitle: 'Développeur web full-stack junior',
              sameAs: ['https://github.com/bibillel'],
              knowsAbout: ['React', 'Sass', 'Node.js', 'MongoDB'],
            }),
          }}
        />
      </body>
    </html>
  );
}
