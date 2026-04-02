"use client";
import { motion } from "framer-motion";
import { FileText, LayoutTemplate, Users, Code, Wrench } from "lucide-react";

export default function Processos() {
  const steps = [
    {
      id: "01",
      title: "Briefing",
      desc: "Entendimento profundo do seu negócio, mercado e objetivos.",
      icon: <FileText className="w-6 h-6 text-foreground" strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "Wireframe & Design",
      desc: "Estruturação das telas, UX e aplicação da alta fidelidade visual.",
      icon: <LayoutTemplate className="w-6 h-6 text-foreground" strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "Reuniões Constantes",
      desc: "Alinhamentos contínuos para garantir que cada pixel exale excelência.",
      icon: <Users className="w-6 h-6 text-foreground" strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "Implementação",
      desc: "Desenvolvimento técnico robusto com animações e performance extrema.",
      icon: <Code className="w-6 h-6 text-foreground" strokeWidth={1.5} />,
    },
    {
      id: "05",
      title: "Pós-Venda (Manutenção)",
      desc: "Cuidado e aprimoramento contínuo após o lançamento do projeto.",
      icon: <Wrench className="w-6 h-6 text-foreground" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="processos" className="w-full py-24 md:py-40 border-t border-foreground/10 relative overflow-hidden">
      
      {/* Title Area */}
      <div className="relative z-10 text-center mb-32">
        <h2 className="text-base uppercase tracking-[0.3em] font-medium text-foreground/50 mb-6">Nossa Metodologia</h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
        >
          O caminho para o <span className="font-serif italic text-primary">sucesso</span>
        </motion.h3>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        
        {/* Main Vertical Track */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2 hidden md:block"></div>

        <div className="flex flex-col gap-24 md:gap-40 relative">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.id} className={`w-full flex md:justify-between items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} relative`}>
                
                {/* Horizontal branch line (desktop only) */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: isEven ? "right" : "left" }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[calc(50%-2rem)] h-px bg-[#965EC7]/40 hidden md:block ${isEven ? 'left-8' : 'right-8'}`}
                />

                {/* Central Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-[#965EC7] z-20 hidden md:block"
                />

                {/* Card Container */}
                <div className={`w-full md:w-[calc(50%-4rem)] z-10 flex ${isEven ? 'justify-start md:justify-end' : 'justify-start'}`}>
                  
                  {/* Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-sm rounded-[2rem] border border-foreground/10 bg-background p-8 hover:border-[#965EC7]/50 transition-colors duration-500 group relative overflow-hidden"
                  >
                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#965EC7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                          {step.icon}
                        </div>
                        <span className="text-[#965EC7] font-serif italic text-3xl">{step.id}</span>
                      </div>
                      
                      <h4 className="text-3xl font-light mb-4 text-foreground">{step.title}</h4>
                      <p className="text-foreground/60 text-base leading-relaxed tracking-wide">
                        {step.desc}
                      </p>
                    </div>
                    {/* Corner subtle tech detail */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-foreground/[0.02] clip-path-corner"></div>
                  </motion.div>
                </div>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[calc(50%-4rem)]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
