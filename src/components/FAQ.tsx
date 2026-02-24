import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Bitrix24CTAButton from "./Bitrix24CTAButton";

const FAQ = () => {
  const faqs = [{
    question: "Quem pode entrar?",
    answer: "Empresas com faturamento acima de R$ 3 milhões e empresários com maturidade e visão estratégica."
  }, {
    question: "Como funciona a aplicação?",
    answer: "Você preenche o formulário. Nosso time avalia seu perfil e agenda uma conversa de alinhamento."
  }, {
    question: "Quanto custa?",
    answer: "R$ 120.000 — À vista ou em até 12x."
  }, {
    question: "É preciso saber IA?",
    answer: "Não. Você aprende dentro do clube. Do jeito certo!"
  }, {
    question: "Minha equipe participa?",
    answer: "Sim, em alguns programas do clube."
  }];
  return <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Column - Sticky */}
            <div className="md:sticky md:top-32 space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Perguntas frequentes
              </h2>
              
              <p className="text-foreground/70 leading-relaxed">
                Tire suas dúvidas sobre o NOVAIA Club.
              </p>
              
              <Bitrix24CTAButton className="mt-4">
                Quero saber mais agora
              </Bitrix24CTAButton>
            </div>

            {/* Right Column - Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg bg-white/[0.01] px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="text-foreground font-medium pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;
