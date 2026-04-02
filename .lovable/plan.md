

# Plano: Categorias fixas com subcategorias livres + paginação

## Resumo

1. Renomear o campo `type` para representar "Categoria" (fixo) e adicionar coluna `subcategory` (livre)
2. Atualizar dados existentes para mapear os types atuais às novas categorias fixas
3. Adaptar admin com select fixo de categorias + input de subcategoria com sugestões
4. Adaptar página Produção: renomear "Formato" para "Categorias", adicionar paginação no feed, mover autores para cima da sidebar

## Categorias fixas

- Projetos
- Relatórios
- Artigos
- Trabalhos Completos em Eventos
- Teses e Dissertações
- Capítulos de Livro
- Livros

## Alterações no banco de dados

**Migração 1**: Adicionar coluna `subcategory` (text, nullable) à tabela `publications`.

**Migração 2**: Atualizar registros existentes para mapear os `type` atuais:
- "Artigo" → "Artigos"
- "Tese" → "Teses e Dissertações"
- "Dissertação" → "Teses e Dissertações"
- "Capítulo de Livro" → "Capítulos de Livro"
- "Livro" → "Livros"
- "Relatório" → "Relatórios"
- Outros → mapeamento manual conforme dados

## Alterações no frontend

### AdminProducao.tsx
- Substituir input livre de "Tipo" por `<Select>` com as 7 categorias fixas
- Adicionar campo "Subcategoria" com input + datalist das subcategorias já existentes no banco
- Renomear label "Tipo" → "Categoria"

### Producao.tsx
- Renomear seção "Formato" → "Categorias" na sidebar
- Usar as 7 categorias fixas (mesmo que tenham 0 resultados, mostrá-las)
- Adicionar paginação no feed de publicações (12 por página)
- Mover seção "Autores" para antes de "Categoria Temática" na sidebar (fica mais acessível sem scroll)

### types (acervoPublications.ts)
- Adicionar `subcategory?: string` à interface Publication

## Arquivos impactados
- `supabase/migrations/` — 1 migração (add column + update data)
- `src/pages/Producao.tsx` — categorias fixas, paginação, reordenar sidebar
- `src/pages/admin/AdminProducao.tsx` — select fixo + subcategoria
- `src/data/acervoPublications.ts` — interface update

