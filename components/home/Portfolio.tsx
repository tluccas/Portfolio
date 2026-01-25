"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerFadeUp } from "@/lib/gsapPresets";
import { ScrollTrigger } from "gsap/all";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "Astra Bot",
    image: "/cards/astra_card.png",
    link: "https://tluccas.github.io/AstraSite/",
    description:
      "Astra é um bot para Discord que possui IA integrada com um sistema de memória, permitindo que ela se comunique de forma amigável e coerente com o usuário.",
    badges: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        name: "Java",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        name: "Spring Boot",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
    ],
  },
  {
    title: "ChatBots com AI",
    image: "/cards/chatbot_card.png",
    link: "https://tluccas.github.io/site-chatbot/",
    description:
      "Desenvolvimento de Chatbots para diversas plataformas com IA integrada, totalmente adaptável para diversos tipos de negócios.",
    badges: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      { icon: "/techs_icons/express.svg", name: "Express" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
      { icon: "/techs_icons/javascript.svg", name: "JavaScript" },
    ],
  },
  {
    title: "Store API",
    image: "/cards/store_api_card.png",
    link: "https://github.com/tluccas/StoreAPI",
    description:
      "API RESTful projetada para fornecer toda a infraestrutura de back-end necessária para uma aplicação de e-commerce moderna.",
    badges: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
      { icon: "/techs_icons/express.svg", name: "Express" },
      { icon: "/techs_icons/javascript.svg", name: "JavaScript" },
    ],
  },
  {
    title: "CertiLink",
    image: "/cards/certilink_card.png",
    link: "https://github.com/tluccas/",
    description:
      "Aplicação Full Stack com Spring Boot + React que permite professores criar, gerenciar e gerar certificados personalizados de forma automátomatizada.",
    badges: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        name: "Java",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        name: "Spring Boot",
      },
      { icon: "/techs_icons/react.svg", name: "React" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
    ],
  },
  {
    title: "Vilma Plantas",
    image: "/cards/vilma_plantas_card.png",
    link: "https://github.com/tluccas/vilma-plantas-api",
    description:
      "E-commerce de plantas com backend em Node.js e frontend em React. Desenvolvido com foco em organização, performance, escalabilidade e segurança.",
    badges: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      { icon: "/techs_icons/react.svg", name: "React" },
      { icon: "/techs_icons/express.svg", name: "Express" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
    ],
  },
  {
    title: "MyFavGeo",
    image: "/cards/myfavgeo-card.png",
    link: "https://github.com/tluccas/myfavgeo-app",
    description:
      "Web App que te permite salvar seus lugares favoritos por meio do gerenciamento de mapas e pontos geograficos, com Frontend em React + Next e Backend em Laravel.",
    badges: [
      { icon: "/techs_icons/laravel-logo.svg", name: "Laravel" },
      { icon: "/techs_icons/react.svg", name: "React" },
      { icon: "/techs_icons/next-logo.svg", name: "Next" },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
      },
    ],
  },
];
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".project-card", {
      ...staggerFadeUp,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        toggleActions: "restart none none restart"
      },
    });
  });
  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 px-[4%] bg-dark shadow-[0_0_15px] shadow-primary/30"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="MEUS PROJETOS" highlight="PROJETOS" center />

        {/* Card Grid */}
        <div className="flex flex-wrap gap-10 justify-center mt-15">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                project-card
                group relative flex flex-col 
                w-70 h-112.5 
                bg-glass border border-white/15 rounded-4xl 
                overflow-hidden text-center text-white no-underline
                transition-shadow duration-300 
                hover:shadow-[0_0_30px_rgba(255,255,255,.6)]
              "
            >
              {/* Imagem Fixa */}
              <div className="w-full h-50 relative shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>

              {/* Título */}
              <h2 className="mt-3 mb-1 text-[1.2rem] font-bold px-4">
                {project.title}
              </h2>

              {/* Conteúdo */}
              <div className="flex flex-col px-4 pb-3 flex-1">
                <p className="text-[0.85rem] mb-3 text-white">
                  {project.description}
                </p>

                {/* Badges alinhados ao fundo (mt-auto) */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto pb-3">
                  {project.badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-center gap-1.5 px-3 py-2 
                        bg-white/10 border border-white/15 rounded-[10px] backdrop-blur-[6px]
                        text-white text-[12px] font-semibold 
                        transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/20
                      "
                    >
                      <Image
                        src={badge.icon}
                        alt={badge.name}
                        width={16}
                        height={16}
                        className="object-contain w-4 h-4"
                      />
                      <p className="m-0 text-[11px] leading-none">
                        {badge.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-center mt-10 text-[12px] transition-opacity duration-1000">
          Esses são apenas alguns dos projetos que desenvolvi; muitos outros
          podem ser explorados em meu{" "}
          <a
            href="https://github.com/tluccas"
            target="_blank"
            className="text-primary no-underline hover:text-white"
          >
            Github
          </a>
          .
        </p>
      </div>
    </section>
  );
}
