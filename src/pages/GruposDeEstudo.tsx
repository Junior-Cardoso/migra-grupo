import MigraNavigation from "@/components/MigraNavigation";
import MigraFooter from "@/components/MigraFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Scale, Users, Mail, BookOpen, Calendar } from "lucide-react";

const groups = [
  {
    icon: Globe,
    title: "Migração e Direitos Humanos",
    description: "Grupo dedicado ao estudo aprofundado da proteção jurídica de migrantes e refugiados no cenário internacional e nacional, com foco em tratados, convenções e jurisprudência.",
    objectives: [
      "Analisar a legislação migratória brasileira e internacional",
      "Debater casos emblemáticos de proteção a refugiados",
      "Produzir materiais acadêmicos sobre direitos dos migrantes",
    ],
    participants: ["Prof. Carolina (coord.)", "4 pesquisadores", "6 estudantes"],
    cycles: [
      { name: "Ciclo 1 — Fundamentos do Direito Migratório", period: "Mar–Jun 2026" },
      { name: "Ciclo 2 — Jurisprudência Internacional", period: "Ago–Nov 2026" },
    ],
    email: "migra.direitos@ufpe.br",
  },
  {
    icon: Users,
    title: "Interculturalidade e Pertencimentos",
    description: "Espaço de reflexão sobre identidade cultural, processos de pertencimento e dinâmicas interculturais vivenciadas por comunidades migrantes em contextos urbanos.",
    objectives: [
      "Investigar processos identitários de comunidades migrantes",
      "Promover diálogos interculturais na universidade",
      "Documentar narrativas de pertencimento e integração",
    ],
    participants: ["Prof. Sofia (coord.)", "3 pesquisadores", "5 estudantes"],
    cycles: [
      { name: "Ciclo 1 — Identidade e Deslocamento", period: "Abr–Jul 2026" },
      { name: "Ciclo 2 — Narrativas Migrantes", period: "Set–Dez 2026" },
    ],
    email: "migra.intercultural@ufpe.br",
  },
  {
    icon: Scale,
    title: "Políticas Migratórias Comparadas",
    description: "Análise comparativa de legislações e políticas públicas de diferentes países sobre migração, buscando identificar boas práticas e desafios comuns.",
    objectives: [
      "Comparar políticas migratórias de países do Sul Global",
      "Avaliar impactos de políticas de acolhimento",
      "Propor recomendações para gestores públicos",
    ],
    participants: ["Prof. Carolina (coord.)", "2 pesquisadores", "4 estudantes"],
    cycles: [
      { name: "Ciclo 1 — América Latina em foco", period: "Mai–Ago 2026" },
    ],
    email: "migra.politicas@ufpe.br",
  },
];

const GruposDeEstudo = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Header */}
      <section className="pt-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Grupos de Estudo
          </h1>
          <div className="w-12 h-1 bg-accent mt-4 mb-4 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl">
            Espaços de aprendizado colaborativo sobre temas centrais das migrações contemporâneas.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {groups.map((group, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Card className="p-8 bg-background border-border">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <group.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
                      {group.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {group.description}
                    </p>
                  </div>
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
