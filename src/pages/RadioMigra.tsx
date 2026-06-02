import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Music2, Loader2, ExternalLink } from "lucide-react";
import characterLeft from "@/assets/characters/char-6.webp";
import characterRight from "@/assets/characters/char-1.webp";

interface Episode {
  id: string;
  episode_number: number;
  title: string;
  description: string;
  date_label: string;
  duration_label: string;
  spotify_url: string | null;
}

const RadioMigra = () => {
  const { data: showCfg } = useQuery({
    queryKey: ["page_content", "radio", "show"],
    queryFn: async () => {
      const { data } = await supabase
        .from("page_content").select("content").eq("page", "radio").eq("section_key", "show").maybeSingle();
      return ((data?.content as any)?.spotifyShowId as string | undefined) ?? "";
    },
  });

  const { data: about } = useQuery({
    queryKey: ["page_content", "radio", "about"],
    queryFn: async () => {
      const { data } = await supabase
        .from("page_content").select("content").eq("page", "radio").eq("section_key", "about").maybeSingle();
      return (data?.content as any) as { title?: string; paragraphs?: string[] } | null;
    },
  });

  const { data: episodes = [], isLoading } = useQuery({
    queryKey: ["radio_episodes"],
    queryFn: async () => {
      const { data, error } = await supabase.from("radio_episodes").select("*").order("sort_order");
      if (error) throw error;
      return (data ?? []) as Episode[];
    },
  });

  const spotifyShowId = showCfg ?? "";

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      <PageHero
        eyebrow="MIGRA – UFPE"
        title="Rádio MIGRA"
        description="Podcast do grupo MIGRA – UFPE: conversas sobre migrações, mobilidades e gestão contemporânea de populações."
        character={characterLeft}
        characterRight={characterRight}
        tint="teal"
      />

      <section className="pt-12 md:pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            {spotifyShowId ? (
              <div className="rounded-xl overflow-hidden bg-muted/50 border border-border">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={`https://open.spotify.com/embed/show/${spotifyShowId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Rádio MIGRA no Spotify"
                />
              </div>
            ) : (
              <div className="rounded-xl bg-muted/50 border border-border p-10 text-center text-muted-foreground text-sm">
                Configure o ID do show do Spotify na área administrativa.
              </div>
            )}
            <p className="text-muted-foreground/50 text-xs mt-3 text-center">
              Também disponível em outras plataformas de podcast.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-6">
              Episódios em Destaque
            </h2>

            {isLoading ? (
              <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
            ) : episodes.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhum episódio cadastrado ainda.</p>
            ) : (
              <div className="space-y-1">
                {episodes.map((ep) => {
                  const Wrapper: any = ep.spotify_url ? "a" : "div";
                  const wrapperProps = ep.spotify_url
                    ? { href: ep.spotify_url, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Wrapper
                      key={ep.id}
                      {...wrapperProps}
                      className="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer"
                    >
                      <span className="text-muted-foreground/50 text-sm font-medium w-6 text-right shrink-0 group-hover:text-foreground transition-colors">
                        {ep.episode_number}
                      </span>
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <Music2 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                          {ep.title}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-0.5 truncate">{ep.description}</p>
                      </div>
                      <span className="text-muted-foreground/50 text-xs shrink-0 hidden sm:block">{ep.date_label}</span>
                      <span className="text-muted-foreground/50 text-xs shrink-0 hidden sm:block ml-4">{ep.duration_label}</span>
                      {ep.spotify_url && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0 ml-2" />}
                    </Wrapper>
                  );
                })}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default RadioMigra;
