interface GradientBackgroundEffectProps {
  offsetTop?: string;
  opacity?: number;
}

const GradientBackgroundEffect = ({ 
  offsetTop = '10%', 
  opacity = 0.4 
}: GradientBackgroundEffectProps) => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible" 
      style={{ top: offsetTop }}
    >
      {/* Gradiente radial azul ciano - transição suave até preto */}
      <div 
        className="absolute w-[600px] h-[450px] rounded-full"
        style={{ 
          background: `radial-gradient(circle, 
            hsl(195, 100%, 50%) 0%, 
            hsl(200, 100%, 60%) 10%, 
            hsl(200, 90%, 50%) 20%, 
            hsl(200, 70%, 35%) 35%, 
            hsl(200, 50%, 20%) 50%, 
            hsl(200, 30%, 10%) 65%, 
            hsl(0, 0%, 0%) 85%, 
            transparent 100%)`,
          opacity: opacity,
          filter: 'blur(140px)'
        }}
      />
      
      {/* Gradiente secundário laranja pastel - transição suave até preto */}
      <div 
        className="absolute w-[450px] h-[350px] rounded-full -translate-x-32 translate-y-24"
        style={{ 
          background: `radial-gradient(circle, 
            hsl(15, 100%, 70%) 0%, 
            hsl(20, 95%, 65%) 12%, 
            hsl(25, 85%, 55%) 25%, 
            hsl(25, 70%, 40%) 40%, 
            hsl(20, 50%, 25%) 55%, 
            hsl(15, 30%, 12%) 70%, 
            hsl(0, 0%, 0%) 85%, 
            transparent 100%)`,
          opacity: opacity * 0.5,
          filter: 'blur(120px)'
        }}
      />
      
      {/* Gradiente terciário azul para mais profundidade - transição suave */}
      <div 
        className="absolute w-[500px] h-[400px] rounded-full translate-x-28 -translate-y-16"
        style={{ 
          background: `radial-gradient(circle, 
            hsl(200, 100%, 55%) 0%, 
            hsl(205, 95%, 50%) 12%, 
            hsl(210, 85%, 45%) 25%, 
            hsl(210, 70%, 32%) 40%, 
            hsl(205, 50%, 20%) 55%, 
            hsl(200, 30%, 10%) 70%, 
            hsl(0, 0%, 0%) 85%, 
            transparent 100%)`,
          opacity: opacity * 0.4,
          filter: 'blur(130px)'
        }}
      />
    </div>
  );
};

export default GradientBackgroundEffect;