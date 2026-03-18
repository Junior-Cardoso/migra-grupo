import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogPosts, categories } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  Link2,
  List,
  ListOrdered,
  Quote,
  Code,
  Eye,
  Edit3,
  ArrowLeft,
  X,
  Save,
} from "lucide-react";
import { toast } from "sonner";

const AdminBlogEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const existingPost = slug ? blogPosts.find((p) => p.slug === slug) : null;

  const [title, setTitle] = useState(existingPost?.title ?? "");
  const [postSlug, setPostSlug] = useState(existingPost?.slug ?? "");
  const [category, setCategory] = useState(existingPost?.category ?? "");
  const [tags, setTags] = useState<string[]>(existingPost?.tags ?? []);
  const [tagInput, setTagInput] = useState("");
  const [authorName, setAuthorName] = useState(existingPost?.author.name ?? "");
  const [date, setDate] = useState(existingPost?.date ?? "");
  const [excerpt, setExcerpt] = useState(existingPost?.excerpt ?? "");
  const [content, setContent] = useState(
    existingPost
      ? "## Conteúdo do artigo\n\nEdite o conteúdo aqui usando **Markdown**.\n\n- Item 1\n- Item 2\n\n> Citação de exemplo"
      : ""
  );
  const [previewMode, setPreviewMode] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!existingPost) {
      const generated = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .slice(0, 60);
      setPostSlug(generated);
    }
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase();
    if (t && !tags.includes(t)) {
      setTags([...tags, t]);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // Markdown toolbar actions
  const insertMarkdown = (before: string, after: string = "") => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const replacement = before + (selected || "texto") + after;
    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + (selected || "texto").length
      );
    }, 0);
  };

  const toolbarActions = [
    { icon: Heading2, label: "H2", action: () => insertMarkdown("## ", "\n") },
    { icon: Heading3, label: "H3", action: () => insertMarkdown("### ", "\n") },
    { icon: Bold, label: "Bold", action: () => insertMarkdown("**", "**") },
    { icon: Italic, label: "Italic", action: () => insertMarkdown("*", "*") },
    { icon: Link2, label: "Link", action: () => insertMarkdown("[", "](url)") },
    { icon: List, label: "Lista", action: () => insertMarkdown("- ", "\n") },
    { icon: ListOrdered, label: "Lista Ord.", action: () => insertMarkdown("1. ", "\n") },
    { icon: Quote, label: "Citação", action: () => insertMarkdown("> ", "\n") },
    { icon: Code, label: "Código", action: () => insertMarkdown("`", "`") },
  ];

  // Simple markdown to HTML renderer
  const renderedContent = useMemo(() => {
    let html = content
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline">$1</a>')
      .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br>");
    return `<p>${html}</p>`;
  }, [content]);

  const handleSave = () => {
    if (!title || !content) {
      toast.error("Preencha pelo menos o título e o conteúdo.");
      return;
    }
    toast.success("Artigo salvo localmente! (conexão com backend em breve)");
  };

  const authorInitials = authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin/blog")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide">
          {existingPost ? "Editar Artigo" : "Novo Artigo"}
        </h1>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
            {previewMode ? <Edit3 className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
            {previewMode ? "Editar" : "Preview"}
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </Button>
        </div>
      </div>

      {previewMode ? (
        /* Preview Mode */
        <Card className="p-8 max-w-3xl mx-auto">
          <div className="mb-4">
            {category && (
              <Badge variant="secondary" className="mb-2">
                {category}
              </Badge>
            )}
            <h1 className="font-heading text-2xl font-bold uppercase tracking-wide">
              {title || "Sem título"}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-white text-xs font-semibold">{authorInitials || "?"}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{authorName || "Autor"}</p>
                <p className="text-xs text-muted-foreground">{date || "Data"}</p>
              </div>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="border-t pt-6">
            <p className="text-muted-foreground italic mb-6">{excerpt}</p>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
          </div>
        </Card>
      ) : (
        /* Editor Mode */
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Título *</Label>
                <Input
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Título do artigo"
                  className="text-lg font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={postSlug}
                  onChange={(e) => setPostSlug(e.target.value)}
                  placeholder="url-do-artigo"
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label>Resumo</Label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Breve resumo do artigo..."
                  rows={2}
                />
              </div>
            </Card>

            <Card className="p-4">
              <Label className="mb-2 block">Conteúdo *</Label>
              {/* Toolbar */}
              <div className="flex flex-wrap gap-1 mb-2 p-2 bg-muted rounded-md">
                {toolbarActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={action.action}
                    type="button"
                    title={action.label}
                  >
                    <action.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
              <Textarea
                id="content-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva o conteúdo usando Markdown..."
                className="min-h-[400px] font-mono text-sm"
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Adicionar tag"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button type="button" variant="outline" size="sm" onClick={addTag}>
                    +
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Autor</Label>
                <Input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Nome do autor"
                />
              </div>

              <div className="space-y-2">
                <Label>Data</Label>
                <Input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Ex: 15 Mar 2026"
                />
              </div>
            </Card>

            {/* Live preview card */}
            <Card className="p-4">
              <p className="text-xs text-muted-foreground mb-2 uppercase font-medium tracking-wider">
                Preview do card
              </p>
              <div className="border rounded-md overflow-hidden">
                <div className="aspect-[16/10] bg-secondary/80 flex items-center justify-center">
                  <span className="text-white/20 text-xs">Imagem de capa</span>
                </div>
                <div className="p-3">
                  {category && (
                    <Badge variant="secondary" className="text-xs mb-1">
                      {category}
                    </Badge>
                  )}
                  <p className="font-heading text-xs font-bold uppercase tracking-wide line-clamp-2">
                    {title || "Título do artigo"}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">
                    {excerpt || "Resumo do artigo..."}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogEditor;
