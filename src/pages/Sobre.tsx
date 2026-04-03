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
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-2">
              Breve História do MIGRA
            </h2>
            <div className="w-12 h-1 bg-accent mt-3 mb-8 rounded-full" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                O MIGRA – Grupo de Pesquisa e Extensão em Migrações, Mobilidades e Gestão Contemporânea 
                de Populações foi fundado na Universidade Federal de Pernambuco com o objetivo de 
                produzir conhecimento acadêmico e promover ações de extensão voltadas para as temáticas 
                migratórias no Brasil e no mundo.
              </p>
              <p>
                Desde sua criação, o grupo reúne pesquisadores de diferentes áreas do conhecimento — 
                Direito, Ciências Sociais, Geografia, Comunicação — em torno de um compromisso comum: 
                compreender as dinâmicas migratórias contemporâneas e contribuir para políticas 
                públicas mais humanas e inclusivas.
              </p>
              <p>
                Ao longo dos anos, o MIGRA consolidou-se como referência no Nordeste brasileiro na 
                pesquisa sobre migrações, com publicações em periódicos nacionais e internacionais, 
                participação em eventos acadêmicos e parcerias com instituições governamentais e da 
                sociedade civil.
              </p>
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
                bio: "Professora do Departamento de Ciências Sociais da UFPE, com pesquisa focada em mobilidade humana, interculturalidade e processos de integração social de comunidades migrantes no Nordeste.",
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
              { name: "Ana Beatriz Souza", period: "2019–2023", contribution: "Pesquisadora" },
              { name: "Carlos Drummond", period: "2018–2024", contribution: "Doutorando" },
              { name: "Elena Ferreira", period: "2020–2023", contribution: "Mestranda" },
              { name: "Gabriel Henrique", period: "2021–2024", contribution: "Pesquisador" },
              { name: "Isabela Jardim", period: "2022–2024", contribution: "Mestranda" },
              { name: "Karen Lima", period: "2019–2022", contribution: "Graduanda" },
              { name: "Marcos Oliveira", period: "2020–2023", contribution: "Pesquisador" },
              { name: "Patrícia Rocha", period: "2021–2023", contribution: "Extensionista" },
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
