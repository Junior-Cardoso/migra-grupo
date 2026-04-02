

# Plano: Migrar Produções para o Banco de Dados

## Situação Atual
A página Produção lê todas as publicações de um arquivo estático (`src/data/acervoPublications.ts`). Não existe tabela de publicações no banco.

## O que será feito

### 1. Criar tabela `publications` no banco
Campos: `id`, `title`, `type`, `authors` (text[]), `year`, `abstract`, `external_url`, `tags` (text[]), `thematic_categories` (text[]), `created_at`.
RLS: leitura pública, escrita apenas para admins.

### 2. Inserir todas as publicações existentes
Migrar os 27 registros do arquivo estático para a tabela via INSERT.

### 3. Atualizar a página Produção
- Remover import do arquivo estático
- Buscar publicações via Supabase + React Query
- Derivar listas de tipos, categorias e autores dinamicamente dos dados retornados
- Manter toda a lógica de filtros como está

### 4. Remover o arquivo estático
Deletar `src/data/acervoPublications.ts` (ou esvaziá-lo, mantendo apenas a interface para tipagem se necessário).

### 5. (Bônus) Preparar admin
Adicionar rota de CRUD de publicações no painel admin (listagem + editor), similar ao que já existe para videografia.

---

## Arquivos impactados
- `supabase/migrations/` — nova migração para criar tabela + inserir dados
- `src/pages/Producao.tsx` — substituir fonte de dados
- `src/data/acervoPublications.ts` — remover ou reduzir
- `src/pages/admin/` — novo editor de publicações (opcional nesta entrega)

