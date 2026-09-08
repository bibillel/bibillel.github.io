import type { Metadata } from 'next';
import './globals.css';
import './styles/main.scss';
export const metadata: Metadata = {
  icons: { icon: '/mark.svg' },
  metadataBase: new URL('https://billel-ezzamari-portfolio.billel-ezzamari.chatgpt.site'),
  alternates: { canonical: '/' },
  title: 'Billel Ezzamari — Développeur full-stack junior | Lyon, Grenoble',
  description:
    'Développeur web full-stack junior : projets React, Sass et API REST Node.js/MongoDB. Recherche à Lyon, Grenoble et en Auvergne-Rhône-Alpes.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
