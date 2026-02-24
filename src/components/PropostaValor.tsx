import sta1096 from "@/assets/carousel/STA1096.jpg";
import sta1100 from "@/assets/carousel/STA1100.jpg";
import sta1113 from "@/assets/carousel/STA1113.jpg";
import sta1129 from "@/assets/carousel/STA1129.jpg";
import sta1151 from "@/assets/carousel/STA1151.jpg";
import sta1182 from "@/assets/carousel/STA1182.jpg";
import sta1326 from "@/assets/carousel/STA1326.jpg";
import sta1361 from "@/assets/carousel/STA1361.jpg";
import sta1540 from "@/assets/carousel/STA1540.jpg";
import sta1872 from "@/assets/carousel/STA1872.jpg";

const carouselImages = [
  sta1096,
  sta1100,
  sta1113,
  sta1129,
  sta1151,
  sta1182,
  sta1326,
  sta1361,
  sta1540,
  sta1872,
];

// Dividir imagens para mobile
const carouselTopMobile = [sta1096, sta1100, sta1113, sta1129, sta1151];
const carouselBottomMobile = [sta1182, sta1326, sta1361, sta1540, sta1872];

const PropostaValor = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Copy Principal */}
          <div className="text-left md:text-center space-y-4">
            <p className="text-base md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              O NOVAIA Club ajuda empresários a aumentarem vendas, reduzirem custos e criarem clareza estratégica através de um sistema único, eficiente e contínuo de mentoria, execução mensal e IA aplicada.
            </p>
            <ul className="text-base md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto space-y-2 list-none">
              <li className="flex items-center md:justify-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <strong>Não é só mais um curso.</strong>
              </li>
              <li className="flex items-center md:justify-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <strong>Não é sobre ferramenta.</strong>
              </li>
              <li className="flex items-center md:justify-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                <strong>Não é sobre conteúdo desconectado.</strong>
              </li>
            </ul>
            <p className="text-base md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              É sobre pensar negócios com profundidade, tomar decisões melhores e implementar IA de forma inteligente e alinhada à estratégia do seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Desktop - Único */}
      <div className="mt-12 max-w-5xl mx-auto overflow-hidden hidden md:block">
        <div className="flex gap-0.5 animate-carousel hover:[animation-play-state:paused]">
          {[...carouselImages, ...carouselImages].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`NOVAIA Club evento ${(index % carouselImages.length) + 1}`}
              className="h-64 md:h-80 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Carousel Mobile - Dois carrosséis com direções opostas */}
      <div className="mt-8 overflow-hidden md:hidden">
        {/* Carrossel de cima - esquerda para direita */}
        <div className="flex gap-0.5 animate-carousel-mobile">
          {[...carouselTopMobile, ...carouselTopMobile].map((image, index) => (
            <img
              key={`top-${index}`}
              src={image}
              alt={`NOVAIA Club evento ${(index % carouselTopMobile.length) + 1}`}
              className="h-40 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Gap de 2px */}
        <div className="h-0.5" />
        
        {/* Carrossel de baixo - direita para esquerda */}
        <div className="flex gap-0.5 animate-carousel-reverse">
          {[...carouselBottomMobile, ...carouselBottomMobile].map((image, index) => (
            <img
              key={`bottom-${index}`}
              src={image}
              alt={`NOVAIA Club evento ${(index % carouselBottomMobile.length) + 6}`}
              className="h-40 w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropostaValor;
