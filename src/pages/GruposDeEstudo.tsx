import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, BookOpen, Calendar, Users } from "lucide-react";
import characterLeft from "@/assets/characters/char-9.webp";
import characterRight from "@/assets/characters/char-7.webp";

const groups = [
  {
    title: "Título grupo de estudo 01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    objectives: [
      "Lorem ipsum dolor sit amet consectetur adipiscing",
      "Sed do eiusmod tempor incididunt ut labore",
      "Ut enim ad minim veniam quis nostrud exercitation",
    ],
    participants: ["Lorem ipsum (coord.)", "4 pesquisadores", "6 estudantes"],
    cycles: [
      { name: "Ciclo 1 — Lorem ipsum dolor sit", period: "Mar–Jun 2026" },
      { name: "Ciclo 2 — Sed do eiusmod tempor", period: "Ago–Nov 2026" },
    ],
    email: "migra.direitos@ufpe.br",
  },
  {
    title: "Título grupo de estudo 02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",
    objectives: [
      "Lorem ipsum dolor sit amet consectetur",
      "Praesent commodo cursus magna vel scelerisque",
      "Donec sed odio dui nulla vitae elit libero",
    ],
    participants: ["Lorem ipsum (coord.)", "3 pesquisadores", "5 estudantes"],
    cycles: [
      { name: "Ciclo 1 — Lorem ipsum dolor", period: "Abr–Jul 2026" },
      { name: "Ciclo 2 — Praesent commodo cursus", period: "Set–Dez 2026" },
    ],
    email: "migra.intercultural@ufpe.br",
  },
];

const GruposDeEstudo = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      <PageHero
        title="Grupos de Estudo"
        description="Espaços de aprendizado colaborativo sobre temas centrais das migrações contemporâneas."
        character={characterLeft}
        characterRight={characterRight}
        tint="sand"
      />

      {/* Groups */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {groups.map((group, i) => (
             <ScrollReveal key={i} delay={i * 100}>
              <Card className="p-8 bg-background border-border">
                <div className="mb-6">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
                    {group.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {group.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Objetivos */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Objetivos
                    </h3>
                    <ul className="space-y-2">
                      {group.objectives.map((obj, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ciclos */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      Ciclos de Estudo
                    </h3>
                    <div className="space-y-3">
                      {group.cycles.map((cycle, j) => (
                        <div key={j} className="border-l-2 border-accent pl-3">
                          <p className="text-foreground text-sm font-medium">{cycle.name}</p>
                          <p className="text-muted-foreground text-xs">{cycle.period}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Participantes + Contato */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      <Users className="h-4 w-4 text-primary" />
                      Participantes
                    </h3>
                    <ul className="space-y-1 mb-5">
                      {group.participants.map((p, j) => (
                        <li key={j} className="text-muted-foreground text-sm">{p}</li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${group.email}`}>
                        <Mail className="h-3.5 w-3.5 mr-2" />
                        Entre em contato
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default GruposDeEstudo;
