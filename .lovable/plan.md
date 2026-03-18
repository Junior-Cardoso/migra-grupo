

# Plano: Área Admin com CRUD para Blog, Videografia e Home

## Visão Geral

Criar uma área administrativa protegida por login/senha com páginas de gerenciamento para cada seção do site. O trabalho será dividido em 4 entregas incrementais.

---

## Entrega 1 — Autenticação Admin

**Abordagem**: Criar um usuário admin no sistema de autenticação do Lovable Cloud com credenciais fixas. Usar uma tabela `user_roles` para controlar acesso admin via RLS.

- Criar tabela `user_roles` (conforme padrão de segurança) e função `has_role`
- Criar página `/admin/login` com formulário de email/senha
- Criar layout admin com sidebar de navegação (links: Dashboard, Blog, Videografia, Home)
- Proteger rotas `/admin/*` com verificação de autenticação + role admin
- Credenciais fornecidas: email e senha criados via seed no banco

**Credenciais de acesso:**
- Email: `admin@migra.ufpe.br`
- Senha: `Migra@Admin2026`

---

## Entrega 2 — CRUD Videografia (com backend)

Já temos a tabela `videos` no banco. Criar a interface admin para gerenciá-la.

**Página `/admin/videografia`:**
- Listagem dos vídeos em tabela com busca e filtro por categoria
- Botão "Novo Vídeo" abre formulário com campos: título, YouTube ID (com preview), descrição, data, categoria
- Edição inline ou modal para cada vídeo
- Exclusão com confirmação
- Adicionar políticas RLS de INSERT/UPDATE/DELETE para admins
- Reflexo imediato na página `/videografia` pública

---

## Entrega 3 — Sistema de Criação de Artigos do Blog (frontend only)

Criar a experiência completa de criação/edição de artigos sem conectar ao backend ainda.

**Página `/admin/blog`:**
- Listagem dos artigos (vindos do mock atual `blogPosts.ts`)
- Botão "Novo Artigo" abre editor com:
  - **Título** (input text)
  - **Slug** (auto-gerado do título, editável)
  - **Categoria** (select com as categorias existentes + opção de criar nova)
  - **Tags** (input com chips, adicionar/remover)
  - **Autor** (nome + iniciais)
  - **Data** (date picker)
  - **Resumo/Excerpt** (textarea)
  - **Conteúdo** (editor rich-text/markdown com toolbar: headings H2/H3, bold, italic, links, listas, blockquote, código)
  - **Preview** do artigo renderizado ao lado do editor
- Salvar localmente (estado React) para validação da experiência

**Editor de conteúdo**: Usar uma textarea com toolbar de markdown que insere sintaxe e mostra preview HTML ao lado (split view). Sem dependência externa pesada.

---

## Entrega 4 — Editor da Home (textos, botões, imagens)

**Página `/admin/home`:**

Seções editáveis com limitadores de caracteres baseados no conteúdo atual:

| Seção | Campos editáveis | Limite chars |
|-------|------------------|-------------|
| Hero | Subtítulo UFPE (60), Título "MIGRA" (10), Descrição (150), Botão 1 label (25) + link + nofollow, Botão 2 label (15) + link + nofollow, Imagem BG (upload/troca) | — |
| Sobre | Título (20), Parágrafo 1 (250), Parágrafo 2 (200), Contadores (número + label, 20 chars cada) | — |
| Áreas de Atuação | Título seção (30), Descrição seção (100), 6 cards (título 30 + desc 120 cada), Botão label (40) + link | — |
| Equipe | Título (20), Descrição (100), 4 membros (nome 30 + role 20), Botão label (25) + link | — |
| Acervo Digital | Título (20), Descrição (100), 6 publicações (tipo 15 + título 80 + autor 30 + ano 4), Botão label (25) + link | — |
| Blog | Título (20), Descrição (100), Botão label (25) + link | — |
| CTA/Contato | Título (30), Descrição (200), Botão 1 label (25) + link, Botão 2 label (25) + link | — |

**Botões**: cada um tem label (com limite), link (interno `/rota` ou externo `https://...`), e checkbox nofollow.

**Imagens**: apenas a imagem hero BG pode ser trocada (upload de nova imagem, sem controle de posição). Preview da imagem atual + botão trocar.

Nesta entrega o formulário será apenas frontend (estado local), sem persistência no banco ainda.

---

## Estrutura de Arquivos

```text
src/pages/admin/
├── AdminLogin.tsx
├── AdminLayout.tsx        (sidebar + outlet)
├── AdminDashboard.tsx     (overview)
├── AdminVideografia.tsx   (CRUD completo)
├── AdminBlog.tsx          (listagem + editor)
├── AdminBlogEditor.tsx    (editor de artigo)
└── AdminHome.tsx          (editor de seções)
```

## Migrações de Banco

1. Tabela `user_roles` + enum `app_role` + função `has_role`
2. Políticas RLS em `videos` para INSERT/UPDATE/DELETE por admins
3. Seed do usuário admin + role

## Ordem de Implementação

1. Auth + layout admin + rotas protegidas
2. CRUD Videografia com backend
3. Editor de Blog (frontend)
4. Editor da Home (frontend)

