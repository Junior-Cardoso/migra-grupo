
ALTER TABLE public.publications ADD COLUMN subcategory text;

UPDATE public.publications SET type = 'Artigos' WHERE type = 'Artigo';
UPDATE public.publications SET type = 'Teses e Dissertações' WHERE type IN ('Tese', 'Dissertação');
UPDATE public.publications SET type = 'Capítulos de Livro' WHERE type = 'Capítulo';
UPDATE public.publications SET type = 'Livros' WHERE type = 'Livro';
UPDATE public.publications SET type = 'Relatórios' WHERE type = 'Relatório';
