import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Building2, Users, Cpu, Cog, Factory } from "lucide-react";
import nelsonPhoto from "@/assets/nelson-naibert.png";
import myrkoPhoto from "@/assets/myrko-micali.png";
const Founders = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
              Nelson Naibert & Myrko Micali
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Dois dos principais especialistas do país em estratégia empresarial, inovação em modelo de negócios e IA aplicada.
            </p>
          </div>

          {/* Cards dos Founders */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nelson */}
            <Card className="bg-black/80 border-border p-8">
              <div className="w-full h-[320px] mb-6 rounded-xl overflow-hidden border border-border/50 bg-black">
                <img src={nelsonPhoto} alt="Nelson Naibert - Fundador NOVAIA Club" className="w-full h-full object-cover object-top" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nelson Naibert
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>+26 anos de experiência em inovações em modelos de negócios, estratégia e finanças.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Economista, mestre em economia e gestão pública, professor, escritor, palestrante e investidor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Founder do Grupo Rosa, Naibert e Co-founder NovaIA Club.</span>
                </li>
              </ul>
            </Card>

            {/* Myrko */}
            <Card className="bg-black/80 border-border p-8">
              <div className="w-full h-[320px] mb-6 rounded-xl overflow-hidden border border-border/50 bg-black">
                <img src={myrkoPhoto} alt="Myrko Micali - Fundador NOVAIA Club" className="w-full h-full object-cover object-top" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Myrko Micali
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>+20 anos de experiência em tecnologia, automações e IA aplicada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cog className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Engenheiro, mentor e diretor na doubleX.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Factory className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Responsável por levar IA aplicada a empresas de múltiplos setores no Brasil.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Founders;