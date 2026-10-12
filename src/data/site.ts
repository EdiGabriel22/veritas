export const contact = {
  email: "contato@veritasenergia.com",
  phoneDisplay: "(48) 99625-7474",
  phoneTel: "+5548996257474",
  whatsapp: "https://wa.me/5548996257474?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20an%C3%A1lise%20gratuita%20de%20energia.",
  city: "Florianópolis, SC",
};

export const nav = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const stats = [
  { value: "Engenheiro dedicado", label: "Atendimento direto, sem robô" },
  { value: "CCEE", label: "Adesão e trâmites conduzidos pela Veritas" },
  { value: "Relatório mensal", label: "Economia apurada mês a mês" },
  { value: "R$ 0", label: "Cotação e análise de migração" },
];

export const pillars = [
  "Atendimento por engenheiro",
  "Segurança na contratação",
  "Independência",
  "Acompanhamento mensal",
];

export const services = [
  {
    number: "01",
    title: "Estudo e cotação gratuitos",
    text: "Analisamos as faturas dos últimos 12 meses, cotamos com as comercializadoras parceiras e apresentamos a economia projetada para o seu perfil de consumo.",
    image: "/images/service-1.png",
    alt: "Painel de auditoria de energia com gráficos de consumo e economia",
  },
  {
    number: "02",
    title: "Migração e trâmites na CCEE",
    text: "Conduzimos a denúncia do contrato com a distribuidora, a adequação da medição e a adesão à CCEE, na modalidade varejista ou atacadista.",
    image: "/images/service-2.png",
    alt: "Equipe em reunião analisando propostas e indicadores de energia",
  },
  {
    number: "03",
    title: "Gestão mensal e relatório de economia",
    text: "Conferimos a medição e as faturas da distribuidora e da comercializadora. Todo mês você recebe um relatório com a economia apurada.",
    image: "/images/service-4.png",
    alt: "Profissional acompanhando relatórios de energia em monitores",
  },
  {
    number: "04",
    title: "Relacionamento com a distribuidora",
    text: "Abertura e acompanhamento de protocolos, contestação de erros de faturamento, pedidos de ressarcimento e ajustes de demanda contratada.",
    image: "/images/service-3.png",
    alt: "Conferência de fatura de energia sobre a mesa",
  },
  {
    number: "05",
    title: "Consultoria técnica e regulatória",
    text: "Revisão de modalidade tarifária e de demanda, acompanhamento das mudanças de regras do setor e suporte à sua equipe de engenharia.",
    image: "/images/service-2.png",
    alt: "Reunião técnica para consultoria regulatória de energia",
  },
];

type Solution = {
  kicker: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  alt: string;
  callout?: string;
  tone?: "dark";
};

export const solutions: Solution[] = [
  {
    kicker: "Mercado livre",
    title: "Média e alta tensão (Grupo A)",
    text: "Desde janeiro de 2024, qualquer consumidor do Grupo A pode migrar para o mercado livre. Abaixo de 500 kW, a migração ocorre por meio de um comercializador varejista; acima disso, a empresa também pode atuar como agente na CCEE.",
    points: [
      "Energia com preço negociado e contrato sob medida",
      "Modalidade varejista ou atacadista, conforme o perfil",
    ],
    image: "/images/solution-1.png",
    alt: "Subestação de energia ao pôr do sol",
  },
  {
    kicker: "Atenção especial",
    title: "Consumidor rural",
    text: "Unidades rurais têm regras próprias de faturamento, que exigem cuidado ao contratar demanda e ao avaliar a migração. Uma demanda mal dimensionada gera cobranças que costumam passar despercebidas na fatura.",
    points: [],
    callout:
      "Resultado real. Nossos clientes rurais tiveram os contratos adequados ao seu perfil de consumo e eliminaram gastos desnecessários.",
    image: "/images/solution-4.png",
    alt: "Linhas de transmissão sobre paisagem rural ao entardecer",
    tone: "dark" as const,
  },
  {
    kicker: "BESS sem investimento",
    title: "Empresas com geração distribuída",
    text: "Para quem já gera a própria energia, empresas parceiras da Veritas oferecem sistemas de armazenamento em baterias (BESS) sem investimento inicial, mediante análise de viabilidade. O sistema é pago com a economia que ele mesmo gera.",
    points: [
      "Energia armazenada para uso no horário de ponta",
      "Análise de viabilidade antes da proposta",
    ],
    image: "/images/solution-2.png",
    alt: "Quadro elétrico de um sistema de armazenamento",
  },
  {
    kicker: "Geração compartilhada",
    title: "Baixa tensão",
    text: "Unidades em baixa tensão ainda não podem migrar para o mercado livre. Com nossas empresas parceiras de geração compartilhada, recebem créditos de energia que reduzem o valor da conta.",
    points: ["Sem obras e sem investimento", "Economia já na conta da distribuidora"],
    image: "/images/solution-3.png",
    alt: "Geração solar em telhados comerciais ao entardecer",
  },
  {
    kicker: "Geração compartilhada",
    title: "Alta tensão sem viabilidade no ACL",
    text: "Quando o mercado livre não compensa para o seu perfil de consumo, a geração compartilhada pode ser a alternativa, conforme a disponibilidade de usinas na área da sua distribuidora.",
    points: ["Avaliação incluída no estudo gratuito"],
    image: "/images/hero.png",
    alt: "Linhas de transmissão ao pôr do sol",
  },
];

