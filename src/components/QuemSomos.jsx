"use client";
import { motion } from "framer-motion";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="w-full min-h-[80vh] flex flex-col md:flex-row border-t border-foreground/10 relative mt-24">
      {/* Vertical divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 hidden md:block"></div>

      {/* Left Area - Title */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-between border-b md:border-b-0 md:border-r border-foreground/10">
        <div>
          <h2 className="text-base uppercase tracking-[0.3em] font-medium text-foreground/50 mb-12">Quem Somos</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
              Desafiamos o <span className="font-serif italic font-normal text-[#965EC7]">ordinário</span> para construir o extraordinário.
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Right Area - Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl ml-auto"
        >
          <p className="text-foreground/70 text-xl md:text-2xl font-light leading-relaxed mb-10">
            A WHYS é um estúdio digital focado em criar experiências imersivas. Nós unimos um design meticuloso, pixel-perfect, com tecnologias de alta performance para entregar resultados que não apenas funcionam, mas impressionam.
          </p>
          <p className="text-foreground/70 text-xl md:text-2xl font-light leading-relaxed">
            Nossa missão é elevar o patamar de marcas ambiciosas através de identidades visuais sofisticadas e interfaces interativas.
          </p>
          
          <div className="mt-20 pt-10 border-t border-foreground/10 flex gap-10">
            <div>
              <div className="text-5xl font-light font-serif italic mb-3">10+</div>
              <div className="text-sm uppercase tracking-widest text-foreground/40 font-bold">Anos de XP</div>
            </div>
            <div>
              <div className="text-5xl font-light font-serif italic mb-3">50+</div>
              <div className="text-sm uppercase tracking-widest text-foreground/40 font-bold">Projetos</div>
            </div>
            <div>
              <div className="text-5xl font-light font-serif italic mb-3 text-[#965EC7]">100%</div>
              <div className="text-sm uppercase tracking-widest text-foreground/40 font-bold">Entrega</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
