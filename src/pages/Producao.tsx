import { useState, useMemo } from "react";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { publications, publicationTypes, thematicCategories } from "@/data/acervoPublications";
import { Search, ExternalLink, BookOpen, X } from "lucide-react";

const Producao = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeAuthors, setActiveAuthors] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allAuthors = useMemo(() => {
    const set = new Set<string>();
    publications.forEach((p) => p.authors.forEach((a) => set.add(a)));
    return Array.from(set).sort();
  }, []);

  const toggleAuthor = (author: string) => {
    setActiveAuthors((prev) =>
      prev.includes(author) ? prev.filter((a) => a !== author) : [...prev, author]
    );
  };

  const hasFilters = !!search || !!activeType || activeAuthors.length > 0 || !!activeCategory;

  const clearFilters = () => {
    setSearch("");
    setActiveType(null);
    setActiveAuthors([]);
    setActiveCategory(null);
  };

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        !search ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(search.toLowerCase()));
      const matchesType = !activeType || pub.type === activeType;
      const matchesAuthor =
        activeAuthors.length === 0 ||
        pub.authors.some((a) => activeAuthors.includes(a));
      const matchesCategory =
        !activeCategory ||
        pub.thematicCategories.includes(activeCategory);
      return matchesSearch && matchesType && matchesAuthor && matchesCategory;
    });
  }, [search, activeType, activeAuthors, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Produção
          </h1>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            Repositório de publicações do grupo de pesquisa MIGRA – UFPE.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar publicações..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Modalidade / Formato */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Formato</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeType === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveType(null)}
              >
                Todos
              </Badge>
              {publicationTypes.map((type) => (
                <Badge
                  key={type}
                  variant={activeType === type ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveType(activeType === type ? null : type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Categoria temática */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Categoria temática</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCategory === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(null)}
              >
                Todas
              </Badge>
              {thematicCategories.map((cat) => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Autores */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Autores</p>
            <div className="flex flex-wrap gap-2">
              {allAuthors.map((author) => (
                <Badge
                  key={author}
                  variant={activeAuthors.includes(author) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleAuthor(author)}
                >
                  {author}
                </Badge>
              ))}
            </div>
          </div>

          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
              <X className="h-3.5 w-3.5 mr-1" />
              Limpar filtros
            </Button>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhuma publicação encontrada.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pub, i) => (
                <ScrollReveal key={pub.id} delay={(i % 3) * 100}>
                  <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {pub.type}
                      </Badge>
                      <span className="text-muted-foreground text-xs">{pub.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {pub.abstract}
                    </p>
                    <div className="mt-auto">
                      <p className="text-muted-foreground text-xs mb-3">
                        {pub.authors.join(", ")}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {pub.thematicCategories.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {pub.externalUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer">
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
          )}
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default Producao;
