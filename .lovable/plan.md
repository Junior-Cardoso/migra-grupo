

# Plano: Novas Páginas, Seções e Ajustes no Site MIGRA

Dividido em 6 blocos de trabalho, ordenados por prioridade e dependência.

---

## Bloco 1 — Ajustes na Home

**1a. Remover contadores quantitativos da Seção "Sobre"**
- Remover o bloco `grid grid-cols-3` com AnimatedCounter (15+ Pesquisadores, 50+ Publicações, 8 Anos) da seção `#sobre` em `MigraHome.tsx`

**1b. Renomear "Acervo Digital" para "Produção"**
- Na seção `#publicacoes` da Home, trocar título "Acervo Digital" por "Produção"
- Botão "Ver todo o acervo" vira "Ver toda a produção"

**1c. Adicionar seção "Grupos de Estudo" na Home**
- Nova seção entre Equipe e Produção (ou após Áreas de Atuação)
- Cards com logo/ícone, nome do grupo, breve descrição
- Botão "Conheça nossos grupos" linkando para `/grupos-de-estudo`

---

## Bloco 2 — Nova página: Conheça o Grupo (`/sobre`)

Página dedicada com 3 sub-seções:
- **Breve História do MIGRA** — texto institucional com timeline ou parágrafos
- **Perfil das Professoras Carol e Sofia** — foto, mini-bio, área de atuação, links Lattes/ORCID
- **Pessoas que passaram pelo MIGRA** — grid/lista de ex-membros com nome, período e contribuição

Atualizar navegação: link "Sobre" no menu aponta para `/sobre` (rota) em vez de `#sobre` (âncora).

---

## Bloco 3 — Página Produção (renomear Acervo → Produção)

**3a. Renomear rota e referências**
- Rota `/acervo` → `/producao`
- Atualizar navegação, links na Home, footer

**3b. Filtros inteligentes**
Substituir o filtro simples por tipo por um sistema multi-filtro:

| Filtro | Tipo | Valores |
|--------|------|---------|
| Autores | Multi-select / chips | Extraídos dos dados |
| Modalidade/Formato | Badges (como hoje) | Artigo, Dissertação, Tese, Capítulo, Working Paper, Relatório |
| Categoria temática | Badges ou select | Migração e trabalho, Migração e fronteira, Interculturalidade, Comunidade, Pertencimentos, etc. |

- Adicionar campo `thematicCategory` (ou `categories: string[]`) ao modelo `Publication`
- Filtros combinam com AND (busca textual + autor + formato + categoria)
- Atualizar `acervoPublications.ts` com categorias temáticas nos dados existentes

---

## Bloco 4 — Contato: somente emails

- Na seção `#contato` da Home, simplificar para exibir apenas emails de contato (remover botões genéricos ou trocar por `mailto:`)
- Se houver página de contato separada, mesmo tratamento

---

## Bloco 5 — Nova página: Rádio MIGRA (`/radio`)

- Header com identidade do programa (nome, descrição, logo se houver)
- Embed do Spotify (iframe do podcast/show) — episódios listados
- Estudar mini-player fixo na navegação (botão play no header que abre popover com player Spotify embed compacto)
- Adicionar "Rádio MIGRA" ao menu de navegação

---

## Bloco 6 — Nova página: Grupos de Estudo (`/grupos-de-estudo`)

Página com:
- Logo/identidade de cada grupo
- Informações gerais e objetivos
- Atividades realizadas
- Participantes atuais
- Ciclos de estudo (timeline ou lista)
- CTA "Entre em contato" (mailto)

---

## Arquivos impactados

```text
Novos:
  src/pages/Sobre.tsx              (Conheça o Grupo)
  src/pages/RadioMigra.tsx         (Rádio MIGRA)
  src/pages/GruposDeEstudo.tsx     (Grupos de Estudo)

Editados:
  src/pages/MigraHome.tsx          (remover contadores, renomear seção, add seção grupos)
  src/pages/Acervo.tsx → Producao.tsx  (renomear + filtros inteligentes)
  src/data/acervoPublications.ts   (add campo categoria temática)
  src/components/MigraNavigation.tsx (novos links: Sobre, Rádio, Grupos)
  src/components/MigraFooter.tsx   (atualizar links)
  src/App.tsx                      (novas rotas)
```

## Ordem de implementação sugerida

1. Bloco 1 (ajustes Home — rápido)
2. Bloco 4 (contato — rápido)
3. Bloco 3 (Produção com filtros)
4. Bloco 2 (página Sobre)
5. Bloco 6 (Grupos de Estudo)
6. Bloco 5 (Rádio MIGRA)

