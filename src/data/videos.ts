export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  category?: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Seminário MIGRA 2025: Migrações no Nordeste",
    description: "Mesa de abertura do III Seminário sobre Migrações no Nordeste Brasileiro, com participação de pesquisadores de diversas universidades.",
    youtubeId: "2OEL4P1Rz04",
    date: "15 Mar 2025",
    category: "Seminários",
  },
  {
    id: 2,
    title: "Documentário 'Travessias'",
    description: "Documentário produzido pelo MIGRA com narrativas de migrantes que encontraram em Recife um novo lar.",
    youtubeId: "2OEL4P1Rz04",
    date: "02 Fev 2025",
    category: "Documentários",
  },
  {
    id: 3,
    title: "Palestra: Mobilidade humana no Mercosul",
    description: "Palestra sobre os acordos de livre circulação de pessoas e os desafios fronteiriços na América do Sul.",
    youtubeId: "2OEL4P1Rz04",
    date: "20 Nov 2024",
    category: "Palestras",
  },
  {
    id: 4,
    title: "Entrevista: Comunicação e migração",
    description: "Entrevista com pesquisadores do MIGRA sobre narrativas midiáticas e representação dos migrantes na imprensa.",
    youtubeId: "2OEL4P1Rz04",
    date: "10 Set 2024",
    category: "Entrevistas",
  },
  {
    id: 5,
    title: "Workshop: Metodologias participativas em pesquisa migratória",
    description: "Oficina sobre o uso de metodologias participativas e audiovisuais na produção de conhecimento sobre migrações.",
    youtubeId: "2OEL4P1Rz04",
    date: "05 Jun 2024",
    category: "Workshops",
  },
  {
    id: 6,
    title: "Mesa-redonda: Geografia das migrações",
    description: "Discussão sobre análise espacial dos fluxos migratórios e territorialidades na Região Metropolitana do Recife.",
    youtubeId: "2OEL4P1Rz04",
    date: "18 Mar 2024",
    category: "Seminários",
  },
];
