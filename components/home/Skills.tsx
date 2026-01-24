"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import TypingText from "../ui/TypingText";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { staggerFadeUp } from "@/lib/gsapPresets";
import { CardsBackground } from "../ui/CardsBackground";

gsap.registerPlugin(ScrollTrigger);
const techIcons = [
  "/techs_icons/nodejs-logo.svg",
  "/techs_icons/javascript.svg",
  "/techs_icons/typescript.svg",
  "/techs_icons/express.svg",
  "/techs_icons/java-logo.svg",
  "/techs_icons/spring.svg",
  "/techs_icons/react.svg",
  "/techs_icons/sequelize.svg",
  "/techs_icons/includes-mysql-125x64-wob.png",
  "/techs_icons/pgsql.svg",
  "/techs_icons/html-5.svg",
  "/techs_icons/css-3.svg",
];

const duplicatedIcons = [...techIcons, ...techIcons];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !cardRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(cardRef.current.children, staggerFadeUp);
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-10 md:py-20 bg-dark px-[4%] md:px-[4%]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="MINHAS STACKS" highlight="STACKS" center className="md:mb-16 mb-16"/>

        {/* Carrossel */}
        <div className=" min-w-screen mb-16 w-screen">
          <div className="flex w-max animate-scroll hover:paused">
            {duplicatedIcons.map((icon, idx) => (
              <div
                key={idx}
                className="mx-7.5 flex items-center justify-center"
              >
                <Image
                  src={icon}
                  alt="Skill logo"
                  width={30}
                  height={30}
                  className="w-8.75 h-8.75 md:w-11.5 md:h-11.5 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Cards */}
        <div
          ref={cardRef}
          className="flex flex-col md:flex-row  gap-8 md:gap-8 px-3 md:px-0"
        >
          {/* Card 1: Desenvolvimento (Com Animação CSS Legada) */}
          <div className="relative border overflow-hidden z-index p-10 rounded-[25px] mt-10 transition-[transform,box-shadow] duration-1000 hover:shadow-[0_0_8px_rgba(255,255,255,0.726)] flex-1">
            <CardsBackground interactive={true} />
            <div className="relative z-10 pointer-events-none select-none">
              <i className="bi bi-code-square text-white text-[65px] mb-4 block "></i>
              {/* Classe 'txt-animado' puxa o CSS do globals.css */}
              <div className="">
                <h3 className="text-[26px] font-bold text-white my-3.75">
                  Desenvolvimento{" "}
                  <TypingText
                    words={["Node.js", "Spring Boot", "React", "Laravel"]}
                  />
                </h3>
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Desenvolvedor Full Stack Freelancer, com experiência em Node.js,
                React, Spring Boot, SQL, Java, JavaScript e TypeScript. Entrego
                soluções completas e adaptáveis.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative border overflow-hidden z-index p-10 rounded-[25px] mt-10 transition-[transform,box-shadow] duration-1000 hover:shadow-[0_0_8px_rgba(255,255,255,0.726)] flex-1">
            <CardsBackground interactive={true} />
            <div className="relative z-10 pointer-events-none select-none">
              <i className="bi bi-database text-white text-[65px] mb-4 block"></i>
              <h3 className="text-[26px] font-bold text-white my-3.75">
                Bancos de Dados
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Engenharia de dados, com foco na criação de estruturas
                consistentes e eficientes. Experiência prática com MySQL e
                PostgreSQL, além de bancos de dados NoSQL como MongoDB e Redis.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative border overflow-hidden z-index p-10 rounded-[25px] mt-10 transition-[transform,box-shadow] duration-1000 hover:shadow-[0_0_8px_rgba(255,255,255,0.726)] flex-1">
            <CardsBackground interactive={true} />
            <div className="relative z-10 pointer-events-none select-none">
              <i className="bi bi-person-workspace text-white text-[65px] mb-4 block"></i>
              <h3 className="text-[26px] font-bold text-white my-3.75">
                Soluções que entrego
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tenho experiência no desenvolvimento de plataformas completas,
                desde E-commerce até sistemas com IA. Trabalho com tecnologias
                modernas que garantem escalabilidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
