

# Plano: Remover publicações mock do banco de dados

## O que será feito

Executar um DELETE na tabela `publications` removendo os 10 registros mock (autores fictícios). Os IDs são:

- `88cfab7f`, `fd3ea933`, `ebc84a4d`, `c2bf0322`, `e463c933`, `f1bf8b11`, `3618196b`, `7629e153`, `b977e4b8`, `e8804610`

## Como

Uma única migração SQL com:
```sql
DELETE FROM public.publications WHERE id IN ('88cfab7f-...', 'fd3ea933-...', ...);
```

## Resultado

Restarão apenas as 17 publicações reais na base. A página Produção e o admin refletirão automaticamente.

## Arquivos impactados
- `supabase/migrations/` — nova migração para deletar os mocks

Nenhuma alteração de código necessária.

