import { ReactNode } from "react";
import { Loader2, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  isDirty: boolean;
  isSaving: boolean;
  onSave: () => void;
  editor: ReactNode;
  preview: ReactNode;
  previewUrl?: string;
}

const EditorShell = ({ title, isDirty, isSaving, onSave, editor, preview, previewUrl }: Props) => (
  <div className="-m-6 h-[calc(100vh-3.5rem)] flex flex-col bg-background">
    <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-background sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h1 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">{title}</h1>
        {isDirty && <span className="text-xs text-amber-600 dark:text-amber-400">• alterações não salvas</span>}
      </div>
      <div className="flex items-center gap-2">
        {previewUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={previewUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="h-3.5 w-3.5 mr-1.5" /> Ver no site
            </a>
          </Button>
        )}
        <Button size="sm" onClick={onSave} disabled={!isDirty || isSaving}>
          {isSaving ? <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
          Salvar
        </Button>
      </div>
    </div>
    <div className="flex-1 grid lg:grid-cols-[420px_1fr] overflow-hidden">
      <aside className="border-r border-border overflow-y-auto p-5 space-y-6 bg-muted/20">
        {editor}
      </aside>
      <main className="overflow-y-auto bg-muted/40">
        <div className="sticky top-0 z-10 bg-muted/80 backdrop-blur-sm px-4 py-2 border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
          Pré-visualização
        </div>
        <div className="p-4">
          <div className="rounded-lg overflow-hidden border border-border bg-background shadow-sm">
            {preview}
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default EditorShell;
