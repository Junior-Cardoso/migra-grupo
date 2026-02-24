import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Compass, TrendingDown, Cog, Users, ShoppingCart, Dice5, Cpu, Target } from "lucide-react";
import GradientBackgroundEffect from "@/components/GradientBackgroundEffect";

const Dores = () => {
  const dores = [
    { icon: Compass, title: "Falta de clareza estratégica" },
    { icon: TrendingDown, title: "Crescimento instável" },
    { icon: Cog, title: "Operações lentas e caras" },
    { icon: Users, title: "Times sobrecarregados" },
    { icon: ShoppingCart, title: "Vendas inconsistentes" },
    { icon: Dice5, title: "Decisões tomadas no \"feeling\"" },
    { icon: Cpu, title: "Falta de aplicação prática de IA" },
    { icon: Target, title: "Falta de previsibilidade e direção" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <GradientBackgroundEffect />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              O NOVAIA foi criado para empresários que querem crescer, mas enfrentam:
            </h2>
          </div>

          {/* Grid de Dores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {dores.map((dor, index) => {
              const Icon = dor.icon;
              return (
                <Card key={index} className="bg-black/80 border-border p-5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {dor.title}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Texto de fechamento */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              O que entregamos é o oposto disso:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {["Clareza", "Processos", "Execução", "ROI Real"].map((item, index) => (
                <span key={index} className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dores;