import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Radio, Headphones } from "lucide-react";

const RadioMigra = () => {
  // Placeholder Spotify show ID — replace with the real one
  const spotifyShowId = "PLACEHOLDER_SHOW_ID";

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
              <Radio className="h-7 w-7 text-accent" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Rádio MIGRA
            </h1>
          </div>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            Podcast do grupo MIGRA – UFPE. Conversas, entrevistas e reflexões sobre migrações, 
            mobilidades e direitos humanos.
          </p>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <Card className="p-8 bg-background border-border">
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
                  Ouça no Spotify
                </h2>
              </div>

              {/* Main show embed */}
              <div className="rounded-lg overflow-hidden bg-muted">
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

              <p className="text-muted-foreground text-sm mt-6 text-center">
                Também disponível em outras plataformas de podcast.
              </p>
            </Card>
          </ScrollReveal>

          {/* Episódios em destaque */}
          <ScrollReveal delay={150}>
            <h2 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide mt-16 mb-8 text-center">
              Episódios em Destaque
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Ep. 1 — O que é o MIGRA?",
                  description: "Apresentação do grupo, sua história e seus objetivos de pesquisa e extensão.",
                  date: "Jan 2026",
                },
                {
                  title: "Ep. 2 — Migrações venezuelanas no Nordeste",
                  description: "Entrevista sobre os desafios do acolhimento de migrantes venezuelanos em Pernambuco.",
                  date: "Fev 2026",
                },
                {
                  title: "Ep. 3 — Direito ao refúgio no Brasil",
                  description: "Conversa com especialistas sobre o sistema brasileiro de proteção a refugiados.",
                  date: "Mar 2026",
                },
              ].map((ep, i) => (
                <Card key={i} className="p-5 bg-background border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Radio className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{ep.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{ep.description}</p>
                      <p className="text-muted-foreground/60 text-xs mt-2">{ep.date}</p>
                    </div>
                  </div>
                </Card>
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
