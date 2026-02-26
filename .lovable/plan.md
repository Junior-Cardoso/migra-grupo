

# Atualizacoes de Conteudo + Acervo + Videografia

## Visao Geral

Quatro frentes de alteracao:

1. **Correcao de identidade**: "Grupo de Estudos" vira "Grupo de Pesquisa e Extensao" em todo o site
2. **Remocao de termos**: Retirar mencoes a "direitos humanos" e "apatridia" do site (textos, categorias, tags, cards de areas de atuacao, blog posts)
3. **Pagina de Acervo** (`/acervo`): Repositorio de publicacoes com cards linkando para URLs externas
4. **Pagina de Videografia** (`/videografia`): Grid de videos do YouTube com embed

---

## 1. Correcao de Identidade

Substituir **"Grupo de Estudos"** por **"Grupo de Pesquisa e Extensao"** nos seguintes locais:

- `MigraHome.tsx` -- hero (h1), secao "Sobre", secao CTA/Contato, footer inline
- `MigraFooter.tsx` -- descricao do grupo
- `MigraNavigation.tsx` -- sem alteracao necessaria (ja usa apenas "MIGRA")
- `blogPosts.ts` -- conteudo dos posts que mencionem "grupo de estudos"

Tambem atualizar o subtitulo do hero: trocar "refúgio e apatridia" por algo como "mobilidades e gestao contemporanea de populacoes" (conforme o titulo oficial mostrado na imagem do Lattes: **"Migracoes, Mobilidades e Gestao Contemporanea de Populacoes (MIGRA)"**).

---

## 2. Remocao de "Direitos Humanos" e "Apatridia"

### Areas de Atuacao (MigraHome.tsx)
- Remover o card **"Direitos Humanos"** (icone BookOpen)
- Remover o card **"Apatridia"** (icone Users)
- Adicionar 2 novos cards mais alinhados com Comunicacao e Geografia, como:
  - **"Comunicacao e Migracao"** -- Estudos sobre narrativas midiaticas, representacao e comunicacao intercultural
  - **"Geografia das Migracoes"** -- Analise espacial dos fluxos migratorios e territorialidades

### Blog (blogPosts.ts)
- Remover a categoria **"Direitos Humanos"** do array `categories`
- Atualizar os posts que usam essa categoria (posts 4 e 8) -- trocar para "Pesquisa" ou "Opiniao"
- Remover a tag **"apatridia"** de todos os posts
- Ajustar conteudo dos posts 4 ("Apatridia: a invisibilidade juridica...") e 8 ("Direito a nacionalidade de criancas...") -- reescrever para temas mais alinhados ou remover

### Secao CTA/Contato (MigraHome.tsx)
- Remover mencao a "apatridia" no texto do paragrafo

### Equipe (MigraHome.tsx)
- Remover "direitos humanos" da descricao da equipe

---

## 3. Pagina de Acervo (`/acervo`)

### Novos Arquivos
- `src/data/acervoPublications.ts` -- dados mock das publicacoes
- `src/pages/Acervo.tsx` -- pagina do repositorio

### Estrutura de Dados (`acervoPublications.ts`)
```text
interface Publication {
  id: number
  title: string
  type: "Artigo" | "Dissertacao" | "Tese" | "Capitulo" | "Working Paper" | "Relatorio"
  authors: string[]
  year: number
  abstract: string
  externalUrl?: string   // link externo (quando disponivel)
  tags: string[]
}
```
- Array de ~8-10 publicacoes mock

### Layout da Pagina
- Header/banner no padrao do site (bg-secondary, titulo "ACERVO" em Oswald uppercase, divisor dourado)
- Barra de busca + filtro por tipo de publicacao (chips)
- Grid de cards (3 colunas desktop, 1 mobile)
- Cada card mostra: badge de tipo, titulo, autores, ano, resumo truncado
- Se `externalUrl` existe: botao "Acessar publicacao" que abre em nova aba
- Se nao existe: apenas informacoes textuais no card
- Nao ha pagina de detalhe individual -- tudo no card
- Navegacao e footer reutilizados

### Rota
- Adicionar `/acervo` no `App.tsx`
- Adicionar "Acervo" na navegacao (`MigraNavigation.tsx`)

---

## 4. Pagina de Videografia (`/videografia`)

### Novos Arquivos
- `src/data/videos.ts` -- dados mock dos videos
- `src/pages/Videografia.tsx` -- pagina da videografia

### Estrutura de Dados (`videos.ts`)
```text
interface Video {
  id: number
  title: string
  description: string
  youtubeId: string    // ID do video para embed
  date: string
  category?: string
}
```
- Array de ~6 videos mock (com IDs placeholder por enquanto)

### Layout da Pagina
- Header/banner padrao (bg-secondary, titulo "VIDEOGRAFIA", divisor dourado)
- Grid de videos (2 colunas desktop, 1 mobile)
- Cada card: iframe embed do YouTube (aspect-ratio 16/9), titulo, descricao, data
- Sem pagina de detalhe -- o video e reproduzido diretamente no card
- Futuramente integravel com API do YouTube para alimentacao automatica

### Rota
- Adicionar `/videografia` no `App.tsx`
- Adicionar "Videografia" na navegacao

---

## 5. Navegacao Atualizada

Links na `MigraNavigation`:
1. Sobre
2. Areas de Atuacao
3. Equipe
4. Acervo (rota `/acervo`)
5. Blog (rota `/blog`)
6. Videografia (rota `/videografia`)
7. Contato

---

## Detalhes Tecnicos

- Estado local com `useState` para busca e filtros nas paginas Acervo e Videografia
- Embeds do YouTube via iframe padrao (`https://www.youtube-nocookie.com/embed/{youtubeId}`)
- Componentes reutilizam `ScrollReveal`, `Card`, `Button`, `Badge`, `Input` existentes
- Todas as paginas incluem `MigraNavigation` + `MigraFooter`
- Responsividade: grids adaptam de 3/2 colunas para 1 coluna no mobile

