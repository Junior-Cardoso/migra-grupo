export type ProducaoPageKey = "migra" | "sofia" | "carolina";

export interface Publication {
  id: string;
  title: string;
  type: string;
  subcategory?: string | null;
  authors: string[];
  year: number;
  abstract: string;
  external_url?: string | null;
  tags: string[];
  thematic_categories: string[];
  page?: ProducaoPageKey;
}

export const FIXED_CATEGORIES = [
  "Pesquisas",
  "Extensão",
  "Artigos",
  "Trabalhos Completos em Eventos",
  "Teses e Dissertações",
  "Capítulos de Livro",
  "Livros",
] as const;

export const PRODUCAO_PAGES: { key: ProducaoPageKey; label: string }[] = [
  { key: "migra", label: "MIGRA" },
  { key: "carolina", label: "Profª Carolina Gonçalves" },
  { key: "sofia", label: "Profª Sofia Cavalcanti" },
];
