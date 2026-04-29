// Default fallback content for pages — used when DB has no override yet.
// Editing these values changes initial appearance; admin overrides take priority.

export const defaultHomeContent = {
  hero: {
    eyebrow: "Universidade Federal de Pernambuco",
    title: "MIGRA",
    description:
      "Grupo de Pesquisa e Extensão em Migrações, Mobilidades e Gestão Contemporânea de Populações — UFPE.",
    btn1: { label: "Conheça o grupo", link: "/sobre" },
    btn2: { label: "Contato", link: "#contato" },
  },
  sobre: {
    title: "Sobre o MIGRA",
    paragraph1Html:
      'O <strong class="text-foreground font-semibold">MIGRA</strong> é um <strong class="text-foreground font-semibold">grupo de pesquisa e extensão</strong> vinculado à <strong class="text-foreground font-semibold">Universidade Federal de Pernambuco</strong>, dedicado ao estudo das <strong class="text-primary font-semibold">migrações</strong>, <strong class="text-primary font-semibold">mobilidades</strong> e <strong class="text-primary font-semibold">gestão contemporânea de populações</strong>. Nosso trabalho combina <strong class="text-foreground font-semibold">rigor acadêmico</strong> com <strong class="text-foreground font-semibold">impacto social</strong>.',
    paragraph2Html:
      'Atuamos na <strong class="text-foreground font-semibold">produção de conhecimento</strong>, <strong class="text-foreground font-semibold">formação de pesquisadores</strong> e <strong class="text-foreground font-semibold">apoio à comunidade migrante</strong>, contribuindo para <strong class="text-primary font-semibold">políticas públicas mais justas e inclusivas</strong>.',
  },
  areas: {
    title: "Áreas de Atuação",
    description: "Conheça as linhas de pesquisa que orientam nossos estudos e publicações.",
    items: [
      { icon: "Globe", title: "Migrações Internacionais", desc: "Estudo dos fluxos migratórios contemporâneos e seus impactos sociais, econômicos e culturais." },
      { icon: "Scale", title: "Direito dos Refugiados", desc: "Análise das normativas internacionais e nacionais de proteção a refugiados e solicitantes de refúgio." },
      { icon: "Radio", title: "Comunicação e Migração", desc: "Estudos sobre narrativas midiáticas, representação e comunicação intercultural no contexto migratório." },
      { icon: "MapPin", title: "Políticas Migratórias", desc: "Avaliação de políticas públicas de acolhimento e integração de migrantes no Brasil." },
      { icon: "Map", title: "Geografia das Migrações", desc: "Análise espacial dos fluxos migratórios, territorialidades e dinâmicas socioespaciais." },
      { icon: "Compass", title: "Fronteiras e Mobilidade", desc: "Análise das dinâmicas fronteiriças e seus efeitos na mobilidade humana contemporânea." },
    ],
  },
  equipe: {
    title: "Nossa Equipe",
    description: "Pesquisadores dedicados ao estudo das migrações, mobilidades e gestão de populações.",
    members: [
      { name: "Profa. Sofia Cavalcanti Zanforlin", role: "Coordenadora", photoKey: "sofia" },
      { name: "Profa. Carolina Gonçalves Leite", role: "Coordenadora", photoKey: null },
    ],
  },
  grupos: {
    title: "Grupos de Estudo",
    description: "Espaços de aprendizado colaborativo sobre temas centrais das migrações contemporâneas.",
    items: [
      { icon: "Globe", title: "Migração e Direitos Humanos", desc: "Estudo aprofundado sobre a proteção jurídica dos migrantes e refugiados no cenário internacional." },
      { icon: "Users", title: "Interculturalidade e Pertencimentos", desc: "Reflexões sobre identidade, diversidade cultural e processos de integração de comunidades migrantes." },
      { icon: "Scale", title: "Políticas Migratórias Comparadas", desc: "Análise comparativa de legislações e políticas públicas de diferentes países sobre migração." },
    ],
    btnLabel: "Conheça nossos grupos",
  },
  producao: {
    title: "Produção",
    description: "Publicações recentes do nosso grupo de pesquisa.",
    btnLabel: "Ver toda a produção",
  },
  blog: {
    title: "Nosso Blog",
    description: "Acompanhe nossas publicações, novidades e reflexões sobre migração.",
    btnLabel: "Ver todos os posts",
  },
  cta: {
    title: "Participe do MIGRA",
    description:
      "Tem interesse em estudar migrações, mobilidades e gestão contemporânea de populações? Entre em contato e faça parte do nosso grupo de pesquisa e extensão.",
  },
};

export const defaultSobreContent = {
  hero: {
    title: "Conheça o Grupo",
    description: "História, equipe e trajetória do MIGRA – UFPE.",
  },
  historia: {
    title: "Breve História do MIGRA",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.",
    ],
  },
  coordenacao: {
    title: "Coordenação",
    members: [
      { name: "Profª Drª Carolina", role: "Coordenadora", area: "Direito Internacional e Migrações", bio: "Bio da coordenadora.", lattes: "#", orcid: "#" },
      { name: "Profª Drª Sofia", role: "Vice-Coordenadora", area: "Ciências Sociais e Mobilidade", bio: "Bio da vice-coordenadora.", lattes: "#", orcid: "#" },
    ],
  },
  pessoas: {
    title: "Pessoas que passaram pelo MIGRA",
    description: "Pesquisadores, extensionistas e colaboradores que contribuíram para a trajetória do grupo.",
    items: [] as { name: string; period: string; contribution: string }[],
  },
};

export type HomeContent = typeof defaultHomeContent;
export type SobreContent = typeof defaultSobreContent;
