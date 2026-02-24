import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Megaphone, TrendingUp, Settings } from "lucide-react";
import eventoNovaia from "@/assets/evento-novaia.jpg";
const MetodoMVO = () => {
  const steps = [{
    icon: Megaphone,
    number: "1",
    title: "GERAR DEMANDA COM IA",
    description: "Para atrair clientes certos com menos esforço e custo:",
    features: ["Comunicação clara e forte", "Posição de autoridade", "Campanhas otimizadas", "Diagnóstico de oportunidades ocultas"]
  }, {
    icon: TrendingUp,
    number: "2",
    title: "ESTRUTURAR VENDAS PARA RECEITA PREVISÍVEL",
    description: "Para transformar sua área comercial:",
    features: ["Processos claros desde a primeira interação até fechamento", "IA para pré-venda e follow-ups", "Aumento de conversão e velocidade", "Indicadores que mostram exatamente onde intervir"]
  }, {
    icon: Settings,
    number: "3",
    title: "OTIMIZAR OPERAÇÕES PARA REDUZIR CUSTOS",
    description: "Para transformar eficiência em dinheiro:",
    features: ["Mapeamento de gargalos", "Aplicações de IA e automação", "Redução de retrabalho", "Mais entregas com menos recursos"]
  }];
  return <section id="metodo" className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-[1080px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Marketing, Vendas e Operações<br />transformados por IA
          </h2>

          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Nosso método reúne estratégia, IA e execução para destravar crescimento e eficiência.
          </p>
        </div>

        <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <Card key={index} className="bg-black/80 border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-base text-foreground/70 mb-5 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>)}
                </ul>
              </Card>;
        })}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xl text-foreground/90">
            O MVO se conecta com as metas do sócio e evolui mês após mês.
          </p>
          <p className="text-xl mt-2">
            <strong className="text-primary">Otimizamos o dinheiro velho e encontramos o dinheiro novo.</strong>
          </p>
        </div>

        {/* Imagem do Evento */}
        <div className="max-w-[1080px] mx-auto rounded-2xl overflow-hidden border border-border/50 bg-black">
          <img src={eventoNovaia} alt="Empresários em evento NOVAIA Club" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{
          maxHeight: "400px",
          objectFit: "cover"
        }} />
        </div>
      </div>
    </section>;
};
export default MetodoMVO;