import { Badge } from "@/components/ui/badge";
import { Compass, Cpu, User, Users, Building2, Award } from "lucide-react";
import equipeMls1 from "@/assets/equipe-mls-1.jpg";
import equipeMls2 from "@/assets/equipe-mls-2.jpg";
import seloFundadores from "@/assets/selo-fundadores.png";
const features = [{
  text: "Direção estratégica mensal",
  icon: Compass
}, {
  text: "Execução contínua de projetos de IA",
  icon: Cpu
}, {
  text: "Acompanhamento individual",
  icon: User
}, {
  text: "Time envolvido e capacitado em IA",
  icon: Users
}, {
  text: "Ambiente de empresários maduros",
  icon: Building2
}, {
  text: "Acesso ao Mentoring League Society",
  subtext: "(o maior, mais forte e mais exclusivo ecossistema de educação empresarial do Brasil)",
  icon: Award
}];
const OQueE = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              O NOVAIA Club é um clube de negócios e mentoria estratégica para empresários
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Criado para transformar o jeito como você enxerga, lidera e escala seu negócio usando Inteligência Artificial como motor de inovação, crescimento e eficiência.
            </p>
          </div>

          {/* Aqui você encontra - Cards */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
              Aqui você encontra:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return <div key={index} className="group bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">
                      {feature.text}
                    </p>
                    {feature.subtext && <p className="text-foreground/60 text-sm mt-1">
                        {feature.subtext}
                      </p>}
                  </div>;
            })}
            </div>
          </div>

          {/* Texto de fechamento */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-foreground font-semibold mb-2">Empresário não precisa aprender a "mexer em ferramentas"</p>
            <p className="text-lg md:text-xl text-foreground/80">
              Nosso objetivo é que você tome decisões melhores, acelere seu crescimento e opere com eficiência máxima.
            </p>
          </div>

          {/* Grid de Fotos - 2 colunas */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Equipe MLS 1 */}
            <div className="animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <div className="rounded-2xl overflow-hidden border border-border/50 aspect-[4/3] bg-black">
                <img src={equipeMls1} alt="Fundadores NOVAIA" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Equipe MLS 2 */}
            <div className="animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="rounded-2xl overflow-hidden border border-border/50 aspect-[4/3] bg-black">
                <img src={equipeMls2} alt="Equipe MLS - Mentoring League Society" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Selo Fundadores - Full Width */}
          <div className="animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-black">
              <img src={seloFundadores} alt="Official Member - Mentoring League Society" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OQueE;