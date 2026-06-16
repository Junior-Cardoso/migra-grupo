
DROP POLICY IF EXISTS "Public can read blog covers" ON storage.objects;
CREATE POLICY "Public can read blog covers" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'blog-covers');

DROP POLICY IF EXISTS "Admins can upload blog covers" ON storage.objects;
CREATE POLICY "Admins can upload blog covers" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can update blog covers" ON storage.objects;
CREATE POLICY "Admins can update blog covers" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can delete blog covers" ON storage.objects;
CREATE POLICY "Admins can delete blog covers" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'::app_role));
