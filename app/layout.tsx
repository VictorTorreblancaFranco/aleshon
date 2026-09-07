import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kleberson & Aleshna · Una sorpresa de cumpleaños',
  description:
    'Un álbum de recuerdos, canciones y una noche especial para Aleshna.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
