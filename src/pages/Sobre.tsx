import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";
import characterLeft from "@/assets/characters/char-1.webp";
import characterRight from "@/assets/characters/char-4.webp";
import sofiaZanforlin from "@/assets/team/sofia-zanforlin.png";
import carolinaLeiteAsset from "@/assets/team/carolina-leite.png.asset.json";
import historiaImg1 from "@/assets/sobre-migra.jpg";
import historiaImg2 from "@/assets/hero-migra-bg.jpg";

const photoFor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("sofia")) return sofiaZanforlin;
  if (n.includes("carol")) return carolinaLeiteAsset.url;
  return null;
};
import { usePageContent } from "@/hooks/usePageContent";

const Sobre = () => {
  const { data: content } = usePageContent("sobre");
  if (!content) return null;

  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        character={characterLeft}
        characterRight={characterRight}
        flipCharacters
        tint="navy"
      />

      {/* Breve História */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2">
              {content.historia.title}
            </h2>
            <div className="w-12 h-1 bg-accent mt-3 mb-10 rounded-full" />
          </ScrollReveal>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {content.historia.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <p>{p}</p>
                {i === 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 my-10">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted col-span-2 md:col-span-2 md:row-span-2">
                      <img src="/src/assets/sobre-migra.jpg" alt="Atividade do grupo MIGRA" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted hidden md:block">
                      <img src="/src/assets/hero-migra-bg.jpg" alt="Pesquisa de campo MIGRA" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted hidden md:block">
                      <img src="/placeholder.svg" alt="Foto institucional MIGRA" className="w-full h-full object-cover opacity-60" />
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Coordenação */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2 text-center">
              {content.coordenacao.title}
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-12 rounded-full" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.coordenacao.members.map((prof, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Card className="p-8 bg-background border-border h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                      {photoFor(prof.name) ? (
                        <img src={photoFor(prof.name)!} alt={prof.name} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="h-10 w-10 text-muted-foreground/40" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
                        {prof.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">{prof.role}</p>
                      <p className="text-muted-foreground text-xs mt-1">{prof.area}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-5">{prof.bio}</p>
                  <div className="flex gap-4 mt-5">
                    {prof.lattes && (
                      <a href={prof.lattes} target="_blank" rel="noopener noreferrer" className="text-primary text-xs font-medium flex items-center gap-1 hover:underline">
                        Lattes <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {prof.orcid && (
                      <a href={prof.orcid} target="_blank" rel="noopener noreferrer" className="text-primary text-xs font-medium flex items-center gap-1 hover:underline">
                        ORCID <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pessoas que passaram */}
      {content.pessoas.items.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2 text-center">
                {content.pessoas.title}
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                {content.pessoas.description}
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {content.pessoas.items.map((person, i) => (
                <ScrollReveal key={i} delay={(i % 4) * 80}>
                  <div className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <p className="font-semibold text-foreground text-sm">{person.name}</p>
                    <p className="text-muted-foreground text-xs mt-1">{person.contribution}</p>
                    <p className="text-muted-foreground/60 text-xs mt-0.5">{person.period}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <MigraFooter />
    </div>
  );
};

export default Sobre;
