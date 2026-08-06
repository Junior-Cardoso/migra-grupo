UPDATE public.page_content
SET content = replace(replace(replace(content::text,
      'Carol Leite', 'Carolina Leite'),
      'Sofia Zanforlin<', 'Sofia Zanforline<'),
      'Ana Carolina Gonçalves Leite', 'Carolina Leite')::jsonb
WHERE content::text ILIKE '%Carol%' OR content::text ILIKE '%Zanforlin%';

UPDATE public.publications
SET authors = array_replace(array_replace(authors,
      'Sofia Cavalcanti Zanforlin', 'Sofia Zanforline'),
      'Ana Carolina Gonçalves Leite', 'Carolina Leite');