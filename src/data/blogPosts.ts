export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; initials: string };
  date: string;
  category: string;
  tags: string[];
}

export const categories = [
  "Pesquisa",
  "Eventos",
  "Políticas Públicas",
  "Opinião",
] as const;

const loremContent = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <h2>Duis aute irure dolor</h2>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  <h2>Nemo enim ipsam voluptatem</h2>
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt:</p>
  <ul>
    <li>Neque porro quisquam est qui dolorem</li>
    <li>Ipsum quia dolor sit amet consectetur</li>
    <li>Adipisci velit sed quia non numquam</li>
    <li>Eius modi tempora incidunt ut labore</li>
  </ul>
  <h2>At vero eos et accusamus</h2>
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
  <blockquote>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</blockquote>
  <h3>Temporibus autem quibusdam</h3>
  <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
  <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
`;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "migracao-venezuelana-pernambuco",
    title: "Migração venezuelana em Pernambuco: desafios e acolhimento",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: loremContent,
    author: { name: "Ana Beatriz Souza", initials: "AS" },
    date: "15 Fev 2026",
    category: "Pesquisa",
    tags: ["venezuela", "acolhimento", "UFPE", "fronteiras"],
  },
  {
    id: 2,
    slug: "documentario-travessias-festival",
    title: "Documentário 'Travessias' estreia em festival universitário",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: loremContent,
    author: { name: "Carlos Drummond", initials: "CD" },
    date: "02 Fev 2026",
    category: "Eventos",
    tags: ["UFPE", "acolhimento", "refugio"],
  },
  {
    id: 3,
    slug: "nova-legislacao-refugio",
    title: "Nova legislação brasileira sobre refúgio: o que muda?",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    content: loremContent,
    author: { name: "Elena Ferreira", initials: "EF" },
    date: "20 Jan 2026",
    category: "Políticas Públicas",
    tags: ["legislacao", "refugio", "fronteiras"],
  },
  {
    id: 4,
    slug: "narrativas-midiaticas-migracao",
    title: "Narrativas midiáticas sobre migração: representação e impacto",
    excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    content: loremContent,
    author: { name: "Gabriel Henrique", initials: "GH" },
    date: "10 Jan 2026",
    category: "Pesquisa",
    tags: ["comunicacao", "legislacao", "refugio"],
  },
  {
    id: 5,
    slug: "seminario-migracoes-nordeste-2026",
    title: "MIGRA promove seminário sobre migrações no Nordeste",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    content: loremContent,
    author: { name: "Isabela Jardim", initials: "IJ" },
    date: "05 Jan 2026",
    category: "Eventos",
    tags: ["UFPE", "acolhimento", "fronteiras"],
  },
  {
    id: 6,
    slug: "fronteiras-mobilidade-mercosul",
    title: "Mobilidade humana e direitos fundamentais no Mercosul",
    excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    content: loremContent,
    author: { name: "Karen Lima", initials: "KL" },
    date: "18 Dez 2025",
    category: "Pesquisa",
    tags: ["fronteiras", "legislacao", "venezuela"],
  },
  {
    id: 7,
    slug: "xenofobia-redes-sociais",
    title: "Xenofobia nas redes sociais: um estudo exploratório",
    excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    content: loremContent,
    author: { name: "Marcos Oliveira", initials: "MO" },
    date: "02 Dez 2025",
    category: "Pesquisa",
    tags: ["acolhimento", "venezuela", "UFPE"],
  },
  {
    id: 8,
    slug: "territorialidades-migrantes-recife",
    title: "Territorialidades migrantes na Região Metropolitana do Recife",
    excerpt: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    content: loremContent,
    author: { name: "Patrícia Rocha", initials: "PR" },
    date: "15 Nov 2025",
    category: "Pesquisa",
    tags: ["geografia", "UFPE", "acolhimento"],
  },
  {
    id: 9,
    slug: "opiniao-politica-migratoria-humanizada",
    title: "Por uma política migratória humanizada: desafios e utopias",
    excerpt: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    content: loremContent,
    author: { name: "Roberto Santos", initials: "RS" },
    date: "01 Nov 2025",
    category: "Opinião",
    tags: ["refugio", "fronteiras", "legislacao", "acolhimento"],
  },
];
