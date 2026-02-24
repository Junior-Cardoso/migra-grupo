import GradientBackgroundEffect from "./GradientBackgroundEffect";
import Bitrix24CTAButton from "./Bitrix24CTAButton";

const CTAFinal = () => {
  return <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <GradientBackgroundEffect offsetTop="0%" opacity={0.4} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Quero transformar meu negócio com
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              mentoria estratégica + IA aplicada
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 mb-10 px-2">
              Preencha sua aplicação para entrar para o NOVAIA Club.
            </p>

            {/* Botão de CTA */}
            <Bitrix24CTAButton className="mt-4 w-full sm:w-fit px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold">
              Quero saber mais agora
            </Bitrix24CTAButton>
          </div>
        </div>
      </div>
    </section>;
};
export default CTAFinal;
