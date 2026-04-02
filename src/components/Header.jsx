"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedThemeToggle } from "./ui/animated-theme-toggle";
import { ButtonWithIcon } from "./ui/button-with-icon";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 flex items-start justify-between px-4 md:px-8 xl:px-12 pt-6 pointer-events-none"
    >
      {/* Container Background */}
      <div className="absolute inset-x-4 md:inset-x-8 xl:inset-x-12 top-6 h-20 border border-white/20 rounded-full flex items-center justify-between pointer-events-none bg-black/50 backdrop-blur-md"></div>
      
      {/* Left - Logo */}
      <div className="relative z-10 flex items-center h-20 pl-6 lg:pl-10 pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity">
        <div className="rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a0a] w-16 h-16">
          <Image src="/logo-simbolo.png" alt="WHYS Icon" width={64} height={64} className="object-cover w-full h-full filter hover:brightness-125" unoptimized />
        </div>
      </div>

      {/* Center - Nav (Symmetrically anchored) */}
      <div className="absolute inset-0 z-10 hidden md:block pointer-events-none">
        
        {/* Left Links */}
        <div className="absolute right-[calc(50%+3.5rem)] lg:right-[calc(50%+4rem)] top-6 h-20 flex items-center justify-end gap-6 lg:gap-12 xl:gap-16 pointer-events-auto text-[10px] uppercase tracking-widest font-bold">
          <a href="#quem-somos" className="hover:text-[#965EC7] transition-colors whitespace-nowrap">Quem Somos</a>
          <a href="#processos" className="hover:text-[#965EC7] transition-colors">Processos</a>
        </div>

        {/* Right Links */}
        <div className="absolute left-[calc(50%+3.5rem)] lg:left-[calc(50%+4rem)] top-6 h-20 flex items-center justify-start gap-6 lg:gap-12 xl:gap-16 pointer-events-auto text-[10px] uppercase tracking-widest font-bold">
          <a href="#cases" className="hover:text-[#965EC7] transition-colors whitespace-nowrap">Cases</a>
          <a href="#faqs" className="hover:text-[#965EC7] transition-colors">FAQs</a>
          <a href="#nosso-time" className="hover:text-[#965EC7] transition-colors whitespace-nowrap">Nosso Time</a>
        </div>
      </div>

      {/* Center Absolute Drop */}
      <a href="#cases" className="absolute left-1/2 -translate-x-1/2 top-6 h-28 w-24 flex flex-col items-center justify-end pb-4 border border-t-0 border-white/20 rounded-b-full bg-black pointer-events-auto group outline-none">
        <span className="text-[10px] uppercase font-bold tracking-widest mb-3 whitespace-nowrap -mt-6 group-hover:text-white/70 transition-colors">VER MAIS</span>
        <div className="w-10 h-16 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:border-white transition-colors group-hover:scale-105 active:scale-95 overflow-hidden">
          <span className="w-px h-6 bg-white block relative group-hover:translate-y-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-white rotate-45 translate-y-0.5"></span>
          </span>
        </div>
      </a>

      {/* Right Actions */}
      <div className="relative z-10 flex items-center gap-4 h-20 pr-3 md:pr-6 pointer-events-auto">
        <AnimatedThemeToggle />
        <a href="#contato">
          <ButtonWithIcon />
        </a>
      </div>
    </motion.header>
  );
}
