import Navigation from "@/components/Navigation";
import PropostaValor from "@/components/PropostaValor";
import OQueE from "@/components/OQueE";
import Founders from "@/components/Founders";
import Dores from "@/components/Dores";
import MetodoMVO from "@/components/MetodoMVO";
import Simbiose from "@/components/Simbiose";
import Encontros from "@/components/Encontros";
import ParaQuemE from "@/components/ParaQuemE";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import novaiaClubBadge from "@/assets/novaia-club-badge.png";
import Bitrix24CTAButton from "@/components/Bitrix24CTAButton";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative overflow-hidden pt-32 pb-20">
        {/* Gradient Background Effect na Hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          {/* Gradiente radial azul ciano */}
          <div className="absolute w-[600px] h-[450px] rounded-full" style={{
          background: `radial-gradient(circle, 
                hsl(195, 100%, 50%) 0%, 
                hsl(200, 100%, 60%) 10%, 
                hsl(200, 90%, 50%) 20%, 
                hsl(200, 70%, 35%) 35%, 
                hsl(200, 50%, 20%) 50%, 
                hsl(200, 30%, 10%) 65%, 
                hsl(0, 0%, 0%) 85%, 
                transparent 100%)`,
          opacity: 0.4,
          filter: 'blur(140px)'
        }} />
          
          {/* Gradiente secundário laranja pastel */}
          <div className="absolute w-[450px] h-[350px] rounded-full -translate-x-32 translate-y-24" style={{
          background: `radial-gradient(circle, 
                hsl(15, 100%, 70%) 0%, 
                hsl(20, 95%, 65%) 12%, 
                hsl(25, 85%, 55%) 25%, 
                hsl(25, 70%, 40%) 40%, 
                hsl(20, 50%, 25%) 55%, 
                hsl(15, 30%, 12%) 70%, 
                hsl(0, 0%, 0%) 85%, 
                transparent 100%)`,
          opacity: 0.2,
          filter: 'blur(120px)'
        }} />
          
          {/* Gradiente terciário azul */}
          <div className="absolute w-[500px] h-[400px] rounded-full translate-x-28 -translate-y-16" style={{
          background: `radial-gradient(circle, 
                hsl(200, 100%, 55%) 0%, 
                hsl(205, 95%, 50%) 12%, 
                hsl(210, 85%, 45%) 25%, 
                hsl(210, 70%, 32%) 40%, 
                hsl(205, 50%, 20%) 55%, 
                hsl(200, 30%, 10%) 70%, 
                hsl(0, 0%, 0%) 85%, 
                transparent 100%)`,
          opacity: 0.16,
          filter: 'blur(130px)'
        }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Logo Badge */}
              <img src={novaiaClubBadge} alt="NOVAIA Club Badge" className="w-[100px] h-[100px]" />
              
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-4xl">
                Seja protagonista do seu negócio em um clube de empresários que usam IA para vender mais, operar melhor e tomar decisões com clareza.

              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
                Alavanque seu negócio com direção, eficiência e previsibilidade dentro de um clube de empresários que não apenas aprendem, mas executam de verdade.
              </p>

              {/* CTA Button */}
              <Bitrix24CTAButton className="px-8 py-6 text-base font-medium">
                Quero saber mais agora
              </Bitrix24CTAButton>

              {/* Vídeo 16:9 */}
              <div className="w-full max-w-4xl mt-8">
                <div className="relative w-full rounded-2xl border border-border/50 overflow-hidden" style={{
                paddingBottom: '56.25%'
              }}>
                  <iframe src="https://drive.google.com/file/d/1OnrmPDWBWyXwKyvjVLVcvN7SSxvfiNjB/preview" className="absolute top-0 left-0 w-full h-full" allow="autoplay" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Proposta de Valor */}
      <PropostaValor />

      {/* O que é o NOVAIA Club */}
      <OQueE />

      {/* Founders */}
      <Founders />

      {/* Dores */}
      <Dores />

      {/* Método MVO */}
      <MetodoMVO />

      {/* Programa SIMBIOSE */}
      <Simbiose />

      {/* Encontros e Mentorias */}
      <Encontros />

      {/* Para Quem É */}
      <ParaQuemE />

      {/* Depoimentos */}
      <Depoimentos />

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <CTAFinal />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;
