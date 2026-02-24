import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ImageIcon, Video } from "lucide-react";
import GradientBackgroundEffect from "@/components/GradientBackgroundEffect";

const getEmbedUrl = (url: string) => {
  // YouTube Shorts
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }
  // Google Drive
  const driveMatch = url.match(/\/file\/d\/([^/]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return url;
};
import brunoKoury from "@/assets/bruno-koury.png";
import viniciusRezende from "@/assets/vinicius-rezende.jpg";
import anaCaroline from "@/assets/ana-caroline.png";
import ivanYoshimoto from "@/assets/ivan-yoshimoto.png";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Bruno Koury",
      empresa: "Solarmine",
      depoimento: "Incrível poder olhar o modelo de negócio com critério e entender como a IA melhora nossos processos. Escalamos.",
      foto: brunoKoury,
      videoUrl: "https://www.youtube.com/shorts/NsmTsHjaCsw"
    },
    {
      nome: "Vinicius Rezende",
      empresa: "protegeTODOS | Cartão de Todos | Amor Saúde",
      depoimento: "Visão estratégica, impacto social e inovação aplicável. O NOVAIA acelera decisões importantes.",
      foto: viniciusRezende,
      videoUrl: "https://www.youtube.com/shorts/DXZ1RYGiyf0"
    },
    {
      nome: "Anne Caroline",
      empresa: "ACS Engenharia",
      depoimento: "A IA otimizou tudo: financeiro, administrativo, operações. Tornou a empresa mais leve. O NOVAIA facilitou tudo.",
      foto: anaCaroline,
      videoUrl: "https://www.youtube.com/shorts/zW3GgxkoVYE"
    },
    {
      nome: "Ivan Yoshimoto",
      empresa: "Fleximedical (B-Corp)",
      depoimento: "Ambiente de alto nível, profundidade estratégica e IA aplicada na prática.",
      foto: ivanYoshimoto,
      videoUrl: "https://www.youtube.com/shorts/YmYCDq2y42w"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <GradientBackgroundEffect offsetTop="15%" opacity={0.35} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1080px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              O que dizem os membros<br />do NOVAIA Club
            </h2>
          </div>

          {/* Cards de Depoimentos */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="bg-black/80 border-border p-6 flex flex-col">
                {/* Header com avatar e info */}
                <div className="flex items-center gap-4 mb-4">
                  {depoimento.foto ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={depoimento.foto} 
                        alt={depoimento.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-14 h-14 bg-muted/30 rounded-full border border-border/50 flex-shrink-0">
                      <ImageIcon className="w-6 h-6 text-muted-foreground/40" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {depoimento.nome}
                    </h3>
                    <p className="text-sm text-primary">
                      {depoimento.empresa}
                    </p>
                  </div>
                </div>

                {/* Depoimento */}
                <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                  "{depoimento.depoimento}"
                </p>

                {/* Vídeo */}
                {depoimento.videoUrl ? (
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden border border-border/50 bg-black">
                      <iframe
                        src={getEmbedUrl(depoimento.videoUrl)}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] bg-muted/30 rounded-xl border border-border/50">
                      <div className="text-center">
                        <Video className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground/60">
                          Vídeo 45-60s
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