export const timeline = [
  {
    date: "Jan/2024",
    title: "Grupo A",
    text: "Média e alta tensão, sem limite de carga",
  },
  {
    date: "Nov/2027",
    title: "Baixa tensão comercial e industrial",
    text: "Grupo B com uso comercial ou industrial",
  },
  {
    date: "Nov/2028",
    title: "Demais consumidores",
    text: "Residenciais, rurais e demais classes",
  },
];

export const steps = [
  {
    number: "01",
    title: "Envie suas faturas",
    text: "As contas dos últimos 12 meses bastam para começar. Sem cadastro longo.",
    icon: "/icons/step-1.svg",
  },
  {
    number: "02",
    title: "Receba o estudo",
    text: "Um engenheiro apresenta a análise, as cotações e a economia projetada. Sem custo.",
    icon: "/icons/step-2.svg",
  },
  {
    number: "03",
    title: "Migração",
    text: "A Veritas conduz os trâmites com a distribuidora, a comercializadora e a CCEE.",
    icon: "/icons/step-3.svg",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Relatório mensal de economia, conferência de faturas e reuniões periódicas.",
    icon: "/icons/step-4.svg",
  },
];

export const faqs = [
  {
    question: "Quem pode migrar para o mercado livre?",
    answer:
      "Todo consumidor atendido em média ou alta tensão (Grupo A), desde janeiro de 2024. Unidades com demanda abaixo de 500 kW migram representadas por um comercializador varejista.",
  },
  {
    question: "Muda alguma coisa na rede ou no fornecimento?",
    answer:
      "Não. A distribuidora continua responsável pela entrega e pela manutenção da rede. Você paga a ela o uso do sistema e compra a energia de uma comercializadora. Em alguns casos, é preciso adequar a medição.",
  },
  {
    question: "Quanto custa a análise?",
    answer: "Nada. O estudo de viabilidade e as cotações são gratuitos e sem compromisso.",
  },
  {
    question: "Quanto tempo leva a migração?",
    answer:
      "Depende do contrato atual com a distribuidora e dos prazos de aviso previstos nele. O estudo informa o cronograma da sua unidade.",
  },
  {
    question: "Como vocês escolhem a comercializadora?",
    answer:
      "Cotamos com as maiores comercializadoras do país e comparamos preço, flexibilidade, garantias e solidez financeira de cada uma antes de recomendar.",
  },
  {
    question: "Minha empresa está em baixa tensão. Existe alternativa?",
    answer:
      "Sim. Com geração compartilhada é possível reduzir a conta agora, enquanto a abertura do mercado para a baixa tensão não chega.",
  },
];

export const footer = {
  blurb: "Gestão de energia para empresas dentro e fora do mercado livre. Atendimento direto com engenheiros.",
  columns: [
    {
      title: "Quem somos",
      links: [
        { href: "#quem-somos", label: "Sobre a Veritas" },
        { href: "#diferenciais", label: "Diferenciais" },
        { href: "#contato", label: "Contato" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { href: "#servicos", label: "Estudo e cotação" },
        { href: "#servicos", label: "Migração e CCEE" },
        { href: "#servicos", label: "Gestão mensal" },
        { href: "#servicos", label: "Relação com a distribuidora" },
        { href: "#servicos", label: "Consultoria regulatória" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { href: "#solucoes", label: "Mercado livre" },
        { href: "#solucoes", label: "Consumidor rural" },
        { href: "#solucoes", label: "GD com BESS" },
        { href: "#solucoes", label: "Geração compartilhada" },
      ],
    },
    {
      title: "Conteúdo",
      links: [
        { href: "#como-funciona", label: "Como funciona" },
        { href: "#faq", label: "Perguntas frequentes" },
      ],
    },
  ],
};
