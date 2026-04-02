"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora para criar um site premium?",
    answer: "Um projeto completo, desde o briefing até a entrega final com animações avançadas (como GSAP e Framer Motion) e otimização de performance, geralmente leva de 4 a 8 semanas, dependendo da complexidade do escopo."
  },
  {
    question: "Quais tecnologias vocês utilizam no desenvolvimento?",
    answer: "Nossa stack é focada no que há de mais moderno e performático: Next.js (React) no front-end, TailwindCSS para estilização milimétrica, e GSAP / Lenis / Framer Motion para animações super fluidas que imitam apps nativos."
  },
  {
    question: "O código final e o design serão meus?",
    answer: "Sim, 100%. Ao final do projeto, todos os assets de design (Figma) e o repositório de código fonte são transferidos diretamente para você ou para a conta da sua empresa."
  },
  {
    question: "Vocês fazem manutenção ou SEO depois do site estar online?",
    answer: "Com certeza. Oferecemos pacotes de pós-venda e manutenção (Technical SEO, atualizações de segurança e integrações) para garantir que sua plataforma continue no topo do mercado a longo prazo."
  },
  {
    question: "Como funciona a comunicação durante o projeto?",
    answer: "Criamos um canal direto e exclusivo de comunicação (via Slack ou WhatsApp). Temos reuniões de alinhamento e demonstrações visuais ao fim de cada milestone para que você acompanhe cada pixel do processo."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-24 md:py-40 border-t border-foreground/10 mt-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Enunciado */}
        <div className="mb-20">
          <h2 className="text-base uppercase tracking-[0.3em] font-medium text-foreground/50 mb-6">Suas Dúvidas</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Perguntas <span className="font-serif italic text-[#965EC7]">Frequentes</span>
          </motion.h3>
        </div>

        {/* Lista de FAQs */}
        <div className="flex flex-col border-t border-foreground/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-foreground/10"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-2xl md:text-3xl font-light transition-colors ${isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#965EC7] bg-[#965EC7] text-white rotate-180" : "border-foreground/20 text-foreground group-hover:border-foreground"}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pr-12 text-foreground/50 font-light leading-relaxed text-xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
