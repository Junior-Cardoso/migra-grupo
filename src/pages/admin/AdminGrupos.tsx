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

interface Cycle { name: string; period: string; }
interface StudyGroup {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  participants: string[];
  cycles: Cycle[];
  email: string | null;
  sort_order: number;
}

const empty: Omit<StudyGroup, "id"> = {
  title: "", description: "", objectives: [], participants: [], cycles: [], email: "", sort_order: 0,
};

const AdminGrupos = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<StudyGroup | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Omit<StudyGroup, "id">>(empty);
  const [objStr, setObjStr] = useState("");
  const [partStr, setPartStr] = useState("");
  const [cyclesStr, setCyclesStr] = useState("");
  const [saving, setSaving] = useState(false);

  const { data: groups = [], isLoading } = useQuery({
    queryKey: ["study_groups"],
    queryFn: async () => {
      const { data, error } = await supabase.from("study_groups").select("*").order("sort_order");
      if (error) throw error;
      return data as StudyGroup[];
    },
  });

  const openNew = () => {
    setEditing(null);
    setForm({ ...empty, sort_order: groups.length });
    setObjStr(""); setPartStr(""); setCyclesStr("");
    setOpen(true);
  };
  const openEdit = (g: StudyGroup) => {
    setEditing(g);
    setForm({ ...g });
    setObjStr(g.objectives.join("\n"));
    setPartStr(g.participants.join("\n"));
    setCyclesStr(g.cycles.map((c) => `${c.name} | ${c.period}`).join("\n"));
    setOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        description: form.description,
        objectives: objStr.split("\n").map((s) => s.trim()).filter(Boolean),
        participants: partStr.split("\n").map((s) => s.trim()).filter(Boolean),
        cycles: cyclesStr.split("\n").map((l) => {
          const [name, period] = l.split("|").map((s) => s?.trim() ?? "");
          return name ? { name, period: period ?? "" } : null;
        }).filter(Boolean),
        email: form.email || null,
        sort_order: form.sort_order,
      };
      if (editing) {
        const { error } = await supabase.from("study_groups").update(payload).eq("id", editing.id);
        if (error) throw error;
        toast.success("Grupo atualizado!");
      } else {
        const { error } = await supabase.from("study_groups").insert(payload);
        if (error) throw error;
        toast.success("Grupo criado!");
      }
      setOpen(false);
      qc.invalidateQueries({ queryKey: ["study_groups"] });
    } catch (e: any) { toast.error(e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este grupo?")) return;
    const { error } = await supabase.from("study_groups").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Grupo excluído.");
    qc.invalidateQueries({ queryKey: ["study_groups"] });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide">Grupos de Estudo</h1>
          <p className="text-muted-foreground text-sm mt-1">Gerencie os grupos exibidos na página pública.</p>
        </div>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" /> Novo grupo</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>
      ) : groups.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">Nenhum grupo cadastrado ainda.</Card>
      ) : (
        <div className="space-y-3">
          {groups.map((g) => (
            <Card key={g.id} className="p-5 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide">{g.title}</h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{g.description}</p>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                  <span>{g.objectives.length} objetivos</span>
                  <span>{g.participants.length} participantes</span>
                  <span>{g.cycles.length} ciclos</span>
                  {g.email && <span>{g.email}</span>}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="icon" onClick={() => openEdit(g)}><Edit className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(g.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Editar grupo" : "Novo grupo"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div><Label>Título</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div><Label>Descrição</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
            <div><Label>Objetivos (um por linha)</Label><Textarea value={objStr} onChange={(e) => setObjStr(e.target.value)} rows={4} /></div>
            <div><Label>Participantes (um por linha)</Label><Textarea value={partStr} onChange={(e) => setPartStr(e.target.value)} rows={3} /></div>
            <div>
              <Label>Ciclos (um por linha — formato: <code>Nome | Período</code>)</Label>
              <Textarea value={cyclesStr} onChange={(e) => setCyclesStr(e.target.value)} rows={3} placeholder="Ciclo 1 — Tema | Mar–Jun 2026" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Email de contato</Label><Input type="email" value={form.email ?? ""} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="grupo@ufpe.br" /></div>
              <div><Label>Ordem</Label><Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} /></div>
            </div>
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

export default AdminGrupos;
