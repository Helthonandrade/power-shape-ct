import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dúvidas frequentes | Power Shape CT — Academia no Serra, BH',
  description: 'Encontre respostas sobre horários, localização, avaliação, aulas coletivas e treinos na Power Shape CT, academia no bairro Serra, em Belo Horizonte.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Power Shape CT',
    description: 'Tudo o que você precisa saber antes de treinar na Power Shape CT, no bairro Serra, em Belo Horizonte.',
    images: [{ url: '/og.png', width: 1734, height: 899, alt: 'Power Shape CT — Academia no Serra, Belo Horizonte' }],
  },
};

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
