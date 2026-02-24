import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ClipboardList, Wrench, Sparkles, Flag, CheckCircle2 } from "lucide-react";
import GradientBackgroundEffect from "@/components/GradientBackgroundEffect";
import membro1 from "@/assets/membro-1.jpg";
import membro2 from "@/assets/membro-2.jpg";
import membro3 from "@/assets/membro-3.jpg";
import membro4 from "@/assets/membro-4.jpg";
import membro5 from "@/assets/membro-5.jpg";
import membro6 from "@/assets/membro-6.jpg";
import membro7 from "@/assets/membro-7.jpg";
const Simbiose = () => {
  const aulas = [{
    icon: ClipboardList,
    number: "1",
    title: "Preparação para a Prática",
    description: "Você define:",
    features: ["objetivo", "impacto esperado", "área de aplicação", "indicadores", "recursos necessários"],
    highlight: "Clareza total ANTES de iniciar o projeto."
  }, {
    icon: Wrench,
    number: "2",
    title: "Execução (2 horas)",
    description: "Você implementa o projeto com ajuda dos mentores e da comunidade.",
    subtitle: "Exemplos reais:",
    features: ["Automação comercial", "Redução de custos operacionais", "Fluxos de aprovação inteligentes", "Análises de dados com IA", "Automação de atendimento", "Agentes internos de produtividade", "Painéis de decisão executiva"]
  }, {
    icon: Sparkles,
    number: "3",
    title: "Refinamento",
    description: "Melhoramos lógica, fluxo, qualidade e impacto."
  }, {
    icon: Flag,
    number: "4",
    title: "Consolidação + Direção do Próximo Ciclo",
    description: "Você sai com:",
    features: ["um projeto funcional", "indicadores definidos", "próximo passo mapeado"]
  }];
  return <section id="simbiose" className="py-20 bg-background relative overflow-hidden">
      <GradientBackgroundEffect offsetTop="10%" opacity={0.4} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Todo mês, seu negócio recebe um novo projeto de IA implementado do zero ao resultado.
          </h2>
          
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
            O Simbiose é o sistema mensal que garante evolução contínua, potencializando as habilidades humanas com o conhecimento incorporado das máquinas.
          </p>
        </div>

        {/* Cards das 4 aulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1080px] mx-auto mb-12">
          {aulas.map((aula, index) => {
          const Icon = aula.icon;
          return <Card key={index} className="p-6 bg-black/80 border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary">Aula {aula.number}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {aula.title}
                </h3>
                
                <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                  {aula.description}
                </p>

                {aula.subtitle && <p className="text-sm text-foreground/80 font-medium mb-2">
                    {aula.subtitle}
                  </p>}

                {aula.features && <ul className="space-y-1.5 mb-3">
                    {aula.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>}

                {aula.highlight && <p className="text-sm font-semibold text-primary mt-3">
                    {aula.highlight}
                  </p>}
              </Card>;
        })}
        </div>

        {/* Texto de ciclo */}
        <div className="text-center max-w-[1080px] mx-auto mb-12">
          <p className="text-lg text-foreground/80 mb-4">
            Esse ciclo acontece <strong className="text-foreground">todos os meses</strong>.
          </p>
          <p className="text-xl text-foreground font-semibold">
            Resultado: <span className="text-primary">Sua empresa inova e se transforma 12 vezes ao ano.</span>
          </p>
          <p className="text-lg text-foreground/70 mt-2">
            E estar atualizado é o que te mantém relevante.
          </p>
        </div>

        {/* Mosaico de imagens */}
        <div className="grid grid-cols-4 gap-4 max-w-[1080px] mx-auto">
          {/* Linha 1 - 3 imagens pequenas + 1 grande */}
          <div className="col-span-1 row-span-1">
            <img src={membro2} alt="Membro apresentando" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={membro3} alt="Membro em apresentação" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="col-span-2 row-span-2">
            <img src={membro1} alt="Membros trabalhando" className="w-full h-full object-cover rounded-xl" />
          </div>

          {/* Linha 2 */}
          <div className="col-span-1 row-span-1">
            <img src={membro4} alt="Membro do NOVAIA" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={membro6} alt="Membro do NOVAIA" className="w-full h-full object-cover rounded-xl" />
          </div>

          {/* Linha 3 */}
          <div className="col-span-2 row-span-1">
            <img src={membro5} alt="Ambiente de trabalho NOVAIA" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="col-span-2 row-span-1">
            <img src={membro7} alt="Cartão NOVAIA" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Simbiose;