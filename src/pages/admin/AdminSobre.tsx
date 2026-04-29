import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Save, RefreshCw, ExternalLink, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { EditField } from "@/components/admin/EditField";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { LinkHelp } from "@/components/admin/LinkHelp";
import { defaultSobreContent, type SobreContent } from "@/data/defaultContent";
import { savePageSection } from "@/hooks/usePageContent";

const PAGE = "sobre";

const AdminSobre = () => {
  const queryClient = useQueryClient();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [content, setContent] = useState<SobreContent>(defaultSobreContent);
  const [original, setOriginal] = useState<SobreContent>(defaultSobreContent);
  const [saving, setSaving] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_page_content", PAGE],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_content").select("section_key, content").eq("page", PAGE);
      if (error) throw error;
      const merged: any = JSON.parse(JSON.stringify(defaultSobreContent));
      (data ?? []).forEach((row: any) => {
        merged[row.section_key] = { ...merged[row.section_key], ...row.content };
      });
      return merged as SobreContent;
    },
  });

  useEffect(() => { if (data) { setContent(data); setOriginal(data); } }, [data]);
  const isDirty = JSON.stringify(content) !== JSON.stringify(original);

  const handleSave = async () => {
    setSaving(true);
    try {
      const sections = Object.keys(content) as (keyof SobreContent)[];
      await Promise.all(sections.map((k) => savePageSection(PAGE, k as string, content[k])));
      setOriginal(content);
      queryClient.invalidateQueries({ queryKey: ["page_content", PAGE] });
      queryClient.invalidateQueries({ queryKey: ["admin_page_content", PAGE] });
      toast.success("Página Sobre salva!");
      setTimeout(() => iframeRef.current?.contentWindow?.location.reload(), 300);
    } catch (e: any) {
      toast.error(e.message ?? "Erro ao salvar");
    } finally { setSaving(false); }
  };

  if (isLoading) return <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>;

  const update = <K extends keyof SobreContent>(key: K, partial: Partial<SobreContent[K]>) =>
    setContent((c) => ({ ...c, [key]: { ...c[key], ...partial } }));

  return (
    <div className="-m-6 h-[calc(100vh-3.5rem)] flex flex-col bg-background">
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">Editar Sobre</h1>
          {isDirty && <Badge variant="outline" className="text-amber-600 border-amber-300">não salvo</Badge>}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => iframeRef.current?.contentWindow?.location.reload()}>
            <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Recarregar
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/sobre" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Abrir</a>
          </Button>
          <Button size="sm" onClick={handleSave} disabled={!isDirty || saving}>
            {saving ? <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            Salvar tudo
          </Button>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-[440px_1fr] overflow-hidden">
        <aside className="border-r border-border overflow-y-auto p-4 bg-muted/20">
          <Accordion type="multiple" defaultValue={["hero", "historia"]} className="space-y-3">
            <AccordionItem value="hero" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3"><span className="flex items-center gap-2"><Badge>Hero</Badge><span className="text-sm font-medium">Cabeçalho</span></span></AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.hero.title} onChange={(v) => update("hero", { title: v })} maxLen={50} />
                  <EditField label="Descrição" value={content.hero.description} onChange={(v) => update("hero", { description: v })} multiline maxLen={200} />
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="historia" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3"><span className="flex items-center gap-2"><Badge variant="secondary">História</Badge><span className="text-sm font-medium">Breve História</span></span></AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.historia.title} onChange={(v) => update("historia", { title: v })} maxLen={60} />
                  {content.historia.paragraphs.map((p, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <div className="flex-1">
                        <RichTextEditor label={`Parágrafo ${i + 1}`} value={p} onChange={(v) => {
                          const paragraphs = [...content.historia.paragraphs]; paragraphs[i] = v;
                          update("historia", { paragraphs });
                        }} maxLen={600} />
                      </div>
                      <Button variant="ghost" size="icon" className="mt-6" onClick={() => {
                        const paragraphs = content.historia.paragraphs.filter((_, k) => k !== i);
                        update("historia", { paragraphs });
                      }}><Trash2 className="h-3.5 w-3.5 text-destructive" /></Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => update("historia", { paragraphs: [...content.historia.paragraphs, ""] })}>
                    <Plus className="h-3.5 w-3.5 mr-1.5" /> Adicionar parágrafo
                  </Button>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="coordenacao" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3"><span className="flex items-center gap-2"><Badge variant="outline">Coord.</Badge><span className="text-sm font-medium">Coordenação</span></span></AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título da seção" value={content.coordenacao.title} onChange={(v) => update("coordenacao", { title: v })} maxLen={40} />
                  {content.coordenacao.members.map((m, i) => (
                    <div key={i} className="p-3 bg-background rounded-md border space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Membro {i + 1}</p>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => {
                          const members = content.coordenacao.members.filter((_, k) => k !== i);
                          update("coordenacao", { members });
                        }}><Trash2 className="h-3 w-3 text-destructive" /></Button>
                      </div>
                      {(["name", "role", "area", "bio", "lattes", "orcid"] as const).map((field) => (
                        <EditField key={field} label={field.charAt(0).toUpperCase() + field.slice(1)} value={(m as any)[field] ?? ""} onChange={(v) => {
                          const members = [...content.coordenacao.members]; members[i] = { ...m, [field]: v };
                          update("coordenacao", { members });
                        }} multiline={field === "bio"} maxLen={field === "bio" ? 500 : 100}
                          labelExtra={field === "lattes" || field === "orcid" ? <LinkHelp /> : undefined} />
                      ))}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => update("coordenacao", {
                    members: [...content.coordenacao.members, { name: "Novo membro", role: "", area: "", bio: "", lattes: "#", orcid: "#" }],
                  })}><Plus className="h-3.5 w-3.5 mr-1.5" /> Adicionar membro</Button>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="pessoas" asChild>
              <Card>
                <AccordionTrigger className="px-4 py-3"><span className="flex items-center gap-2"><Badge variant="outline">Pessoas</Badge><span className="text-sm font-medium">Pessoas que passaram</span></span></AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-3">
                  <EditField label="Título" value={content.pessoas.title} onChange={(v) => update("pessoas", { title: v })} maxLen={60} />
                  <EditField label="Descrição" value={content.pessoas.description} onChange={(v) => update("pessoas", { description: v })} multiline maxLen={200} />
                  <div className="space-y-2 pt-2 border-t">
                    {content.pessoas.items.map((p, i) => (
                      <div key={i} className="p-3 bg-background rounded-md border space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Pessoa {i + 1}</p>
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => {
                            const items = content.pessoas.items.filter((_, k) => k !== i);
                            update("pessoas", { items });
                          }}><Trash2 className="h-3 w-3 text-destructive" /></Button>
                        </div>
                        <EditField label="Nome" value={p.name} onChange={(v) => {
                          const items = [...content.pessoas.items]; items[i] = { ...p, name: v };
                          update("pessoas", { items });
                        }} maxLen={60} />
                        <EditField label="Período" value={p.period} onChange={(v) => {
                          const items = [...content.pessoas.items]; items[i] = { ...p, period: v };
                          update("pessoas", { items });
                        }} maxLen={30} />
                        <EditField label="Contribuição" value={p.contribution} onChange={(v) => {
                          const items = [...content.pessoas.items]; items[i] = { ...p, contribution: v };
                          update("pessoas", { items });
                        }} maxLen={100} />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={() => update("pessoas", {
                      items: [...content.pessoas.items, { name: "Nova pessoa", period: "", contribution: "" }],
                    })}><Plus className="h-3.5 w-3.5 mr-1.5" /> Adicionar pessoa</Button>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </aside>

        <main className="bg-muted/40 overflow-hidden flex flex-col">
          <div className="px-4 py-2 border-b border-border bg-muted/80 backdrop-blur-sm text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
            Pré-visualização ao vivo
          </div>
          <div className="flex-1 bg-background">
            <iframe ref={iframeRef} src="/sobre" title="Pré-visualização" className="w-full h-full border-0" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSobre;
