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
}

export const FIXED_CATEGORIES = [
  "Projetos",
  "Relatórios",
  "Artigos",
  "Trabalhos Completos em Eventos",
  "Teses e Dissertações",
  "Capítulos de Livro",
  "Livros",
] as const;
