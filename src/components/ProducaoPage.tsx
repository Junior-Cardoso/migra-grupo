import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Publication, ProducaoPageKey } from "@/data/acervoPublications";
import { FIXED_CATEGORIES } from "@/data/acervoPublications";
import {
  Search,
  ExternalLink,
  BookOpen,
  X,
  SlidersHorizontal,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ITEMS_PER_PAGE = 12;

const CATEGORY_BADGE_CLASSES: Record<string, string> = {
  Pesquisas: "bg-[hsl(180_100%_22%)] text-white",
  Extensão: "bg-[hsl(210_100%_18%)] text-white",
  Artigos: "bg-[hsl(35_30%_55%)] text-white",
  "Trabalhos Completos em Eventos": "bg-[hsl(40_45%_75%)] text-[hsl(210_100%_15%)]",
  "Teses e Dissertações": "bg-[hsl(0_0%_10%)] text-white",
  "Capítulos de Livro": "bg-[hsl(180_60%_35%)] text-white",
  Livros: "bg-[hsl(210_70%_30%)] text-white",
};

const categoryBadgeClass = (type: string) =>
  CATEGORY_BADGE_CLASSES[type] ?? "bg-muted text-foreground";

interface Props {
  pageKey: ProducaoPageKey;
  eyebrow: string;
  title: string;
  description: string;
  characterLeft?: string;
  characterRight?: string;
  portraitImage?: string;
  tint?: "navy" | "teal" | "muted";
}

export default function ProducaoPage({
  pageKey,
  eyebrow,
  title,
  description,
  characterLeft,
  characterRight,
  portraitImage,
  tint = "muted",
}: Props) {

  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [activeSubcategories, setActiveSubcategories] = useState<string[]>([]);
  const [activeAuthors, setActiveAuthors] = useState<string[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [expandedTypes, setExpandedTypes] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const { data: rawPublications = [], isLoading } = useQuery({
    queryKey: ["publications", pageKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .eq("page", pageKey)
        .order("year", { ascending: false });
      if (error) throw error;
      return data as Publication[];
    },
  });

  const thematicCategories = useMemo(() => {
    const set = new Set<string>();
    rawPublications.forEach((p) => p.thematic_categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [rawPublications]);

  const allAuthors = useMemo(() => {
    const set = new Set<string>();
    rawPublications.forEach((p) => p.authors.forEach((a) => set.add(a)));
    return Array.from(set).sort();
  }, [rawPublications]);

  const subcategoriesByType = useMemo(() => {
    const map: Record<string, string[]> = {};
    FIXED_CATEGORIES.forEach((t) => {
      const subs = new Set<string>();
      rawPublications.forEach((p) => {
        if (p.type === t && p.subcategory) subs.add(p.subcategory);
      });
      map[t] = Array.from(subs).sort();
    });
    return map;
  }, [rawPublications]);

  const toggleItem = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setPage(1);
  };

  const hasFilters =
    !!search ||
    activeTypes.length > 0 ||
    activeSubcategories.length > 0 ||
    activeAuthors.length > 0 ||
    activeCategories.length > 0;

  const clearFilters = () => {
    setSearch("");
    setActiveTypes([]);
    setActiveSubcategories([]);
    setActiveAuthors([]);
    setActiveCategories([]);
    setPage(1);
  };

  const filtered = useMemo(() => {
    return rawPublications.filter((pub) => {
      const matchesSearch =
        !search ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(search.toLowerCase()));
      const matchesType = activeTypes.length === 0 || activeTypes.includes(pub.type);
      const matchesSubcategory =
        activeSubcategories.length === 0 ||
        (pub.subcategory && activeSubcategories.includes(pub.subcategory));
      const matchesAuthor =
        activeAuthors.length === 0 ||
        pub.authors.some((a) => activeAuthors.includes(a));
      const matchesCategory =
        activeCategories.length === 0 ||
        pub.thematic_categories.some((c) => activeCategories.includes(c));
      return matchesSearch && matchesType && matchesSubcategory && matchesAuthor && matchesCategory;
    });
  }, [search, activeTypes, activeSubcategories, activeAuthors, activeCategories, rawPublications]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FIXED_CATEGORIES.forEach((t) => {
      counts[t] = rawPublications.filter((p) => p.type === t).length;
    });
    return counts;
  }, [rawPublications]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    thematicCategories.forEach((c) => {
      counts[c] = rawPublications.filter((p) => p.thematic_categories.includes(c)).length;
    });
    return counts;
  }, [thematicCategories, rawPublications]);

  const authorCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allAuthors.forEach((a) => {
      counts[a] = rawPublications.filter((p) => p.authors.includes(a)).length;
    });
    return counts;
  }, [allAuthors, rawPublications]);

  const activeFilterBadges = [
    ...activeTypes.map((t) => ({ label: t, clear: () => toggleItem(t, setActiveTypes) })),
    ...activeSubcategories.map((s) => ({ label: s, clear: () => toggleItem(s, setActiveSubcategories) })),
    ...activeCategories.map((c) => ({ label: c, clear: () => toggleItem(c, setActiveCategories) })),
    ...activeAuthors.map((a) => ({ label: a, clear: () => toggleItem(a, setActiveAuthors) })),
  ];

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        character={characterLeft}
        characterRight={characterRight}
        tint={tint}
      />

      {hasFilters && (
        <section className="border-b border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span className="text-xs text-muted-foreground shrink-0">Filtros ativos:</span>
              {activeFilterBadges.map((f) => (
                <Badge key={f.label} variant="default" className="cursor-pointer text-xs gap-1" onClick={f.clear}>
                  {f.label}
                  <X className="h-3 w-3" />
                </Badge>
              ))}
              {search && (
                <Badge variant="default" className="cursor-pointer text-xs gap-1" onClick={() => setSearch("")}>
                  "{search}"
                  <X className="h-3 w-3" />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground text-xs h-6 px-2 ml-auto">
                Limpar tudo
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid lg:grid-cols-[280px_1fr] gap-10">
              <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Buscar</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar publicações..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="pl-9" />
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Categorias</h4>
                  <div className="space-y-0.5">
                    {FIXED_CATEGORIES.map((type) => {
                      const subs = subcategoriesByType[type] ?? [];
                      const isExpanded = expandedTypes.includes(type);
                      const hasSubs = subs.length > 0;
                      return (
                        <div key={type}>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => toggleItem(type, setActiveTypes)}
                              className={`flex-1 flex items-center justify-between text-sm py-2 px-3 rounded-md transition-colors ${activeTypes.includes(type) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                            >
                              <span>{type}</span>
                              <span className="text-xs tabular-nums">{typeCounts[type] ?? 0}</span>
                            </button>
                            {hasSubs && (
                              <button
                                onClick={() => setExpandedTypes((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type])}
                                className="p-1.5 rounded-md text-muted-foreground hover:bg-muted transition-colors"
                              >
                                {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                              </button>
                            )}
                          </div>
                          {hasSubs && isExpanded && (
                            <div className="ml-4 pl-3 border-l border-border space-y-0.5 mt-0.5 mb-1">
                              {subs.map((sub) => (
                                <button
                                  key={sub}
                                  onClick={() => toggleItem(sub, setActiveSubcategories)}
                                  className={`w-full flex items-center justify-between text-xs py-1.5 px-2.5 rounded-md transition-colors ${activeSubcategories.includes(sub) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                                >
                                  <span>{sub}</span>
                                  <span className="text-[10px] tabular-nums opacity-70">
                                    {rawPublications.filter((p) => p.type === type && p.subcategory === sub).length}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {allAuthors.length > 0 && (
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Autores</h4>
                    <div className="flex flex-wrap gap-2">
                      {allAuthors.map((author) => (
                        <Badge key={author} variant={activeAuthors.includes(author) ? "default" : "secondary"} className={`cursor-pointer transition-colors text-xs ${activeAuthors.includes(author) ? "" : "hover:bg-primary/10 hover:text-primary"}`} onClick={() => toggleItem(author, setActiveAuthors)}>
                          {author}
                          <span className="ml-1 opacity-60">{authorCounts[author]}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {thematicCategories.length > 0 && (
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Palavras-chave</h4>
                    <div className="space-y-1">
                      {thematicCategories.map((cat) => (
                        <button key={cat} onClick={() => toggleItem(cat, setActiveCategories)} className={`w-full flex items-center justify-between text-sm py-2 px-3 rounded-md transition-colors ${activeCategories.includes(cat) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}>
                          <span>{cat}</span>
                          <span className="text-xs tabular-nums">{categoryCounts[cat]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                    {filtered.length === 1 ? "publicação encontrada" : "publicações encontradas"}
                  </p>
                </div>
              </aside>

              <div>
                {filtered.length === 0 ? (
                  <div className="text-center py-16">
                    <BookOpen className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Nenhuma publicação encontrada.</p>
                    {hasFilters && (
                      <Button variant="outline" size="sm" className="mt-4" onClick={clearFilters}>Limpar filtros</Button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {paginatedItems.map((pub, i) => (
                        <ScrollReveal key={pub.id} delay={(i % 4) * 80}>
                          <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors h-full flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <Badge className={`text-xs border-transparent hover:opacity-90 ${categoryBadgeClass(pub.type)}`}>{pub.type}</Badge>
                              <span className="text-muted-foreground text-xs">{pub.year}</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-3 leading-snug">{pub.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{pub.abstract}</p>
                            <div className="mt-auto">
                              <p className="text-muted-foreground text-xs mb-3">{pub.authors.join(", ")}</p>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {pub.thematic_categories.map((cat) => (
                                  <span key={cat} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full cursor-pointer hover:bg-primary/20 transition-colors" onClick={() => { if (!activeCategories.includes(cat)) toggleItem(cat, setActiveCategories); }}>
                                    {cat}
                                  </span>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {pub.tags.map((tag) => (
                                  <span key={tag} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">{tag}</span>
                                ))}
                              </div>
                              {pub.external_url && (
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                  <a href={pub.external_url} target="_blank" rel="noopener noreferrer">
                                    Acessar publicação
                                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </Card>
                        </ScrollReveal>
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-10">
                        <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(page - 1)}>
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                          <Button key={p} variant={p === page ? "default" : "outline"} size="icon" onClick={() => setPage(p)} className="w-9 h-9">
                            {p}
                          </Button>
                        ))}
                        <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <MigraFooter />
    </div>
  );
}
