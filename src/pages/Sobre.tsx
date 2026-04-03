import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Conheça o Grupo
          </h1>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            História, equipe e trajetória do MIGRA – UFPE.
          </p>
        </div>
      </section>

      {/* Breve História */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2">
                  Breve História do MIGRA
                </h2>
                <div className="w-12 h-1 bg-accent mt-3 mb-8 rounded-full" />
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio 
                    dui. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit 
                    amet fermentum.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center border border-border overflow-hidden">
                <img src="/placeholder.svg" alt="Imagem ilustrativa do MIGRA" className="w-full h-full object-cover opacity-50" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coordenadoras */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2 text-center">
              Coordenação
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-12 rounded-full" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Profª Drª Carolina",
                role: "Coordenadora",
                area: "Direito Internacional e Migrações",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                lattes: "#",
                orcid: "#",
              },
              {
                name: "Profª Drª Sofia",
                role: "Vice-Coordenadora",
                area: "Ciências Sociais e Mobilidade",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui nulla vitae elit libero.",
                lattes: "#",
                orcid: "#",
              },
            ].map((prof, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Card className="p-8 bg-background border-border h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <GraduationCap className="h-10 w-10 text-muted-foreground/40" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
                        {prof.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">{prof.role}</p>
                      <p className="text-muted-foreground text-xs mt-1">{prof.area}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-5">
                    {prof.bio}
                  </p>
                  <div className="flex gap-4 mt-5">
                    <a
                      href={prof.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-medium flex items-center gap-1 hover:underline"
                    >
                      Lattes <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={prof.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-medium flex items-center gap-1 hover:underline"
                    >
                      ORCID <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pessoas que passaram */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2 text-center">
              Pessoas que passaram pelo MIGRA
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Pesquisadores, extensionistas e colaboradores que contribuíram para a trajetória do grupo.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Lorem Ipsum", period: "2019–2023", contribution: "Lorem ipsum" },
              { name: "Dolor Sit Amet", period: "2018–2024", contribution: "Lorem ipsum" },
              { name: "Consectetur Elit", period: "2020–2023", contribution: "Lorem ipsum" },
              { name: "Sed Eiusmod", period: "2021–2024", contribution: "Lorem ipsum" },
              { name: "Tempor Incididunt", period: "2022–2024", contribution: "Lorem ipsum" },
              { name: "Labore Dolore", period: "2019–2022", contribution: "Lorem ipsum" },
              { name: "Magna Aliqua", period: "2020–2023", contribution: "Lorem ipsum" },
              { name: "Veniam Nostrud", period: "2021–2023", contribution: "Lorem ipsum" },
            ].map((person, i) => (
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

      <MigraFooter />
    </div>
  );
};

export default Sobre;
