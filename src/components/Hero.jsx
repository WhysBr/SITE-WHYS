"use client";

import { Plus, Eye, Share2, Globe, MoveDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // Shared word-reveal animation props
  const wordReveal = (delay = 0) => ({
    initial: { y: "110%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative w-full flex flex-col justify-end pb-8 md:pb-12 pt-28 md:pt-40 overflow-hidden"
    >
      {/* —— TOP METADATA (hidden on mobile) —— */}
      <motion.div
        variants={item}
        className="absolute top-0 left-0 w-full hidden sm:flex justify-between items-start mt-8 px-4 md:px-0"
      >
        <p className="max-w-[220px] md:max-w-[280px] text-[12px] md:text-[13px] text-foreground/80 leading-snug font-medium">
          nosso estúdio é dedicado a criar<br />
          experiências digitais visualmente<br />
          deslumbrantes e envolventes
        </p>
        <div className="text-right text-[12px] md:text-[13px] text-foreground/80 leading-snug font-medium">
          <p>design criativo</p>
          <p>branding</p>
          <p className="flex items-center justify-end gap-2">
            ux/ui <span className="w-2 h-2 rounded-full bg-foreground block mt-0.5" />
          </p>
        </div>
      </motion.div>

      {/* —— GLOBE (desktop only) —— */}
      <motion.div
        variants={item}
        className="absolute top-[10%] left-[50%] -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <span className="text-[11px] mb-3 font-medium uppercase tracking-widest text-foreground">explorar</span>
        <div className="group w-[120px] h-[120px] rounded-full border border-foreground/20 flex items-center justify-center p-2 cursor-pointer hover:border-foreground/50 hover:scale-105 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-foreground/10 flex items-center justify-center backdrop-blur-sm border border-foreground/5 group-hover:bg-foreground/20 transition-colors">
            <Globe strokeWidth={1} className="text-foreground w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
          </div>
        </div>
      </motion.div>

      {/* —— FLOATING ICONS (desktop only) —— */}
      <motion.div variants={item} className="absolute left-[3%] bottom-[75%] w-12 h-12 rounded-full border border-foreground/30 items-center justify-center hover:bg-[#965EC7] hover:border-[#965EC7] hover:text-white text-foreground hover:scale-110 cursor-pointer transition-all duration-300 hidden md:flex">
        <Plus className="w-6 h-6" strokeWidth={1.5} />
      </motion.div>
      <motion.div variants={item} className="absolute left-[20%] bottom-[70%] hidden md:flex gap-4">
        {[Eye, Share2].map((Icon, i) => (
          <div key={i} className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-[#965EC7] hover:border-[#965EC7] hover:text-white text-foreground hover:scale-110 cursor-pointer transition-all duration-300">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
        ))}
      </motion.div>

      {/* —— CONQUER TEXT (hidden on mobile) —— */}
      <motion.div
        variants={item}
        className="absolute right-4 md:right-0 bottom-[70%] text-right text-[12px] md:text-[13px] font-medium leading-snug text-foreground hidden sm:block"
      >
        conquiste os lugares<br />mais altos <span className="text-[#965EC7]">conosco</span>
      </motion.div>

      {/* ============================================
          TIPOGRAFIA PRINCIPAL
          Mobile  → cada palavra em sua linha, tamanho fixo em rem para nunca vazar
          Desktop → lado a lado, tamanho em vw para impacto cinematográfico
         ============================================ */}
      <div className="w-full flex flex-col relative z-0 mt-8 md:mt-16 px-4 md:px-0">

        {/* === MOBILE LAYOUT (< md) === */}
        <div className="flex flex-col md:hidden leading-[0.88]">
          {["Creative", "Design", "Digital"].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                {...wordReveal(0.1 + i * 0.12)}
                className="block text-[13vw] font-semibold uppercase tracking-[-0.02em] text-foreground"
              >
                {word}
              </motion.span>
            </div>
          ))}
          <div className="overflow-hidden">
            <motion.span
              {...wordReveal(0.46)}
              className="block text-[14vw] font-serif italic font-normal tracking-tight text-foreground"
            >
              Studio
            </motion.span>
          </div>

          {/* NOSSOS PROJETOS — mobile */}
          <motion.div
            variants={item}
            className="flex flex-col items-start cursor-pointer group mt-8"
          >
            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-tighter text-foreground group-hover:text-foreground/70 transition-colors">
              NOSSOS
              <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground transition-colors">
                <MoveDown strokeWidth={3} className="w-3 h-3 text-foreground group-hover:text-background transition-colors" />
              </div>
            </div>
            <div className="font-bold text-sm uppercase tracking-tighter text-foreground group-hover:text-foreground/70 transition-colors">PROJETOS</div>
          </motion.div>
        </div>

        {/* === DESKTOP LAYOUT (>= md) === */}
        <div className="hidden md:flex flex-col">
          {/* Linha 1: Creative — Design */}
          <div className="w-full flex justify-between items-end leading-[0.88] overflow-hidden">
            <motion.h1 {...wordReveal(0.1)} className="text-[7.5vw] font-semibold uppercase tracking-[-0.02em] text-foreground whitespace-nowrap">
              Creative
            </motion.h1>
            <motion.h1 {...wordReveal(0.2)} className="text-[7.5vw] font-semibold uppercase tracking-[-0.02em] text-foreground whitespace-nowrap">
              Design
            </motion.h1>
          </div>

          {/* Linha 2: Digital — Studio */}
          <div className="w-full relative flex justify-center items-end leading-[0.88] mt-6 overflow-hidden">
            {/* Projects Widget */}
            <motion.div variants={item} className="absolute left-0 bottom-4 flex flex-col items-start cursor-pointer group">
              <div className="flex items-center gap-2 font-bold text-lg xl:text-xl uppercase tracking-tighter group-hover:text-foreground/70 transition-colors text-foreground">
                NOSSOS
                <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center mb-1 group-hover:bg-foreground transition-colors">
                  <MoveDown strokeWidth={3} className="w-4 h-4 text-foreground group-hover:text-background transition-colors" />
                </div>
              </div>
              <div className="font-bold text-lg xl:text-xl uppercase tracking-tighter group-hover:text-foreground/70 transition-colors text-foreground">PROJETOS</div>
            </motion.div>

            {/* Rotating star */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute left-[10%] bottom-1"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground opacity-80">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
              </svg>
            </motion.div>

            {/* Words */}
            <div className="flex pb-6 pt-2">
              <motion.h1 {...wordReveal(0.3)} className="text-[7.5vw] font-semibold uppercase tracking-[-0.02em] text-foreground whitespace-nowrap">
                Digital
              </motion.h1>
              <motion.h1 {...wordReveal(0.4)} className="text-[8vw] font-serif italic tracking-tight font-normal text-foreground pl-8 whitespace-nowrap">
                Studio
              </motion.h1>
            </div>

            {/* Dots */}
            <motion.div variants={item} className="absolute right-0 bottom-6 flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-foreground block" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-foreground/60 block" />
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
