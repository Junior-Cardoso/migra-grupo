import NavigationConsultor from "@/components/NavigationConsultor";
import FooterConsultor from "@/components/FooterConsultor";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import GradientBackgroundEffect from "@/components/GradientBackgroundEffect";
import CountdownTimer from "@/components/CountdownTimer";
import Bitrix24ConsultorButton from "@/components/Bitrix24ConsultorButton";
import { CheckCircle2, Sparkles, TrendingUp, Target, Clock, Shield, AlertCircle, Users, TrendingDown, Zap, DollarSign, Video } from "lucide-react";
import novaiaClubBadge from "@/assets/novaia-club-badge.png";
import consultorHeroImage from "@/assets/consultor-ia-hero.jpg";
import relatorioExemplo from "@/assets/relatorio-exemplo.jpg";
import depoimentoAnaBeatriz from "@/assets/depoimento-ana-beatriz.jpg";
import depoimentoRicardoMonteiro from "@/assets/depoimento-ricardo-monteiro.jpg";
import depoimentoJulianaLemos from "@/assets/depoimento-juliana-lemos.jpg";
import depoimentoMarcosFarias from "@/assets/depoimento-marcos-farias.jpg";
import depoimentoCamilaDuarte from "@/assets/depoimento-camila-duarte.jpg";
import depoimentoFelipeAssuncao from "@/assets/depoimento-felipe-assuncao.jpg";
import depoimentoRenataPaiva from "@/assets/depoimento-renata-paiva.jpg";
import depoimentoJoaoVictor from "@/assets/depoimento-joao-victor.jpg";
import depoimentoPatriciaMoura from "@/assets/depoimento-patricia-moura.jpg";
const testimonials = [{
  name: "Ana Beatriz Ramos",
  role: "Diretora Comercial",
  image: depoimentoAnaBeatriz,
  quote: "Nosso time estava travado e sem clareza. O diagnóstico mostrou exatamente onde estávamos perdendo dinheiro. Em 45 dias, reduzimos retrabalho e aumentamos 22% nas vendas sem contratar ninguém."
}, {
  name: "Ricardo Monteiro",
  role: "CEO de Startup SaaS",
  image: depoimentoRicardoMonteiro,
  quote: "Eu achava que o problema era marketing, mas o agente revelou gargalos operacionais. Ajustamos 3 processos e ganhamos 30% de eficiência. Foi como acender a luz num quarto escuro."
}, {
  name: "Juliana Lemos",
  role: "Fundadora de E-commerce",
  image: depoimentoJulianaLemos,
  quote: "Eu não sabia por onde começar. O plano de ação priorizado salvou meu mês. Cortamos custos inúteis e ampliamos margem em 18%. Nunca tive tanta clareza em tão pouco tempo."
}, {
  name: "Marcos Farias",
  role: "Empresário do Setor Educacional",
  image: depoimentoMarcosFarias,
  quote: "O agente mostrou oportunidades que meu time ignorava. Estruturamos funil e, em dois meses, aumentamos matrículas em 27% sem ampliar equipe. Resultado rápido e direto."
}, {
  name: "Camila Duarte",
  role: "Gestora de Clínica de Saúde",
  image: depoimentoCamilaDuarte,
  quote: "Estávamos atolados em tarefas manuais. As automações sugeridas economizaram 40 horas por mês. Hoje decidimos com dados, não com achismos. Foi transformador."
}, {
  name: "Felipe Assunção",
  role: "Sócio de Agência Digital",
  image: depoimentoFelipeAssuncao,
  quote: "Eu gastava tempo com reuniões e diagnósticos confusos. O agente entregou clareza em 5 minutos. Reorganizamos operações e crescemos 20% mantendo o mesmo time."
}, {
  name: "Renata Paiva",
  role: "COO de Indústria Têxtil",
  image: depoimentoRenataPaiva,
  quote: "Descobrimos desperdícios que custavam caro. O agente trouxe projeções de impacto e ROI. Eliminamos gargalos e aumentamos produtividade em 28% no trimestre."
}, {
  name: "João Victor Almeida",
  role: "Empresário do Setor de Serviços",
  image: depoimentoJoaoVictor,
  quote: "Nosso crescimento estava estagnado. O diagnóstico mostrou onde aplicar IA para escalar. Automatizamos atendimento e reduzimos custos em 17% logo no primeiro mês."
}, {
  name: "Patrícia Moura",
  role: "Proprietária de Rede de Restaurantes",
  image: depoimentoPatriciaMoura,
  quote: "Eu nunca tinha visto tanta clareza estratégica. Ajustamos cardápio, estoque e canais. Em 60 dias, ampliamos lucro em 23%. O agente virou ferramenta diária."
}];
const ConsultorIA = () => {
  return <div className="min-h-screen bg-background">
      <NavigationConsultor />
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
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
            {/* Headline Principal */}
            <div className="text-center mb-12 space-y-4">
              {/* Logo Badge */}
              <img src={novaiaClubBadge} alt="NOVAIA Club Badge" className="w-[100px] h-[100px] mx-auto" />
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-4xl mx-auto">
                Você tem o diagnóstico errado do seu negócio        
              </h1>
              <div className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto space-y-4">
                <p>
                  Empresários como você acham que o problema é marketing, vendas ou custo.<br />
                  Mas o real culpado? <span className="text-primary font-semibold">É a falta de estrutura.</span>
                </p>
                <p className="italic text-foreground/80 font-medium">
                  Vamos descobrir em 5 minutos.<br />
                  Porque você merece saber a verdade.
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Coluna Esquerda: Vídeo */}
                <div className="flex flex-col">
                  {/* Imagem Hero */}
                  <div className="w-full flex-1">
                    <div className="relative w-full h-full rounded-2xl border border-border/50 overflow-hidden">
                      <img src={consultorHeroImage} alt="Consultor IA analisando dados de negócio" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Benefícios, Diferencial, CTA */}
                <div className="space-y-6 w-full overflow-hidden">
                  {/* Benefícios Rápidos */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 rounded-lg bg-black/40 border border-border/30 text-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs md:text-sm font-medium text-foreground">Tudo automatizado</p>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg bg-black/40 border border-border/30 text-center">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs md:text-sm font-medium text-foreground">Tudo rápido</p>
                    </div>
                  </div>

                  {/* Diferencial */}
                  <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                      <strong className="text-primary">Não é consultoria cara.</strong> Não é relatório chato. 
                      É um diagnóstico inteligente que mostra exatamente o que está travando seu crescimento 
                      e como usar IA para disparar seus resultados.
                    </p>
                  </div>

                  {/* CTA Hero */}
                  <div className="space-y-4 text-center md:text-left">
                    <Bitrix24ConsultorButton 
                      className="w-full md:w-auto px-6 md:px-8 py-6 text-sm md:text-base font-medium"
                    >
                      QUERO MEU DIAGNÓSTICO AGORA
                    </Bitrix24ConsultorButton>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>5 minutos</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Resultado instantâneo</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="p-3 md:p-4 rounded-lg bg-black/40 border border-border/30 text-center md:text-left">
                    <p className="text-foreground/70 text-xs md:text-sm">
                      <strong className="text-foreground text-base md:text-lg">4.500+</strong> empresas já analisaram seu negócio com o agente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PROBLEMA + DOR */}
      <section id="problema" className="py-20 bg-background relative overflow-hidden">
        <GradientBackgroundEffect />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                O Verdadeiro Problema Não É Falta de Informação. É Isto:
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6 mb-12">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Você já sabe o que não está funcionando. Você sente no dia a dia.
                </p>
                
                <div className="grid gap-4 text-left">
                  {["Mas não consegue enxergar a raiz do problema.", "Não sabe por onde começar a corrigir.", "Não tem clareza sobre qual oportunidade vale mais a pena atacar.", "E cada decisão que toma parece ser um 'chute educado'."].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-border/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {item}
                      </p>
                    </div>)}
                </div>

                <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-xl font-semibold text-primary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    É frustrante
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    É caro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    E está custando seu crescimento
                  </li>
                </ul>
              </div>
            </div>

            {/* Grid de Dores */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[{
              icon: AlertCircle,
              text: "Processos manuais que travam operação"
            }, {
              icon: Users,
              text: "Times sobrecarregados, mas vendas oscilam"
            }, {
              icon: Zap,
              text: "Não sabe se a IA vale a pena (ou como usar)"
            }, {
              icon: TrendingDown,
              text: "Crescimento vem, mas custo aumenta mais"
            }, {
              icon: Target,
              text: "Falta de visão estratégica clara"
            }, {
              icon: Clock,
              text: "Oportunidades estão passando despercebidas"
            }, {
              icon: DollarSign,
              text: "Concorrência está à frente"
            }].map((dor, index) => {
              const Icon = dor.icon;
              return <Card key={index} className="bg-black/80 border-border p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-destructive" />
                      </div>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {dor.text}
                      </p>
                    </div>
                  </Card>;
            })}
            </div>

            {/* Copy de Reforço */}
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Você precisa de uma visão 360º do seu negócio.
              </p>
              <ul className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-primary">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Rápida
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Clara
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Acionável
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: APRESENTAÇÃO DO AGENTE */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Apresentamos: Seu Consultor de Negócios & IA
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Um agente inteligente que faz em minutos o que consultores caros demoravam semanas para descobrir. Ele analisa seu negócio profundamente, identifica oportunidades escondidas e entrega um plano de ação estratégico com prioridades claras.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg font-semibold text-primary">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Tudo automatizado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Sem reuniões chatas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Sem relatórios intermináveis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Apenas resultado
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard Placeholder */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="aspect-video rounded-2xl border border-border/50 bg-muted/30 overflow-hidden">
                <iframe src="https://drive.google.com/file/d/1vFUhnSXTplJBA6ZIi_vMhNDTwwwPIsXN/preview" className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>

            {/* Diferenciais */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Diagnóstico em 5 minutos (não 5 semanas)", "Análise profunda com IA (não superficial)", "Plano de ação priorizado e acionável", "Identifica oportunidades que seu time não vê", "Mostra exatamente onde usar IA para máximo impacto", "Sem contrato. Sem amarras. Sem consultoria cara."].map((diferencial, index) => <Card key={index} className="bg-black/80 border-border p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base text-foreground/80 leading-relaxed">{diferencial}</p>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O QUE O AGENTE FAZ */}
      <section id="como-funciona" className="py-20 bg-background relative overflow-hidden">
        <GradientBackgroundEffect offsetTop="20%" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Como O Agente Analisa Seu Negócio
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Análise Profunda */}
              <Card className="bg-black/80 border-border rounded-2xl p-6 flex flex-col">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  Análise Profunda
                </h3>
                <p className="text-sm text-foreground/80 mb-4 text-center">O agente examina:</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pontos fortes e fracos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Riscos operacionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gargalos de crescimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Oportunidades ocultas</span>
                  </li>
                </ul>
              </Card>

              {/* 2. Avalia Modelo de Negócio */}
              <Card className="bg-black/80 border-border rounded-2xl p-6 flex flex-col">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  Modelo de Negócio
                </h3>
                <p className="text-sm text-foreground/80 mb-4 text-center">
                  Business Model Canvas completo:
                </p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Proposta de valor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Segmentos e canais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Receitas e custos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Recursos-chave</span>
                  </li>
                </ul>
              </Card>

              {/* 3. Identifica Aplicações de IA */}
              <Card className="bg-black/80 border-border rounded-2xl p-6 flex flex-col">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  Aplicações de IA
                </h3>
                <p className="text-sm text-foreground/80 mb-4 text-center">O agente sugere:</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automações inteligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Agentes de vendas/atendimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Copilotos para equipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Com ROI estimado</span>
                  </li>
                </ul>
              </Card>

              {/* 4. Entrega Plano de Ação */}
              <Card className="bg-black/80 border-border rounded-2xl p-6 flex flex-col">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  Plano de Ação
                </h3>
                <p className="text-sm text-foreground/80 mb-4 text-center">O agente gera:</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prioridades claras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Passos práticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Roadmap executável</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Impacto esperado</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Placeholder Relatório */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="rounded-2xl border border-border/50 overflow-hidden">
                <img src={relatorioExemplo} alt="Exemplo de relatório do Consultor IA" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: BENEFÍCIOS */}
      <section id="beneficios" className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                O Que Você Recebe No Final
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              icon: Target,
              title: "Clareza Total",
              text: "Sai do caos mental e entra em um quadro claro do seu negócio."
            }, {
              icon: CheckCircle2,
              title: "Plano Executável",
              text: "Não é teoria. É um mapa prático, priorizado, que sua equipe consegue executar."
            }, {
              icon: Clock,
              title: "Economia de Tempo",
              text: "O que levaria meses de consultoria, você tem em minutos."
            }, {
              icon: Sparkles,
              title: "Identificação de Oportunidades",
              text: "Enxerga o que seu time não vê. Oportunidades de crescimento que estão escondidas."
            }, {
              icon: TrendingUp,
              title: "Vantagem Competitiva",
              text: "Aprenda a usar IA melhor que seus concorrentes. Mais rápido. Mais barato. Mais eficiente."
            }, {
              icon: Shield,
              title: "Confiança para Tomar Decisões",
              text: "Pare de 'chutar educado'. Tome decisões baseadas em dados e estratégia."
            }].map((beneficio, index) => {
              const Icon = beneficio.icon;
              return <Card key={index} className="bg-black/80 border-border p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {beneficio.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {beneficio.text}
                      </p>
                    </div>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: PROVA SOCIAL */}
      <section id="depoimentos" className="py-20 bg-background relative overflow-hidden">
        <GradientBackgroundEffect offsetTop="40%" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Empresas que Já Usam o Agente
              </h2>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  4.500+
                </div>
                <div className="text-xl font-semibold text-foreground">
                  Empresas
                </div>
                <p className="text-foreground/80">
                  Já rodaram diagnóstico com nosso agente e transformaram seus negócios.
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  98%
                </div>
                <div className="text-xl font-semibold text-foreground">
                  Taxa de Satisfação
                </div>
                <p className="text-foreground/80">
                  Empresas recomendam o agente para colegas.
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  30-40%
                </div>
                <div className="text-xl font-semibold text-foreground">
                  de Melhoria
                </div>
                <p className="text-foreground/80">
                  Em média, empresas identificam 30-40% de melhoria possível em seus processos.
                </p>
              </div>
            </div>

            {/* Depoimentos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-card/50 border-border/50 p-6 backdrop-blur-sm hover:border-primary/30 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-500 text-sm">
                      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: COMO FUNCIONA */}
      <section id="comecar" className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1080px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                De Confusão Para Clareza em 3 Passos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Passo 1 */}
              <Card className="bg-black/80 border-border p-8 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Clique no Botão
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Você acessa o agente. Leva 2 segundos.
                </p>
              </Card>

              {/* Passo 2 */}
              <Card className="bg-black/80 border-border p-8 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Responda Perguntas Estratégicas
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  O agente faz 15-20 perguntas sobre seu negócio. Você responde. Leva 5-8 minutos.
                </p>
              </Card>

              {/* Passo 3 */}
              <Card className="bg-black/80 border-border p-8 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Receba Seu Diagnóstico Completo
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Em segundos, você recebe diagnóstico detalhado, plano de ação priorizado, sugestões de IA com ROI e visão de futuro estratégico.
                </p>
              </Card>
            </div>

            {/* Timer Countdown */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="rounded-2xl border border-border/50 bg-muted/30 overflow-hidden">
                <CountdownTimer />
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center space-y-6">
              <Bitrix24ConsultorButton 
                className="w-full md:w-auto px-8 py-6 text-base font-medium"
              >
                Começar Diagnóstico Agora
              </Bitrix24ConsultorButton>
              <p className="text-sm text-foreground/60">
                5 minutos para descobrir o que está travando seu crescimento
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterConsultor />
    </div>;
};
export default ConsultorIA;