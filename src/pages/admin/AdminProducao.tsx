import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Plus, Pencil, Trash2, Search, Loader2, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { FIXED_CATEGORIES } from "@/data/acervoPublications";

interface PubForm {
  title: string;
  type: string;
  subcategory: string;
  authors: string;
  year: string;
  abstract: string;
  external_url: string;
  tags: string;
  thematic_categories: string;
}

const emptyForm: PubForm = {
  title: "", type: "", subcategory: "", authors: "", year: "", abstract: "",
  external_url: "", tags: "", thematic_categories: "",
};

const AdminProducao = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<PubForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { data: publications = [], isLoading } = useQuery({
    queryKey: ["admin-publications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .order("year", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // Existing subcategories for datalist suggestions
  const existingSubcategories = [...new Set(
    publications.map((p: any) => p.subcategory).filter(Boolean)
  )].sort();

  const filtered = publications.filter((p: any) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.some((a: string) => a.toLowerCase().includes(search.toLowerCase()));
    const matchType = !activeType || p.type === activeType;
    return matchSearch && matchType;
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload: any = {
        title: form.title,
        type: form.type,
        subcategory: form.subcategory || null,
        authors: form.authors.split(",").map((s) => s.trim()).filter(Boolean),
        year: parseInt(form.year),
        abstract: form.abstract,
        external_url: form.external_url || null,
        tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
        thematic_categories: form.thematic_categories.split(",").map((s) => s.trim()).filter(Boolean),
      };
      if (editingId) {
        const { error } = await supabase.from("publications").update(payload).eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("publications").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-publications"] });
      queryClient.invalidateQueries({ queryKey: ["publications"] });
      toast.success(editingId ? "Publicação atualizada!" : "Publicação criada!");
      closeDialog();
    },
    onError: (err: any) => toast.error("Erro: " + err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("publications").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-publications"] });
      queryClient.invalidateQueries({ queryKey: ["publications"] });
      toast.success("Publicação excluída!");
      setDeleteId(null);
    },
    onError: (err: any) => toast.error("Erro: " + err.message),
  });

  const openNew = () => { setEditingId(null); setForm(emptyForm); setDialogOpen(true); };

  const openEdit = (pub: any) => {
    setEditingId(pub.id);
    setForm({
      title: pub.title,
      type: pub.type,
      subcategory: pub.subcategory ?? "",
      authors: pub.authors.join(", "),
      year: String(pub.year),
      abstract: pub.abstract ?? "",
      external_url: pub.external_url ?? "",
      tags: pub.tags.join(", "),
      thematic_categories: pub.thematic_categories.join(", "),
    });
    setDialogOpen(true);
  };

  const closeDialog = () => { setDialogOpen(false); setEditingId(null); setForm(emptyForm); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.type || !form.year) {
      toast.error("Preencha título, categoria e ano."); return;
    }
    saveMutation.mutate();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide">Produção</h1>
        <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" />Nova Publicação</Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative sm:max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant={activeType === null ? "default" : "outline"} className="cursor-pointer" onClick={() => setActiveType(null)}>
            Todos ({publications.length})
          </Badge>
          {FIXED_CATEGORIES.map((t) => {
            const count = publications.filter((p: any) => p.type === t).length;
            return (
              <Badge key={t} variant={activeType === t ? "default" : "outline"} className="cursor-pointer" onClick={() => setActiveType(activeType === t ? null : t)}>
                {t} ({count})
              </Badge>
            );
          })}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
          <p className="text-muted-foreground">Nenhuma publicação encontrada.</p>
        </div>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead className="hidden md:table-cell">Categoria</TableHead>
                <TableHead className="hidden md:table-cell">Ano</TableHead>
                <TableHead className="hidden lg:table-cell">Autores</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((pub: any) => (
                <TableRow key={pub.id}>
                  <TableCell>
                    <p className="font-medium text-sm line-clamp-2">{pub.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 md:hidden">{pub.type} • {pub.year}</p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary">{pub.type}</Badge>
                    {pub.subcategory && <p className="text-xs text-muted-foreground mt-1">{pub.subcategory}</p>}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{pub.year}</TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground text-xs max-w-[200px] truncate">{pub.authors.join(", ")}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(pub)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => setDeleteId(pub.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading uppercase tracking-wide">{editingId ? "Editar Publicação" : "Nova Publicação"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Título *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Título da publicação" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Categoria *</Label>
                <Select value={form.type} onValueChange={(val) => setForm({ ...form, type: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {FIXED_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Ano *</Label>
                <Input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} placeholder="Ex: 2024" type="number" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Subcategoria</Label>
              <Input
                value={form.subcategory}
                onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                placeholder="Ex: Artigo em periódico, Dissertação de mestrado..."
                list="subcategory-list"
              />
              <datalist id="subcategory-list">
                {existingSubcategories.map((s) => <option key={s as string} value={s as string} />)}
              </datalist>
              <p className="text-xs text-muted-foreground">Opcional. Selecione uma existente ou digite uma nova.</p>
            </div>
            <div className="space-y-2">
              <Label>Autores (separados por vírgula)</Label>
              <Input value={form.authors} onChange={(e) => setForm({ ...form, authors: e.target.value })} placeholder="Ex: Sofia Zanforlin, Jessica Retis" />
            </div>
            <div className="space-y-2">
              <Label>Resumo</Label>
              <Textarea value={form.abstract} onChange={(e) => setForm({ ...form, abstract: e.target.value })} placeholder="Breve resumo da publicação" rows={4} />
            </div>
            <div className="space-y-2">
              <Label>URL externa</Label>
              <Input value={form.external_url} onChange={(e) => setForm({ ...form, external_url: e.target.value })} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label>Categorias temáticas (separadas por vírgula)</Label>
              <Input value={form.thematic_categories} onChange={(e) => setForm({ ...form, thematic_categories: e.target.value })} placeholder="Ex: Comunicação, Interculturalidade" />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={closeDialog}>Cancelar</Button>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : editingId ? "Salvar" : "Criar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir publicação?</AlertDialogTitle>
            <AlertDialogDescription>Esta ação não pode ser desfeita.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => deleteId && deleteMutation.mutate(deleteId)}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminProducao;
