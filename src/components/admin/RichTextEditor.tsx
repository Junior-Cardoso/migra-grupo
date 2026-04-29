import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Bold, Italic, Eraser, Type } from "lucide-react";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * Cores disponíveis — mapeadas para HSL real das tokens do design system,
 * para que o conteúdo HTML salvo continue exibindo a cor mesmo fora do contexto Tailwind.
 * Nota: as cores são "snapshot" das tokens em index.css. Se as tokens mudarem,
 * conteúdos antigos manterão a cor antiga (escolha consciente para evitar surpresas visuais).
 */
const COLOR_PRESETS = [
  { label: "Padrão", value: "", swatch: "hsl(var(--foreground))" },
  { label: "Destaque (primária)", value: "hsl(195 75% 35%)", swatch: "hsl(var(--primary))" },
  { label: "Dourado", value: "hsl(43 74% 49%)", swatch: "hsl(var(--accent))" },
  { label: "Suave", value: "hsl(215 16% 47%)", swatch: "hsl(var(--muted-foreground))" },
];

interface Props {
  label: string;
  value: string;
  onChange: (html: string) => void;
  maxLen?: number;
  hint?: string;
  minHeight?: number;
}

export const RichTextEditor = ({ label, value, onChange, maxLen, hint, minHeight = 120 }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        blockquote: false,
        codeBlock: false,
        horizontalRule: false,
      }),
      TextStyle,
      Color,
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none focus:outline-none px-3 py-2 text-sm",
          "[&_p]:my-1 [&_strong]:font-semibold"
        ),
        style: `min-height: ${minHeight}px;`,
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // TipTap returns "<p></p>" for empty — normalize to ""
      onChange(html === "<p></p>" ? "" : html);
    },
  });

  // Sync external value changes (e.g. reset, undo)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current && value !== (current === "<p></p>" ? "" : current)) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;

  // Plain text length for character counter (HTML tags don't count)
  const plainLen = editor.getText().length;
  const overLimit = maxLen != null && plainLen > maxLen;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-medium text-foreground">{label}</Label>
        {maxLen != null && (
          <span className={cn("text-[10px]", overLimit ? "text-destructive" : "text-muted-foreground")}>
            {plainLen}/{maxLen}
          </span>
        )}
      </div>

      <div className={cn(
        "rounded-md border bg-background overflow-hidden",
        overLimit ? "border-destructive" : "border-input"
      )}>
        <TooltipProvider delayDuration={200}>
          <div className="flex items-center gap-0.5 px-1.5 py-1 border-b border-border bg-muted/40">
            <ToolbarBtn
              active={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
              tip="Negrito (Ctrl+B)"
            >
              <Bold className="h-3.5 w-3.5" />
            </ToolbarBtn>
            <ToolbarBtn
              active={editor.isActive("italic")}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              tip="Itálico (Ctrl+I)"
            >
              <Italic className="h-3.5 w-3.5" />
            </ToolbarBtn>

            <div className="w-px h-4 bg-border mx-1" />

            <span className="flex items-center gap-1 pl-1 pr-1.5">
              <Type className="h-3 w-3 text-muted-foreground" />
              {COLOR_PRESETS.map((c) => (
                <Tooltip key={c.label}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => {
                        if (c.value) editor.chain().focus().setColor(c.value).run();
                        else editor.chain().focus().unsetColor().run();
                      }}
                      className="h-4 w-4 rounded-full border border-border hover:scale-110 transition-transform"
                      style={{ background: c.swatch }}
                      aria-label={`Cor ${c.label}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-[11px]">{c.label}</TooltipContent>
                </Tooltip>
              ))}
            </span>

            <div className="w-px h-4 bg-border mx-1" />

            <ToolbarBtn
              onClick={() =>
                editor.chain().focus().unsetAllMarks().clearNodes().run()
              }
              tip="Limpar formatação"
            >
              <Eraser className="h-3.5 w-3.5" />
            </ToolbarBtn>
          </div>
        </TooltipProvider>

        <EditorContent editor={editor} />
      </div>

      {hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}
      {!hint && (
        <p className="text-[10px] text-muted-foreground">
          Selecione o texto e use os botões acima para aplicar negrito, itálico ou cor.
        </p>
      )}
    </div>
  );
};

const ToolbarBtn = ({
  active,
  onClick,
  tip,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  tip: string;
  children: React.ReactNode;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onClick}
        className={cn("h-7 w-7 p-0", active && "bg-primary/15 text-primary")}
      >
        {children}
      </Button>
    </TooltipTrigger>
    <TooltipContent side="top" className="text-[11px]">{tip}</TooltipContent>
  </Tooltip>
);
