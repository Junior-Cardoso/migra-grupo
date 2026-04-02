export interface Publication {
  id: number;
  title: string;
  type: "Artigo" | "Dissertação" | "Tese" | "Capítulo" | "Working Paper" | "Relatório";
  authors: string[];
  year: number;
  abstract: string;
  externalUrl?: string;
  tags: string[];
  thematicCategories: string[];
}

export const publicationTypes = [
  "Artigo",
  "Dissertação",
  "Tese",
  "Capítulo",
  "Working Paper",
  "Relatório",
] as const;

export const thematicCategories = [
  "Migração e trabalho",
  "Migração e fronteira",
  "Interculturalidade",
  "Comunidade",
  "Pertencimentos",
  "Direitos humanos",
  "Políticas públicas",
  "Comunicação",
  "Geografia",
] as const;

export const publications: Publication[] = [
  {
    id: 1,
    title: "Migrações venezuelanas no Nordeste brasileiro: desafios e perspectivas",
    type: "Artigo",
    authors: ["Ana Beatriz Souza", "Carlos Drummond"],
    year: 2025,
    abstract: "Análise dos fluxos migratórios venezuelanos para a região Nordeste do Brasil, com foco nos processos de interiorização e nas políticas de acolhimento implementadas em Pernambuco.",
    externalUrl: "https://example.com/artigo-1",
    tags: ["venezuela", "nordeste", "acolhimento"],
    thematicCategories: ["Políticas públicas", "Comunidade"],
  },
  {
    id: 2,
    title: "Proteção internacional e refúgio: uma análise do caso brasileiro",
    type: "Capítulo",
    authors: ["Carlos Drummond"],
    year: 2025,
    abstract: "Capítulo de livro que examina o sistema brasileiro de proteção a refugiados, suas bases normativas e os desafios práticos enfrentados pelos solicitantes de refúgio no país.",
    tags: ["refugio", "legislacao", "brasil"],
    thematicCategories: ["Direitos humanos"],
  },
  {
    id: 3,
    title: "Políticas públicas de acolhimento: estudo comparado Brasil-Portugal",
    type: "Working Paper",
    authors: ["Elena Ferreira", "Roberto Santos"],
    year: 2024,
    abstract: "Estudo comparativo das políticas de integração de migrantes no Brasil e em Portugal, identificando boas práticas e lacunas nos dois contextos.",
    externalUrl: "https://example.com/wp-3",
    tags: ["politicas publicas", "portugal", "acolhimento"],
    thematicCategories: ["Políticas públicas", "Interculturalidade"],
  },
  {
    id: 4,
    title: "Direito ao refúgio e mobilidade na fronteira norte do Brasil",
    type: "Artigo",
    authors: ["Gabriel Henrique", "Ana Beatriz Souza"],
    year: 2024,
    abstract: "Investigação sobre os processos de solicitação de refúgio na fronteira norte brasileira, com ênfase nas dinâmicas de Roraima e Amazonas.",
    externalUrl: "https://example.com/artigo-4",
    tags: ["refugio", "fronteiras", "roraima"],
    thematicCategories: ["Migração e fronteira", "Direitos humanos"],
  },
  {
    id: 5,
    title: "Integração local de refugiados sírios em Recife",
    type: "Dissertação",
    authors: ["Isabela Jardim"],
    year: 2024,
    abstract: "Dissertação de mestrado que analisa os processos de integração social, econômica e cultural de refugiados sírios reassentados na cidade do Recife.",
    tags: ["refugio", "recife", "integracao"],
    thematicCategories: ["Interculturalidade", "Pertencimentos", "Comunidade"],
  },
  {
    id: 6,
    title: "Mobilidade humana e direitos fundamentais no Mercosul",
    type: "Artigo",
    authors: ["Karen Lima"],
    year: 2023,
    abstract: "Análise dos acordos de livre circulação de pessoas no âmbito do Mercosul e seus impactos na proteção dos direitos fundamentais dos migrantes regionais.",
    externalUrl: "https://example.com/artigo-6",
    tags: ["mercosul", "fronteiras", "legislacao"],
    thematicCategories: ["Migração e fronteira", "Direitos humanos"],
  },
  {
    id: 7,
    title: "Narrativas midiáticas e migração no Nordeste",
    type: "Artigo",
    authors: ["Marcos Oliveira", "Gabriel Henrique"],
    year: 2023,
    abstract: "Estudo sobre a representação dos migrantes na mídia pernambucana, analisando enquadramentos jornalísticos e seu impacto na percepção pública.",
    tags: ["comunicacao", "midia", "nordeste"],
    thematicCategories: ["Comunicação"],
  },
  {
    id: 8,
    title: "Territorialidades migrantes na Região Metropolitana do Recife",
    type: "Working Paper",
    authors: ["Patrícia Rocha"],
    year: 2023,
    abstract: "Mapeamento participativo das territorialidades construídas por migrantes internacionais na RMR, com foco nas dinâmicas socioespaciais e redes de pertencimento.",
    tags: ["geografia", "recife", "territorialidade"],
    thematicCategories: ["Geografia", "Pertencimentos"],
  },
  {
    id: 9,
    title: "Fluxos migratórios e reconfiguração urbana: o caso do Recife",
    type: "Tese",
    authors: ["Roberto Santos"],
    year: 2022,
    abstract: "Tese de doutorado que investiga como os fluxos migratórios internacionais reconfiguram o espaço urbano da cidade do Recife, criando novas centralidades e dinâmicas territoriais.",
    tags: ["geografia", "recife", "urbanismo"],
    thematicCategories: ["Geografia", "Comunidade"],
  },
  {
    id: 10,
    title: "Relatório anual MIGRA 2022: pesquisas e atividades de extensão",
    type: "Relatório",
    authors: ["MIGRA - UFPE"],
    year: 2022,
    abstract: "Relatório institucional com balanço das atividades de pesquisa, ensino e extensão realizadas pelo grupo durante o ano de 2022.",
    externalUrl: "https://example.com/relatorio-2022",
    tags: ["institucional", "extensao", "UFPE"],
    thematicCategories: ["Políticas públicas"],
  },
  {
    id: 11,
    title: "Fronteiras da mobilidade no Brasil contemporâneo: comunicação e experiência migrante na securitização do acolhimento e da integração social no âmbito da Operação Acolhida",
    type: "Relatório",
    authors: ["Sofia Cavalcanti Zanforlin"],
    year: 2021,
    abstract: "Projeto de pesquisa financiado pelo CNPq (Chamada Universal 2021, Faixa A – Grupos Emergentes). Propõe abordar dois momentos do fluxo de migrantes venezuelanos no Brasil: o acolhimento na fronteira representada por Roraima e na fronteira da interiorização, no Nordeste, em especial Pernambuco, a partir de etnografias multi-situadas com trabalhos de campo em Pacaraima e Boa Vista, Recife e RMR. A compreensão do fenômeno migratório exige estudos interdisciplinares ancorados na Comunicação a partir do conceito de bios midiático.",
    tags: ["fronteiras", "comunicação", "bios midiático", "securitização", "mobilidade humana", "operação acolhida", "CNPq"],
    thematicCategories: ["Migração e fronteira", "Comunicação"],
  },
];
