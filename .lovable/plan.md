

# Adicionar vídeo real + Criar tabela de vídeos no Supabase

## Dados extraídos do vídeo

- **Título**: Questão Migratória: Aspectos Jurídicos, Culturais e Integração Social dos Migrantes - Aula 1
- **YouTube ID**: F7JKJEQYA9o
- **Data**: 24 Jul 2021
- **Categoria**: Aulas (nova categoria, pois é uma aula do ciclo de formação)
- **Descrição**: Ciclo 1 — Migrações, sua normatização jurídica e os direitos sociais e humanos. Aula ministrada pela Profª Dra. Natália Medina Araújo (UFOB).

---

## Plano

### 1. Conectar Lovable Cloud (Supabase)

Antes de criar a tabela, o projeto precisa estar conectado ao Lovable Cloud. O usuário precisa habilitar isso nas configurações do projeto (Settings > Cloud).

### 2. Criar tabela `videos` no Supabase

Migração SQL para criar a tabela:

```text
videos
├── id          uuid (PK, default gen_random_uuid())
├── title       text NOT NULL
├── description text
├── youtube_id  text NOT NULL
├── date        text NOT NULL
├── category    text
├── created_at  timestamptz (default now())
```

RLS: leitura pública (SELECT para anon e authenticated), escrita restrita.

### 3. Seed com os 7 vídeos (6 mock + 1 real)

Inserir os 6 vídeos mock existentes + o novo vídeo real via insert tool.

### 4. Atualizar a página Videografia

- Substituir import de `src/data/videos.ts` por query ao Supabase (`supabase.from('videos').select('*').order('created_at', { ascending: false })`)
- Usar `@tanstack/react-query` (já instalado) para fetch
- Manter filtros e busca no client-side sobre os dados retornados
- Arquivo `src/data/videos.ts` pode ser removido ou mantido como fallback

### 5. Adicionar `videos` ao tipo gerado do Supabase

O tipo será gerado automaticamente após a migração.

---

## Pré-requisito

O projeto precisa estar conectado ao Lovable Cloud/Supabase. Se ainda não estiver, o primeiro passo será habilitá-lo nas configurações.

