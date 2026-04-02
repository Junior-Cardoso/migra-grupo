export interface Publication {
  id: string;
  title: string;
  type: string;
  authors: string[];
  year: number;
  abstract: string;
  external_url?: string | null;
  tags: string[];
  thematic_categories: string[];
}
