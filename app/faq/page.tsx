'use client';

import { useState } from 'react';
import styles from './page.module.css';

type TransitLine = { number: string; route: string; directions: string };
type FaqItem = { question: string; answer: string; routeLink?: boolean; transitLines?: TransitLine[] };

const googleRouteUrl = 'https://www.google.com/maps/dir/?api=1&destination=Power%20Shape%20CT%2C%20Rua%20do%20Ouro%2C%20918%2C%20Serra%2C%20Belo%20Horizonte%20-%20MG';
const googleTransitUrl = googleRouteUrl + '&travelmode=transit';

const faqItems: FaqItem[] = [
  { question: 'Onde fica a Power Shape CT?', answer: 'A Power Shape CT fica na Rua do Ouro, 918, no bairro Serra, em Belo Horizonte — MG, CEP 30220-000. Abra a rota abaixo: o Google Maps usa a sua localização como ponto de partida e calcula o melhor caminho até a academia.', routeLink: true },
  { question: 'Quais ônibus passam perto da academia?', answer: 'Os pontos mais próximos ficam na Rua Palmira, 657, e na Rua do Ouro, 1014 — cerca de 1 a 2 minutos a pé da esquina da academia. Para chegar, procure o sentido Serra ou Rua do Ouro. Na volta, embarque no sentido do bairro ou corredor indicado. As principais opções são:', transitLines: [
    { number: '2102', route: 'Gameleira ↔ Serra', directions: 'Oeste, Prado, Barro Preto, Centro, Afonso Pena e Savassi.' },
    { number: '2151', route: 'Vista Alegre ↔ Serra', directions: 'Vista Alegre, Nova Suíça, Av. Amazonas, Centro e Savassi.' },
    { number: '4107', route: 'Alto Caiçara ↔ Serra', directions: 'Alto Caiçara, Pedro II, Centro, Afonso Pena e Savassi.' },
    { number: '8150', route: 'União ↔ Serra', directions: 'União, Floresta, área hospitalar e Serra.' },
    { number: '102', route: 'N. Sra. de Fátima ↔ Hospital Evangélico', directions: 'Aglomerado da Serra, Av. Cardoso, Rua do Ouro e área hospitalar.' },
    { number: '107', route: 'Vila Marçola ↔ Rua do Ouro', directions: 'Linha local circular entre Vila Marçola, Rua Palmira e Rua do Ouro.' },
  ] },
  { question: 'Qual é o horário de funcionamento?', answer: 'A academia funciona de segunda a sexta, das 5h às 22h; aos sábados, das 8h às 15h; e aos domingos, das 9h às 12h. Em feriados, consulte a equipe para confirmar o horário especial.' },
  { question: 'Como agendo uma avaliação?', answer: 'Acesse “Já sou aluno” no site, escolha “Avaliação” e selecione o melhor dia e horário no painel de agendamento. Se precisar de ajuda, fale diretamente com a equipe pelo WhatsApp.' },
  { question: 'Quais aulas coletivas posso agendar?', answer: 'O site apresenta as agendas de Power Bike, Power Move e Power Dance. Escolha a modalidade na área “Já sou aluno” para consultar os horários disponíveis e reservar sua aula.' },
  { question: 'A Power Shape atende quem nunca treinou?', answer: 'Sim. Quem está começando pode conversar com a equipe, realizar uma avaliação e receber orientação para evoluir com segurança, respeitando o próprio condicionamento e os objetivos pessoais.' },
  { question: 'Os treinos podem ser adaptados ao meu objetivo?', answer: 'A proposta é direcionar o treino de acordo com objetivos como força, condicionamento, mobilidade, emagrecimento ou recomposição corporal. O planejamento adequado depende de avaliação e orientação profissional.' },
  { question: 'Que tipos de equipamentos a academia oferece?', answer: 'A estrutura contempla musculação, pesos livres, estações de cabos, equipamentos cardiovasculares — como esteiras, bicicletas e elípticos — e acessórios para treino funcional. Consulte a equipe caso precise de um recurso específico.' },
  { question: 'Como consulto planos, valores e condições atuais?', answer: 'Planos, valores e condições podem mudar ao longo do tempo. Para receber as opções atualizadas e entender qual combina melhor com sua rotina, fale com a equipe pelo WhatsApp.' },
  { question: 'Preciso agendar todas as aulas?', answer: 'As experiências disponíveis no painel de agendamento devem ser reservadas conforme os horários abertos. Para musculação ou outras atividades, confirme com a equipe se há necessidade de agendamento prévio.' },
  { question: 'Tenho uma limitação ou lesão. Posso treinar?', answer: 'Converse com seu médico ou profissional de saúde quando necessário e informe a equipe antes de iniciar. Assim, os professores poderão orientar o treino dentro das recomendações recebidas e dos limites individuais.' },
];

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 11.8a8.4 8.4 0 0 1-12.5 7.3L3.5 20.5l1.4-4.3a8.4 8.4 0 1 1 15.5-4.4Z"/><path d="M8.2 7.7c.2-.5.4-.5.8-.5h.4c.2 0 .4 0 .5.4l.8 2c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.2 1.5-1.1 2.1-.6.4-1.3.6-2.1.4-1-.2-2.3-.7-3.9-2.1-1.3-1.2-2.2-2.7-2.5-3.7-.4-1.3 0-2.5.5-3.1.2-.1.3-.1.5-.1Z"/></svg>;
}

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="Power Shape CT — voltar ao início"><img src="/logo-power-shape.png" alt="Power Shape CT" /></a>
      <nav aria-label="Navegação da página de dúvidas">
        <a href="/">Início</a><a href="/#aluno">Já sou aluno</a><a href="/#localizacao">Localização</a>
      </nav>
      <a className={styles.headerCta} href="https://wa.me/553192155412" target="_blank" rel="noreferrer"><span>Fale com a equipe!</span><WhatsAppIcon /></a>
    </header>

    <section className={styles.hero}>
      <div className={styles.heroCopy}><p>FAQ · POWER SHAPE CT</p><h1>Antes do treino,<br/><i>tire suas dúvidas.</i></h1></div>
      <p className={styles.heroLead}>Informação direta para você chegar, escolher sua experiência e começar com mais confiança.</p>
      <span className={styles.heroNumber}>?</span>
    </section>

    <section className={styles.faqSection}>
      <aside className={styles.intro}>
        <p>RESPOSTAS RÁPIDAS</p>
        <h2>Você pergunta.<br/><i>A gente responde.</i></h2>
        <span>Não encontrou o que precisa? A equipe está pronta para conversar com você.</span>
        <a href="https://wa.me/553192155412" target="_blank" rel="noreferrer"><WhatsAppIcon /> Tire uma dúvida!</a>
      </aside>
      <div className={styles.accordion}>
        {faqItems.map((item, index) => {
          const isOpen = openItem === index;
          return <article className={isOpen ? styles.open : ''} key={item.question}>
            <button onClick={() => setOpenItem(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.question}</strong><i aria-hidden="true">{isOpen ? '−' : '+'}</i>
            </button>
            <div id={`faq-answer-${index}`} className={styles.answer} hidden={!isOpen}>
              <p>{item.answer}</p>
              {item.routeLink && <a className={styles.routeButton} href={googleRouteUrl} target="_blank" rel="noreferrer">Traçar rota da minha localização ↗</a>}
              {item.transitLines && <>
                <div className={styles.transitGrid}>{item.transitLines.map(line => <div key={line.number}><b>{line.number}</b><span><strong>{line.route}</strong><small>{line.directions}</small></span></div>)}</div>
                <p className={styles.transitNote}>Na ida, escolha o veículo no sentido <b>Serra/Rua do Ouro</b>. Na volta, confira no letreiro o destino desejado. Horários e desvios podem mudar; confirme a viagem antes de sair.</p>
                <div className={styles.answerLinks}><a href={googleTransitUrl} target="_blank" rel="noreferrer">Planejar viagem de ônibus ↗</a><a href="https://prefeitura.pbh.gov.br/sumob/onibus/horarios-e-itinerarios" target="_blank" rel="noreferrer">Consultar horários oficiais ↗</a></div>
              </>}
            </div>
          </article>;
        })}
      </div>
    </section>

    <section className={styles.finalCta}>
      <p>PRONTO PARA COMEÇAR?</p><h2>Menos dúvida.<br/><i>Mais movimento.</i></h2>
      <div><a href="/#aluno">Agendar uma avaliação ↗</a><a href="https://wa.me/553192155412" target="_blank" rel="noreferrer">Falar no WhatsApp ↗</a></div>
    </section>
    <footer className={styles.footer}><img src="/logo-power-shape.png" alt="Power Shape CT"/><p>R. do Ouro, 918 · Serra · Belo Horizonte — MG</p><a href="/">VOLTAR AO SITE ↑</a><small>Esse site foi desenvolvido pela <a href="https://www.baita.site" target="_blank" rel="noreferrer">BAITA — www.baita.site</a></small></footer>
  </main>;
}
