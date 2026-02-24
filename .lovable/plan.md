

# Plano de Responsividade Completa -- MIGRA

## Problemas Identificados

1. **Stats (Sobre o MIGRA)**: Os 3 indicadores (15+, 50+, 8) usam `flex gap-10` que transborda no mobile -- o terceiro item ("8 Anos de atuacao") fica cortado/invisivel
2. **Paragrafos cortados**: Na secao Sobre, o texto dos paragrafos esta sendo cortado na lateral direita no mobile
3. **Equipe em coluna unica**: Os 4 membros empilham verticalmente no mobile, ocupando espaco excessivo -- falta breakpoint intermediario (grid `sm:grid-cols-2`)
4. **Blog sem breakpoint intermediario**: O grid do blog pula de 1 coluna direto para `md:grid-cols-3`, sem estagio `sm:grid-cols-2`
5. **Secao header do blog**: `mb-4` em vez de `mb-16` como nas outras secoes -- inconsistencia de espacamento
6. **Tamanhos de fonte dos titulos de secao**: Todos usam `text-3xl md:text-4xl`, mas falta ajuste para telas muito pequenas
7. **Botoes CTA**: Texto longo como "Saiba mais sobre nossas pesquisas" pode quebrar mal em telas pequenas
8. **Padding vertical das secoes**: Todas usam `py-20 md:py-28`, o que esta consistente, mas o hero usa `py-24 md:py-36` que pode ser excessivo no mobile

---

## Alteracoes Planejadas

### 1. Stats responsivos (Secao Sobre)
- Trocar `flex gap-10` por um grid: `grid grid-cols-3 gap-4 sm:gap-10`
- Reduzir o tamanho da fonte dos numeros no mobile: `text-3xl sm:text-5xl`
- Garantir que os separadores verticais funcionem no mobile

### 2. Texto sem overflow
- Garantir que os paragrafos da secao Sobre nao transbordem, verificando `max-w-2xl` e padding

### 3. Grid da Equipe com breakpoint intermediario
- Ja usa `sm:grid-cols-2 lg:grid-cols-4` -- esta correto, so precisa reduzir o avatar no mobile (`w-24 h-24` no mobile, `w-32 h-32` no sm+)

### 4. Grid do Blog com breakpoint intermediario
- Mudar de `md:grid-cols-3` para `sm:grid-cols-2 lg:grid-cols-3`

### 5. Corrigir espacamento do header do Blog
- Mudar `mb-4` para `mb-16` para consistencia com as outras secoes

### 6. Hero padding mobile
- Reduzir para `py-16 md:py-24 lg:py-36`

### 7. Botoes CTA responsivos
- Reduzir `px-8` para `px-6 sm:px-8` e `text-sm sm:text-base` nos botoes mais longos

### 8. Footer responsivo
- O footer ja usa `md:grid-cols-3` e empilha no mobile -- esta ok

---

## Detalhes Tecnicos

Arquivo unico a editar: `src/pages/MigraHome.tsx`

### Mudancas especificas:

**Linha 31 (Hero padding)**:
```
py-16 md:py-24 lg:py-36
```

**Linha 36 (Hero h1)**:
```
text-3xl sm:text-4xl md:text-6xl lg:text-7xl
```

**Linha 82 (Stats container)**:
```
grid grid-cols-3 gap-4 sm:gap-10
```

**Linhas 84, 91, 98 (Stats numeros)**:
```
text-3xl sm:text-5xl
```

**Linhas 89, 96 (Separadores verticais dentro do grid)**:
Remover os `<div className="w-px bg-border" />` separados e usar `border-l border-border pl-4 sm:pl-0` nos itens 2 e 3, ou manter separadores como `hidden sm:block`

**Linha 287 (Blog header mb)**:
```
mb-16 (em vez de mb-4)
```

**Linha 298 (Blog grid)**:
```
grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12
```

**Linha 197 (Avatar equipe)**:
```
w-24 h-24 sm:w-32 sm:h-32
```

**Todos os botoes CTA longos**:
```
text-sm sm:text-base px-6 sm:px-8
```

Sao aproximadamente 15-20 linhas de alteracao, todas no mesmo arquivo, focadas em classes Tailwind responsivas.

