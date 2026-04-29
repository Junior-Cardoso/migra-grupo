
-- Generic page content store (key/value JSON per page)
CREATE TABLE public.page_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  section_key text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (page, section_key)
);

ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Page content is publicly readable"
  ON public.page_content FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert page content"
  ON public.page_content FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update page content"
  ON public.page_content FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete page content"
  ON public.page_content FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Study groups
CREATE TABLE public.study_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  objectives text[] NOT NULL DEFAULT '{}',
  participants text[] NOT NULL DEFAULT '{}',
  cycles jsonb NOT NULL DEFAULT '[]'::jsonb,
  email text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.study_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Study groups are publicly readable"
  ON public.study_groups FOR SELECT USING (true);
CREATE POLICY "Admins can insert study groups"
  ON public.study_groups FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update study groups"
  ON public.study_groups FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete study groups"
  ON public.study_groups FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Radio episodes
CREATE TABLE public.radio_episodes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_number integer NOT NULL DEFAULT 1,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  date_label text NOT NULL DEFAULT '',
  duration_label text NOT NULL DEFAULT '',
  spotify_url text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.radio_episodes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Radio episodes are publicly readable"
  ON public.radio_episodes FOR SELECT USING (true);
CREATE POLICY "Admins can insert radio episodes"
  ON public.radio_episodes FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update radio episodes"
  ON public.radio_episodes FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete radio episodes"
  ON public.radio_episodes FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
