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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "migracao-venezuelana-pernambuco",
    title: "Migração venezuelana em Pernambuco: desafios e acolhimento",
    excerpt:
      "Uma análise sobre os fluxos migratórios recentes e as políticas de integração no estado de Pernambuco, com foco nas comunidades venezuelanas.",
    content: `
      <p>A migração venezuelana tem sido um dos fenômenos mais significativos na América Latina nos últimos anos. Em Pernambuco, esse fluxo migratório apresenta características particulares que merecem atenção acadêmica e social.</p>
      <h2>Contexto histórico</h2>
      <p>Desde 2015, o Brasil tem recebido um número crescente de migrantes venezuelanos. Diferentemente de Roraima e Amazonas, estados de fronteira, Pernambuco recebe migrantes que já passaram por processos de interiorização ou que chegam por rotas alternativas.</p>
      <p>O programa de interiorização, coordenado pelo governo federal em parceria com organizações internacionais, tem sido fundamental para redistribuir migrantes venezuelanos por diferentes estados brasileiros.</p>
      <h2>Desafios de integração</h2>
      <p>Os principais desafios enfrentados pelos migrantes venezuelanos em Pernambuco incluem:</p>
      <ul>
        <li>Barreira linguística e cultural</li>
        <li>Validação de diplomas e documentos</li>
        <li>Acesso ao mercado de trabalho formal</li>
        <li>Integração nas redes de assistência social</li>
      </ul>
      <h2>Políticas de acolhimento</h2>
      <p>O estado tem desenvolvido algumas iniciativas importantes, como programas de ensino de português e orientação jurídica gratuita para regularização migratória.</p>
      <blockquote>A integração efetiva dos migrantes depende não apenas de políticas públicas, mas também da construção de uma cultura de acolhimento na sociedade civil.</blockquote>
      <h3>Papel da universidade</h3>
      <p>A UFPE, por meio do MIGRA e outros grupos, tem contribuído com pesquisas que subsidiam a formulação de políticas públicas mais eficientes e humanas.</p>
      <p>O trabalho de extensão universitária também tem sido fundamental, oferecendo assistência jurídica e social diretamente às comunidades migrantes na região metropolitana do Recife.</p>
    `,
    author: { name: "Ana Beatriz Souza", initials: "AS" },
    date: "15 Fev 2026",
    category: "Pesquisa",
    tags: ["venezuela", "acolhimento", "UFPE", "fronteiras"],
  },
  {
    id: 2,
    slug: "documentario-travessias-festival",
    title: "Documentário 'Travessias' estreia em festival universitário",
    excerpt:
      "Produção do MIGRA foi selecionada para o Festival de Cinema Acadêmico da UFPE, com narrativas de migrantes sobre suas trajetórias.",
    content: `
      <p>O documentário "Travessias", produzido por pesquisadores do MIGRA, foi selecionado para exibição no Festival de Cinema Acadêmico da UFPE. O filme retrata histórias reais de migrantes que encontraram em Recife um novo lar.</p>
      <h2>Sobre o documentário</h2>
      <p>Com duração de 45 minutos, "Travessias" acompanha cinco migrantes de diferentes nacionalidades que compartilham suas experiências de deslocamento, adaptação e reconstrução de vida.</p>
      <p>A produção utiliza uma abordagem participativa, na qual os próprios migrantes foram co-criadores de suas narrativas audiovisuais.</p>
      <h2>Impacto acadêmico</h2>
      <p>O documentário faz parte de um projeto de pesquisa-ação que investiga o uso de metodologias audiovisuais como ferramentas de produção de conhecimento sobre migrações.</p>
      <blockquote>O cinema pode ser uma ponte entre a academia e a sociedade, tornando visíveis realidades que muitas vezes permanecem à margem do debate público.</blockquote>
      <h3>Próximas exibições</h3>
      <p>Após o festival, o documentário será exibido em escolas públicas e centros comunitários da região metropolitana do Recife, como parte das atividades de extensão do grupo.</p>
    `,
    author: { name: "Carlos Drummond", initials: "CD" },
    date: "02 Fev 2026",
    category: "Eventos",
    tags: ["UFPE", "acolhimento", "refugio"],
  },
  {
    id: 3,
    slug: "nova-legislacao-refugio",
    title: "Nova legislação brasileira sobre refúgio: o que muda?",
    excerpt:
      "Entenda as principais alterações na política migratória brasileira e seus impactos práticos para solicitantes de refúgio.",
    content: `
      <p>O Congresso Nacional aprovou recentemente alterações significativas na legislação de refúgio brasileira. Neste artigo, analisamos as principais mudanças e seus possíveis impactos.</p>
      <h2>Principais alterações</h2>
      <p>Entre as mudanças mais relevantes, destacam-se:</p>
      <ul>
        <li>Ampliação do conceito de "fundado temor de perseguição"</li>
        <li>Novos prazos para análise de solicitações</li>
        <li>Criação de procedimentos simplificados para casos urgentes</li>
        <li>Fortalecimento do CONARE</li>
      </ul>
      <h2>Análise crítica</h2>
      <p>Embora as alterações representem avanços em alguns aspectos, especialistas apontam lacunas que podem comprometer a proteção efetiva dos solicitantes de refúgio.</p>
      <h3>Impactos práticos</h3>
      <p>Na prática, as mudanças devem acelerar o processamento de solicitações, que atualmente pode levar anos. No entanto, a falta de investimento em infraestrutura pode limitar esses ganhos.</p>
      <blockquote>Uma legislação progressista só se torna efetiva quando acompanhada de investimento institucional e capacitação dos agentes públicos envolvidos.</blockquote>
      <p>O MIGRA continuará monitorando a implementação dessas alterações e produzindo análises sobre seus efeitos concretos na vida dos solicitantes de refúgio no Brasil.</p>
    `,
    author: { name: "Elena Ferreira", initials: "EF" },
    date: "20 Jan 2026",
    category: "Políticas Públicas",
    tags: ["legislacao", "refugio", "fronteiras"],
  },
  {
    id: 4,
    slug: "narrativas-midiaticas-migracao",
    title: "Narrativas midiáticas sobre migração: representação e impacto",
    excerpt:
      "Como os meios de comunicação constroem narrativas sobre migrantes e de que forma isso influencia a percepção pública e as políticas migratórias.",
    content: `
      <p>A forma como a mídia retrata os processos migratórios tem impacto direto na percepção pública e, consequentemente, nas políticas adotadas pelos governos.</p>
      <h2>Representação midiática</h2>
      <p>Estudos recentes mostram que a cobertura jornalística sobre migração tende a focar em aspectos negativos, como criminalidade e sobrecarga de serviços públicos, em detrimento de narrativas sobre contribuições culturais e econômicas dos migrantes.</p>
      <h2>Impacto na opinião pública</h2>
      <ul>
        <li>Construção de estereótipos e preconceitos</li>
        <li>Influência na formulação de políticas restritivas</li>
        <li>Desumanização das experiências migratórias</li>
        <li>Invisibilização de vozes migrantes</li>
      </ul>
      <blockquote>A comunicação intercultural é uma ferramenta essencial para desconstruir preconceitos e promover uma convivência mais justa entre comunidades locais e migrantes.</blockquote>
      <h3>Caminhos para uma cobertura mais plural</h3>
      <p>É fundamental que os veículos de comunicação diversifiquem suas fontes, incluindo as vozes dos próprios migrantes, e contextualizem os fenômenos migratórios em sua complexidade histórica e geopolítica.</p>
    `,
    author: { name: "Gabriel Henrique", initials: "GH" },
    date: "10 Jan 2026",
    category: "Pesquisa",
    tags: ["comunicacao", "legislacao", "refugio"],
  },
  {
    id: 5,
    slug: "seminario-migracoes-nordeste-2026",
    title: "MIGRA promove seminário sobre migrações no Nordeste",
    excerpt:
      "Evento reunirá pesquisadores de diversas universidades para debater os desafios migratórios na região Nordeste do Brasil.",
    content: `
      <p>O MIGRA realizará, em março de 2026, o III Seminário sobre Migrações no Nordeste Brasileiro, um evento que reunirá pesquisadores, gestores públicos e representantes da sociedade civil.</p>
      <h2>Programação</h2>
      <p>O seminário contará com painéis temáticos, apresentações de trabalhos e mesas-redondas sobre os principais desafios migratórios na região.</p>
      <h3>Eixos temáticos</h3>
      <ul>
        <li>Fluxos migratórios intrarregionais</li>
        <li>Migração internacional no Nordeste</li>
        <li>Políticas públicas municipais de acolhimento</li>
        <li>Experiências de integração local</li>
      </ul>
      <h2>Inscrições</h2>
      <p>As inscrições estarão abertas a partir de fevereiro, com vagas limitadas. Estudantes de graduação e pós-graduação terão prioridade.</p>
      <blockquote>O diálogo entre academia, sociedade civil e poder público é essencial para construir políticas migratórias mais justas e eficazes.</blockquote>
      <p>Para mais informações, entre em contato pelo email migra@ufpe.br.</p>
    `,
    author: { name: "Isabela Jardim", initials: "IJ" },
    date: "05 Jan 2026",
    category: "Eventos",
    tags: ["UFPE", "acolhimento", "fronteiras"],
  },
  {
    id: 6,
    slug: "fronteiras-mobilidade-mercosul",
    title: "Mobilidade humana e direitos fundamentais no Mercosul",
    excerpt:
      "Análise das dinâmicas fronteiriças e seus efeitos na mobilidade humana no contexto da integração regional sul-americana.",
    content: `
      <p>O Mercosul tem avançado na construção de um espaço de livre circulação de pessoas, mas desafios significativos permanecem, especialmente nas regiões de fronteira.</p>
      <h2>Acordos de residência</h2>
      <p>Os acordos de residência do Mercosul representam um avanço importante, permitindo que cidadãos dos países-membros obtenham residência temporária e permanente com procedimentos simplificados.</p>
      <h2>Desafios fronteiriços</h2>
      <p>Nas cidades de fronteira, a mobilidade cotidiana apresenta desafios específicos:</p>
      <ul>
        <li>Trabalhadores transfronteiriços</li>
        <li>Acesso a serviços de saúde e educação</li>
        <li>Controle migratório e burocracia</li>
        <li>Segurança e tráfico de pessoas</li>
      </ul>
      <blockquote>A fronteira não é apenas uma linha divisória, mas um espaço de trocas culturais, sociais e econômicas que precisa ser compreendido em sua complexidade.</blockquote>
      <h3>Perspectivas</h3>
      <p>O fortalecimento da integração regional e a harmonização das legislações migratórias são caminhos fundamentais para garantir os direitos das populações fronteiriças.</p>
    `,
    author: { name: "Karen Lima", initials: "KL" },
    date: "18 Dez 2025",
    category: "Pesquisa",
    tags: ["fronteiras", "legislacao", "venezuela"],
  },
  {
    id: 7,
    slug: "xenofobia-redes-sociais",
    title: "Xenofobia nas redes sociais: um estudo exploratório",
    excerpt:
      "Pesquisa do MIGRA mapeia discursos xenofóbicos em plataformas digitais e seus impactos na percepção pública sobre migrantes.",
    content: `
      <p>Um estudo conduzido por pesquisadores do MIGRA analisou mais de 50 mil publicações em redes sociais para mapear a prevalência e as características dos discursos xenofóbicos no Brasil.</p>
      <h2>Metodologia</h2>
      <p>A pesquisa utilizou técnicas de análise de conteúdo e processamento de linguagem natural para identificar padrões de discurso discriminatório contra migrantes.</p>
      <h2>Principais achados</h2>
      <ul>
        <li>Picos de discurso xenofóbico coincidem com eventos migratórios noticiados pela mídia</li>
        <li>Migrantes venezuelanos e haitianos são os grupos mais visados</li>
        <li>Desinformação é um vetor importante da xenofobia online</li>
      </ul>
      <blockquote>O combate à xenofobia digital exige uma abordagem multifacetada, que inclua educação midiática, regulação responsável e promoção de narrativas positivas sobre migração.</blockquote>
      <h3>Recomendações</h3>
      <p>O estudo propõe uma série de recomendações para plataformas digitais, educadores e formuladores de políticas públicas sobre como enfrentar o discurso de ódio online.</p>
    `,
    author: { name: "Marcos Oliveira", initials: "MO" },
    date: "02 Dez 2025",
    category: "Pesquisa",
    tags: ["acolhimento", "venezuela", "UFPE"],
  },
  {
    id: 8,
    slug: "territorialidades-migrantes-recife",
    title: "Territorialidades migrantes na Região Metropolitana do Recife",
    excerpt:
      "Estudo geográfico sobre como migrantes internacionais constroem territorialidades e redes de pertencimento na RMR.",
    content: `
      <p>A presença de migrantes internacionais na Região Metropolitana do Recife tem reconfigurado espaços urbanos e criado novas territorialidades que merecem atenção acadêmica.</p>
      <h2>Abordagem geográfica</h2>
      <p>Esta pesquisa utiliza ferramentas da geografia humana para analisar como migrantes de diferentes nacionalidades se apropriam de espaços urbanos, criam redes de solidariedade e constroem sentidos de pertencimento.</p>
      <h2>Principais achados</h2>
      <ul>
        <li>Concentração residencial em bairros específicos da RMR</li>
        <li>Formação de redes comerciais étnicas</li>
        <li>Espaços de sociabilidade e práticas culturais</li>
        <li>Disputas territoriais e negociações cotidianas</li>
      </ul>
      <blockquote>O espaço urbano é produzido coletivamente, e os migrantes são agentes ativos dessa produção, transformando a cidade ao mesmo tempo em que são transformados por ela.</blockquote>
      <p>O MIGRA tem atuado com mapeamento participativo junto a comunidades migrantes, produzindo cartografias sociais que revelam dinâmicas invisíveis aos olhares institucionais.</p>
    `,
    author: { name: "Patrícia Rocha", initials: "PR" },
    date: "15 Nov 2025",
    category: "Pesquisa",
    tags: ["geografia", "UFPE", "acolhimento"],
  },
  {
    id: 9,
    slug: "opiniao-politica-migratoria-humanizada",
    title: "Por uma política migratória humanizada: desafios e utopias",
    excerpt:
      "Artigo de opinião sobre a necessidade de repensar as políticas migratórias à luz da solidariedade internacional.",
    content: `
      <p>Vivemos em um mundo de contradições: enquanto mercadorias e capitais circulam livremente através das fronteiras, pessoas são barradas, criminalizadas e desumanizadas em seus deslocamentos.</p>
      <h2>A crise como oportunidade</h2>
      <p>Os desafios migratórios contemporâneos não são apenas problemas a serem resolvidos, mas também oportunidades para repensar nossas sociedades e nossas relações com o outro.</p>
      <h2>Princípios para uma nova política</h2>
      <ul>
        <li>Reconhecimento da migração como fenômeno estrutural</li>
        <li>Desmilitarização das fronteiras</li>
        <li>Combate às causas estruturais da migração forçada</li>
        <li>Participação dos migrantes na formulação de políticas</li>
      </ul>
      <blockquote>Uma política migratória verdadeiramente humanizada não é utopia — é uma necessidade ética e um imperativo de justiça social.</blockquote>
      <h3>O papel da academia</h3>
      <p>As universidades têm a responsabilidade de produzir conhecimento que contribua para a construção de sociedades mais justas e acolhedoras. O MIGRA assume esse compromisso como parte de sua missão institucional.</p>
      <p>É preciso ir além da análise técnica e assumir um posicionamento ético claro em defesa da dignidade de todas as pessoas, independentemente de sua nacionalidade ou status migratório.</p>
    `,
    author: { name: "Roberto Santos", initials: "RS" },
    date: "01 Nov 2025",
    category: "Opinião",
    tags: ["refugio", "fronteiras", "legislacao", "acolhimento"],
  },
];
