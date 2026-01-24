import React from "react";
import Image from "next/image";
import { SocialButton } from "./ui/SocialButton";
const Footer = () => {

  const currentYear = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_EMAIL_URL || "";
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          {/* Coluna 1: Logo e Bio Curta */}
          <div className="flex flex-col space-y-4">
            {/* Logo Placeholder - Estilo baseado no header da imagem */}
            <div className="text-2xl font-bold text-white tracking-wide">
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Desenvolvendo soluções digitais personalizadas especialmente para
              você.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col space-y-4 md:items-end">
            <h3 className="text-white font-semibold text-lg">
              Vamos conversar?
            </h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <SocialButton
                href="https://www.linkedin.com/in/lucasalvesz/"
                icon="bi-linkedin"
                label="LinkedIn"
                className="bg-gray-800 hover:bg-primary hover:shadow-[0_0_15px] hover:shadow-primary/30 transition-all duration-300"
              />

              {/* GitHub */}
              <SocialButton
                href="https://github.com/tluccas/"
                icon="bi-github"
                label="GitHub"
                className="bg-gray-800 hover:bg-primary hover:shadow-[0_0_15px] hover:shadow-primary/30 transition-all duration-300"
              />

              {/* Email */}
              <SocialButton
                href={email}
                icon="bi-envelope-at-fill"
                label="Email"
                className="bg-gray-800 hover:bg-primary hover:shadow-[0_0_15px] hover:shadow-primary/30 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-gray-300 font-medium">Lucas Alves</span>.
            Todos os direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com <span className="text-cyan-400">React</span> &{" "}
            <span className="text-cyan-400">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
