import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Power Shape CT | Academia no Serra, Belo Horizonte',
  description: 'Treine na Power Shape CT, academia no bairro Serra em Belo Horizonte. Equipamentos modernos, professores qualificados e treinos personalizados.',
  openGraph: {
    title: 'Power Shape CT | Seu corpo pede potência',
    description: 'Academia no bairro Serra, em Belo Horizonte, com estrutura moderna e acompanhamento profissional.',
    images: [{ url: '/og.png', width: 1734, height: 899, alt: 'Power Shape CT — Seu corpo pede potência.' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power Shape CT | Seu corpo pede potência',
    description: 'Academia no Serra, em Belo Horizonte.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
