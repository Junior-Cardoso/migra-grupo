import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Radio, Headphones, Music2, Mic2 } from "lucide-react";
import characterLeft from "@/assets/characters/char-6.webp";
import characterRight from "@/assets/characters/char-1.webp";


const RadioMigra = () => {
  const spotifyShowId = "PLACEHOLDER_SHOW_ID";

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

      {/* Player / Embed area */}
      <section className="pt-12 md:pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
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
            <p className="text-muted-foreground/50 text-xs mt-3 text-center">
              Também disponível em outras plataformas de podcast.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Episódios em destaque — list style like Spotify */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal delay={100}>
            <h2 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide mb-6">
              Episódios em Destaque
            </h2>

            <div className="space-y-1">
              {[
                {
                  num: 1,
                  title: "Lorem ipsum dolor sit",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
                  date: "Jan 2026",
                  duration: "32 min",
                },
                {
                  num: 2,
                  title: "Consectetur adipiscing elit",
                  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
                  date: "Fev 2026",
                  duration: "45 min",
                },
                {
                  num: 3,
                  title: "Sed do eiusmod tempor",
                  description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                  date: "Mar 2026",
                  duration: "38 min",
                },
              ].map((ep) => (
                <div
                  key={ep.num}
                  className="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer"
                >
                  {/* Track number */}
                  <span className="text-muted-foreground/50 text-sm font-medium w-6 text-right shrink-0 group-hover:text-foreground transition-colors">
                    {ep.num}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Music2 className="h-4 w-4 text-primary" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                      {ep.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5 truncate">
                      {ep.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <span className="text-muted-foreground/50 text-xs shrink-0 hidden sm:block">
                    {ep.date}
                  </span>
                  <span className="text-muted-foreground/50 text-xs shrink-0 hidden sm:block ml-4">
                    {ep.duration}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default RadioMigra;
