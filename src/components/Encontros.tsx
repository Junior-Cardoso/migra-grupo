import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  GraduationCap, 
  Wine, 
  Smartphone, 
  Users, 
  UserCheck, 
  Repeat, 
  Gift, 
  Network 
} from "lucide-react";

const entregas = [
  {
    icon: GraduationCap,
    title: "Aula Mensal de Negócios + IA (2h)",
    description: "Com pré-exercício + estratégia + prática."
  },
  {
    icon: Wine,
    title: "Vinho com IA (aberto para equipes e convidados)",
    description: "O encontro mais dinâmico para aprender e testar tecnologias novas."
  },
  {
    icon: Smartphone,
    title: "Trilha MVO no app MLS",
    description: "Trilha gravada + agentes de IA + frameworks aplicáveis."
  },
  {
    icon: Users,
    title: "Aulas Mensais para Equipes",
    description: "Seu time aprende IA e aumenta produtividade junto com você."
  },
  {
    icon: UserCheck,
    title: "1:1 com os Mentores Todo Mês",
    description: "Revisão de planos, ajustes estratégicos, decisões e direcionamento."
  },
  {
    icon: Repeat,
    title: "Ciclos Mensais de Execução (Simbiose)",
    description: "Um projeto de IA aplicado por mês. Todo mês. O ano inteiro."
  },
  {
    icon: Gift,
    title: "Benefícios MLS",
    description: "Acesso a até 3 eventos anuais de outros clubes, Growth Circle para times e Family Circle."
  },
  {
    icon: Network,
    title: "Comunidade de empresários de alto nível",
    description: "Ambiente seguro, verdadeiro e orientado a crescimento."
  }
];

const Encontros = () => {
  return (
    <section id="encontros" className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              O que você recebe<br />como membro
            </h2>
          </div>

          {/* Grid de entregas */}
          <div className="grid md:grid-cols-2 gap-6">
            {entregas.map((entrega, index) => {
              const Icon = entrega.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-black/80 border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {index + 1}. {entrega.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {entrega.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Encontros;
