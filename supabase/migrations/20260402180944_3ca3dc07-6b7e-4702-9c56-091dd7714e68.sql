
ALTER TABLE public.videos ADD COLUMN section text;
ALTER TABLE public.videos ADD COLUMN sort_order integer NOT NULL DEFAULT 0;

UPDATE public.videos SET section = 'Curso de Extensão: Questão Migratória' WHERE category = 'Aulas';
UPDATE public.videos SET section = 'Así Pasó' WHERE category = 'Narrativas Migrantes';

INSERT INTO public.videos (title, youtube_id, date, category, description, section, sort_order)
VALUES (
  'Así Pasó - Documentário',
  'VN52Uoe5m6A',
  '2024',
  NULL,
  'Documentário Así Pasó',
  'Así Pasó',
  -1
);
