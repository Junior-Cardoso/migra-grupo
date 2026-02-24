import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const ParaQuemE = () => {
  const criterios = [
    "querem crescer com previsibilidade",
    "precisam de clareza estratégica",
    "desejam implementar IA com profundidade",
    "querem reduzir custos e aumentar eficiência",
    "querem desenvolver a equipe",
    "valorizam ambiente de alto nível",
    "têm faturamento acima de R$ 3 milhões",
    "estão preparados para investir R$ 120 mil no crescimento do seu negócio"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
              O NOVAIA é para empresários, líderes<br />e tomadores de decisão que:
            </h2>
          </div>

          {/* Lista de critérios */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4">
              {criterios.map((criterio, index) => (
                <div key={index} className="flex items-start gap-4 bg-black/80 border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground leading-relaxed">
                    {criterio}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParaQuemE;
