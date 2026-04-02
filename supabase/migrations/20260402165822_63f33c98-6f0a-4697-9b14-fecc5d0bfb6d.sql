
CREATE TABLE public.publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  authors text[] NOT NULL DEFAULT '{}',
  year integer NOT NULL,
  abstract text NOT NULL DEFAULT '',
  external_url text,
  tags text[] NOT NULL DEFAULT '{}',
  thematic_categories text[] NOT NULL DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Publications are publicly readable"
ON public.publications FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can insert publications"
ON public.publications FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update publications"
ON public.publications FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete publications"
ON public.publications FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
