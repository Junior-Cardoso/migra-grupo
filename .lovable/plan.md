

# Plano: Reestruturar Videografia em Divisórias + Documentário em Destaque

## Contexto

A página Videografia precisa deixar de ser um grid plano e passar a exibir vídeos organizados em **seções temáticas (divisórias)** com títulos e descrições próprias. Além disso, o documentário "Así Pasó" precisa ficar em destaque.

## Divisórias definidas

1. **Así Pasó** — Documentário em destaque + bastidores (entrevistas na íntegra). Vídeo principal: `VN52Uoe5m6A`
2. **Curso de Extensão: Questão Migratória** — As 13 aulas já existentes (categoria "Aulas")
3. **I Encontro Nacional da Rede REUNIR** — Vídeos do encontro (a adicionar futuramente)
4. **Palestras, aulas e comentários na mídia** — Conteúdo avulso
5. **Plenária Nacional Saúde e Migração** — Vídeos da plenária

## Alterações no banco de dados

**Migração**: Adicionar coluna `section` (text) e `sort_order` (integer, default 0) à tabela `videos`.

Atualizar dados existentes:
- Vídeos com `category = 'Aulas'` → `section = 'Curso de Extensão: Questão Migratória'`
- Vídeos com `category = 'Narrativas Migrantes'` → `section = 'Así Pasó'` (são bastidores do documentário)

Inserir o vídeo do documentário principal (`VN52Uoe5m6A`) na seção "Así Pasó" com `sort_order = -1` para ficar em primeiro.

## Alterações no frontend

### Videografia.tsx
- Reorganizar layout em seções sequenciais, cada uma com:
  - Título da divisória (h2)
  - Descrição curta (quando aplicável)
  - Grid de vídeos daquela seção
- **Divisória 1 (Así Pasó)**: Layout especial — documentário em destaque (iframe grande, largura total), seguido dos bastidores em grid menor
- Divisórias 2-5: Grid padrão 2 colunas
- Manter busca global no topo (filtra dentro de todas as seções)
- Ordem fixa das seções definida no código

### AdminVideografia.tsx
- Substituir campo `Categoria` por `Seção` com select fixo das 5 divisórias
- Manter campo `category` como subcategoria livre (opcional)
- Adicionar campo `sort_order` para ordenação dentro da seção

## Arquivos impactados
- `supabase/migrations/` — nova migração (add columns + update data + insert documentário)
- `src/pages/Videografia.tsx` — layout por seções
- `src/pages/admin/AdminVideografia.tsx` — select de seção

