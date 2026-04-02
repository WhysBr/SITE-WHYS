"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Share2, ArrowRight } from "lucide-react";

// Social icons
const FacebookIcon  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const TwitterIcon   = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const LinkedinIcon  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const YoutubeIcon   = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>);
const GithubIcon    = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
const WhatsAppIcon  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.428a.5.5 0 0 0 .627.61l5.758-1.51A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.022-1.378l-.36-.214-3.733.979.997-3.645-.234-.373A9.818 9.818 0 0 1 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.427-4.392 9.818-9.818 9.818z"/></svg>);

// Animated label + input field
function FormField({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 group-focus-within:text-[#965EC7] transition-colors duration-300"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    setSending(true);
    const text = `*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Assunto:* ${formData.assunto}\n\n*Mensagem:*\n${formData.mensagem}`;
    const url = `https://wa.me/5569981162676?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // Reset after short delay
    setTimeout(() => {
      setSending(false);
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    }, 1200);
  };

  const inputClass =
    "w-full bg-transparent border-b border-foreground/20 py-3 text-sm md:text-base text-foreground focus:outline-none focus:border-[#965EC7] transition-colors duration-300 placeholder:text-foreground/20";

  return (
    <section id="contato" className="w-full py-16 md:py-24 flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 justify-between items-start">

      {/* Left: Info */}
      <div className="w-full lg:w-[55%] flex flex-col">
        <span className="text-sm font-medium tracking-wider mb-5 md:mb-6 text-foreground/70">/ entre em contato /</span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 md:mb-8 leading-[1.1]">
          Estamos sempre prontos para ajudá-lo e tirar suas dúvidas
        </h2>

        <p className="text-foreground/70 text-base md:text-lg mb-10 md:mb-16 max-w-xl">
          Nossa equipe está à disposição para ouvir sobre seu projeto e entender como podemos potencializar os resultados do seu negócio no ambiente digital.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col">
            <Phone className="w-6 h-6 mb-3 text-foreground/80 stroke-[1.5]" />
            <h3 className="text-lg md:text-xl font-medium mb-3">Central de Atendimento</h3>
            <p className="text-foreground/70 text-sm">+55 69 9 8116-2676</p>
          </div>

          <div className="flex flex-col">
            <MapPin className="w-6 h-6 mb-3 text-foreground/80 stroke-[1.5]" />
            <h3 className="text-lg md:text-xl font-medium mb-3">Nossa Localização</h3>
            <p className="text-foreground/70 text-sm">Brasil, Porto Velho</p>
            <p className="text-foreground/70 text-sm">RO - Centro</p>
          </div>

          <div className="flex flex-col">
            <Mail className="w-6 h-6 mb-3 text-foreground/80 stroke-[1.5]" />
            <h3 className="text-lg md:text-xl font-medium mb-3">E-mail</h3>
            <a href="mailto:whysadmin@gmail.com" className="text-foreground/70 text-sm hover:text-[#965EC7] transition-colors">
              whysadmin@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <Share2 className="w-6 h-6 mb-3 text-foreground/80 stroke-[1.5]" />
            <h3 className="text-lg md:text-xl font-medium mb-3">Redes Sociais</h3>
            <div className="flex items-center gap-4 text-foreground/70">
              <a href="#" className="hover:text-[#965EC7] transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#965EC7] transition-colors"><TwitterIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#965EC7] transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#965EC7] transition-colors"><YoutubeIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#965EC7] transition-colors"><GithubIcon className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-[40%] flex flex-col mt-0">
        <h3 className="text-2xl md:text-3xl font-medium mb-2">Entre em Contato</h3>
        <p className="text-foreground/50 text-sm mb-10 md:mb-12">
          Defina seus objetivos e veja como podemos transformar sua visão em realidade digital.
        </p>

        <form id="contato-form" className="flex flex-col gap-8 w-full" onSubmit={handleWhatsApp}>

          {/* Nome */}
          <FormField label="Nome" id="nome">
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className={inputClass}
              required
              autoComplete="name"
            />
          </FormField>

          {/* E-mail */}
          <FormField label="E-mail" id="email">
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              required
              autoComplete="email"
            />
          </FormField>

          {/* Assunto */}
          <FormField label="Assunto" id="assunto">
            <input
              id="assunto"
              type="text"
              placeholder="Branding, Web Design, E-commerce…"
              value={formData.assunto}
              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              className={inputClass}
              required
            />
          </FormField>

          {/* Mensagem */}
          <FormField label="Mensagem" id="mensagem">
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Conte-nos sobre o seu projeto, objetivos e prazo esperado…"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className={`${inputClass} resize-none leading-relaxed`}
              required
            />
          </FormField>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: sending ? 1 : 1.02 }}
            whileTap={{ scale: sending ? 1 : 0.98 }}
            className="flex items-center justify-center gap-3 bg-foreground text-background rounded-full py-4 px-8 w-full sm:w-fit mt-2 text-sm font-medium transition-colors hover:bg-foreground/90 cursor-pointer disabled:opacity-60"
          >
            {sending ? (
              <>Abrindo WhatsApp…</>
            ) : (
              <>
                Enviar via WhatsApp
                <WhatsAppIcon className="w-4 h-4 text-background" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
