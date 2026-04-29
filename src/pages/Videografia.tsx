import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Search, Video, Loader2 } from "lucide-react";
import character from "@/assets/characters/char-5.webp";

const SECTIONS_ORDER = [
  "Así Pasó",
  "Curso de Extensão: Questão Migratória",
  "I Encontro Nacional de Extensão Universitária com Imigrantes e Refugiados",
  "Palestras, aulas e comentários na mídia",
  "Plenária Nacional Saúde e Migração",
];

const SECTION_SHORT_LABELS: Record<string, string> = {
  "Así Pasó": "Así Pasó",
  "Curso de Extensão: Questão Migratória": "Curso de Extensão",
  "I Encontro Nacional de Extensão Universitária com Imigrantes e Refugiados": "Encontro REUNIR",
  "Palestras, aulas e comentários na mídia": "Palestras e Mídia",
  "Plenária Nacional Saúde e Migração": "Plenária Saúde",
};

const SECTION_DESCRIPTIONS: Record<string, string> = {
  "Así Pasó": "Documentário e bastidores — entrevistas na íntegra com os participantes.",
  "Curso de Extensão: Questão Migratória": "Aspectos jurídicos, culturais e integração social dos migrantes (2021).",
  "I Encontro Nacional de Extensão Universitária com Imigrantes e Refugiados": "Extensão universitária com imigrantes e refugiados.",
  "Palestras, aulas e comentários na mídia": "Participações em eventos, mídia e debates públicos.",
  "Plenária Nacional Saúde e Migração": "Discussões sobre saúde e políticas migratórias.",
};

const Videografia = () => {
  const [search, setSearch] = useState("");

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = useMemo(() => {
    if (!search) return videos;
    const q = search.toLowerCase();
    return videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        (v.description ?? "").toLowerCase().includes(q)
    );
  }, [videos, search]);

  const videosBySection = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const s of SECTIONS_ORDER) map[s] = [];
    for (const v of filtered) {
      const sec = (v as any).section as string | null;
      if (sec && map[sec]) map[sec].push(v);
      else if (sec) map[sec] = [v];
    }
    return map;
  }, [filtered]);

  const renderSection = (sectionName: string) => {
    const sectionVideos = videosBySection[sectionName] ?? [];
    const isAsiPaso = sectionName === "Así Pasó";
    const featuredVideo = isAsiPaso
      ? sectionVideos.find((v) => (v as any).sort_order < 0)
      : null;
    const restVideos = isAsiPaso
      ? sectionVideos.filter((v) => (v as any).sort_order >= 0)
      : sectionVideos;

    return (
      <div>
        {/* Section description */}
        {SECTION_DESCRIPTIONS[sectionName] && (
          <p className="text-muted-foreground text-sm max-w-2xl mb-6">
            {SECTION_DESCRIPTIONS[sectionName]}
          </p>
        )}

        {/* Featured documentary for Así Pasó */}
        {featuredVideo && (
          <div className="mb-8">
            <Card className="overflow-hidden bg-background border-border">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtube_id}`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
                  {featuredVideo.title}
                </h3>
                {featuredVideo.description && (
                  <p className="text-muted-foreground text-sm mt-2">
                    {featuredVideo.description}
                  </p>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Grid of videos */}
        {restVideos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {restVideos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden bg-background border-border hover:border-primary/30 transition-colors"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtube_id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {video.category && (
                      <Badge variant="secondary" className="text-xs">
                        {video.category}
                      </Badge>
                    )}
                    <span className="text-muted-foreground text-xs">
                      {video.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center border border-dashed border-border rounded-lg">
            <Video className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">
              Em breve novos vídeos nesta seção.
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Videografia
          </h1>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            Vídeos, palestras e documentários produzidos pelo MIGRA.
          </p>
          <img
            src={character}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-4 lg:right-12 bottom-0 h-56 lg:h-72 w-auto object-contain pointer-events-none select-none"
          />
        </div>
      </section>


      {/* Tabs Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : filtered.length === 0 && search ? (
            <div className="text-center py-16">
              <Video className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum vídeo encontrado.</p>
            </div>
          ) : (
            <Tabs defaultValue={SECTIONS_ORDER[0]} className="w-full">
              <TabsList className="w-full h-auto flex-wrap justify-start gap-1 bg-muted/50 p-2 rounded-lg mb-8">
                {SECTIONS_ORDER.map((sectionName) => {
                  const count = (videosBySection[sectionName] ?? []).length;
                  return (
                    <TabsTrigger
                      key={sectionName}
                      value={sectionName}
                      className="text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-normal text-left"
                    >
                      {SECTION_SHORT_LABELS[sectionName] ?? sectionName}
                      {count > 0 && (
                        <span className="ml-1.5 text-[10px] opacity-70">({count})</span>
                      )}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* Search inside tabs */}
              <div className="relative w-full sm:max-w-sm mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar vídeos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              {SECTIONS_ORDER.map((sectionName) => (
                <TabsContent key={sectionName} value={sectionName}>
                  <ScrollReveal>
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                        {sectionName}
                      </h2>
                      <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
                      {renderSection(sectionName)}
                    </div>
                  </ScrollReveal>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default Videografia;
