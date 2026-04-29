import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Save, RefreshCw, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditField } from "@/components/admin/EditField";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { LinkHelp } from "@/components/admin/LinkHelp";
import { defaultHomeContent, type HomeContent } from "@/data/defaultContent";
import { savePageSection } from "@/hooks/usePageContent";

const PAGE = "inicio";

const AdminInicio = () => {
  const queryClient = useQueryClient();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [content, setContent] = useState<HomeContent>(defaultHomeContent);
  const [original, setOriginal] = useState<HomeContent>(defaultHomeContent);
  const [saving, setSaving] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_page_content", PAGE],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_content").select("section_key, content").eq("page", PAGE);
      if (error) throw error;
      const merged: any = JSON.parse(JSON.stringify(defaultHomeContent));
      (data ?? []).forEach((row: any) => {
        merged[row.section_key] = { ...merged[row.section_key], ...row.content };
      });
      return merged as HomeContent;
    },
  });

  useEffect(() => {
    if (data) {
      setContent(data);
      setOriginal(data);
    }
  }, [data]);

  const isDirty = JSON.stringify(content) !== JSON.stringify(original);

  const handleSave = async () => {
    setSaving(true);
    try {
      const sections = Object.keys(content) as (keyof HomeContent)[];
      await Promise.all(sections.map((key) => savePageSection(PAGE, key as string, content[key])));
      setOriginal(content);
      queryClient.invalidateQueries({ queryKey: ["page_content", PAGE] });
      queryClient.invalidateQueries({ queryKey: ["admin_page_content", PAGE] });
      toast.success("Conteúdo da Início salvo!");
      setTimeout(() => iframeRef.current?.contentWindow?.location.reload(), 300);
    } catch (e: any) {
      toast.error(e.message ?? "Erro ao salvar");
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>;
  }

  const update = <K extends keyof HomeContent>(key: K, partial: Partial<HomeContent[K]>) =>
    setContent((c) => ({ ...c, [key]: { ...c[key], ...partial } }));

  return (
    <div className="-m-6 h-[calc(100vh-3.5rem)] flex flex-col bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
            Editar Início
          </h1>
          {isDirty && <Badge variant="outline" className="text-amber-600 border-amber-300">não salvo</Badge>}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => iframeRef.current?.contentWindow?.location.reload()}>
            <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Recarregar
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Abrir</a>
          </Button>
          <Button size="sm" onClick={handleSave} disabled={!isDirty || saving}>
            {saving ? <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            Salvar tudo
          </Button>
        </div>
      </div>

      {/* Split */}
      <div className="flex-1 grid lg:grid-cols-[440px_1fr] overflow-hidden">
        <aside className="border-r border-border overflow-y-auto p-4 bg-muted/20">
          <Accordion type="multiple" defaultValue={["hero", "sobre"]} className="space-y-3">
            <AccordionItem value="hero" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge>Hero</Badge><span className="text-sm font-medium">Seção principal</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Subtítulo" value={content.hero.eyebrow} onChange={(v) => update("hero", { eyebrow: v })} maxLen={80} />
                  <EditField label="Título" value={content.hero.title} onChange={(v) => update("hero", { title: v })} maxLen={20} />
                  <EditField label="Descrição" value={content.hero.description} onChange={(v) => update("hero", { description: v })} multiline maxLen={250} />
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t">
                    <EditField label="Botão 1 — texto" value={content.hero.btn1.label} onChange={(v) => update("hero", { btn1: { ...content.hero.btn1, label: v } })} maxLen={30} />
                    <EditField label="Botão 1 — link" value={content.hero.btn1.link} onChange={(v) => update("hero", { btn1: { ...content.hero.btn1, link: v } })} labelExtra={<LinkHelp />} />
                    <EditField label="Botão 2 — texto" value={content.hero.btn2.label} onChange={(v) => update("hero", { btn2: { ...content.hero.btn2, label: v } })} maxLen={30} />
                    <EditField label="Botão 2 — link" value={content.hero.btn2.link} onChange={(v) => update("hero", { btn2: { ...content.hero.btn2, link: v } })} labelExtra={<LinkHelp />} />
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="sobre" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="secondary">Sobre</Badge><span className="text-sm font-medium">Sobre o MIGRA</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.sobre.title} onChange={(v) => update("sobre", { title: v })} maxLen={40} />
                  <RichTextEditor label="Parágrafo 1" value={content.sobre.paragraph1Html} onChange={(v) => update("sobre", { paragraph1Html: v })} maxLen={600} />
                  <RichTextEditor label="Parágrafo 2" value={content.sobre.paragraph2Html} onChange={(v) => update("sobre", { paragraph2Html: v })} maxLen={400} />
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="areas" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">Áreas</Badge><span className="text-sm font-medium">Áreas de Atuação</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.areas.title} onChange={(v) => update("areas", { title: v })} maxLen={40} />
                  <EditField label="Descrição" value={content.areas.description} onChange={(v) => update("areas", { description: v })} multiline maxLen={150} />
                  <div className="space-y-3 pt-2 border-t">
                    {content.areas.items.map((item, i) => (
                      <div key={i} className="p-3 bg-background rounded-md border space-y-2">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Card {i + 1}</p>
                        <EditField label="Título" value={item.title} onChange={(v) => {
                          const items = [...content.areas.items]; items[i] = { ...item, title: v };
                          update("areas", { items });
                        }} maxLen={40} />
                        <EditField label="Descrição" value={item.desc} onChange={(v) => {
                          const items = [...content.areas.items]; items[i] = { ...item, desc: v };
                          update("areas", { items });
                        }} multiline maxLen={180} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="equipe" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">Equipe</Badge><span className="text-sm font-medium">Nossa Equipe</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.equipe.title} onChange={(v) => update("equipe", { title: v })} maxLen={40} />
                  <EditField label="Descrição" value={content.equipe.description} onChange={(v) => update("equipe", { description: v })} multiline maxLen={150} />
                  <div className="space-y-3 pt-2 border-t">
                    {content.equipe.members.map((m, i) => (
                      <div key={i} className="p-3 bg-background rounded-md border space-y-2">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Membro {i + 1}</p>
                        <EditField label="Nome" value={m.name} onChange={(v) => {
                          const members = [...content.equipe.members]; members[i] = { ...m, name: v };
                          update("equipe", { members });
                        }} maxLen={60} />
                        <EditField label="Cargo" value={m.role} onChange={(v) => {
                          const members = [...content.equipe.members]; members[i] = { ...m, role: v };
                          update("equipe", { members });
                        }} maxLen={40} />
                      </div>
                    ))}
                    <p className="text-[10px] text-muted-foreground italic">Fotos das professoras permanecem fixas no design.</p>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="grupos" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">Grupos</Badge><span className="text-sm font-medium">Grupos de Estudo (resumo)</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.grupos.title} onChange={(v) => update("grupos", { title: v })} maxLen={40} />
                  <EditField label="Descrição" value={content.grupos.description} onChange={(v) => update("grupos", { description: v })} multiline maxLen={150} />
                  <EditField label="Texto do botão" value={content.grupos.btnLabel} onChange={(v) => update("grupos", { btnLabel: v })} maxLen={40} />
                  <div className="space-y-3 pt-2 border-t">
                    {content.grupos.items.map((item, i) => (
                      <div key={i} className="p-3 bg-background rounded-md border space-y-2">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Card {i + 1}</p>
                        <EditField label="Título" value={item.title} onChange={(v) => {
                          const items = [...content.grupos.items]; items[i] = { ...item, title: v };
                          update("grupos", { items });
                        }} maxLen={50} />
                        <EditField label="Descrição" value={item.desc} onChange={(v) => {
                          const items = [...content.grupos.items]; items[i] = { ...item, desc: v };
                          update("grupos", { items });
                        }} multiline maxLen={200} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="producao" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">Produção</Badge><span className="text-sm font-medium">Seção Produção</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.producao.title} onChange={(v) => update("producao", { title: v })} maxLen={40} />
                  <EditField label="Descrição" value={content.producao.description} onChange={(v) => update("producao", { description: v })} multiline maxLen={150} />
                  <EditField label="Texto do botão" value={content.producao.btnLabel} onChange={(v) => update("producao", { btnLabel: v })} maxLen={40} />
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="blog" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">Blog</Badge><span className="text-sm font-medium">Seção Blog</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.blog.title} onChange={(v) => update("blog", { title: v })} maxLen={40} />
                  <EditField label="Descrição" value={content.blog.description} onChange={(v) => update("blog", { description: v })} multiline maxLen={150} />
                  <EditField label="Texto do botão" value={content.blog.btnLabel} onChange={(v) => update("blog", { btnLabel: v })} maxLen={40} />
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="cta" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="flex items-center gap-2"><Badge variant="outline">CTA</Badge><span className="text-sm font-medium">Chamada final</span></span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.cta.title} onChange={(v) => update("cta", { title: v })} maxLen={50} />
                  <EditField label="Descrição" value={content.cta.description} onChange={(v) => update("cta", { description: v })} multiline maxLen={300} />
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </aside>

        <main className="bg-muted/40 overflow-hidden flex flex-col">
          <div className="px-4 py-2 border-b border-border bg-muted/80 backdrop-blur-sm text-[11px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-between">
            <span>Pré-visualização ao vivo</span>
            <span className="text-[10px] normal-case font-normal">Atualiza após salvar</span>
          </div>
          <div className="flex-1 bg-background">
            <iframe
              ref={iframeRef}
              src="/"
              title="Pré-visualização"
              className="w-full h-full border-0"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminInicio;
