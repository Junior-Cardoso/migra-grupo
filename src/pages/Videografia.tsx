import { useState, useMemo } from "react";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { videos } from "@/data/videos";
import { Search, Video } from "lucide-react";

const Videografia = () => {
  const [search, setSearch] = useState("");

  const categories = useMemo(
    () => [...new Set(videos.map((v) => v.category).filter(Boolean))],
    []
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchesSearch =
        !search ||
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = !activeCategory || v.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Videografia
          </h1>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            Vídeos, palestras e documentários produzidos pelo MIGRA.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar vídeos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCategory === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(null)}
              >
                Todos
              </Badge>
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat!)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Video className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum vídeo encontrado.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map((video, i) => (
                <ScrollReveal key={video.id} delay={(i % 2) * 100}>
                  <Card className="overflow-hidden bg-background border-border hover:border-primary/30 transition-colors">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        {video.category && (
                          <Badge variant="secondary" className="text-xs">
                            {video.category}
                          </Badge>
                        )}
                        <span className="text-muted-foreground text-xs">{video.date}</span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-foreground uppercase tracking-wide mb-2">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {video.description}
                      </p>
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

export default Videografia;
