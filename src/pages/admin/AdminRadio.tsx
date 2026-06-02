import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Plus, Trash2, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

interface Episode {
  id: string;
  episode_number: number;
  title: string;
  description: string;
  date_label: string;
  duration_label: string;
  spotify_url: string | null;
  sort_order: number;
}

const empty: Omit<Episode, "id"> = {
  episode_number: 1, title: "", description: "", date_label: "", duration_label: "", spotify_url: "", sort_order: 0,
};

const AdminRadio = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Episode | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<Episode, "id">>(empty);
  const [saving, setSaving] = useState(false);
  const [showId, setShowId] = useState("");
  const [aboutTitle, setAboutTitle] = useState("Sobre o projeto");
  const [aboutParagraphs, setAboutParagraphs] = useState<string[]>([]);
  const [savingAbout, setSavingAbout] = useState(false);

  const { data: episodes = [], isLoading } = useQuery({
    queryKey: ["radio_episodes"],
    queryFn: async () => {
      const { data, error } = await supabase.from("radio_episodes").select("*").order("sort_order");
      if (error) throw error;
      return data as Episode[];
    },
  });

  // Spotify show ID stored as page_content
  const { data: showCfg } = useQuery({
    queryKey: ["page_content", "radio", "show"],
    queryFn: async () => {
      const { data } = await supabase.from("page_content").select("content").eq("page", "radio").eq("section_key", "show").maybeSingle();
      const id = (data?.content as any)?.spotifyShowId ?? "";
      setShowId(id);
      return { spotifyShowId: id };
    },
  });

  const saveShowId = async () => {
    const { error } = await supabase.from("page_content").upsert(
      { page: "radio", section_key: "show", content: { spotifyShowId: showId }, updated_at: new Date().toISOString() },
      { onConflict: "page,section_key" }
    );
    if (error) return toast.error(error.message);
    toast.success("Show do Spotify salvo!");
    qc.invalidateQueries({ queryKey: ["page_content", "radio"] });
  };

  const openNew = () => {
    setEditing(null);
    setForm({ ...empty, sort_order: episodes.length, episode_number: episodes.length + 1 });
    setOpen(true);
  };
  const openEdit = (ep: Episode) => { setEditing(ep); setForm({ ...ep, spotify_url: ep.spotify_url ?? "" }); setOpen(true); };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { ...form, spotify_url: form.spotify_url || null };
      if (editing) {
        const { error } = await supabase.from("radio_episodes").update(payload).eq("id", editing.id);
        if (error) throw error;
        toast.success("Episódio atualizado!");
      } else {
        const { error } = await supabase.from("radio_episodes").insert(payload);
        if (error) throw error;
        toast.success("Episódio criado!");
      }
      setOpen(false);
      qc.invalidateQueries({ queryKey: ["radio_episodes"] });
    } catch (e: any) { toast.error(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este episódio?")) return;
    const { error } = await supabase.from("radio_episodes").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Episódio excluído.");
    qc.invalidateQueries({ queryKey: ["radio_episodes"] });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide">Rádio MIGRA</h1>
          <p className="text-muted-foreground text-sm mt-1">Gerencie episódios e o ID do show no Spotify.</p>
        </div>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" /> Novo episódio</Button>
      </div>

      <Card className="p-5 mb-6">
        <Label className="text-xs uppercase tracking-wider text-muted-foreground">Spotify Show ID</Label>
        <div className="flex gap-2 mt-2">
          <Input value={showId} onChange={(e) => setShowId(e.target.value)} placeholder="ID do show no Spotify" />
          <Button onClick={saveShowId}><Save className="h-4 w-4 mr-1.5" /> Salvar</Button>
        </div>
        <p className="text-[11px] text-muted-foreground mt-2">Encontre em: open.spotify.com/show/<strong>SHOW_ID</strong></p>
      </Card>

      {isLoading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>
      ) : episodes.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">Nenhum episódio cadastrado ainda.</Card>
      ) : (
        <div className="space-y-2">
          {episodes.map((ep) => (
            <Card key={ep.id} className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">#{ep.episode_number}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{ep.title}</h3>
                <p className="text-muted-foreground text-xs truncate mt-0.5">{ep.description}</p>
                <div className="flex gap-3 text-[11px] text-muted-foreground/70 mt-1">
                  <span>{ep.date_label}</span><span>{ep.duration_label}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="icon" onClick={() => openEdit(ep)}><Edit className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(ep.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader><DialogTitle>{editing ? "Editar episódio" : "Novo episódio"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-3">
              <div><Label>Número</Label><Input type="number" value={form.episode_number} onChange={(e) => setForm({ ...form, episode_number: Number(e.target.value) })} /></div>
              <div><Label>Título</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            </div>
            <div><Label>Descrição</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Data (label)</Label><Input value={form.date_label} onChange={(e) => setForm({ ...form, date_label: e.target.value })} placeholder="Mar 2026" /></div>
              <div><Label>Duração</Label><Input value={form.duration_label} onChange={(e) => setForm({ ...form, duration_label: e.target.value })} placeholder="32 min" /></div>
            </div>
            <div><Label>Link do Spotify (opcional)</Label><Input value={form.spotify_url ?? ""} onChange={(e) => setForm({ ...form, spotify_url: e.target.value })} placeholder="https://open.spotify.com/episode/..." /></div>
            <div><Label>Ordem</Label><Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}><X className="h-4 w-4 mr-1.5" />Cancelar</Button>
            <Button onClick={handleSave} disabled={saving || !form.title}>
              {saving ? <Loader2 className="h-4 w-4 mr-1.5 animate-spin" /> : <Save className="h-4 w-4 mr-1.5" />} Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminRadio;
