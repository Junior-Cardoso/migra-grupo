update public.page_content
set content = jsonb_set(content, '{members,1,role}', '"Coordenadora"')
where page = 'inicio' and section_key = 'equipe';