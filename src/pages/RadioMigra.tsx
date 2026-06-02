import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Loader2 } from "lucide-react";
import characterLeft from "@/assets/characters/char-6.webp";
import characterRight from "@/assets/characters/char-1.webp";
import SpotifyEpisodeRow from "@/components/SpotifyEpisodeRow";

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
              <div className="space-y-3">
                {episodes.map((ep) => (
                  <SpotifyEpisodeRow
                    key={ep.id}
                    episodeNumber={ep.episode_number}
                    fallbackTitle={ep.title}
                    fallbackDescription={ep.description}
                    dateLabel={ep.date_label}
                    durationLabel={ep.duration_label}
                    spotifyUrl={ep.spotify_url}
                  />
                ))}
              </div>
            )}
          </ScrollReveal>

          {about?.paragraphs && about.paragraphs.length > 0 && (
            <ScrollReveal delay={150}>
              <div className="mt-16">
                <h2 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-2">
                  {about.title ?? "Sobre o projeto"}
                </h2>
                <div className="w-12 h-1 bg-accent mt-3 mb-6 rounded-full" />
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base max-w-3xl">
                  {about.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default RadioMigra;
