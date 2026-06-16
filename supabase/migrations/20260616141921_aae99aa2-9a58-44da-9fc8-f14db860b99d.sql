
-- 1) Adicionar coluna `page` em publications (migra | sofia | carolina)
ALTER TABLE public.publications
  ADD COLUMN IF NOT EXISTS page text NOT NULL DEFAULT 'migra';

ALTER TABLE public.publications
  DROP CONSTRAINT IF EXISTS publications_page_check;
ALTER TABLE public.publications
  ADD CONSTRAINT publications_page_check
  CHECK (page IN ('migra','sofia','carolina'));

CREATE INDEX IF NOT EXISTS publications_page_idx ON public.publications(page);

-- 2) Tabela de posts do blog (com imagem de capa)
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  cover_image_url text,
  category text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}'::text[],
  author_name text NOT NULL DEFAULT '',
  published_at date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Blog posts are publicly readable" ON public.blog_posts;
CREATE POLICY "Blog posts are publicly readable" ON public.blog_posts
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Admins can insert blog posts" ON public.blog_posts;
CREATE POLICY "Admins can insert blog posts" ON public.blog_posts
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can update blog posts" ON public.blog_posts;
CREATE POLICY "Admins can update blog posts" ON public.blog_posts
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can delete blog posts" ON public.blog_posts;
CREATE POLICY "Admins can delete blog posts" ON public.blog_posts
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
