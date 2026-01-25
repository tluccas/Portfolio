"use client";
import { useState } from "react";
import { List, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const email = process.env.NEXT_PUBLIC_EMAIL_URL || "";
  const navItems = [
    { name: "Início", href: "#" },
    { name: "Especialidades", href: "#skills" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#portfolio" },
  ];

  return (
    <>
      {/* Container principal para centralização e flutuação */}
      <div className="fixed top-8 left-0 right-0 flex justify-center z-50 px-4">
        {/* Navbar Estilo Dock/Pílula */}
        <header
          className="
          bg-black/40 
          backdrop-blur-xl 
          border border-white/10 
          rounded-full 
          px-2 py-2 
          flex items-center 
          shadow-2xl
          min-w-max
        "
        >
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 rounded-full hover:bg-primary/20 hover:border-primary/50 hover:border"
              >
                {item.name}
              </a>
            ))}

            {/* Botão de Contato */}
            <div className="group relative">
              <a
                href={email}
                className="
                ml-2 
                px-8 py-3 
                text-sm font-semibold text-white 
                bg-white/10 
                border border-white/20 
                rounded-full 
                hover:bg-primary/20 
                hover:border-primary/50 
                hover:shadow-[0_0_15px] hover:shadow-primary/30
                transition-all duration-300
              "
              >
                Contato
              </a>
              <span className="absolute -bottom-10 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-xs text-white px-2 py-1 rounded">
                Email
              </span>
            </div>
          </nav>

          {/* Menu Mobile*/}
          <div className="md:hidden flex items-center px-4 py-2">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 text-gray-300"
            >
              <span className="text-xs uppercase tracking-widest font-bold">
                Menu
              </span>
              <List size={24} className="text-primary" />
            </button>
          </div>
        </header>
      </div>

      {/* Menu Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-60 flex items-start justify-center pt-24 px-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-8">
              <span className="text-cyan-400 font-bold tracking-tighter text-xl underline decoration-2 underline-offset-4">
                MENU - ALVES DEV
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white p-2"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-lg text-gray-300 hover:text-cyan-400 border-b border-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={email}
                onClick={() => setOpen(false)}
                className="mt-4 py-4 bg-primary text-black font-bold rounded-2xl hover:bg-cyan-400 transition-colors"
              >
                Entrar em Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
