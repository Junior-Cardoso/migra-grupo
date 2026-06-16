## 1. Home — dados reais do banco

Hoje as seções Grupos de Estudo, Produção e Rádio no `MigraHome.tsx` mostram cards/textos genéricos. Vou substituir por dados reais consultando o Supabase:

- **Grupos de Estudo**: listar os grupos ativos da tabela `study_groups` (mesmos que aparecem em `/grupos-de-estudo`).
- **Produção**: mostrar as 3 publicações mais recentes (`publications` ordenado por `year` desc / `created_at`), com título, autores e tipo. Botão "ver todas" leva a `/producao`.
- **Rádio**: puxar os 3 episódios mais recentes de `radio_episodes` usando o mesmo `SpotifyEpisodeRow` da página Rádio (com data/duração via edge function).

## 2. Limpeza no banco de publicações

- **Remover "F. M. Dravet"** de todos os arrays `authors` em `publications` (UPDATE com `array_remove`). Também removo qualquer ocorrência da string "F. M. Dravet" das opções de filtro do frontend (se existir hard-coded).
- **Renomear categoria `Projetos` → `Pesquisas`** (UPDATE publications SET type='Pesquisas' WHERE type='Projetos') + atualizar labels e cores em `Producao.tsx`/admin.
- **Renomear categoria `Relatórios` → `Extensão`** (mesmo padrão).

## 3. Páginas por professora (MIGRA / Sofia / Carolina)

### Banco
- Migration: adicionar coluna `page` (text, default `'migra'`, com CHECK em `'migra' | 'sofia' | 'carolina'`) na tabela `publications`.
- Backfill: todas as publicações existentes ficam em `'migra'`.

### Frontend público
- Renomear página atual `Producao.tsx` para usar `page='migra'` como filtro. Manter rota `/producao` como página MIGRA (principal).
- Criar 2 novas páginas réplicas:
  - `/producao/carolina` — "Profª Carolina Gonçalves" — foto da Carolina (`carolina-leite.png.asset.json`) na capa hero.
  - `/producao/sofia` — "Profª Sofia Cavalcanti" — foto da Sofia (`sofia-zanforlin.png`) na capa.
- Componentizar a página atual em `ProducaoPage` recebendo `page`, `title`, `heroImage` para evitar duplicação.

### Navegação
- Atualizar `MigraNavigation.tsx`: o item "Produção" vira um dropdown com 3 sub-itens nesta ordem:
  1. **MIGRA** (destaque visual, item maior) → `/producao`
  2. Profª Carolina Gonçalves → `/producao/carolina`
  3. Profª Sofia Cavalcanti → `/producao/sofia`

### Admin
- No `AdminProducao.tsx`:
  - Dropdown "Página" (MIGRA / Carolina / Sofia) no formulário de criar/editar publicação.
  - Na listagem: filtro por página + ação rápida "Mover para…" em cada linha (dropdown inline) para redistribuir publicações entre as 3 páginas sem abrir o editor.

## 4. Editor WYSIWYG no admin (TipTap)

- Substituir `RichTextEditor.tsx` (que hoje mostra HTML cru) por um TipTap com toolbar: negrito, itálico, sublinhado, lista, link, título, citação.
- Aplicar em todos os admins que aceitam texto formatado: `AdminBlogEditor`, `AdminSobre`, `AdminInicio`, `AdminGrupos`, `AdminProducao`, `AdminRadio`, `AdminVideografia` (onde houver textarea de descrição/resumo).
- Output continua sendo HTML (já é o que `BlogPost.tsx` espera via `dangerouslySetInnerHTML`).

## 5. Capa do post de blog

- Tabela `blog_posts` provavelmente já tem `cover_image` — confirmo na hora; se não tiver, migration adicionando `cover_image_url text`.
- No `AdminBlogEditor`: campo de upload (Supabase Storage bucket `blog-covers` público) com preview. A mesma imagem é usada como capa (lista do blog) e como preview Open Graph.
- Atualizar `BlogCard` e `BlogPost` para exibir a `cover_image_url`.

## 6. Atualização de fotos

Você não respondeu quais fotos. Vou pular esse item agora; depois que eu terminar o resto, me envie no chat as fotos novas (arraste no chat) e diga qual substituir.

## Detalhes técnicos

- Migrations Supabase (3): coluna `page` em publications + backfill; rename de tipos `Projetos`→`Pesquisas` e `Relatórios`→`Extensão`; cleanup do autor Dravet; (talvez) `cover_image_url` em blog_posts; bucket `blog-covers`.
- Dependências novas: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-link`, `@tiptap/extension-underline`.
- Componentização: extrair `ProducaoPage` de `Producao.tsx` para reuso nas 3 páginas.
- Rotas novas em `App.tsx`: `/producao/sofia`, `/producao/carolina`.

## Fora do escopo desta rodada

- Substituição de fotos (aguardando arquivos).
