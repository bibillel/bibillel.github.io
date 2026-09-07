import type { Metadata } from 'next';
import './globals.css';
import './styles/main.scss';
export const metadata: Metadata = {
  icons: { icon: '/mark.svg' },
  title: 'Billel Ezzamari — Développeur web full-stack',
  description:
    'Découvrez le parcours et les projets de Billel Ezzamari, développeur web full-stack : React, Sass, Node.js, MongoDB et conception technique.',
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
