export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; initials: string };
  date: string;
  category: string;
  tags: string[];
}

export const categories = [
  "Pesquisa",
  "Eventos",
  "Políticas Públicas",
  "Opinião",
] as const;

export const blogPosts: BlogPost[] = [];
