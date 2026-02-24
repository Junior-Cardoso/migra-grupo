import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reinicia o timer quando chega a 0
      setTimeLeft(300);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((300 - timeLeft) / 300) * 100;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <Clock className="w-16 h-16 text-primary animate-pulse" />
      
      <div className="text-center space-y-2">
        <p className="text-sm text-foreground/60 uppercase tracking-wider">
          Tempo do Diagnóstico
        </p>
        <div className="text-6xl md:text-7xl font-bold text-primary tabular-nums">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
        <p className="text-sm text-foreground/70">
          {timeLeft > 0 ? 'Apenas alguns minutos para transformar seu negócio' : 'Diagnóstico completo!'}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;