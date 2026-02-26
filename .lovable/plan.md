
# Blog: Pagina de Feed + Pagina de Artigo

## Visao Geral

Criar duas novas paginas completas seguindo os padroes visuais do projeto (Oswald para headings, Inter para body, cores primary/secondary/accent, uppercase tracking-wide nos titulos, divisor dourado, ScrollReveal):

1. **`/blog`** -- Feed de posts com sidebar lateral
2. **`/blog/:slug`** -- Pagina individual do artigo

---

## Estrutura de Arquivos

```text
src/
  data/
    blogPosts.ts          -- Dados mock dos posts (titulo, slug, excerpt, conteudo, autor, data, categoria, tags, imagem)
  pages/
    Blog.tsx              -- Pagina do feed
    BlogPost.tsx          -- Pagina do artigo individual
  components/
    BlogSidebar.tsx       -- Sidebar reutilizavel (busca, categorias, tags, posts recentes)
    BlogCard.tsx          -- Card de post no feed
    MigraFooter.tsx       -- Footer extraido (reutilizavel entre paginas)
```

---

## 1. Dados Mock (`src/data/blogPosts.ts`)

- Array de ~9 posts com campos: `id`, `slug`, `title`, `excerpt`, `content` (HTML string longo para simular artigo real), `author` (nome + iniciais), `date`, `category`, `tags[]`, `coverImage` (placeholder gradient).
- Categorias fixas: "Pesquisa", "Eventos", "Politicas Publicas", "Direitos Humanos", "Opiniao".
- Tags variadas: "refugio", "venezuela", "apatridia", "fronteiras", "UFPE", "legislacao", "acolhimento", etc.

---

## 2. Pagina do Feed (`/blog`)

### Layout
- **Header da pagina**: Banner com bg-secondary, titulo "BLOG" em Oswald uppercase + subtitulo + divisor dourado (mesmo padrao das secoes da home).
- **Conteudo**: Grid de 2 colunas no desktop (`lg:grid-cols-[1fr_320px]`), coluna unica no mobile.
  - **Coluna principal**: Lista de BlogCards.
  - **Sidebar direita**: Componente BlogSidebar (sticky no desktop).

### Filtros e Busca (acima do grid)
- **Campo de busca**: Input com icone Search, filtra posts por titulo/excerpt.
- **Filtro por categoria**: Chips/badges horizontais clicaveis ("Todos", "Pesquisa", "Eventos", ...). Categoria ativa recebe estilo `bg-primary text-white`, inativas `bg-muted`.
- Filtragem via `useState` local, sem backend.

### BlogCard
- Card com imagem placeholder (gradient com icone BookOpen), badge de categoria, titulo (Oswald uppercase), excerpt (2-3 linhas truncadas), autor com avatar circular (iniciais), data, link "Ler mais" com seta. Hover sutil no border.
- Link para `/blog/:slug` usando `react-router-dom` `Link`.

### Paginacao
- Paginacao simples no rodape do feed (anterior/proximo) usando o componente Pagination existente, ou botoes simples.

---

## 3. Sidebar (`BlogSidebar.tsx`)

- **Busca**: Input com icone (duplica funcionalidade do topo, mas disponivel na sidebar tambem no desktop).
- **Categorias**: Lista vertical com contagem de posts por categoria, clicavel para filtrar.
- **Nuvem de Tags**: Tags renderizadas como badges com tamanhos variados (baseado em frequencia), clicaveis para filtrar por tag.
- **Posts Recentes**: Lista dos 3-4 posts mais recentes com thumbnail mini e titulo linkado.

---

## 4. Pagina do Artigo (`/blog/:slug`)

### Layout
- **Header**: Banner similar ao feed, porem com categoria badge + titulo do post + meta (autor, data, tags).
- **Conteudo**: Grid `lg:grid-cols-[1fr_320px]`.
  - **Coluna principal**: 
    - Imagem de capa (placeholder).
    - Conteudo do artigo renderizado com `dangerouslySetInnerHTML` e classes de tipografia (prose-like styling manual com Tailwind: paragrafos, h2, h3, listas, blockquotes estilizados).
    - Secao de tags no final.
    - Navegacao prev/next post.
  - **Sidebar**: Mesmo BlogSidebar.

### Breadcrumb
- Breadcrumb no topo: Home > Blog > Titulo do post (usando componente Breadcrumb existente).

---

## 5. Rotas e Navegacao

- Adicionar rotas no `App.tsx`: `/blog` e `/blog/:slug`.
- Adicionar link "Blog" na `MigraNavigation` (desktop e mobile).
- Footer sera extraido como `MigraFooter.tsx` e reutilizado nas 3 paginas.

---

## 6. Responsividade

- Mobile: sidebar some, fica abaixo do feed em coluna unica. Filtros e busca empilham verticalmente. Nuvem de tags com scroll horizontal ou wrap.
- Tablet: sidebar pode aparecer abaixo do conteudo principal.
- Desktop: layout 2 colunas com sidebar sticky.

---

## Detalhes Tecnicos

- Todo o estado (busca, categoria ativa, tag ativa, paginacao) gerenciado com `useState` local.
- Navegacao com `react-router-dom` (`Link`, `useParams`, `useSearchParams` para filtros opcionais).
- Componentes reutilizam `ScrollReveal`, `Card`, `Button`, `Badge`, `Input`, `Breadcrumb` existentes.
- Tipografia do artigo estilizada manualmente via classes Tailwind (sem plugin `@tailwindcss/typography`).
